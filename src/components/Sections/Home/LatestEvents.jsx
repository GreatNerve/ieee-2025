// src/components/Sections/Home/LatestEvents.jsx

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import ExpandedView from "./ExpandedView"; // Import the expanded view

const events = [
  // ... your events array is unchanged
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
  {
    src: "/images/image6.png",
    title: "Project Expo",
    description: "Students showcase their innovative projects and technical skills.",
  },
]; //

const LatestEvents = () => {
  // 1. Add state to track the selected card
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    // 2. Add `relative` to correctly position the ExpandedView
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[380px]">
          {/* 3. Pass the `onCardClick` handler to each card */}
          <div className="lg:col-span-2 lg:row-span-1">
            <EventCard event={events[0]} onCardClick={() => setSelectedEvent(events[0])} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1">
            <EventCard event={events[1]} onCardClick={() => setSelectedEvent(events[1])} />
          </div>
          <div className="lg:col-span-1 lg:row-span-2">
            <EventCard event={events[2]} onCardClick={() => setSelectedEvent(events[2])} />
          </div>
          <div className="lg:col-span-1 lg:row-span-1">
            <EventCard event={events[3]} onCardClick={() => setSelectedEvent(events[3])} />
          </div>
          <div className="lg:col-span-2 lg:row-span-1">
            <EventCard event={events[4]} onCardClick={() => setSelectedEvent(events[4])} />
          </div>
        </div>
      </div>

      {/* 4. This block renders the expanded view when a card is selected */}
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