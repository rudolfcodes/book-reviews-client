import Avatar from "./Avatar";
import BaseButton from "./buttons/BaseButton";
import BaseCard from "./cards/BaseCard";
import FlexContainer from "./FlexContainer";
import TextContainer from "./TextContainer";
import TitleContainer from "./TitleContainer";

interface OrganisedByProps {
  hostName: string;
  onClick: () => void;
  hostAvatarUrl?: string;
}

const OrganisedBy = ({
  hostName,
  onClick,
  hostAvatarUrl,
}: OrganisedByProps) => {
  return (
    <BaseCard className="flex-row w-full lg:!max-w-[450px] gap-6 flex-shrink-0 p-6 justify-between border-none shadow-input-shadow h-fit font-plusJakarta">
      <FlexContainer className="flex-col gap-4">
        <TitleContainer className="text-font24" title="Organised by:" />
        <TextContainer text={hostName || "Unknown"} className="text-font18" />

        <BaseButton
          type="button"
          className="bg-modern-tertiary text-white"
          onClick={onClick}
        >
          Message Host
        </BaseButton>
      </FlexContainer>

      {hostAvatarUrl && (
        <Avatar imageUrl={hostAvatarUrl} altText={`Host's avatar`} />
      )}
    </BaseCard>
  );
};

export default OrganisedBy;
