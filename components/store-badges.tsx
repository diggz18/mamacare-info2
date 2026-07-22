// components/store-badges.tsx
import { PlayStoreIcon, AppleIcon } from "./icons";

const SIZES = {
    sm: {
        button: "w-36 gap-1.5 rounded-md px-3 py-1.5",
        icon: "h-4 w-4",
        eyebrow: "text-[8px]",
        label: "text-xs",
    },
    md: {
        button: "w-44 gap-2 rounded-lg px-4 py-2.5",
        icon: "h-6 w-6",
        eyebrow: "text-[10px]",
        label: "text-sm",
    },
} as const;

export default function StoreBadges({
    size = "sm",
}: {
    size?: keyof typeof SIZES;
}) {
    const s = SIZES[size];

    return (
        <div className="flex flex-wrap gap-3">
            <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center bg-black transition-opacity hover:opacity-90 ${s.button}`}
            >
                <PlayStoreIcon className={`shrink-0 ${s.icon}`} />
                <span className="leading-tight">
                    <span className={`block text-white/70 ${s.eyebrow}`}>GET IT ON</span>
                    <span className={`block font-semibold text-white ${s.label}`}>Google Play</span>
                </span>
            </a>
            <a
                href="https://www.apple.com/app-store"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center bg-black transition-opacity hover:opacity-90 ${s.button}`}
            >
                <AppleIcon className={`shrink-0 text-white ${s.icon}`} />
                <span className="leading-tight">
                    <span className={`block text-white/70 ${s.eyebrow}`}>Download on the</span>
                    <span className={`block font-semibold text-white ${s.label}`}>App Store</span>
                </span>
            </a>
        </div>
    );
}