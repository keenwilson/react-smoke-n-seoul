import styled from "styled-components";

export const StyledDiv = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  /* padding: 55px 35px; */
  animation: anim-opacity-full 480ms ease-out;
  display: block;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 0px;
    padding-right: 00px;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
