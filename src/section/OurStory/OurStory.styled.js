import styled from "styled-components";

export const StyledAnnounce = styled.p`
  position: absolute;
  top: 275px;
  left: 60%;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
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
  top: 350px;
  left: 65%;
  font-weight: 600;
  font-size: 1.25rem;
  /* transform: translate(-50%, -50%); */
  &&:hover {
    background-color: #fff;
    color: #1d1d1d;
    transition: 0.1s background-color linear, 0.1s color linear;
    opacity: 1;
  }
`;
