import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

type BlogData = {
  title: string;
  date: string;
  image: string;
  content: string;
  slug: string;
};

export async function getBlogs(): Promise<BlogData[]> {
  const blogsDir = "src/blogs";
  const files = await fs.readdir(blogsDir);

  return Promise.all(
    files
      .filter((fileName) => path.extname(fileName) === ".mdx")
      .map(async (blogFileName) => {
        const blogSlug = path.basename(blogFileName, ".mdx");
        const filePath = path.join(blogsDir, blogFileName);
        const blogMdx = await fs.readFile(filePath, "utf8");
        const fontmatter = matter(blogMdx);

        return {
          title: fontmatter.data.title,
          date: fontmatter.data.date,
          image: fontmatter.data.image,
          content: fontmatter.content,
          slug: blogSlug,
        };
      })
  );
}
