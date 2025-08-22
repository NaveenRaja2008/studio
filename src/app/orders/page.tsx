
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Order } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Package, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';


function StatusBadge({ status }: { status: Order['status'] }) {
    return (
        <Badge
            className={cn("text-xs", {
                'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200': status === 'Delivered',
                'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200': status === 'Shipped',
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200': status === 'Processing',
                'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200': status === 'Cancelled',
            })}
            variant="outline"
        >
            {status}
        </Badge>
    )
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // On component mount, read orders from localStorage
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      try {
        const parsedOrders = JSON.parse(storedOrders);
        setOrders(parsedOrders);
      } catch (error) {
        console.error("Failed to parse orders from localStorage", error);
        // If parsing fails, set to empty array or some default state
        setOrders([]);
      }
    }
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-headline font-bold">My Orders</h1>
            <p className="text-muted-foreground">
                Track the status of your recent orders.
            </p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>A list of your past and current orders.</CardDescription>
            </CardHeader>
            <CardContent>
                {orders.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    <Table>
                      <TableHeader>
                          <TableRow>
                          <TableHead className="w-[120px]">Order ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Total</TableHead>
                          <TableHead className="text-right sr-only md:not-sr-only">Items</TableHead>
                          <TableHead className="w-[50px] text-right"> </TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody>
                        {orders.map((order) => (
                          <AccordionItem value={`order-${order.id}`} key={order.id} asChild>
                             <TableRow>
                                <TableCell className="font-medium" colSpan={6}>
                                  <div className="flex items-center w-full">
                                    <div className="grid grid-cols-6 w-full items-center">
                                      <div className="font-medium col-span-1">{order.id}</div>
                                      <div className="col-span-1">{new Date(order.date).toLocaleDateString()}</div>
                                      <div className="col-span-1">
                                        <StatusBadge status={order.status} />
                                      </div>
                                      <div className="text-right col-span-1">${order.total.toFixed(2)}</div>
                                      <div className="text-right sr-only md:not-sr-only col-span-1">{order.itemCount}</div>
                                      <div className="text-right col-span-1">
                                          <AccordionTrigger>
                                            <span className="sr-only">View Details</span>
                                          </AccordionTrigger>
                                      </div>
                                    </div>
                                  </div>
                                  <AccordionContent>
                                    <div className="p-6 bg-muted/50 mt-4">
                                      <h4 className="font-medium mb-4">Order Items</h4>
                                      <div className="grid gap-4">
                                        {order.items.map(item => (
                                          <div key={item.id} className="flex items-center gap-4">
                                            <Image src={item.coverImage} alt={item.title} width={60} height={90} className="rounded-md" data-ai-hint={item['data-ai-hint']}/>
                                            <div className="flex-grow">
                                              <p className="font-medium">{item.title}</p>
                                              <p className="text-sm text-muted-foreground">{item.author}</p>
                                            </div>
                                            <p className="font-medium">${item.price.toFixed(2)}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </TableCell>
                              </TableRow>
                          </AccordionItem>
                        ))}
                      </TableBody>
                    </Table>
                  </Accordion>
                ) : (
                    <div className="text-center py-16">
                        <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-medium">No orders found</h3>
                        <p className="mt-1 text-sm text-muted-foreground">You haven't placed any orders yet.</p>
                        <Link href="/">
                            <Button className="mt-6">Start Shopping</Button>
                        </Link>
                    </div>
                )}
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
