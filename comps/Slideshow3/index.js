import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  flex-direction: row;
  color: #999999;


`;
const Container2 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 50px 0px;
  align-items: center;
  justify-content: center;
  gap: 0px;
`;
const RightCont = styled.div``;

const Imgs = styled.img`
  display: flex;
  width: auto;
  max-width: 28vw;
`;
const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 40%;
  align-items: center;
  justify-content: flex-start;
`;


const WordsCont = styled.div``;

const Header1 = styled.div`
  font-size: 45px;
  font-family: "Poppins", sans-serif;
`;

const Desc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`;
const Link = styled.p`
font-family: "Poppins", sans-serif;
`;

const Slideshow3 = ({ src, desc, title }) => {
  return (
    <Container>
      <Container2>
        <LeftCont>
          <WordsCont>
            <Header1>{title}</Header1>
            <Desc>
              {desc}
            </Desc>
            <Link>
              <i></i>
            </Link>
          </WordsCont>
        </LeftCont>
        <RightCont>
          <Imgs src={src}></Imgs>
        </RightCont>
      </Container2>
    </Container>
  );
};

Slideshow3.defaultProps = {
  src: "Watch.png",
  desc: "Persona created from user research for Budding Writers Bookstore Cafe. These people were our main target audience.",
  title: "Persona"
};

export default Slideshow3;
