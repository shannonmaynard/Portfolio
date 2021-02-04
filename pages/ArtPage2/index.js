import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";
import ArtColumn1 from "../../comps/ArtColumn1";
import ArtColumn2 from "../../comps/ArtColumn2";
import ArtColumn3 from "../../comps/ArtColumn3";
import Categories from "../../comps/Categories";
import ArtMenu1 from "../../comps/ArtMenu1";

export default function Home() {
  return (
    <div className="artPage2Cont">
      <Categories />
      <br></br>
      <br></br>
      <div className="infoArt">
        Here are some of my favorite pieces that I've made over the years.
      </div>
      <a href="#header">
        <img className="arrowUp" src="/Art/arrowUp.svg"></img>
      </a>
      <div className="ArtCol1">
        <ArtColumn1></ArtColumn1>
      </div>
  
      <div className="ArtCol3">
        <ArtColumn3></ArtColumn3>
      </div>
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}
