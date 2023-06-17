import classNames from "classnames";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Brandon's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
        )}
      >
        {children}
      </body>
    </html>
  );
}
