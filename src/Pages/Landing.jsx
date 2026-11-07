"use client";
import { useState } from "react";

const values = [
  { color: "bg-[#4284F4]", label: "Learn by doing" },
  { color: "bg-[#EA4335]", label: "Connect across disciplines" },
  { color: "bg-[#34A853]", label: "Build with purpose" },
];

const tracks = [
  {
    key: "research",
    tint: "bg-[#EAF2FF] border-[#D2E3FC]",
    label: "Explore the why",
    labelColor: "text-[#1967D2]",
    title: "Research & discovery",
    desc: "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
    tags: "Problem framing · User research · Product thinking",
  },
  {
    key: "design",
    tint: "bg-[#FEF7E0] border-[#FDE293]",
    label: "Shape the experience",
    labelColor: "text-[#B06000]",
    title: "Design & creativity",
    desc: "Translated ideas into thoughtful experiences, from first sketch to aprototype people can use.",
    tags: "UI/UX · Visual design · Prototyping",
  },
  {
    key: "dev",
    tint: "bg-[#E6F4EA] border-[#CEEAD6]",
    label: "Build the solution",
    labelColor: "text-[#188038]",
    title: "Development",
    desc: "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
    tags: "Web · Mobile · Cloud · AI foundation",
  },
];

const ways = [
  {
    icon: "◫",
    title: "Study together",
    desc: "Work through foundations in peer-led learning sessions. Bring your questions, and learn side by side.",
    link: "Study groups & guided practice",
  },
  {
    icon: "< >",
    title: "Try it hands-on",
    desc: "Explore a tool or technique in a workshop, then put it to work in a practice-sized task.",
    link: "Workshops & technical sessions",
  },
  {
    icon: "->",
    title: "Share the process",
    desc: "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
    link: "Project demos & sharing sessions",
  },
];

const steps = [
  {
    n: "01",
    title: "Follow your curiosity",
    desc: "Explore the tracks and find a topic you want to understand better.",
  },
  {
    n: "02",
    title: "Learn alongside others",
    desc: "Join a learning opportunity, ask a question, and share your perspective.",
  },
  {
    n: "03",
    title: "Turn learning into action",
    desc: "Practice through a project, exchange feedback, and pass something on.",
  },
];

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. Start with an interest in technology and be willing to learn. Research and design are part of the journey, too.",
  },
  {
    q: "Is this only for computer science students?",
    a: "Different disciplines bring different perspectives. Explore the tracks to find a starting point that fits your interests.",
  },
  {
    q: "How can I find learning opportunities?",
    a: "Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.",
  },
];

/* ---------- Small pieces ---------- */

function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-[10px] font-medium tracking-wide text-[#5F6368] ${className}`}>
      {children}
    </p>
  );
}

function Arrow({ stroke = "currentColor", className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.33 10h13.23m0 0c0 .32-.12.64-.37.88L11.46 15.6M16.56 10c0-.32-.12-.64-.37-.88L11.46 4.37"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TextLink({ children }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1967D2] hover:underline"
    >
      {children}
      <Arrow className="w-3.5 h-3.5" />
    </a>
  );
}

function PuzzleBlue({ className = "" }) {
  return (
    <svg viewBox="0 0 202 202" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gBlue" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop stopColor="#4284F4" />
          <stop offset="1" stopColor="#8AB4F8" />
        </linearGradient>
      </defs>
      <path
        d="M158.76 56.9c0 3.38 3.69 5.63 7.02 5.11 1.12-.17 2.26-.26 3.42-.26 12.36 0 22.39 10.02 22.39 22.39 0 12.36-10.02 22.38-22.39 22.38-1.16 0-2.3-.09-3.42-.26-3.33-.51-7.02 1.74-7.02 5.11v42.91c0 2.47-2 4.48-4.48 4.48h-42.91c-3.37 0-5.62 3.69-5.11 7.02.17 1.12.26 2.26.26 3.42 0 12.36-10.02 22.39-22.39 22.39-12.36 0-22.39-10.02-22.39-22.39 0-1.16.09-2.3.26-3.42.51-3.33-1.73-7.02-5.11-7.02H14c-2.47 0-4.48-2-4.48-4.48V14c0-2.47 2-4.48 4.48-4.48h43.12c3.39 0 5.64 3.73 5.11 7.08-.19 1.16-.28 2.35-.28 3.56 0 12.36 10.02 22.39 22.39 22.39s22.39-10.02 22.39-22.39c0-1.21-.1-2.4-.28-3.56-.53-3.35 1.72-7.08 5.11-7.08h42.73c2.47 0 4.48 2 4.48 4.48V56.9Z"
        fill="url(#gBlue)"
      />
    </svg>
  );
}

