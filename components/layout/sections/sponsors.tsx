"use client";

import { Icon } from "@/components/ui/icon";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { motion } from "framer-motion";
import { icons } from "lucide-react";

interface ServiceProps {
  icon: string;
  name: string;
}

const restaurantServices: ServiceProps[] = [
  {
    icon: "CalendarRange",
    name: "Online Reservations",
  },
  {
    icon: "ShoppingCart",
    name: "POS",
  },
  {
    icon: "Package",
    name: "Inventory",
  },
  {
    icon: "QrCode",
    name: "Scan to Order",
  },
  {
    icon: "Receipt",
    name: "Accounting",
  },
  {
    icon: "Globe",
    name: "Webshop",
  },
  {
    icon: "CreditCard",
    name: "Payment",
  },
  {
    icon: "Truck",
    name: "Delivery Integrations",
  },
  {
    icon: "CalendarRange",
    name: "Online Reservations",
  },
  {
    icon: "ShoppingCart",
    name: "POS",
  },
  {
    icon: "Package",
    name: "Inventory",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="trusted-by" className="w-[95%] max-w-7xl mx-auto py-20 sm:py-28">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-2xl text-center mb-12 font-bold"
      >
        Trusted by
      </motion.h2>

      <div className="mx-auto">
        <ParallaxScroll
          direction="horizontal"
          className="gap-6 py-4"
          baseVelocity={2}
        >
          {restaurantServices.map(({ icon, name }, index) => (
            <motion.div
              key={`${name}-${index}`}
              className="flex flex-col items-center justify-center bg-background rounded-xl border border-border/30 shadow-sm p-6 w-52 h-40"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                  color="hsl(var(--primary))"
                  className="text-primary"
              />
            </div>
              <span className="text-base font-medium text-center">{name}</span>
            </motion.div>
          ))}
        </ParallaxScroll>
      </div>
    </section>
  );
};
