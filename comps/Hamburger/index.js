import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  width: fit-content;
  background: linear-gradient${(props) =>
    props.expanded ? "(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.08))" : " rgba(255, 255, 255, 0);"};
  padding: 10px 9px;
  margin-right: 5px;
  border-radius: 40px;
  transition: all 0.5s ease-in-out;
  cursor:pointer;
  :hover {
    background: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.08));
    //transition: all 0.5s ease-in-out;
  }
`;

const MenuBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  flex-direction: column;
  gap: 5px;
`;

const TopLine = styled.div`
  width: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.91);
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.expanded
      ? "rotate(45deg)  translateY(4px) translateX(4px) scale(0.6)"
      : "rotate(0deg) scale(0.9)"};
`;

const BottomLine = styled.div`
  width: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.91);
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.expanded
      ? "rotate(-45deg) translateY(-6px) translateX(6px)scale(0.6)"
      : "rotate(0deg) scale(0.9)"};
`;

const MiddleLine = styled.div`
  width: 40px;
  height: 2px;
  margin-top: 6px;
  margin-bottom: 6px;
  background-color: rgba(255, 255, 255, 0.91);
  border-radius: 4px;
  opacity: ${(props) => (props.expanded ? "0" : "1")};
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.expanded
      ? " translateX(-46px) "
      : "translateX(16px)translateX(-16px) scale(0.9)"};
`;

const Hamburger = () => {
  const [expanded, setExpanded] = useState(false);
  console.log(expanded);
  return (
    <Cont
      expanded={expanded}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      <MenuBtn>
        <TopLine expanded={expanded}></TopLine>
        <MiddleLine expanded={expanded}></MiddleLine>
        <BottomLine expanded={expanded}></BottomLine>
      </MenuBtn>
    </Cont>
  );
};

Hamburger.defaultProps = {};

export default Hamburger;
