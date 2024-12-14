"use client"
import { usePathname } from "next/navigation"

export function BreadCrumb() {
  const pathname = usePathname()
  const pathList = pathname
    .split("/")
    .map((path) => (path === "" ? "Home" : path))

  return (
    <div>
      <ul className="flex items-center gap-2 text-xs lowercase p-4">
        {pathList.map((path) => (
          <li key={path}>{path}</li>
        ))}
      </ul>
    </div>
  )
}
