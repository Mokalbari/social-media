import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Page() {
  /* 
    Il est possible de récupérer les informations d'authentification d'un utilisateur
    dans un composant côté serveur grâce à ce hook
    */
  const session = await getServerSession()

  // Si la session n'existe pas, la page /dashboard est interdite d'accès et user est redirigé vers login
  if (!session) {
    redirect("/api/auth/signin")
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
    </main>
  )
}
