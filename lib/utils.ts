import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * formatDate - returns a localized date string from an ISO date
 * @param iso optional ISO date string
 * @param locale optional locale string (defaults to en-US)
 */
export function formatDate(iso?: string, locale = 'en-US') {
  if (!iso) return '';
  try {
    const date = new Date(iso);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch (e) {
    return iso;
  }
}
