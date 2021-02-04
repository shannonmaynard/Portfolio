import React from "react";
import styled from "styled-components";

const Desc = styled.div`
  flex: 3;
  height: auto;
  padding: 30px;
`;

const ProjectDesc1 = ({learnings, projectPhases, projDesc}) =>{
return <Desc>
          <h4>Project Description</h4>
          <p>
              {projDesc}
            A list app for gamers to keep track of their gaming collection,
            which they can filter by release date, their play status and rating.
          </p>
          <h4>Project Phases</h4>
          <ol>
            {projectPhases}
            <li>Conducted user research</li>
            <li>Create low fidelity</li>
            <li>Performed user Testing</li>
            <li>Create high fidelity on Figma</li>
            <li>Web Development: created components and put them on pages</li>
            <li>Created interactions with useState</li>
            <li>Connected to frontend to database</li>
          </ol>
          <h4>Learnings</h4>
          <p>
              {learnings}
            I learned again how important user testing is. A product can seem to
            have no flaws, but once user testing starts, flaws become more
            obvious.
          </p>
        </Desc>

}

ProjectDesc1.defaultProps = {
    learnings: "",
    projDesc: "",
    projectPhases: ""
}

export default ProjectDesc1;