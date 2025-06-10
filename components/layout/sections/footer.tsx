"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="w-[95%] max-w-7xl mx-auto py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
          <div className="col-span-full md:col-span-1">
            <Link href="#" className="flex font-bold items-center">
              <Image 
                src="/logo-nomnom.png" 
                alt="NomNom Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              The most reliable restaurant POS system. Streamline your operations with our all-in-one platform.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100 transition-opacity">
                FAQ
              </Link>
            </div>
            <div>
              <button 
                onClick={scrollToContact}
                className="opacity-60 hover:opacity-100 transition-opacity text-left"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <div>
              <span className="opacity-60">POS System</span>
            </div>
            <div>
              <span className="opacity-60">Inventory Management</span>
            </div>
            <div>
              <span className="opacity-60">Analytics & Reporting</span>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="text-center">
          <h3 className="text-muted-foreground">
            &copy; 2025 NomNom. All rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};



