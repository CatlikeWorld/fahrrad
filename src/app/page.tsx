import SportsOverview from "@/components/sports-overview";
import { sportSummaries } from "@/lib/sports";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-950">
      <section className="px-5 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-14 lg:pt-12">
        <div className="mx-auto flex max-w-[1440px] items-start justify-between gap-6">
          <div className="max-w-4xl flex flex-row gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Radsport als Leistungssport
            </h1>
            <img src="/fahrrad/JSG.png" className="h-18 w-18" />
          </div>
        </div>
      </section>

      <SportsOverview sports={sportSummaries} />
    </main>
  );
}
