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
                  projectDesc="Childrens Book/Game"
                  projectType="Indesign Interactive Epub"
                />
              </div>
              <div>
                <MajorImgs
                  src="/CommaidImg.png"
                  href="/CommAid"
                  projectDesc="Volunteer Application for Students and Organizations"
                  projectType="UX/UI & React Web Application"
                />
              </div>
            </div>
            <div className="projRows">
              <div>
                <MajorImgs
                  src="/collectiveTruthers.png"
                  href="/Print"
                  projectDesc="Book Publishing Website Redesign & Branding"
                  projectType="Collective Truthers"
                />
              </div>

              <div>
                <MajorImgs
                  src="/BWComputer.png"
                  href="/BuddingWriters"
                  projectDesc="Budding Writers Bookstore Cafe Website"
                  projectType="Wordpress Webiste"
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
