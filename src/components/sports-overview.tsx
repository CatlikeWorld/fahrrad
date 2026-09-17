/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import type { SportSummary } from "@/lib/types";

export default function SportsOverview({ sports }: { sports: SportSummary[] }) {
  return (
    <section className="px-5 py-6 sm:px-8 lg:px-10 lg:py-7">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Sportarten
            </h2>
          </div>
        </div>

        {sports.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-600">
            Keine Sportarten
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sports.map((sport, index) => (
              <Link
                key={`${index}-${sport.slug}`}
                href={`/${sport.slug}`}
                className="group relative min-h-[300px] overflow-hidden rounded-[28px] bg-zinc-900 text-white shadow-sm"
              >
                <img
                  src={sport.heroImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {sport.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
