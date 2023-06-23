import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto my-12 max-w-3xl">
      <nav className="mb-10 flex space-x-6">
        <Button variant="link" asChild className="pl-0">
          <Link href={"/"}>
            <Home className="mr-2 h-4 w-4" /> Home
          </Link>
        </Button>
      </nav>
      <article className="prose prose-neutral mb-12 max-w-none dark:prose-invert">
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
