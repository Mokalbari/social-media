import { BreadCrumb } from "@/components/breadcrumb"
import { Post } from "@/lib/types/definitions"

export const revalidate = 3600

export async function generateStaticParams() {
  const posts: Post[] = await fetch("http://localhost:3000/api/blog").then(
    (res) => res.json()
  )
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const posts: Post[] = await fetch("http://localhost:3000/api/blog", {
    cache: "force-cache",
  }).then((res) => res.json())

  const post = posts.find((post) => post.slug === slug)!

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
