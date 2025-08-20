// middleware.ts — disabled (pass-through)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

// Empty matcher = middleware won't run on any route
export const config = { matcher: [] };
