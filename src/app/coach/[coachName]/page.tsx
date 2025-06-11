import {notFound} from "next/navigation";
import {COACH_DATA} from "@/data/CoachData";
import MainCoachPage from "@/components/layouts/MainCoachPage";

export async function generateStaticParams() {
  return COACH_DATA.map((coach) => ({
    coachName: coach.coachUsername,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{coachName: string}>;
}) {
  const {coachName} = await params;

  const coach = COACH_DATA.find((c) => c.coachUsername === coachName);

  if (!coach) return {title: "Coach Not Found"};

  return {
    title: `${coach.name} | Real EstateCoach`,
    description: coach.description,
    alternates: {
      canonical: `https://realestatecoach.ph/coach/${coach.coachUsername}`,
      languages: {
        "en-US": `https://realestatecoach.ph/coach/${coach.coachUsername}`,
      },
    },
    openGraph: {
      title: `${coach.name}`,
      description: coach.description,
      url: `https://realestatecoach.ph/coach/${coach.coachUsername}`,
      images: [
        {
          url: coach.mainPageImageURLs[0],
          width: 800,
          height: 600,
        },
      ],
      siteName: "Real EstateCoach",
      type: "profile",
    },
  };
}

export default async function CoachPage({
  params,
}: {
  params: Promise<{coachName: string}>;
}) {
  const {coachName} = await params;

  const coach = COACH_DATA.find((c) => c.coachUsername === coachName);
  if (!coach) notFound();

  return (
    <>
      <MainCoachPage data={coach} />
    </>
  );
}
