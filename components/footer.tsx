import Link from "next/link";
import Image from "next/image";
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    TikTokIcon,
    PlayStoreIcon,
    AppleIcon,
} from "./icons";

const FOOTER_GREEN = "#173C2C";

const QUICK_LINKS = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

const SUPPORT_LINKS = [
    { label: "Help Center", href: "/help" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "FAQ", href: "/faq" },
];

const SOCIALS = [
    { label: "Facebook", href: "https://whatsapp.com/channel/0029VbD5keq4Y9ljPLjfdm2t", Icon: FacebookIcon, target:"_blank" },
    { label: "Instagram", href: "https://www.instagram.com/mamacare_ng?igsh=MWE2NjMyeXJia2JtNQ==&utm_source=ig_contact_invite", Icon: InstagramIcon, target:"_blank" },
    { label: "Twitter", href: "https://x.com/mamacare_ng?s=11", Icon: TwitterIcon, target:"_blank" },
    { label: "TikTok", href: "https://www.tiktok.com/@mamacare_ng?_r=1&_t=ZS-98KMj8fkLgd", Icon: TikTokIcon, target:"_blank" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: FOOTER_GREEN }} className="text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
                    {/* Brand column */}
                    <div className="flex flex-col items-center lg:pr-6 sm:items-start">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/assets/images/logo.png"
                                alt="MamaCare"
                                width={140}
                                height={40}
                                className="h-20 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="mt-4 text-sm text-white/80">Your pregnancy companion.</p>
                        <p className="text-sm text-white/80">Every step of the way.</p>

                        <div className="mt-5 flex items-center justify-center gap-4 sm:justify-start">
                            {SOCIALS.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-base font-semibold">Quick Links</h3>
                        <ul className="mt-4 flex flex-col items-center space-y-3 sm:items-start">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/80 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support links */}
                    <div>
                        <h3 className="text-base font-semibold">Support</h3>
                        <ul className="mt-4 flex flex-col items-center space-y-3 sm:items-start">
                            {SUPPORT_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/80 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download the app */}
                    <div>
                        <h3 className="text-base font-semibold">Download the App</h3>
                        <div className="mt-3 flex flex-col items-center gap-2 sm:items-start">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.mamacareng.app&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-36 items-center gap-1.5 rounded-md bg-black px-3 py-1.5 transition-opacity hover:opacity-90"
                            >
                                <PlayStoreIcon className="h-4 w-4 shrink-0" />
                                <span className="leading-tight">
                                    <span className="block text-[8px] text-white/70">GET IT ON</span>
                                    <span className="block text-xs font-semibold text-white">Google Play</span>
                                </span>
                            </a>
                            <a
                                href="https://apps.apple.com/ng/app/mamacare/id6787990356"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-36 items-center gap-1.5 rounded-md bg-black px-3 py-1.5 transition-opacity hover:opacity-90"
                            >
                                <AppleIcon className="h-4 w-4 shrink-0 text-white" />
                                <span className="leading-tight">
                                    <span className="block text-[8px] text-white/70">Download on the</span>
                                    <span className="block text-xs font-semibold text-white">App Store</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/70">
                    © {year} MamaCare. All rights reserved.
                </div>
            </div>
        </footer>
    );
}