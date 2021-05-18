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
  border: none;
  transition: 0.5s;
  color: ${(props) => (props.color ? props.color : "white")};
  margin: 40px 0px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#1b344b")};
  :hover {
    border: none;
    color: white;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : "black")};
    cursor: pointer;
    padding: ${(props) => (props.padding ? props.padding : "15px 30px;")};
    transition: 0.5s;
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
