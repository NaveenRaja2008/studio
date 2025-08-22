
"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookCard } from '@/components/book-card';
import { allBooks } from '@/lib/data';
import type { Book } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(allBooks);

  useEffect(() => {
    const results = allBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="space-y-4 mb-8 text-center">
          <h1 className="text-4xl font-headline font-bold">Explore All Books</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our entire collection or use the search bar to find your next favorite read.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by title or author..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium">No books found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search term.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
