import { MDXRemote } from "next-mdx-remote/rsc";

import remarkGfm from "remark-gfm";

export default function BlogContent({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
