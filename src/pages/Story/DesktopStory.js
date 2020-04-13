import React from "react";
import { ContactFooter, WhoWeAre } from "../../section";

function DesktopStory({ ...props }) {
  return (
    <div className="desktop-story">
      <WhoWeAre />
      <ContactFooter className="story-contect-footer" />
    </div>
  );
}

export default DesktopStory;
