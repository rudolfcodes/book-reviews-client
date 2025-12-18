"use client";

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
      <main>
        <div className="relative max-h-[665px] overflow-hidden">
          <div className="absolute inset-0 bg-tertiary-grey -skew-y-2 origin-top-left" />
          <div className="flex flex-col gap-20 relative z-10 mx-auto w-screen max-w-7xl flex-grow py-20 font-plusJakarta">
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

        <FlexContainer className="h-[400px] mt-20 mx-auto w-screen max-w-7xl">
          <FlexContainer className="flex-col w-1/2 gap-6">
            <FlexContainer className="flex-col">
              <TitleContainer
                title="Location"
                className="text-3xl font-bold mb-6 w-full"
              />
              <TextContainer text="Sechseläutenplatz" />
              <TextContainer text="8001 Zürich, Switzerland" />
            </FlexContainer>
            <div className="h-60">
              <Map position={[47.365257, 8.547717]} zoom={19} />
            </div>
          </FlexContainer>
        </FlexContainer>
      </main>
    </div>
  );
}
