import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from '@/constants/routes';

const protectedRoutes = [ROUTES.USER_INFO];

export async function authMiddleware(request: NextRequest): Promise<NextResponse | null> {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtected && !session) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, request.url));
  }

  return null;
}
