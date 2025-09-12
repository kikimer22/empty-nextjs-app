import { NextRequest, NextResponse } from 'next/server';
import { urlMiddleware } from '@/middlewares/urlMiddleware';
import { themeMiddleware } from '@/middlewares/themeMiddleware';

export default async function middleware(request: NextRequest) {
  const middlewares = [urlMiddleware, themeMiddleware];

  for (const fn of middlewares) {
    const result = await fn(request);
    if (result) return result;
  }

  return NextResponse.next();
}
