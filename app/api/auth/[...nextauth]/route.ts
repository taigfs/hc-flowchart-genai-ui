import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { authOptions } from "./auth-options"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
