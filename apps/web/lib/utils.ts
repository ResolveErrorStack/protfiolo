import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


/**
 * Merge Tailwind CSS classes safely
 */
export function cn(
  ...inputs: ClassValue[]
) {
  return twMerge(
    clsx(inputs)
  );
}


/**
 * Format date
 */
export function formatDate(
  date: string
) {

  return new Intl.DateTimeFormat(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(
    new Date(date)
  );

}


/**
 * Shorten long text
 */
export function truncate(
  text: string,
  length: number = 100
) {

  if (text.length <= length) {
    return text;
  }

  return (
    text.substring(0, length) +
    "..."
  );

}


/**
 * Generate random ID
 */
export function generateId() {

  return Math.random()
    .toString(36)
    .substring(2, 10);

}
