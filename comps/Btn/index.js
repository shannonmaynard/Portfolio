import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: #ddb575 solid 2px;
  color: #ddb575;
  margin: 40px 0px;
  padding: 20px;

  :hover {
    border: white solid 2px;
    color: white;
    transition: 1s;
    background-color: #222222;
    cursor: pointer;
  }
`;

const Btn = ({ btn }) => {
  return (
  
      <Button>{btn}</Button>
  
  );
};

export default Btn;
