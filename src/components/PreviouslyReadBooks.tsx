import { Book } from "@/types/book/book.types";
import BookCard from "./cards/BookCard";
import Carousel from "./Carousel";
import BaseButton from "./buttons/BaseButton";
import PrevIcon from "./icons/PrevIcon";
import NextIcon from "./icons/NextIcon";
import TitleContainer from "./TitleContainer";

interface PreviouslyReadBooksProps {
  books: Book[];
}

const PreviouslyReadBooks = ({ books }: PreviouslyReadBooksProps) => {
  return (
    <div className="relative min-w-0" style={{ width: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 46,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
          zIndex: 10,
        }}
      >
        <TitleContainer
          title="Previously read:"
          className="text-font24 font-bold"
        />

        <div className="flex gap-2">
          <BaseButton
            className="swiper-button-prev-custom border-2 border-modern-tertiary/50 rounded-full bg-white w-12 h-12"
            type="button"
          >
            <PrevIcon />
          </BaseButton>
          <BaseButton
            className="swiper-button-next-custom border-2 border-modern-tertiary/50 rounded-full bg-white w-12 h-12"
            type="button"
          >
            <NextIcon />
          </BaseButton>
        </div>
      </div>

      <div style={{ paddingTop: "4rem" }}>
        <Carousel<Book>
          items={books}
          renderItem={(book) => <BookCard key={book._id} book={book} />}
          showTitle={false}
        />
      </div>
    </div>
  );
};

export default PreviouslyReadBooks;
