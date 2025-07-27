// src/components/Sections/Home/EventCard.jsx

import React from "react";
import { motion } from "framer-motion";

// 1. Accept `onCardClick` as a prop to handle the click event
const EventCard = ({ event, onCardClick }) => {
  return (
    <motion.div
      // 2. Add a unique `layoutId` for the main card animation
      layoutId={`card-container-${event.title}`}
      // 3. Add `onCardClick` to the onClick event and a pointer cursor
      onClick={onCardClick}
      className="bg-[#1c1c1c] rounded-lg overflow-hidden border border-neutral-700 h-full w-full relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "0px 15px 25px rgba(0,0,0,0.4)",
      }}
    >
      {/* 4. The image is now a `motion.img` with its own `layoutId` for a seamless transition */}
      <motion.img
        layoutId={`card-image-${event.title}`}
        src={event.src}
        alt={event.title}
        className="h-full w-full rounded-lg"
      />

      {/* This is the gradient overlay that appears on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Text content container, positioned at the bottom of the card */}
      <div className="absolute bottom-0 left-0 p-5">
        <div className="transform transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-gray-300 text-base">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
