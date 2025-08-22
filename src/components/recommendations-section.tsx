"use client";

import { useEffect, useState } from 'react';
import { fetchBookRecommendations } from '@/lib/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function RecommendationsSection() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRecs() {
      try {
        setLoading(true);
        const recs = await fetchBookRecommendations();
        setRecommendations(recs);
      } catch (err) {
        setError('Could not fetch recommendations.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getRecs();
  }, []);

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-center text-foreground">
          AI-Powered Recommendations
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Based on your (simulated) browsing history, you might also like these books.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && Array.from({ length: 3 }).map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
          {!loading && error && <p className="text-destructive col-span-full text-center">{error}</p>}
          {!loading && !error && recommendations.map((title, index) => (
            <Card key={index} className="flex items-center">
              <CardHeader className="flex-grow">
                <CardTitle className="text-base font-body">{title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
