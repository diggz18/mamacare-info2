"use client";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons"; // Adjust import path if needed

export default function ContactPage() {
    return (
        <main className="min-h-screen text-gray-900 py-20 px-6">
            <div className="max-w-[1152px] mx-auto grid md:grid-cols-2 gap-24 items-start">
                {/* LEFT COLUMN - Form */}
                <div>
                    <h1 className="font-bold text-[clamp(28px,5vw,40px)] tracking-[-0.02em] mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-[15px] leading-relaxed max-w-md mb-12">
                        Please feel free to contact us and we will get back to you as soon as we can.
                    </p>

                    <form className="flex flex-col gap-9">
                        {/* Name */}
                        <div className="flex flex-col gap-2.5">
                            <label htmlFor="name" className="text-xs font-semibold tracking-wide text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your full name"
                                required
                                className="bg-transparent border-b border-gray-300 pb-3 text-[15px] focus:outline-none focus:border-gray-900 placeholder:text-gray-400 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2.5">
                            <label htmlFor="email" className="text-xs font-semibold tracking-wide text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                required
                                className="bg-transparent border-b border-gray-300 pb-3 text-[15px] focus:outline-none focus:border-gray-900 placeholder:text-gray-400 transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2.5">
                            <label htmlFor="message" className="text-xs font-semibold tracking-wide text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="How can we help you?"
                                required
                                rows={4}
                                className="bg-transparent border-b border-gray-300 pb-3 text-[15px] focus:outline-none focus:border-gray-900 placeholder:text-gray-400 resize-none transition-colors"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-3">
                            <button
                                type="submit"
                                className="w-full bg-[#1A7A4A] hover:bg-[#166040] transition-colors text-white font-semibold py-3.5 rounded-xl text-sm tracking-wider"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* RIGHT COLUMN - Info */}
                <div className="md:pt-36 space-y-9">
                    {/* Visit Us */}
                    <div>
                        <h2 className="text-base font-bold mb-2 text-gray-900">Visit Us</h2>
                        <p className="text-gray-600 text-[14px] leading-relaxed">
                            Tower A, IHVN Building,<br /> Abuja, Nigeria
                        </p>
                    </div>

                    {/* Talk to Us */}
                    <div>
                        <h2 className="text-base font-bold mb-2 text-gray-900">Talk to Us</h2>
                        <p className="text-gray-600 text-[14px]">+234 904 915 5555</p>
                        <p className="text-gray-600 text-[14px]">support@mamacareng.com</p>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="text-base font-bold mb-4 text-gray-900">Follow Us</h2>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="text-gray-500 hover:text-[#1A7A4A] transition-colors"
                            >
                                <FacebookIcon className="w-5 h-5" />
                            </a>

                            <a
                                href="#"
                                aria-label="X (Twitter)"
                                className="text-gray-500 hover:text-[#1A7A4A] transition-colors"
                            >
                                <TwitterIcon className="w-5 h-5" />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="text-gray-500 hover:text-[#1A7A4A] transition-colors"
                            >
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
