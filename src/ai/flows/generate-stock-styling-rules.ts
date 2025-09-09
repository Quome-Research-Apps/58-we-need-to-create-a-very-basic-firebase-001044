// src/ai/flows/generate-stock-styling-rules.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate styling rules for stock data.
 *
 * - generateStockStylingRules - A function that triggers the styling rule generation flow.
 * - GenerateStockStylingRulesInput - The input type for the generateStockStylingRules function.
 * - GenerateStockStylingRulesOutput - The output type for the generateStockStylingRules function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStockStylingRulesInputSchema = z.object({
  stockData: z.string().describe('A JSON string containing the stock data array.'),
});
export type GenerateStockStylingRulesInput = z.infer<
  typeof GenerateStockStylingRulesInputSchema
>;

const GenerateStockStylingRulesOutputSchema = z.object({
  stylingRules: z
    .string()
    .describe(
      'A JSON string containing the styling rules for the stock data.'
    ),
});
export type GenerateStockStylingRulesOutput = z.infer<
  typeof GenerateStockStylingRulesOutputSchema
>;

export async function generateStockStylingRules(
  input: GenerateStockStylingRulesInput
): Promise<GenerateStockStylingRulesOutput> {
  return generateStockStylingRulesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStockStylingRulesPrompt',
  input: {schema: GenerateStockStylingRulesInputSchema},
  output: {schema: GenerateStockStylingRulesOutputSchema},
  prompt: `You are an expert at financial data visualization.
Given the following stock data, suggest styling rules (as a JSON string) to effectively highlight important data points, especially price changes. These rules should include color thresholds for positive and negative changes.

Stock Data: {{{stockData}}}

Return the styling rules as a JSON string.
`,
});

const generateStockStylingRulesFlow = ai.defineFlow(
  {
    name: 'generateStockStylingRulesFlow',
    inputSchema: GenerateStockStylingRulesInputSchema,
    outputSchema: GenerateStockStylingRulesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
