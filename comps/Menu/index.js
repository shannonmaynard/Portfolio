import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "../Hamburger";
import Categories from "../Categories";

const ContFill = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  background-color: black;
  @media only screen and (max-width: 700px) {
    height: 99px;
  }
`;

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  const [a, setA] = useState(false);
  return (

      <ContFill></ContFill>

  );
};

export default Menu;
