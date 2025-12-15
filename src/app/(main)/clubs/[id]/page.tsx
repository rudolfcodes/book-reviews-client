import { Metadata } from "next";
import { fetchClub } from "@/services/clubService";
import ClubPageClient from "./ClubPageClient";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const fetched = await fetchClub(params.id);
  const club = fetched.data;

  return {
    title: `Swiss BookClub - ${club?.name || "Club"}`,
    description: club
      ? `Join the ${club.name} book club and share your love for books!`
      : "Join a community of book lovers and share your thoughts!",
  };
}

const ClubDetailPage = async ({ params }: { params: { id: string } }) => {
  const fetched = await fetchClub(params.id);

  return <ClubPageClient clubId={params.id} initialData={fetched.data} />;
};

export default ClubDetailPage;
