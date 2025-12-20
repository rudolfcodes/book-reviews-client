import { Book } from "@/types/book/book.types";
import FlexContainer from "./FlexContainer";
import BookCard from "./cards/BookCard";
import Carousel from "./Carousel";

interface PreviouslyReadBooksProps {
  books: Book[];
}

const PreviouslyReadBooks = ({ books }: PreviouslyReadBooksProps) => {
  return (
    <FlexContainer className="flex-col items-center gap-4">
      <Carousel<Book>
        items={books}
        renderItem={(book) => <BookCard key={book._id} book={book} />}
        title="Previously read:"
        className="gap-4 flex-wrap justify-center"
      />
    </FlexContainer>
  );
};

export default PreviouslyReadBooks;
