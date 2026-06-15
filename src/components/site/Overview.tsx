import { motion } from "framer-motion";
import overview from "@/assets/overview.jpg";

const highlights = [
  "International Freight Forwarder",
  "Customs Clearance",
  "Warehousing",
  "Multimodal Transportation",
  "Pan India Operations",
];

const stats = [
  { value: "100+", label: "Global Partners" },
  { value: "24/7", label: "Support" },
  { value: "Pan India", label: "Coverage" },
  { value: "Multiple", label: "Operational Locations" },
];

export function Overview() {
  return (
    <section
      id="about"
      className="w-full py-24 md:py-32"
      style={{
        background: "linear-gradient(to bottom, oklch(0.18 0 0) 0%, rgba(17, 17, 17, 0.95) 20px, rgba(17, 17, 17, 0.6) 55px, rgba(17, 17, 17, 0.2) 85px, transparent 115px)"
      }}
    >
      <div className="container-x">
        <p className="eyebrow mb-6">/ About ASPA</p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={overview}
              alt="ASPA logistics professional in a modern warehouse facility"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col justify-between gap-12">
            <div>
              <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                A trusted partner for end-to-end cargo movement.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
                ASPA Shipping Agency Pvt. Ltd. delivers freight forwarding,
                customs clearance, warehousing and multimodal transportation as
                one seamless service — built on decades of operational rigour
                and a deeply connected global network.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>



            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-6">
                  <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <h2 className="marquee text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl whitespace-nowrap">
              We Are CHA Approved Custom House Agents and Licensed Multimodal Transporters
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
