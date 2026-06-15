import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Overview } from "@/components/site/Overview";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { WhyAspa } from "@/components/site/WhyAspa";
import { Network } from "@/components/site/Network";
import { Technology } from "@/components/site/Technology";
import { Mission } from "@/components/site/Mission";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASPA Shipping Agency — Total Shipping Solutions Across India & Beyond" },
      {
        name: "description",
        content:
          "ASPA Shipping Agency Pvt. Ltd. delivers international freight forwarding, customs clearance, warehousing and air & sea cargo across India and worldwide.",
      },
      { property: "og:title", content: "ASPA Shipping Agency — Total Shipping Solutions" },
      {
        property: "og:description",
        content:
          "International freight forwarding, customs clearance, warehousing and air & sea cargo — engineered for precision, speed and confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Clear hash on reload and force scroll to the top of the viewport
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Services />
        <Industries />
        <WhyAspa />
        <Network />
        <Technology />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
