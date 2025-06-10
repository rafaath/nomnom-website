"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "With the dashboard that NomNom provides, it's very easy to modify your menu. We thought we're only getting data hygiene and reconciliation solutions, but after having NomNom come on-board, we were able to solve many more issues we never expected to be taken care of which gives me tremendous peace of mind",
      author: "BERT MUELLER",
      position: "CEO",
      company: "Fine Dining Chain"
    },
    {
      quote: "We were able to build a very strong delivery brand, and we have got miles to go, but frankly to grow very fast in the delivery space even though we had no background got enabled because we were able to latch on to the NomNom platform...",
      author: "AMULEEK SINGH BIJRAL", 
      position: "CEO",
      company: "Cloud Kitchen Network"
    },
    {
      quote: "We realised that if we wanted to grow, we have to work with a lot of aggregators to be able to reach to more wider customers. But our backend was not really integrated with these partners and menu update became a programming nightmare. With NomNom coming in, menu sync/programming got automated with aggregators in real-time. It became so simple like opening your gmail...",
      author: "ARUJ GARG",
      position: "HEAD OPERATIONS", 
      company: "Multi-Brand Restaurant"
    },
    {
      quote: "We have opened 3 cities after we got NomNom onboard, where we didn't even visit the kitchens till now, the kitchen are up and LIVE and running very smoothly because we have eyes on all the kitchens through our systems in place. Better be it in the hands of a player like NomNom whom you can trust and run your tech capabilities",
      author: "PAVAN KUMAR",
      position: "CO-FOUNDER",
      company: "Restaurant Chain"
    },
    {
      quote: "The tools provided by NomNom makes managing restaurants seem effortless. NomNom is a great tool for online integrations especially for cloud kitchen concepts. I'm able to highlight issues to the team and multiple team members work with us to resolve them.",
      author: "Harsh Gupta",
      position: "Operational Head",
      company: "Cloud Kitchen"
    }
  ];

  return (
    <section className="w-[95%] max-w-7xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-16"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What our customers say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from restaurant owners who have transformed their operations with NomNom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background/50 border border-border/20 hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
            >
              <div className="space-y-6">
                <Quote className="h-8 w-8 text-primary/60" />
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border/20">
                  <h4 className="font-bold text-primary">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}; 