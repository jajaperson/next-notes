import { getNotesInVault } from "@/lib/api";
import { notFound } from "next/navigation";

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

  const { default: Note } = await import(`@/content/${realSlug.join("/")}.md`);

  return (
    <section>
      <article className="markdown">
        <Note />
      </article>
    </section>
  )
}

export function generateStaticParams() {
  const slugs = [...getNotesInVault().values()]

  return slugs.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false; 
