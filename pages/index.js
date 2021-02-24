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
  width: 100%;
  align-items: 100%;
  color: rgb(0, 0, 0);
  font-weight: 300;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
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
          <div className="div">
            <div className="img">
              <img src="/Me.png" />
            </div>

            <div className="info">
              <div className="img2">
                <img className="img2-2" src="/Me.png" />
              </div>
              <p>
                I'm currently a student in my final semester at BCIT in the
                Digital Design and Development Diploma Program where I'm
                learning and practicing working on creating dynamic
                cross-platform applications. <br></br>
                <br></br>
                I'm incredibly passionate about all things design and love the
                challenge of creating user interfaces that delight my audience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
