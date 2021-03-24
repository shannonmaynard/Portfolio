import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import Footer from '../../comps/Footer';
const Cont = styled.div`
  width: 100vw;
  height: fit-content;

`;
const BigCont = styled.div`
  background-color: white;
  margin-bottom: 0px;
`;
const Res = styled.embed`
margin-top: 30px;
  width: 100vw;
  height: 100vh;
  margin-bottom: -10px;
  
  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 100vh;
    margin-top: 0px;
  }
`;

const Resume = () => {
  return (
    <BigCont>
      <Categories />
      <br></br>
      <Menu />
      <Cont>
        <br></br>
        <Res src="Resume-Shannon-Maynard.pdf"></Res>
      </Cont>
      <Footer/>
    </BigCont>
  );
};

export default Resume;
