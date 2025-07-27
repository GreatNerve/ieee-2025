// src/components/Sections/Home/ExpandedView.jsx

import React from "react";
import { motion } from "framer-motion";

const ExpandedView = ({ event, onClose }) => {
  return (
    // MODIFIED: We changed the background to be more transparent and added a backdrop-blur.
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex justify-center items-center p-4 cursor-pointer"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* The rest of the modal content remains the same */}
      <motion.div
        className="bg-[#1c1c1c] rounded-lg overflow-hidden max-w-2xl w-full border border-neutral-700 cursor-default"
        onClick={(e) => e.stopPropagation()}
        layoutId={`card-container-${event.title}`}
      >
        <div className="w-full h-80 overflow-hidden">
          <motion.img
            layoutId={`card-image-${event.title}`}
            src={event.src}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
          <p className="text-gray-300 text-lg">
            {event.description} Here you can add a much more detailed
            description of the event, including speakers, topics covered,
            outcomes, and participant feedback. This space is perfect for
            telling the full story.
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedView;
