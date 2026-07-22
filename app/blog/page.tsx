"use client";

// app/blog/page.tsx
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import StaggerText from "@/components/stagger-text";

const BRAND_GREEN = "#1A7A4A";

type Article = {
    id: string;
    category: string;
    title: string;
    image: string;
    content: string;
};

// Swap these images for your real ones in /public/blog, and content for the full article body.
const ARTICLES: Article[] = [
    {
        id: "healthy-foods",
        category: "NUTRITION",
        title: "10 Healthy Foods Every Pregnant Woman Should Eat",
        image: "/assets/images/nutrition.png",
        content:
            "Eating well during pregnancy doesn't have to be complicated. Focus on whole foods like leafy greens, beans, eggs, dairy, and fatty fish for key nutrients such as folate, iron, calcium, and omega-3s. Small, balanced meals throughout the day can also help manage nausea and energy levels. Always check with your doctor before starting any new supplement.",
    },
    {
        id: "safe-exercise",
        category: "WELLNESS",
        title: "Safe Exercise During Pregnancy",
        image: "/assets/images/wellness.png",
        content:
            "Staying active during pregnancy can ease common discomforts and prepare your body for labor. Low-impact options like walking, swimming, prenatal yoga, and light strength training are generally considered safe for most pregnancies. Listen to your body, stay hydrated, and avoid exercises that involve lying flat on your back after the first trimester or carry a high risk of falling.",
    },
    {
        id: "hospital-bag",
        category: "PREPARATION",
        title: "Preparing Your Hospital Bag: A Complete Checklist",
        image: "/assets/images/preparation.png",
        content:
            "Packing your hospital bag by your third trimester can bring peace of mind. Include your ID and insurance documents, comfortable clothing, toiletries, a phone charger, and going-home outfits for both you and baby. Don't forget snacks for after delivery and any comfort items that help you relax, like a favorite pillow or playlist.",
    },
];

export default function BlogPage() {
    const [activeArticle, setActiveArticle] = useState<Article | null>(null);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
                <StaggerText
                    as="h1"
                    text="Tips, Guides & Real Stories"
                    className="text-3xl font-bold text-gray-900 sm:text-4xl"
                />
                <p className="mt-3 text-sm text-gray-600">
                    Helpful content to support you on your pregnancy journey.
                </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {ARTICLES.map((article) => (
                    <article key={article.id} className="flex flex-col">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span
                            className="mt-4 text-xs font-bold tracking-wide"
                            style={{ color: BRAND_GREEN }}
                        >
                            {article.category}
                        </span>
                        <h2 className="mt-1 text-base font-bold text-gray-900">
                            {article.title}
                        </h2>
                        <button
                            type="button"
                            onClick={() => setActiveArticle(article)}
                            className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
                            style={{ color: BRAND_GREEN }}
                        >
                            Read More →
                        </button>
                    </article>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <button
                    type="button"
                    className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BRAND_GREEN }}
                >
                    View All Articles
                </button>
            </div>

            {/* Article modal */}
            {activeArticle && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                    onClick={() => setActiveArticle(null)}
                >
                    <div
                        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveArticle(null)}
                            aria-label="Close"
                            className="absolute right-4 top-4 rounded-full p-1.5 text-gray-500 hover:bg-gray-100"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={activeArticle.image}
                                alt={activeArticle.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <span
                            className="mt-5 block text-xs font-bold tracking-wide"
                            style={{ color: BRAND_GREEN }}
                        >
                            {activeArticle.category}
                        </span>
                        <h2 className="mt-2 text-xl font-bold text-gray-900">
                            {activeArticle.title}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-gray-700">
                            {activeArticle.content}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}