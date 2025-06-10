"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TestimonialProps {
  name: string;
  position: string;
  restaurant: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const testimonials: TestimonialProps[] = [
  {
    name: "Linh",
    position: "Owner",
    restaurant: "King Loui",
    quote: "Our digital apps and online shop kept growing, and NomNom helped us take the next step with powerful digital solutions.",
    metrics: [
      {
        label: "Satisfaction",
        value: "+100%"
      }
    ]
  },
  {
    name: "Ms. Fantasea",
    position: "Co-Founder",
    restaurant: "Houtang Hotpot",
    quote: "NomNom Restaurant's robust database has streamlined our operations, making revenue analysis effortless. It's exactly why we chose them!",
    metrics: [
      {
        label: "Sales",
        value: "+€15k"
      },
      {
        label: "Growth",
        value: "+120%"
      }
    ]
  },
  {
    name: "Thuy Ha Vu",
    position: "Owner",
    restaurant: "Hanoi Pho",
    quote: "With the NomNom POS system, our process is much more convenient. The NomNom Go, as compact as an iPhone, let us place orders and process payments seamlessly with just one device.",
    metrics: [
      {
        label: "Tips",
        value: "+30%"
      }
    ]
  }
];

export const TestimonialSection = () => {
  const controlRef = useRef(null);
  const isControlInView = useInView(controlRef, { once: true, amount: 0.3 });
  
  const testimonialsRef = useRef(null);
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  return (
    <>
      <section 
        id="take-control" 
        className="container py-24 sm:py-32 bg-primary/5 rounded-3xl"
        ref={controlRef}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isControlInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Take control of your restaurant's success
          </h2>
          <Button size="lg" className="font-medium px-8">
            Book a demo
          </Button>
        </motion.div>
      </section>

      <section id="testimonials" className="container py-24 sm:py-32" ref={testimonialsRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't take our word for it
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-[90%] lg:max-w-screen-xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="md:basis-1/2 lg:basis-1/3 p-2"
              >
                <Card className="bg-muted/30 dark:bg-card h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {testimonial.position} of {testimonial.restaurant}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <blockquote className="italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex flex-wrap gap-4">
                      {testimonial.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center gap-2">
                          <span className="text-xl font-bold text-primary">{metric.value}</span>
                          <span className="text-sm">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};
