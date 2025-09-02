import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ['next-mdx-remote'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // plugins go here
});

export default withMDX(nextConfig);
