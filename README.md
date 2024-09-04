# next-notes

This project is intended to be a website with _most_ of [Obsidian's](https://obsidian.md) read-only functionality for the files in the `Vault/` directory.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Todo
* [ ] Setup basic markdown rendering
    * [Remark](https://github.com/remarkjs/remark); [useful demo for dynamic routes and md rendering](https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown)
* [ ] Find/implement a LaTeX renderer
    * [KaTeX looks good](https://katex.org/) 
* [ ] Implement link preview 
* [ ] Display backlinks
* [ ] Tags and vault search
#### Fancy stuff
* [ ] Implement graph view (with physics and coloured paths for clusters/coloured nodes for nodes with specific attributes)
* [ ] Optimise hashtags and backlinks
* [ ] Shortest paths e.g. Dijkstra's 
* [ ] Find if two arbitrary notes are related via union-find (implement disjoint set union data structure (with path compression and all the other bells and whistles)) - use this to colour specific clusters 
