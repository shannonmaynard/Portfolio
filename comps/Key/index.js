import React, { useState } from "react";
import styled from "styled-components";


/*
  @media only screen and (max-width: 700px) {

  }
*/
const P = styled.p`
text-align: left;
margin: 0px;

font-size: 17px;
margin-bottom: 20px;
`;

const BigCont = styled.div`
 padding: 50px;

  @media only screen and (max-width: 700px) {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
  }
`;

const Key = styled.h3`
  display: flex;
  font-size: 23px;

  @media only screen and (max-width: 700px) {
    padding: 10px;
    margin-bottom: 0px;
  }
`;

const KeyFindings = ({li1, li2, li3 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BigCont className="animated"data-aos="fade-up" data-aos-mirror="true">
      <Key>Key Takeaways</Key>
      <ol>
        <P><b>1. </b>{li1}</P>
        <P><b>2. </b>{li2}</P>
        <P><b>3. </b>{li3}</P>
      </ol>
    </BigCont>
  );
};

KeyFindings.defaultProps = {};

export default KeyFindings;
