import { notFound } from "next/navigation";
import SportDetail from "@/components/sport-detail";
import { getSportBySlug, sports } from "@/lib/sports";

{
  /* github pages ist static */
}
export const dynamicParams = false;

export function generateStaticParams() {
  {
    /* generiere alle paths */
  }
  return sports.map((sport) => ({ sportart: sport.slug }));
}

export default async function SportartPage({
  params,
}: PageProps<"/[sportart]">) {
  const { sportart } = await params;
  const sport = getSportBySlug(decodeURIComponent(sportart).toLowerCase());

  if (!sport) notFound();

  return <SportDetail sport={sport} />;
}
