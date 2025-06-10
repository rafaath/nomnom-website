"use client";
import { motion } from "framer-motion";
import { 
  Receipt, 
  Package, 
  Book, 
  Truck, 
  BarChart3, 
  TrendingUp, 
  Monitor, 
  Smartphone,
  Wifi,
  Clock
} from "lucide-react";

export const ProductFeaturesSection = () => {
  const features = [
    {
      title: "Billing & KOT",
      description: "Ensure smooth communication between front-of-house and kitchen staff, resulting in minimized order errors and delays, elevating your restaurant's overall service quality.",
      icon: <Receipt className="h-8 w-8" />
    },
    {
      title: "Inventory Management",
      description: "Get real-time visibility into your inventory and help your restaurant optimize stock levels and reduce wastage for cost-effective operations.",
      icon: <Package className="h-8 w-8" />
    },
    {
      title: "Menu Management",
      description: "Simplify updates, customization, and optimization of your menu for enhanced customer experiences.",
      icon: <Book className="h-8 w-8" />
    },
    {
      title: "Delivery Integrations",
      description: "Connect with Swiggy, Zomato, Uber Eats, and more effortlessly with our powerful and seamless delivery integrations.",
      icon: <Truck className="h-8 w-8" />
    },
    {
      title: "Detailed Reporting",
      description: "Get valuable insights to streamline operations and enhance your restaurant's business performance.",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting tools.",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Integrated KDS",
      description: "Improve staff productivity with our Integrated Kitchen Display System through seamless order management and improved kitchen efficiency.",
      icon: <Monitor className="h-8 w-8" />
    },
    {
      title: "Captain App",
      description: "Streamline the process of order-taking to kitchen communication and billing, ultimately boosting your restaurant's sales and profitability.",
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      title: "Multi-device Support",
      description: "Access your POS system from any device, anywhere. Works seamlessly across desktop, tablet, and mobile.",
      icon: <Wifi className="h-8 w-8" />
    },
    {
      title: "99.99% Uptime",
      description: "Reliable, cloud-based system ensures your restaurant operations never stop, with industry-leading uptime guarantees.",
      icon: <Clock className="h-8 w-8" />
    }
  ];

  return (
    <section id="features" className="w-[95%] max-w-7xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Product features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our products have been designed with your business in mind, and are packed with essential features to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background/50 border border-border/20 hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 