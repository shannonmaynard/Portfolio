import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import BtnBlack from "../../comps/BtnBlack";
import Footer from '../../comps/Footer';
const Btn = styled.a`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: 300;
  }
`;

const Btn2 = styled.a`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px 15px;
  border-left: 1px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: 300;
  }
`;
const H2 = styled.h2`
  background: rgb(184, 194, 224);
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

const Li = styled.li``;

const Print = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>
      <div id="menu"></div>

      <a href="/BuddingWriters">
        <BtnBlack
          btnPrev="View Previous Project"
          btn="View Next Project"
          href="BuddingWriters"
          hrefPrev="CommAid"
        />
      </a>
      <Footer/>
    </div>
  );
};

export default Print;
