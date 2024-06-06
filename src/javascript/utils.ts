import { clsx as c } from "clsx";
import { twMerge } from "tailwind-merge";

export const clsx = (...args: Parameters<typeof c>) => twMerge(c(...args));
