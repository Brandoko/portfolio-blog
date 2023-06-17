import fs from "fs/promises";
import { cache } from "react";

export const getBlogNames = async () => {
  const contents = await fs.readdir("src/app/blogs", { withFileTypes: true });

  const directories = contents
    .filter((dirent) => dirent.isDirectory())
    .map((dir) => dir.name);

  return directories;
};

export const getBlogs = cache(async () => {
  const blogNames = await getBlogNames();
  // TODO: add metadata to MDX files and get date
  return blogNames;
});
