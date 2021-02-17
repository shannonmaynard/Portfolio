import React, { useState } from "react";
import { useRouter } from "next/router";
import Categories from "../comps/Categories";
import styled from 'styled-components';

const Menu = styled.div`
  background-color: black;
  width: 100%;
  height: 183px;

  @media only screen and (max-width: 700px) {
    height: 434px;
  }
`;

export default function Home({ isVisible }) {
  return (
    <div className="About">
     
      <Categories></Categories>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="AboutMeBig">
        <div className="contentsAboutMe">
          <div className="div">
            <div className="img">
              <img src="/Me.png" />
            </div>
            <div className="info">
              <div className="title">
                <h1>
                  Shannon Maynard
                </h1>
                <h4>UX/UI Designer</h4>
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
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
        </div>   
      
      </div>
     
    </div>
  );
}
