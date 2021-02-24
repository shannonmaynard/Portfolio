import React, { useState } from "react";
import styled from "styled-components";

const H3 = styled.div`
  text-align: center;
  width: 100%;
  align-items: 100%;
  color: white;
  font-weight: 300;
  font-size: 30px;
  font-family: "EB Garamond", sans-serif;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const FooterCont = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #222222;
  padding: 40px;
  gap: 30px;
  justify-content: center;
  text-align: center;
  @media only screen and (max-width: 700px) {
    display: flex;
    text-align: center;
    align-items: center;
  }
`;

const H5Email = styled.h5`
  color: rgb(0, 161, 215);
  :hover {
    cursor: pointer;
    color: white;
  }
`;

const A = styled.a``;

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
      <H3>Contact Me</H3>
      <ContactInfo>
        <A
          href="http://www.linkedin.com/in/shannon-maynard-7004a6198"
          target="_blank"
        >
          <Img className="linkedIn" src="/linkedIn.png" />
        </A>
        <EmailCont>
          <A href="mailto:smaynard@my.bcit.ca">
            <Img src="Mail.svg"></Img>
          </A>
        </EmailCont>
      </ContactInfo>
      @copyrights Shannon Maynard 2021
    </FooterCont>
  );
};

export default Footer;
