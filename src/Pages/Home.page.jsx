import HeroBanner from "@/components/Sections/Home/Hero.banner";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      {/* Add a large spacer for scroll testing */}
      <div style={{ height: "60vh" }} />
    </Fragment>
  );
}
