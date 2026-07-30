"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Question = {
  q: string;
  a: string;
};

type Category = {
  id: string;
  title: string;
  questions: Question[];
};

const categories: Category[] = [
  {
    id: "account",
    title: "Account & Profile",
    questions: [
      {
        q: "How do I create a MamaCare account?",
        a: "Open the app and tap Sign Up, then enter your full name, email, phone number, and a password. You'll be asked to verify your email before you can sign in for the first time.",
      },
      {
        q: "I forgot my password. How do I reset it?",
        a: "On the sign-in screen, tap Forgot Password and enter the email on your account. We'll send a reset link that's valid for a limited time.",
      },
      {
        q: "Can I change the email or phone number on my account?",
        a: "Yes. Go to Profile > Account Settings to update your details. Changing your email will require you to verify the new address before it takes effect.",
      },
      {
        q: "How do I delete my account?",
        a: "Go to Profile > Account Settings > Delete Account. Deletion is permanent and removes your tracking history, appointments, and community posts, subject to any information we're required to retain by law.",
      },
    ],
  },
  {
    id: "tracking",
    title: "Pregnancy Tracking",
    questions: [
      {
        q: "How is my current pregnancy week calculated?",
        a: "Your week is calculated from the due date you entered when setting up your profile. MamaCare updates this automatically each day, so you don't need to update it yourself.",
      },
      {
        q: "Can I update my due date after setting it?",
        a: "Yes. Go to Profile > Maternal Details to change your due date at any time. Your week and trimester will recalculate immediately based on the new date.",
      },
      {
        q: "Where do I log symptoms or medication?",
        a: "Open the Tracking tab from your dashboard to log medication, appointment notes, and how you're feeling day to day. This information is private to your account.",
      },
    ],
  },
  {
    id: "appointments",
    title: "Appointments & Reminders",
    questions: [
      {
        q: "How do I add an appointment?",
        a: "From your dashboard, tap Appointments > Add New, then enter the date, time, and clinic or provider details. It will appear on your dashboard and in your reminders automatically.",
      },
      {
        q: "How do reminders work?",
        a: "Reminders are generated from your appointments and any custom reminders you create under Reminders > Add Reminder. You'll get a notification ahead of the scheduled time based on your notification settings.",
      },
      {
        q: "I'm not receiving reminder notifications. What should I check?",
        a: "First, confirm notifications are enabled for MamaCare in your phone's system settings. Then check Profile > Notification Preferences inside the app to make sure the relevant reminder type is turned on.",
      },
    ],
  },
  {
    id: "audio",
    title: "Audio Library",
    questions: [
      {
        q: "What kind of content is in the Audio Library?",
        a: "The Audio Library includes guided sessions and audio content designed to support you at different stages of pregnancy, accessible from the Audio tab.",
      },
      {
        q: "Can I listen offline?",
        a: "Yes. Tap the download icon on any track in the Audio Library to save it for offline listening. Downloaded audio is available under Audio > Downloads.",
      },
    ],
  },
  {
    id: "community",
    title: "Community",
    questions: [
      {
        q: "Who can see what I post in the community?",
        a: "Posts and comments in community spaces are visible to other MamaCare users. Avoid sharing sensitive medical information, financial details, or personal identification numbers there.",
      },
      {
        q: "How do I report a post or comment?",
        a: "Tap the menu icon on any post or comment and select Report. Our team reviews reports and takes action according to our community guidelines.",
      },
      {
        q: "Can I delete something I've posted?",
        a: "Yes. Tap the menu icon on your own post or comment and select Delete. This removes it from the community immediately.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Data",
    questions: [
      {
        q: "Is my pregnancy and health information private?",
        a: "Your tracking data, appointment details, and medication logs are private to your account and are not shared with other users. Full details are available in our Privacy Policy.",
      },
      {
        q: "How do I request a copy or deletion of my data?",
        a: "Contact us at info@mamacareng.com or through Settings > Help > Contact Us to request access, correction, or deletion of your personal data.",
      },
      {
        q: "Does MamaCare sell my information?",
        a: "No. MamaCare does not sell personal information. Data is only shared with trusted service providers who help us operate the app, or when required by law.",
      },
    ],
  },
];

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

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
            Support
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
            Frequently Asked Questions
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "var(--muted)",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
            }}
          >
            Answers to common questions about your account, tracking, appointments, and
            more. Can&apos;t find what you&apos;re looking for? Visit the{" "}
            <a href="/help-center" style={{ color: "var(--green)" }}>
              Help Center
            </a>
            .
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "44px" }}>
          {categories.map((category) => (
            <section key={category.id} id={category.id}>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--green)",
                  marginBottom: "16px",
                }}
              >
                {category.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                {category.questions.map((item, i) => {
                  const itemId = `${category.id}-${i}`;
                  const isOpen = openId === itemId;
                  return (
                    <div
                      key={itemId}
                      style={{
                        borderTop: i === 0 ? "none" : "1px solid var(--border)",
                      }}
                    >
                      <button
                        onClick={() => toggle(itemId)}
                        aria-expanded={isOpen}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px",
                          textAlign: "left",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          padding: "18px 20px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "var(--fg)",
                        }}
                      >
                        <span>{item.q}</span>
                        <ChevronDown
                          size={18}
                          color="var(--muted)"
                          aria-hidden="true"
                          style={{
                            flexShrink: 0,
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      </button>
                      {isOpen && (
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "14px",
                            color: "var(--muted)",
                            lineHeight: 1.7,
                            padding: "0 20px 18px",
                          }}
                        >
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
