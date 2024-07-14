import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
import authConfig from "./auth.config"
import db from '@/db';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: {strategy: "jwt"},
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
        token.email = user.email
        token.role = user.role
      }
      return token
    },
    session({ session, token }) {
      if(session.user){
        session.user.id = token.id
        session.user.email = token.email
        session.user.role = token.role
      }
      return session
    },
  },
})