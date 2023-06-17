import { getBlogs } from "@/services/blogsService";
import { FolderGit2, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl gap-8">
      <aside className="sticky top-0 max-h-screen w-1/2 py-24">
        <h1 className="mb-2 text-5xl font-bold text-sky-500">Brandon Kocur</h1>
        <h2 className="mb-10 text-lg font-bold text-neutral-800 dark:text-neutral-200">
          Full Stack Software Engineer
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          Passion for UI interfaces, DX tooling, and Open Source.
        </p>
      </aside>
      <main className="ml-auto flex h-[3000px] w-1/2 flex-col gap-8 py-24">
        <section>
          <div className="flex flex-col px-4">
            <FolderGit2 className="mb-4" />
            <h2 className="mb-4 text-lg font-bold text-neutral-800">
              Projects
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <Project
              title="Portfolio/Blog"
              description="Open Source Portfolio/Blog template built with Next.js (App Router) and MDX for fast and clean blogging."
            />
          </div>
        </section>
        <BlogsSection />
      </main>
    </div>
  );
}

async function BlogsSection() {
  const blogs = await getBlogs();

  return (
    <section>
      <div className="flex flex-col px-4">
        <MessageSquare className="mb-4" />
        <h2 className="mb-4 text-lg font-bold text-neutral-800">Blogs</h2>
      </div>

      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <BlogPost key={blog} slug={blog} />
        ))}
      </div>
    </section>
  );
}

function Project({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-transparent p-4 shadow-neutral-200 hover:border-neutral-200 hover:bg-neutral-100 hover:shadow-xl dark:hover:border-neutral-600 dark:hover:bg-neutral-800">
      <h3 className="text-netural-700 mb-2 font-bold">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}

function BlogPost({ slug }: { slug: string }) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="rounded-lg border border-transparent p-4 shadow-neutral-200 hover:border-neutral-200 hover:bg-neutral-100 hover:shadow-xl dark:hover:border-neutral-600 dark:hover:bg-neutral-800">
        <h3 className="text-netural-700 font-bold">{slug}</h3>
      </div>
    </Link>
  );
}
