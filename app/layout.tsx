import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "MamaCare - Your Pregnancy Companion",
  description: "Care. Support. Grow Together.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        {/* Site-wide watermark - sits behind all content on every page */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/assets/images/logo.png')",
            backgroundSize: "min(60vw, 500px)",
          }}
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}