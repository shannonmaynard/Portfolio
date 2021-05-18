import React, { useState } from "react";
import Categories from "../../comps/Categories";
import styled from "styled-components";
import TitleNDesc from "../../comps/TitleNDesc";
import TitleNList from "../../comps/TitleNList";
import Btn from "../../comps/Btn";
import TitleNDescCol from "../../comps/TitleNDescCol";
import TitleNDescCol2 from "../../comps/TitleNDescCol2";
import BtnBlack from "../../comps/BtnBlack";
import Footer from "../../comps/Footer";
import Up from "../../comps/Up";
import Menu from "../../comps/Menu";


const P = styled.p`
  width: 100%;
  max-width: 800px;
`;

const Img2 = styled.img`
  width: 100%;
  position: relative;
`;
const Img4 = styled.img`
  width: 100%;
  max-width: 900px;

  align-self: flex-start;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    max-width: 350px;
  }
`;



export default function Home({ margin }) {
  return (
    <div className="contentsBW" id="top">
      <Categories></Categories>
      <Menu></Menu>
      <img className="Img2" src="/BWComputer.png" />
      <Up href="#top"/>
      <div className="projTitle">
        <h1>Budding Writers</h1>
        <h5>Cafe Bookstore</h5>
        <h6>Wordpress website - 2020</h6>
      </div>
      <h2 className="h3Step">Project Overview</h2>
      <div className="rowsBW">
        <div className="row1">
          <h3>Project Scenario</h3>
          <p>
            This project was in my first year of studies. Our teacher split up
            the class into teams and assigned us a fake client (which he acted
            as) that we had to build a wordpress website for. Our client owned a
            start up business offering a unique mix of cafe and lunch services
            with a large collection of second hand novels and literature.
            Budding writers cafe bookstore, a bookstore cafe in the heart of
            Vancouver, provides a safe haven to (budding) writers of all
            backgrounds to relax, converse, read and write with like minded
            souls.The overall look and feel is grass-roots yet well organized
            and should feel comfortable to users.
          </p>
        </div>
        <div className="row2">
          <h4>Roles</h4> <br></br>
          <h5>My Role</h5>
          <p>
            All things UX and UI. User research and analysis, brainstorming,
            branding, and creation of Wordpress website with css custom
            modifications.
          </p>
          <br></br>
          <h5>Project Team</h5>
          <p>Luana Teixiera - UX/UI</p>
          <p>Pooneh Ashja - UX/UI</p>
          <a href="http://buddingwriterst9.altervista.org/" target="_blank">
            <Btn btn="View Live Project"></Btn>
          </a>
        </div>
      </div>
      <div className="deliverables">
        <TitleNList
          src="bw/pages.png"
          h3="Website Deliverables"
          p2="Features were to include:"
          b1="1. "
          b2="2. "
          b3="3. "
          b4="4. "
          b5="5. "
          b6="6. "
          li1="Online book shop"
          li2="Updatable event calendar Booking system"
          li3="Updatable lunch menu(s)"
          li4="Landing page"
          li5="About Page"
          li6="Contact Page"
        ></TitleNList>
      </div>
      <h2 className="h3Step">Research</h2>
      <div className="compCont1">
        <TitleNDesc
          h3="01 - User survey"
          p="The first step we took after meeting our client was to have them to fill out a survey we made. This was to get a general idea of their wants and needs for the project. All of this let us build a picture of the website in our minds of a grassroots user-friendly website."
          src="bw/survey.png"
        ></TitleNDesc>
      </div>
      <div className="compCont1">
        <TitleNDesc
          h3="02 - Competitive Analysis"
          p="Now that we knew had a starting idea of what our client wanted, we began looking at what our direct and indirect competitors were doing, to discover Strenghts, Weaknesses, Opportunities and Threats."
          p3="Through this, we discovered what made Budding Writers special, as well as what our competitors were doing for inspiration."
          src="bw/swot.png"
        ></TitleNDesc>
      </div>
      <div className="key">
        <h3>Key Findings</h3>
        <div className="findings">
          <div className="findingsRow">
            <img src="loyalty.png" className="findingsImg1" />
            <p>Strengths: strong community, loyal customers.</p>
          </div>
          <div className="findingsRow">
            <img src="website.png" className="findingsImg2" />
            <p>Opportunity: no bookstore's in area with modern website</p>
          </div>

          <div className="findingsRow">
            <img src="competitors.png" className="findingsImg3" />
            <p>
              Competition Takeaway: Indigo user-friendly online bookstore joined
              with grassroots feel for rest of website.
            </p>
          </div>
        </div>
      </div>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <div className="compCont2">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="03 - User Personas"
          h5="About Our Users"
          p="We then created a user persona based off of our research to get a
          picture of their two most common types of customers. This allowed us
          to find out their likes and dislikes as users."
          src="bw/persona.png"
        ></TitleNDescCol>
      </div>
      <br></br> <br></br>
      <div className="compCont2">
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

    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <h2 className="h3Step">Design</h2>
      <div className="compCont3">
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
          li1="A feather pen (representing the writing part) which is stirring into a cup of coffee (representing the cafe). Unfortunately we couldn't find a clearer way of include books in the logo as well, without it becoming messy. The overall visual is an earthy, elegant yet whimsical design."
          li2="Our two fonts chosen are Zapfino for the words Budding Writers, and Bodoni Book for the tag."
          li3="Here we try and emulate the Zapfino strokes in the design of our logo (such as in the cup handle) to tie the logo and typeface together."
          fontSize="10px"
          src="bw/bwlogoExplained.svg"
        ></TitleNList>
      </div>
      <div className="compCont1">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="06 - Style Tiles"
          h5="The Look and Feel"
          p=" Next up was creating a style tile that would give a bit of insight into the look and feel of our website. The colors, typography, interactive elements and the types of images that would be used were put together so that the project would have a consistent feel. One aspect that our client (teacher) was very impressed with was our choice in typography.
          "
          src="bw/styletile.png"
        ></TitleNDescCol>
      </div>
      <br></br>
      <h2 className="h3Step">Planning</h2>
      <div className="compCont1">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="07 - Site Map"
          h5="Mapping the Website"
          p=" With a clear design vision, understanding of our users characteristics and goals, as well as our clients needs in mind, my team and I proceeded in creating a visual representation of all our information: the site map. This allowed us to understand and keep track of the website layout and flow.
          "
          src="bw/sitemap.png"
        ></TitleNDescCol>
      </div>
      <div className="compCont1">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="08 - Content Inventory"
          h5="The Content Details"
          p="Having built up our plan step by step, here we finally got into the specifics. The details were hashed out, allowing all team members to keep up to date on what content would go on each page."
          src="bw/contInventory.png"
        ></TitleNDescCol>
      </div>
      <div
        className="animated"
        className="compCont1"
        data-aos="fade-up"
        data-aos-mirror="false"
        data-aos-delay="500"
      >
        <h3 className="finally">and finally...</h3>
      </div>
      <br></br>
      <div
        className="compCont1"
        data-aos="fade-up"
        data-aos-mirror="false"
        data-aos-delay="500"
      >
        <h3>09 - Building the Website</h3>
        <div className="compContInner">
          <div className="personas">
            <div className="row">
              <Img4 src="bw/implementation.png" />
            </div>
          </div>
        </div>

        <P>
          <h5>My Contribution</h5>
          Due to our many of student deadlines, my team and I split up the work.
          For my part, I focused on the building the landing page, the book
          store page, the book product page and in creation of the menus pages.
          <br></br>
          <a href="http://buddingwriterst9.altervista.org/" target="_blank">
            <Btn btn="View Live Project"></Btn>
          </a>
        </P>
      </div>
      <hr></hr>
      <div className="compCont4">
        <TitleNDescCol
          flexImg={4}
          maxWidth="700px"
          flexDir="column"
          flex="none"
          flexInfo={2}
          h3="What I Learned"
          p="I learned how difficult it can be to modify wordpress templates with css and html. I learned that a good wordpress website with fully functional e-commerce takes time, and that most of the time spent on building a wordpress website is in the planning and research stages. Given more time, i'd tweak the design, fix css issues and make eCommerce fully functional."
          src="bwlogo.svg"
        ></TitleNDescCol>
      </div>
      <BtnBlack btn="View Next Project" hrefPrev="/CollectiveTruthers" display="none" />
      <Footer />
    </div>
  );
}
