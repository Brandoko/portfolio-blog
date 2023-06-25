import { getBlogs } from "@/lib/get-blogs";
import { FolderGit2, MessageSquare } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 sm:flex-row">
      <aside className="top-0 max-h-screen py-10 sm:sticky sm:w-1/2 sm:py-24">
        <div className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
          👋 😎 I&apos;m
        </div>
        <h1 className="mb-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text py-1 text-4xl font-black tracking-tight text-transparent dark:from-cyan-400 dark:to-blue-500 sm:text-5xl">
          Brandon Kocur
        </h1>
        <h2 className="mb-4 text-lg font-bold text-neutral-800 dark:text-neutral-200 sm:mb-10">
          A Full Stack Software Engineer
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Passion for UI interfaces, DX tooling, AI frameworks, and Open Source.
        </p>
      </aside>
      <main className="ml-auto flex flex-col gap-8 pb-10 sm:w-1/2 sm:py-24">
        <Projects />
        <Blogs />
      </main>
    </div>
  );
}

function Projects() {
  return (
    <section>
      <div className="flex flex-col px-4">
        <FolderGit2 className="mb-4" />
        <h2 className="mb-4 text-lg font-bold">Projects</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Project
          title="My Personal Website/Blog"
          description="Built with Next.js (App Router) and MDX for easy and clean blogging."
          link="https://github.com/Brandoko/portfolio-blog"
        />
        <Project
          title="Dev Blog Starter"
          description="Code from the Next.js + MDX Blog tutorial."
          link="https://github.com/Brandoko/nextjs-mdx-blog-starter"
        />
      </div>
    </section>
  );
}

function Project({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <ClickableContainer href={link} target="_blank">
      <h3 className="mb-2 font-bold">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
    </ClickableContainer>
  );
}

async function Blogs() {
  const blogs = await getBlogs();

  return (
    <section>
      <div className="flex flex-col px-4">
        <MessageSquare className="mb-4" />
        <h2 className="mb-4 text-lg font-bold">Blogs</h2>
      </div>

      <div className="flex flex-col gap-2">
        {blogs.map((blog) => (
          <BlogPost
            key={blog.slug}
            slug={blog.slug}
            title={blog.title}
            date={blog.date}
          />
        ))}
      </div>
    </section>
  );
}

function BlogPost({
  slug,
  title,
  date,
}: {
  slug: string;
  title: string;
  date: string;
}) {
  return (
    <ClickableContainer href={`/blogs/${slug}`}>
      <h3 className="mb-2 font-bold">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400">{date}</p>
    </ClickableContainer>
  );
}

function ClickableContainer({
  children,
  href,
  target,
}: {
  children: ReactNode;
  href: Url;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 hover:bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    >
      {children}
    </Link>
  );
}
