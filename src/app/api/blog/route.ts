import { Post } from "@/lib/types/definitions"
import { NextResponse } from "next/server"

const blogPosts: Post[] = [
  {
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    content:
      "Web development is evolving rapidly with new frameworks, tools, and technologies. Here's what to expect in the coming years...",
  },
  {
    title: "10 Tips for Writing Clean Code",
    slug: "writing-clean-code",
    content:
      "Writing clean code is an essential skill for any developer. In this article, we'll share 10 practical tips to improve your code quality.",
  },
  {
    title: "Understanding TypeScript",
    slug: "understanding-typescript",
    content:
      "TypeScript has become a popular choice for JavaScript developers. Learn why it's so powerful and how you can start using it in your projects.",
  },
  {
    title: "How to Optimize Your React App",
    slug: "optimize-react-app",
    content:
      "Performance optimization is key for user experience. Discover techniques to make your React apps faster and more efficient.",
  },
  {
    title: "A Beginner's Guide to Next.js",
    slug: "beginners-guide-nextjs",
    content:
      "Next.js is a React framework for building server-rendered and static web applications. This guide will help you get started with ease.",
  },
]

export async function GET() {
  return NextResponse.json(blogPosts)
}
