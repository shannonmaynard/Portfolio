import React, { useState } from "react";

import Categories from "../../comps/Categories";

export default function Home() {
  return (
    <div className="aboutCont">
      <Categories></Categories>
      <div className="contents">
        <div className="contentAbout">
          <div className="intro">
            <div className="wordCont">
              <div className="imgMe">
                <img src="/Me.png" />
              </div>
              <div>
                <h1>
                  Hi, I'm <b>Shannon</b>
                </h1>
                <h4>UX/UI Designer</h4>
                <div className="imgMeMobile">
                  <img src="/Me.png" />
                </div>
                <p>
                  I'm currently a student in my final semester at BCIT in
                  the Digital Design and Development Diploma Program 
                  where I'm learning and practicing working on creating dynamic
                  cross-platform applications. <br></br>
                  <br></br>
                  I'm incredibly passionate about all things design and love the
                  challenge of creating user interfaces that delight my
                  audience.
                  <br></br>
                  <br></br>
                  In my spare time, you can find me painting or drawing the things around me
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Contact Me</h2>
          <a
            href="www.linkedin.com/in/shannon-maynard-7004a6198"
            target="_blank"
          >
            <img src="/linkedIn.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
