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
              <div
                className="animated"
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <MajorImgs imgWidth="100%" />
              </div>
              <div
                className="animated"
                data-aos="zoom-in"
                //data-aos-delay="250"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <MajorImgs src="/CommaidImg.png" />
              </div>
            </div>
            <div className="projRows">
              <div
                className="animated"
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <MajorImgs src="/mag.png" />
              </div>
          
              <div
                className="animated"
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
              >
                <MajorImgs src="/BWComputer.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
