import React from "react";
import { StyledSectionHeader } from "./SectionHeader.styled";

const SectionHeader = ({ title, lead }) => {
  return (
    <StyledSectionHeader>
      <h2>{title}</h2>
      <p>{lead}</p>
    </StyledSectionHeader>
  );
};

export default SectionHeader;
