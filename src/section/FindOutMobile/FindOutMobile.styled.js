import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  padding: 20px;
`;

export const StyledDiv2 = styled.div`
  padding-bottom: 40px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-bottom: 24px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 250px;
    width: 100%;
    height: auto;
  }
`;
export const StyledH2 = styled.h2`
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 1px;
`;

export const StyledH3 = styled.h3`
  color: #fff;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-bottom: 1px;
`;

export const StyledP = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.65;
  max-width: 600px;
  margin: 0 auto;
`;
