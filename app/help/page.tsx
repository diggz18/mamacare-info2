"use client";

import { useMemo, useState } from "react";
import {
  Search,
  HeartPulse,
  CalendarClock,
  Bell,
  Music2,
  Users,
  ShieldCheck,
  UserCog,
  Mail,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

type Topic = {
  icon: typeof HeartPulse;
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

const topics: Topic[] = [
  {
    icon: UserCog,
    title: "Account & Profile",
    description:
      "Set up your account, update your details, change your password, or close your account.",
    href: "/faq#account",
    keywords: ["account", "password", "profile", "login", "sign up", "delete account"],
  },
  {
    icon: HeartPulse,
    title: "Pregnancy Tracking",
    description:
      "How your due date and week are calculated, and how to update them as your pregnancy progresses.",
    href: "/faq#tracking",
    keywords: ["due date", "week", "trimester", "tracking", "pregnancy"],
  },
  {
    icon: CalendarClock,
    title: "Appointments & Reminders",
    description:
      "Add appointments, set reminders, and manage the notifications you receive around them.",
    href: "/faq#appointments",
    keywords: ["appointment", "reminder", "schedule", "clinic", "notification"],
  },
  {
    icon: Music2,
    title: "Audio Library",
    description:
      "Find, download, and play guided sessions and audio content for offline listening.",
    href: "/faq#audio",
    keywords: ["audio", "library", "download", "offline", "sound"],
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Posting, commenting, reporting content, and staying safe in shared community spaces.",
    href: "/faq#community",
    keywords: ["community", "post", "comment", "report", "block"],
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Data",
    description:
      "What we collect, how it is used, and how to request access, correction, or deletion of your data.",
    href: "/faq#privacy",
    keywords: ["privacy", "data", "security", "consent", "rights"],
  },
];

const contactChannels = [
  {
    icon: Mail,
    label: "Email support",
    value: "info@mamacareng.com",
    detail: "Typical reply time is within one business day.",
  },
  {
    icon: MessageCircle,
    label: "In-app support",
    value: "Settings > Help > Contact Us",
    detail: "Send a message directly from the app with your account details attached.",
  },
];

export default function HelpCenterPage() {
  const [query, setQuery] = useState("");

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return topics;
    return topics.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.includes(q))
    );
  }, [query]);

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
          maxWidth: "880px",
          margin: "0 auto",
          padding: "60px 24px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "36px" }}>
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
            Help Center
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            Find answers about your account, your pregnancy tracker, and everything else
            inside MamaCare. Can&apos;t find what you need? Reach out to us directly below.
          </p>
        </div>

        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "14px 18px",
            marginBottom: "40px",
            background: "var(--bg)",
          }}
        >
          <Search size={18} color="var(--muted)" aria-hidden="true" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search for a topic, e.g. "reminders" or "due date"'
            aria-label="Search help topics"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "var(--fg)",
            }}
          />
        </div>

        {/* Topic grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          {filteredTopics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <a
                key={i}
                href={topic.href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "22px",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "var(--green)",
                    opacity: 0.12,
                  }}
                  aria-hidden="true"
                />
                <div style={{ marginTop: "-32px", marginLeft: "8px" }}>
                  <Icon size={22} color="var(--green)" aria-hidden="true" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "var(--fg)",
                    margin: "14px 0 8px",
                  }}
                >
                  {topic.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "var(--muted)",
                    lineHeight: 1.6,
                    marginBottom: "12px",
                  }}
                >
                  {topic.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--green)",
                  }}
                >
                  View answers
                  <ChevronRight size={14} aria-hidden="true" />
                </span>
              </a>
            );
          })}

          {filteredTopics.length === 0 && (
            <div
              style={{
                gridColumn: "1 / -1",
                border: "1px dashed var(--border)",
                borderRadius: "14px",
                padding: "32px",
                textAlign: "center",
                fontFamily: "'Inter', sans-serif",
                color: "var(--muted)",
                fontSize: "14px",
              }}
            >
              No topics match &quot;{query}&quot;. Try a different word, or contact support
              below.
            </div>
          )}
        </div>

        {/* Contact section */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "36px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              color: "var(--fg)",
              marginBottom: "20px",
            }}
          >
            Still need help?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {contactChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <div
                  key={i}
                  style={{
                    borderLeft: "3px solid var(--border)",
                    paddingLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <Icon size={16} color="var(--green)" aria-hidden="true" />
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "var(--fg)",
                      }}
                    >
                      {channel.label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "var(--fg)",
                      marginBottom: "4px",
                    }}
                  >
                    {channel.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "var(--muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {channel.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
