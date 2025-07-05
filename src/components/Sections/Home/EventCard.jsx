// src/components/Sections/Home/EventCard.jsx

import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  return (
    // We've updated the classes here to match the new style
    <motion.div
      className="bg-[#1c1c1c] rounded-lg overflow-hidden border border-neutral-800 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
    >
      {/* The image part remains the same */}
      <img
        src={event.src}
        alt={event.title}
        className="w-full h-auto aspect-video object-cover"
      />

      {/* The text content part remains the same */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-gray-400 text-base">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
