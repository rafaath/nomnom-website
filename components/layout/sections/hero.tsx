"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ArrowRight, ChefHat, Users, TrendingUp, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const words = [
  {
    text: "The",
  },
  {
    text: "Most",
  },
  {
    text: "Reliable",
  },
  {
    text: "Restaurant",
  },
  {
    text: "POS",
    className: "text-primary",
  },
  {
    text: "System",
  },
];

const heroCards = [
  {
    title: "Streamlined Operations",
    description: "Automate tedious tasks, optimize workflows",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    title: "Happy Staff",
    description: "Tools that empower your team to excel",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Elevated Experience",
    description: "Create memorable moments for every guest",
    icon: <Sparkles className="h-8 w-8" />,
  },
];

export const HeroSection = () => {
  const { theme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      
      {/* Very Subtle Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      {/* Minimal Beams */}
      <div className="absolute inset-0 opacity-20">
        <BackgroundBeams />
      </div>

      <section id="hero" className="relative z-10 w-[95%] max-w-7xl mx-auto pt-32 pb-20">
        <div className="space-y-20">
          
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-background/80 backdrop-blur-sm border border-primary/20">
                <ChefHat className="w-4 h-4 mr-2" />
                🎉 We've revolutionized restaurant management across the globe
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <TypewriterEffect 
                words={words} 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                cursorClassName="bg-primary"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed"
              >
                An end-to-end, web-based POS that has everything you need to manage your restaurant— 
                <span className="text-primary font-semibold"> online & in-store.</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="px-8 py-6 text-lg font-medium group relative overflow-hidden rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="w-full max-w-6xl mx-auto"
          >
            <HoverEffect 
              items={heroCards.map(card => ({
                title: card.title,
                description: card.description,
                link: "#",
                icon: card.icon
              }))}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            />
          </motion.div>


        </div>
      </section>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};
