import Head from "next/head";
//import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Categories from "../comps/Categories";
import Slideshow2 from "../comps/Slideshow2";
import styled from "styled-components";
import Flip from "../comps/flip";
import Flip2 from "../comps/flip2";
import Flip3 from "../comps/flip3";
import ProjectDesc1 from "../comps/ProjectDesc1";

const Cont = styled.div`
  height: fit-content;
  text-align: left;
  font-family: "Poppins", sans-serif;
`;

const Header2 = styled.div`
  display: flex;
  font-size: 55px;
  height: 100%;
  font-weight: 800;
  position: absolute;
  color: white;
  width: 100%;
  z-index: 3;
  :hover {
    transition: 5s;
    display: none;
  }
`;

const Header3 = styled.h2`
  display: flex;
  font-size: 20px;
  margin-top: 50px;
  height: 100%;
  top: 45%;
  position: absolute;
  font-weight: lighter;
  color: white;
  z-index: 3;
  height: fit-content;
  width: max-content;
`;
const Header1 = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-weight: 400;
  padding-bottom: 40px;
  color: #333333;
  display: flex;
  flex-direction: column;
`;
const H4 = styled.div`
  font-family: "Lucida Sans", sans-serif;
  font-size: 16px;
  padding-top: 50px;
  font-weight: thin;
`;

const ProjectDescTop = styled.div`
  height: fit-content;
  padding: 100px 15%;
`;

export default function Home() {
  const [inHover, setHover] = useState(true);
  const [inHover2, setHover2] = useState(true);
  return (
    <div>
      <Cont>
        <Categories></Categories>

        <div className="contents">
          <br></br>

          <ProjectDescTop>
            <Header1>Budding Writers Bookstore Cafe</Header1>
            <p>
              I took part in creating a <b>Wordpress website</b> with two other
              teamates. The website was based on a fake company called Budding
              Writers Bookstore Cafe, which was a bookstore cafe that also
              hosted writing events. The website included basic information
              about the store, a section that lets you order books online and
              and the menu for the cafe.
              <br></br>
              <br></br>
              During the project, I took part in{" "}
              <b>user reaserch and testing</b>, created a <b>sitemap,</b> did
              created a content <b>inventory file</b>, created a persona, helped
              in logo design.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </ProjectDescTop>
          <div className="gifNDesc">
            <div className="gif">
              <Flip2 url="url(/ListApp.gif)"/>
            </div>
            <div className="description">
              <ProjectDesc1 />
            </div>
            <div></div>
          </div>
          <div className="landscape">
            {inHover && (
              <Header2>
                <Header3></Header3>
              </Header2>
            )}

            <div
              onMouseEnter={() => setHover2(false)}
              onMouseLeave={() => setHover2(true)}
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
                <Header3></Header3>
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
        </div>
      </Cont>
    </div>
  );
}
