import React, { useState } from "react";
import MajorImgs from "../../comps/MajorImgs";
import Categories from "../../comps/Categories";

const Projects = () => {
  return (
    <div className="contMajorProj">
      <Categories></Categories>

      <div className="contents">
        <div className="contentsProjects">
          <br></br> <br></br> <br></br>
          <h1>PROJECTS</h1>
          <div className="imgsCont">
            <div className="projRows">
              <MajorImgs></MajorImgs>
              <MajorImgs
                imgHeight="100%"
                imgWidth="auto"
                src="/CommaidImg.png"
              ></MajorImgs>
            </div>
            <div className="projRows">
              <MajorImgs
                src="/mag.png"
                imgHeight="100%"
                justifyContent="flex-end"
                imgWidth="100%"
              ></MajorImgs>
              <MajorImgs
                src="GameList.png"
                imgWidth="auto"
                imgHeight="280px"
              ></MajorImgs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
