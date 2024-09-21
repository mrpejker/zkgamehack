'use client';
import 'reflect-metadata';
import dynamic from 'next/dynamic';
import { zkNoidConfig } from '@/games/config';
import "@zknoid/games/styles.css";

const NewCompetitionPage = dynamic(
  () =>
    import(
      '@zknoid/sdk/components/framework/dynamic/NewCompetitionPageWrapper'
    ),
  {
    ssr: false,
  }
);

export default function Home({ params }: { params: { gameId: string } }) {
  return (
    <NewCompetitionPage gameId={params.gameId} zkNoidConfig={zkNoidConfig} />
  );
}
