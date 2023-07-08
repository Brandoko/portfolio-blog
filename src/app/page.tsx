import Navbar from "@/components/navbar";
import { getBlogs } from "@/lib/get-blogs";
import { FolderGit2, MessageSquare } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Navbar />
      <main className="flex flex-col gap-10 sm:flex-row">
        <section className="top-0 max-h-screen sm:sticky md:w-1/2">
          <div className="mb-4 text-lg font-bold text-neutral-800 dark:text-neutral-200">
            👋 😎 I&apos;m
          </div>
          <ProfilePictureCard />
          <h2 className="mb-4 mt-8 text-lg font-bold text-neutral-800 dark:text-neutral-200">
            A Full Stack Software Engineer
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            I like UI/UX, DX tooling, AI frameworks, and learning/blogging about
            interesting stuff.
          </p>
        </section>
        <div className="ml-auto flex flex-col gap-8 md:w-1/2">
          <Projects />
          <Blogs />
        </div>
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

      <div className="flex flex-col gap-4">
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

function ProfilePictureCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src="/bg.png"
        alt="background pattern"
        width={900}
        height={400}
        priority
        className="h-48 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900" />
      <div className="absolute inset-4 flex items-center justify-between">
        <h1 className="ml-4 text-4xl font-black tracking-tight text-white md:text-5xl">
          Brandon Kocur
        </h1>
        <Image
          src="/pfp.jpg"
          alt="profile picture"
          width={400}
          height={400}
          priority
          className="h-16 w-16 rounded-full border-2 border-slate-50 object-cover md:h-24 md:w-24"
        />
      </div>
    </div>
  );
}
