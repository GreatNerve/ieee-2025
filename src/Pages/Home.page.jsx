import { ChaptersSection } from "@/components/Sections/Home/ChaptersSection";
import HeroBanner from "@/components/Sections/Home/Hero.banner";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      <ChaptersSection />
    </Fragment>
  );
}