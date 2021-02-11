import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

/*
  @media only screen and (max-width: 700px) {

  }
*/

const Info = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  flex:3;
  justify-content: flex-end;
  @media only screen and (max-width: 700px) {
    padding: 10px;
    width: 100%;
  }
`;

const H3 = styled.h3`
  display: none;

  @media only screen and (max-width: 700px) {
    display: flex;
    padding: 20px;
    margin-bottom: 0px;
  }
`;

const H3Big = styled.h3`
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const P = styled.p`
  max-width: 700px;
  @media only screen and (max-width: 700px) {
    padding: 0px 10px;
  }
`;

const Img = styled.img`
 width: 100%;
 height: 100%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
const ImgCont = styled.div`
  display: flex;
  flex:2.5;
`;

const TitleNDesc = ({ h3, p, p2, p3, keyH3, src, li1, li2, li3 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <H3>{h3}</H3>
      <Cont>
        <ImgCont>
          <Img src={src}></Img>
        </ImgCont>
        <Info>
          <H3Big>{h3}</H3Big>
          <P>{p}</P>
     
          <P>{p3}</P>
        </Info>
      </Cont>
    </div>
  );
};

TitleNDesc.defaultProps = {
  h3: "Project Title",
  p:
    "The project was for a fake client our design teacher made up that owned a start up business offering a unique mix of cafe and lunch services with a large collection of second hand novels and literature. Budding writers cafe bookstore, a bookstore cafe in the heart of Vancouver, provides a safe haven to (budding) writers of all backgrounds to relax, converse, read and write with like minded souls.The overall look and feel is grass-roots yet well organized and should feel comfortable to users.",
  src: "",
};

export default TitleNDesc;
