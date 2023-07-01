import { getBlogs } from "@/lib/get-blogs";

export default async function sitemap() {
  const posts = await getBlogs();
  const blogs = posts.map((post) => ({
    url: `https://brandonkocur.dev/blogs/${post.slug}`,
  }));

  const routes = [""].map((route) => ({
    url: `https://brandonkocur.dev${route}`,
  }));

  return [...routes, ...blogs];
}
