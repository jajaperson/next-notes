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
