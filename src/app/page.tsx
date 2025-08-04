import { BlueBgWrapper } from "@/components/includes/BlueBgWraper";
import AlumniSection from "@/components/sections/AlumniSection";
import ChaptersSection from "@/components/sections/ChaptersSection";
import FAQASection from "@/components/sections/FAQASection";
import HeroBanner from "@/components/sections/HeroBanner";
import LatestEventsSection from "@/components/sections/LatestEventsSection";
import PastEvents from "@/components/sections/PastEventCard";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-black ">
      <HeroBanner />
      <PastEvents />
      <WhyChooseUs />
      <ChaptersSection />
      <LatestEventsSection />
      <BlueBgWrapper>
      <AlumniSection />
      </BlueBgWrapper>
      <FAQASection />
    </div>
  );
}
