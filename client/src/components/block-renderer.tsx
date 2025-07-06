import { HeroSection } from '@/components/blocks/hero-section';
import { InfoBlock } from '@/components/blocks/info-block';
import type { Block } from '@/types';

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case 'blocks.hero-section':
      return <HeroSection {...block} key={index} />;
    case 'blocks.info-block':
      return <InfoBlock {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
