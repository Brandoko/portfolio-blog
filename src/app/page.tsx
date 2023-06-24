import { getBlogs } from "@/lib/get-blogs";
import { FolderGit2, MessageSquare } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl gap-8">
      <aside className="sticky top-0 max-h-screen w-1/2 py-24">
        <h1 className="mb-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text py-1 text-4xl font-black tracking-tight text-transparent dark:from-cyan-400 dark:to-blue-500 sm:text-5xl">
          Brandon Kocur
        </h1>
        <h2 className="mb-10 text-lg font-bold text-neutral-800 dark:text-neutral-200">
          Full Stack Software Engineer
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Passion for UI interfaces, DX tooling, and Open Source.
        </p>
      </aside>
      <main className="ml-auto flex w-1/2 flex-col gap-8 py-24">
        <section>
          <div className="flex flex-col px-4">
            <FolderGit2 className="mb-4" />
            <h2 className="mb-4 text-lg font-bold">Projects</h2>
          </div>
          <div className="flex flex-col gap-4">
            <Project
              title="Portfolio/Blog"
              description="Open Source Portfolio/Blog built with Next.js (App Router) and MDX for fast and clean blogging."
              link="https://github.com/Brandoko/portfolio-blog"
            />
          </div>
        </section>
        <Blogs />
      </main>
    </div>
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
    <ClickableContainer href={link}>
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
}: {
  children: ReactNode;
  href: Url;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-neutral-200 bg-neutral-100 p-4 hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    >
      {children}
    </Link>
  );
}
