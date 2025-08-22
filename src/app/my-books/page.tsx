import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookCard } from '@/components/book-card';
import { purchasedBooks } from '@/lib/data';

export default function MyBooksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-headline font-bold">My Purchased Books</h1>
            <p className="text-muted-foreground">
                Here are the books you've collected. Happy reading!
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {purchasedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
