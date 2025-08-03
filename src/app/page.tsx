import HeroBanner from "@/components/sections/HeroBanner";
import PastEvents from "@/components/sections/PastEventCard";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen  bg-black ">
    <HeroBanner />
    <PastEvents />
    </div>
  );
}
