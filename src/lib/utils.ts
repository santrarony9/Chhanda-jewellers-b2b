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

export function compressImage(file: File, maxWidth = 1200, maxHeight = 1200, quality = 0.8): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round((width * maxHeight) / height);
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    resolve(event.target?.result as string);
                    return;
                }

                ctx.drawImage(img, 0, 0, width, height);
                const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
                resolve(compressedBase64);
            };
            img.onerror = () => {
                resolve(event.target?.result as string);
            };
        };
        reader.onerror = (err) => {
            reject(err);
        };
    });
}
