import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import db from '@/db';
import { HashPassword } from "./utils/hashPassword";
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [ 
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.

      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string, password: string }

        const user = await db.user.findUnique({
          where: {
            email
          }
        })

        if (!user) {
          throw new Error('Usuario no encontrado')
        }

        const matchPassword = HashPassword.comparePassword(password, user.password)

        if (!matchPassword) {
          throw new Error('Credenciales no validas')
        }

        return user
      },
    }),],
} satisfies NextAuthConfig

