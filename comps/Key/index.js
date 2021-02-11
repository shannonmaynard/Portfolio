import React, { useState } from "react";
import styled from "styled-components";

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

/*
  @media only screen and (max-width: 700px) {

  }
*/
const P = styled.p`
text-align: left;
margin: 0px;
`;

const BigCont = styled.div`
 padding: 50px;
  @media only screen and (max-width: 700px) {
    margin-top: 20px;
    margin-bottom: 20px;
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
    <BigCont>
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
