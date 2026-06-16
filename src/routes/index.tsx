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
  component: Index,
  head: () => ({
    meta: [
      { title: "ASPA Shipping Agency — Total Shipping Solutions Across India & Beyond" },
      { name: "description", content: "ASPA Shipping Agency Pvt. Ltd. delivers international freight forwarding, customs clearance, warehousing and air & sea cargo across India and worldwide." },
      { name: "keywords", content: "import export, freight forwarding, logistics, ASPA Shipping, customs clearance, warehousing, air cargo, sea cargo, India" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { rel: "canonical", href: "https://www.aspashipping.com/" },
      { property: "og:title", content: "ASPA Shipping Agency — Total Shipping Solutions" },
      { property: "og:description", content: "International freight forwarding, customs clearance, warehousing and air & sea cargo — engineered for precision, speed and confidence." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/hero-port.jpg" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ASPA Shipping Agency",
          "url": "https://www.aspashipping.com",
          "logo": import.meta.env.DEV ? "/logo.png" : "https://www.aspashipping.com/logo.png",
          "sameAs": [
            "https://www.facebook.com/ASPAShipping",
            "https://twitter.com/ASPA_Shipping",
            "https://www.linkedin.com/company/aspa-shipping"
          ]
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.aspashipping.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.aspashipping.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ASPA Shipping Agency",
          "image": "https://www.aspashipping.com/hero-port.jpg",
          "url": "https://www.aspashipping.com",
          "telephone": "+91-XXXXX-XXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "[Your Street]",
            "addressLocality": "[City]",
            "addressRegion": "[State]",
            "postalCode": "[ZIP]",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "0.0",
            "longitude": "0.0"
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }]
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": [
            "Import Services",
            "Export Services",
            "Customs Clearance",
            "Warehousing",
            "Air Freight",
            "Sea Freight"
          ],
          "provider": {
            "@type": "LocalBusiness",
            "name": "ASPA Shipping Agency"
          }
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aspashipping.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.aspashipping.com/#services" },
            { "@type": "ListItem", "position": 3, "name": "Contact", "item": "https://www.aspashipping.com/#contact" }
          ]
        })
      }
    ]
  })
});

function Index() {
  useEffect(() => {
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
