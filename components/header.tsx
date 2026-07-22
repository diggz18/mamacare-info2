"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

const BRAND_GREEN = "#1A7A4A";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center gap-2">
                    <Image
                        src="/assets/images/logo.png"
                        alt="MamaCare"
                        width={140}
                        height={40}
                        priority
                        className="h-9 w-auto object-contain sm:h-10"
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative pb-1 text-[15px] font-medium transition-colors ${isActive
                                    ? "text-gray-900"
                                    : "text-gray-700 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span
                                        className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full"
                                        style={{ backgroundColor: BRAND_GREEN }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop CTA */}
                <Link
                    href="/download"
                    className="hidden shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-block"
                    style={{ backgroundColor: BRAND_GREEN }}
                >
                    Download App
                </Link>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav panel */}
            {isMenuOpen && (
                <nav className="border-t border-black/5 bg-white md:hidden">
                    <div className="flex flex-col gap-1 px-4 py-3">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`rounded-md px-3 py-2.5 text-[15px] font-medium ${isActive
                                        ? "bg-gray-50 text-gray-900"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                        }`}
                                    style={isActive ? { borderLeft: `3px solid ${BRAND_GREEN}` } : undefined}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/download"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
                            style={{ backgroundColor: BRAND_GREEN }}
                        >
                            Download App
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}