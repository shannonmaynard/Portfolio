import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImgGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 103%;
  align-items: center;
  justify-content: center;
`;

const Responsive = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
`;

const ArtColumn2 = () => {
  return (
    <ImgGallery>
      <div id="2col1">
        <Responsive>
          <Img src="Art2/2col1.png"></Img>
        </Responsive>
      </div>
      <div id="2col2">
        <Responsive>
          <Img src="./Art2/2col2.png"></Img>
        </Responsive>
      </div>
      <div id="2col3">
        <Responsive>
          <Img src="./Art2/2col3.png"></Img>
        </Responsive>
      </div>
      <div id="2col4">
        <Responsive>
          <Img src="./Art2/2col4.png"></Img>
        </Responsive>
      </div>
      <div id="2col5">
        <Responsive>
          <Img src="./Art2/2col5.png"></Img>
        </Responsive>
      </div>
      <div id="2col6">
        <Responsive>
          <Img src="./Art2/2col6.png"></Img>
        </Responsive>
      </div>
    </ImgGallery>
  );
};

ArtColumn2.defaultProps = {};

export default ArtColumn2;
