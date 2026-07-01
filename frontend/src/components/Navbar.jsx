import { useState } from "react";
import { Menu, X } from "lucide-react";
import useScroll from "../hooks/useScroll";

export default function Navbar() {

  const scroll = useScroll();
  const scrolled = scroll > 60;
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Story", "Gallery", "Letter", "Playlist", "Future"];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-paper/90 backdrop-blur-xl shadow-[0_1px_0_rgba(184,147,90,0.3)] py-4" : "bg-transparent py-7"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10">

        <div className="flex items-center gap-4">
          <div className="monogram-seal w-10 h-10 text-lg">R&I</div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className={`text-2xl tracking-wide transition ${scrolled ? "text-ink" : "text-paper"}`}
          >
            Our Little Place
          </h2>
        </div>

        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                text-sm uppercase tracking-[2px] transition hover:text-wine
                ${scrolled ? "text-ink-soft" : "text-paper/90"}
              `}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <X className={scrolled ? "text-ink" : "text-paper"} />
            : <Menu className={scrolled ? "text-ink" : "text-paper"} />
          }
        </button>

      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-6 bg-paper/95 backdrop-blur-xl py-8 border-t border-gold-soft">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-ink text-sm uppercase tracking-[2px]"
            >
              {item}
            </a>
          ))}
        </nav>
      )}

    </header>
  );
}
