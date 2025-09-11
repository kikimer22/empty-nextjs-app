'use server';

import { hashPassword, signIn, signOut } from '@/auth';
import { prisma } from '@/lib/prisma';
import type { ActionResult } from '@/lib/types';
import { ROUTES } from '@/constants/routes';

export const logInWithGithub = async () => {
  await signIn('github', { redirect: true, redirectTo: ROUTES.USER_INFO });
};

export const logInWithGoogle = async () => {
  await signIn('google', { redirect: true, redirectTo: ROUTES.USER_INFO });
};

// ===============================================================================

export const signInWithCredentials = async (
  _: ActionResult | undefined,
  formData: FormData
): Promise<ActionResult> => {
  const email = (formData.get('email') as string | null)?.trim() ?? '';
  const password = (formData.get('password') as string | null) ?? '';

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    await signIn('credentials', { email, password, redirect: false });

    return { ok: true, redirectTo: ROUTES.USER_INFO };
  } catch (error) {
    console.error(error);

    type KnownError = { type?: string; name?: string; code?: string } | Error;
    const e = error as KnownError;
    const type = (('type' in e && e.type) || ('name' in e && e.name) || ('code' in e && e.code) || '') as string;
    if (
      type === 'CallbackRouteError' ||
      type === 'CredentialsSignin' ||
      String(error).includes('CredentialsSignin')
    ) {
      return { error: 'User not found or incorrect password. Please sign up.' };
    }
    return { error: 'Server error. Please try again later.' };
  }
};

// ===============================================================================

export const signUpWithCredentials = async (
  _: ActionResult | undefined,
  formData: FormData
): Promise<ActionResult> => {
  const email = (formData.get('email') as string | null)?.trim();
  const password = formData.get('password') as string | null;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return await signInWithCredentials(undefined, formData);
    }
  } catch (error) {
    console.error(error);
    return { error: 'Check email or password.' };
  }

  const hashed = await hashPassword(password);

  try {
    await prisma.user.create({ data: { email, password: hashed } });
  } catch (error) {
    console.error(error);
    return { error: 'Server error (!create). Please try again later.' };
  }

  return await signInWithCredentials(undefined, formData);
};

// ===============================================================================

export const logOut = async () => {
  await signOut({ redirect: true, redirectTo: ROUTES.SIGN_IN });
};
