
import React from "react";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { RiAddLine } from "@remixicon/react";
import { cn } from "../lib/utils";

const Accordion = AccordionPrimitives.Root;

Accordion.displayName = "Accordion";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, forwardedRef) => (
    <AccordionPrimitives.Header className="flex">
      <AccordionPrimitives.Trigger
        className={cn(
          // base styles
          "group flex flex-1 cursor-pointer items-center justify-between py-3 text-left text-sm font-medium leading-none",
          // text color
          "text-gray-900 dark:text-gray-50 ",
          // disabled styles
          "data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600",
          // focus styles
          "focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <RiAddLine
          className={cn(
            // base styles
            "size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:-rotate-45",
            // text color
            "text-gray-400 dark:text-gray-600",
            // disabled styles
            "group-data-[disabled]:text-gray-300 group-data-[disabled]:dark:text-gray-700"
          )}
          aria-hidden="true"
          focusable="false"
        />
      </AccordionPrimitives.Trigger>
    </AccordionPrimitives.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, forwardedRef) => (
    <AccordionPrimitives.Content
      ref={forwardedRef}
      className={cn(
        "transform-gpu data-[state=closed]:animate-accordionClose data-[state=open]:animate-accordionOpen"
      )}
      {...props}
    >
      <div
        className={cn(
          // base styles
          "overflow-hidden pb-4 text-sm text-white font-generalsans",
          // text color
          "text-gray-700 dark:text-gray-200",
          "FAQs-headtext",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitives.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

const AccordionItem = React.forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <AccordionPrimitives.Item
      ref={forwardedRef}
      className={cn(
        // base styles
        "overflow-hidden border-b first:mt-0 FAQs-subtext",
        // border color
        "border-gray-200 dark:border-gray-800",
        className
      )}
      {...props}
    />
  )
);

AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };