"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TextRise } from "../custom/TextRise";
import { Heading, Paragraph } from "../includes/TypoGraphy";

const wordsOfWisdom = [
  {
    name: "Dr. Prerna Gaur",
    quote: "The only way to do great work is to love what you do.",
    imageUrl: "/images/prerna_gaur.jpg",
  },
  {
    name: "Dr. Anuradha Tomar",
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    imageUrl: "/images/anuradha_tomar.jpeg",
  },
];

export default function WordsOfWisdom() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <Heading>
            <TextRise text="Words of Wisdom" perWord />
          </Heading>
          <Paragraph>Insights and advice from notable individuals.</Paragraph>
        </div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {wordsOfWisdom.map((person, idx) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-white flex flex-col items-center text-center shadow-lg backdrop-blur"
            >
              <div className="size-36 md:size-48 lg:size-56 relative mb-4">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold mb-1">
                {person.name}
              </h3>
              <p className="text-sm md:text-base text-white/70">
                <TextRise text={person.quote} perWord />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
