import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto my-12 max-w-3xl px-2">
      <Navbar />
      <article className="prose prose-slate mb-12 max-w-none dark:prose-invert">
        {children}
      </article>
      <BlogFooter />
    </main>
  );
}

function BlogFooter() {
  return (
    <footer className="border-l-2 border-blue-400 pl-2">
      <span className="font-bold">Written by Brandon Kocur</span>, just a
      software engineer who finds joy in developing UI interfaces and AI
      frameworks. Here&apos;s to learning and growing together.
    </footer>
  );
}
