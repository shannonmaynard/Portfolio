import React, { useState } from "react";
import Categories from "../../comps/Categories";
import styled from "styled-components";
import TitleNDesc from "../../comps/TitleNDesc";
import TitleNList from "../../comps/TitleNList";
import KeyFindings from "../../comps/Key";
import Btn from "../../comps/Btn";
import BtnWhite from "../../comps/BtnWhite";
import TitleNDescCol from "../../comps/TitleNDescCol";
import TitleNDescCol2 from "../../comps/TitleNDescCol2";
import TitleNDescCol3 from "../../comps/TitleNDescCol3";
import ThreeCol from "../../comps/ThreeCol";

const H4 = styled.div`
  width: 100%;
  font-size: 40px;
  margin: 100px 0px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;
const P = styled.p`
  width: 100%;
  max-width: 700px;
  padding: 0px 50px;
  text-align: center;
  text-align-last: center;
`;
const Img = styled.img`
  width: 40vw;
  max-width: 700px;
  height: auto;
  padding: 10px;
  border: solid 1px rgb(230, 230, 230);
  @media only screen and (max-width: 700px) {
    width: 90vw;
    height: 100%;
  }
`;
const ImgTarget = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;
const Img2 = styled.img`
  width: 100%;
  border: solid 1px rgb(230, 230, 230);
`;
const Img4 = styled.img`
  width: 80vw;
  max-width: 900px;
  @media only screen and (max-width: 700px) {
    width: 90vw;
    height: 100%;
  }
`;

const Menu = styled.div`
  background-color: black;
  width: 100%;
  height: 183px;

  @media only screen and (max-width: 700px) {
    height: 134px;
  }
