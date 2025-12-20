import { Book } from "@/types/book/book.types";
import BaseCard from "./BaseCard";
import NextImage from "../Image";
import FlexContainer from "../FlexContainer";

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
      <FlexContainer className="flex-col gap-2 absolute bottom-0 bg-modern-tertiary text-white w-full py-2 rounded-b-xl justify-center">
        <span className="text-base font-extrabold">{book.title}</span>
        <span className="text-sm">{book.author}</span>
      </FlexContainer>
    </BaseCard>
  );
};

export default BookCard;
