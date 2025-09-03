// import createMDX from "@next/mdx";
import createNextra from "nextra";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const withNextra = createNextra({
  latex: {
    renderer: 'mathjax'
  }
})

export default withNextra(nextConfig);
