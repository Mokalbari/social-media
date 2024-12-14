"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

/* La f() sign in est plus complexe.
On doit récupérer les informations sur la session et le status de l'utilisateur
En fonction, en renvoie du jsx (loading, erreur..., boutton)

useSession est un hook qui tire parti du contexte. Donc à invoquer dans un composant client.*/
export function SignInButton() {
  const { data: session, status } = useSession()

  if (status === "loading") return <>...</>

  if (status === "authenticated") {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? "/ancestor.jpg"} // Si pas d'image github ou erreur, fallback
          width={32}
          height={32}
          alt={session.user?.name || "Visitor"}
          style={{ borderRadius: "50%" }}
        />
      </Link>
    )
  }

  return <button onClick={() => signIn()}>Sign In</button>
}

/* next auth fournit des fonction de sign in sign out
La fonction sign out est relativement simple. Elle doit juste être appelée dans une f() anonyme */
export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>
}
