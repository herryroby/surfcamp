import { BlockRenderer } from '@/components/block-renderer';
import { getHomePage } from '@/data/loaders';
import { notFound } from 'next/navigation';

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return <BlockRenderer blocks={blocks} />;
}
