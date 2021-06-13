import styled from "styled-components";

export const Button = styled.h3`
  box-sizing: border-box;
  height: inherit;
  background: ${({ primary }) => (primary ? "#ef5350" : "#010606")};
  padding: ${({ big }) => (big ? "14px 48px" : "15px 10px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-bottom: 5px solid transparent;


  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 5px solid yellow;
    color ${({ dark }) => (dark ? "#010606" : "#fff")};
    // background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
   
  }
`;
