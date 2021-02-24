import React, { useState } from "react";
import { useRouter } from "next/router";
import Categories from "../comps/Categories";
import styled from "styled-components";
import Menu from "../comps/Menu";
import Footer from "../comps/Footer";

const H1 = styled.div`
  width: 100%;
  align-items: 100%;
  font-weight: 500;
  font-size: 50px;
  color: rgb(0, 0, 0);
  font-family: "EB Garamond", sans-serif;
  @media only screen and (max-width: 700px) {
    font-size: 40px;
    text-align: center;
  }
`;
const H5 = styled.div`
  width: fit-content;
  padding: 10px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-size: 16px;
  border: solid 1px #333333;
  border-radius: 5px;
  min-width: 100px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.07);
    transition: 0.3s;
    box-shadow: 1px 1px 3px grey;
    font-weight: 600;
    cursor: pointer;
  }
  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`;

export default function Home({ isVisible }) {
  return (
    <div className="About">
      <Categories></Categories>

      <div id="test">
        <div className="containerTest">
          <div>
            <div
              className="animated"
              data-aos="fade-down"
              data-aos-mirror="true"
              data-aos-delay="200"
            >
              <h1 className="text">Hi,</h1>
              <h1 id="myname">my name is</h1>
            </div>
            <div
              className="animated"
              data-aos="fade-up"
              data-aos-speed="ease-in-out"
              data-aos-mirror="true"
              data-aos-delay="400"
            >
              <h1 className="text">Shannon</h1>
            </div>

            <div
              id="jobPos"
              className="animated"
              data-aos="fade-up"
              data-aos-speed="ease-in-out"
              data-aos-mirror="true"
              data-aos-delay="600"
            >
              <h1 id="h1JobPost">I'm a UX/UI Designer</h1>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="AboutMeBig">
        <div className="contentsAboutMe">
          <div
            className="animated"
            data-aos="fade-up"
            data-aos-speed="ease-in-out"
            data-aos-mirror="true"
            data-aos-delay="600"
          >
            <div className="div">
              <div className="img">
                <img src="/Me.png" />
              </div>
              <div id="info">
                <h3>About Me</h3>
                <div className="img2">
                  <img className="img2-2" src="/Me.png" />
                </div>
                <p>
                  My name is <b>Shannon Maynard</b> and I'm currently a student
                  in my final semester at BCIT in the Digital Design and
                  Development Diploma Program where I'm learning and practicing
                  working on creating dynamic cross-platform applications.{" "}
                  <br></br>
                  <br></br>
                  I'm incredibly passionate about all things design and love the
                  challenge of creating user interfaces that delight my
                  audience.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="tags">
            <H5>Figma</H5>
            <H5>Photoshop</H5>
            <H5>Indesign</H5>
            <H5>Invision</H5>
            <H5>Wordpress</H5>
            <H5>Illustrator</H5>
            <H5>Adobe XD</H5>
            <H5>After Effects</H5>
            <H5>React</H5>
            <H5>Github</H5>
            <H5>NextJs</H5>
            <H5>SCSS</H5>
            <H5>HTML</H5>
            <H5>CSS</H5>
            <H5>Heat Mapping</H5>
            <H5>SEO Optimazation</H5>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
