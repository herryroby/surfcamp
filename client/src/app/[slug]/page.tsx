interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicPageRoute({ params }: PageProps) {
  const slug = (await params).slug;

  return (
    <div>
      <h1>Slug: {slug}</h1>
    </div>
  );
}
