
import React from "react";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { RiAddLine } from "@remixicon/react";
import { cn } from "../lib/utils"; // Adjust the import path as needed

// Accordion Components Setup
const Accordion = AccordionPrimitives.Root;

Accordion.displayName = "Accordion";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      className={cn(
        "group flex flex-1 cursor-pointer items-center justify-between py-3 text-left text-sm font-medium leading-none",
        "text-gray-900 dark:text-gray-50 text-white font-generalsans FAQs-headtext",
        "data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600",
        "focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <RiAddLine
        className={cn(
          "size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:-rotate-45",
          "text-gray-400 dark:text-gray-600",
          "group-data-[disabled]:text-gray-300 group-data-[disabled]:dark:text-gray-700"
        )}
        aria-hidden="true"
        focusable="false"
      />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Content
    ref={forwardedRef}
    className={cn(
      "transform-gpu data-[state=closed]:animate-accordionClose data-[state=open]:animate-accordionOpen"
    )}
    {...props}
  >
    <div
      className={cn(
        "overflow-hidden pb-4 text-sm",
        "text-gray-700 dark:text-gray-200",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitives.Content>
));

AccordionContent.displayName = "AccordionContent";

const AccordionItem = React.forwardRef(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitives.Item
    ref={forwardedRef}
    className={cn(
      "overflow-hidden border-b first:mt-0",
      "border-gray-200 dark:border-gray-800 FAQs-subtext",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// Default export for use in App.jsx
const FAQs = () => {
  return (
    <section className="c-space my-20" id="FAQs">
           <p className="head-text py-5">Frequently Asked Questions</p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>1. What services do you offer? </AccordionTrigger>
          <AccordionContent>
          I provide a range of services tailored to meet the needs of our clients, including custom web development, design solutions, digital marketing, and ongoing support.
          My focus is on delivering high-quality results that enhance your business’s online presence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2. How can I get a quote for my project?</AccordionTrigger>
          <AccordionContent>
          To receive a personalized quote, please reach out through our contact form or schedule a consultation.
           We`ll discuss your project requirements, timelines, and budget to provide you with an accurate estimate.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>3. What is your project timeline?
</AccordionTrigger>
          <AccordionContent>
          Project timelines can vary based on complexity and scope.
           After our initial consultation, I will outline a detailed timeline tailored to your project, ensuring transparency throughout the process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>4. Do you offer support after project completion?</AccordionTrigger>
          <AccordionContent>
          Yes, I provide ongoing support and maintenance packages to ensure your website or application runs smoothly.
           Our team is always available to assist with updates, troubleshooting, and further enhancements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>5. What is your payment structure?</AccordionTrigger>
          <AccordionContent>
          I typically use a milestone-based payment structure, where a portion is paid upfront and subsequent payments are made at various project stages. 
          This approach keeps my clients informed and engaged throughout the project.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>5. What services do you offer as a freelance designer?</AccordionTrigger>
          <AccordionContent>
          As a freelance designer, I provide a comprehensive range of services tailored to client needs, including:
          ⚪ UI/UX Design: Crafting visually appealing and usable interfaces.
          ⚪ Website Design: Designing responsive websites for various platforms.
          ⚪ Branding: Developing cohesive visual identities, including logos and branding materials.
          ⚪ Consulting: Offering strategic advice on design practices and technology usage.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger> 6. How long does it take to complete a design project?</AccordionTrigger>
          <AccordionContent>
          The timeline for a project can vary based on complexity and client requirements:
          ⚪ Basic Website Design: Approximately 2-4 weeks.
          ⚪ Complex Projects (e.g., e-commerce sites): Up to several months, depending on features and collaboration.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    </section>
  );
};

export default FAQs;