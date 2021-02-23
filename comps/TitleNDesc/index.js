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
  padding: 0px 20px;
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
  display: none;

  @media only screen and (max-width: 700px) {
    display: flex;
    padding: 30px;
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
  width: 80%;
  height: 80%;
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 30px;
  }
`;
const ImgCont = styled.div`
  display: flex;
  flex: ${(props) => (props.flexImg ? props.flexImg : "2.5")};
`;

const TitleNDesc = ({ h3, p, p3, src, flexImg, flexInfo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="animated" data-aos="fade-up" data-aos-mirror="true" data-aos-delay="200">
      <H3>{h3}</H3>
      <Cont>
        <ImgCont flexImg={flexImg}>
          <Img src={src}></Img>
        </ImgCont>
        <Info flexInfo={flexInfo}>
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

};

export default TitleNDesc;
