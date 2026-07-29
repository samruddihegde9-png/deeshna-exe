import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto mt-20 mb-10 max-w-6xl px-4">
      <div className="pixel-frame flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <span className="pixel text-[0.6rem] text-primary">
          ♥ MADE WITH PIXELS, COFFEE & CODE · © 2026 
        </span>
      </div>
    </footer>
  );
};
