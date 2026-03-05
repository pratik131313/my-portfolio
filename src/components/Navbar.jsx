import { profile } from "../content/portfolio.js";

export default function Navbar() {
  return (
    <header className="sticky top-3 z-40">
      <div className="mx-auto max-w-6xl px-5">
        <div className="glass-card nav-glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#" className="font-semibold tracking-tight text-zinc-100">
            {profile.name}
          </a>

          <nav className="flex items-center gap-4 text-sm text-zinc-200/80">
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
