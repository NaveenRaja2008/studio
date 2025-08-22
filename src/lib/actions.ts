"use server";

import { getBookRecommendations } from "@/ai/flows/book-recommendations";

export async function fetchBookRecommendations() {
  try {
    // In a real application, this would be dynamically generated
    // based on the user's actual browsing history.
    const browsingHistory = `
      - The Martian by Andy Weir: A science fiction novel about an astronaut stranded on Mars.
      - The Hitchhiker's Guide to the Galaxy by Douglas Adams: A comedic science fiction series.
      - The Hobbit by J.R.R. Tolkien: A high fantasy novel.
    `;
    
    const result = await getBookRecommendations({ browsingHistory });
    return result.recommendations;
  } catch (error) {
    console.error("Error fetching book recommendations:", error);
    return [];
  }
}
