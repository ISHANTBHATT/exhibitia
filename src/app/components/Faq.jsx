import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import { MessageCircle } from "lucide-react";
import { FiMessageCircle } from "react-icons/fi";
export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "What are the different types of exhibition booths?",
      answer: `Inline Booth: Aligned with other booths in a single row.
Corner Booth: Positioned at the end of a row, open on two sides.
Island Booth: Open on all four sides.
Peninsula Booth: Open on three sides, typically located at the end of an aisle.`,
    },
    {
      id: 2,
      question: "How can I design an eye-catching booth?",
      answer: `Use bold colors and high-quality graphics.
Ensure clear and concise messaging.
Incorporate interactive elements like demos or games.
Utilize good lighting to highlight products.`,
    },
    {
      id: 3,
      question: "How much space do I need for my booth?",
      answer:
        "This depends on your goals, products, and expected visitor engagement. Standard sizes include 10x10 ft, 10x20 ft, and 20x20 ft.",
    },
    {
      id: 4,
      question: "How much does it cost to set up an exhibition booth?",
      answer:
        "Costs vary widely depending on booth size, design complexity, location, and event fees. Basic booths can start at a few hundred dollars, while custom setups can cost tens of thousands.",
    },
    {
      id: 5,
      question: "Are there additional costs besides the booth rental?",
      answer:
        "Yes, additional costs may include furniture rental, electricity, Wi-Fi, promotional materials, transportation, staffing, and exhibitor insurance.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-muted-foreground mb-2">POPULAR QUESTIONS</h3>
          <h2 className="text-4xl font-bold mb-8">
            Frequently Inquired Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="whitespace-pre-wrap">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="relative">
          <img
            src="/images/1.jpg"
            alt="Interior design showcase"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can&apos;t find the answer you&apos;re looking for? Write to us at
              help@gmail.com or contact us through (+11) 111-222-3333.
            </p>
            <Button variant="outline" className="gap-2">
              <FiMessageCircle className="w-4 h-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
