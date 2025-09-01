import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkWikilinks from "remark-wikilinks";
import remarkCallouts from "remark-callouts";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax/chtml";

export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkWikilinks, {})
    .use(remarkCallouts)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeMathjax, {
      chtml: {
        fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
      }
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)

  return file.toString()
}
