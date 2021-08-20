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
  line-height: 50px;
  margin-bottom: 30px;
  @media only screen and (max-width: 700px) {
    font-weight: 300;
  }
`;
const ImgLogo = styled.img`
  max-width: 350px;
  box-shadow: 1px 1px 7px rgb(50, 50, 100, 0.1);
  border-radius: 15px;
  margin-left: 35px;
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

const Div3 = styled.p`
  padding: 20px;
  display: flex;
  margin: 0px;
  justify-content: center;
  width: 100%;
  align-items: center;
  background: linear-gradient(to bottom, #afdfd313, white);
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
  background: linear-gradient(to right, #ECF4F8, white);
  box-shadow: 1px 3px 15px rgb(82, 100, 107, 0.6);
`;
const Div2 = styled.div`
  max-width: 700px;
  text-align: left;
  padding: 100px 0px;
  font-weight: 400;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    text-align-last: left;
  }
`;
const Img1 = styled.img`
  height: auto;
  box-shadow: 1px 1px 15px rgb(50, 50, 100, 0.1);
  border-radius: 30px;
  margin: 20px;
  max-width: 300px;
  width: 100vw;
`;
const Li = styled.li`
  font-weight: 300;
  font-size: 16px;
`;

const H5 = styled.h5`
  display: flex;
  flex-direction: column;
  margin: 0px;
  margin-bottom: 100px;
  padding: 0px;
  font-weight: 300;
`;
const H52 = styled.h5`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  font-weight: 500;
  text-transform: uppercase;
`;
const CollectiveTruthers = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>
      <div id="menu"></div>
      <div className="titleCT">
        <H2>COLLECTIVE TRUTHERS</H2>
        <H5>WordPress website redesign and branding</H5>
      </div>
 
      <Div >
        <Div2>
          <h4>ABOUT THE PROJECT</h4>
          <H52>May 1st - May 31st 2021</H52>
          <br></br> <br></br> <br></br>
          <img src="/CT/ct-run1.gif" className="ct-gif"></img>
          <p>
            Collective Truthers is a small book publishing company that targets
            first-time authors that wish to share their story with the world.
            <strong>
              My task was to redesign the Collective Truthers website{" "}
            </strong>
            and create a new and fully responsive version on WordPress. I worked
            with a partner and first figured out clients wants and needs. From
            there, we researched our target audience and competition, and
            proceeded to create a brand image that fit with both our client and
            target audience.
          </p>
          <br></br> <br></br> 
          <h5 id="down">WEBSITE CURRENTLY DOWN!</h5> <br></br>
          <a href="https://collectivetruthers.com/" target="_blank">
            <Btn btn="View Live Project"></Btn>
          </a>
        </Div2>
      </Div>
      <Div3>
        <Div2>
          <h4>Project Deliverables</h4>
          <ol>
            <Li>Study of Old Website</Li>
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

      <div >
        <div className="Divlinks2">
          <div className="oldwebCont">
            <h4 className="ct-title2"> Old Website</h4>
            <div className="link-text2">
              <h4>Analyzing the Original Website</h4>
              <p>
                The first thing we did was take a thorough inspection of the
                website. We looked where there were repeats of information, what
                should and shouldn't be found on the pages, where all the links
                lead to, as well as inspected page content. We checked through
                everything and questioned if each element really needed to be on
                the page or not. Each problem we came accross, we made note of.
                One of the biggest problems noticed was
                repetition of information across pages.
              </p>
              <img className="ct-img2" src="/CT/oldweb.png" />
            </div>
          </div>
        </div>

        <div className="Divlinks">
          <div className="ct-title1">
            <h4>Survey</h4>
          </div>
          <div className="img-text">
            <div className="link-text">
              <h4>CLIENT NEEDS</h4>
              <p>
                From there we had many meetings with our client. We asked her
                thoughts on what she wanted for her new website as well as had
                her fill out a survey so that we had something in her own
                writing.
              </p>
            </div>
            <img className="ct-img" src="/CT/survey.png" />
          </div>
        </div>

        <div className="Divlinks">
          <div className="ct-title">
            <h4>Persona</h4>
          </div>
          <div className="img-text">
            <div className="link-text">
              <h4>ABOUT THE USER</h4>
              <p>
                After our client filled out the survey we had a better idea of
                what she wanted. Next on our list was to figure out who her
                target audience was as well as their wants and needs. For this,
                we asked her to give us any information she already had while
                also conducting our own research, afterwhich we were able to put
                together a persona of her target audience.
              </p>

              <a
                className="Link"
                target="_blank"
                href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=3%3A6"
              >
                <Btn btn="View Persona Live"></Btn>
              </a>
            </div>
            <img className="ct-img" src="/CT/persona.png" />
          </div>
        </div>
        <div className="Divlinks">
          <div className="ct-title1">
            <h4>Logo</h4>
          </div>
          <div className="img-text">
            <div className="link-text">
              <h4>LOGO EXPLAINED</h4>
              <p>
                I designed this logo to include all 3 of the elements found in
                collective truthers.
              </p>
              <ol>
                <li>Open Book: symbolizes the book publishing aspect. </li>
                <li>
                  Lotus flower/flipped pages: the flipped pages creates a
                  connection to the book and lotus flower. Lotus flower
                  symbolizes spirituality and wisdom (an important aspect to
                  collective truthers brand)
                </li>
                <li>Half Circle: the collective in collective truthers</li>
                <li>
                  Color: aquamarine color, asked for by the client. One of the
                  colors of the chakra
                </li>
              </ol>
            </div>
            <img className="ct-img" src="/collectiveTruthersW.png" />
          </div>
        </div>
        <div className="Divlinks">
          <div className="ct-title1">
            <h4>Mood Board</h4>
          </div>
          <div className="img-text">
            <div className="link-text">
              <h4>THE MOOD DESIGN</h4>
              <p>
                Knowing our audience, and logo, I went ahead and put together a{" "}
                <strong>mood board.</strong> This was to get a basic look and
                feel for the website.
              </p>
            </div>
            <img className="ct-img" src="/CT/mood-board.png" />
          </div>
        </div>

        <div className="Divlinks">
          <div className="ct-title">
            <h4>Style Guide</h4>
          </div>
          <div className="img-text">
            <div className="link-text">
              <h4>DESIGN DIRECTION</h4>
              <p>
                With the previous preparation in place we started putting
                together the style guide. Here, we focused on finding calming
                blue colors for primary and took our accent colors from the
                sister site truthtellerspublishing. This was to have make a
                connection in design between both websites. We also used the
                font, Cormorant Garamond, from logo for our headings. The design
                was to produce a modern, peaceful look.
              </p>

              <a
                className="Link"
                target="_blank"
                href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=18%3A2"
              >
                <Btn btn="View Style Guide Live"></Btn>
              </a>
            </div>
            <img className="ct-img" src="/CT/styleguide.png" />
          </div>
        </div>

        <div className="Divlinks">
          <div className="ct-title1">
            <h4>Sitemap</h4>
          </div>

          <div className="img-text">
            <div className="link-text">
              <h4>MAPPING THE SITE</h4>
              <p>
                This step was crucial before starting the website layout. Due to
                the original website having many problems, such as repitition of
                information, broken links and a general disorganization, we had
                to think carefully on where all the content should be placed.
                Additionally, the client also had additional content she wanted
                in the new site, so creating the information architecture
                required careful planning.
              </p>

              <a
                className="Link"
                target="_blank"
                href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=87%3A147"
              >
                <Btn btn="View Sitemap Live"></Btn>
              </a>
            </div>
            <img className="ct-img" src="/CT/sitemap.png" />
          </div>
        </div>

        <div className="Divlinks">
          <div className="ct-title">
            <h4>Low Fidelity</h4>
          </div>

          <div className="img-text">
            <div className="link-text">
              <h4>ABOUT THE USER</h4>
              <p>
                After our client filled out the survey we had a better idea of
                what she wanted. Next on our list was to figure out who her
                target audience was as well as their wants and needs. For this,
                we asked her to give us any information she already had while
                also conducting our own research.
              </p>

              <a
                className="Link"
                target="_blank"
                href="https://www.figma.com/file/ysfx1E1OHrX3vl3a8JYClH/Web-and-Mobile-mockups?node-id=92%3A182"
              >
                <Btn btn="View Low Fidelity Live"></Btn>
              </a>
            </div>
            <img className="ct-img" src="/CT/low-fidelity.png" />
          </div>
        </div>
      </div>

      <div id="nextPrevCont">
        <a href="/CommAid">
          <button className="nextPrev1">Previous Project</button>
        </a>
        <a href="/BuddingWriters">
          <button className="nextPrev2">Next Project</button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default CollectiveTruthers;
