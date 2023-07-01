import classNames from "classnames";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Brandon Kocur",
    default: "Brandon Kocur",
  },
  description: "Full-stack developer.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
  openGraph: {
    title: "Brandon Kocur",
    description: "Full-stack developer.",
    url: "https://brandonkocur.dev",
    siteName: "Brandon Kocur's site",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Brandon Kocur",
    card: "summary_large_image",
    creator: "@brandon_kocur",
  },
  icons: {
    shortcut: "https://brandonkocur.dev/favicon.ico",
  },
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
        <div className="absolute inset-x-0 -z-50 h-[1000px] overflow-hidden">
          <div className="blob-1 absolute -right-24 h-48 w-48 opacity-80 md:h-96 md:w-96" />
        </div>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
