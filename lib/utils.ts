import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function replaceDoubleQuotes(text: string): string {
  // return text.replace(/"/g, "'");
  return text.replace(/"/g, '&quot;');
}

export function extractLabelAndType(input: string): {
  label: string;
  type: string;
} {
  // expected input: 'label¡!type¡!'
  const [label, type] = input.split('¡!');

  return {
    label: label.trim(),
    type: type?.trim().replace('!¡', '') || 'default',
  };
}
