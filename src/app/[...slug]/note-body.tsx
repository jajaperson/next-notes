type Props = {
  content: string;
}

export function NoteBody({ content }: Props) {
  return (
    <div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
