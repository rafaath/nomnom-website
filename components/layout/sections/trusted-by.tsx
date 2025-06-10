"use client";
import { motion } from "framer-motion";
import { Building2, Store, Utensils, Coffee, Pizza, Sandwich } from "lucide-react";

export const TrustedBySection = () => {
  const restaurantTypes = [
    { name: "Fine Dining", icon: <Utensils className="h-8 w-8" /> },
    { name: "Quick Service", icon: <Sandwich className="h-8 w-8" /> },
    { name: "Cafes", icon: <Coffee className="h-8 w-8" /> },
    { name: "Pizza Chains", icon: <Pizza className="h-8 w-8" /> },
    { name: "Cloud Kitchens", icon: <Building2 className="h-8 w-8" /> },
    { name: "Food Courts", icon: <Store className="h-8 w-8" /> },
  ];

  return (
    <section className="w-[95%] max-w-7xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trusted by</h2>
          <p className="text-xl md:text-2xl font-bold text-primary">
            2500+ restaurant brands across the globe
          </p>
          <p className="text-lg text-muted-foreground">
            35000+ restaurants across the globe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {restaurantTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-background/50 border border-border/20 hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {type.icon}
              </div>
              <h3 className="font-semibold text-center">{type.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 