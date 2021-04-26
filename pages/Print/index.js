import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import BtnBlack from "../../comps/BtnBlack";
import Footer from '../../comps/Footer';


const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;

const Img1 = styled.img`
height: auto;
border: 1px solid #8BDCED;
`;
const Print = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>
      <div id="menu"></div>

  
      <div className="epubCont">
        <div className="titleEpub">
          <H2>Collective Truthers</H2>
          <h5>Wordpress website redesign and branding</h5>
        </div>
        <div className="gifCont">
          <Img1 src="/collectiveTruthersW.png" className="epubImg2"></Img1>
        </div>
        
        <p>this project is in working progress...</p>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <BtnBlack
          btnPrev="View Previous Project"
          btn="View Next Project"
          href="BuddingWriters"
          hrefPrev="CommAid"
        />

      <Footer/>
    </div>
    </div>
  );
};

export default Print;
