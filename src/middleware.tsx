import { cookies } from 'next/headers';
import { NextResponse, NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
    const response = NextResponse.next();

    response.cookies.set('current-path', request.nextUrl.pathname);

    return response;
}

export const config = {
    matcher: '/:path*', 
};