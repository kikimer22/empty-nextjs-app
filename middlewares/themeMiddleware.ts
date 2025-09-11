import { type NextRequest, NextResponse } from 'next/server';

export function themeMiddleware(request: NextRequest) {
  const themeCookie = request.cookies.get('theme')?.value;
  const theme = themeCookie ?? 'light';

  const response = NextResponse.next();
  response.headers.set('x-theme', theme);

  if (!themeCookie) {
    response.cookies.set('theme', theme, { path: '/', sameSite: 'lax' });
  }

  return response;
}
