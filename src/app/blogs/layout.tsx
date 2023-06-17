import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="bg-graph absolute left-0 top-0 -z-20 h-48 w-full bg-gradient-to-b to-transparent"></div>
      <nav className="flex space-x-6 py-10">
        <div className="rounded-lg bg-blue-600 px-4 py-2 text-blue-100">
          Home
        </div>
      </nav>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        {children}
      </article>
    </main>
  );
}
