// src/components/Sections/Home/LatestEvents.jsx

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import ExpandedView from "./ExpandedView";

const events = [
  {
    src: "/images/image1.png",
    title: "Neural Nexus - The Machine Learning Bootcamp",
    description:
      "Neural Nexus, a hands-on machine learning bootcamp equipping participants with AI skills through expert-led projects and sessions.",
  },
  {
    src: "/images/image2.png",
    title: "Algoverse - The DSA Bootcamp Speaker Session -",
    description:
      "AlgoVerse, a DSA bootcamp that builds problem-solving skills through real-world coding challenges and algorithm mastery.",
  },
  {
    src: "/images/image3_new.png",
    title: "Saumya Singh",
    description:
      "Inspiring insights from SIH winner Saumya Singh as she shares her journey, problem-solving strategies, and tips for innovators",
  },
  {
    src: "/images/image4.png",
    title: "Women-Centric Cybersecurity Ideathon",
    description:
      "WIE Cybersprint, a women-centric cybersecurity ideathon empowering female innovators to solve digital security challenges with tech-driven solutions",
  },
  {
    src: "/images/image5.png",
    title: "Web Wizards - The Web Development Bootcamp",
    description:
      "Web Wizards, a hands-on web dev bootcamp where learners build responsive sites using HTML, CSS, JavaScript, and modern frameworks.",
  },
];

// 1. We define the layout in an array for easier management.
//    Each item now has responsive classes for medium (md) and large (lg) screens.
const layout = [
  {
    event: events[0],
    class:
      "md:col-span-2 lg:col-span-2 flex items-center justify-center rounded-lg",
  }, // Wide on tablet & desktop
  { event: events[1], class: "flex items-center justify-center rounded-lg" }, // Standard 1x1 on all screens
  {
    event: events[2],
    class:
      "hidden md:flex md:row-span-2 lg:row-span-2 items-center justify-center rounded-lg",   // Tall on tablet & desktop
  }, 
  { event: events[3], class: "flex items-center justify-center rounded-lg" }, // Standard 1x1 on all screens
  {
    event: events[4],
    class:
      "md:col-span-2 lg:col-span-2 flex items-center justify-center rounded-lg",
  }, // Wide on tablet & desktop
];

const LatestEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Igniting Innovation: <br />
            Spotlight on IEEE NSUT Events
          </h2>
          <p className="text-lg text-gray-400">
            Discover transformative experiences that blend technology,
            creativity, and community to shape future-ready leaders.
          </p>
        </div>

        {/* 2. The grid container now has rules for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[380px]">
          {/* 3. We now map over the `layout` array to create the grid dynamically */}
          {layout.map((item) => (
            <div key={item.event.title} className={item.class}>
              <EventCard
                event={item.event}
                onCardClick={() => setSelectedEvent(item.event)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* This part for the expanded view is perfect and remains unchanged */}
      <AnimatePresence>
        {selectedEvent && (
          <ExpandedView
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LatestEvents;
