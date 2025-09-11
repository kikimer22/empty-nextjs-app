import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from '@/middlewares/authMiddleware';
import { requestHeadersMiddleware } from '@/middlewares/requestHeadersMiddleware';
import { themeMiddleware } from '@/middlewares/themeMiddleware';

export default async function middleware(request: NextRequest) {
  const middlewares = [authMiddleware, requestHeadersMiddleware, themeMiddleware];

  for (const fn of middlewares) {
    const result = await fn(request);
    if (result) return result;
  }

  return NextResponse.next();
}
