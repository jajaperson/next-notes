
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Hello, {params.slug}!</h1>
    </main>
  );
}
