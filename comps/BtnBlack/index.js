import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.p`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px 25px;
  width: fit-content;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  transition: 0.5s;
  display: ${props=> props.display ? props.display : "flex"};
  :hover {
    background-color: black;
    color: white;
    transition: 0.5s;
    font-weight: 300;
  }
`;

const BtnPrev = styled.p`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px;
  width: fit-content;
  text-align: left;
  transition: 0.5s;
  text-align-last: left;
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  display: ${props=> props.displayPrev ? props.displayPrev : "flex"};
  :hover {
    background-color: black;
    color: white;
    font-weight: 300;
    transition: 0.5s;
  }
`;

const A = styled.a`
  width: max-content;
`;

const Cont = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Cont2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: flex-start;
`;
const Cont3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const BtnBlack = ({ btn, href, hrefPrev, btnPrev, display, displayPrev }) => {
  return (
    <Cont>
      <Cont2>
        <A href={hrefPrev}>
          <BtnPrev displayPrev={displayPrev}>Previous Project</BtnPrev>
        </A>
      </Cont2>
      <Cont3>
        <A href={href}>
          <Btn display={display}>Next Project</Btn>
        </A>
      </Cont3>
    </Cont>
  );
};

export default BtnBlack;
