import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImgGallery = styled.div`
display: flex;
flex-direction: column;
width: 22vw;
`;

const Responsive = styled.div`
    box-shadow: 3px 6.7px 5.3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Gallery = styled.div`

margin: 5px;
:hover{
        height:40%;
    }
`;

const A = styled.a`

`;

const Img = styled.img`
    width: 100%;
    height: auto;
    padding: 10px;
`;


const ArtColumn = ({src1, href1, src2, href2, src3, href3,}) => {
  return (
    <ImgGallery>
        <Responsive>
            <Gallery>
                <A target="_blank" href={href1}></A>
                <Img src={src1}></Img>
            </Gallery>
        </Responsive>
        <Responsive>
            <Gallery>
                <A target="_blank" href={href2}></A>
                <Img src={src2}></Img>
            </Gallery>
        </Responsive>
        <Responsive>
            <Gallery>
                <A target="_blank" href={href3}></A>
                <Img src={src3}></Img>
            </Gallery>
        </Responsive>
    </ImgGallery>
  );
};

ArtColumn.defaultProps = {
    src1: "",
    href1: "",
    src2: "",
    href2: "",
    src3: "",
    href3: ""
}


export default ArtColumn ;
