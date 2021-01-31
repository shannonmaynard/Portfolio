import React, { useState } from "react";
import styled from "styled-components";

const Container1 = styled.div`
  display: flex;
  padding-top:120px;
  padding-bottom: 120px;
  margin: 20px;
  max-height: 60vw;
  color: #8A8A86;
  //opacity: 80%;
  position: relative;
  align-items: center;
  justify-content:center;
  width: 100%;
  background-color: #EAEFF9;
  :hover{
    opacity:100%;
  }
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin: 0% 15%;
  gap: 7%;
  
`;
const RightCont = styled.div`
   display: flex;
   width: 60%;
`;

const Imgs = styled.img`
  display: flex;
  width: 35vw;
  height: auto;
  justify-content: flex-end;

`;
const LeftCont = styled.div`
  display: flex;
  width: 40%;
  align-items: center;

`;
const WordsCont = styled.div`
width: 100%;
`;
const Header1 = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #444444;
  font-family: 'Poppins', sans-serif;
  `;

const ContainerHover = styled.div`
 //  background-color: rgba(255, 255, 255, 0.609);
position: absolute;
height: 100%;
width: 100%;
z-index:3;
:hover{
 // background-color: rgba(255, 255, 255, 0);
}`;

const Desc = styled.p`
     font-family: 'Poppins', sans-serif;
`;
const Link = styled.p``;



const Slideshow2 = ({ src, title, desc, link, bgcolor }) => {
  return (
<Container1>
      <ContainerHover></ContainerHover>
      <Container2>
        <LeftCont>
          <WordsCont>
            <Header1>{title}</Header1>
            <Desc>
              {desc}
            </Desc>
            <Link>
              <i>{link}</i>
            </Link>
          </WordsCont>
        </LeftCont>
        <RightCont>
          <Imgs src={src}></Imgs>
        </RightCont>
      </Container2>
    </Container1>

  );
};

Slideshow2.defaultProps = {
  src: "",
  desc: "",
  link: "",
  title: "", 
  bgcolor: "#F2F2F2"
};
export default Slideshow2;
