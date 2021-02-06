import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImgGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
`;

const Responsive = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  :hover{
    width: 110%;
    transition: 0.5s;
  }
`;

const ArtColumn3 = () => {
  return (
    <ImgGallery>
      <div id="3col1">
        <Responsive>
          <Img src="Art2/3col1.png"></Img>
        </Responsive>
      </div>
      <div id="3col2">
        <Responsive>
          <Img src="./Art2/3col2.png"></Img>
        </Responsive>
      </div>
      <div id="3col3">
        <Responsive>
          <Img src="./Art2/3col3.png"></Img>
        </Responsive>
      </div>
      <div id="3col4">
        <Responsive>
          <Img src="./Art2/3col4.png"></Img>
        </Responsive>
      </div>
      <div id="3col5">
        <Responsive>
          <Img src="./Art2/3col5.png"></Img>
        </Responsive>
      </div>
      <div id="3col6">
        <Responsive>
          <Img src="./Art2/3col6.png"></Img>
        </Responsive>
      </div>
      <div id="3col7">
        <Responsive>
          <Img src="./Art2/3col7.png"></Img>
        </Responsive>
      </div>
      <div id="3col8">
        <Responsive>
          <Img src="./Art2/3col8.png"></Img>
        </Responsive>
      </div>
      <div id="3col9">
        <Responsive>
          <Img src="./Art2/3col9.png"></Img>
        </Responsive>
      </div>
      <div id="3col10">
        <Responsive>
          <Img src="./Art2/3col10.png"></Img>
        </Responsive>
      </div>
      <div id="3col11">
        <Responsive>
          <Img src="./Art2/3col11.png"></Img>
        </Responsive>
      </div>
    </ImgGallery>
  );
};

ArtColumn3.defaultProps = {};

export default ArtColumn3;
