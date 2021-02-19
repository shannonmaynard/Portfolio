import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "../Hamburger";
import Categories from "../Categories";

const ContFill = styled.div`
  height: 195px;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 700px) {
    height: 128px;
  }
`;

const Menu = () => {
  const [expanded, setExpanded] = useState(false);
  const [a, setA] = useState(false);
  return (
    <div>
      <ContFill></ContFill>
    </div>
  );
};

export default Menu;
