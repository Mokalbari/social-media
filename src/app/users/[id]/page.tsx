import { prisma } from "@/lib/prisma"
import { Metadata } from "next"
import Link from "next/link"

/* Ce composant étant entièrement dynamique, il n'est pas recommandé d'hard coder les meta data
Il est possible de créer une fonction async qui permet de générer des metadata dynamiquement.

Cette f() prend en props params qui est typé avec Props et renvoie une promesse de type Metadata
A l'intérieur, il est possible de fetch les données et de renvoyer un objet contenant les meta data dynamiques.
*/

export async function generateMetadate({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: { id: (await params).id },
  })

  return { title: `User profile of ${user?.name}` }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: (await params).id },
    })

    if (!user) {
      return (
        <div>
          <h1 className="p-4">User not found</h1>
          <Link
            className="p-2 bg-blue-500 text-white mt-8 rounded-sm"
            href={"/users"}
          >
            Go back to users.
          </Link>
        </div>
      )
    }

    // Grâce à l'utilisation du try catch, il est possible de tester conditionnellement si les params sont valides
    // Ensuite, de destructurer les params pour les réutiliser plus facilement.
    const { name, bio, image } = user

    return (
      <div>
        <h1>{name}</h1>
        {!!bio && <p>{bio}</p>}
        {!!image && <img src={image} alt={`Photo of ${name || "visitor"}`} />}

        <Link
          className="p-2 bg-blue-500 text-white mt-8 rounded-sm"
          href={"/users"}
        >
          Go back to users.
        </Link>
      </div>
    )
  } catch (error) {
    console.error("Error fetching user:", error)
    return (
      <div>
        <h1>Error fetching user</h1>
        <Link
          className="p-2 bg-blue-500 text-white mt-8 rounded-sm"
          href={"/users"}
        >
          Go back to users.
        </Link>
      </div>
    )
  }
}
