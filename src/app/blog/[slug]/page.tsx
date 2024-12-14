import { BreadCrumb } from "@/components/breadcrumb"
import { Post } from "@/lib/types/definitions"

// revalidation de la page côté serveur toutes les 3600 secondes
export const revalidate = 3600

/* Cette fonction permet de générer au build toutes les pages fetch
Cela améliore considérablement les performances et le SEO
A utiliser uniquement pour des pages "statiques" avec peu de contenus personnalisé

La revalidation n'est pas nécessaire mais montré ici pour la démo.
*/

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/blog").then(
    (res) => res.json()
  )
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({
  params, // params est un props spéciale de next
}: {
  params: Promise<{ slug: string }> // ce props est asynchrone
}) {
  const slug = (await params).slug // important de faire un await du slug vu que c'est une promesse
  const posts: Post[] = await fetch("http://localhost:3000/api/blog", {
    cache: "force-cache", // forcer en mémoire la data, redondant avec generateStaticParams
  }).then((res) => res.json())

  const post = posts.find((post) => post.slug === slug)! // force non null, mais privilégier un fallback

  return (
    <>
      <BreadCrumb />
      <main className="flex flex-col items-center justify-center">
        <div className="max-w-prose">
          <h1 className="text-2xl mt-8 font-bold">{post.title}</h1>
          <p className="mt-4">{post.content}</p>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            labore vero est rem magni dicta laborum accusantium magnam.
            Perspiciatis dolore fugiat in accusantium quis voluptatem quod
            assumenda tenetur aperiam cum ipsum, aut molestias velit est sunt
            similique beatae quas minima. Quasi deleniti optio, quibusdam beatae
            libero cumque a iusto quo!
          </p>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            labore vero est rem magni dicta laborum accusantium magnam.
            Perspiciatis dolore fugiat in accusantium quis voluptatem quod
            assumenda tenetur aperiam cum ipsum, aut molestias velit est sunt
            similique beatae quas minima. Quasi deleniti optio, quibusdam beatae
            libero cumque a iusto quo!
          </p>
        </div>
      </main>
    </>
  )
}
