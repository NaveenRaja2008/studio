"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookCard } from '@/components/book-card';
import { allBooks } from '@/lib/data';
import type { Book } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const favoriteIds: number[] = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
    const books = allBooks.filter(book => favoriteIds.includes(book.id));
    setFavoriteBooks(books);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-headline font-bold">My Favorite Books</h1>
          <p className="text-muted-foreground">
            The books you've marked as favorites.
          </p>
        </div>
        {favoriteBooks.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {favoriteBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">No favorites yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Click the heart on any book to add it to your favorites.
            </p>
            <Link href="/">
              <Button className="mt-6">Explore Books</Button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
