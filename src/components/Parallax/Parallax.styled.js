import styled from "styled-components";

export const StyledParallax = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${props => `url(${props.background}) no-repeat top center`};
  background-position: ${props => props.position};
  background-size: cover;
  background-attachment: fixed;
  &&:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, #232323 0%, #112434 100%);
    opacity: 0.7;
  }
`;
