import styled from "styled-components";

export const StyledSection = styled.div`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  height: calc(100vh - 250px);
  width: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 360px;
  }
`;

export const StyledH1 = styled.h1`
  color: #fff;
`;

export const StyledLead = styled.p`
  color: #fff;
  padding: 12px 128px;
  font-size: 1.25rem;
`;

export const StyledButton = styled.div`
  color: #fff;
  border-width: 2px;
  border-style: solid;
  background-color: transparent;
  border-color: #fff;
  transition: 0.1s background-color linear, 0.1s color linear;
  padding: 21px 34px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  width: auto;
  height: auto;
  font-weight: 600;
  font-size: 1rem;
  margin: 20px 20px;
  /* transform: translate(-50%, -50%); */
  &&:hover {
    background-color: #fff;
    color: #1d1d1d;
    transition: 0.1s background-color linear, 0.1s color linear;
    opacity: 1;
  }
`;
