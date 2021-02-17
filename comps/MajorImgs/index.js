import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  flex: 1;
  overflow: hidden;
  //max-width: 500px;
  height: 100%;
  width: auto;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  display: flex;
  background-color: #191919;
  border-radius: 10px;
  margin-right: 10px;
  border: solid 6px black;
  box-shadow: 5px 5px 12px rgba(50, 50, 50, 0.38);
  position: relative;
  @media only screen and (max-width:700px){
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

  padding-top: 1px;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MajorImgs = ({
  src,
  justifyContent,
  imgHeight,
  alignItems,
  imgWidth,
  scale,
  viewWork
}) => {
  const [hover, setHover, href] = useState(false);

  return (
    <div>
      <Cont className="animated"data-aos="fade-up" data-aos-mirror="true">
        <Dark></Dark>
        <Img
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          justifyContent={justifyContent}
          alignItems={alignItems}
          src={src}
          scale={scale}
        ></Img>
        <ViewWork>
          <ul>
            <li>
              <a href="/BuddingWriters">{viewWork}</a>
            </li>
          </ul>
        </ViewWork>
      </Cont>
    </div>
  );
};

MajorImgs.defaultProps = {
  src: "/epubImg.png",
  viewWork: "View Work",

};

export default MajorImgs;
