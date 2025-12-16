"use client";

import { usePathname } from "next/navigation";
import { fetchClub } from "@/services/clubService";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import FlexContainer from "@/components/FlexContainer";
import TitleContainer from "@/components/TitleContainer";
import ExpandableText from "@/components/ExpandableText";
import { useQuery } from "@tanstack/react-query";
import ClubOverviewCard from "@/components/cards/ClubOverviewCard";

interface ClubPageClientProps {
  clubSlug?: string;
  initialData?: any;
}

export default function ClubPageClient({
  clubSlug,
  initialData,
}: ClubPageClientProps) {
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
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main>
        <div className="relative bg-tertiary-grey">
          <div className="absolute inset-0 bg-tertiary-grey -skew-y-2 origin-top-left" />
          <div className="relative z-10 mx-auto w-screen max-w-7xl flex-grow py-20 font-plusJakarta">
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
          </div>
        </div>
      </main>
    </div>
  );
}
