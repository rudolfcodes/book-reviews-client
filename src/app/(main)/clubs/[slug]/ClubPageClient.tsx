"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { fetchClub } from "@/services/clubService";
import Breadcrumbs from "@/components/Breadcrumbs";
import FlexContainer from "@/components/FlexContainer";
import TitleContainer from "@/components/TitleContainer";
import ExpandableText from "@/components/ExpandableText";
import { useQuery } from "@tanstack/react-query";
import ClubOverviewCard from "@/components/cards/ClubOverviewCard";
import TextContainer from "@/components/TextContainer";
import OrganisedBy from "@/components/OrganisedBy";
import { fetchUserByClubId } from "@/services/userService";
import { capitalizeFirstLetter } from "@/utils/helpers";
import CurrentlyReading from "@/components/CurrentlyReading";
import PreviouslyReadBooks from "@/components/PreviouslyReadBooks";
import { mockBooks } from "@/data/books";

const Map = dynamic(
  () => import("@/components/map/Map").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div>Loading map...</div>,
  }
);

interface ClubPageClientProps {
  clubSlug?: string;
  initialData?: any;
}

export default function ClubPageClient({
  clubSlug,
  initialData,
}: ClubPageClientProps) {
  const [, setMessageHost] = useState(false);
  const pathname = usePathname();

  const {
    data: club,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["club", clubSlug],
    queryFn: () => fetchClub(clubSlug as string),
    enabled: !!clubSlug,
    initialData,
  });

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUserByClubId(club._id),
    enabled: !!club,
  });
  const currentlyReadingBook = mockBooks[0];
  const previouslyReadBooks = mockBooks.slice(1, 5);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  if (!club) {
    return <div>Club not found</div>;
  }

  return (
    <FlexContainer className="flex-col min-h-screen w-full">
      <main>
        <div className="relative max-h-[665px] overflow-hidden">
          <div className="absolute inset-0 bg-tertiary-grey -skew-y-2 origin-top-left" />
          <FlexContainer className="flex-col gap-20 relative z-10 mx-auto w-screen max-w-7xl flex-grow py-20 font-plusJakarta">
            <Breadcrumbs path={pathname} />
            <FlexContainer className="gap-10">
              <FlexContainer className="flex-col flex-1 gap-2">
                <TitleContainer
                  title={club?.name}
                  className="text-6xl font-bold"
                />
                <ExpandableText text={club?.description || ""} />
              </FlexContainer>
              <ClubOverviewCard {...club} />
            </FlexContainer>
          </FlexContainer>
        </div>

        <FlexContainer className="h-[400px] mt-20 mx-auto w-screen max-w-7xl justify-between">
          <FlexContainer className="flex-col w-1/2 gap-6">
            <FlexContainer className="flex-col">
              <TitleContainer
                title="Location"
                className="text-font24 font-bold mb-6 w-full"
              />
              <TextContainer className="text-font18" text="Sechseläutenplatz" />
              <TextContainer
                className="text-font18"
                text="8001 Zürich, Switzerland"
              />
            </FlexContainer>
            <div className="h-60">
              <Map position={[47.365257, 8.547717]} zoom={19} />
            </div>
          </FlexContainer>

          <OrganisedBy
            hostName={capitalizeFirstLetter(user?.username)}
            onClick={() => setMessageHost(true)}
            hostAvatarUrl={club.organiserAvatarUrl}
          />
        </FlexContainer>
        {(currentlyReadingBook || previouslyReadBooks.length > 0) && (
          <FlexContainer className="bg-tertiary-grey">
            {currentlyReadingBook && (
              <CurrentlyReading book={currentlyReadingBook} />
            )}
            {previouslyReadBooks.length > 0 && (
              <PreviouslyReadBooks books={previouslyReadBooks} />
            )}
          </FlexContainer>
        )}
      </main>
    </FlexContainer>
  );
}