function PuzzleGreen({ className = "" }) {
  return (
    <svg viewBox="0 0 389 279" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gGreen" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop stopColor="#34A853" />
          <stop offset="1" stopColor="#81C995" />
        </linearGradient>
      </defs>
      <path
        d="M70 184.3c0-5.6-6.1-9.3-11.7-8.5-1.9.3-3.8.5-5.7.5-20.6 0-37.2-16.6-37.2-37.1s16.7-37.1 37.2-37.1c1.9 0 3.8.1 5.7.4 5.5.9 11.7-2.9 11.7-8.5V22.8c0-4.1 3.3-7.4 7.5-7.4h71.4c5.6 0 9.3 6.1 8.5 11.6-.3 1.9-.4 3.8-.4 5.7 0 20.5 16.7 37.1 37.2 37.1s37.2-16.6 37.2-37.1c0-1.9-.1-3.8-.4-5.7-.9-5.5 2.9-11.6 8.5-11.6h71.4c4.1 0 7.4 3.3 7.4 7.4V94c0 5.6 6.1 9.3 11.7 8.5 1.9-.3 3.8-.5 5.7-.5 20.6 0 37.2 16.6 37.2 37.1s-16.7 37.1-37.2 37.1c-1.9 0-3.8-.1-5.7-.4-5.5-.9-11.7 2.9-11.7 8.5v71.2c0 4.1-3.3 7.4-7.4 7.4H77.5c-4.1 0-7.5-3.3-7.5-7.4v-71.2Z"
        fill="url(#gGreen)"
      />
    </svg>
  );
}

/* ---------- Hero illustration ---------- */

function HeroArt() {
  return (
    <div className="relative h-auto w-full max-w-[620px] shrink-0 flex justify-center items-center mt-8 lg:mt-50">
      <img
        src="/hero-image.svg"
        alt="Ideas coming together - GDGoC UGM"
        className="w-full h-auto object-contain drop-shadow-xl"
      />
    </div>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    // Menggunakan grid lg:grid-cols-2 agar teks dan gambar pasti bersebelahan 50:50 di layar besar
    <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-24">
      
      {/* BAGIAN KIRI: Teks Utama */}
      <div className="flex w-full flex-col items-start gap-7">
        <div className="flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#4284F4]" />
          <p className="text-xs font-medium text-[#5F6368]">GDGoC UGM • 2026/2027</p>
        </div>

        {/* TIPOGRAFI GOOGLE SANS: Presisi warna, font-weight, dan letter-spacing */}
        <h1 className="text-[52px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[64px] lg:text-[72px] whitespace-nowrap">
          <span className="text-[#202124]">Big ideas.</span>
          <br />
          <span className="text-[#1A73E8]">Built together.</span>
        </h1>

        <p className="max-w-[500px] text-[18px] leading-[1.6] text-[#5F6368]">
          A place for curious minds at <strong>Universitas Gadjah Mada</strong> to learn,
          connect, and build technology that matters.
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#tracks"
            className="flex h-[48px] items-center gap-3 rounded-lg bg-[#1A73E8] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1557b0]"
          >
            Find your learning track
            <Arrow stroke="white" className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="flex h-[48px] items-center gap-3 rounded-lg border border-[#DADCE0] bg-white px-6 text-sm font-medium text-[#1A73E8] transition-colors hover:bg-[#F8FAFF]"
          >
            Get to know us
            <Arrow stroke="#1A73E8" className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-2.5 pt-2">
          <div className="flex -space-x-[4px]">
            {["#4284F4", "#EA4335", "#FBBC04", "#34A853"].map((c) => (
              <span
                key={c}
                className="h-4 w-4 rounded-full border-2 border-white"
                style={{ background: c }}
              />
            ))}
          </div>
          <p className="text-[13px] text-[#5F6368]">Different backgrounds. A shared curiosity.</p>
        </div>
      </div>

      {/* BAGIAN KANAN: Gambar yang diperbesar tapi tidak merusak layout */}
      <div className="flex w-full justify-center lg:justify-end">
        <div className="relative w-full max-w-[540px]">
          <img
            src="/hero-image.svg" // Pastikan nama gambarnya sesuai dengan yang ada di public folder
            alt="Ideas coming together"
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
      
    </section>
  );
}

