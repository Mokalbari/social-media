"use client"

import { SessionProvider } from "next-auth/react"

type Props = {
  children: React.ReactNode
}

export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>
}

/* Sessionprovider est un composant qui wrap le context de React
c'est un composant client. Il est important donc de le wrapper dans AuthProvider
pour spécifier qu'il s'agit bien d'un composant client, avant de l'utiliser dans un layout
ou sur un groupe de routes. */
