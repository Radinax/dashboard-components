import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export type Format = "currency" | "number" | "percent";

export const getFormattedValue = ({
  format,
  value,
}: {
  format: Format;
  value: number;
}) => {
  switch (format) {
    case "currency":
      return `$${formattedNumber(value)}`;
    case "percent":
      return `${value.toFixed(1)}%`;
    default:
      return formattedNumber(value);
  }
};
