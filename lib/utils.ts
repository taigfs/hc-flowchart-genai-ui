import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function replaceDoubleQuotes(text: string): string {
  // return text.replace(/"/g, "'");
  // return text.replace(/"/g, '&quot;');
  return text;
}

export function extractLabelAndType(input: string): {
  label: string;
  type: string;
} {
  // expected input: 'label¡!type¡!'
  const [label, type] = input.split('¡!');

  return {
    label: label.trim(),
    type: removeNonAlphanumeric(type?.trim().replace('!¡', '')) || 'default',
  };
}

export function removeNonAlphanumeric(text: string): string {
  if (!text) {
    return '';
  }
  return text.replace(/[^a-zA-Z0-9]/g, '');
}
