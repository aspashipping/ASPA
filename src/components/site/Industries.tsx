import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Shirt, Cog, FlaskConical, Cpu, Sofa, Car, Wheat, Package,
} from "lucide-react";

const industries = [
  { title: "Textiles & Garments", Icon: Shirt, desc: "High-volume export shipments handled with care and speed." },
  { title: "Machinery", Icon: Cog, desc: "Project cargo, oversized equipment and industrial parts." },
  { title: "Chemicals", Icon: FlaskConical, desc: "Hazardous and regulated freight with full compliance." },
  { title: "Electronics", Icon: Cpu, desc: "Climate-sensitive cargo with secure documentation." },
  { title: "Furniture", Icon: Sofa, desc: "Volumetric and fragile shipments, packed and tracked." },
  { title: "Automotive Components", Icon: Car, desc: "JIT delivery for OEM and aftermarket supply chains." },
  { title: "Agriculture Products", Icon: Wheat, desc: "Bulk, perishable and seasonal cargo across borders." },
  { title: "PVC Products", Icon: Package, desc: "Reliable groupage and FCL solutions for polymer goods." },
];

export function Industries() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="industries" className="container-x py-24 md:py-32">
      <p className="eyebrow mb-6">/ Industries We Serve</p>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Tailored logistics<br />for every business.
        </h2>
        <div className="flex flex-col justify-between gap-6">
          <p className="max-w-md text-base leading-relaxed text-secondary">
            At ASPA, we know every industry carries unique logistics challenges.
            We design specialized solutions for the sectors that move India forward.
          </p>
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => scroll(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border transition hover:bg-muted"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-foreground text-background transition hover:opacity-90"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {industries.map((it, i) => {
          const dark = i === 1;
          return (
            <article
              key={it.title}
              className={`snap-start shrink-0 basis-[78%] sm:basis-[45%] lg:basis-[24%] rounded-2xl border p-6 transition-shadow hover:shadow-card ${
                dark
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-surface"
              }`}
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${
                  dark ? "bg-background/10" : "bg-muted"
                }`}
              >
                <it.Icon size={20} className={dark ? "text-background" : "text-foreground"} />
              </div>
              <h3 className="mt-28 text-lg font-semibold tracking-tight">{it.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-background/70" : "text-muted-foreground"}`}>
                {it.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
