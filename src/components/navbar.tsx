import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="mb-10 flex space-x-6">
      <Button variant="secondary" asChild>
        <Link href={"/"}>
          <Home className="mr-2 h-4 w-4" /> Home
        </Link>
      </Button>
      <ThemeToggle />
    </nav>
  );
}
