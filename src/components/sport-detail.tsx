/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  ArrowLeft,
  BalloonIcon,
  Earth,
  ExternalLink,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Sport } from "@/lib/types";
import { extraTexts } from "@/lib/sports";

export default function SportDetail({ sport }: { sport: Sport }) {
  const sportExtraTexts = extraTexts.filter(
    (extraText) => extraText.sportSlug === sport.slug,
  );

  return (
    <>
      <section className="px-5 pb-8 pt-5 sm:px-8 sm:pt-7 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative min-h-[620px] overflow-hidden rounded-[48px] bg-zinc-900 lg:min-h-[680px]">
            {/* main pic bzw hero */}
            <div className="absolute inset-0 lg:right-[29%]">
              <img
                src={sport.heroImage}
                alt={sport.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-black/10" />
              <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-gradient-to-r from-transparent via-zinc-900/50 to-zinc-900 lg:block" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
            </div>

            {/* top btns */}
            <div className="relative z-20 flex flex-wrap gap-3 px-6 pt-6 sm:px-10 sm:pt-9 lg:px-16">
              <Link
                href="/"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/75 px-5 font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-zinc-950/90"
              >
                <ArrowLeft className="h-4 w-4" /> Zurück
              </Link>
              <a
                href="#fahrraeder"
                className="inline-flex h-12 items-center rounded-xl border border-white/10 bg-zinc-950/75 px-6 font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-zinc-950/90"
              >
                Fahrräder
              </a>
              <a
                href="#beruehmtheiten"
                className="inline-flex h-12 items-center rounded-xl border border-white/10 bg-zinc-950/75 px-6 font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-zinc-950/90"
              >
                Berühmtheiten
              </a>
            </div>

            {/* bottom btn */}
            <a
              href={sport.heroImage}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-7 left-6 z-20 inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/75 px-5 font-semibold text-white shadow-lg backdrop-blur-md transition hover:bg-zinc-950/90 sm:left-10 lg:left-16"
            >
              Zur Bildquelle <ExternalLink className="h-4 w-4" />
            </a>

            <aside className="relative z-10 mx-5 mb-5 mt-[325px] rounded-[38px] border border-white/10 bg-[#25282b]/95 px-7 py-8 text-white backdrop-blur-sm sm:mx-8 sm:px-9 lg:absolute lg:bottom-4 lg:right-4 lg:top-4 lg:mx-0 lg:mt-0 lg:w-[35%] lg:min-w-[390px] lg:px-10 lg:py-10">
              <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[2.65rem] xl:text-5xl">
                {sport.name}
              </h1>

              <div className="space-y-6 text-[1.08rem] leading-[1.25] sm:text-xl">
                <InfoBlock title="Beschreibung" text={sport.description} />
                <InfoBlock title="Geschwindigkeiten" text={sport.speeds} />
                <InfoBlock title="Gelände" text={sport.terrain} />

                <div>
                  <h2 className="font-bold">Fahrradeigenschaften</h2>
                  <ul className="mt-1 text-zinc-200">
                    {sport.equipment.map((item) => (
                      <li key={item}>&bull; {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          {/* extra texte */}
          {sportExtraTexts.length > 0 && (
            <div className="mx-auto max-w-5xl space-y-4 px-2 pt-8 text-lg leading-relaxed text-zinc-700 sm:text-xl">
              {sportExtraTexts.map((extraText, index) => (
                <p
                  key={`${extraText.sportSlug}-${index}`}
                  className="whitespace-pre-line"
                >
                  {extraText.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* empfohlene Fahrräder für den Sport */}
      <section
        id="fahrraeder"
        className="scroll-mt-8 bg-[#eeeeec] px-5 py-12 sm:px-8 lg:px-10 lg:py-14"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* header */}
          <div className="mb-7">
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              {sport.bikes.length}
              {sport.bikes.length !== 1 ? "Fahrräder" : "Fahrrad"}
            </h2>

            <p className="mt-1 text-lg font-semibold text-zinc-700 sm:text-xl">
              {sport.bikeDescription}
            </p>
          </div>

          {/* liste */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sport.bikes.map((bike, index) => (
              <article
                key={`${bike.name}-${index}`}
                className="group relative aspect-[2/1] overflow-hidden rounded-[24px] border border-zinc-400/60 bg-zinc-300"
              >
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <h3 className="absolute bottom-3 left-5 text-xl font-semibold text-white sm:text-2xl">
                  {bike.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Berühmtheiten */}
      <section
        id="beruehmtheiten"
        className="scroll-mt-8 bg-[#f7f7f5] px-5 py-12 sm:px-8 lg:px-10 lg:py-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-7 text-4xl font-medium tracking-tight sm:text-5xl">
            {sport.celebrities.length} Berühmtheit
            {sport.celebrities.length !== 1 ? "en" : ""}
          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sport.celebrities.map((person, index) => {
              const content = (
                /* main bg */
                <article className="group grid min-h-[175px] grid-cols-[minmax(0,1.65fr)_minmax(120px,0.95fr)] overflow-hidden rounded-[24px] border border-zinc-500 bg-zinc-900 text-white">
                  {/* sportler bild */}
                  <div className="relative h-[200px] overflow-hidden rounded-r-[24px]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:brightness-75"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />

                    <h3 className="absolute bottom-3 left-5 text-xl font-semibold">
                      {person.name}
                    </h3>
                  </div>

                  {/* sportler stats */}
                  <div className="flex flex-col justify-center gap-3 px-5 py-5 text-xl font-semibold sm:text-2xl">
                    <Stat
                      value={`${person.age}`}
                      label="Jahre"
                      icon={<BalloonIcon />}
                    />

                    <Stat
                      value={`${person.achievements}`}
                      icon={<Trophy />}
                      tooltip={person.victoryFieldName}
                    />

                    <Stat value={person.country} icon={<Earth />} />
                  </div>
                </article>
              );

              return person.wikipediaLink ? (
                <a
                  key={`${person.name}-${index}`}
                  href={person.wikipediaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={`${person.name}-${index}`}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
      <p className="mt-1 text-zinc-200">{text}</p>
    </div>
  );
}

function Stat({
  value,
  label,
  icon,
  tooltip,
}: {
  value: string;
  label?: string;
  icon: ReactNode;
  tooltip?: string;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-3">
      <span>
        {value}{" "}
        {label && <span className="text-lg text-zinc-400">{label}</span>}
      </span>

      <span
        className="group/tooltip relative [&>svg]:h-6 [&>svg]:w-6"
        aria-label={tooltip}
        title={tooltip}
      >
        {icon}

        {/* optionaler tooltip für bspw die titel der siege */}
        {tooltip && (
          <span
            role="tooltip"
            className="pointer-events-none invisible absolute bottom-full right-0 z-30 mb-2 w-max max-w-60 rounded-lg bg-white px-3 py-2 text-sm font-semibold leading-snug text-zinc-900 opacity-0 shadow-xl transition group-hover/tooltip:visible group-hover/tooltip:opacity-100"
          >
            {tooltip}
          </span>
        )}
      </span>
    </div>
  );
}
