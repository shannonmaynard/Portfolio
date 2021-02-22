import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(0, 0, 0, 0);
  padding: 15px;
  font-size: 16px;
  margin: 15px 0px;
  font-family: "Poppins", sans-serif;
  width: fit-content;
  font-weight: 400;
  border: ${(props) => (props.border ? props.border : "solid #ddb575 2px")};
  color: ${(props) => (props.color ? props.color : "#ddb575")};
  margin: 40px 0px;
  :hover {
    border: ${(props) =>
      props.borderhov ? props.borderhov : "solid #ddb575 2px"};
    color: white;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#ddb575")};
    cursor: pointer;
    padding: ${(props) => (props.padding ? props.padding : "15px")}
  }
`;

const Btn = ({ btn, color, border, borderhov, bgcolor, href, padding }) => {
  return (
    <a href={href} target="_blank">
      <Button
        bgcolor={bgcolor}
        borderhov={borderhov}
        border={border}
        color={color}
        padding={padding}
      >
        {btn}
      </Button>
    </a>
  );
};

export default Btn;
