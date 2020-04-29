import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: .04em;
    line-height: 1.8em;
    text-transform: none;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
  }
  img {
    border-radius: 2px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
  }
  
`;
