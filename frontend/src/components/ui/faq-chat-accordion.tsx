"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  timestamp = "Every day, 9:01 AM",
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={cn("p-2 sm:p-4", className)}>
      {timestamp && (
        <div className="mb-5 text-xs font-mono font-bold text-[#A71728] uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A71728] animate-pulse" />
          <span>{timestamp}</span>
        </div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            value={item.id.toString()}
            key={item.id}
            className="mb-3"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between gap-x-4 group cursor-pointer">
                <div
                  className={cn(
                    "relative flex items-center space-x-2 rounded-2xl p-3 sm:p-3.5 transition-all duration-300 border text-left",
                    openItem === item.id.toString()
                      ? "bg-[#A71728]/10 border-[#A71728] text-black font-bold shadow-xs"
                      : "bg-gray-50/80 border-gray-200 hover:border-[#A71728]/50 hover:bg-white text-gray-800",
                    questionClassName
                  )}
                >
                  <span className="font-semibold text-xs sm:text-sm">{item.question}</span>
                </div>

                <span
                  className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border",
                    openItem === item.id.toString()
                      ? "bg-[#A71728] text-white border-[#A71728]"
                      : "bg-gray-50 border-gray-200 text-gray-500 group-hover:border-[#A71728] group-hover:text-[#A71728]"
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild forceMount>
              <motion.div
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2.5 mb-2 pl-2">
                  <div
                    className={cn(
                      "relative rounded-2xl bg-gradient-to-r from-[#A71728] via-[#8E1321] to-[#680C17] p-4 sm:p-5 text-white text-xs sm:text-sm leading-relaxed shadow-md border border-white/15",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
