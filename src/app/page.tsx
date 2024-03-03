"use client"
// @ts-nocheck
import MpCard from '@/components/ui/MpCard';
import { config } from './app.config';

import ky from 'ky';

const EARLIEST_FROM_DATE = "2003-11-12";

export default function Home() {

  const onQueryMp = async (id:number) => {
    // const mp = await ky.get(`${config.apiUrl}/mp/${id}`).json();
    console.log(id);
  }

  const mp = {
    startDate: {
      day: {
        low: 12
      },
      month: {
        low: 11
      },
      year: {
        low: 2003
      }
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="ring text-foreground bg-background">
          <h1>home page</h1>
          <h1>home page</h1>
          <h1>home page</h1>
          <h1>home page</h1>
        </div>

        <h1 className="text-primary">home page</h1>
        <h1 className="text-primary">home page</h1>
        <h1 className="text-content bg-bkg">home page</h1>

        <MpCard onQueryMp={onQueryMp} item={mp} />

    </main>
  );
}
