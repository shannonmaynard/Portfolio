import React, { useState } from "react";
import Categories from "../../comps/Categories";
import styled from "styled-components";
import TitleNDesc from "../../comps/TitleNDesc";
import TitleNList from "../../comps/TitleNList";
import KeyFindings from "../../comps/Key";
import Btn from "../../comps/Btn";

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

export default function Home() {
  return (
    <div>
      <Categories></Categories>
      <Menu></Menu>
      <Img src="/BWComputer.png" />
      <h2>01 Project Overview</h2>
      <div className="projTitle">
        <h1>Budding Writers</h1>
        <br></br>
        <h5>Cafe Bookstore</h5>
        <h6>Wordpress website - 2020</h6>
      </div>
      <br></br> <br></br> <br></br> <br></br>
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
      <TitleNList
        h3="Website Deliverables"
        p2="Features were to include:"
      ></TitleNList>
      <h2>02 Research and Planning</h2>
      <div className="compCont">
        <TitleNDesc
          h3="User survey"
          p="The first step we took after meeting our Budding Writers client was to have them to fill out a survey we made. This was to get a general idea of their wants and needs for the project as well as key features to include.All of this let us build a picture of the website in our minds of a grassroots user-friendly website."
          src="bw/survey.png"
          keyH3="Key Findings"
          keyP="Website and branding should be grassroots with a sense of community. 
        Organized for a friendly user experience."
        ></TitleNDesc>
      </div>
      <div className="compCont">
        <TitleNDesc
          h3="Competitive Analysis"
          p="Now that we knew what our client wanted, we started taking a look at what other companies of a similar nature were doing to discover Strenghts, Weaknesses, Opportunities and Threats."
          p3="During our research, we discovered the unique points about Budding Writers. Most bookstore cafes didn't have modern websites (or one at all). An exception was the Indigo and Starbucks pairing they didn’t provide the personal feel our clients wanted. Therefore, we attempted to take the best from our competitors and leave the rest, while focusing on BW's strengths.
        "
          src="bw/swot.png"
        ></TitleNDesc>
      </div>
      <KeyFindings
        li1="Strengths: strong community, loyal customers."
        li2="Opportunity: no bookstore's in area with modern website"
        li3="Competition Takeaway: Indigo user-friendly online bookstore joined with grassroots feel for rest of website."
      ></KeyFindings>
      <div className="compCont">
        <h3>User Personas</h3>
        <div className="compContInner">
          <div>
            <H5>Persona 1</H5>
            <div className="row">
              <Img src="bw/Persona1-2.png" />
              <Img src="bw/Persona1-1.png" />
            </div>
          </div>

          

          <div>
            <H5>Persona 2</H5>
            <div className="row">
              <Img src="bw/Persona2-1.png" />
              <Img src="bw/Persona2-2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
