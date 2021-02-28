import React, { useState } from "react";
import styled from "styled-components";
import Btn from "../Btn";
const BigCont = styled.div`
  padding: 0px 0px;
  width: fit-content;
  align-items: center;
  @media only screen and (max-width: 700px) {
    padding: 0px 0px;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: 30px;
 
  align-items: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;

/*
  @media only screen and (max-width: 700px) {

  }
*/

const Info = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flexInfo ? props.flexInfo : "3")};
  justify-content: flex-end;
  @media only screen and (max-width: 700px) {
    padding-bottom: 10px;
    width: 100%;
  }
`;

const H3 = styled.h3`
  display: none;
  @media only screen and (max-width: 700px) {
    padding-bottom: 20px;
    margin-bottom: 0px;
    display: flex;
  }
`;
const H3Desk = styled.h3`
  display: flex;
  @media only screen and (max-width: 700px) {
    display: none;
    padding-bottom: 0px;
  }
`;

const P = styled.p`
  max-width: 700px;

  @media only screen and (max-width: 700px) {
    padding: 0px 0px;

  }
`;

const P2 = styled.p`
  max-width: 700px;
  @media only screen and (max-width: 700px) {
    padding: 0px 10px;

  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;

  background-color: white;

  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 0px;
    border: none;
  }
`;
const ImgCont = styled.div`
  width: 100%;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.flex ? props.flex : "flex")};
  flex: ${(props) => (props.flexImg ? props.flexImg : "4")};
  margin-right: 50px;
  @media only screen and (max-width: 700px) {
    margin-right: 0px;
    margin-bottom: 50px;
  }
`;

const H5 = styled.h5`
padding: 15px;
border: 2px solid black;
width: fit-content;
font-weight: 400;
margin-top: 0px;
display: ${(props) => (props.flexLink ? props.flexLink : "none")};
:hover{
  color: white;
  background-color: black;
  font-weight: 300;
  border: 2px solid black;

}
`;
const H5Small = styled.h5`
margin-top: 0px;
`;


const TitleNDescCol = ({
  h3,
  p,
  p3,
  src,
  flexImg,
  flexInfo,
  h5,
  flex,
  maxWidth,
  bgcolor,
  viewProject, 
  flexLink, href
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont
      bgcolor={bgcolor}
      className="animated"
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-delay="200"
      maxWidth={maxWidth}
    >
      <H3>{h3}</H3>
      <Cont>
        <ImgCont flexImg={flexImg} flex={flex}>
          <Img src={src}></Img>
        </ImgCont>
        <Info flexInfo={flexInfo}>
          <H3Desk>{h3}</H3Desk>
          <H5Small>{h5}</H5Small>
          <P>{p}</P>
          <br></br>
          <a href={href} target="_blank"><H5 flexLink={flexLink}>{viewProject}</H5></a>
          <P2>{p3}</P2>
        </Info>
      </Cont>
    </BigCont>
  );
};

export default TitleNDescCol;
