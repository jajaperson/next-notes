import createMDX from "@next/mdx";
import { Options as MathJaxOptions } from "rehype-mathjax"

import { loadMacrosFromPreamble } from "@/lib/load-preamble";
import { readFileSync } from "fs";
import { MATHJAX_PREAMBLE } from "@/lib/constants";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "ts", "tsx"],
};

const macros = loadMacrosFromPreamble(readFileSync(MATHJAX_PREAMBLE, "utf8"))

const withMDX = createMDX({
  extension: /\.md$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-math",
      "remark-frontmatter",
      "@r4ai/remark-callout",
    ],
    rehypePlugins: [
      "rehype-raw",
      ["rehype-mathjax/chtml", {
        chtml: { fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2' },
        tex: { macros }
      } as MathJaxOptions],
    ],
    format: "md",
  },
}); 



export default withMDX(nextConfig);
