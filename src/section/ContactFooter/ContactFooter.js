import React from "react";

import { StyledDiv, StyledH3, StyledSpan } from "./ContactFooter.styled";
import { Anchor } from "../../components";
import {
  CopyrightOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined
} from "@ant-design/icons";

function ContactFooter() {
  return (
    <StyledDiv className="contect-footer">
      <StyledH3>SMOKE N SEOUL</StyledH3>
      <StyledH3>
        CALL:{" "}
        <Anchor href="tel:+1-913-221-5978">
          <PhoneOutlined /> (913) 221-5978{" "}
        </Anchor>
      </StyledH3>
      <StyledH3>EMAIL: GREG@SMOKENSEOUL.COM</StyledH3>
      <StyledH3>
        Follow us:{" "}
        <StyledSpan>
          <Anchor href="https://www.facebook.com/smokenseoul/">
            <FacebookOutlined />
          </Anchor>
        </StyledSpan>
        <StyledSpan>
          <Anchor href="https://www.instagram.com/smoke_n_seoul">
            <InstagramOutlined />
          </Anchor>
        </StyledSpan>
      </StyledH3>
      <StyledH3>
        <CopyrightOutlined /> 2020 SMOKE N SEOUL | ALL RIGHTS RESERVED
      </StyledH3>
    </StyledDiv>
  );
}

export default ContactFooter;
