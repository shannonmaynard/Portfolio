import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  flex: 1;
  overflow: hidden;
  max-width: 400px;
  height: 100%;
  width: auto;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  display: flex;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#191919" )};
  border-radius: 15px;
  margin-right: 10px;
  border: solid 6px black;
  box-shadow: 5px 5px 12px rgba(50, 50, 50, 0.38);
  position: relative;
  @media only screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

const Img = styled.img`
  position: relative;
  transition: transform 0.5s ease;
  height: ${(props) => (props.imgHeight ? props.imgHeight : "100%")};
  flex: 1;
  width: ${(props) => (props.imgWidth ? props.imgWidth : "100%")};
  :hover {
    transform: scale(${(props) => (props.scale ? props.scale : "1.2")});
  }
`;

const Dark = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ViewWork = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  right: 0px;
  width: 100%;
  bottom: 0px;
  z-index: 2;
  padding-top: 1px;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContSmall = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  padding: 10px;
  padding-bottom: 30px;

`;
const BigCont = styled.div`
  display: flex;
  

  flex-direction: column;
`;

const H5 = styled.h5`
  color: black;
  font-weight: 400;
  margin:0px;
  font-size: 18px;
`;
const P = styled.p`
  color: black;
  font-weight: 200;
  font-size: 14px;
  margin:0px;
  text-align:left;
  text-align-last: left;

`;
const MajorImgs = ({
  src,
  justifyContent,
  imgHeight,
  alignItems,
  imgWidth,
  scale,
  projectType,
  href,
  projectDesc
}) => {
  const [hover, setHover] = useState(false);

  return (
    <BigCont>
      <Cont>
        <Dark></Dark>
        <a href={href}>
          <Img
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            justifyContent={justifyContent}
            alignItems={alignItems}
            src={src}
            scale={scale}
          ></Img>
        </a>
   
      </Cont>
      <ContSmall>
        <H5>{projectType}</H5>
        <P>{projectDesc}</P>
      </ContSmall>
    </BigCont>
  );
};

MajorImgs.defaultProps = {
  viewWork: "View Work",
};

export default MajorImgs;
