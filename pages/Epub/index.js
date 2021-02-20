import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";

const Btn = styled.a`
  border: solid 2px black;
  background-color: rgb(0, 0, 0, 0);
  color: black;
  padding: 15px 25px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  :hover {
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
  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
    font-weight: 300;
  }
`;
const P = styled.div`
  font-weight: 400;
  max-width: 700px;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const P2 = styled.p`
  margin-top: 0px;
`;
const Li = styled.li``;

const Epub = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>

      <img className="epubImg" src="/epubImg.png" />
      <div className="epubCont">
        <div className="titleEpub">
          <h3>A Peanut's Adventures</h3>
          <h5>Interactive Epub - A Childrens book</h5>
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

        <div className="info1">
          <div className="epubTasks">
            <h3>Project Task/Requirements</h3>
            <br></br>
            <br></br>
            <P2>
              <b>Interactive Epub Requirements</b>
              <br></br>
              <br></br>
              At least 12-15 articles (pages) with varying content/length
              (depending on interactive elements and scope of
              interaction,animation,etc.) Intuitive navigation between pages,
              content, and states.
              <br></br>
              <br></br>
              <b>What Was Asked For the Project</b>
              <br></br>
              <br></br>
              To design and implement an e-book/e-publication with interactive
              features, such as (but not limited to):
            </P2>
            <Li>audio and videos</Li>
            <Li>buttons and navigation</Li>
            <Li>external links</Li>
            <Li>animation (InDesign / Edge Animate)</Li>
            <Li>hiding and showing content</Li>
            <Li>html5 content (Edge Animate)</Li>
            <Li>html articles</Li>
            <Li>galleries</Li>
            <Li>slideshows</Li>
            <Li>scrollable areas</Li>
            <Li>Interactive branching</Li>
            <Li>and more!</Li>
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
          <P2>
            <h3>Ideation</h3>
            <br></br> <br></br>
            <b>Ideation: The Story of the Original Peanut</b>
            <br></br> <br></br>
            My EPUB project was inspired by a true story. At the beginning of
            the year in the month of september, my younger sister got herself a
            pet hamster. On the first day she brought her hamster, that she
            named Peanut, home, Peanut almost escaped. She'd opened the the cage
            for just a second, and peanut took the chance to escape. She ran
            extremely quickly, and before we knew it, she'd fit herself into a
            small hole that led inside of the fireplace. We all started
            immediately freaking out.
            <br></br>
            <br></br>
            After a bit of panic, we pulled off a metal piece that was closing
            off the fire place and after taking a look inside and saw her at the
            very back, next to a different hole that led who knew where. She
            seemed very scared, so going in, we knew we had one chance to grab
            her. So we led her closer to us with a trail of food, then when the
            moment was right, we grabbed her!
            <br></br>
            <br></br>
            <b>Bringing the Scene to Life: a Children's Book</b> <br></br>
            <br></br>
            That scene stuck with me, and when I was thinking about ideas for
            this project, I thought about this scene. This led to me fleshing
            out idea of, what if Peanut actually did escape? If she hadn't died,
            what would be her life outside? As I was aiming to do a children's
            book, these wild imaginations seemed like an interesting idea. So, I
            turned these thoughts into a concrete idea. I knew it would work
            well, as many children have hamsters as their first pet. If they
            were to play my game, they could sympathize and have fun while
            helping Peanut in her outside adventures.
          </P2>
        </div>
        <div className="chara">
          <div className="epubRowChara">
            <div className="charaCont">
              <h3>The Characters:</h3>
              <br></br>
              <h5> Hero and Villain</h5>
              <br></br>
              <img className="charaImg" src="/charas.png" />
            </div>
            <br></br> <br></br> <br></br>
            <div className="charaCont1">
              <h4>The Cats</h4>
              <div className="charaRow">
                <img className="charaImg2" src="/cats.jpeg" />

                <p className="p">
                  Based on the real life cats of my older sister. They're unamed
                  in the book but in real life go by Boo and Harley; two strays
                  with a scarred past that were adopted later in their life.
                </p>
              </div>
            </div>
          </div>
          <br></br> <br></br> <br></br> <br></br>
          <div className="epubRowChara1">
            <h4>Hamster Peanut</h4>
            <div className="charaRow">
              <img className="charaImg2" src="/peanut.png" />
              <div className="p">
            
                <p>
                  Based on the real life hamster Peanut, bought from a local
                  small pet store at a young age by my younger sister.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Epub;
