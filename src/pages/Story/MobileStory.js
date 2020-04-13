import React from "react";
import { StyledDiv } from "./Story.styled";

import { ContactFooter, WhoWeAreMobile } from "../../section";

function MobileStory({ ...props }) {
  return (
    <div className="mobile-story">
      <StyledDiv className="story-page">
        <WhoWeAreMobile />
      </StyledDiv>
      <ContactFooter className="story-contect-footer" {...props} />
    </div>
  );
}

export default MobileStory;
