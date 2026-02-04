import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const proxy = async (request: NextRequest) => {
  const token = request.cookies.get('token')?.value

  const { pathname } = request.nextUrl

  // These are protected routes
  if (pathname === '/') {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // If we're already logged in, redirect to home page
  if (pathname === '/login') {
    const cookieStore = await cookies()
    cookieStore.delete('token')
    return NextResponse.next()
    // return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
