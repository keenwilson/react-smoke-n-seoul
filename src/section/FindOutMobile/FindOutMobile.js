import React from "react";
import { StyledDiv, StyledH2, StyledH3, StyledP } from "./FindOutMobile.styled";
import { Anchor } from "../../components";
import {
  FacebookOutlined,
  PhoneOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

const FindOutMobile = ({ ...props }) => {
  return (
    <StyledDiv className="find-out-section">
      <StyledH2>Always Open</StyledH2>
      <StyledH3 className="contact-mobile">
        <Anchor href="tel:+1-913-221-5978">
          <PhoneOutlined className="icon" />{" "}
          <span className="phone-number">(913) 221-5978</span>
        </Anchor>
      </StyledH3>
      <StyledP className="contact-mobile">
        Call us if you want catering <br /> or delivery & setup menu.
      </StyledP>
      <Divider />
      <StyledP className="contact-mobile">
        Find out where we'll be, what we're serving, and "like" us on our{" "}
        <Anchor href="https://www.facebook.com/smokenseoul/">
          <FacebookOutlined className="icon" />
        </Anchor>{" "}
        page.
      </StyledP>
      <Divider />
      <StyledP className="contact-mobile">
        Follow us on{" "}
        <Anchor href="https://www.instagram.com/smoke_n_seoul">
          <InstagramOutlined className="icon" />
        </Anchor>{" "}
        we love to post photos of food from our menu and tell you a little about
        it.
      </StyledP>
      <Divider />
      <StyledP>
        Due to COVID-19 and the desire to keep the virus under the curve with
        city regulations, we are doing delivery orders only (no pickup!) to
        Garder, KS addresses.
      </StyledP>
    </StyledDiv>
  );
};

export default FindOutMobile;
