import { getBlogs } from "@/lib/get-blogs";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogs();
  const blogs = posts.map((post) => ({
    url: `https://www.brandonkocur.dev/blogs/${post.slug}`,
  }));

  const routes = [""].map((route) => ({
    url: `https://www.brandonkocur.dev${route}`,
  }));

  return [...routes, ...blogs];
}
