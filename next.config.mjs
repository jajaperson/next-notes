import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.md$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-math",
      "remark-frontmatter",
    ],
    rehypePlugins: [
      "rehype-raw"
    ],
    format: "md",
  },
});

export default withMDX(nextConfig);
