"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingNavbarProps {
  children: React.ReactNode;
  className?: string;
  navItems: {
    name: string;
    link: string;
  }[];
  logoUrl?: string;
  logoText?: string;
  showLogoOnMobile?: boolean;
}

export function FloatingNavbar({
  children,
  className,
  navItems,
  logoUrl,
  logoText,
  showLogoOnMobile = false,
}: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Simple scroll-based section detection
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Get all sections with ids that match our nav items
      const sections = [
        { id: 'hero', element: document.getElementById('hero') },
        { id: 'features', element: document.getElementById('features') },
        { id: 'faq', element: document.getElementById('faq') },
        { id: 'contact', element: document.getElementById('contact') }
      ].filter(section => section.element);

      // Find the section that contains the scroll position
      let currentActiveSection = 'hero'; // default to hero
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentActiveSection = section.id;
            break;
          }
        }
      }
      
      setActiveSection(currentActiveSection);
    };

    // Observe sections for intersection as backup
    const observeSections = () => {
      const sections = document.querySelectorAll("section[id]");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              const sectionId = entry.target.id;
              // Only update if it's one of our nav sections
              if (['hero', 'features', 'faq', 'contact'].includes(sectionId)) {
                setActiveSection(sectionId);
              }
            }
          });
        },
        { 
          rootMargin: "-10% 0px -50% 0px",
          threshold: [0.1, 0.3, 0.5]
        }
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    // Initial call
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    const cleanupObserver = observeSections();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanupObserver();
    };
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-4",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cn(
          "w-[95%] max-w-7xl mx-auto rounded-full flex items-center justify-between px-4 transition-all duration-300",
          isScrolled
            ? "bg-background/70 backdrop-blur-lg border border-border/50 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className={cn("py-3 flex items-center", !showLogoOnMobile && "hidden md:flex")}>
          {logoUrl && (
            <img src={logoUrl} alt="Logo" className="h-8 w-auto mr-2" />
          )}
          {logoText && (
            <span className="text-xl font-bold">{logoText}</span>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors relative group",
                activeSection === item.link.replace("#", "")
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.name}
              {activeSection === item.link.replace("#", "") && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={cn(
              "w-5 h-0.5 bg-foreground rounded-full transition-all duration-300",
              isMobileMenuOpen && "transform rotate-45 translate-y-1"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-foreground rounded-full my-1 transition-all duration-300",
              isMobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-foreground rounded-full transition-all duration-300",
              isMobileMenuOpen && "transform -rotate-45 -translate-y-1"
            )}
          />
        </button>

        {/* Right Side Elements (if any) */}
        <div className="hidden md:flex items-center">{children}</div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/90 backdrop-blur-lg border-t border-border/10 px-4 py-2"
          >
            <nav className="flex flex-col space-y-2 py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    activeSection === item.link.replace("#", "")
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="py-3 border-t border-border/10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 