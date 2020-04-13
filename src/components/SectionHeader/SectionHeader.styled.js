import styled from "styled-components";

export const StyledSectionHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
  h2 {
    font-size: 30px;
    margin-top: 12px;
    margin-bottom: 15px;
    font-weight: 600;
    color: #fff;
  }
  p {
    font-size: 21px;
    margin-bottom: 20px;
    margin: 0 0 10px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;
