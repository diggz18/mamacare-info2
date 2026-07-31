"use client";

import { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    document.body.classList.add("scrollable");
    return () => document.body.classList.remove("scrollable");
  }, []);

  const sections = [
    {
      title: "1. Our Commitment to Your Privacy",
      content: "MamaCare is designed to support mothers throughout their pregnancy journey. We understand that pregnancy information is personal and sensitive. We are committed to handling your information responsibly, securely, and transparently. By using MamaCare, you consent to the practices described in this Privacy Policy.",
    },
    {
      title: "2. Information We Collect",
      content: "We collect information you provide directly, including account credentials (Full Name, Email, Phone Number, Password, Date of Birth, and optional Profile Photo) and Maternal Specifics (Pregnancy Due Date and Week Information). You may also optionally provide Wellness & Clinical Tracking data (pregnancy progress, appointment details, medication logs, reminder preferences, and exercise records). If you participate in community features, we collect posts, comments, and shared content. Device metrics like OS type, app version, IP address, and unique identifiers are collected automatically.",
    },
    {
      title: "3. How We Use Your Information",
      content: "We use your information to provide core services (account creation, personalized experiences, pregnancy tracking, and notifications), improve MamaCare performance and develop new features, communicate with you regarding support or system alerts, and ensure platform security by detecting fraud and preventing account abuse.",
    },
    {
      title: "4. Community Content & Safeguards",
      content: "Content you voluntarily share in community areas becomes visible to other users. You are responsible for the information you choose to publish. To safeguard your security, you must avoid sharing sensitive medical information, financial details, or personal identification numbers in these public forums.",
    },
    {
      title: "5. Cookies and Analytics",
      content: "MamaCare uses cookies, analytics tools, and performance monitoring utilities to understand usage patterns, optimize app functionality, and continuously improve the overall user experience.",
    },
    {
      title: "6. Data Storage and Protection",
      content: "We deploy administrative, technical, and organizational measures to protect your information, including encrypted data transmission, secure cloud storage, access controls, and authentication systems. Please note that while we strive to protect your data, no internet-based system can guarantee absolute security.",
    },
    {
      title: "7. Data Retention",
      content: "We retain your personal information only for as long as necessary to provide services, meet statutory legal obligations, resolve disputes, and improve our platform. Users may request full deletion of their accounts subject to operational and legal requirements.",
    },
    {
      title: "8. Sharing of Information",
      content: "MamaCare does not sell personal information. Data is only shared with trusted service providers assisting us with hosting, analytics, customer support, and security. It may also be disclosed if mandated by Nigerian law, court orders, regulatory authorities, or in connection with corporate business transactions like mergers or acquisitions.",
    },
    {
      title: "9. Children's Privacy",
      content: "MamaCare is not intended for individuals under the age of 18 without explicit parental or guardian involvement. We do not knowingly collect personal information from children without appropriate consent.",
    },
    {
      title: "10. Your Privacy Rights",
      content: "Subject to applicable local laws, you have the right to request access to your personal data, request corrections to inaccurate information, request full account deletion, withdraw your consent for data processing, and request restrictions on specific data uses.",
    },
    {
      title: "11. Nigeria Data Protection Compliance",
      content: "MamaCare is formally committed to complying with all applicable Nigerian data protection laws, including the Nigeria Data Protection Act (NDPA) and related national regulations. We process all personal information lawfully, fairly, and transparently.",
    },
    {
      title: "12. Third-Party Services & International Transfers",
      content: "MamaCare integrates with third-party providers for notifications, analytics, and authentication, operating under their own respective policies. Where necessary, data may be processed or stored on secure servers located outside of Nigeria using reasonable measures to ensure legal compliance.",
    },
    {
      title: "13. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. Updated versions will be posted within the mobile application and on our website. Your continued use of MamaCare after updates become effective constitutes your formal acceptance of the revised policy.",
    },
    {
      title: "14. Contact Us",
      content:
        "If you have questions regarding this Privacy Policy or wish to exercise your legal data rights, please contact MamaCare via email at support@mamacareng.com, or write to us at: Plot 62, Emeritus Umaru Shehu Avenue, Cadastral Zone C00, Abuja, FCT, Nigeria.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--fg)",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "60px 24px",
        }}
      >
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--green)",
              marginBottom: "12px",
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "var(--fg)",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Last updated: June 16, 2026
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {sections.map((s, i) => (
            <section
              key={i}
              style={{
                borderLeft: "3px solid var(--border)",
                paddingLeft: "24px",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "var(--fg)",
                  marginBottom: "10px",
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                {s.content}
                {s.title === "14. Contact Us" && (
                  <>
                    {" "}Visit{" "}
                    <a
                      href="https://mamacareng.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--green)", textDecoration: "underline" }}
                    >
                      mamacareng.com
                    </a>
                    .
                  </>
                )}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}