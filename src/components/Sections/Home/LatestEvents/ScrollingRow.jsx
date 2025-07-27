// src/components/Sections/Home/ScrollingRow.jsx

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import EventCard from "./EventCard";

const ScrollingRow = ({ events, direction = "left" }) => {
  const duplicatedEvents = [...events, ...events];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const rowVariants = {
    initial: { x: direction === "left" ? "25%" : "-25%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 40, damping: 15, duration: 1 },
    },
  };

  useEffect(() => {
    const marqueeAnimation = {
      x: direction === "left" ? "-100%" : "0%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        },
      },
    };
    if (isInView) {
      const sequence = async () => {
        await controls.start("visible");
        if (direction === "right") {
          await controls.set({ x: "-100%" });
        }
        controls.start(marqueeAnimation);
      };
      sequence();
    }
  }, [isInView, controls, direction]);

  return (
    <div ref={ref} className="w-full overflow-hidden mb-8">
      <motion.div
        className="flex"
        initial="initial"
        animate={controls}
        variants={rowVariants}
      >
        {duplicatedEvents.map((event, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-10/12 sm:w-6/12 md:w-5/12 lg:w-4/12 px-2"
          >
            <EventCard event={event} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingRow;
