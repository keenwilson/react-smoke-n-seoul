import React from "react";
import { StyledDiv, StyledH2, StyledH3, StyledP } from "./FindOut.styled";
import { Anchor } from "../../components";
import { OptionsFooter } from "../../section";
import { Row, Col } from "antd";
import {
  FacebookOutlined,
  PhoneOutlined,
  InstagramOutlined
} from "@ant-design/icons";
const FindOut = ({ ...props }) => {
  return (
    <StyledDiv className="find-out-section">
      <StyledH2>Always Open</StyledH2>
      <StyledH3 className="contact">
        Call us at{" "}
        <Anchor href="tel:+1-913-221-5978">
          <PhoneOutlined className="icon" />
          <span className="phone-number">(913) 221-5978</span>
        </Anchor>
        <br />
        if you want catering or delivery & setup menu.
      </StyledH3>
      <Row>
        <Col span={12}>
          <img
            className="img-story"
            src="https://i.imgur.com/uS9QJGF.jpg"
            alt="Our truck and smoker"
          />
        </Col>
        <Col span={12}>
          <img
            className="img-story"
            src="https://i.imgur.com/fOWaj2u.jpg"
            alt="Cooking inside the truck"
          />
        </Col>
      </Row>
      <Anchor href="https://www.facebook.com/smokenseoul/">
        <StyledP className="contact">
          Find out where we'll be, what we're serving, and "like" us on our{" "}
          <FacebookOutlined className="icon" /> page.
        </StyledP>
      </Anchor>
      <Anchor href="https://www.instagram.com/smoke_n_seoul">
        <StyledP className="contact">
          Follow us on <InstagramOutlined className="icon" /> we love to post
          photos of food from our menu
          <br /> and tell you a little about it.
        </StyledP>
      </Anchor>

      <StyledP>
        Due to COVID-19 and the desire to keep the virus under the curve with
        county regulations, we are doing delivery orders only (no pickup!) to
        Garder, KS addresses.
      </StyledP>

      <OptionsFooter />
    </StyledDiv>
  );
};

export default FindOut;
