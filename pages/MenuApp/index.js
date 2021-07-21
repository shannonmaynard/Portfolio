import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import Footer from "../../comps/Footer";
import H2 from "../../comps/H2";
const MenuApp = () => {
  return (
    <div className="contMajorProj">
      <Categories></Categories>
      <div className="contentsMenu">
        <H2 h2="Menu Mobile App" desc="A simple Mobile App Design" />
      </div>
      <div className="menu-row">
        <div className="text-menu">
          <h4>Project Description</h4>
          <h6>Time Taken: 1 DAY - June 15, 2021</h6>
          <p>
            This project was originally for a job that was suddenly cancelled
            after issues with their chef. The client wanted a mobile menu for
            their diner/catering business. She wanted the menu to be modern yet
            still represent the unique quirks of her diner.
          </p>
        </div>
      </div>
      <div className="menu-row2">
        <div className="text-menu">
          <h4>THE DESIGN</h4>
          <p>
            The design of the app is two simple steps. The first page is the
            homepage with a list of food groups. If you click a food group
            you'll be lead to menu options from that food group.
          </p>
        </div>
      </div>

      <img src="/Menu-mobile.png" alt="menu-app" />
      <div className="menu-row2">
        <div className="text-menu">
          <u>
            <a
              id="menuHref"
              href="https://www.figma.com/proto/y1fWuSeySdDoWDlV5NrqZU/Menu-App?node-id=101%3A28&scaling=scale-down&page-id=0%3A1&starting-point-node-id=101%3A28"
            >
              <h4>View Prototype on Figma</h4>
            </a>
          </u>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuApp;
