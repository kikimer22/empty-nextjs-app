import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@/app/generated/prisma';
import crypto from 'crypto';

function toBase64(buf: Buffer) {
  return buf.toString('base64');
}

export async function hashPassword(password: string): Promise<string> {
  const N = 16384;
  const r = 8;
  const p = 1;
  const keyLen = 64;
  const salt = crypto.randomBytes(16);
  const derivedKey: Buffer = await new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, keyLen, { N, r, p }, (err, dk) => {
      if (err) reject(err); else resolve(dk as Buffer);
    });
  });
  return `scrypt${'$'}${N}${'$'}${toBase64(salt)}${'$'}${toBase64(derivedKey)}`;
}

async function verifyPassword(password: string, stored: string | null | undefined): Promise<boolean> {
  if (!stored) return false;
  try {
    const [algo, nStr, saltB64, hashB64] = stored.split('$');
    if (algo !== 'scrypt') return false;
    const N = parseInt(nStr, 10) || 16384;
    const r = 8;
    const p = 1;
    const keyLen = Buffer.from(hashB64, 'base64').length;
    const salt = Buffer.from(saltB64, 'base64');
    const derivedKey = await new Promise<Buffer>((resolve, reject) => {
      crypto.scrypt(password, salt, keyLen, { N, r, p }, (err, dk) => {
        if (err) reject(err);
        else resolve(dk as Buffer);
      });
    });
    return crypto.timingSafeEqual(Buffer.from(hashB64, 'base64'), derivedKey);
  } catch {
    return false;
  }
}

const prisma = new PrismaClient();
export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = (credentials?.email as string | undefined)?.trim();
        const password = credentials?.password as string | undefined;

        if (!email || !password) return null;

        try {
          const existingUser = await prisma.user.findUnique({ where: { email } });

          console.log('existingUser', existingUser);

          if (!existingUser || !existingUser.password) return null;

          const ok = await verifyPassword(password, existingUser.password);

          console.log('ok:', ok);

          if (!ok) return null;

          return existingUser;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.image = user.image ?? (token as Record<string, unknown>).image;
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      if (!account) return true;
      const provider = account.provider;
      if (provider === 'credentials') return true;
      const email = user.email!;
      const existingUser = await prisma.user.findUnique({ where: { email } });

      console.log('existingUser', existingUser);
      console.log('user', user);
      console.log('profile', profile);

      if (existingUser) {
        await prisma.account.upsert({
          where: {
            provider_providerAccountId: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          },
          update: {},
          create: {
            userId: existingUser.id,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            type: account.type,
          },
        });

        const emailLocal = email.split('@')[0];
        let newName: string | null | undefined = user.name ?? profile?.name as string ?? existingUser.name ?? profile?.login as string ?? emailLocal;
        let newImage: string | null | undefined = user.image ?? profile?.picture as string ?? profile?.avatar_url as string ?? existingUser.image ?? null;
        if (provider === 'google') {
          if (profile?.name) {
            newName = profile.name as string;
          }
          if (profile?.picture) {
            newImage = profile.picture as string;
          }
        } else if (provider === 'github') {
          if (profile?.name) {
            newName = profile.name as string;
          }
          if (profile?.avatar_url) {
            newImage = profile.avatar_url as string;
          }
        }

        await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            name: newName,
            image: newImage,
          },
        });

        return true;
      }

      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        const tokenImage = (token as Record<string, unknown>).image as string | undefined;
        session.user.image = tokenImage ?? session.user.image ?? null;
      }
      return session;
    },
  },
});
