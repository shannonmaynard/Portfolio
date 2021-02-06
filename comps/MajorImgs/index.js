import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  height: 290px;
  overflow: hidden;
  width: 350px;
  align-items: ${props => props.alignItems ? props.alignItems : "center"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
  display: flex;
  background-color: #191919;
  border-radius: 10px;
  margin-right: 10px;
  border: solid 6px black;
  box-shadow: 5px 5px 12px rgba(50, 50, 50, 0.38);
  position: relative;
`;

const Img = styled.img`
transition: transform .5s ease;
height: ${props => props.imgHeight ? props.imgHeight : "100%"};
width: ${props => props.imgWidth ? props.imgWidth : "100%"};
:hover{
    transform: scale(${props => props.scale ? props.scale : "1.2"});
}
`;

const Dark = styled.div`
display:flex;
position: absolute;
background-color: rgba(0,0,0,0.6);
`;


const MajorImgs = ({src, justifyContent, imgHeight, alignItems, imgWidth, scale}) => {
  const [expanded, setExpanded] = useState(false);

  return <Cont>
    <Dark></Dark>
      <Img imgWidth={imgWidth} imgHeight={imgHeight} justifyContent={justifyContent} alignItems={alignItems} src={src} scale={scale}></Img>
  </Cont>;
};

MajorImgs.defaultProps = {
  src:"/epubImg.png",

}

export default MajorImgs;
