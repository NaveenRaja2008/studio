
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookMarked, User, ShoppingCart, Menu, X, LogIn, UserPlus, BookCopy, Package, LogOut, Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoginToggle = () => setIsLoggedIn(!isLoggedIn);

  const navLinks = [
    { href: '/explore', label: 'Explore' },
    { href: '/#new-arrival', label: 'New Arrival' },
    { href: '/#fiction', label: 'Fiction' },
    { href: '/#children', label: 'Children' },
    { href: '/#self-development', label: 'Self Development' },
  ];

  const userMenuItems = isLoggedIn ? (
    <>
       <DropdownMenuItem asChild>
        <Link href="/favorites" className="flex items-center cursor-pointer">
          <Heart className="mr-2 h-4 w-4" /> My Favorites
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/my-books" className="flex items-center cursor-pointer">
          <BookCopy className="mr-2 h-4 w-4" /> My Books
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/orders" className="flex items-center cursor-pointer">
          <Package className="mr-2 h-4 w-4" /> Track Orders
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLoginToggle} className="flex items-center cursor-pointer">
        <LogOut className="mr-2 h-4 w-4" /> Logout
      </DropdownMenuItem>
    </>
  ) : (
    <>
      <DropdownMenuItem asChild>
        <Link href="/login" className="flex items-center cursor-pointer">
          <LogIn className="mr-2 h-4 w-4" /> Login
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/signup" className="flex items-center cursor-pointer">
          <UserPlus className="mr-2 h-4 w-4" /> Sign Up
        </Link>
      </DropdownMenuItem>
       <DropdownMenuSeparator />
       <DropdownMenuItem asChild>
        <Link href="/favorites" className="flex items-center cursor-pointer">
          <Heart className="mr-2 h-4 w-4" /> My Favorites
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLoginToggle} className="flex items-center cursor-pointer text-xs">
          Simulate Login
      </DropdownMenuItem>
    </>
  );

  if (!isMounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <BookMarked className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Literary Haven</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href ? "text-primary" : "hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Shopping cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="User profile">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {userMenuItems}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <BookMarked className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline text-lg">Literary Haven</span>
                  </Link>
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
