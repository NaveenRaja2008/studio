
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookCard } from '@/components/book-card';
import { Button } from '@/components/ui/button';
import { RecommendationsSection } from '@/components/recommendations-section';
import { allBooks } from '@/lib/data';
import type { Book } from '@/lib/types';

const categories: Book['category'][] = ['New Arrival', 'Fiction', 'Children', 'Self Development'];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
           <Image 
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop"
            alt="Library background"
            data-ai-hint="library background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-20"
          />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-foreground">
              Literary Haven
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Your personal sanctuary for discovering and purchasing the books you'll love.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/explore">
                <Button size="lg" className="font-headline">
                  Explore Books
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {categories.map((category) => {
          const books = allBooks.filter((book) => book.category === category).slice(0, 5);
          if (books.length === 0) return null;

          return (
            <section key={category} id={category.toLowerCase().replace(' ', '-')} className="py-12 md:py-20">
              <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center text-foreground">
                  {category}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                  {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
        
        <RecommendationsSection />

      </main>
      <Footer />
    </div>
  );
}
