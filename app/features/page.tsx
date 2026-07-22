// app/features/page.tsx
import Image from "next/image";
import { Heart, Bell, BookOpen, Apple, Users, MessageCircle } from "lucide-react";
import StaggerText from "@/components/stagger-text";

const BRAND_GREEN = "#1A7A4A";
const MINT_BG = "#E8F5EC";

// Illustrated icons - drop your images into /public/features with these filenames.
const ILLUSTRATED_FEATURES = [
    {
        title: "Track Your Pregnancy",
        description: "Monitor your baby's growth and your health.",
        image: "/assets/images/track-pregnancy.png",
    },
    {
        title: "Smart Reminders",
        description: "Get reminders for appointments and medications.",
        image: "/assets/images/smart-reminders.png",
    },
    {
        title: "Learn & Prepare",
        description: "Access expert articles and videos for every stage.",
        image: "/assets/images/learn-prepare.png",
    },
    {
        title: "AI Support",
        description: "Talk to MamaCare (AI) and get answers to your questions.",
        image: "/assets/images/ai-support.png",
    },
    {
        title: "Daily Log",
        description: "Track your meals, symptoms, and daily activities.",
        image: "/assets/images/daily-log.png",
    },
    {
        title: "Nutrition Guidance",
        description: "Get healthy meal tips for you and your baby.",
        image: "/assets/images/nutrition-guidance.png",
    },
    {
        title: "Community",
        description: "Connect with other mothers and share.",
        image: "/assets/images/community.png",
    },
    {
        title: "Appointments",
        description: "Keep track of your appointments and never miss a visit.",
        image: "/assets/images/appointments.png",
    },
];

const SUMMARY_CARDS = [
    {
        Icon: Heart,
        title: "Health Tracking",
        description: "Track your baby's growth and your health.",
    },
    {
        Icon: Bell,
        title: "Smart Reminders",
        description: "Never miss appointments or medications.",
    },
    {
        Icon: BookOpen,
        title: "Education",
        description: "Access expert articles and videos for every stage.",
    },
    {
        Icon: Apple,
        title: "Nutrition Guidance",
        description: "Get healthy meal tips for you and your baby.",
    },
    {
        Icon: Users,
        title: "Community",
        description: "Connect with other mothers and share.",
    },
    {
        Icon: MessageCircle,
        title: "AI Support",
        description: "Ask questions and get instant AI support.",
    },
];

export default function FeaturesPage() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-xl">
                <StaggerText
                    as="h1"
                    text="Everything You Need, All in One Place"
                    className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
                />
                <p className="mt-3 text-sm text-gray-600">
                    MamaCare brings together the tools and support you need for a
                    healthy and happy pregnancy.
                </p>
            </div>

            {/* Illustrated grid - images provided separately */}
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {ILLUSTRATED_FEATURES.map((feature) => (
                    <div key={feature.title} className="text-center sm:text-left">
                        <div className="relative mx-auto h-20 w-20 sm:mx-0">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3
                            className="mt-3 text-sm font-bold"
                            style={{ color: BRAND_GREEN }}
                        >
                            {feature.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Summary cards */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SUMMARY_CARDS.map(({ Icon, title, description }) => (
                    <div
                        key={title}
                        className="rounded-xl border border-gray-200 p-6 text-center transition-shadow hover:shadow-md sm:text-left"
                    >
                        <span
                            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full sm:mx-0"
                            style={{ backgroundColor: MINT_BG }}
                        >
                            <Icon className="h-5 w-5" style={{ color: BRAND_GREEN }} />
                        </span>
                        <h3 className="mt-4 text-sm font-bold text-gray-900">{title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}