`;

const H2 = styled.h2``;

export default function Home({ margin }) {
  return (
    <div className="contentsCA">
      <Categories></Categories>
      <Menu></Menu>
      <Img2 src="/CommaidImg.png" />
      <div className="projTitleCA">
        <img src="cmaid/Logo.svg" alt="sdfsdf" />
        <h1>CommAid</h1>
        <h6>A UX/UI and Web Development Project</h6>
      </div>
      <h2>Project Overview</h2>
      <div className="rowsCA">
        <div
          className="animated"
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-delay="300"
          id="row1CA"
        >
          <h3>About the Project</h3>
          <p>
            The task set out by instructors was to create an application that
            will help out local businesses or community. After bouncing ideas
            around, we thought up our app idea: an app to connect volunteers and
            organizations together.
          </p>
          <h4>The Problem</h4>
          <p>
            BC High school graduation requirement of at least 30 hours of
            volunteer community service Finding the volunteering opportunities
            can be a challenge for the students Tracking the hours of
            volunteering work
          </p>
          <h4>The Solution</h4>
          <p>
            Commaid: a web application that isn't dependent on one resource
            (school). It consolidates volunteer opportunities from different
            organizations on one platform so that both the orginazation and the
            volunteer can find each other.
          </p>
        </div>
        <div
          id="row2CA"
          className="animated"
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-delay="700"
        >
          <h3>Roles</h3>
          <h5>My Role</h5>
          <p>Shannon Maynard — UX/UI and Front-end Developer</p>
          <br></br>
          <br></br>
          <h5>Project Team</h5>
          <p>Sophia Hsu — Project Manager UX/UI Designer</p>
          <p>Aria Mor — UX/UI Designer, Front End Developer</p>
          <p>Pooneh Ashja — UX/UI Designer, Front End Developer</p>
          <p>Cindy Le — Full-Stack Web Developer</p>
          <br></br>
          <br></br>
          <h5>My Tasks</h5>
          <ul>
            <li>User research and analysis</li> <li>Low-fidelity</li>
            <li>high-fidelty</li> <li>prototyping</li>
            <li>front-end development</li> <li></li>
          </ul>
          <h4>Tools Used</h4>
          <ul>
            <li>Figma</li>
            <li>NextJs</li>
            <li>Google Applications</li>
          </ul>
          <a
            href="https://takfive-frontend-git-main.takefive.vercel.app/VolunteerListingPage"
            target="_blank"
          >
            <Btn
              bgcolor="black"
              borderhov="black 2px solid"
              border="white solid 2px"
              color="white"
              btn="View Live Project"
            ></Btn>
          </a>
        </div>
      </div>
      <H2>Research & Analysis</H2>

      <div className="bg1">
        <TitleNDescCol
          flexImg={2}
          flexDir="column"
          flexInfo={2}
          h3="01 - Target Market"
          h5="Defining the Target Market"
          p="After we decided on doing a volunteering app, we started to take a closer look at our two target
          audiences: Organizations and Students, with students being
          primary target."
          src="cmaid/target.svg"
        ></TitleNDescCol>
      </div>
      <div className="bg2">
        <TitleNDescCol
          flexImg={2}
          flexDir="column"
          flexInfo={2}
          h3="02 - SWOT Analysis"
          h5=""
          p="   Once we had an idea of what we wanted to do for our app, we
            started the process of researching whether it was a good idea,
            seeing who our competition was as well as diving into user
            research. To get a better idea of the situation in the market
            as well as our place in it, we performed a swat analysis."
          src="cmaid/swat.png"
        ></TitleNDescCol>
      </div>
      <div className="bg3">
        <TitleNDescCol3
          h3="03 - Personas"
          h5="The Student Persona"
          p="Here we focused on putting together information about our primary and secondary target users, which we put into the form of personas. Getting into the mind of our target audience was important because it let us figure out what direction to take in building the website. 
          "
          titleOrg="The Organization"
          paraOrg="Here we gathered information on what would be a typical worker in a non-profit organization. This provided insight into a manager at a non-profit would need and want in using a website like CommAid, allowing us to tailer it to them."
          src="cmAid/Persona1.png"
        ></TitleNDescCol3>
      </div>
      <div className="bg2">
        <TitleNDescCol
          flexImg={2}
          flexDir="column"
          flexInfo={2}
          h3="04 - User Survey"
          p="After user personas, we took our next step: getting feedback from actual users on what they would find most important when using a volunteering app with the purpose of finding volunteering opportunities. We asked 8 people to fill out a survey for their responses."
          src="cmaid/survey.png"
        ></TitleNDescCol>
        <div className="key1CA">
          <h4>Key Findings</h4>
          <div className="keyInnerCA">
            <div className="keyRow">
              <h5>Student Needs</h5>
              <li>Easy Interface</li>
              <li>Locations near them</li>
              <li>Filtering system</li>
            </div>
            <div className="keyRow">
              <h5>Organization Needs</h5>
              <li>Find more Volunteers</li>
              <li>See volunteers experience</li>
              <li>Manage volunteers</li>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="bg3">
        <P>
          All of our research allowed us to put together a list of features we
          would include into the website.
        </P>
      </div>
      <div className="deliverablesCA">
        <ThreeCol></ThreeCol>
      </div>
      <H2>Design</H2>
      <div className="bg4">
        <div>
          <h3>05 - Low Fidelity</h3>
          <p>
            The first step in the design was to create a low fidelity version on
            sketch, which I did mainly myself. This version was later changed as we found problems with
            usability
          </p>
          <img src="cmaid/invision.png"></img>
        </div>
      </div>
      <div className="bg4-color">
        <div>
          
          <TitleNDescCol2
          h3="06 - The Logo"
          h5="First Stage In Branding"
          p="My task at this stage was to create a logo that would repesent the different facets of our app."
        ></TitleNDescCol2>
         <TitleNList
          p2="Logo Explained"
          b1="1. "
          b2="2. "
          b3="3. "
          li1="Its supposed to represent community love and giving. The green part on top of heart is community holding hands and hugging the heart. The yellow heart is happiness and the peoples hearts in the community"
          li2="Comm = community. CommAid is short for community aid."
          li3="This tag is to give a bit of explanation on the CommAids goals."
          fontSize="10px"
          src="/cmaid/caLogoExplained.svg"
        ></TitleNList>
        </div>
      </div>

      <div className="compCont1CA">
      <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="08 - Style Guide"
          h5="User Goals"
          p="Here myself and another teamate put together a styleguide for our website. I was in charge of the logo and typography."
          src="cmaid/styleGuide.png"
        ></TitleNDescCol>
      </div>

    </div>
  );
}
