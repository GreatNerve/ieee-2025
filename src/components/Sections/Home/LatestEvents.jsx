// src/components/Sections/Home/LatestEvents.jsx

import React from "react";
import ScrollingRow from "./ScrollingRow";

const row1Events = [
  {
    src: "/images/image1.png",
    title: "Robotics Hackathon",
    description:
      "A 24-hour event where teams build and program robots to solve real-world challenges.",
  },
  {
    src: "/images/image2.png",
    title: "PCB Design Workshop",
    description:
      "A hands-on workshop covering the fundamentals of printed circuit board design.",
  },
  {
    src: "/images/image3.png",
    title: "AI/ML Seminar",
    description:
      "An expert-led seminar on the latest trends and applications in Artificial Intelligence.",
  },
];

const row2Events = [
  {
    src: "/images/image4.png",
    title: "TechFest Winners",
    description:
      "Celebrating the brilliant minds who achieved top honors in our annual TechFest competition.",
  },
  {
    src: "/images/image5.png",
    title: "Industry Connect",
    description:
      "A networking event bridging the gap between students and leading industry professionals.",
  },
  {
    src: "/images/image6.png",
    title: "Project Expo",
    description:
      "Students showcase their innovative projects and technical skills to faculty and peers.",
  },
];

const LatestEvents = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Events
          </h2>
          <p className="text-lg text-gray-400">
            A glimpse into our most recent activities and successes.
          </p>
        </div>

        <ScrollingRow events={row1Events} direction="left" />
        <ScrollingRow events={row2Events} direction="right" />
      </div>
    </div>
  );
};

export default LatestEvents;
