import { getNotesInVault } from "@/lib/dynamic-mdx";
import { notFound } from "next/navigation";
import { CustomMDX } from "../components/mdx";

type Params = {
  params: Promise<{
    slug: string[]
  }>
}

export default async function NotePage({
  params,
}: Params) {
  const { slug } = await params
  const realSlug = slug.map(decodeURIComponent);
  const pathStr = realSlug.join("/");

  const note = getNotesInVault().get(pathStr);

  if (!note) {
    notFound();
  }

  // const { default: Note } = await import(`@/content/${realSlug.join("/")}.md`);

  return (
    <section>
      <article className="markdown">
        <CustomMDX source={note.content} />
      </article>
    </section>
  )
}

export function generateStaticParams() {
  const slugs = [...getNotesInVault().values()]

  return slugs.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false;
