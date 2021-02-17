import React, { useState } from "react";
import styled from "styled-components";


const Cont = styled.div`
 
 
`;


/*
  @media only screen and (max-width: 700px) {

  }
*/

const Test = () => {
  const [expanded, setExpanded] = useState(false);

  return (
<div class="group">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
</div>
  );
};

export default Test;
