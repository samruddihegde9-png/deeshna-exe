import { useEffect, useState } from "react";
import room from "@/assets/pixel/room-study.png";
import cat from "@/assets/pixel/cat-sprite.png.asset.json";
import {
  profile,
  experience,
  projects,
  technicalSkills,
  certifications,
  languages,
} from "@/data/resume";

const line = "hello! acca student · finance + data";

type Hotspot = {
  id: string;
  label: string;
  style: { left: string; top: string; width: string; height: string };
  title: string;
  body: string[];
};

const hotspots: Hotspot[] = [
  {
    id: "laptop",
    label: "◇ dashboard",
    style: { left: "40%", top: "41%", width: "27%", height: "40%" },
    title: "DATA & TOOLS",
    body: technicalSkills,
  },
  {
    id: "ledgers",
    label: "◇ ledgers",
    style: { left: "67%", top: "50%", width: "19%", height: "32%" },
    title: "EXPERIENCE",
    body: experience.map((e) => `${e.role} — ${e.org} (${e.period})`),
  },
  {
    id: "board",
    label: "◇ pin board",
    style: { left: "51%", top: "2%", width: "35%", height: "40%" },
    title: "CERTIFICATIONS",
    body: certifications,
  },
  {
    id: "window",
    label: "◇ window",
    style: { left: "17%", top: "2%", width: "30%", height: "54%" },
    title: "ABOUT ME",
    body: [profile.summary],
  },
  {
    id: "notebook",
    label: "◇ notebook",
    style: { left: "33%", top: "80%", width: "30%", height: "18%" },
    title: "RESEARCH & PROJECTS",
    body: projects.map((p) => `${p.name} — ${p.tagline}`),
  },
  {
    id: "shelf",
    label: "◇ files",
    style: { left: "0%", top: "14%", width: "16%", height: "50%" },
    title: "LANGUAGES",
    body: languages,
  },
];

export function Hero() {
  const [typed, setTyped] = useState("");
  const [active, setActive] = useState<Hotspot | null>(null);
  const [meow, setMeow] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(line.slice(0, i));
      if (i >= line.length) clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    if (!meow) return;
    const t = setTimeout(() => setMeow(false), 1600);
    return () => clearTimeout(t);
  }, [meow]);

  return (
    <section className="mx-auto mt-8 max-w-6xl px-4">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="pixel text-[0.6rem] text-primary">v1.0.0 · DREAM MODE ACTIVE</p>
          <h1 className="pixel mt-3 text-[clamp(2rem,6vw,4.6rem)] leading-none text-primary drop-shadow-[3px_3px_0_var(--color-frame-deep)]">
            DEESHNA J SHETTY.EXE
          </h1>
          <p className="pixel mt-3 text-[0.7rem] tracking-widest text-foreground">
            {profile.title}
          </p>

          <div className="pixel-frame mt-6 inline-flex min-w-[280px] px-4 py-3">
            <span className="pixel text-[0.7rem] text-primary">
              &gt; {typed}
              <span className="caret ml-1 h-3" />
            </span>
          </div>

          <p className="mt-5 max-w-xl">{profile.summary}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 self-start">
          <StatCard k="ACCA" v="✦" />
          <StatCard k="TOOLS" v="8" />
          <StatCard k="LANGS" v="4" />
        </div>
      </div>

      <div className="pixel-frame scanline relative mt-8 overflow-hidden">
        <div className="pixel absolute left-3 top-3 z-20 text-[0.6rem] text-primary">
          ◇ MY DESK — CLICK AROUND
        </div>
        <img
          src={room}
          alt="pixel art study desk with ledgers, calculator and analytics dashboard"
          className="block w-full"
          width={1536}
          height={768}
          loading="eager"
        />

        {hotspots.map((h) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setActive(h)}
            aria-label={h.title}
            className="group absolute z-10 cursor-pointer border-2 border-transparent transition-colors hover:border-primary hover:bg-primary/10 focus-visible:border-primary focus-visible:outline-none"
            style={h.style}
          >
            <span className="pixel-chip pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.5rem] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {h.label}
            </span>
          </button>
        ))}

        <button
          type="button"
          onClick={() => setMeow(true)}
          aria-label="pet the cat"
          className="float-y absolute bottom-[6%] right-[16%] z-10 w-[7%] cursor-pointer transition-transform hover:scale-110"
        >
          <img src={cat.url} alt="" className="block w-full" loading="lazy" />
          {meow && (
            <span className="pixel-chip absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.5rem]">
              meow!
            </span>
          )}
        </button>

        {active && (
          <div
            className="absolute inset-0 z-30 flex items-center justify-center bg-frame-deep/60 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActive(null)}
          >
            <div
              className="pixel-frame max-h-[85%] w-full max-w-lg overflow-auto p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="pixel text-[0.75rem] text-primary">{active.title}</h3>
                <button
                  type="button"
                  className="pixel-btn-ghost"
                  onClick={() => setActive(null)}
                >
                  X
                </button>
              </div>
              <ul className="mt-4 space-y-2">
                {active.body.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StatCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="pixel-frame px-3 py-3 text-center">
      <div className="pixel text-[0.55rem] text-muted-foreground">{k}</div>
      <div className="pixel mt-2 text-[1.2rem] text-primary">{v}</div>
    </div>
  );
}
