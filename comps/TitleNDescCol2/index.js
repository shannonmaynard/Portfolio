import React, { useState } from "react";
import styled from "styled-components";

const BigCont = styled.div`
  padding: 0px 50px;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;

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
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flexInfo ? props.flexInfo : "3")};
  justify-content: flex-end;
  @media only screen and (max-width: 700px) {
    padding: 10px;
    width: 100%;
  }
`;

const H3 = styled.h3`
  display: flex;

  @media only screen and (max-width: 700px) {
    padding: 20px;
    margin-bottom: 0px;
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
  height: auto;
  padding: 25px;
  border: solid 1px rgb(230, 230, 230);
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 40px;
  }
`;
const ImgCont = styled.div`
  display: flex;
  flex: ${(props) => (props.flexImg ? props.flexImg : "4")};
`;

const TitleNDescCol2 = ({ h3, p, p3, src, flexImg, flexInfo, h5 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont className="animated"data-aos="fade-up" data-aos-mirror="true" data-aos-delay="200">
      <H3>{h3}</H3> <h5>{h5}</h5>
      <P>{p}</P>
      <br></br> <br></br>
      <Cont>
        <ImgCont flexImg={flexImg}>
          <Img src={src}></Img>
        </ImgCont>
        <Info flexInfo={flexInfo}></Info>
      </Cont>
    </BigCont>
  );
};

TitleNDescCol2.defaultProps = {
  h3: "Project Title",
  p:
    "The project was for a fake client our design teacher made up that owned a start up business offering a unique mix of cafe and lunch services with a large collection of second hand novels and literature. Budding writers cafe bookstore, a bookstore cafe in the heart of Vancouver, provides a safe haven to (budding) writers of all backgrounds to relax, converse, read and write with like minded souls.The overall look and feel is grass-roots yet well organized and should feel comfortable to users.",
  src: "",
};

export default TitleNDescCol2;
