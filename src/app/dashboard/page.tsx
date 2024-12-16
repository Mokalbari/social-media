import { ProfileForm } from "@/components/profile-form"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function Page() {
  /* 
    Il est possible de récupérer les informations d'authentification d'un utilisateur
    dans un composant côté serveur grâce à ce hook
    */
  const session = await getServerSession(authOptions)

  // Si la session n'existe pas, la page /dashboard est interdite d'accès et user est redirigé vers login
  if (!session) {
    redirect("/api/auth/signin")
  }

  const currentUserEmail = session.user?.email
  console.log(currentUserEmail)
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail! },
  })

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    }

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })

    await res.json()
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="max-w-prose">
        <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
        <h2 className="text-xl font-bold mt-4">
          How are you today, {session.user?.name} ?
        </h2>
        <p className="mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          tempora distinctio magnam deleniti dolore numquam eaque dolorum!
          Repellendus iusto et, esse reiciendis, assumenda accusantium voluptate
          tempora enim accusamus non amet nostrum recusandae, illum tenetur ad
          minus omnis. At aut, quibusdam, incidunt est nostrum suscipit atque
          quas esse, tempore eaque quos?
        </p>
      </div>
      <ProfileForm />
    </main>
  )
}
