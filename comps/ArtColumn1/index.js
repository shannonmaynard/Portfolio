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

const ArtColumn1 = () => {
  return (
    <ImgGallery>
      <div id="1col1">
        <Responsive>
          <Img src="Art2/1col1.png"></Img>
        </Responsive>
      </div>
      <div id="1col2">
        <Responsive>
          <Img src="./Art2/1col2.png"></Img>
        </Responsive>
      </div>
      <div id="1col3">
        <Responsive>
          <Img src="./Art2/1col3.png"></Img>
        </Responsive>
      </div>
      <div id="1col4">
        <Responsive>
          <Img src="./Art2/1col4.png"></Img>
        </Responsive>
      </div>
    </ImgGallery>
  );
};

ArtColumn1.defaultProps = {};

export default ArtColumn1;
