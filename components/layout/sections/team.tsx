"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSpotlight } from "@/components/ui/animated-spotlight";
import { TextReveal } from "@/components/ui/text-reveal";
import { Card3D } from "@/components/ui/3d-card";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface AudienceProps {
  title: string;
  count: string;
  active: boolean;
}

export const TeamSection = () => {
  const [activeAudience, setActiveAudience] = useState<string>("Owners & Managers");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const audienceList: AudienceProps[] = [
        {
      title: "Owners & Managers",
      count: "1k",
      active: activeAudience === "Owners & Managers"
        },
        {
      title: "Waitstaff",
      count: "5k",
      active: activeAudience === "Waitstaff"
    },
    {
      title: "Chefs",
      count: "2k",
      active: activeAudience === "Chefs"
    },
    {
      title: "Tax Advisors & Accountants",
      count: "700",
      active: activeAudience === "Tax Advisors & Accountants"
    },
    {
      title: "Guests",
      count: "500k",
      active: activeAudience === "Guests"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="audience" className="w-[95%] max-w-7xl mx-auto py-24 sm:py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <AnimatedSpotlight className="max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-medium mb-4 uppercase tracking-wider text-primary/80">audience</h3>
          <div className="overflow-hidden mb-4">
            <TextReveal 
              text="NomNom is made for everyone"
              as="h2"
              className="text-3xl md:text-4xl font-bold"
                  />
                </div>
        </motion.div>
      </AnimatedSpotlight>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {audienceList.map((audience, index) => (
          <Card3D
            key={audience.title}
            rotationIntensity={10}
            translateZ={audience.active ? 50 : 30}
            className="rounded-xl overflow-hidden"
          >
            <motion.div
              variants={itemVariants}
              onClick={() => setActiveAudience(audience.title)}
              className={`cursor-pointer p-6 rounded-xl transition-all duration-300 h-full border ${
                audience.active 
                  ? "bg-primary text-white scale-105 border-primary/50 shadow-lg shadow-primary/20" 
                  : "bg-card hover:bg-muted/70 border-border/40"
              }`}
            >
              <h3 className="text-lg font-medium mb-4">{audience.title}</h3>
              <p className={`text-4xl font-bold ${audience.active ? "text-white" : "text-primary"}`}>
                {audience.count}
              </p>
            </motion.div>
          </Card3D>
        ))}
      </motion.div>
    </section>
  );
};
