const carriers = [
  "MAERSK", "MSC", "COSCO", "HAPAG-LLOYD", "CMA CGM",
  "EVERGREEN", "ONE", "ZIM", "UPS", "FEDEX", "BLUE DART",
];

export function Network() {
  const row = [...carriers, ...carriers];
  return (
    <section id="network" className="container-x py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="eyebrow mb-6">/ Global Network</p>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Trusted by leading<br />global carriers.
          </h2>
        </div>
        <p className="max-w-xs text-base leading-relaxed text-secondary">
          ASPA operates with the world's most reliable ocean, air and express
          carriers — giving you capacity, choice and confidence.
        </p>
      </div>

      <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-surface">
        <div className="relative">
          <div className="flex gap-12 whitespace-nowrap py-10 animate-[marquee_40s_linear_infinite] md:gap-20 md:py-14">
            {row.map((c, i) => (
              <span
                key={c + i}
                className="text-2xl font-bold tracking-[0.18em] text-secondary/60 md:text-3xl"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
