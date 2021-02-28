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
  min-width: 300px;
  @media only screen and (max-width: 700px) {
    padding: 0px 0px;
  }
`;

const P2 = styled.p`
  max-width: 700px;
  @media only screen and (max-width: 700px) {
    padding: 0px 0px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  background-color: white;
 
`;
const ImgContMobile = styled.div`
  width: 100%;
  max-width: 700px;
  display: none;
  justify-content: flex-start;
  align-items: center;
  display: ${(props) => (props.flex ? props.flex : "none")};
  flex: ${(props) => (props.flexImg ? props.flexImg : "4")};
  @media only screen and (max-width: 700px) {
    margin-right: 0px;
    margin-bottom: 30px;
    display: flex;
  }
`;
const ImgContDesk = styled.div`
  width: 100%;
  max-width: 700px;
  justify-content: flex-start;
  align-items: center;
  display: ${(props) => (props.flex ? props.flex : "flex")};
  flex: ${(props) => (props.flexImg ? props.flexImg : "4")};
  margin-left: 30px;
  @media only screen and (max-width: 700px) {
    margin-right: 0px;
    margin-bottom: 30px;
    display: none;
  }
`;
const H5 = styled.h5`
  padding: 15px;
  border: 2px solid black;
  width: fit-content;
  font-weight: 400;
  margin-top: 0px;
  display: ${(props) => (props.flexLink ? props.flexLink : "none")};
  :hover {
    color: white;
    background-color: black;
    font-weight: 300;
    border: 2px solid black;
  }
`;
const H5Small = styled.h5`
  margin-top: 0px;
`;

const ImgDescBelowSide = ({
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
  flexLink,
  href,
  p4,
  p4Title,
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
        <Info flexInfo={flexInfo}>
          <H3Desk>{h3}</H3Desk>
          <H5Small>{h5}</H5Small>
          <P>{p}</P>
          <br></br>
          <a href={href} target="_blank">
            <H5 flexLink={flexLink}>{viewProject}</H5>
          </a>
          <P2>{p3}</P2>
          <ImgContMobile flexImg={flexImg} flex={flex}>
            <Img src={src}></Img>
          </ImgContMobile>
          <p>
            <b>{p4Title}</b>
          </p>

          <P2>{p4}</P2>
        </Info>
        <ImgContDesk flexImg={flexImg} flex={flex}>
            <Img src={src}></Img>
          </ImgContDesk>
      </Cont>
    </BigCont>
  );
};

export default ImgDescBelowSide;
