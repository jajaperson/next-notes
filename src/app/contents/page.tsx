import { getNotesInVault } from "@/lib/api";
import Link from "next/link"

export default function ContentsPage() {
  const slugStrs = [...getNotesInVault().keys()]

  return (
    <div>
      <ul className="list-inside list-circ">
        {slugStrs.map(
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
