"use client";
import { motion } from "framer-motion";
import { 
  Receipt, 
  Monitor, 
  BarChart3, 
  Package, 
  ChefHat,
  Smartphone,
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  Star
} from "lucide-react";

export const RestaurantOSSection = () => {
  const features = [
    {
      id: "billing",
      title: "Lightning-fast billing that your staff will love",
      description: "Transform every transaction into a seamless experience. Our intelligent POS adapts to your workflow, reducing order errors by 95% and cutting billing time in half.",
      icon: <Receipt className="h-8 w-8" />,
      visualType: "pos-interface",
      metrics: { primary: "2.3s", secondary: "avg transaction", tertiary: "95% fewer errors" }
    },
    {
      id: "orders",
      title: "One screen to rule all your online orders",
      description: "Never miss an order again. Our unified dashboard brings Swiggy, Zomato, Uber Eats, and direct orders into one beautiful interface that keeps your kitchen in perfect sync.",
      icon: <Smartphone className="h-8 w-8" />,
      visualType: "order-dashboard",
      metrics: { primary: "12+", secondary: "platforms", tertiary: "0 missed orders" }
    },
    {
      id: "analytics",
      title: "Insights that actually drive your business forward",
      description: "Stop guessing, start knowing. Our AI-powered analytics turn your data into actionable insights, helping successful restaurants increase profits by an average of 23%.",
      icon: <TrendingUp className="h-8 w-8" />,
      visualType: "analytics-dashboard",
      metrics: { primary: "23%", secondary: "profit increase", tertiary: "Real-time insights" }
    },
    {
      id: "inventory",
      title: "Inventory management that prevents waste before it happens",
      description: "Predictive inventory that learns your patterns. Cut food waste by 40%, eliminate stockouts, and optimize your margins with intelligent forecasting.",
      icon: <Package className="h-8 w-8" />,
      visualType: "inventory-grid",
      metrics: { primary: "40%", secondary: "waste reduction", tertiary: "Smart forecasting" }
    },
    {
      id: "kitchen",
      title: "Kitchen operations at the speed of excellence",
      description: "Transform your kitchen into a precision machine. Our KDS reduces ticket times by 35% while maintaining perfect order accuracy.",
      icon: <ChefHat className="h-8 w-8" />,
      visualType: "kitchen-display",
      metrics: { primary: "35%", secondary: "faster service", tertiary: "100% accuracy" }
    }
  ];

  const renderVisual = (feature) => {
    const baseClasses = "relative w-full h-full rounded-2xl overflow-hidden";
    
    switch (feature.visualType) {
      case "pos-interface":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-slate-900 to-slate-800`}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* POS Screen */}
            <div className="relative h-full p-6 flex flex-col">
              <div className="flex-1 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-sm font-medium">Table 12 • Order #2847</span>
                  </div>
                  <span className="text-sm">12:34 PM</span>
                </div>
                
                {/* Order Items */}
                <div className="space-y-3">
                  {[
                    { item: "Margherita Pizza", price: "₹320", qty: "1x" },
                    { item: "Caesar Salad", price: "₹240", qty: "2x" },
                    { item: "Garlic Bread", price: "₹120", qty: "1x" }
                  ].map((order, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-primary font-bold">{order.qty}</span>
                        <span className="font-medium">{order.item}</span>
                      </div>
                      <span className="font-bold">{order.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Total */}
              <div className="mt-6">
                <div className="bg-primary/90 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold">₹680</span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-sm opacity-90">Processing in {feature.metrics.primary}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "order-dashboard":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-blue-900 to-purple-900`}>
            <div className="relative h-full p-6">
              {/* Platform Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { name: "Swiggy", orders: "23", color: "bg-orange-500" },
                  { name: "Zomato", orders: "18", color: "bg-red-500" },
                  { name: "Uber Eats", orders: "15", color: "bg-green-500" },
                  { name: "Direct", orders: "12", color: "bg-blue-500" }
                ].map((platform, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`${platform.color} rounded-xl p-3 text-white`}
                  >
                    <div className="text-sm font-medium">{platform.name}</div>
                    <div className="text-2xl font-bold">{platform.orders}</div>
                    <div className="text-xs opacity-90">active orders</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Live Feed */}
              <div className="space-y-2">
                <div className="text-white/80 text-sm font-medium mb-3">Live Order Feed</div>
                {[
                  { platform: "Swiggy", time: "2m ago", status: "preparing" },
                  { platform: "Zomato", time: "3m ago", status: "ready" },
                  { platform: "Direct", time: "5m ago", status: "delivered" }
                ].map((order, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        order.status === 'preparing' ? 'bg-yellow-400' :
                        order.status === 'ready' ? 'bg-green-400' : 'bg-blue-400'
                      }`}></div>
                      <span className="text-sm">{order.platform} Order</span>
                    </div>
                    <span className="text-xs opacity-70">{order.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case "analytics-dashboard":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-emerald-900 to-teal-900`}>
            <div className="relative h-full p-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Revenue", value: "₹2.4L", change: "+23%" },
                  { label: "Orders", value: "847", change: "+15%" },
                  { label: "Avg Order", value: "₹285", change: "+8%" },
                  { label: "Efficiency", value: "96%", change: "+5%" }
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white"
                  >
                    <div className="text-xs opacity-70 mb-1">{metric.label}</div>
                    <div className="text-xl font-bold">{metric.value}</div>
                    <div className="text-xs text-green-400 font-medium">{metric.change}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Chart Simulation */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="text-white/80 text-sm font-medium mb-3">Sales Trend</div>
                <div className="flex items-end space-x-2 h-16">
                  {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case "inventory-grid":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-amber-900 to-orange-900`}>
            <div className="relative h-full p-6">
              {/* Inventory Items */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { item: "Tomatoes", stock: "85%", status: "good", color: "bg-green-500" },
                  { item: "Cheese", stock: "45%", status: "low", color: "bg-yellow-500" },
                  { item: "Flour", stock: "92%", status: "good", color: "bg-green-500" },
                  { item: "Basil", stock: "15%", status: "critical", color: "bg-red-500" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.item}</span>
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{item.stock}</div>
                    <div className="text-xs opacity-70 capitalize">{item.status} stock</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Smart Alerts */}
              <div className="mt-6">
                <div className="bg-amber-500/20 backdrop-blur-sm rounded-xl p-4 border border-amber-500/30">
                  <div className="flex items-center space-x-2 text-amber-300">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <span className="text-sm font-medium">Smart Alert</span>
                  </div>
                  <div className="text-white text-sm mt-1">Order basil in 2 hours to avoid stockout</div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case "kitchen-display":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-red-900 to-pink-900`}>
            <div className="relative h-full p-6">
              {/* Active Orders */}
              <div className="space-y-3">
                {[
                  { order: "#2847", items: "3 items", time: "8:32", priority: "high" },
                  { order: "#2848", items: "2 items", time: "12:15", priority: "medium" },
                  { order: "#2849", items: "5 items", time: "15:42", priority: "low" }
                ].map((order, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white border-l-4 ${
                      order.priority === 'high' ? 'border-red-400' :
                      order.priority === 'medium' ? 'border-yellow-400' : 'border-green-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-lg">{order.order}</div>
                        <div className="text-sm opacity-70">{order.items}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{order.time}</div>
                        <div className="text-xs opacity-70">prep time</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Status */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30">
                  <div className="flex items-center space-x-2 text-green-300">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">On Track</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div className={baseClasses}></div>;
    }
  };

  return (
    <section className="w-[95%] max-w-7xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-32"
      >
        <div className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            The perfect operating system for your restaurant
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            From quick order punching to detailed reporting and analytics, NomNom has everything you need to increase staff efficiency and automate your restaurant operations
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Metrics */}
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{feature.metrics.primary}</div>
                    <div className="text-sm text-muted-foreground">{feature.metrics.secondary}</div>
                  </div>
                  <div className="w-px h-12 bg-border"></div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {feature.metrics.tertiary}
                  </div>
                </div>
              </div>

              {/* Revolutionary Visual */}
              <div className="flex-1 max-w-2xl">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative group perspective-1000"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glass Container */}
                  <div className="relative bg-background/80 backdrop-blur-xl border border-border/40 rounded-3xl p-2 shadow-2xl">
                    {/* Screen */}
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      {renderVisual(feature)}
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className="flex items-center justify-center space-x-2 py-4">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 