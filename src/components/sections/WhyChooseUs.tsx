"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import {
  Computer,
  Heart,
  Lightbulb,
  Network,
  Star,
  Trophy,
} from "lucide-react";
import { useRef, useState } from "react";
import { TextRise } from "../custom/TextRise";
import { Heading } from "../includes/TypoGraphy";

const BACKGROUND_ANIM = {
  initial: { scale: 1, opacity: 0.1 },
  animate: { scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] },
};

const FEATURE_COLORS = [
  { bg: "bg-blue-950", border: "border-blue-900", iconBg: "bg-blue-950", title: "text-blue-200", desc: "text-blue-300" },
  { bg: "bg-blue-900", border: "border-blue-800", iconBg: "bg-blue-900", title: "text-cyan-100", desc: "text-cyan-200" },
  { bg: "bg-blue-800", border: "border-blue-700", iconBg: "bg-blue-800", title: "text-sky-100", desc: "text-sky-200" },
  { bg: "bg-blue-600", border: "border-sky-600", iconBg: "bg-blue-600", title: "text-sky-50", desc: "text-sky-100" },
  { bg: "bg-blue-400", border: "border-cyan-400", iconBg: "bg-blue-400", title: "text-cyan-950", desc: "text-cyan-800" },
  { bg: "bg-cyan-200", border: "border-cyan-300", iconBg: "bg-cyan-200", title: "text-blue-900", desc: "text-blue-800" },
];

const features = [
  { icon: Computer, title: "Supercharge Your Skills Like a Tech Pro", description: "Get exclusive access to immersive workshops, hands-on projects, and technical talks that turn you from student to standout—master everything from coding to cutting-edge tech frameworks." },
  { icon: Trophy, title: "Experience That Makes Recruiters Notice You", description: "Lead events, organize conferences, and compete in national contests. Your resume will shine with real-world achievements and leadership experience." },
  { icon: Network, title: "Build a Network That Opens Doors Worldwide", description: "Connect with 400,000+ global engineers, industry leaders, and innovators. IEEE is your fast pass to mentorship, internships, and career-changing connections." },
  { icon: Lightbulb, title: "Stay Ahead of the Curve", description: "Dive into IEEE's digital library and stay updated on the latest tech trends, research, and innovations before anyone else." },
  { icon: Heart, title: "Make Friends for Life", description: "Join a vibrant, passionate community where collaboration and fun are standard. Build friendships and professional relationships that last way beyond your college years." },
  { icon: Star, title: "Shape the Future with Impact", description: "Be a part of groundbreaking initiatives and outreach programs that make a difference on campus and in the world. Your ideas and involvement can create real change." },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: 15 },
  visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 1.2, type: "spring", stiffness: 80, damping: 20, bounce: 0.4 } },
};

const textShakeVariants: Variants = {
  initial: { x: 0 },
  shake: { x: [0, -12, 12, -9, 9, -4, 4, 0], transition: { duration: 0.7, ease: "easeInOut" } },
};
const iconWobbleVariants: Variants = {
  initial: { rotate: 0, x: 0, y: 0 },
  wobble: {
    rotate: [0, 1.5, -3, 2.5, -2, 1, -1.5, 0],
    x: [0, -2, 2, -1.5, 1.5, -1, 0.5, 0],
    y: [0, -2, 3, -2, 2, -1.5, 1, 0],
    transition: {
      repeat: Infinity,
      duration: 2.8,
      ease: "easeInOut"
    }
  }
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2, margin: "0px 0px -50px 0px" });
  const [isHovering, setIsHovering] = useState(false);
  const IconComponent = feature.icon;
  const row = Math.floor(index / 2);
  const color = FEATURE_COLORS[row % FEATURE_COLORS.length];

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isCardInView ? "visible" : "hidden"}
      variants={cardVariants}
      style={{ perspective: 1000, willChange: 'transform, opacity' }}
      className={cn(
        "rounded-3xl border-4 shadow-2xl px-7 py-7 sm:px-12 sm:py-9",
        "cursor-pointer transition-all duration-500",
        "w-full flex items-center gap-7 sm:gap-9",
        "backdrop-blur-sm bg-opacity-90",
        color.bg,
        color.border
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        initial="initial"
        animate="wobble"
        variants={iconWobbleVariants}
        style={{ willChange: 'transform' }}
        className={cn(
          "flex-shrink-0 w-14 h-14 sm:w-24 sm:h-24 rounded-2xl",
          "flex items-center justify-center",
          "shadow-lg",
          color.iconBg
        )}
      >
        <IconComponent className="w-8 h-8 sm:w-14 sm:h-14 text-white drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="flex flex-col flex-1 min-w-0"
        initial="initial"
        animate={isHovering ? "shake" : "initial"}
        variants={textShakeVariants}
        style={{ willChange: 'transform' }}
      >
        <motion.h3
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: 10 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
          className={cn(
            "text-lg sm:text-2xl font-bold mb-2 sm:mb-3",
            "drop-shadow-sm",
            color.title
          )}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -30, y: 10 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
          className={cn("text-xs sm:text-lg leading-relaxed", color.desc)}
        >
          {feature.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={sectionRef}
      className="bg-black text-blue w-full min-h-screen flex items-center py-14 sm:py-24 px-2 sm:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          {...BACKGROUND_ANIM}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-600/30 to-transparent blur-3xl"
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          initial={BACKGROUND_ANIM.initial}
          animate={BACKGROUND_ANIM.animate}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 to-transparent blur-3xl"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      <div className="max-w-[1100px] w-full mx-auto flex flex-col items-center relative z-10">
        <Heading>
          <TextRise text="Why Choose Us?" perWord delay={0.2} />
        </Heading>

        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 relative min-h-[440px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;