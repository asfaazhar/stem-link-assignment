// import {Button} from "./../src/components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


function App() {
  const name = "Manupa";
  const cartCount = 5;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero/>
      <div className="p-">
          <div className="p-6 w-auto text-xl mx-16">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Product Description
                </AccordionTrigger>
                  <AccordionContent className="text-xl">
                    Discover our range of high-performance electronic devices designed to simplify your daily life. Whether you're upgrading your home, workspace, or entertainment setup, our products combine cutting-edge technology with sleek, user-friendly designs.
                  </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-6 w-auto text-xl mx-16">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  Why Choose Our Products?
                </AccordionTrigger>
                  <AccordionContent className="text-xl">
                    <li> Trusted Brand Reputation </li>
                    <li> Wide Variety </li>
                    <li> Seamless Integration </li>
                    <li> Exceptional Value </li>
                    <li> Comprehensive Warranties </li>
                    <li> Smart Features </li>
                    <li> Global Availability </li>
                  </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-6 w-auto text-xl mx-16">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  What are the key Features across all products?
                </AccordionTrigger>
                  <AccordionContent className="text-xl">
                    <li> User-Friendly Design </li>
                    <li> Advanced Technology </li>
                    <li> Energy Efficiency </li>
                    <li> Durability and Quality </li>
                    <li> Fast Connectivity </li>
                    <li> Safety Features </li>
                    <li> Warranty and Support </li>
                    <li> Affordable and Accessible </li>
                  </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
      </div>
    </div>
  );
}

export default App;