function ValuesStrip() {
  return (
    <div className="border-y border-[#DADCE0]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4 px-6 py-[26px] lg:px-24">
        {values.map((v) => (
          <div key={v.label} className="flex items-center gap-3.5">
            <span className={`h-2 w-2 ${v.color}`} />
            <p className="text-lg font-medium text-[#242424]">{v.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-2 lg:px-24">
      <div>
        <Eyebrow>A SIMPLE COMMUNITY</Eyebrow>
        <h2 className="mt-4 text-[40px] font-bold leading-[1.1] text-[#242424]">
          Not just learning tech.
          <br />
          Finding your people.
        </h2>
        <div className="mt-6">
          <TextLink>More about GDGoC UGM</TextLink>
        </div>
      </div>
      <div className="max-w-[560px] space-y-4 text-sm leading-relaxed text-[#5F6368]">
        <p>
          Google Developer Groups on Campus, Universitas Gadjah Mada brings students together
          around one simple idea: we can go <b className="text-[#242424]">further</b> when we{" "}
          <b className="text-[#242424]">learn</b> with each other.
        </p>
        <p>
          From your first line of code to your next project idea, there’s room to ask
          questions, share what you know, and try something new.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Student-led", "Peer-powered", "Curiosity-first"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#DADCE0] px-3 py-1 text-[11px] text-[#5F6368]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section id="tracks" className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-24">
      <Eyebrow>FIND YOUR STARTING POINT</Eyebrow>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-[40px] font-bold leading-[1.1] text-[#242424]">
            Many interests. One shared
            <br />
            journey.
          </h2>
          <p className="mt-3 text-sm text-[#5F6368]">
            Follow what excites you. Explore a track, then connect the dots with others.
          </p>
        </div>
        <TextLink>See the overview</TextLink>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {tracks.map((t) => (
          <article
            key={t.key}
            className="overflow-hidden rounded-2xl border border-[#E8EAED] bg-white"
          >
            {/* INI BAGIAN YANG BERUBAH: Menggunakan gambar SVG dari folder public */}
            <div className="relative h-[220px] w-full overflow-hidden border-b border-[#E8EAED] bg-slate-50">
              {t.key === "research" && (
                <img src="/Research-and-Discovery.svg" alt="Research" className="absolute left-0 top-0 h-auto w-full object-cover object-top" />
              )}
              {t.key === "design" && (
                <img src="/Design-and-Creativity.svg" alt="Design" className="absolute left-0 top-0 h-auto w-full object-cover object-top" />
              )}
              {t.key === "dev" && (
                <img src="/Development.svg" alt="Development" className="absolute left-0 top-0 h-auto w-full object-cover object-top" />
              )}
            </div>

            {/* Bagian teks tetap menggunakan data bawaan */}
            <div className="space-y-3 p-5">
              <p className={`text-[10px] font-medium uppercase tracking-wide ${t.labelColor}`}>{t.label}</p>
              <h3 className="text-xl font-bold text-[#242424]">{t.title}</h3>
              <p className="text-sm leading-relaxed text-[#5F6368]">{t.desc}</p>
              
              <hr className="my-4 border-[#E8EAED]" />
              
              <p className="text-[11px] text-[#80868B]">{t.tags}</p>
              <div className="pt-2">
                <TextLink>Explore this track</TextLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Ways() {
  return (
    <section className="bg-[#F1F3F4]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-24">
        <Eyebrow>SOMETHING TO LEARN FROM</Eyebrow>
        <h2 className="mt-4 text-[40px] font-bold leading-[1.1] text-[#242424]">
          Less watching. More making.
        </h2>
        <p className="mt-3 text-sm text-[#5F6368]">
          Learn in a way that turns a new concept into something you can actually use.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ways.map((w) => (
            <article key={w.title} className="space-y-3 rounded-xl border border-[#E8EAED] bg-white p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8EAED] text-xs text-[#1967D2]">
                {w.icon}
              </span>
              <h3 className="text-base font-bold text-[#242424]">{w.title}</h3>
              <p className="text-xs leading-relaxed text-[#5F6368]">{w.desc}</p>
              <p className="text-[11px] font-medium text-[#1967D2]">{w.link}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSpotlight() {
  return (
    <section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-24">
      <div className="rounded-2xl bg-[#FEF0C3] p-6">
        <div className="flex justify-between text-[10px] text-[#80868B]">
          <span>SMALL IDEA, BIG IMPACT</span>
          <span>{"</>"}</span>
        </div>
        <div className="mt-4 rounded-xl border border-[#DADCE0] bg-white p-5 shadow-sm">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FBBC04]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
          </div>
          <p className="mt-3 text-xl font-bold leading-tight text-[#242424]">
            A little less friction.
            <br />
            A better campus day.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-medium">
            <span className="rounded bg-[#E8F0FE] py-2 text-[#1967D2]">Discover</span>
            <span className="rounded bg-[#E6F4EA] py-2 text-[#188038]">Connect</span>
            <span className="rounded bg-[#FCE8E6] py-2 text-[#C5221F]">Share</span>
          </div>
          <p className="mt-3 text-[10px] text-[#80868B]">
            Start with a custom idea. Build a small, useful solution.
          </p>
        </div>
      </div>

      <div className="max-w-[480px]">
        <Eyebrow>BUILD SOMETHING THAT MATTERS</Eyebrow>
        <h2 className="mt-4 text-[40px] font-bold leading-[1.1] text-[#242424]">
          Your next project could start on campus.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#5F6368]">
          What if finding a study partner, booking resources, or navigating campus felt easier?
          Small, familiar problems can be the beginning of meaningful work.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#5F6368]">
          Bring research, design, and development together. Try an idea, get feedback, and make
          the next version better.
        </p>
        <div className="mt-5">
          <TextLink>Explore project-based learning</TextLink>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-24">
      <Eyebrow>MAKE YOUR FIRST MOVE</Eyebrow>
      <h2 className="mt-4 text-[40px] font-bold leading-[1.1] text-[#242424]">
        You don’t need to have it all
        <br />
        figured out.
      </h2>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="border-t border-[#DADCE0] pt-5">
            <p className="text-[32px] font-bold text-[#1967D2]">{s.n}</p>
            <h3 className="mt-3 text-base font-bold text-[#242424]">{s.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#5F6368]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="bg-[#E6F4EA]">
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 py-10 lg:px-24">
        <svg viewBox="0 0 48 48" className="h-14 w-14 shrink-0" aria-hidden="true">
          <path
            d="M24 2c1.6 11.5 10.5 20.4 22 22-11.5 1.6-20.4 10.5-22 22C22.4 34.5 13.5 25.6 2 24 13.5 22.4 22.4 13.5 24 2Z"
            fill="#34A853"
          />
        </svg>
        <div>
          <h2 className="text-2xl font-bold leading-tight text-[#242424]">
            Different majors. Different starting points.
            <br />A place for all of them.
          </h2>
          <p className="mt-2 text-xs text-[#5F6368]">
            You don’t have to be the most experienced person in the room. Curiosity, kindness,
            and a willingness to learn are a good place to start.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-[1fr_1.4fr] lg:px-24">
      <div>
        <Eyebrow>A FEW QUICK QUESTIONS</Eyebrow>
        <h2 className="mt-4 text-[40px] font-bold leading-[1.1] text-[#242424]">
          Wondering
          <br />
          where
          <br />
          to begin?
        </h2>
        <div className="mt-5">
          <TextLink>Ask us a question</TextLink>
        </div>
      </div>

      <div className="divide-y divide-[#DADCE0] border-y border-[#DADCE0]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="py-4">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-[#242424]"
              >
                {f.q}
                <svg
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m5 8 5 5 5-5" stroke="#5F6368" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {isOpen && (
                <p className="mt-2 max-w-[520px] text-xs leading-relaxed text-[#5F6368]">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-24">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#E8F0FE] p-8">
        <div>
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#1967D2]">
            Bring your curiosity.
            <br />
            We’ll build from there.
          </h2>
          <p className="mt-3 text-xs text-[#5F6368]">
            Find a learning track, meet a collaborator, or start a conversation.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <a
            href="#tracks"
            className="rounded-lg bg-[#4284F4] px-6 py-3 text-sm font-medium text-white hover:bg-[#3b78e0]"
          >
            Explore the overview
          </a>
          <a href="#" className="px-1 text-xs font-medium text-[#1967D2] hover:underline">
            Talk to the community
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export default function WelcomeToTheCommunity() {
  return (
    <main
      className="min-h-screen w-full bg-white text-[#242424] antialiased"
      style={{ fontFamily: "'Google Sans', 'Product Sans', Inter, system-ui, sans-serif" }}
    >
      <Hero />
      <ValuesStrip />
      <About />
      <Tracks />
      <Ways />
      <ProjectSpotlight />
      <Steps />
      <Welcome />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
