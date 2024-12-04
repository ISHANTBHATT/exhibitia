import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import { MessageCircle } from "lucide-react";
import { FiMessageCircle } from "react-icons/fi";
export default function Faq2() {
  const faqs = [
    {
      question: "How do I start the interior design process?",
      answer:
        "The interior design process begins with an initial consultation where we discuss your vision, requirements, and budget.",
    },
    {
      question: "What are some popular interior design styles?",
      answer:
        "Popular styles include Modern, Contemporary, Traditional, Industrial, Scandinavian, and Minimalist.",
    },
    {
      question: "How do I choose a color scheme for my home?",
      answer:
        "We help you select colors based on your preferences, existing elements, lighting, and the mood you want to create.",
    },
    {
      question: "How do I choose the right interior designer?",
      answer:
        "Look for designers with experience in your preferred style, check their portfolio, read reviews, and ensure clear communication.",
    },
    {
      question: "How do I maintain my interior design?",
      answer:
        "Regular cleaning, proper maintenance of materials, and periodic updates help maintain your interior design.",
    },
    {
      question: "How much does interior design cost?",
      answer:
        "Costs vary based on project scope, materials, and services required. We provide detailed estimates during consultation.",
    },
  ];

  return (
    <section className="py-16 px-4 text-[#7A1CAC]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h3 className=" mb-2">POPULAR QUESTIONS</h3>
          <h2 className="text-4xl font-bold mb-8">
            Frequently Inquired Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
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
