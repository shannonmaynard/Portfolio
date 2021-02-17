import React, { useState } from "react";
import Categories from "../../comps/Categories";
import styled from "styled-components";
import TitleNDesc from "../../comps/TitleNDesc";
import TitleNList from "../../comps/TitleNList";
import KeyFindings from "../../comps/Key";
import Btn from "../../comps/Btn";
import TitleNDescCol from "../../comps/TitleNDescCol";
import TitleNDescCol2 from "../../comps/TitleNDescCol2";

const H5 = styled.div`
  background-color: #353535;
  color: white;
  width: 100%;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  text-align: center;
`;
const Img = styled.img`
  width: 22.5vw;
  max-width: 400px;
  height: auto;
  border: solid 1px rgb(230, 230, 230);
  @media only screen and (max-width: 700px) {
    width: 45vw;
  }
`;


const Img2 = styled.img`
  width: 100%;
`;
const Img4 = styled.img`
  width: 100%;
  max-width: 1200px;
`;

const Menu = styled.div`
  background-color: black;
  width: 100%;
  height: 183px;

  @media only screen and (max-width: 700px) {
    height: 134px;
  }
`;

const H2 = styled.h2`
  background: #222222;
  color: #ddb575;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 65px;
  margin: ${(props) => (props.margin ? props.margin : "0px ")};
`;

export default function Home({ margin }) {
  return (
    <div className="contentsBW">
      <Categories></Categories>
      <Menu></Menu>
      <Img2 src="/BWComputer.png" />
      <div className="projTitle">
        <h1>Budding Writers</h1>
        <h5>Cafe Bookstore</h5>
        <h6>Wordpress website - 2020</h6>
      </div>
      <H2>Project Overview</H2>
      <div className="rows">
        <div className="row1">
          <h3>Project Scenario</h3>
          <p>
            The project was for a fake client our design teacher made up that
            owned a start up business offering a unique mix of cafe and lunch
            services with a large collection of second hand novels and
            literature. Budding writers cafe bookstore, a bookstore cafe in the
            heart of Vancouver, provides a safe haven to (budding) writers of
            all backgrounds to relax, converse, read and write with like minded
            souls.The overall look and feel is grass-roots yet well organized
            and should feel comfortable to users.
          </p>
        </div>
        <div className="row2">
          <h4>Roles</h4>
          <h5>My Role</h5>
          <p>
            User research, brainstorming, branding, and creation of Wordpress
            website with css custom modifications.
          </p>
          <br></br>
          <h5>Project Team</h5>
          <p>Luana Teixiera - UX/UI</p>
          <p>Pooneh Ashja - UX/UI</p>
          <a href="/http://buddingwriterst9.altervista.org/">
            <Btn btn="View Live Project"></Btn>
          </a>
        </div>
      </div>
      <div className="deliverables" >
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
      <H2>
        <b>The User Experience</b>
        Research
        <br></br>
      </H2>
      <div className="compCont1">
        <TitleNDesc
          h3="01 - User survey"
          p="The first step we took after meeting our Budding Writers client was to have them to fill out a survey we made. This was to get a general idea of their wants and needs for the project as well as key features to include.All of this let us build a picture of the website in our minds of a grassroots user-friendly website."
          src="bw/survey.png"
          keyH3="Key Findings"
          keyP="Website and branding should be grassroots with a sense of community. 
        Organized for a friendly user experience."
        ></TitleNDesc>
      </div>
      <div className="compCont2">
        <TitleNDesc
          h3="02 - Competitive Analysis"
          p="Now that we knew what our client wanted, we started taking a look at what other companies of a similar nature were doing to discover Strenghts, Weaknesses, Opportunities and Threats."
          p3="Through this, we discovered the Budding Writers strengths and what we could take and improve from our competitors.
        "
          src="bw/swot.png"
        ></TitleNDesc>
      </div>
      <div className="key">
        <KeyFindings
          li1="Strengths: strong community, loyal customers."
          li2="Opportunity: no bookstore's in area with modern website"
          li3="Competition Takeaway: Indigo user-friendly online bookstore joined with grassroots feel for rest of website."
        ></KeyFindings>
      </div>
      <div className="compCont1" data-aos="fade-up" data-aos-mirror="false" data-aos-delay="200">
        <h3>03 - User Personas</h3>
        <p>
          We then created a user persona based off of our research to get a
          picture of the two most regular customers would look like. This
          allowed us to find out their likes and dislikes as users.
        </p>
        <br></br>
        <br></br>
        <div className="compContInner">
          <div className="personas">
            <div className="row">
              <Img src="bw/Persona1-2.png" />
              <Img src="bw/Persona1-1.png" />
            </div>
          </div>
          <div className="personas">
            <div className="row">
              <Img src="bw/Persona2-1.png" />
              <Img src="bw/Persona2-2.png" />
            </div>
          </div>
        </div>
      </div>
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
      <br></br>
      <H2 margin="200px 0px">
        Branding
      </H2>
      <div className="compCont2">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flex="none"
          flexInfo={2}
          h3="The Logo"
          h5="First Stage In Branding"
          p="Finally, after we were clear on who are audience was, their goals and our positioning message, we finally started on the design. Our first step: creating a logo. For this, we had to think about how we could represent all three aspects of our clients business: coffee, reading and writing.
          "
          src="bwlogo.svg"
        ></TitleNDescCol>
        <br></br><br></br><br></br><br></br>
        <TitleNList
          p2="Logo Explained"
          b1="1. "
          b2="2. "
          b3="3. "
 
          li1="A feather pen (representing the writing part) which is stirring into a cup of coffee (representing the cafe). Unfortunately we couldn't a clearer way of include books in the logo as well, without it becoming messy. The overall visual is an earthy, elegant yet whimsical design."
          li2="Our two fonts chosen are Zapfino for the words Budding Writers, and Bodoni Book for the tag."
          li3="Here we try and emulate the Zapfino strokes in the design of our logo (such as in the cup handle) to tie the logo and typeface together."
  
          fontSize="10px"
          src="bwlogoExplained.svg"
        ></TitleNList>
      </div>

      <div className="compCont1">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flexInfo={2}
          h3="Style Tiles"
          h5="The Look and Feel"
          p=" Next up was creating a style tile that would give a bit of insight into the look and feel of our website.
          "
          src="bw/styletile.png"
        ></TitleNDescCol>
      </div>
      <br></br>
      <H2 margin="200px 0px">
        Website Layout
      </H2>
      <div className="compCont1" data-aos="fade-up" data-aos-mirror="false" data-aos-delay="200">
        <h3>Building the Website</h3>
        <div className="row">
              <Img4 src="bw/implementation.png" />
            </div>
        <h5>My contribution</h5>
        <p>
        Because of student deadlines, we had to split up the work. For my part, I focused on the landing page, the book store page, and helped with the menus page.
        </p>
        <br></br>
        <br></br>
        <div className="compContInner">
          <div className="personas">
            
          </div>
        </div>
      </div>
      <div className="compCont2">
        <TitleNDescCol
          flexImg={4}
          flexDir="column"
          flex="none"
          flexInfo={2}
          h3="What I learned"
          p="I learned how difficult it can be to modify wordpress templates with css and html. I learned that a good wordpress website with fully functional e-commerce takes time, and that most of the time spent on building a wordpress website is in the planning and research stages. Given more time, i'd tweak the design, fix css issues and make eCommerce fully functional."
        
          
          src="bwlogo.svg"
        ></TitleNDescCol></div>
    </div>
  );
}