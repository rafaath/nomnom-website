"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { AnimatedSpotlight } from "@/components/ui/animated-spotlight";
import { Card3D } from "@/components/ui/3d-card";
import { icons } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitsProps {
  icon: string;
  title: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "CalendarRange",
    title: "Online Reservations",
  },
  {
    icon: "ShoppingCart",
    title: "POS",
  },
  {
    icon: "Package",
    title: "Inventory",
  },
  {
    icon: "QrCode",
    title: "Scan to Order",
  },
  {
    icon: "Receipt",
    title: "Accounting",
  },
  {
    icon: "Globe",
    title: "Webshop",
  },
  {
    icon: "CreditCard",
    title: "Payment",
  },
  {
    icon: "Truck",
    title: "Delivery Integrations",
  },
];

export const BenefitsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="benefits" className="w-[95%] max-w-7xl mx-auto py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center gap-12 lg:gap-24">
        <AnimatedSpotlight className="h-full">
        <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Your restaurant's new best friend.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Why use 20 tools when one's enough?
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a 
                href="#solutions" 
                className="inline-block py-3 px-6 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Solutions</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </motion.div>
        </div>
        </AnimatedSpotlight>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
        >
          {benefitList.map(({ icon, title }, index) => (
            <Card3D 
              key={title}
              containerClassName="aspect-square"
              className="rounded-xl"
              rotationIntensity={8}
              translateZ={30}
            >
              <motion.div 
                variants={item}
                className="flex flex-col items-center justify-center h-full p-4 text-center bg-card rounded-xl border border-border/40"
              >
                <div className="rounded-full bg-primary/10 p-3 mb-3">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>
                <span className="text-sm font-medium mt-2">{title}</span>
              </motion.div>
            </Card3D>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
