import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatWeight(carat: number | undefined | null): string {
    if (carat === undefined || carat === null || isNaN(carat)) return "";

    const fullCarats = Math.floor(carat);
    // Use Math.round to avoid floating point issues like 0.2999999999999998
    const cents = Math.round((carat - fullCarats) * 100);

    if (fullCarats > 0 && cents > 0) {
        return `${fullCarats} Carat ${cents} Cent`;
    } else if (fullCarats > 0) {
        return `${fullCarats} Carat`;
    } else if (cents > 0) {
        return `${cents} Cent`;
    } else {
        return "0 Carat";
    }
}
