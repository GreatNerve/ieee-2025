// src/components/Sections/Home/EventCard.jsx

import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  return (
    // We've removed all animation props except for the hover effect.
    <motion.div
      className="bg-[#1c1c1c] rounded-lg overflow-hidden border border-neutral-700 h-full"
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
    >
      <img
        src={event.src}
        alt={event.title}
        className="w-full h-auto aspect-video object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-gray-400 text-base">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
