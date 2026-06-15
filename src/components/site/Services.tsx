import { motion } from "framer-motion";
import sea from "@/assets/sea-freight.jpg";
import air from "@/assets/air-freight.jpg";
import customs from "@/assets/customs.jpg";
import fcl from "@/assets/fcl.jpg";
import lcl from "@/assets/lcl.jpg";
import warehouse from "@/assets/warehouse.jpg";
import insurance from "@/assets/insurance.jpg";
import trucking from "@/assets/trucking.jpg";

const services = [
  { title: "Sea Freight", desc: "FCL and LCL ocean shipments to every major port worldwide.", img: sea },
  { title: "Air Freight", desc: "Time-critical air cargo with optimized routing and tracking.", img: air },
  { title: "Customs Clearance", desc: "Documentation and compliance handled by licensed experts.", img: customs },
  { title: "FCL Booking", desc: "Dedicated full-container loads with competitive carrier rates.", img: fcl },
  { title: "LCL Booking", desc: "Cost-effective groupage for smaller and consolidated shipments.", img: lcl },
  { title: "Warehousing", desc: "Strategically located storage with inventory visibility.", img: warehouse },
  { title: "Cargo Insurance", desc: "Comprehensive protection for high-value and sensitive cargo.", img: insurance },
  { title: "Truck Transportation", desc: "Reliable pan-India trucking with full chain-of-custody.", img: trucking },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">/ Services</p>
            <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Logistics solutions, engineered end-to-end.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-secondary">
            Eight integrated services designed to move your cargo with
            precision — by sea, by air, and across roads.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
