import React, { useState } from "react";
import Categories from "../../comps/Categories";
import styled from "styled-components";
import TitleNDesc from "../../comps/TitleNDesc";
import TitleNList from "../../comps/TitleNList";
import KeyFindings from "../../comps/Key";
import Btn from "../../comps/Btn";
import BtnBlack from "../../comps/BtnBlack";
import BtnWhite from "../../comps/BtnWhite";
import TitleNDescCol from "../../comps/TitleNDescCol";
import TitleNDescCol2 from "../../comps/TitleNDescCol2";
import TitleNDescCol3 from "../../comps/TitleNDescCol3";
import ThreeCol from "../../comps/ThreeCol";
import Footer from "../../comps/Footer";

const P = styled.p`
  width: 100%;
  max-width: 700px;
  padding: 0px 50px;
  text-align: center;
  text-align-last: center;
`;

const ImgBanner = styled.img`
  width: 100%;
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
      <ImgBanner src="/CommaidImg.png" />
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
          data-aos-delay="200"
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
          src="cmaid/Persona1.png"
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
        <div
          id="key1CA"
          className="animated"
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-delay="200"
        >
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
        <div
          className="animated"
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-delay="200"
        >
          <h3>05 - Low Fidelity</h3>
          <p>
            The first step in the design was to create a low fidelity version on
            sketch. This version was later changed as we found problems with
            usability after conducting user testing.
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
          p="Here myself and another teamate put together a styleguide for our website so that the look and feel of our website would remain consistent, while keeping in mind our users preferences, such as easy navigation, bright colors and friendly interface. I was in charge of the logo and typography."
          src="cmaid/styleGuide.png"
        ></TitleNDescCol>
      </div>
      <div className="bg1">
        <TitleNDescCol
          flexImg={2}
          flexDir="column"
          flexInfo={2}
          h3="09 - High Fidelity"
          p="Our next step in the design process was to create a high fidelity version on figma after doing internal user testing. This allowed us to spot some problems with our low fidelity version and make appropriate adjustments before starting high fidelity version. We went through multiple iterations before arriving at our final user-tested and prototyped end verison."
          src="cmaid/high-fidelity.png"
          viewProject="View High Fidelity"
          flexLink="flex"
          href="https://www.figma.com/proto/R10YSuSRGPS50PKD7zHXVm/CommAid%2FModified?node-id=1%3A188&scaling=scale-down"
        ></TitleNDescCol>
      </div>
      <H2>Testing and Development</H2>
      <div className="bg4rows2">
        <div
          className="animated"
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-delay="200"
        >
          <div className="bg4Inner">
            <h3>10 - User Testing </h3>
            <p>
              After our high fidelity's first iteration, we moved onto to
              testing it out! To figure out what problems lay in our design, we
              conducted user testing with 6 different participants. Each had
              some experience with volunteering and could therefore provide
              accurate feedback.
              <br></br>
              <br></br>
              During testings, we asked users to perform certain tasks and
              observed how easy it was for them to complete, and tracked their
              paths to see where they veered off track. All of this provided us
              insight into things we needed to change.
              <br></br>
              <br></br>
              After each participant finished the testing, we also asked them to
              fill out a survey so that we could more deeply understand their
              thoughts on the app.
            </p>
          </div>
          <div className="bg4Inner">
            <h4>Implementing Changes</h4>
            <p>
              Each round of testing showed us different problems that lay in our
              design. As we discovered these problems, we went about trying to
              first solve the less complicated problems before moving onto the
              bigger ones.
            </p>
          </div>
        </div>
      </div>
      <div className="bg5">
        <div
          className="animated"
          data-aos="fade-up"
          data-aos-mirror="true"
          data-aos-delay="200"
        >
          <h3>11 - Web Development</h3>
          <div className="bg4Inner">
            <p>
              After the design was complete, we moved onto developing it using
              NextJs. Our approach was to split up the work.
            </p>
            <br></br> <br></br>
            <div className="ol">
              <p>
                <b>Step 1: </b> Create Reusable Components
              </p>
            </div>
            <div className="ol">
              <p>
                <b>Step 2: </b> Put components onto pages
              </p>
            </div>
            <div className="ol">
              <p>
                <b>Step 3: </b> Create axios async calls to backend
              </p>
            </div>
            <br></br> <br></br>
            <p>
              At every step in our process during every step, we also debugged.
              For my part, I created the landing page, Application form page for
              volunteers, the login pages and helped teamates with other pages
              as needed.
            </p>
            <Btn
              href="https://takfive-frontend-git-main.takefive.vercel.app/VolunteerListingPage"
              btn="View CommAid Live"
              bgcolor="black"
              borderhov="black"
              border="black solid 2px"
              color="black"
              padding="17px"
            ></Btn>
          </div>
        </div>
      </div>
      <div className="compCont4">
        <TitleNDescCol
          flexImg={4}
          maxWidth="700px"
          flexDir="column"
          flex="none"
          flexInfo={2}
          h3="What I Learned"
          p="I learned a lot about what it means to be a front-end developer. It doesn't just require styling, but being able to connect the users information that they input to a databse. I also learned about how important it is to put in the work first in your UI design first before diving into coding. If you don't things will progress in a direction in your project that you won't like, and the more you try to fix things in a rush as deadlines approach, the more chaos you can cause. Lastly, I also learned about how important it is to have a motivated team that keeps in communication with each other. Without that, your project will always have problems as each member takes it in a different direction."
          src="bwlogo.svg"
        ></TitleNDescCol>
      </div>
      <BtnBlack href="/Print" hrefPrev="/Epub" />
      <Footer />
    </div>
  );
}
