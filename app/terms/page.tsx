"use client";
import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    document.body.classList.add("scrollable");
    return () => document.body.classList.remove("scrollable");
  }, []);

  const sections = [
    {
      title: "1. About MamaCare",
      content:
        "MamaCare is a pregnancy support and wellness platform designed to help expectant mothers organise appointments, manage reminders, track pregnancy progress, access educational content, engage with community resources, and maintain wellness habits during pregnancy. MamaCare is intended to provide informational and organisational support only. MamaCare is not a hospital, healthcare provider, clinic, emergency service, or medical practitioner.",
    },
    {
      title: "2. Eligibility",
      content:
        "To use MamaCare, you must be at least 18 years old or have permission from a parent or guardian, provide accurate information during registration, and use the Service in compliance with applicable laws and regulations. You are responsible for maintaining the confidentiality of your account credentials.",
    },
    {
      title: "3. Medical Disclaimer",
      content:
        "MamaCare does not provide medical diagnosis, treatment, prescriptions, emergency response, or professional medical advice. All information provided through MamaCare is for educational and informational purposes only. You should always consult a qualified healthcare professional regarding medical conditions, pregnancy complications, symptoms, treatment decisions, or emergency situations. If you believe you are experiencing a medical emergency, immediately contact your doctor, hospital, or local emergency services. Do not delay seeking professional medical care because of information obtained through MamaCare.",
    },
    {
      title: "4. User Accounts",
      content:
        "You agree to provide accurate information, keep your account information updated, protect your login credentials, and notify MamaCare immediately of any unauthorised use of your account. MamaCare reserves the right to suspend or terminate accounts that violate these Terms.",
    },
    {
      title: "5. Appointments, Reminders, and Tracking",
      content:
        "MamaCare may provide appointment reminders, medication reminders, wellness reminders, walk and exercise reminders, and pregnancy tracking tools. These features are provided for convenience only. MamaCare does not guarantee reminder delivery, accuracy of user-entered information, or timeliness of notifications. Users remain responsible for managing their own healthcare schedules and decisions.",
    },
    {
      title: "6. Community Guidelines",
      content:
        "MamaCare may provide community features that allow users to interact with one another. Users must not harass others, share abusive content, post false medical information, promote dangerous practices, upload illegal content, or violate the privacy of others. MamaCare reserves the right to remove content, suspend users, or terminate accounts that violate community standards.",
    },
    {
      title: "7. User Content",
      content:
        "You retain ownership of any information, content, comments, images, or materials you upload to MamaCare. By submitting content, you grant MamaCare a limited licence to store and display the content within the Service and to operate and improve the Service. MamaCare will never sell your personal content without your consent.",
    },
    {
      title: "8. Privacy and Data Protection",
      content:
        "Your privacy is important to us. MamaCare collects and processes information in accordance with its Privacy Policy. We implement reasonable security measures to protect user information; however, no system can guarantee absolute security. By using the Service, you acknowledge and accept this risk.",
    },
    {
      title: "9. Intellectual Property",
      content:
        "All rights, titles, and interests in MamaCare — including logos, trademarks, software, designs, graphics, and educational content — are owned by MamaCare or its licensors. You may not copy, modify, reproduce, reverse engineer, or distribute any part of the Service without written permission.",
    },
    {
      title: "10. Acceptable Use",
      content:
        "You agree not to attempt unauthorised access to the Service, interfere with system operations, upload harmful software, use automated tools to extract data, or violate applicable laws. Violation of these Terms may result in suspension or termination.",
    },
    {
      title: "11. Third-Party Services",
      content:
        "MamaCare may contain links, integrations, or references to third-party services. MamaCare is not responsible for third-party content, products, or privacy practices. Users interact with third-party services at their own risk.",
    },
    {
      title: "12. Limitation of Liability",
      content:
        "To the fullest extent permitted by law, MamaCare, its founders, employees, partners, and affiliates shall not be liable for medical outcomes, health complications, user decisions, data loss, service interruptions, or indirect or consequential damages. Your use of the Service is at your own discretion and risk.",
    },
    {
      title: "13. Termination",
      content:
        "MamaCare may suspend or terminate access to the Service if these Terms are violated, fraudulent activity is detected, or user conduct threatens the safety of the platform or community. Users may discontinue use of the Service at any time.",
    },
    {
      title: "14. Changes to the Service",
      content:
        "MamaCare reserves the right to modify features, add new functionality, remove features, or update policies without prior notice where necessary.",
    },
    {
      title: "15. Changes to These Terms",
      content:
        "We may update these Terms from time to time. Continued use of the Service after updates become effective constitutes acceptance of the revised Terms.",
    },
    {
      title: "16. Governing Law",
      content:
        "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising from the use of MamaCare shall be subject to the jurisdiction of the competent courts in Nigeria.",
    },
    {
      title: "17. Contact Us",
      content:
        "If you have questions regarding these Terms, please contact MamaCare at: Email: info@mamacareng.com | Website: www.mamacareng.com | Address: Plot 62, Emeritus Umaru Shehu Avenue, Cadastral Zone C00, Abuja, FCT, Nigeria.",
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
      {/* Content */}
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
            Terms of Use
          </h1>
          <p style={{ fontSize: "14px", color: "var(--muted)", fontFamily: "'Inter', sans-serif" }}>
            Last updated: 16 June 2026
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
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}