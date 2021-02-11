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

const P = styled.div`
  max-width: 700px;
  @media only screen and (max-width: 700px) {
    padding: 10px;
  }
`;

const BigCont = styled.div`
  margin-top: 300px;
  margin-bottom: 300px;
`;

const Ol = styled.ol`
  flex-direction: column;
display: flex;
gap: 10px;

`;
const LI = styled.li`
font-size: 16px;
`;

const TitleNList = ({
  h3,
  p,
  p2,


}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont>
      <H3>{h3}</H3>
      <Cont>
       <Img src="bw/pages.png"></Img>
        <Info>
          <H3Big>{h3}</H3Big>
          <P>
            <b>{p2}</b>
            <Ol>
              <LI>Online book shop</LI>
              <LI>Updatable event calendar Booking system</LI>
              <LI>Updatable lunch menu(s)</LI>
              <LI>Landing page</LI> 
              <LI>About Page</LI>
              <LI>Contact Page</LI>
            </Ol>
          </P>

        </Info>
      </Cont>
    </BigCont>
  );
};

TitleNList.defaultProps = {
  h3: "Project Title",
  p: "fake content",
  src: "",
};

export default TitleNList;
