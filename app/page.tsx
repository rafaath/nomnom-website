import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { TrustedBySection } from "@/components/layout/sections/trusted-by";
import { ProductFeaturesSection } from "@/components/layout/sections/product-features";
import { RestaurantOSSection } from "@/components/layout/sections/restaurant-os";
// import { TestimonialsSection } from "@/components/layout/sections/testimonials";

export const metadata = {
  title: "NomNom - The Most Reliable Restaurant POS System",
  description: "An end-to-end, web-based POS that has everything you need to manage your restaurant— online & in-store.",
  openGraph: {
    type: "website",
    url: "https://nomnom.restaurant",
    title: "NomNom - The Most Reliable Restaurant POS System",
    description: "An end-to-end, web-based POS that has everything you need to manage your restaurant— online & in-store.",
    images: [
      {
        url: "https://nomnom.restaurant/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NomNom - Restaurant POS System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://nomnom.restaurant",
    title: "NomNom - The Most Reliable Restaurant POS System",
    description: "An end-to-end, web-based POS that has everything you need to manage your restaurant— online & in-store.",
    images: [
      "https://nomnom.restaurant/og-image.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Full-width background gradient */}
      <div className="fixed top-0 left-0 right-0 w-full h-[70vh] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      
      <HeroSection />
      <TrustedBySection />
      <ProductFeaturesSection />
      <RestaurantOSSection />
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
