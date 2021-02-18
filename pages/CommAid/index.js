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



      <div className="deliverablesCA">
        <ThreeCol></ThreeCol>
      </div>

      <div className="compCont1CA">
        <TitleNDesc
          h3="01 - User survey"
          p="The first step we took after meeting our Budding Writers client was to have them to fill out a survey we made. This was to get a general idea of their wants and needs for the project as well as key features to include.All of this let us build a picture of the website in our minds of a grassroots user-friendly website."
          src="bw/survey.png"
          keyH3="Key Findings"
          keyP="Website and branding should be grassroots with a sense of community. 
        Organized for a friendly user experience."
        ></TitleNDesc>
      </div>
      <div className="compCont1CA">
        <TitleNDesc
          h3="02 - Competitive Analysis"
          p="Now that we knew what our client wanted, we started taking a look at what other companies of a similar nature were doing to discover Strenghts, Weaknesses, Opportunities and Threats."
          p3="Through this, we discovered the Budding Writers strengths and what we could take and improve from our competitors.
        "
          src="bw/swot.png"
        ></TitleNDesc>
      </div>
      <div className="keyCA">
        <KeyFindings
          li1="Strengths: strong community, loyal customers."
          li2="Opportunity: no bookstore's in area with modern website"
          li3="Competition Takeaway: Indigo user-friendly online bookstore joined with grassroots feel for rest of website."
        ></KeyFindings>
      </div>
      <div
        className="compCont1CA"
        data-aos="fade-up"
        data-aos-mirror="false"
        data-aos-delay="300"
      >
        <h3>03 - User Personas</h3>
        <P>
          We then created a user persona based off of our research to get a
          picture of the two most regular customers would look like. This
          allowed us to find out their likes and dislikes as users.
        </P>
        <br></br>
        <br></br>
        <div className="compContInnerCA">
          <div className="personasCA">
            <div className="rowCA">
              <Img src="bw/persona1.png" />
              <br></br> <br></br>
            </div>
          </div>
          <div className="personasCA">
            <div className="rowCA">
              <Img src="bw/persona2.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="compCont2CA">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="04 - Task Model"
          h5="User Goals"
          p="After visualizing our users, we moved onto their user task. We started asking ourselves, what is their goal when using the website? And how do we create a product that will assist them in completing their goal?"
          src="bw/task-model.png"
        ></TitleNDescCol>
      </div>
      <br></br>
      <H2 margin="200px 0px">Design</H2>
      <div className="compCont3CA">
        <TitleNDescCol2
          h3="05 - The Logo"
          h5="First Stage In Branding"
          p="Finally, after we were clear on who are audience was, their goals and our positioning message, we finally started on the design. Our first step: creating a logo. For this, we had to think about how we could represent all three aspects of our clients business: coffee, reading and writing.
          "
        ></TitleNDescCol2>
        <TitleNList
          p2="Logo Explained"
          b1="1. "
          b2="2. "
          b3="3. "
          li1="A feather pen (representing the writing part) which is stirring into a cup of coffee (representing the cafe). Unfortunately we couldn't a clearer way of include books in the logo as well, without it becoming messy. The overall visual is an earthy, elegant yet whimsical design."
          li2="Our two fonts chosen are Zapfino for the words Budding Writers, and Bodoni Book for the tag."
          li3="Here we try and emulate the Zapfino strokes in the design of our logo (such as in the cup handle) to tie the logo and typeface together."
          fontSize="10px"
          src="bw/bwlogoExplained.svg"
        ></TitleNList>
      </div>

      <div className="compCont1CA">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="06 - Style Tiles"
          h5="The Look and Feel"
          p=" Next up was creating a style tile that would give a bit of insight into the look and feel of our website. The colors, typography interactive elements and the types of images that would be used were put together so that the project would have a consitent feel. One aspect that our client (teacher) was very impressed with was our choice in typography.
          "
          src="bw/styletile.png"
        ></TitleNDescCol>
      </div>
      <br></br>
      <H2 margin="200px 0px">Website Layout</H2>
      <div className="compCont1CA">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="07 - Site Map"
          h5="Mapping the Website"
          p=" With the clear design vision and user characteristics and goals as well as our clients goals decided, I proceeded in creating a visual representation of all our information: the site map. This allowed me and my team to keep a clear idea of how and what the website would look like, while keeping in mind our users and client goals.
          "
          src="bw/sitemap.png"
        ></TitleNDescCol>
      </div>
      <div className="compCont1CA">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="08 - Content Inventory"
          h5="The Content Details"
          p="Having built up our plan step by step, here we finally got into the specifics. Here, the details were fleshed out, allowing all team members to keep up to date on what content would go on each page."
          src="bw/contInventory.png"
        ></TitleNDescCol>
      </div>
      <div
        className="animated"
        className="compCont1"
        data-aos="fade-up"
        data-aos-mirror="false"
        data-aos-delay="300"
      >
        <h4>and finally...</h4>
      </div>

      <div
        className="compCont1CA"
        data-aos="fade-up"
        data-aos-mirror="false"
        data-aos-delay="300"
      >
        {" "}
        <h3>09 - Building the Website</h3>
        <div className="compContInnerCA">
          <div className="personasCA">
            <div className="rowCA">
              <Img4 src="bw/implementation.png" />
            </div>
          </div>
        </div>
        <h5>My Contribution</h5>
        <P>
          Due to our many of student deadlines, my team and I split up the work.
          For my part, I focused on the building the landing page, the book
          store page, the book product page and in creation of the menus pages.
        </P>
        <a href="http://buddingwriterst9.altervista.org/" target="_blank">
          <Btn btn="View Live Project"></Btn>
        </a>
      </div>
      <hr></hr>
      <div className="compCont3CA">
        <TitleNDescCol
          flexImg={4}
          maxWidth="700px"
          flexDir="column"
          flex="none"
          flexInfo={2}
          h3="What I learned"
          p="I learned how difficult it can be to modify wordpress templates with css and html. I learned that a good wordpress website with fully functional e-commerce takes time, and that most of the time spent on building a wordpress website is in the planning and research stages. Given more time, i'd tweak the design, fix css issues and make eCommerce fully functional."
          src="bwlogo.svg"
        ></TitleNDescCol>
      </div>
    </div>
  );
}
