interface Book {
  _id: string;
  title: string;
  coverUrl: string;
  slug?: string;
  author?: string;
}

export type { Book };
