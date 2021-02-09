import React, { useState } from "react";
/*
import Categories from "../comps/Categories";
import Slideshow2 from "../comps/Slideshow2";
import Slideshow3 from "../comps/Slideshow3";
import styled from "styled-components";
import DropDown from '../comps/DropDown';
import ArtColumn from '../comps/ArtColumn';



const Cont = styled.div`

 color: whitesmoke;
`;

const Header2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 55px;
  height: 100%;
  top: 35%;
  left: 40%;
  position: absolute;
  font-weight: lighter;
  color: white;
  width: 100%;
  z-index: 3;
  height: fit-content;
  width: fit-content;
  :hover {
    display: none;
    transition: 3s;
  }
`;

const Header3 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-top: 50px;
  height: 100%;
  top: 35%;
  position: absolute;
  font-weight: lighter;
  color: white;
  z-index: 3;
  height: fit-content;
  width: max-content;
`;
const Header1 = styled.div`
  font-size: 28px;
  color: white;
  padding: 50px;
  text-align: center;
  padding-top: 70px;

  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ProjectDesc = styled.div`

  margin: 0% 20%;
  font-size: 18px;
  
`;

const H4 = styled.div`
  margin: 0% 20%;
  font-size: 22px;
  margin-top: 14px;
  font-weight: thin;
`;

export default function Home() {
  return (
    <div>

      <Cont>
        <Categories></Categories>
        <Header1>
          Project: Budding Writers Bookstore Cafe
          <H4>Wordpress Website</H4>
        </Header1>
<br></br>

        <ProjectDesc>
          I took part in creating a <b>Wordpress website</b> with two other
          teamates. The website was based on a fake company called Budding
          Writers Bookstore Cafe, which was a bookstore cafe that also hosted
          writing events. The website included basic information about the
          store, a section that lets you order books online and and the menu for
          the cafe.
          <br></br>
          <br></br>
          During the project, I took part in <b>user reaserch and testing</b>,
          created a <b>sitemap,</b> did created a content <b>inventory file</b>,
          created a persona, helped in logo design.
        </ProjectDesc>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="landscape">
 
          {inHover && (
            <Header2>
              LOGO<Header3>Graphic Design</Header3>
            </Header2>
          )}
          <div
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
          >
            <Slideshow2
              title="Logo"
              desc="I helped in the design creation of this logo. The feather represents writing and books, which is stirring the coffee cup."
              src="./bwlogo.svg"
            ></Slideshow2>
          </div>
        </div>
        <div className="landscape">
          {inHover2 && (
            <Header2>
              Persona<Header3>UX/UI & Graphic Design</Header3>
            </Header2>
          )}
          <div
            onMouseEnter={() => setHover2(false)}
            onMouseLeave={() => setHover2(true)}
          >
            <Slideshow2
              title="Persona"
              src="Persona2.png"
              desc="Persona created from user research for Budding Writers Bookstore Cafe. These people were our main target audience."
            ></Slideshow2>
          </div>
        </div>
        <div className="portrait">
          {inHover2 && (
            <Header2>
              Persona<Header3>UX/UI & Graphic Design</Header3>
            </Header2>
          )}
          <div
            onMouseEnter={() => setHover2(false)}
            onMouseLeave={() => setHover2(true)}
          >
            <Slideshow3 desc="" link="" title="" src=""></Slideshow3>
          </div>
        </div>
      </Cont>
    </div>
  );
}
