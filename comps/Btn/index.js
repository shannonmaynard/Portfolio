import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
 background-color: rgb(0,0,0,0.0);padding: 15px;
 font-size: 16px;
    margin: 15px 0px;
    font-family: "Poppins", sans-serif;
width: fit-content;
font-weight: 400;
  border: ${props => props.border ? props.border: "solid #ddb575 2px"};
  color: ${props => props.color? props.color: "#ddb575"};
  margin: 40px 0px;
  padding: 20px;
 :focus {outline:0;}
  :hover {
    border: ${props => props.borderhov ? props.borderhov: "solid #ddb575 2px"} ;
    color: white;


  font-weight: 300;


    padding: 20px;
    background-color: ${props => props.bgcolor ? props.bgcolor: "#ddb575"};
    cursor: pointer;
  }
`;

const Btn = ({ btn, color, border, borderhov, bgcolor, href }) => {
  return (
  <a href={href} target="_blank">
      <Button bgcolor={bgcolor} borderhov={borderhov} border={border} color={color}>{btn}</Button>
  </a>
  );
};  

export default Btn;
