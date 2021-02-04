import React from "react";
import styled from "styled-components";

const Cont = styled.div`
width: 100%;
align-items: center;
justify-content: center;
display: flex;
`;

const FlipCardBack = styled.div`
  width:100%;
  display: flex;
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-image: ${props=>props.url ? props.url :"url(/ListApp.gif)"};
  background-repeat: no-repeat;
  @media only screen and (max-width: 700px) {
    width: 100%;
    background-size: 200%;
    height:70vh;
    min-width: 30vh;
  }
`;
const Flip2 = () => {
  return (
    <Cont>
          
          <FlipCardBack></FlipCardBack>
    </Cont>
  );
};
export default Flip2;
