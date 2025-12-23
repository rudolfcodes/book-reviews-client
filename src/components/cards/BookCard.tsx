import { Book } from "@/types/book/book.types";
import BaseCard from "./BaseCard";
import NextImage from "../Image";
import FlexContainer from "../FlexContainer";
import TextContainer from "../TextContainer";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <BaseCard className="relative lg:w-[287px] lg:h-[393px] overflow-hidden shadow-light-shadow border-none">
      <NextImage
        src={
          book.coverUrl ||
          "https://via.placeholder.com/287x393/D3D3D3/000000?text=No+Cover"
        }
        alt={book.title}
        width={287}
        height={393}
        loading="lazy"
      />
      <div className="gap-1.5 absolute bottom-0 bg-modern-tertiary text-white w-full py-2 px-16 text-center rounded-b-xl justify-center items-center h-20">
        <FlexContainer className="flex-col justify-center items-center h-full">
          <TextContainer
            className="text-sm font-extrabold line-clamp-2"
            text={book.title}
          />
          <TextContainer className="text-sm" text={book.author as string} />
        </FlexContainer>
      </div>
    </BaseCard>
  );
};

export default BookCard;
