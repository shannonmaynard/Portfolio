import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Categories from "../../comps/Categories";

export default function Home({ isVisible }) {
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />;

  return (
    <div>
      <Categories></Categories>
      <div className="contentsAbout">
        <div className="intro">
          <div className="innerIntro">
            <div className="name">
              <h1>Hi, I'm Shannon</h1>
              <p>UX/UI Designer, Graphic Artist and Frontend developer</p>
              <br></br> <br></br>
            </div>
            <div className="photo">
              <img src="/Me.png" />
              <div></div>
            </div>
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
  );
}
