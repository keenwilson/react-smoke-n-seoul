import React from "react";
import { StyledParallax } from "./Parallax.styled";

const Parallax = ({ backgroundUrl, backgroundPosition }) => {
  return (
    <StyledParallax
      background={backgroundUrl}
      position={backgroundPosition}
    ></StyledParallax>
  );
};

export default Parallax;
