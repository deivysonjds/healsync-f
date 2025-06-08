import { NextResponse } from 'next/server'
import { validateToken } from './services/validateTokenService'

export async function middleware(request) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  let isAcess = await validateToken(token)
  
  if(!isAcess){
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/pages/:path*'],
}
