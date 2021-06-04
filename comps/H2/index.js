import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: 0px;
  margin-top: 200px;
  padding: 0px;
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const P = styled.p`
  text-align: center;
`;
const H2 = ({ h2, desc }) => {
  return (
    <div>
      <Title>{h2}</Title>
      <P>{desc}</P>
    </div>
  );
};

H2.defaultProps = {
  h2: "",
  desc: "",
};

export default H2;
