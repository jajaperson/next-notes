import { getNoteBySlug, getVaultSlugs } from "@/lib/api"
import { map } from "iterable-utilities";

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const realSlug = slug.map(decodeURIComponent);
  const note = getNoteBySlug(realSlug)

  return (
    <div>
      <pre>
        {note.content}
      </pre>
    </div>
  )
}

export function generateStaticParams() {
  const noteSlugs = getVaultSlugs(/\.md$/);
  return [
    ...map(noteSlugs, slug => ({
      slug: slug
    })),
  ];
}

export const dynamicParams = false;
