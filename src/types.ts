export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    categories?: string[];
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    language?: string;
  };
  saleInfo: {
    listPrice: {
      amount: number;
    };
  };
};

export type CartItem = {
  bookId: string;
  title: string;
  image: string | undefined;
  quantity: number;
  [key: string]: any;
};

type EventBus = {
  setSearchQuery: (query: string) => void;
  removeFromCart: (id: string) => void;
  cartState$: {
    subscribe: (callback: (state: { cart: CartItem[] }) => void) => {
      unsubscribe: () => void;
    };
  };
};

export type EnrichedWindow = Window & { eventBus: EventBus };
