import React, { useState } from "react";
import styled from "styled-components";


const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

const FooterCont = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #222222;
  padding: 40px;
  position: relative;
  justify-content: center;
  text-align: center;
  @media only screen and (max-width: 700px) {
    display: flex;
    text-align: center;
    align-items: center;
  }
`;


const A = styled.a``;

const P = styled.p`
font-size: 10px;
position: absolute;
bottom: 0px;
`;

const EmailCont = styled.div`
  width: fit-content;
  :hover {
    cursor: pointer;
    color: white;
  }
`;

const Img = styled.img`
  width: 40px;
  cursor: pointer;
  border-radius: 9px;
  margin: 7px;
  
`;

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <FooterCont>
      <ContactInfo>
        <A
          href="http://www.linkedin.com/in/shannon-maynard-7004a6198"
          target="_blank"
        >
          <Img className="linkedIn" src="/linkedIn.png" />
        </A>
        <EmailCont>
          <A href="mailto:shannon.maynard1234@gmail.com">
            <Img src="Mail.svg"></Img>
          </A>
        </EmailCont>
      </ContactInfo>
     <P>@copyrights Shannon Maynard 2021</P> 
    </FooterCont>
  );
};

export default Footer;
