import { getBlogs } from "@/lib/get-blogs";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import remarkToc from "remark-toc";
import { type Options } from "rehype-pretty-code";

const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const blog = (await getBlogs()).find((blog) => blog.slug === params.slug);

  return {
    title: blog?.title,
  };
};

export default async function Blog({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();
  const currentBlog = blogs.find((blog) => blog.slug === params.slug);
  if (!currentBlog) return null;

  return (
    <>
      <p>{currentBlog.date}</p>
      <h1 className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text py-1 text-4xl font-black text-transparent dark:from-cyan-400 dark:to-blue-500 sm:text-5xl">
        {currentBlog.title}
      </h1>
      <div className="h-1 w-12 bg-blue-500 dark:bg-cyan-400" />
      <BlogMDX source={currentBlog.content} />
    </>
  );
}

const prettyCodeOptions: Partial<Options> = {
  theme: "one-dark-pro",
  keepBackground: true,
};

function BlogMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkA11yEmoji,
            [
              remarkToc,
              {
                tight: true,
                maxDepth: 5,
              },
            ],
          ],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            [rehypePrettyCode, prettyCodeOptions],
          ],
        },
      }}
    />
  );
}
