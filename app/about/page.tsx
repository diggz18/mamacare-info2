// app/about/page.tsx
import Image from "next/image";
import { Check } from "lucide-react";
import StaggerText from "@/components/stagger-text";

const BRAND_GREEN = "#1A7A4A";
const MINT_BG = "#E8F5EC";

const CHECKLIST = [
    "Personalized for You",
    "Evidence-Based Content",
    "Safe & Secure",
    "Made for Every Mama",
];

export default function AboutPage() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Left column */}
                <div>
                    <StaggerText
                        as="h1"
                        text="Care that understands you, every step of the way."
                        className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
                    />
                    <p className="mt-5 max-w-md text-base text-gray-600">
                        MamaCare combines technology and expert healthcare to support
                        mothers with personalized insights. AI support, and tools that
                        make pregnancy simpler and healthier.
                    </p>

                    <ul className="mt-8 space-y-4">
                        {CHECKLIST.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span
                                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
                                    style={{ backgroundColor: MINT_BG }}
                                >
                                    <Check className="h-4 w-4" style={{ color: BRAND_GREEN }} />
                                </span>
                                <span className="text-sm font-medium text-gray-800">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <h2 className="mt-10 text-xl font-bold text-gray-900">About MamaCare</h2>
                    <p className="mt-4 text-base text-gray-600">
                        MamaCare is a digital maternal wellness platform designed to
                        support women throughout pregnancy with trusted guidance,
                        personalized tools, and a supportive community.
                    </p>
                    <p className="mt-4 text-base text-gray-600">
                        Our mission is to make pregnancy simpler, safer, and more
                        manageable by helping mothers stay informed, organized, and
                        connected every step of the way.
                    </p>
                    <p className="mt-4 text-base text-gray-600">
                        Pregnancy is one of life&apos;s most important journeys, yet many
                        mothers face challenges such as missed appointments, forgotten
                        medications, limited access to reliable information, and a lack
                        of emotional and community support. MamaCare was created to
                        address these challenges through a simple, user-friendly mobile
                        experience tailored to the needs of modern mothers.
                    </p>
                </div>

                {/* Right column - photo, edges fade into the page background */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/assets/images/about-women.png"
                        alt="Expecting mother smiling"
                        width={420}
                        height={560}
                        className="h-auto w-full max-w-sm object-cover"
                        style={{
                            maskImage:
                                "radial-gradient(ellipse 75% 75% at center, black 55%, transparent 100%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 75% 75% at center, black 55%, transparent 100%)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}