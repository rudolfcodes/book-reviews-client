import FlexContainer from "./FlexContainer";
import TitleContainer from "./TitleContainer";
import { Book } from "@/types/book/book.types";
import BaseCard from "./cards/BaseCard";
import NextImage from "./Image";
import TextContainer from "./TextContainer";

interface CurrentlyReadingProps {
  book: Book;
}

const CurrentlyReading = ({ book }: CurrentlyReadingProps) => {
  return (
    <FlexContainer className="flex-col gap-4 min-w-80">
      <TitleContainer
        title="Currently reading:"
        className="text-font24 font-bold"
      />

      <BaseCard className="relative border-10 border-white rounded-custom-lg shadow-input-shadow">
        <div className="absolute top-right right-0 rounded-tr-custom-lg -mt-[1px] bg-black text-white px-2 py-1 border-t">
          NOW
        </div>
        <NextImage
          src={
            book.coverUrl ||
            "https://via.placeholder.com/150x220/D3D3D3/000000?text=No+Cover"
          }
          className="rounded-custom-lg"
          alt={book.title}
          width={390}
          height={509}
          loading="lazy"
        />
        <div className="gap-1.5 absolute bottom-0 bg-modern-tertiary text-white w-full py-2 px-4 text-center rounded-b-xl justify-center items-center h-20">
          <FlexContainer className="flex-col justify-center items-center h-full">
            <TextContainer
              className="text-sm font-extrabold line-clamp-2"
              text={book.title}
            />
            <TextContainer className="text-sm" text={book.author as string} />
          </FlexContainer>
        </div>
      </BaseCard>
    </FlexContainer>
  );
};

export default CurrentlyReading;
