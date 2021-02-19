import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import styled from "styled-components";

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Res = styled.embed`
width: 100vw;
height: 100vh;
@media only screen and (max-width: 700px) {
    width: 100vw;
height: 100vh;
  }
`;

const Resume = () => {
  return (
    <div>
   <Categories/>
   <Menu/>
      <Cont>
    

        <Res src="Resume-Shannon-Maynard.pdf"></Res>    
  
      </Cont>
    </div>
  );
};

export default Resume;
