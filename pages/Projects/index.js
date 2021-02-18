import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";

const Projects = () => {
  return (
    <div className="contMajorProj">
      <Categories></Categories>

      <div className="contents">
        <div className="contentsProjects">
          <br></br> <br></br> <br></br>
          <div className="imgsCont">
            <h1>PROJECTS</h1>

            <div className="projRows">
              <div>
                <MajorImgs imgWidth="100%" src="epubImg.png"/>
              </div>
              <div>
                <MajorImgs src="/CommaidImg.png" href="/CommAid"/>
              </div>
            </div>
            <div className="projRows">
              <div>
                <MajorImgs src="/mag.png" href="/"/>
              </div>

              <div>
                <MajorImgs src="/BWComputer.png" href="/BuddingWriters"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
