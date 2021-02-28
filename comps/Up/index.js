import React, { useState } from "react";
import styled from "styled-components";


const Cont = styled.a`
 position: fixed;
 bottom: 30px;
 right: 30px;

`;


const Img = styled.img`
 width: 50px;
 height: 50px;
 @media only screen and (max-width: 700px){
    width: 30px;
 height: 30px;
 }
 
`;

const Up = ({href}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Cont href={href}>
      <Img src="/up.svg" scrollSmooth/>
    </Cont>
  );
};

export default Up;
