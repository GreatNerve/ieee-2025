// src/components/Sections/Home/ScrollingRow.jsx

import React from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';

const ScrollingRow = ({ events, direction = 'left' }) => {
  const duplicatedEvents = [...events, ...events];

  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, '-100%'] : ['-100%', 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 60, // Slower speed
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden mb-8">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedEvents.map((event, index) => (
          // Make each card take up about half the screen on medium devices
          <div key={index} className="flex-shrink-0 w-10/12 md:w-5/12 p-4">
            <EventCard event={event} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingRow;