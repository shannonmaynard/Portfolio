import React, { useState } from "react";

import Categories from "../../comps/Categories";

export default function Home() {
  return (
    <div className="aboutCont">
      <Categories></Categories>
      <div className="contentAbout">
        <div className="intro">
          <div className="wordCont">
            <h1>Hi, I'm Shannon</h1>
            <p>UX/UI Designer, Graphic Artist and Frontend developer</p>
          </div>
          <div className="imgMe">
            <img src="/Me.png" />
          </div>
        </div>
      </div>
      <div>
          <h2>Contact Me</h2>
          <a href="www.linkedin.com/in/shannon-maynard-7004a6198">
            <img src="/linkedIn.png" />
          </a>
        </div>
    </div>
  );
}
