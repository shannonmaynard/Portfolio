import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 85vw;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

/*
  @media only screen and (max-width: 700px) {

  }
*/
const Img = styled.img`
  flex: 3;
  width: 100%;
  height: auto;
  padding: 25px;
  max-width: 700px;
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 0px;
    margin-top: 0px;
  }
`;
const ImgCont = styled.div`
  width: 100%;
  max-width: 900px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 3;
  max-width: 600px;
  margin-right: 30px;
  
  @media only screen and (max-width: 700px) {
    padding: 0px;
    margin: 0px;
    align-items: center;
    margin-right: 0px;
  margin-bottom: 30px;
  }
`;

const Info = styled.div`
  width: 100%;
  flex: 3;
  flex-direction: column;
  display: flex;
  max-width: 700px;
  @media only screen and (max-width: 700px) {
    padding: 10px;
    align-items: center;
  }
`;

const H3 = styled.h3`
  display: none;
  @media only screen and (max-width: 700px) {
    display: flex;
    padding: 30px;
    text-align: center;
    width: 100%;
    justify-content: center;
  }
`;

const H3Big = styled.h3`
  width: 100%;
  @media only screen and (max-width: 700px) {
    display: none;
    padding: 10px;
  }
`;

const P = styled.p`
  font-weight: 300;
  margin: 0px;
  text-align: left;
  margin-right: 30px;
  @media only screen and (max-width: 700px) {
    padding: 0px;
    margin-right: 0px;
  margin-bottom: 30px;
  }
`;

const BigCont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const H5 = styled.h5`
  font-size: 20px;
`;
const Ol = styled.ol`
  flex-direction: column;
  display: flex;
 
  margin-top: 25px;
  @media only screen and (max-width: 700px) {
    width: 100%;
    padding-left: 0px;

  }
`;

const TitleNList = ({
  h3,
  p,
  p2,
  src,
  fontSize,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
  b1,
  b2,
  b3,
  b4,
  b5,
  b6,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont
      className="animated"
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-delay="200"
    >
      <H3>{h3}</H3>

      <Cont>
        <ImgCont>
          <Img src={src}></Img>
        </ImgCont>
        <Info>
          <H3Big fontSize={fontSize}>{h3}</H3Big>
          <P>
            <h5>{p2}</h5>
            <Ol>
              <P>
                <b>{b1}</b>
                {li1}
              </P>
              <P>
                <b>{b2}</b>
                {li2}
              </P>
              <P>
                <b>{b3}</b>
                {li3}
              </P>
              <P>
                <b>{b4}</b>
                {li4}
              </P>
              <P>
                <b>{b5}</b>
                {li5}
              </P>
              <P>
                <b>{b6}</b>
                {li6}
              </P>
            </Ol>
          </P>
        </Info>
      </Cont>
    </BigCont>
  );
};

TitleNList.defaultProps = {};

export default TitleNList;
