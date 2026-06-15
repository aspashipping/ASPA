import { ArrowRight, Mail, Phone, Globe } from "lucide-react";

const offices = [
  { city: "Lucknow", phone: "+91 8287773440", email: "infoaspashipping@gmail.com" },
  { city: "Delhi", phone: "+91 8287773440", email: "infoaspashipping@gmail.com" },
  { city: "Mumbai", phone: "+91 8287773440", email: "infoaspashipping@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="container-x py-24 md:py-32">
      <div className="rounded-3xl bg-surface p-8 shadow-soft md:p-14 lg:p-20">
        <p className="eyebrow mb-6">/ Contact</p>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
          <h2 className="text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            Let's move<br />cargo smarter.
          </h2>
          <div className="flex flex-col gap-5 lg:items-end">
            <p className="max-w-md text-base leading-relaxed text-secondary lg:text-right">
              Tell us about your shipment. Our team will get back with a tailored,
              competitive quote within one business day.
            </p>
            <a href="mailto:info@aspashipping.com" className="btn-dark">
              Request a Quote <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city} className="bg-surface p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Office
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{o.city}</h3>
              <ul className="mt-5 space-y-3 text-sm text-secondary">
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-accent" /> <a href={"tel:" + o.phone.replace(/\s+/g, "")} aria-label={"Call " + o.phone} className="text-secondary hover:underline">{o.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-accent" /> <a href={"mailto:" + o.email} aria-label={"Email " + o.email} className="text-secondary hover:underline">{o.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={14} className="text-accent" /> www.aspashipping.com
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
