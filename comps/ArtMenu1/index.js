import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styled from "styled-components";

const ArtMenu1 = () => {
  return (
    <div className="text">
      <div className="ContMenu">
        <div id="col1Menu">
          <a href="#3col1">
            <div className="1col1">
              <div className="">
                <img src="Art/art1.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col2">
            <div className="3col2">
              <div>
                <img src="Art/art2.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col3">
            <div className="3col3">
              <div>
                <img src="Art/art3.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col4">
            <div className="3col4">
              <div>
                <img src="Art/art4.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col5">
            <div className="3col5">
              <div>
                <img src="Art/art5.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col6">
            <div className="3col6">
              <div>
                <img src="Art/art6.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col7">
            <div className="3col7">
              <div>
                <img src="Art/art7.png"></img>
              </div>
            </div>
          </a>
        </div>

        <div id="col2Menu">
          <a href="#3col8">
            <div className="3col8">
              <div>
                <img src="Art/art8.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col9">
            <div className="3col9">
              <div>
                <img src="Art/art9.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col10">
            <div className="3col10">
              <div>
                <img src="Art/art10.png"></img>
              </div>
            </div>
          </a>

          <a href="#3col11">
            <div className="3col11">
              <div>
                <img src="Art/art11.png"></img>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtMenu1;
