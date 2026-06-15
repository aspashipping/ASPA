import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import tech from "@/assets/technology.jpg";

const features = [
  { title: "Real-Time Tracking", desc: "Live shipment status across every leg, port and partner." },
  { title: "Shipment Visibility", desc: "Unified dashboards from booking to final delivery." },
  { title: "Documentation Management", desc: "All BLs, invoices and certificates in one secure place." },
  { title: "Automated Updates", desc: "Timely alerts on arrival, customs and exceptions." },
];

export function Technology() {
  return (
    <section className="container-x py-24 md:py-32">
      <p className="eyebrow mb-6">/ Technology</p>
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          Innovation that moves<br />your business.
        </h2>
        <p className="max-w-sm text-base leading-relaxed text-secondary">
          We pair seasoned operations with modern technology — so you always
          know exactly where your cargo is, and what's next.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-border"
        >
          <img
            src={tech}
            alt="ASPA shipment visibility dashboard"
            width={1400}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="bg-surface p-6 lg:p-7">
              <h3 className="text-base font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
