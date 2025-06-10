import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is NomNom and how does it work?",
    answer: "NomNom is a cloud based POS system that allows restaurants to streamline operations by offering integrations with all popular online sales channels, in-store billing, inventory management, and reporting and analytics. It is a web based system that can be used across devices including mobile and PC.",
    value: "item-1",
  },
  {
    question: "Why should I use NomNom?",
    answer: "NomNom offers everything you need—integrations with sales channels, in-store billing, inventory management, reporting and analytics and more. With NomNom, you improve staff efficiency and performance, cut down on infrastructure spending, and limit the number of cancellations. All in all, with NomNom you improve your margins.",
    value: "item-2",
  },
  {
    question: "How do I sign up for NomNom?",
    answer: "To sign up for NomNom, please fill out the contact form on this page. One of our product experts will reach out to you to schedule a custom demo for your business shortly.",
    value: "item-3",
  },
  {
    question: "How long does it take to set up NomNom?",
    answer: "Usually, it takes us 7 days to get NomNom working on your system. However, our team is currently working on reducing this time. So, you can expect a turnaround time of less than 7 days.",
    value: "item-4",
  },
  {
    question: "Does NomNom require any hardware?",
    answer: "No. NomNom does not require any additional hardware. It can work on any mobile or desktop device.",
    value: "item-5",
  },
  {
    question: "Is NomNom an App-based or a web-based POS?",
    answer: "NomNom is a web-based POS and has an android and ios app as well for mobile devices.",
    value: "item-6",
  },
  {
    question: "What is considered as a license for NomNom POS?",
    answer: "A physical location is considered as a license for NomNom.",
    value: "item-7",
  },
  {
    question: "Can we check the inventory of raw materials and have recipes in NomNom?",
    answer: "We have a robust raw materials and stock module which allows for a wide variety of actions ranging from raising a PO to managing stocks of all raw materials.",
    value: "item-8",
  },
  {
    question: "Can I have different pricing for my offline vs online sales price?",
    answer: "Yes. NomNom supports multiple pricing for a single item where you can have different pricing for your offline billing and online aggregators.",
    value: "item-9",
  },
  {
    question: "Can I manage multiple brands from a single license?",
    answer: "Yes. NomNom supports multiple brands from a single location and you can easily access all data regarding all your brands from a single dashboard.",
    value: "item-10",
  },
  {
    question: "I am switching from a different POS system to NomNom. Do I need to buy new hardware?",
    answer: "NomNom doesn't pose any such restrictions on the user. Since it is a browser app, it is compatible with any device. Apart from that, the mobile app is supported for both Android and iOS users. So, you do not need to buy a new hardware for NomNom unless your previous POS is in an inoperable condition.",
    value: "item-11",
  },
  {
    question: "What is the price of NomNom?",
    answer: "The pricing of NomNom depends on the scale of your business and your order volumes. To know the specific pricing for your restaurant, contact us using the form below.",
    value: "item-12",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="w-[95%] max-w-4xl mx-auto py-24 sm:py-32">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We've collected some of the most commonly asked questions about our product and put them all in one place for your convenience
        </p>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot space-y-4">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="border border-border/20 rounded-xl px-6 bg-background/50">
            <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
