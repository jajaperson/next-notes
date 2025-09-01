import { getVaultSlugs } from "@/lib/api"
import Link from "next/link"

export default function ContentsPage() {


  return (
    <div>
      <ul className="list-inside list-circ">
        {
          [...getVaultSlugs(/\.md$/)].map(
            (v, i) => {
              let path = v.join("/");
              return (
                <li key={i}><Link href={path}>{path}</Link></li>
              )
            }
          )
        }
      </ul>
    </div>
  )
}
