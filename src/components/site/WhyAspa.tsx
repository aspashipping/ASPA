import { motion } from "framer-motion";
import { BadgeIndianRupee, Users, Zap, ShieldCheck, FileCheck2, Globe2 } from "lucide-react";
import why from "@/assets/why-aspa.jpg";

const features = [
  { Icon: BadgeIndianRupee, title: "Competitive Pricing", desc: "Best-in-class rates negotiated through long-standing carrier relationships." },
  { Icon: Users, title: "Experienced Team", desc: "Seasoned operators across freight, customs and documentation." },
  { Icon: Zap, title: "Fast Delivery", desc: "Optimized routing and proactive coordination at every leg." },
  { Icon: ShieldCheck, title: "Cargo Security", desc: "End-to-end chain of custody and insured protection." },
  { Icon: FileCheck2, title: "Reliable Documentation", desc: "Zero-error compliance for smooth cross-border movement." },
  { Icon: Globe2, title: "Global Network", desc: "100+ partners across every major trade lane and port." },
];

export function WhyAspa() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-x">
        <p className="eyebrow mb-6">/ Why ASPA</p>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={why}
              alt="ASPA precision logistics"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Built for businesses that can't afford to wait.
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="bg-surface p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted">
                    <f.Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
