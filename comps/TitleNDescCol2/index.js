import React, { useState } from "react";
import styled from "styled-components";

const BigCont = styled.div`
  padding: 0px 50px;
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;

  @media only screen and (max-width: 700px) {
    padding: 0px 0px;
    margin: 0px;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  max-width: 700px;
  gap: 40px;
  text-align: left;
  justify-content: flex-start;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

/*
  @media only screen and (max-width: 700px) {

  }
*/

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  text-align: left;
  flex: ${(props) => (props.flexInfo ? props.flexInfo : "3")};
  justify-content: flex-end;
  @media only screen and (max-width: 700px) {
    padding: 10px;
    width: 100%;
  }
`;

const H3 = styled.h3`
  display: flex;
  text-align: left;
  @media only screen and (max-width: 700px) {
    padding: 0px;
    margin-bottom: 0px;
  }
`;

const P = styled.p`
    max-width: 700px;
  @media only screen and (max-width: 700px) {
    padding: 0px 10px;
  }
`;

const ImgCont = styled.div`
  width: 100%;
  text-align: left;

`;

const TitleNDescCol2 = ({ h3, p, p3, src, flexImg, flexInfo, h5, flex }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont
      className="animated"
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-delay="200"
    >
      <Cont>
        <H3>{h3}</H3>
        <ImgCont flexImg={flexImg} flex={flex}>
          <h5>{h5}</h5>
          <P>{p}</P>
        </ImgCont>
      </Cont>
    </BigCont>
  );
};

export default TitleNDescCol2;
