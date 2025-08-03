"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import * as React from "react";
import { TextRise } from "../custom/TextRise";
import { Heading } from "../includes/TypoGraphy";

const faqs = [
  {
    question: "What are the benefits of joining IEEE?",
    answer:
      "Joining IEEE unlocks a world of innovation, access to global research, exclusive events, skill-boosting resources, expert networks, and endless chances to turn your ideas into real-world impact.",
  },
  {
    question: "How can I access IEEE research papers and publications?",
    answer:
      "IEEE research is available through the IEEE Xplore digital library, your gateway to papers, journals, and cutting edge discoveries shaping tomorrow’s tech. Members get full access; others can explore selectively.",
  },
  {
    question: "What conferences and events does IEEE organize?",
    answer:
      "IEEE hosts global and local events across tech domains from flagship conferences to hands-on workshops where innovation meets collaboration and ideas evolve into breakthroughs.",
  },
  {
    question: "Is IEEE only for engineering students?",
    answer:
      "Not at all. IEEE is for anyone passionate about technology be it electronics, electrical, computer science, or beyond. It welcomes researchers, PhD scholars, and innovators from all walks of learning.",
  },
  {
    question: "What skill-building opportunities does IEEE offer?",
    answer:
      "IEEE empowers students through technical projects, workshops, leadership roles, and global resources shaping both technical and soft skills essential for academic and professional growth.",
  },
];

const wobbleInitial = {
  rotate: [0, 1.3, -1.4, 1.2, -1.6, 1.1, -1.4, 0],
  x: [0, -2.1, 2.4, -1.3, 1.5, -1.2, 0.7, 0],
  y: [0, -2.2, 3.4, -2.2, 2.6, -1.5, 1.7, 0],
};
const wobbleAnimate = {
  x: [0, -7, 7, -5, 5, -2, 2, 0],
};

const wobbleTransitionInitial = {
  duration: 2,
  repeat: Infinity,

  times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
};

const wobbleTransition = {
  duration: 0.5,
  times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
};

export default function FAQASection() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(null);

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto flex flex-col items-center justify-center w-full">
      <Heading>
        <TextRise text="Frequently Asked Questions" perWord delay={0.3} />
      </Heading>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col w-full gap-6 mt-8"
        onValueChange={(val) => {
          if (val && typeof val === "string" && val.startsWith("faq-")) {
            setOpenIdx(Number(val.slice(4)));
          } else {
            setOpenIdx(null);
          }
        }}
      >
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.13 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <motion.div
              animate={
                openIdx === null || openIdx === undefined
                  ? wobbleAnimate
                    ? wobbleInitial
                    : {}
                  : wobbleAnimate
                  ? {}
                  : {}
              }
              transition={
                openIdx === null || openIdx === undefined
                  ? wobbleTransitionInitial
                  : wobbleTransition
              }
            >
              <AccordionItem
                value={`faq-${idx}`}
                className="bg-[#101623]/90 border border-blue-500/40 rounded-2xl transition-all duration-300 overflow-hidden
                  data-[state=open]:shadow-[0_0_13.5px_#569ef6,0_0_27px_rgba(59,130,246,0.27)]"
              >
                <AccordionTrigger
                  className="py-4 px-6 text-left text-base md:text-lg font-semibold text-white focus:outline-none flex justify-between items-center no-underline hover:no-underline [&[data-state=open]>svg]:rotate-180"
                  style={{ textDecoration: "none" }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-300 text-sm md:text-base">
                  <TextRise text={faq.answer} perWord />
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
}
