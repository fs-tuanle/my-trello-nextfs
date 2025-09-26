import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export function getItemUrl(board: { id: number; name: string }) {
  const slug = slugify(board.name);
  return `${board.id}-${slug}`;
}

export function parseItemId(slug: string) {
  const id = slug.split("-")[0];
  return parseInt(id);
}

export function convertIsoDate(isoDate: string) {
  const date = new Date(isoDate);
  const formatted = date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formatted;
}
