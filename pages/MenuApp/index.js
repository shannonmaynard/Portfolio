import React, { useState } from "react";
import Categories from "../../comps/Categories";
import MajorImgs from "../../comps/MajorImgs";
import Menu from "../../comps/Menu";
import Footer from "../../comps/Footer";
import H2 from "../../comps/H2";
import BtnBlack from "../../comps/BtnBlack";
const MenuApp = () => {
  return (
    <div className="contMajorProj">
      <Categories></Categories>
      <div className="contentsMenu">
        <H2
          h2="Menu Mobile App"
          desc="A simple Menu App Design For Diner/Catering Business"
        />
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
            For my design,
            I took a look at popular menu apps such as SkipTheDishes and
            UberEats, as well as other diner menu's. From there, I knew the
            basic layout I wanted to create as well as the different styles of
            menu apps that circulated the market. The colors I chose centered around a light salmon color, to stimulate the appetite and white for readability. Through trial and error, I
            narrowed down the look and feel I wanted to create and ended up with
            my final product as shown below.
          </p>
        </div>
      </div>
      <h4 id="flow">The Figma Flow</h4>
      <img src="/Menu-mobile.png" alt="menu-app" />
      <div id="flow-link">
        <p> The flow is very straightforward. The first page will give you a list of food groups to choose from. Upon clicking a food group, it will take you to the menu and show you that section of the menu eg. clicking Salads will show you salads on menu. There is a menu bar on top to that will appear on scroll up and you can choose a different category and it will scroll to that category on the menu. Otherwise, you can simply scroll through menu yourself.</p>
        <u>
          <a
            id="menuHref"
            href="https://www.figma.com/proto/y1fWuSeySdDoWDlV5NrqZU/Menu-App?node-id=101%3A28&scaling=scale-down&page-id=0%3A1&starting-point-node-id=101%3A28"
          >
            <h4>View Prototype on Figma</h4>
            
          </a>
        </u>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BtnBlack btn="View Next Project" hrefPrev="/BuddingWriters" href="/Epub" />
      <Footer />
    </div>
  );
};

export default MenuApp;
