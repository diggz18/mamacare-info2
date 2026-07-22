import { Heart, Bell, BookOpen, MessageCircle, Star, Quote } from "lucide-react";

const BRAND_GREEN = "#1A7A4A";
const MINT_BG = "#E8F5EC";
const DARK_GREEN = "#173C2C";

const FEATURES = [
    {
        Icon: Heart,
        title: "Track Your Pregnancy",
        description: "Monitor your baby's growth and your health.",
    },
    {
        Icon: Bell,
        title: "Smart Reminders",
        description: "Get reminders for appointments and medications.",
    },
    {
        Icon: BookOpen,
        title: "Learn & Prepare",
        description: "Access expert articles and guides for every stage.",
    },
    {
        Icon: MessageCircle,
        title: "AI Support",
        description: "Talk to MamaCare (AI) and get answers to your questions.",
    },
];

// Static for now - swap for real reviews and wire up the dots to cycle through them.
const TESTIMONIAL = {
    quote:
        "MamaCare has been my daily partner. The reminders and tips keep me on track and stress free.",
    author: "Chioma",
    detail: "28 weeks pregnant",
};

export default function HeroHighlights() {
    return (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            {/* Feature strip */}
            <div
                className="grid grid-cols-2 gap-6 rounded-2xl p-6 sm:grid-cols-4 sm:gap-6 sm:p-8"
                style={{ backgroundColor: MINT_BG }}
            >
                {FEATURES.map(({ Icon, title, description }) => (
                    <div key={title}>
                        <Icon className="h-6 w-6" style={{ color: BRAND_GREEN }} />
                        <h3 className="mt-3 text-sm font-bold text-gray-900">{title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">
                            {description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Testimonial */}
            <div
                className="relative mt-6 rounded-2xl p-6 pb-10 text-white sm:p-8 sm:pb-12"
                style={{ backgroundColor: DARK_GREEN }}
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <Quote className="h-6 w-6 -scale-x-100 text-white/40" />
                        <p className="mt-2 max-w-lg text-sm text-white/90 sm:text-base">
                            {TESTIMONIAL.quote}
                        </p>
                        <p className="mt-3 text-xs text-white/70">
                            {TESTIMONIAL.author}, {TESTIMONIAL.detail}
                        </p>
                    </div>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-white" />
                        ))}
                    </div>
                </div>

                {/* Carousel dots (static placeholder) */}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}