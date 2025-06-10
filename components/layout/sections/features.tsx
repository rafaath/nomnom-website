"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { TextReveal } from "@/components/ui/text-reveal";
import { Card3D } from "@/components/ui/3d-card";
import { AnimatedSpotlight } from "@/components/ui/animated-spotlight";
import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface RestaurantTypeProps {
  name: string;
  image?: string;
}

const restaurantTypes: RestaurantTypeProps[] = [
  {
    name: "Dine In",
    image: "/restaurant-dine-in.jpg"
  },
  {
    name: "Express",
    image: "/restaurant-express.jpg"
  },
  {
    name: "Hotpot",
    image: "/restaurant-hotpot.jpg"
  },
  {
    name: "Fine Dining",
    image: "/restaurant-fine-dining.jpg"
  },
  {
    name: "Wirtshaus",
    image: "/restaurant-wirtshaus.jpg"
  },
  {
    name: "All-You-Can-Eat Buffet",
    image: "/restaurant-buffet.jpg"
  },
  {
    name: "Japanese Buffet",
    image: "/restaurant-japanese.jpg"
  },
  {
    name: "Malatang",
    image: "/restaurant-malatang.jpg"
  },
  {
    name: "Korean BBQ",
    image: "/restaurant-korean-bbq.jpg"
  },
];

export const FeaturesSection = () => {
  const [activeType, setActiveType] = useState(restaurantTypes[0].name);
  
  return (
    <section className="w-[95%] max-w-7xl mx-auto py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <AnimatedSpotlight className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="overflow-hidden mb-4">
            <TextReveal 
              text="Experience NomNom in action" 
              as="h2"
              className="text-3xl md:text-4xl font-bold"
            />
          </div>
          <p className="text-xl text-muted-foreground">
            Explore how NomNom can help you operate your restaurant at your fingertips.
          </p>
        </motion.div>
      </AnimatedSpotlight>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:w-1/3"
        >
          <Card3D className="rounded-xl" rotationIntensity={5}>
            <div className="bg-card border border-border/40 rounded-xl shadow-sm">
              <div className="flex flex-col gap-2 p-2">
                {restaurantTypes.map((type) => (
                  <button
                    key={type.name}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeType === type.name
                        ? "bg-primary text-white font-medium shadow-md"
                        : "hover:bg-primary/10"
                    }`}
                    onClick={() => setActiveType(type.name)}
                  >
                    <span className="font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </Card3D>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:w-2/3 relative aspect-video rounded-xl overflow-hidden"
        >
          <Card3D
            rotationIntensity={8}
            translateZ={50}
            className="rounded-xl overflow-hidden h-full"
          >
            <div className="relative h-full bg-muted rounded-xl border border-border/40 shadow-lg overflow-hidden">
              {/* This would be replaced with actual images when available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-muted">
                <p className="text-xl font-medium text-center px-8">
                  {activeType} visualization
                </p>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 text-center"
      >
        <h3 className="font-medium text-xl mb-8">Trusted Partners</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Placeholder for partner logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i} 
              className="w-32 h-12 rounded-md bg-card border border-border/30 flex items-center justify-center shadow-sm"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-muted-foreground">Partner {i}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
