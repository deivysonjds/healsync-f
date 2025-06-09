import { NextResponse } from 'next/server'
import Cookies from 'js-cookie'
import { isTokenValid } from './services/isValidToken'

export async function middleware(request) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  let isAcess = isTokenValid(token)
  
  if(!isAcess){
    Cookies.remove('token')
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/pages/:path*'],
}
