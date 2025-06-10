"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatedSpotlight } from "@/components/ui/animated-spotlight";
import { TextReveal } from "@/components/ui/text-reveal";
import { Card3D } from "@/components/ui/3d-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MetricProps {
  title: string;
  value: string;
  description: string;
}

const metricsList: MetricProps[] = [
  {
    title: "Improve satisfaction",
    value: "30%",
    description: "Faster service, happier customers.",
  },
  {
    title: "Increase efficiency",
    value: "35%",
    description: "Streamline workflows, eliminate bottlenecks.",
  },
  {
    title: "Boost tips",
    value: "40%",
    description: "Optimize tipping, increase earnings.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="metrics" className="w-[95%] max-w-7xl mx-auto py-24 sm:py-32 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 -z-10 h-full w-full bg-gradient-to-b from-background via-primary/5 to-background opacity-70"></div>
      
      <AnimatedSpotlight className="max-w-4xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="overflow-hidden mb-4">
            <TextReveal 
              text="Make your restaurant better everyday"
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
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {metricsList.map(({ title, value, description }, index) => (
          <Card3D
            key={title}
            rotationIntensity={10}
            className="rounded-xl overflow-hidden"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border/40 h-full"
            >
              <h3 className="text-xl font-medium mb-6">{title}</h3>
              <div className="text-5xl font-bold text-primary mb-4 relative">
                <span className="relative z-10">{value}</span>
                <span className="absolute -inset-1 rounded-md bg-primary/10 blur-sm -z-0"></span>
              </div>
              <p className="text-muted-foreground">{description}</p>
            </motion.div>
          </Card3D>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center mt-16"
      >
        <a 
          href="#demo" 
          className="inline-block py-3 px-8 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors relative overflow-hidden group"
        >
          <span className="relative z-10">See us in action</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary translate-y-[105%] group-hover:translate-y-0 transition-transform duration-300"></span>
        </a>
      </motion.div>
    </section>
  );
};
