import NextAuth from "next-auth"
import { NextResponse } from "next/server"
import authConfig from "./auth.config"
 
const { auth } = NextAuth(authConfig)

const developerRoutes = ['/post-project']

export default auth((req) => {
  const {nextUrl, auth}  = req
  const isLogged = !!req.auth
  if (!isLogged && developerRoutes.includes(nextUrl.pathname) && auth?.user.role !== 'DEVELOPER') {
    return NextResponse.redirect(new URL("/auth/login", nextUrl))
  }

  //  si esta logeado y el pathname coincide con algo que empiece con /auth/*, redirigir a la raiz
  if(isLogged && nextUrl.pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL("/", nextUrl))
  }

 
  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};