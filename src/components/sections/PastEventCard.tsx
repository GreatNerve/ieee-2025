"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInterval } from "@/hooks/useInterval";
import { TextRise } from "../custom/TextRise";
import { Heading, Paragraph, Subheading } from "../includes/TypoGraphy";

// --- Data ---
const events = [
  {
    img: "/tensymp.png",
    title: "Tensymp'24",
    desc: "IEEE TENSYMP'24, is a premier symposium showcasing cutting-edge technological advancements, fostering global collaboration, and empowering researchers, professionals, and students through insightful sessions, workshops, and networking opportunities across diverse domains.",
  },
  {
    img: "/dssywlc.png",
    title: "DSSYWLC'24",
    desc: "IEEE DSSYWLC is a dynamic event focused on networking, knowledge-sharing, and community building through technical symposiums, discussions and cultural festivities.",
  },
  {
    img: "/algoverse.png",
    title: "Algoverse 3.0",
    desc: "IEEE NSUT AlgoVerse is a vibrant, community-driven initiative that provides an engaging and structured platform to thoroughly master DSA through consistent, daily problem-solving challenges like Problem of the Day (POTD), fostering both collaboration and growth.",
  },
  {
    img: "/pedal.png",
    title: "Pedal Playground",
    desc: "Pedal Playground, organized by IEEE NSUT in collaboration with Crescendo, is an interactive workshop exploring the art of sound design and audio synthesis through pedals. Dive into creative experimentation, music tech.",
  },
];

// --- Stack Config ---
const CARD_WIDTH = 390;
const CARD_HEIGHT = 390;
const STACK_DEPTH = 3;
const stackConfig = [
  { scale: 1, y: 0, x: 0, rotate: 0, opacity: 1, z: 30 },
  { scale: 0.94, y: 30, x: -24, rotate: -7, opacity: 0.65, z: 20 },
  { scale: 0.88, y: 60, x: -48, rotate: -17, opacity: 0.4, z: 10 },
];

// --- Helpers ---
function getStackCards(events: typeof events, active: number) {
  // Returns [top, 2nd, 3rd] event indices, wrapping around
  const res = [];
  for (let i = 0; i < STACK_DEPTH; ++i) {
    res.push((active + i) % events.length);
  }
  return res;
}

