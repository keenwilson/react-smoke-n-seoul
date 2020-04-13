import React from "react";
import { Welcome, About, ContactFooter, OurStory } from "../../section";
import { FixedHeightForParallax } from "../../components";

function DesktopMain({ ...props }) {
  return (
    <div className="desktop-main">
      <FixedHeightForParallax />
      <Welcome />
      <About />
      <OurStory />
      <ContactFooter className="home-contect-footer" />
    </div>
  );
}

export default DesktopMain;
