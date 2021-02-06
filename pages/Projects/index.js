import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";

const Projects = () => {
  return (
    <div className="contMajorProj">
      <Categories></Categories>

      <div className="contents">
        <div className="contentsProjects" data-aos="zoom-in">
          <h1>PROJECTS</h1>
          <br></br> <br></br> <br></br>
          <div className="imgsCont">
            <div className="projRows">
              <MajorImgs></MajorImgs>
              <MajorImgs imgWidth="auto" src="/CommaidImg.png"></MajorImgs>
            </div>
            <div className="projRows">
              <MajorImgs src="/mag.png">
              </MajorImgs>
              <MajorImgs src="GameList.png" imgWidth="auto"></MajorImgs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
