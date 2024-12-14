import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
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
