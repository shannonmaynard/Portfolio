import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Categories from "../../comps/Categories";

export default function Home({ isVisible }) {
  return (
    <div className="About">
      <Categories></Categories>
      <div className="AboutMeBig">
        <div className="contentsAboutMe">
          <div className="div">
            <div className="img">
              <img src="/Me.png" />
            </div>
            <div className="info">
             <div className="title">
             <h1>
                <b>Shannon Maynard</b>
              </h1>
              <h4>UX/UI Designer</h4>
             </div>
              <div className="img2">
              <img src="/Me.png" />
            </div>
              <p>
                I'm currently a student in my final semester at BCIT in the
                Digital Design and Development Diploma Program
                where I'm learning and practicing working on creating dynamic
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
        <div className="box2About">
          <h2>Contact Me</h2>
          <a href="www.linkedin.com/in/shannon-maynard-7004a6198">
            <img src="/linkedIn.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
