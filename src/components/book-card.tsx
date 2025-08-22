"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Book, Order } from '@/lib/types';
import { ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { toast } = useToast();
  const router = useRouter();

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
      
      // Optional: redirect to orders page after adding
      // router.push('/orders');

    } catch (error) {
      console.error('Failed to add to cart:', error);
      toast({
        title: "Error",
        description: "Could not add item to orders. Please try again.",
        variant: "destructive",
      });
    }
  };


  return (
    <div className="group relative flex flex-col h-full bg-card p-3 rounded-lg border shadow-sm hover:shadow-lg transition-shadow duration-300">
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
