import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { orders } from '@/lib/data';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Order } from '@/lib/types';
import { cn } from '@/lib/utils';

function StatusBadge({ status }: { status: Order['status'] }) {
    return (
        <Badge 
            className={cn({
                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': status === 'Delivered',
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': status === 'Shipped',
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': status === 'Processing',
                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': status === 'Cancelled',
            })}
            variant="outline"
        >
            {status}
        </Badge>
    )
}

export default function OrdersPage() {
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
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                           <StatusBadge status={order.status} />
                        </TableCell>
                        <TableCell>{order.itemCount}</TableCell>
                        <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                            <Button variant="outline" size="sm">View Details</Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
