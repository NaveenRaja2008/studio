// 'use server';
/**
 * @fileOverview Book recommendation AI agent.
 *
 * - getBookRecommendations - A function that handles the book recommendation process.
 * - BookRecommendationsInput - The input type for the getBookRecommendations function.
 * - BookRecommendationsOutput - The return type for the getBookRecommendations function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BookRecommendationsInputSchema = z.object({
  browsingHistory: z
    .string()
    .describe(
      'The user browsing history, as a string of book titles and descriptions.'
    ),
});
export type BookRecommendationsInput = z.infer<typeof BookRecommendationsInputSchema>;

const BookRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of book titles recommended to the user.'),
});
export type BookRecommendationsOutput = z.infer<typeof BookRecommendationsOutputSchema>;

export async function getBookRecommendations(input: BookRecommendationsInput): Promise<BookRecommendationsOutput> {
  return bookRecommendationsFlow(input);
}

const bookRecommendationsPrompt = ai.definePrompt({
  name: 'bookRecommendationsPrompt',
  input: {schema: BookRecommendationsInputSchema},
  output: {schema: BookRecommendationsOutputSchema},
  prompt: `You are a book recommendation expert. Based on the user's browsing history, you will recommend books that the user might enjoy.

Browsing History: {{{browsingHistory}}}

Recommendations:`,
});

const bookRecommendationsFlow = ai.defineFlow(
  {
    name: 'bookRecommendationsFlow',
    inputSchema: BookRecommendationsInputSchema,
    outputSchema: BookRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await bookRecommendationsPrompt(input);
    return output!;
  }
);
