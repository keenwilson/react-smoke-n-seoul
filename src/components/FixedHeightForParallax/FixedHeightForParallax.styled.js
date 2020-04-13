import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 180px;
  max-width: 1500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 24px;
  padding-bottom: 24px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 85px;
    max-width: ${({ theme }) => theme.mobile};
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 1001; */
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    width: 100%;
  }
`;
