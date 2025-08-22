export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  category: 'New Arrival' | 'Fiction' | 'Children' | 'Self Development';
  'data-ai-hint'?: string;
  isFavorite?: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  itemCount: number;
  items: Book[];
}
