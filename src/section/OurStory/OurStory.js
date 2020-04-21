import React from "react";
import { StyledButtonDiv1, StyledAnnounce } from "./OurStory.styled";
import { Parallax } from "react-parallax";
import { Anchor } from "../../components";

const OurStory = ({ ...props }) => {
  return (
    <Parallax
      className="our-story-parallax"
      bgImage="https://i.imgur.com/6JWsNyI.jpg"
      strength={500}
    >
      <div
        className="our-story-parallax-height"
        style={{ height: 500, background: "rgba(0,0,0,0.6)" }}
      >
        <StyledAnnounce className="our-story-announce">
          KC BBQ + Korean.
          <br /> These flavors were meant for each other.
        </StyledAnnounce>
        <Anchor to="/story">
          <StyledButtonDiv1 className="link-to-our-story">
            Explore Our Story
          </StyledButtonDiv1>
        </Anchor>
      </div>
    </Parallax>
  );
};

export default OurStory;
