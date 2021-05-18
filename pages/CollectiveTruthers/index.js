import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import BtnBlack from "../../comps/BtnBlack";
import Footer from "../../comps/Footer";
import Btn from "../../comps/Btn";

const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;
const P = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  text-align: center;
  text-align-last: center;
`;
const A = styled.a`
  font-size: 20px;
  font-weight: 400;
  padding: 20px;
  border: solid 1px black;
  :hover {
  }
`;

const Div3 = styled.p`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;

`;
const Div = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  text-align-last: center;
  align-items: center;
  flex-direction: column;
  background-color: #E6F7F5;
`;
const Div2 = styled.div`
  max-width: 700px;
  text-align: left;
  padding: 100px 0px;
  font-weight: 400;
  justify-content: center;
`;
const Img1 = styled.img`
  height: auto;
  box-shadow: 1px 1px 15px rgb(50, 50, 100, 0.1);
  border-radius: 30px;
  margin: 20px;
  max-width: 300px;
`;
const Li = styled.li`
  font-weight: 300;
  font-size: 16px;
`;
const CollectiveTruthers = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>
      <div id="menu"></div>

      <div className="epubCont">
        <div className="titleEpub">
          <H2>Collective Truthers</H2>
          <h5>Wordpress website redesign and branding</h5>
        </div>
        <Div>
          <Div2>
            <h4>About the Project</h4>
            <Img1 src="/collectiveTruthersW.png" className="epubImg2"></Img1>
            <br></br>
            <P>
              Collective Truthers is a small book publishing company that
              targets first-time authors that have experienced something
              incredible and desire to share their story with the world. My task
              was to completely redesign their website, as well as create a logo
              for this book publishing company that would work well with their
              other affiliated website truthtellerspublishing.
            </P>
            <a href="https://collectivetruthers.com/" target="_blank">
              <Btn btn="View Live Project"></Btn>
            </a>
          </Div2>
        </Div>
    
        <Div3>
          <Div2>
            <h4>Project Tasks</h4>
            <ol>
              <Li>Client Survey</Li>
              <Li>User Research and Competitive Analysis</Li>
              <Li>Logo Design</Li>
              <Li>Persona Creation</Li>
              <Li>Mood Board</Li>
              <Li>Style Guide</Li>
              <Li>Author Pictures Photoshop Editing</Li>
              <Li>Sitemap</Li>
              <Li>Wordpress Website Creation</Li>
            </ol>
          </Div2>
        </Div3>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <BtnBlack
          btnPrev="View Previous Project"
          btn="View Next Project"
          href="BuddingWriters"
          hrefPrev="CommAid"
        />

        <Footer />
      </div>
    </div>
  );
};

export default CollectiveTruthers;