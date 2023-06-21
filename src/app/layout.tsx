import classNames from "classnames";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(
          inter.className,
          "bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
