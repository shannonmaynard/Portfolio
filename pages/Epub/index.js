import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";

const Btn = styled.a`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px 15px;

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
const P = styled.p`
  font-weight: 400;
  max-width: 700px;
  padding: 0px 50px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  border: black solid 15px;
`;
const ContLinks = styled.div`
display: flex;
flex-direction: row;
`;


const Epub = () => {
  return (
    <div>
      <Categories></Categories>
      <Menu />
      <div className="epubCont">
        <br></br>
        <br></br>
        <br></br>
        <h3>A Peanut's Adventures</h3>
        <h5>Interactive Epub - A Childrens book</h5>
        <br></br>
        <br></br>
        <br></br>
        <Img src="/epubImg.png" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <P>
          Please take note that this was built in Indesign and audio has weird
          glitches when played online.
          <b> For viewing online, I recommend using Chrome</b> For the <b>best
          experience</b>, you can <b>download</b> the file below, though you should be
          aware of its size of over <b>200MB.</b>
        </P>
        <br></br>
        <br></br>
        <ContLinks>
          <a
            href="https://indd.adobe.com/view/28d31d63-53c3-4a49-ab69-1aa7379a1ca7"
            target="_blank"
          >
            <Btn>View Epub Online</Btn>
          </a>
          <br></br> <br></br> <br></br>
          <a
            href="https://drive.google.com/file/d/1xktBsIBLpbr7hmPH9x1hUEUYLH8DUuyc/view?usp=sharing"
            target="_blank"
          >
            <Btn2>Download Epub Link</Btn2>
          </a>
        </ContLinks>
      </div>
    </div>
  );
};

export default Epub;
