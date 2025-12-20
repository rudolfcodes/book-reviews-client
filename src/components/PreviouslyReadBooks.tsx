import { Book } from "@/types/book/book.types";
import FlexContainer from "./FlexContainer";
import TitleContainer from "./TitleContainer";
import BookCard from "./cards/BookCard";

interface PreviouslyReadBooksProps {
  books: Book[];
}

const PreviouslyReadBooks = ({ books }: PreviouslyReadBooksProps) => {
  return (
    <FlexContainer className="flex-col items-center gap-4">
      <TitleContainer
        title="Previously read:"
        className="text-font24 font-bold"
      />
      <FlexContainer className="gap-4 flex-wrap justify-center">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default PreviouslyReadBooks;
