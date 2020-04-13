import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 0px;
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

export const StyledAnnounce = styled.p`
  color: #fff;
`;
export const StyledButtonDiv1 = styled.div`
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

export const StyledButtonDiv2 = styled.div`
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
