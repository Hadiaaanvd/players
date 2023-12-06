import React from "react";
import { useLocation } from "react-router-dom";

import "./banner-inner.styles.scss";
const BannerInner = () => {
  const location = useLocation();
  const heading = location.pathname
    .replace(/\//g, " ")
    .replace(/-/g, " ")
    .replace("project", "")
    .replace("electrical", "")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="banner-inner-component">
      <div className="banner-image">
        <div className="title">
          {" "}
          <span>{heading === " S" ? "Projects" : heading}</span>
        </div>
      </div>
    </div>
  );
};

export default BannerInner;
