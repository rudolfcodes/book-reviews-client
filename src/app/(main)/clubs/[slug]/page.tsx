import { Metadata } from "next";
import { fetchClub } from "@/services/clubService";
import ClubPageClient from "./ClubPageClient";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  console.log({ params });
  const fetched = await fetchClub(params.slug);
  const club = fetched.data;

  return {
    title: `Swiss BookClub - ${club?.name || "Club"}`,
    description: club
      ? `Join the ${club.name} book club and share your love for books!`
      : "Join a community of book lovers and share your thoughts!",
  };
}

const ClubDetailPage = async ({ params }: { params: { slug: string } }) => {
  const fetched = await fetchClub(params.slug);
  console.log({ fetched });

  return <ClubPageClient clubSlug={params.slug} initialData={fetched.data} />;
};

export default ClubDetailPage;
