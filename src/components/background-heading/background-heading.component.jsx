import React from "react";
import Dots from "../dots-container/dots-container.component";

import "./background-heading.styles.scss";
const BackgroundHeading = ({ heading, span, sub }) => {
  return (
    <div className="background-heading-component">
      <div className="background ">
        <div className="details">
          <div className={`dots-container ${sub ? "sub" : ""}`}>
            <div className="dots-top">
              <Dots count={6} top />
            </div>
            <div className="dots-bottom">
              <Dots count={6} top />
            </div>
          </div>
          <h1 className={sub ? "sub-heading" : ""}>{heading}</h1>

          <span className="span">{span}</span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHeading;
