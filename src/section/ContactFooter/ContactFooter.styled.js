import styled from "styled-components";

export const StyledDiv = styled.div`
  display: block;
  width: 100vw;
  min-height: 150px;
  outline: none;
  padding-top: 17px;
  padding-left: 17px;
  padding-right: 17px;
  clear: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  background: ${({ theme }) => theme.primaryLight};
  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
`;
export const StyledH3 = styled.h3`
  text-align: center;
  white-space: pre-wrap;
  font-size: 10px;
  letter-spacing: 0.25em;
  line-height: 1.8em;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
`;

export const StyledSpan = styled.span`
  margin-left: 10px;
`;
