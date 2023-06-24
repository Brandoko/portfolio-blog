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
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={classNames(
          inter.className,
          "bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
        )}
      >
        <div className="absolute inset-x-0 top-0 -z-50 h-[1000px] overflow-hidden">
          <div className="blob-1 absolute -right-24 h-32 w-32 opacity-80 md:h-96 md:w-96" />
        </div>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
