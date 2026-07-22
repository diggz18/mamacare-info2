// components/hero.tsx
import Image from "next/image";
import { Heart } from "lucide-react";
import StoreBadges from "./store-badges";
import StaggerText from "./stagger-text";

const BRAND_GREEN = "#1A7A4A";
const MINT_BG = "#E8F5EC";

export default function Hero() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left column */}
                <div>
                    <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                        style={{ backgroundColor: MINT_BG, color: BRAND_GREEN }}
                    >
                        <Heart className="h-4 w-4 fill-current" />
                        Smart. Personal. Caring
                    </div>

                    <StaggerText
                        as="h1"
                        text="Your Pregnancy Journey, Our Care"
                        className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl"
                    />

                    <p className="mt-5 max-w-md text-base text-gray-600">
                        MamaCare is your smart companion through every step of pregnancy.
                        Track your health, stay informed and feel supported every day.
                    </p>

                    <div className="mt-8 w-full">
                        <div className="mx-auto w-fit lg:mx-0">
                            <StoreBadges size="md" />
                        </div>
                    </div>
                </div>

                {/* Right column - phone mockup (static image, drop your phone.png in /public) */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/assets/images/phone.png"
                        alt="MamaCare app preview"
                        width={360}
                        height={720}
                        className="h-auto w-[260px] sm:w-[300px] lg:w-[340px]"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}