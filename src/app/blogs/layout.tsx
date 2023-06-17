import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="bg-graph absolute left-0 top-0 -z-20 h-48 w-full bg-gradient-to-b to-transparent"></div>
      <nav className="flex space-x-6 py-10">
        <Button variant="link" asChild className="pl-0">
          <Link href={"/"}>
            <Home className="mr-2 h-4 w-4" /> Home
          </Link>
        </Button>
      </nav>
      <article className="prose prose-neutral max-w-none dark:prose-invert">
        {children}
      </article>
    </main>
  );
}