import { useState } from "react";
import { profile, whoAmI } from "../content/portfolio.js";
import AboutModal from "./AboutModal.jsx";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <header className="sticky top-3 z-40">
        <div className="mx-auto max-w-6xl px-5">
          <div className="glass-card nav-glass flex items-center justify-between rounded-2xl px-4 py-3">
            <a href="#" className="font-semibold tracking-tight text-zinc-100">
              {profile.name}
            </a>

            <nav className="flex items-center gap-4 text-sm text-zinc-200/80">
              <button
                type="button"
                onClick={() => setAboutOpen(true)}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200/90 transition hover:bg-white/10 hover:text-white"
              >
                Who am I?
              </button>

              <a className="hover:text-white" href="#work">Work</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <AboutModal
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
        items={whoAmI}
      />
    </>
  );
}
