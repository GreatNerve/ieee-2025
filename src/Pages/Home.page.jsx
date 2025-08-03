import HeroBanner from "@/components/Sections/Home/Hero.banner";
import FAQ from "@/components/Sections/Home/FAQ";
import PastEvents from "@/components/Sections/Home/PastEvents";
import AluminiSection from "@/components/Sections/Home/AluminiSection";
import { Fragment } from "react";
import WhyChooseUs from "@/components/Sections/Home/WhyIEEE/WhyChoose";
import FacultyTestimonials from "@/components/Sections/Home/FacultyTestimonials";

export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      <PastEvents />
      <WhyChooseUs />
      <FacultyTestimonials />
      <FAQ />
    </Fragment>
  );
}
