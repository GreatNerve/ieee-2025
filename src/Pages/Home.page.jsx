import HeroBanner from "@/components/Sections/Home/Hero.banner";
import FAQ from "@/components/Sections/Home/FAQ";
import PastEvents from "@/components/Sections/Home/PastEvents";
import { Fragment } from "react";
import FacultyTestimonials from "@/components/Sections/Home/FacultyTestimonials";

export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      <PastEvents />
      <FacultyTestimonials />
      <FAQ />
    </Fragment>
  );
}
