import {
  experience,
  projects,
  technicalSkills,
  softSkills,
  leadership,
  certifications,
  languages,
} from "@/data/resume";

function Title({ tag, text }: { tag: string; text: string }) {
  return (
    <div>
      <p className="pixel text-[0.6rem] text-hot">◆ {tag}</p>
      <h2 className="pixel mt-2 text-[clamp(1.2rem,3vw,2rem)] text-primary">{text}</h2>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto mt-16 max-w-6xl px-4">
      <Title tag="LOG" text="EXPERIENCE" />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {experience.map((e) => (
          <div key={e.org} className="pixel-frame p-4">
            <div className="pixel text-[0.72rem] text-primary">{e.org}</div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="pixel-chip">{e.role}</span>
              <span className="pixel-chip !bg-hot !text-hot-foreground">{e.period}</span>
            </div>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {e.points.map((p) => (
                <li key={p}>▸ {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto mt-16 max-w-6xl px-4">
      <Title tag="QUEST LOG" text="RESEARCH & PROJECTS" />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.id} className="pixel-frame p-4">
            <div className="pixel text-[0.72rem] text-primary">{p.name}</div>
            <p className="mt-2 text-muted-foreground">{p.tagline}</p>
            <ul className="mt-3 space-y-2">
              {p.points.map((pt) => (
                <li key={pt}>▸ {pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto mt-16 max-w-6xl px-4">
      <Title tag="INVENTORY" text="SKILLS" />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="pixel-frame p-4">
          <div className="pixel text-[0.65rem] text-hot">TECHNICAL</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {technicalSkills.map((s) => (
              <span key={s} className="pixel-chip">{s}</span>
            ))}
          </div>
        </div>
        <div className="pixel-frame p-4">
          <div className="pixel text-[0.65rem] text-hot">SOFT</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <span key={s} className="pixel-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExtrasSection() {
  return (
    <section id="extras" className="mx-auto mt-16 max-w-6xl px-4">
      <Title tag="BADGES" text="LEADERSHIP · CERTIFICATIONS" />
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div className="pixel-frame p-4">
          <div className="pixel text-[0.65rem] text-hot">LEADERSHIP & ACTIVITIES</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {leadership.map((l) => (
              <li key={l}>♥ {l}</li>
            ))}
          </ul>
        </div>
        <div className="pixel-frame p-4">
          <div className="pixel text-[0.65rem] text-hot">CERTIFICATIONS</div>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            {certifications.map((c) => (
              <li key={c}>★ {c}</li>
            ))}
          </ul>
        </div>
        <div className="pixel-frame p-4">
          <div className="pixel text-[0.65rem] text-hot">LANGUAGES</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l} className="pixel-chip">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
