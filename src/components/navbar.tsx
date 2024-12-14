import Image from "next/image"
import Link from "next/link"
import { SignInButton, SignOutButton } from "./button"

export function Navbar() {
  return (
    <nav className="bg-blue-500 flex items-center justify-between text-white font-bold p-4">
      <Link href={"/"}>
        <div className="max-w-14">
          <Image
            src="/react.svg"
            alt="React space logo"
            width={800}
            height={800}
          />
        </div>
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  )
}
