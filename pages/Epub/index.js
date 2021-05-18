import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import BtnBlack from "../../comps/BtnBlack";
import Footer from "../../comps/Footer";

const Btn = styled.a`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: 300;
  }
`;

const Btn2 = styled.a`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px 15px;
  border-left: 1px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: 300;
  }
`;
const H2 = styled.h2`
  background: rgb(184, 194, 224);
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

const Li = styled.li``;

const Epub = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>
      <div id="menu"></div>
      <img className="epubImg" src="/peanutBanner.png" />
      <div className="epubCont">
        <div className="titleEpub">
          <h3>A Peanut's Adventures</h3>
          <h5>Interactive Epub - A Childrens book</h5>
        </div>
        <div className="gifCont">
          <img src="/game.gif" className="epubImg2"></img>
        </div>
        <div className="viewEpub">
          <p>
            Please take note that this was built in Indesign and audio has weird
            glitches when played online.
            <b> For viewing online, I recommend using Chrome.</b> For the{" "}
            <b>best experience</b>, you can <b>download</b> the file below,
            though you should be aware of its size of over <b>200MB.</b>
          </p>
          <br></br>
          <br></br>
          <div className="contLinks">
            <Btn
              href="https://indd.adobe.com/view/28d31d63-53c3-4a49-ab69-1aa7379a1ca7"
              target="_blank"
            >
              <a className="btn">View Epub Online</a>
            </Btn>
            <br></br> <br></br> <br></br>
            <Btn2
              href="https://drive.google.com/file/d/1xktBsIBLpbr7hmPH9x1hUEUYLH8DUuyc/view?usp=sharing"
              target="_blank"
            >
              <a className="btn">Download Epub Link</a>
            </Btn2>
          </div>
        </div>
        <H2>Project Details</H2>
        <div className="info1">
          <div className="epubTasks">
            <h3 id="h3Tasks">Project Task/Requirements</h3>
            <p>
              <br></br>
              <br></br>
              <b>Interactive Epub Requirements</b>
              <br></br>
              <br></br>
              At least 12-15 articles (pages) with varying content (depending on
              interactive elements and scope of interaction,animation,etc.)
              Intuitive navigation between pages, content, and states.
              <br></br>
              <br></br>
              <b>What Was Asked For the Project</b>
              <br></br>
              <br></br>
              To design and implement an e-book/e-publication with interactive
              features, such as (but not limited to):
            </p>
            <Li>audio and videos</Li>
            <Li>buttons and navigation</Li>
            <Li>external links</Li>
            <Li>animation (InDesign / Edge Animate)</Li>
            <Li>hiding and showing content</Li>
            <Li>html5 content (Edge Animate)</Li>
            <Li>html articles</Li>
            <Li>galleries</Li>
            <Li>slideshows</Li>

            <br></br>
            <br></br>
            <b>Plot</b>
            <p>
              A childrens game/story about a hamster named Peanut that longs for
              freedom, so she escapes. The players job is to protect her when
              she reaches the outside world and get her home safely.
            </p>
          </div>
        </div>

        <div className="info2">
          <div>
            <p>
              <h3>Ideation</h3>
              <br></br> <br></br>
              <b>Ideation: The Story of the Original Peanut</b>
              <br></br> <br></br>
              My EPUB project was inspired by a true story. At the beginning of
              the year in the month of september, my younger sister got herself
              a pet hamster. On the first day she brought her hamster, that she
              named Peanut, home, Peanut almost escaped. She'd opened the the
              cage for just a second, and peanut took the chance to escape. She
              ran extremely quickly, and before we knew it, she'd fit herself
              into a small hole that led inside of the fireplace. We all started
              immediately freaking out.
              <br></br>
              <br></br>
              After a bit of panic, we pulled off a metal piece that was closing
              off the fire place and after taking a look inside and saw her at
              the very back, next to a different hole that led who knew where.
              She seemed very scared, so going in, we knew we had one chance to
              grab her. So we led her closer to us with a trail of food, then
              when the moment was right, we grabbed her!
              <br></br>
              <br></br>
              <b>Bringing the Scene to Life: a Children's Book</b> <br></br>
              <br></br>
              That scene stuck with me, and when I was thinking about ideas for
              this project, I thought about this scene. This led to me fleshing
              out idea of, what if Peanut actually did escape? If she hadn't
              died, what would be her life outside? As I was aiming to do a
              children's book, these wild imaginations seemed like an
              interesting idea. So, I turned these thoughts into a concrete
              idea. I knew it would work well, as many children have hamsters as
              their first pet. If they were to play my game, they could
              sympathize and have fun while helping Peanut in her outside
              adventures.
            </p>
          </div>
        </div>
        <div className="chara">
          <div className="charaCont">
            <h3>The Characters:</h3>
           
            <div className="charaImgCont">
              <div className="h4Vs">
                <h4>Peanut</h4> <h3>Vs</h3> <h4>The Neighbourhood Cats</h4>
              </div>
   
              
              <img className="charaImg" src="/charas.png" />
            </div>
          </div>
          <br></br> <br></br> <br></br>
        </div>

        <div className="chara"></div>
      </div>

      <div className="charaBigCont">
        <div className="charaCont1">
          <h4 className="charaMobileH4">The Cats</h4>
          <div className="charaRow">
            <img className="charaImg2" src="/cats.jpeg" />
            <div className="epubInfo">
              <h4 className="charaDeskH4">The Cats</h4>
              <p className="p">
                Based on the real life cats of my older sister. They're unamed
                in the book but in real life go by Boo and Harley; two strays
                with a scarred past that were adopted later in their life.
              </p>
            </div>
          </div>
          <br></br> <br></br> <br></br>
          <div className="charaCont1">
            <h4 className="charaMobileH4">Hamster Peanut</h4>
            <div className="charaRow">
              <img className="charaImg2" src="/peanut.png" />
              <div className="epubInfo">
                <h4 className="charaDeskH4">Hamster Peanut</h4>
                <p className="p">
                  Based on the real life hamster Peanut, who my younger sister
                  bought from a small local pet store. Peanut is young in age,
                  yet adventurous in spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <H2>Design Process</H2>
      <div className="charaBigCont2">
        <div className="charaCont1">
          <div className="charaRow">
            <div className="epubInfo">
              <h4 className="charaDeskH4-2">Step 1: Looking for Inspiration</h4>
              <p className="p">
                My first step wasn’t to write out the script, but to look for
                free images to use. I did this because the images I browsed
                through each gave me different ideas about the direction of the
                story. Though I had a general idea of what I wanted to do (have
                the user help peanut out in different scenarios throughout the
                game) I wasn’t sure of the specifics.
                <br></br>
                <br></br>
                One thing I did know was that I wanted my scenarios to be in
                nature, as hamsters are wild creatures so nature is their
                natural habitat.
                <br></br>
                <br></br>
                As I continued looking, and came across various nature images, a
                story was slowly put together.
              </p>
            </div>
          </div>
        </div>
        <div className="charaBigCont2">
          <div className="charaCont1">
            <div className="charaRow2">
              <div className="epubInfo">
                <h4 className="charaDeskH4-2">Step 2: Taking pictures</h4>
                <p className="p">
                  As my design would be based off of real characters (peanut and
                  the cats) I wanted to use images of them. Though I had quite a
                  few already, it still wasn’t enough for the amount of poses I
                  needed from them. So, I proceeded to conduct multiple
                  photoshoots of both Peanut and the cats, to get what I needed.
                  <br></br>
                  <br></br>
                  One thing I did know was that I wanted my scenarios to be in
                  nature, as hamsters are wild creatures so nature is their
                  natural habitat.
                </p>
              </div>
            </div>
          </div>
        </div>
   
        <div className="charaCont1">
          <div className="charaRow">
            <div className="epubInfo">
              <h4 className="charaMobileH4-2">Step 3: Writing the Story</h4>
              <img className="umbrella" src="/umbrella.gif" />
              <p className="p">
                After gathering a lot of images, I had some ideas on the
                direction I wanted to take. I first started to jot down my ideas
                as they came into existence on a piece of paper. I wanted to
                show the beginning of peanut, even before we brought her home
                from the store.
                <br></br> <br></br>
                So, I thought about how she was born, to how she began her life
                with us, to her escape and finally, her experience in the
                outside world. For this, I wanted to let the user get involved
                with helping her when she was outside.
                <br></br> <br></br>I also thought about how every great story
                needs a villain, and who better then Peanut’s natural enemies:
                my older sisters cats! After Jotting down these ideas, I made a
                script that I matched with the images I planned on using.
              </p>
            </div>
          </div>

          <div className="charaBigCont2" id="step4Indesign">
            <div className="charaCont1">
              <div className="charaRow2">
                <div className="epubInfo" id="step4InfoDiv">
                  <h4 className="charaDeskH4-2">Step 4: Starting Indesign</h4>
                  <p className="p">
                    After creating the scenes on photoshop, I started putting
                    things together on indesign. As I started creating
                    animations with the images, there were constant adjustments
                    needed from my images for the scenes to work. Getting the
                    animations just right with only indesign was very tricky, as
                    there were constant glitches with the software, the more
                    that the story developed.
                    <br></br>
                    <br></br>
                    As the project progressed, I started creating more complex
                    animations, added audio to all pages, much of which I put
                    together on Adobe Audition. This stage took the longest, and
                    is still an ongoing process. specifics.
                  </p>

                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h4 className="last">
                    Finally, I published it online through Indesign
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BtnBlack href="CommAid" displayPrev="none"></BtnBlack>
      <Footer />
    </div>
  );
};

export default Epub;
