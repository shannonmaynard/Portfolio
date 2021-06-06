import React, { useState } from "react";
import styled from "styled-components";

const BigCont = styled.div`
  padding: 0px 30px;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  @media only screen and (max-width: 900px) {
    margin: 0px;
    flex-direction: column;
  }
`;

const H3 = styled.h3`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  text-align: left;
  
  @media only screen and (max-width: 900px) {
  }
`;
const Img = styled.img`
  width: 60vw;
  max-width: 600px;
  height: auto;

  margin-right: 30px;

  border: solid 1px rgb(230, 230, 230);
  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: auto;
    border: none;
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;
const P = styled.p`
  max-width: 700px;
  @media only screen and (max-width: 900px) {
  }
`;

const Info2 = styled.div`
  width: 100%;
  text-align: left;
`;

const Cont1 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const InnerCont = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 900px) {
    margin: 0px;
    flex-direction: column;
  }
`;

const TitleNDescCol3 = ({
  h3,
  p,
  p3,
  src,
  flexImg,
  flexInfo,
  h5,
  flex,
  paraOrg,
  titleOrg,
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

      <InnerCont>
        <div>
          <Img src={src}></Img>
        </div>
        <div>
          <Cont1>
            <Info2 flexImg={flexImg} flex={flex}>
              <h5>{h5}</h5>
              <P>{p}</P>
            </Info2>
          </Cont1>
          <Cont1>
            <Info2 flexImg={flexImg} flex={flex}>
              <h5>{titleOrg}</h5>
              <P>{paraOrg}</P>
            </Info2>
          </Cont1>
        </div>
      </InnerCont>
    </BigCont>
  );
};

export default TitleNDescCol3;
