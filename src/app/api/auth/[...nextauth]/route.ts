import { prisma } from "@/lib/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

/* La route + slug permet de catch toutes les routes get psot signin signout par nextauth
Le fichier de configuration est simple : rajouter les providers
dans le .env se situent toute les clés pour les API nécessaires*/

/* L'adaptateur prisma permet de faire le pont entre Next Auth et la base de données neon + prisma
Le prisma adaptateur vient avec un model de base à remplir dans ./prisma/schema.prisma
Ce model peut être récupérer sur : https://next-auth.js.org/v3/adapters/prisma
*/
