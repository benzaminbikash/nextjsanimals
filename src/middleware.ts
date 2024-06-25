import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    const url = request.nextUrl
    if (token && (url.pathname.startsWith('/login') || url.pathname.startsWith('/register'))) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (!token && (url.pathname.startsWith('/dashboard'))) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/login', '/register', '/dashboard']
}