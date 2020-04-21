import React from "react";
import {
  StyledDiv,
  StyledDiv2,
  StyledMenuCategory,
  StyledMenuTitle,
  StyledMenuDescription,
} from "./SeeMenu.styled";
import { regularMenu, kidsMenu } from "./SmokeNSeoulMenuData";
import { Divider, Tag } from "antd";
import { OptionsFooter } from "../../section";

const SeeMenu = ({ ...props }) => {
  return (
    <StyledDiv className="see-menu-section" {...props}>
      <Divider>
        <StyledMenuCategory>Menu</StyledMenuCategory>
      </Divider>
      {regularMenu.map((item, i) => (
        <StyledDiv2 key={item.title} {...props}>
          <StyledMenuTitle>{item.title}</StyledMenuTitle>
          <StyledMenuDescription>{item.description}</StyledMenuDescription>
          {item.category.map((cat, i) => (
            <Tag key={i} className="category-tag">
              {cat}
            </Tag>
          ))}
        </StyledDiv2>
      ))}

      <Divider>
        <StyledMenuCategory>Kid's Menu</StyledMenuCategory>
      </Divider>
      {kidsMenu.map((item, i) => (
        <StyledDiv2 key={item.title} {...props}>
          <StyledMenuTitle>{item.title}</StyledMenuTitle>
          <StyledMenuDescription>{item.description}</StyledMenuDescription>
        </StyledDiv2>
      ))}
      <OptionsFooter />
    </StyledDiv>
  );
};

export default SeeMenu;
