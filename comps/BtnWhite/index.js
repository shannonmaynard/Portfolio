import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: white solid 2px;
  color: white;
  margin: 40px 0px;
  padding: 30;
 :focus {outline:0;}
  :hover {
    border: black white 2px;
    color: white;
    transition: .5s;
    background-color: black;
    cursor: pointer;
  }
`;

const BtnWhite = ({ btn, color, border }) => {
  return (
  
      <Button border={border} color={color}>{btn}</Button>
  
  );
};

export default BtnWhite;
