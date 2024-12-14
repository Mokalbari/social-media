import { Post } from "@/lib/types/definitions"
import Link from "next/link"

export default async function Page() {
  const response = await fetch("http://localhost:3000/api/blog", {
    cache: "force-cache",
  })
  const posts: Post[] = await response.json()

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-prose">
        <h1 className="font-bold text-2xl mt-8">Welcome to the blog</h1>
        <p>Find some interesting articles to read.</p>
        <ul className="flex flex-col space-y-2 mt-4">
          {posts.map((post) => (
            <li className="hover:underline" key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
