import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#network", label: "Network" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`absolute inset-x-0 top-0 z-50 transition-colors ${open ? "bg-neutral-950 md:bg-transparent" : "bg-transparent"}`}>
      <div className="container-x relative flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <img src={logo} alt="ASPA Shipping Agency" className="h-8 w-auto object-contain md:h-10 invert brightness-0" />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-100 hover:scale-[1.02]">Get Quote</a>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-neutral-950 md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-base font-semibold text-neutral-950 transition-all hover:bg-neutral-100 mt-2">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
