import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: ${props => props.border ? props.border: "solid #ddb575 2px"};
  color: ${props => props.color? props.color: "#ddb575"};
  margin: 40px 0px;
  padding: 20px;
 :focus {outline:0;}
  :hover {
    border: ${props => props.borderhov ? props.borderhov: "solid #ddb575 2px"} ;
    color: white;
    transition: .5s;
    background-color: ${props => props.bgcolor ? props.bgcolor: "#ddb575"};
    cursor: pointer;
  }
`;

const Btn = ({ btn, color, border, borderhov, bgcolor }) => {
  return (
  
      <Button bgcolor={bgcolor} borderhov={borderhov} border={border} color={color}>{btn}</Button>
  
  );
};

export default Btn;
