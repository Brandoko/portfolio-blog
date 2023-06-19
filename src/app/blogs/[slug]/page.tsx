import { getBlogs } from "@/lib/get-blogs";
import BlogPost from "./blog-post";

const dynamicParams = false;
export { dynamicParams };

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();
  const currentBlog = blogs.find((blog) => blog.slug === params.slug);
  if (!currentBlog) return null;

  return <BlogPost>{currentBlog.content}</BlogPost>;
}
