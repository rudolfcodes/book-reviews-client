import Avatar from "./Avatar";
import BaseButton from "./buttons/BaseButton";
import BaseCard from "./cards/BaseCard";
import FlexContainer from "./FlexContainer";
import TextContainer from "./TextContainer";
import TitleContainer from "./TitleContainer";

interface OrganisedByProps {
  hostName: string;
  onClick?: string;
  hostAvatarUrl?: string;
}

const OrganisedBy = ({
  hostName,
  onClick,
  hostAvatarUrl,
}: OrganisedByProps) => {
  return (
    <BaseCard className="flex-row w-full lg:!max-w-[450px] gap-6 flex-shrink-0 py-10 justify-between items-center border-none shadow-input-shadow">
      <FlexContainer className="flex-col gap-4 items-center">
        <TitleContainer title="Organised by:" />
        <TextContainer text={hostName} className="text-lg font-semibold" />

        <BaseButton
          type="button"
          className="bg-modern-tertiary text-white"
          onClick={() => onClick}
        >
          Message Host
        </BaseButton>
      </FlexContainer>

      {hostAvatarUrl && (
        <Avatar imageUrl={hostAvatarUrl} altText={`${hostName}'s avatar`} />
      )}
    </BaseCard>
  );
};

export default OrganisedBy;
