'use server';

/**
 * @fileOverview Generates a personalized anime-style introduction based on portfolio content.
 *
 * - generateAnimeIntro - A function that generates the anime intro.
 * - AnimeIntroInput - The input type for the generateAnimeIntro function.
 * - AnimeIntroOutput - The return type for the generateAnimeIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnimeIntroInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('Description of the video editor portfolio.'),
  targetAudience: z
    .string()
    .describe('The target audience for the video editor.'),
  desiredTone: z
    .string()
    .describe('The desired tone for the anime-style introduction.'),
});
export type AnimeIntroInput = z.infer<typeof AnimeIntroInputSchema>;

const AnimeIntroOutputSchema = z.object({
  introduction: z.string().describe('The generated anime-style introduction.'),
});
export type AnimeIntroOutput = z.infer<typeof AnimeIntroOutputSchema>;

export async function generateAnimeIntro(input: AnimeIntroInput): Promise<AnimeIntroOutput> {
  return generateAnimeIntroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'animeIntroPrompt',
  input: {schema: AnimeIntroInputSchema},
  output: {schema: AnimeIntroOutputSchema},
  prompt: `You are an expert copywriter specializing in creating anime-style introductions.

You will use this information to craft a personalized introduction for the video editor's portfolio.

Portfolio Description: {{{portfolioDescription}}}
Target Audience: {{{targetAudience}}}
Desired Tone: {{{desiredTone}}}

Write a captivating and engaging anime-style introduction that grabs the viewer's attention and highlights the video editor's skills and experience.`,
});

const generateAnimeIntroFlow = ai.defineFlow(
  {
    name: 'generateAnimeIntroFlow',
    inputSchema: AnimeIntroInputSchema,
    outputSchema: AnimeIntroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
