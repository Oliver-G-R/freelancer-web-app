import NextAuth from "next-auth"
import { NextResponse } from "next/server"
import authConfig from "./auth.config"
 
const { auth } = NextAuth(authConfig)

const developerRoutes = ['/post-project']

export default auth((req) => {
  const {nextUrl, auth}  = req
  const isLogged = !!req.auth

  console.log(auth?.user)

  if (!isLogged && developerRoutes.includes(nextUrl.pathname) && auth?.user.role !== 'DEVELOPER') {
    return NextResponse.redirect(new URL("/auth/login", nextUrl))
  }

  if(isLogged && nextUrl.pathname === '/auth/login') {
    return NextResponse.redirect(new URL("/", nextUrl))
  }

 
  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};