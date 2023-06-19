import { getBlogs } from "@/lib/get-blogs";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

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
  console.log("blog render");

  return (
    <>
      <p>{currentBlog.date}</p>
      <h1>{currentBlog.title}</h1>
      <BlogMDX source={currentBlog.content} />
    </>
  );
}

function BlogMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
