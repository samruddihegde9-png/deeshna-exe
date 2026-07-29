import { useState } from "react";

export function PixelHeader() {
  const [dream, setDream] = useState(true);
  return (
    <header className="sticky top-0 z-40 mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 px-4">
      <div className="pixel-frame flex-1 px-4 py-3">
        <span className="pixel text-[0.7rem] text-primary">♥ DEESHNA.EXE</span>
      </div>
      <button
        onClick={() => {
          setDream(!dream);
          document.documentElement.classList.toggle("dark");
        }}
        className="pixel-frame flex items-center gap-2 px-3 py-3 pixel text-[0.65rem]"
        aria-label="Toggle theme"
      >
        <span className={dream ? "text-primary" : "text-muted-foreground"}>✦ DREAM</span>
        <span className="inline-block h-3 w-8 border-2 border-frame-deep bg-hot" />
        <span className={!dream ? "text-primary" : "text-muted-foreground"}>VOID ☾</span>
      </button>
    </header>
  );
}
