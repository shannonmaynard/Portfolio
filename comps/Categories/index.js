import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "../Hamburger";

const NavBox = styled.div`
  display: flex;
  position: relative;
  @media only screen and (max-width: 700px) {
    align-items: flex-start;
    display: ${(props) => (props.expanded ? "flex" : "none")};
    height: ${(props) => (props.expanded ? "max-content" : "0px")};

  }
`;

const NavItems = styled.div`
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: left;
  text-align: left;
`;

const HamCont = styled.div`
  display: none;
  @media only screen and (max-width: 700px) {
    display: flex;
    position: fixed;
    top: 15px;
    right: 10px;
    transform: scale(.9);
  }
`;


const Categories = () => {
  const [expanded, setExpanded] = useState(false);
  const [a, setA] = useState(false);
  return (
    <div className="Menu">
      <HamCont
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <Hamburger />
      </HamCont>
      <div className="menuHeader">
      <a href="/"><h4>Shannon's Portfolio</h4></a>
      </div>

      <NavBox expanded={expanded}>
        <div className="navItems">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/Projects">Work</a>
            </li>
            <li>
              <a href="/Resume">Resume</a>
            </li>
          </ul>
        </div>
      </NavBox>
  
    </div>
  );
};

export default Categories;
