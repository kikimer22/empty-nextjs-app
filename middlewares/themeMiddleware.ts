import { type NextRequest, NextResponse } from 'next/server';

const DEFAULT_THEME = 'light';

export function themeMiddleware(request: NextRequest) {
  const themeCookie = request.cookies.get('theme')?.value;
  const theme = themeCookie ?? DEFAULT_THEME;

  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });

  response.headers.set('x-theme', theme);

  if (!themeCookie) {
    response.cookies.set('theme', theme, {
      path: '/',
      sameSite: 'lax',
      httpOnly: false,
      // secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
