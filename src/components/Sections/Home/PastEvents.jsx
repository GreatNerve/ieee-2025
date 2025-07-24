import React from "react";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import FadeContent from "@/components/ui/FadeContent";

const PastEvents = () => {
  const cardSwapWidth = 700;

  const boxes = [
    {
      img: "/tensymp.png",
      title: "Tensymp'24",
      desc: "IEEE TENSYMP'24, is a premier symposium showcasing cutting-edge technological advancements, fostering global collaboration, and empowering researchers, professionals, and students through insightful sessions, workshops, and networking opportunities across diverse domains.",
    },
    {
      img: "/dssywlc.png",
      title: "DSSYWLC'24",
      desc: "IEEE DSSYWLC is a dynamic event focused on networking, knowledge-sharing, and community building through technical symposiums, discussions and cultural festivities.",
    },
    {
      img: "/algoverse.png",
      title: "Algoverse 3.0",
      desc: "IEEE NSUT AlgoVerse is a vibrant, community-driven initiative that provides an engaging and structured platform to thoroughly master DSA through consistent, daily problem-solving challenges like Problem of the Day (POTD), fostering both collaboration and growth.",
    },
    {
      img: "/pedal.png",
      title: "Pedal Playground",
      desc: "Pedal Playground, organized by IEEE NSUT in collaboration with Crescendo, is an interactive workshop exploring the art of sound design and audio synthesis through pedals. Dive into creative experimentation, music tech.",
    },
  ];

  return (
    <FadeContent
      blur={true}
      duration={900}
      easing="ease-out"
      initialOpacity={0}
    >
      <section className="flex flex-col lg:!flex-row w-full min-h-screen text-white bg-black relative overflow-hidden !px-4 lg:px-0 ">
        <div className="w-full lg:!w-2/5 flex flex-col justify-center items-start text-center lg:!text-left !px-2 !py-6 lg:pl-12 lg:pr-8 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold lg:!mb-4 leading-tight">
            Crafting Excellence: Pioneering Events by{" "}
            <span className="text-blue-400">IEEE NSUT</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            With a strong focus on excellence and innovation, IEEE NSUT's events
            provide truly unparalleled opportunities for meaningful networking,
            hands-on skill-building, immersive learning, and effective
            real-world problem-solving.
          </p>
        </div>

        <div className="w-full lg:!w-3/5 flex items-center justify-center !py-4 lg:!py-0">
          <div className="w-full h-full flex items-center justify-center">
            <CardSwap
              width={cardSwapWidth}
              height={650}
              cardDistance={90}
              verticalDistance={70}
              delay={4000}
            >
              {boxes.map((box, idx) => (
                <Card key={idx}>
                  <div className="flex flex-col h-full w-full overflow-hidden rounded-xl border-2 border-white">
                    <img
                      src={box.img}
                      alt={`box-${idx}`}
                      className="h-3/5 w-full object-contain"
                    />
                    <div className="lg:!pl-4 lg:!pr-8 !pl-4 !pr-28 flex-1 flex flex-col">
                      <h2 className="text-2xl font-semibold mb-2">
                        {box.title}
                      </h2>
                      <p className="text-sm text-gray-300">{box.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>
    </FadeContent>
  );
};

export default PastEvents;
