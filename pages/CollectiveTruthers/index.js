import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import BtnBlack from "../../comps/BtnBlack";
import Footer from "../../comps/Footer";
import Btn from "../../comps/Btn";

const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  margin: 0px;
  margin-top: 100px;
  padding: 0px;
`;
const P = styled.p`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  text-align: center;
  text-align-last: center;
`;
const A = styled.a`
  font-size: 20px;
  font-weight: 400;
  padding: 20px;
  border: solid 1px black;
  :hover {
  }
`;
const H4 = styled.h4`
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;
const H42 = styled.h4`
  margin-bottom: 10px;
  margin-block-start: 0px !important;
  margin-block-end: 0px !important;
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;
const Img = styled.img`
  max-width: 600px;
  height: auto;
  width: 100%;
  border-radius: 15px;
  box-shadow: 1px 1px 10px rgba(200,200,200, 0.5);
`;
const Div4 = styled.div`
  width: 100%;
  justify-content: space-between;

`;
const Divlinks = styled.div`
  height: auto;
  padding: 0px;
`;
const LinksCont = styled.div`
  padding: 100px 0px;
  background: rgba(245, 250, 249, 1) 100%;
  width: 100%;
`;

const Div3 = styled.p`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;
const Div = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  text-align-last: center;
  align-items: center;
  flex-direction: column;
  background: rgba(245, 250, 249, .5) 100%;
`;
const Div2 = styled.div`
  max-width: 700px;
  text-align: left;
  padding: 100px 0px;
  font-weight: 400;
  justify-content: center;
`;
const Img1 = styled.img`
  height: auto;
  box-shadow: 1px 1px 15px rgb(50, 50, 100, 0.1);
  border-radius: 30px;
  margin: 20px;
  max-width: 200px;
  width: 100vw;
`;
const Li = styled.li`
  font-weight: 300;
  font-size: 16px;
`;

const Link = styled.a`
  color: #1c344b;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  margin-bottom: 20px;

  :hover {
    color: black;
    font-weight: 400;
  }
`;
const HR = styled.hr`
  max-width: 150px;
  border: 1px solid black;
`;
const CollectiveTruthers = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>
      <div id="menu"></div>

      <div className="epubCont">
        <div className="titleEpub">
          <H2>COLLECTIVE TRUTHERS</H2>
          <h5>WordPress website redesign and branding</h5>
        </div>
        <Div>
          <Div2>
            <h4>About the Project</h4>
            <Img1 src="/collectiveTruthersW.png" className="epubImg2"></Img1>
            <br></br>
            <P>
              Collective Truthers is a small book publishing company that
              targets first-time authors that have experienced something
              incredible and desire to share their story with the world. My task
              was to redesign the Collective Truthers website and create a new
              and fully responsive version on WordPress. I worked with a partner
              and first figured out clients wants and needs. From there, we
              researched our target audience and competition, and proceeded to
              create a brand image that fit with both our client and target
              audience. The design style also had to work with the design of
              their affiliated website truthtellerspublishing. In addition to
              design, I also had to reorganize the content of the old website to
              create a better information architecture flow.
            </P>
            <a href="https://collectivetruthers.com/" target="_blank">
              <Btn btn="View Live Project"></Btn>
            </a>
          </Div2>
        </Div>
        <br></br>
        <Div3>
          <Div2>
            <h4>Project Deliverables</h4>
            <ol>
              <Li>Client Survey</Li>
              <Li>User Research and Competitive Analysis</Li>
              <Li>Logo Design</Li>
              <Li>Persona Creation</Li>
              <Li>Mood Board</Li>
              <Li>Style Guide</Li>
              <Li>Author Pictures Photoshop Editing</Li>
              <Li>Sitemap</Li>
              <Li>WordPress Website Creation</Li>
            </ol>
          </Div2>
        </Div3>

        <br></br>
        <LinksCont>
          <Divlinks>
            <H42>Persona</H42>
            <HR></HR>
            <Link
              target="_blank"
              href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=3%3A6"
            >
              View Persona
            </Link>
          </Divlinks>
          <br></br>
          <br></br>
          <Divlinks>
            <H4>Mood Board</H4>

            <Img src="/CT/mood-board.png" />
          </Divlinks>
          <br></br>
          <br></br>
          <Divlinks>
            <H4>Style Guide</H4>
            <HR></HR>
            <Link
              target="_blank"
              href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=18%3A2"
            >
              View Style Guide
            </Link>
          </Divlinks>
          <br></br>
          <br></br>
          <Divlinks>
            <H4>Sitemap</H4>
            <HR></HR>
            <Link
              target="_blank"
              href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=87%3A147"
            >
              View Sitemap
            </Link>
          </Divlinks>
          <br></br>
          <br></br>
          <Divlinks>
            <H4>Low Fidelity</H4>
            <HR></HR>
            <Link
              target="_blank"
              href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=92%3A182"
            >
              View Low Fidelity
            </Link>
          </Divlinks>
        </LinksCont>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Div4>
          <BtnBlack href="/BuddingWriters" hrefPrev="/CommAid" />
        </Div4>
        <Footer />
      </div>
    </div>
  );
};

export default CollectiveTruthers;
