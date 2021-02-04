import React from "react";
import styled from "styled-components";

const Categories = () => {
  return (
    <div className="Menu">
     
        <div className="menuHeader">Shannon's Portfolio</div>

        <div className="navItems">
           <ul>
          <li>
            <a href="/About">About</a>
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
           </ul>
        </div>
     
    </div>
  );
};

export default Categories;
