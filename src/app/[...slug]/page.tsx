import { getNoteBySlug, getVaultSlugs } from "@/lib/api"
import { markdownToHtml } from "@/lib/markdownToHtml";
import { map } from "iterable-utilities";
import { NoteBody } from "./note-body";

export default async function NotePage({
  params,
}: Params) {
  const { slug } = await params
  const realSlug = slug.map(decodeURIComponent);
  const note = getNoteBySlug(realSlug)
  const noteHtml = await markdownToHtml(note.content)

  return (
    <div>
      <NoteBody content={noteHtml} />
    </div>
  )
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};


export function generateStaticParams() {
  const noteSlugs = getVaultSlugs(/\.md$/);
  return [
    ...map(noteSlugs, slug => ({
      slug: slug
    })),
  ];
}

export const dynamicParams = false;
