import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import Footer from '../../comps/Footer';
const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
const BigCont = styled.div`
  background-color: black;
`;
const Res = styled.embed`
  width: 100vw;
  height: 100vh;
  margin-top: -30px;
  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Resume = () => {
  return (
    <BigCont>
      <Categories />
      <Menu />
      <Cont>
        <Res src="Resume-Shannon-Maynard.pdf"></Res>
      </Cont>
      <Footer/>
    </BigCont>
  );
};

export default Resume;
