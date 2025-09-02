import { getNotesInVault } from "@/lib/dynamic-mdx";
import Link from "next/link"

export default function ContentsPage() {
  const slugs = [...getNotesInVault().keys()]

  return (
    <div>
      <ul className="list-inside list-circ">
        {slugs.map(
          (path, i) => {
            return (
              <li key={i}><Link href={path}>{path}</Link></li>
            )
          }
        )}
      </ul>
    </div>
  )
}
