import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 16rem;
  height: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
    width: ${props => `${props.width}px`};
    height: auto;
    margin-top: 36px;
  }
`;
