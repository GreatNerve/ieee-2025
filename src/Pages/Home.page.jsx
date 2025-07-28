import HeroBanner from "@/components/Sections/Home/Hero.banner";
import FAQ from "@/components/Sections/Home/FAQ";
import PastEvents from "@/components/Sections/Home/PastEvents";
import AlumniSection from "@/components/Section/Home/AlumniSection";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      <PastEvents />
      <FAQ />
    </Fragment>
  );
}
