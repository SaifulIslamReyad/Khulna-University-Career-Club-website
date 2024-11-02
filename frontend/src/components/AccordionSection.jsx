import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const AccordionSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full h-full text-white">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl md:text-2xl">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl md:text-2xl">
          Is it styled?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl md:text-2xl">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-xl md:text-2xl">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-xl md:text-2xl">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent className="text-base md:text-lg">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionSection;
