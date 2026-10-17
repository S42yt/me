import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/icon";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faHouse,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import AeroWindow from "@/components/aero-window";

export const metadata: Metadata = {
  title: "Links - S42",
  description: "All links of S42 in one place",
};

const LINKS = [
  {
    label: "Discord",
    hint: "discord.opengl.tech",
    icon: faDiscord,
    href: "https://discord.opengl.tech",
  },
  {
    label: "GitHub",
    hint: "S42yt",
    icon: faGithub,
    href: "https://github.com/S42yt",
  },
  {
    label: "Ko-fi",
    hint: "support me",
    icon: faMugHot,
    href: "https://ko-fi.com/G2G21YPX94",
  },
  {
    label: "Email",
    hint: "songoku42@outlook.de",
    icon: faEnvelope,
    href: "mailto:songoku42@outlook.de",
  },
];

export default function LinktreePage() {
  return (
    <div className="max-w-md mx-auto px-6 py-24">
      <AeroWindow title="Links - S42">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="/emojis/kuromi_hey.gif"
            alt=""
            aria-hidden="true"
            className="w-16 h-16 object-contain mb-4"
          />
          <h1
            className="font-display font-black leading-[0.85] tracking-tight mb-3"
            style={{
              fontSize: "clamp(3rem, 14vw, 5rem)",
              color: "var(--text)",
            }}
          >
            S42.
          </h1>
          <p className="eyebrow">Developer · UI/UX · Performance</p>
        </div>

        <div className="section-rule mb-8" />

        <ul className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <li key={link.label} className="panel overflow-hidden">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="row-link flex min-h-14 items-center justify-between px-5 py-4"
              >
                <span className="flex items-center gap-3">
                  <Icon
                    icon={link.icon}
                    className="w-4 h-4"
                    style={{ color: "var(--text-tertiary)" }}
                  />
                  <span className="flex flex-col text-left">
                    <span className="text-sm" style={{ color: "var(--text)" }}>
                      {link.label}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {link.hint}
                    </span>
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="row-arrow"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn">
            <Icon icon={faHouse} className="w-3.5 h-3.5" />
            Portfolio
          </Link>
        </div>
      </AeroWindow>
    </div>
  );
}
