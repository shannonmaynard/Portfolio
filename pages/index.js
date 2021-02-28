import React, { useState } from "react";
import { useRouter } from "next/router";
import Categories from "../comps/Categories";
import styled from "styled-components";
import Menu from "../comps/Menu";
import Footer from "../comps/Footer";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px;
`;

const H4 = styled.h4`
font-size: 28px;
border-top: 1px solid grey;
padding-top: 30px;
font-weight: 400;
`;
const Tag = styled.div`
  width: fit-content;
  padding: 10px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-size: 16px;
  border: solid 1px #333333;
  border-radius: 5px;
  min-width: 100px;
  margin: 4px;
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
              data-aos-mirror="false"
              data-aos-delay="200"
            >
              <h1 className="text">Hi,</h1>
              <h1 id="myname">my name is</h1>
            </div>
            <div
              className="animated"
              data-aos="fade-up"
              data-aos-speed="ease-in-out"
              data-aos-mirror="false"
              data-aos-delay="400"
            >
              <h1 className="text">Shannon</h1>
            </div>

            <div
              id="jobPos"
              className="animated"
              data-aos="fade-up"
              data-aos-speed="ease-in-out"
              data-aos-mirror="false"
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
                </p>
                <br></br>
                <H4>Get in touch with me!</H4>
                <br></br>
                <div>
                  <a
                    href="http://www.linkedin.com/in/shannon-maynard-7004a6198"
                    target="_blank"
                  >
                    <Img className="linkedIn" src="/linkedIn2.png" />
                  </a>
                  <a href="mailto:smaynard@my.bcit.ca">
                    <Img src="Mail2.svg"></Img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tags">
            <Tag>Figma</Tag>
            <Tag>Photoshop</Tag>
            <Tag>Indesign</Tag>
            <Tag>Invision</Tag>
            <Tag>Wordpress</Tag>
            <Tag>Illustrator</Tag>
            <Tag>Adobe XD</Tag>
            <Tag>After Effects</Tag>
            <Tag>React</Tag>
            <Tag>Github</Tag>
            <Tag>NextJs</Tag>
            <Tag>SCSS</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Heat Mapping</Tag>
            <Tag>SEO Optimazation</Tag>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
