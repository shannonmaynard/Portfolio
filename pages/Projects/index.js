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
                  imgWidth="100%"
                  src="epubImg.png"
                  href="/Epub"
                  projectDesc="A Childrens Book/Game created in Indesign"
                  projectType="A Peanuts Adventures"
                />
              </div>
              <div>
                <MajorImgs
                  src="/CommaidImg.png"
                  href="/CommAid"
                  projectDesc="UX/UI & React Web Application Volunteer web app"
                  projectType="CommAid"
                />
              </div>
            </div>
            <div className="projRows">
              <div>
                <MajorImgs
                  src="/collectiveTruthers.png"
                  href="/CollectiveTruthers"
                  projectDesc="WordPress website for book publishing company"
                  projectType="Collective Truthers"
                />
              </div>

              <div>
                <MajorImgs
                  src="/BWComputer.png"
                  href="/BuddingWriters"
                  projectDesc="WordPress website"
                  projectType="Budding Writers Bookstore Cafe"
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
