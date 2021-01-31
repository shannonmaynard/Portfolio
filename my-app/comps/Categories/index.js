import React from "react";
import styled from "styled-components";

const Categories = () => {
  return (
    <div className="Menu">
      <ul>
        <div className="menuColRow">
          <div className="menuHeader">Shannon's Portfolio</div>
        </div>
        <div className="navItems">
          <li>
            <a href="/AboutMe">About Me</a>
          </li>
          <li>
            <a>Major Projects</a>
          </li>
          <li>
            <a>Graphic Design</a>
          </li>
          <li>
            <a href="/ArtPage2">Art</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Categories;
