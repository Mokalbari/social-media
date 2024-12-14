import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "React Space | About us",
  description: "About React Space",
}

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-prose">
        <h1 className="font-bold text-2xl mt-8">About page</h1>
        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ipsum
          itaque reiciendis libero omnis hic mollitia iusto! Assumenda, odio
          repellat vel nemo excepturi quibusdam! Nam, libero incidunt numquam
          blanditiis excepturi dolores saepe nostrum illo porro facilis quos
          rerum accusamus provident veniam voluptas in quae vitae, aliquam
          suscipit quia officiis odit.
        </p>
      </div>
    </main>
  )
}
