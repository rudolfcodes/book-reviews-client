import FlexContainer from "./FlexContainer";
import TitleContainer from "./TitleContainer";
import { Book } from "@/types/book/book.types";
import BaseCard from "./cards/BaseCard";
import NextImage from "./Image";

interface CurrentlyReadingProps {
  book: Book;
}

const CurrentlyReading = ({ book }: CurrentlyReadingProps) => {
  return (
    <FlexContainer className="flex-col items-center gap-4">
      <TitleContainer
        title="Currently reading:"
        className="text-font24 font-bold"
      />

      <BaseCard className="relative border-10 border-white rounded-xl shadow-input-shadow">
        <div className="absolute top-right bg-black text-white px-2 py-1 border-t">
          NOW
        </div>
        <NextImage
          src={book.coverUrl}
          alt={book.title}
          width={120}
          height={180}
        />
        <FlexContainer className="flex-col gap-2 absolute bottom-0 bg-modern-tertiary text-white w-full py-2 rounded-b-xl justify-center">
          <span className="text-base font-extrabold">{book.title}</span>
          <span className="text-sm">{book.author}</span>
        </FlexContainer>
      </BaseCard>
    </FlexContainer>
  );
};

export default CurrentlyReading;
