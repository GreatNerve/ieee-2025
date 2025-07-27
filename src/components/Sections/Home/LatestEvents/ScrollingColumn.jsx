// src/components/Sections/Home/ScrollingColumn.jsx

import React from "react";
import { motion } from "framer-motion";
import EventCard from "./LatestEvents/EventCard"; // Import the EventCard component

const ScrollingColumn = ({ events, direction = "up", duration = 60 }) => {
  // We duplicate the events to create the seamless looping effect
  const duplicatedEvents = [...events, ...events];

  const columnVariants = {
    animate: {
      y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-6" // Use flex-col for a vertical layout
      variants={columnVariants}
      animate="animate"
    >
      {duplicatedEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </motion.div>
  );
};
const ScrollingColumnClick = ({
  events,
  direction = "up",
  duration = 60,
  onCardClick,
}) => {
  // We duplicate the events to create the seamless looping effect
  const duplicatedEvents = [...events, ...events];

  const columnVariants = {
    animate: {
      y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={columnVariants}
      animate="animate"
    >
      {duplicatedEvents.map((event, index) => (
        <EventCardClick key={index} event={event} onCardClick={onCardClick} />
      ))}
    </motion.div>
  );
};

export default ScrollingColumn;
export { ScrollingColumnClick };
