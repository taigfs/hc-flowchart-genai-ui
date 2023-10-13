import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { promptTemplate } from '@/app/prompts/prompt-1';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response: any = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    stream: true,
    temperature: 0.1,
    max_tokens: 300,
    prompt: promptTemplate(prompt),
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
