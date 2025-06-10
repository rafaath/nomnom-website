"use client";
import { motion } from "framer-motion";
import { 
  Receipt, 
  Monitor, 
  BarChart3, 
  Package, 
  ChefHat
} from "lucide-react";

export const RestaurantOSSection = () => {
  const features = [
    {
      title: "Manage billing & KOTs with ease",
      description: "NomNom is the fastest, most reliable way to bill customers and manage KOTs. Our system is designed to improve your operational efficiency and save you time and money.",
      icon: <Receipt className="h-12 w-12" />,
      image: "/restaurant-billing.jpg"
    },
    {
      title: "Track all your online orders on one screen",
      description: "Streamline your operations, reduce missed orders and avoid errors by managing all your online orders directly from your POS.",
      icon: <Monitor className="h-12 w-12" />,
      image: "/online-orders.jpg"
    },
    {
      title: "Make key decisions based on actionable business data",
      description: "With our centralised reporting dashboard, NomNom keeps you informed of operational and sales data so you can get a 360 degree analysis of your business and focus on what matters the most.",
      icon: <BarChart3 className="h-12 w-12" />,
      image: "/business-analytics.jpg"
    },
    {
      title: "Get real-time visibility into your inventory",
      description: "Cancellations will be a thing of the past. NomNom's inventory management solution is designed to reduce order errors, optimise food costs, and eliminate wastage.",
      icon: <Package className="h-12 w-12" />,
      image: "/inventory-management.jpg"
    },
    {
      title: "Increase speed of service with NomNom's KDS",
      description: "Extend your POS's capabilities and Improve staff productivity. With NomNom's integrated Kitchen Display System, orders go from your POS directly to display screens in your kitchen.",
      icon: <ChefHat className="h-12 w-12" />,
      image: "/kitchen-display.jpg"
    }
  ];

  return (
    <section className="w-[95%] max-w-7xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-20"
      >
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            The perfect operating system for your restaurant
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From quick order punching to detailed reporting and analytics, NomNom has everything you need to increase staff efficiency and automate your restaurant operations
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  
                  <div className="relative bg-background/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-xl">
                    <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <h4 className="text-lg font-semibold">
                          {feature.title.split(' ').slice(0, 3).join(' ')}
                        </h4>
                        <div className="flex space-x-2 justify-center">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 