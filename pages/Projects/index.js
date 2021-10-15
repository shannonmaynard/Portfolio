import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import Footer from "../../comps/Footer";

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
                <MajorImgs
                  src="/CT-cover.png"
                  href="/CollectiveTruthers"
                  projectDesc="WordPress website for book publishing company"
                  projectType="Collective Truthers"
                />
              </div>
              <div>
                <MajorImgs
                  src="/menu-box.png"
                  href="/MenuApp"
                  projectType="Menu Mobile App"
                  projectDesc="A simple Menu App Design For Diner/Catering Business"
                />
              </div>

              
            </div>
            <div className="projRows">
              <div>
                <MajorImgs
                  src="/graphics.png"
                  href="/GraphicDes"
                  projectDesc="Illustrator and Photoshop Projects"
                  projectType="Graphic Design Works"
                />
              </div>
              <div>
                <MajorImgs
                  imgWidth="100%"
                  src="epubImg.png"
                  href="/Epub"
                  projectDesc="A Childrens Book/Game created in Indesign"
                  projectType="A Peanuts Adventures"
                />
              </div>
            </div>
          </div>
        </div>
        <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br>
        <br></br> <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
