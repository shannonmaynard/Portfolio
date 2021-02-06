import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "../Hamburger";
import Categories from "../Categories";

const ContFill = styled.div`
  height: 187px;
  width: 100%;
  display: flex;
  
  background-color: blue;
  @media only screen and (max-width: 700px) {
    height: 536px;
  }
`;

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  const [a, setA] = useState(false);
  return (
    <div>
      <Categories></Categories>
      <ContFill></ContFill>
    </div>
  );
};

export default Menu;
