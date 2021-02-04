import React from "react";
import styled from "styled-components";

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 110%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: white;
  color: black;
  background-size: cover;
  background-image: ${(props) =>
    props.frontUrl ? props.frontUrl : "url(/ListApp.png)"};
  background-repeat: no-repeat;
  background-position: center;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: white;
  color: black;
  background-position: center;
  background-size: cover;
  background-image: ${(props) =>
    props.backUrl ? props.backUrl : "url(/ListApp.gif)"};
  background-repeat: no-repeat;
  transform: rotateY(180deg);
`;

const Desc = styled.div`
  flex: 3;
  margin-left: 80px;
  height: auto;
  padding: 30px;
`;
const Container = styled.div``;

const Flip3 = ({projDesc, projectPhases, learnings}) => {
  return (
    <div className="FlipCont">
      <div class="flip-card">
        <div class="flip-card-inner">
          <FlipCardFront></FlipCardFront>
          <FlipCardBack></FlipCardBack>
        </div>
        <div>

        </div>
        
      </div>
    </div>
  );
};

Flip3.defaultProps = {
    learnings: "",
    projDesc: "",
    projectPhases: ""
}

export default Flip3;
