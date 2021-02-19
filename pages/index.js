import React, { useState } from "react";
import { useRouter } from "next/router";
import Categories from "../comps/Categories";
import styled from "styled-components";
import Menu from "../comps/Menu";
import Footer from '../comps/Footer';

const H1 = styled.div`
  width: 100%;
  align-items: 100%;
  font-weight: 500;
  font-size: 50px;
  font-family: "EB Garamond", sans-serif;
`;
const H5 = styled.div`
  width: 100%;
  align-items: 100%;
  color: #555555;
  font-weight: 300;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;


export default function Home({ isVisible }) {
  return (
    <div className="About">
      <Categories></Categories>
      <Menu></Menu>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="AboutMeBig">
        <div className="contentsAboutMe">
          <div className="div">
            <div className="img">
              <img src="/Me.png" />
            </div>
            <div className="info">
              <div className="title">
                <H1>Shannon Maynard</H1>
                <H5>UX/UI Designer</H5>
                <br></br>
              </div>
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
      
 <Footer/>
    </div>
  );
}
