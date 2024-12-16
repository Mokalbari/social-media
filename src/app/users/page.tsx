import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function Page() {
  // Dé-commenter la ligne suivante pour tester le composant erreur.
  // throw new Error("This is a custom error")
  const users = await prisma.user.findMany()

  return (
    <div>
      <h1>Here are a list of all of our users</h1>
      <ul>
        {users.map((user) => (
          <li className="hover:underline" key={user.id}>
            <Link href={`users/${user.id}`}>
              {user.name} {user.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
