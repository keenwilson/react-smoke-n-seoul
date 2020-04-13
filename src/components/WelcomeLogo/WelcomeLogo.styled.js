import styled from "styled-components";

export const StyledWelcomeLogo = styled.img`
  width: 16rem;
  height: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
    width: ${props => `${props.width}px`};
    height: auto;
    margin-top: 36px;
  }
`;

export const StyledImgDiv = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${props => `url(${props.background}) no-repeat top center`};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  &&:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.7;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
