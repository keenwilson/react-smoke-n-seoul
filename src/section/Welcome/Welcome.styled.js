import styled from "styled-components";

export const StyledAnnounce = styled.p`
  position: absolute;
  top: 300px;
  left: 40%;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
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
  position: absolute;
  top: 100px;
  left: 50%;
  font-weight: 600;
  font-size: 1rem;
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
  position: absolute;
  top: 200px;
  left: 50%;
  font-weight: 600;
  font-size: 1rem;
  /* transform: translate(-50%, -50%); */
  &&:hover {
    background-color: #fff;
    color: #1d1d1d;
    transition: 0.1s background-color linear, 0.1s color linear;
    opacity: 1;
  }
`;
