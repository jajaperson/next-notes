import markdownStyles from "./markdown-styles.module.css";
import "remark-callouts/styles.css"

type Props = {
  content: string;
}

export function NoteBody({ content }: Props) {
  return (
    <div>
      <div className="prose prose:lg" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
