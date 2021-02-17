import React, { useState } from "react";
import styled from "styled-components";

const BigCont = styled.div`
    padding: 0px 50px;
    

    @media only screen and (max-width: 700px) {
            padding: 0px 0px;
       }
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
  max-width: 700px;
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
width: 100%;
max-width: 900px;
justify-content: center;
align-items: center;
  display: ${(props) => (props.flex ? props.flex : "flex")};
  flex: ${(props) => (props.flexImg ? props.flexImg : "4")};
`;

const TitleNDescCol = ({ h3, p, p3, src, flexImg, flexInfo, h5, flex, maxWidth }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont className="animated"data-aos="fade-up" data-aos-mirror="true" data-aos-delay="200" maxWidth={maxWidth}>
      <H3>{h3}</H3>
   
      <Cont>
        <ImgCont flexImg={flexImg} flex={flex}>
          <Img src={src}></Img>
        </ImgCont>
        <Info flexInfo={flexInfo}>
         <h5>{h5}</h5>
          <P>{p}</P>

          <P>{p3}</P>
        </Info>
      </Cont>
    </BigCont>
  );
};


export default TitleNDescCol;