// --- Main Component ---
export default function PastEvents() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Auto-advance
  useInterval(() => {
    if (!dragging && !animating) handleChange(1);
  }, 4300);

  function handleChange(dir: 1 | -1) {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => {
        let next = prev + dir;
        if (next < 0) next += events.length;
        if (next >= events.length) next -= events.length;
        return next;
      });
      setAnimating(false);
    }, 600); // match exit animation duration with that in AnimatePresence
  }

  // Cards in stack: [top, second, third]
  const stackOrder = getStackCards(events, active);

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[90vh] text-white bg-black relative overflow-hidden px-4 lg:px-0 pt-12 md:pt-20 pb-4">
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-start text-center lg:text-left px-2 py-6 lg:pl-12 lg:pr-8 z-10">
        <Heading className="text-3xl md:text-4xl lg:text-5xl mb-4">
          <TextRise
            text="Crafting Excellence: Pioneering Events by IEEE NSUT"
            delay={0.5}
            perWord
            duration={1}
          />
        </Heading>

        <Paragraph>
          A Showcase of Innovation, Learning, and Collaboration. With a strong
          focus on excellence and innovation, IEEE NSUT&apos;s events provide
          truly unparalleled opportunities for meaningful networking, hands-on
          skill-building, immersive learning, and effective real-world
          problem-solving.
        </Paragraph>
      </div>

      <div className="w-full lg:w-3/5 flex items-center justify-center py-4 lg:py-0">
        <div
          className={cn(
            "w-full h-full flex items-center justify-center relative min-h-[460px] select-none",
            dragging && "cursor-grabbing"
          )}
        >
          <div className="relative w-[420px] h-[420px] max-w-full mx-auto">
            {/* Stack cards (second and third) */}
            {stackOrder.slice(1).map((evIdx, i) => (
              <motion.div
                key={evIdx + "-stack"}
                className="absolute left-0 top-0 w-full h-full pointer-events-none select-none"
                style={{ zIndex: stackConfig[i + 1].z }}
                initial={false}
                animate={{
                  scale: stackConfig[i + 1].scale,
                  y: stackConfig[i + 1].y,
                  x: stackConfig[i + 1].x,
                  rotate: stackConfig[i + 1].rotate,
                  opacity: stackConfig[i + 1].opacity,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              >
                <motion.div className="relative w-full h-full bg-black/80 border-2 border-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-2/5 w-full flex items-center justify-center p-4 bg-black/70">
                    <Image
                      src={events[evIdx].img}
                      alt={events[evIdx].title}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT / 3.2}
                      className="object-contain h-full max-h-32 w-auto mx-auto"
                      draggable={false}
                      priority={false}
                    />
                  </div>
                  <div className="flex-1 flex flex-col px-6 pt-4 pb-6">
                    <Heading className="text-lg mdtext-xl lg:text-2xl">
                      <TextRise
                        text={events[evIdx].title}
                        delay={0.4}
                        perWord
                        duration={1}
                      />
                    </Heading>
                    <Paragraph>{events[evIdx].desc}</Paragraph>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Top card: animate up and fade out, second card animates up to top */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                className="absolute left-0 top-0 w-full h-full pointer-events-auto"
                initial={{
                  scale: stackConfig[1].scale,
                  y: stackConfig[1].y,
                  x: stackConfig[1].x,
                  rotate: stackConfig[1].rotate,
                  opacity: stackConfig[1].opacity,
                  zIndex: 50,
                }}
                animate={{
                  scale: stackConfig[0].scale,
                  y: stackConfig[0].y,
                  x: stackConfig[0].x,
                  rotate: [0, 2.2, -2.2, 0],
                  opacity: stackConfig[0].opacity,
                  zIndex: 50,
                  transition: {
                    scale: { type: "spring", stiffness: 120, damping: 18 },
                    y: { type: "spring", stiffness: 120, damping: 18 },
                    x: { type: "spring", stiffness: 120, damping: 18 },
                    rotate: {
                      type: "tween",
                      duration: 2.4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.3 },
                  },
                }}
                exit={{
                  scale: 1.08,
                  y: -120,
                  x: 0,
                  rotate: 0,
                  opacity: 0,
                  zIndex: 50,
                  transition: { duration: 0.58, ease: "easeInOut" },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.34}
                onDragStart={() => setDragging(true)}
                onDragEnd={(_, info) => {
                  setDragging(false);
                  if (info.offset.x < -90) handleChange(1);
                  else if (info.offset.x > 90) handleChange(-1);
                }}
                whileTap={{ scale: 1.025 }}
                whileHover={{ scale: 1.018 }}
              >
                <motion.div className="relative w-full h-full bg-black/80 border-2 border-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                  <div className="h-2/5 w-full flex items-center justify-center p-4 bg-black/70">
                    <Image
                      src={events[active].img}
                      alt={events[active].title}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT / 3.2}
                      className="object-contain h-full max-h-32 w-auto mx-auto"
                      draggable={false}
                      priority={true}
                    />
                  </div>
                  <div className="flex-1 flex flex-col px-6 pt-4 pb-6">
                    <Heading>
                      <TextRise
                        text={events[active].title}
                        delay={0.4}
                        perWord
                        duration={1}
                      />
                    </Heading>
                    <Paragraph>{events[active].desc}</Paragraph>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-50 pointer-events-auto">
            {events.map((event, idx) => (
              <button
                key={event.title}
                className={cn(
                  "w-3 h-3 rounded-full border border-white transition-all",
                  idx === active
                    ? "bg-blue-400 scale-110 shadow-lg"
                    : "bg-white/30 opacity-60"
                )}
                aria-label={`Show event ${event.title}`}
                onClick={() => {
                  if (idx === active) return;
                  setActive(idx);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
