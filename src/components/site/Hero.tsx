import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import overview from "@/assets/overview.jpg";
import airFreight from "@/assets/air-freight.jpg";
import why from "@/assets/why-aspa.jpg";
import fcl from "@/assets/fcl.jpg";

const images = [why, heroPort, overview, airFreight, fcl];
const alts = ["Why ASPA", "Hero Port", "Overview", "Air Freight", "FCL"];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
      {/* Background Image Slideshow with Premium Gradients */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={alts[currentIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center" style={{ filter: 'brightness(1.2)' }}
          />
        </AnimatePresence>
        {/* Dark overlay: from dark brand color to subtle side lighting */}
        <div className="absolute inset-0 bg-neutral-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-neutral-900/10 z-10" />
      </div>

      {/* Content Container */}
      <div className="container-x relative z-10 py-24 text-center md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >

            <h1 className="leading-[0.95] uppercase text-white">
              <span className="text-6xl font-black tracking-[0.02em] bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent sm:text-8xl md:text-9xl lg:text-[11rem]">INDIA</span>
              <br />
              <span className="text-2xl font-light tracking-[0.26em] text-white/80 sm:text-4xl md:text-5xl lg:text-6xl">TO WORLD</span>
            </h1>
          </motion.div>


          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-xl text-xs font-medium uppercase tracking-[0.2em] text-slate-400 leading-loose md:text-sm"
          >
            Global freight solutions engineered for precise, reliable &amp; seamless movement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-100 hover:scale-[1.02] hover:shadow-lg"
            >
              Get a Quote <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

