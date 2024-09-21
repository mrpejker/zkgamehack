'use client';
import 'reflect-metadata';

import dynamic from 'next/dynamic';
import { zkNoidConfig } from '@/games/config';
import "@zknoid/games/styles.css";

const CompetitionsListPage = dynamic(
  () =>
    import('@zknoid/sdk/components/framework/dynamic/CompetitionsPageWrapper'),
  {
    ssr: false,
  }
);

export default function Home({ params }: { params: { gameId: string } }) {
  return (
    <CompetitionsListPage gameId={params.gameId} zkNoidConfig={zkNoidConfig} />
  );
}
