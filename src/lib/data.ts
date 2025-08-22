import type { Book, Order } from './types';

export const allBooks: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 15.99,
    coverImage: "https://images.unsplash.com/photo-1603523825732-4d2b1741bde1?q=80&w=1974&auto=format&fit=crop",
    category: "New Arrival",
    "data-ai-hint": "fantasy book"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 18.50,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1974&auto=format&fit=crop",
    category: "Self Development",
    "data-ai-hint": "self help"
  },
  {
    id: 3,
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: 8.99,
    coverImage: "https://images.unsplash.com/photo-1576723652335-067b458315c2?q=80&w=1974&auto=format&fit=crop",
    category: "Children",
    "data-ai-hint": "childrens book"
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    price: 12.99,
    coverImage: "https://images.unsplash.com/photo-1618259209539-7a33a8b4bcfd?q=80&w=1974&auto=format&fit=crop",
    category: "Fiction",
    "data-ai-hint": "science fiction"
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 20.00,
    coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1974&auto=format&fit=crop",
    category: "New Arrival",
    "data-ai-hint": "astronaut book"
  },
  {
    id: 6,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 16.75,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
    category: "Self Development",
    "data-ai-hint": "psychology book"
  },
  {
    id: 7,
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: 9.50,
    coverImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?q=80&w=1974&auto=format&fit=crop",
    category: "Children",
    "data-ai-hint": "monster story"
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    price: 25.00,
    coverImage: "https://images.unsplash.com/photo-1509266272358-778da8ce488c?q=80&w=1974&auto=format&fit=crop",
    category: "Fiction",
    "data-ai-hint": "fantasy landscape"
  },
  {
    id: 9,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    price: 17.25,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop",
    category: "New Arrival",
    "data-ai-hint": "robot companion"
  },
  {
    id: 10,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 14.00,
    coverImage: "https://images.unsplash.com/photo-1524589245484-fe457e5b5d90?q=80&w=1974&auto=format&fit=crop",
    category: "Self Development",
    "data-ai-hint": "spiritual guide"
  },
  {
    id: 11,
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: 7.99,
    coverImage: "https://images.unsplash.com/photo-1506499424264-f698d2b4b45b?q=80&w=1974&auto=format&fit=crop",
    category: "Children",
    "data-ai-hint": "bedtime story"
  },
  {
    id: 12,
    title: "Circe",
    author: "Madeline Miller",
    price: 13.50,
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1974&auto=format&fit=crop",
    category: "Fiction",
    "data-ai-hint": "greek mythology"
  },
];

export const purchasedBooks: Book[] = allBooks.slice(0, 4);

export const orders: Order[] = [
    { id: 'LH-84353', date: '2023-10-26', status: 'Delivered', total: 24.98, itemCount: 2 },
    { id: 'LH-84199', date: '2023-11-15', status: 'Shipped', total: 43.50, itemCount: 3 },
    { id: 'LH-84125', date: '2023-11-28', status: 'Processing', total: 12.99, itemCount: 1 },
];
