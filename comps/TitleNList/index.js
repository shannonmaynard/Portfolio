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
const Img = styled.img`
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 50%;
  padding: 50px;
  @media only screen and (max-width: 700px) {
    padding: 10px;
    width: 100%;
  }
`;

const H3 = styled.h3`
  display: none;
  @media only screen and (max-width: 700px) {
    display: flex;
    padding: 10px;
  }
`;

const H3Big = styled.h3`
  @media only screen and (max-width: 700px) {
    display: none;
    padding: 10px;
  }
`;

const P = styled.p`
  max-width: 700px;
  font-weight: 300;
  margin: 0px;
  text-align: left;
  @media only screen and (max-width: 700px) {
    padding: 10px;
  }
`;

const BigCont = styled.div`

`;
const H5 = styled.h5`
font-size: 20px;
`;
const Ol = styled.ol`
  flex-direction: column;
display: flex;
gap: 10px;
margin-top: 25px;

`;


const TitleNList = ({
  h3,
  p,
  p2,
src, fontSize, li1, li2, li3, li4, li5, li6, b1, b2, b3, b4, b5, b6

}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont className="animated" data-aos="fade-up" data-aos-mirror="true" data-aos-delay="200">
      <H3 fontSize={fontSize}>{h3}</H3>
      <Cont>
       <Img src={src}></Img>
        <Info>
          <H3Big fontSize={fontSize}>{h3}</H3Big>
          <P>
            <h5>{p2}</h5>
            <Ol>
            <P><b>{b1}</b>{li1}</P>
              <P><b>{b2}</b>{li2}</P>
              <P><b>{b3}</b>{li3}</P>
              <P><b>{b4}</b>{li4}</P> 
              <P><b>{b5}</b>{li5}</P>
              <P><b>{b6}</b>{li6}</P>
            </Ol>
          </P>

        </Info>
      </Cont>
    </BigCont>
  );
};

TitleNList.defaultProps = {

};

export default TitleNList;
