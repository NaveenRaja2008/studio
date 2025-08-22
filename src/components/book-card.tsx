"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Book, Order } from '@/lib/types';
import { ShoppingCart, Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const favoriteIds: number[] = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
    setIsFavorite(favoriteIds.includes(book.id));
  }, [book.id]);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent card click
    try {
      const favoriteIds: number[] = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
      let updatedFavorites: number[];
      if (favoriteIds.includes(book.id)) {
        updatedFavorites = favoriteIds.filter(id => id !== book.id);
        toast({
          title: "Removed from Favorites",
          description: `${book.title} has been removed from your favorites.`,
        });
      } else {
        updatedFavorites = [...favoriteIds, book.id];
        toast({
          title: "Added to Favorites!",
          description: `${book.title} has been added to your favorites.`,
        });
      }
      localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Failed to update favorites:', error);
      toast({
        title: "Error",
        description: "Could not update favorites. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAddToCart = () => {
    try {
      const existingOrders: Order[] = JSON.parse(localStorage.getItem('orders') || '[]');
      
      const newOrder: Order = {
        id: `LH-${Math.floor(Math.random() * 90000) + 10000}`,
        date: new Date().toISOString().split('T')[0],
        status: 'Processing',
        total: book.price,
        itemCount: 1,
        items: [book],
      };

      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));

      toast({
        title: "Added to Orders!",
        description: `${book.title} has been added to your orders.`,
      });

    } catch (error) {
      console.error('Failed to add to cart:', error);
      toast({
        title: "Error",
        description: "Could not add item to orders. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isMounted) {
    return null; // or a skeleton loader
  }

  return (
    <div className="group relative flex flex-col h-full bg-card p-3 rounded-lg border shadow-sm hover:shadow-lg transition-shadow duration-300">
       <Button size="icon" variant="ghost" className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-background/60 hover:bg-background/80" onClick={handleFavoriteToggle}>
          <Heart className={cn("h-4 w-4", isFavorite ? "text-red-500 fill-current" : "text-foreground")} />
          <span className="sr-only">Toggle Favorite</span>
        </Button>
      <div className="aspect-[2/3] w-full overflow-hidden rounded-md bg-muted mb-4">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          width={300}
          height={450}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={book['data-ai-hint']}
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-sm font-headline font-bold text-foreground truncate">{book.title}</h3>
        <p className="text-xs text-muted-foreground mb-2">{book.author}</p>
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-base font-semibold text-primary">${book.price.toFixed(2)}</p>
            <Button size="icon" variant="ghost" className="h-8 w-8" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
