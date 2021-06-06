import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";
import BtnBlack from "../../comps/BtnBlack";
import Footer from "../../comps/Footer";
import Btn from "../../comps/Btn";
import H2 from "../../comps/H2";

const P = styled.p`
  text-align: center;
`;

const Img = styled.img`
  height: auto;
  max-width: 500px;
`;
const GraphicDes = () => {
  return (
    <div className="epubCont">
      <Categories></Categories>
      <div className="titleEpub">
        <br></br> <br></br> <br></br> <br></br>
        <br></br>
        <H2
          h2="GRAPHIC DESIGN WORKS"
          desc="Photoshop and Illustrator Projects"
        />
      </div>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br>
      <br></br> <br></br>
      <div className="graphic-row">
        <div className="text-graphic">
          <h4>PHOTOSHOP PORTRAIT PAINTING</h4>
          <h6>Time Taken: 3 DAYS</h6>
          <p>
            A Photoshop project based on the joker. Based off of a picture as
            reference, I recreated the image entirely with painting brushes. I
            explored using different skin texture brushes and others.
          </p>
        </div>
        <img id="joker" src="/graphics/painting.png" alt="photoshop-painting" />
      </div>
      <div className="graphic-row">
        <div className="text-graphic">
          <h4>ILLUSTRATOR APPPLE WATCH</h4>
          <h6>Time Taken: 1 DAY</h6>
          <p>
            I recreated the apple watch entirely in Illustrator. Explored using
            varios vector shapes and gradients, object blendings, rotation tool
            etc. I also played with a lot with opacity in different areas to
            create the realistic look of the watch.
          </p>
        </div>
        <img src="/graphics/Watch.png" alt="illustrator-watch-design" />
      </div>
      <div className="graphic-row">
        <div className="text-graphic">
          <h4>PHOTOSHOP EVENT POSTER</h4>
          <h6>Time Taken: 1 DAY</h6>
          <p>
            A poster designed in photoshop for an event called the Decentralized
            Dance Party (DDP), which is a free dance event with no central
            location that anyone can join. For this project, I used techniques
            such as masking, color blending, layer styles, painting etc.
          </p>
        </div>
        <img src="/graphics/ddp.png" alt="event-poster" />
      </div>
      <div className="graphic-row">
        <div className="text-graphic">
          <h4>PHOTOSHOP MOVIE POSTER</h4>
          <h6>Time Taken: 1 DAY</h6>
          <p>
            I created a movie poster in photoshop for a fictional movie about a
            fox fairy. I blended 3 animals together to create the fairy
            (butterfly, fox and human) and used masking to create the creature.
            I also used played around with and and made adjustments with through
            color blending modes, color selections, painting, hue and
            saturation, curves etc.{" "}
          </p>
        </div>
        <img src="/graphics/poster.png" alt="movie-poster" />
      </div>
      <div id="nextPrevCont">
        <a href="/BuddingWriters">
          <button className="nextPrev1">Previous Project</button>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GraphicDes;
