import React, { useState } from "react";
import styled from "styled-components";

const ListCont = styled.div`
  flex: 1;
  margin-right: 30px;

  
  @media only screen and (max-width: 700px) {
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 50px 0px;
  margin-right: 30px;
  @media only screen and (max-width: 700px) {
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;

const Cont = styled.div`
  display: flex;

  flex-direction: row;


  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Li = styled.li`
  margin-bottom: 5px;
  line-height: 22px;

`;
/*
  @media only screen and (max-width: 700px) {

  }
*/

const ThreeCol = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <MainCont className="animated" data-aos="fade-up" data-aos-delay="200" data-aos-mirror="true">
      <h3>Website Features</h3>
      <Cont >
        <ListCont>
          <h5>Shared Features</h5>

          <Li>Login</Li>
          <Li>Listing page with all volunteer opportunities</Li>
          <Li>Filter system on listings page</Li>
        </ListCont>
        <ListCont>
          <h5>Student Features</h5>

          <Li>Save for later option</Li>
          <Li>Volunteer Hours tracker</Li>
          <Li>Account page</Li>
          <Li>Sign up as volunteer</Li>
        </ListCont>
        <ListCont>
          <h5>Organization Features</h5>

          <Li>
            Managing volunteers page (add to volunteers hours, delete from
            system)
          </Li>
          <Li>Post a position page</Li>
          <Li>View and edit posts</Li>
          <Li>Sign up as an organization</Li>
          <Li>View and Account information</Li>
        </ListCont>
      </Cont>
    </MainCont>
  );
};

export default ThreeCol;
