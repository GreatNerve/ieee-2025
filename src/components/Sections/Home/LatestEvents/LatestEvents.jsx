// src/components/Sections/Home/LatestEvents.jsx

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import ExpandedView from "./ExpandedView";

const events = [
  {
    src: "/images/image1.png",
    title: "Robotics Hackathon",
    description: "A 24-hour event where teams build and program robots.",
  },
  {
    src: "/images/image2.png",
    title: "PCB Design Workshop",
    description: "A hands-on workshop covering the fundamentals of PCB design.",
  },
  {
    src: "/images/image3.png",
    title: "AI/ML Seminar",
    description: "An expert-led seminar on the latest trends in Artificial Intelligence.",
  },
  {
    src: "/images/image4.png",
    title: "TechFest Winners",
    description: "Celebrating the brilliant minds who achieved top honors.",
  },
  {
    src: "/images/image5.png",
    title: "Industry Connect",
    description: "A networking event bridging the gap between students and professionals.",
  },
];

// 1. We define the layout in an array for easier management.
//    Each item now has responsive classes for medium (md) and large (lg) screens.
const layout = [
    { event: events[0], class: "md:col-span-2 lg:col-span-2" }, // Wide on tablet & desktop
    { event: events[1], class: "" }, // Standard 1x1 on all screens
    { event: events[2], class: "md:row-span-2 lg:row-span-2" }, // Tall on tablet & desktop
    { event: events[3], class: "" }, // Standard 1x1 on all screens
    { event: events[4], class: "md:col-span-2 lg:col-span-2" }, // Wide on tablet & desktop
];

const LatestEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Events
          </h2>
          <p className="text-lg text-gray-400">
            A glimpse into our most recent activities and successes.
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