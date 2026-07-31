// components/hero.tsx
import Image from "next/image";
import { Heart } from "lucide-react";
import StoreBadges from "./store-badges";
import StaggerText from "./stagger-text";

const BRAND_GREEN = "#1A7A4A";
const MINT_BG = "#E8F5EC";

export default function Hero() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-0">
            <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-16">
                {/* Left column */}
                <div>
                    <StaggerText
                        as="h1"
                        text="Your Pregnancy Journey, Our Care"
                        className="mt-2 text-4xl font-bold leading-tight text-gray-900 sm:mt-6 sm:text-5xl"
                    />

                    <p className="mt-3 max-w-md text-base text-gray-600 sm:mt-5">
                        MamaCare is your smart companion through every step of pregnancy.
                        Track your health, stay informed and feel supported every day.
                    </p>

                    <div className="mt-4 w-full sm:mt-8">
                        <div className="mx-auto w-fit lg:mx-0">
                            <StoreBadges size="md" />
                        </div>
                    </div>
                </div>

                {/* Right column - phone mockup */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/assets/images/phoneSE.png"
                        alt="MamaCare app preview"
                        width={360}
                        height={720}
                        className="h-auto w-[220px] sm:w-[300px] lg:w-[340px]"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}