import React from "react";
import { useNavigate } from "react-router-dom";

import video from "../../assets/backvideo.mp4";
import footer from "../../assets/footer.png";

import "./banner.styles.scss";
const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-component">
      <div className="banner-content">
        <span className="known-for">We Are Known for our</span>
        <h1>Superior Construction</h1>
        <p>
          A prime contractor for industrial electrical and mechanical systems,
          Player and Company provide services that meet demanding cost and
          quality standards, and we have done so for more than a half-century.
        </p>
        <button onClick={() => navigate("/our-strengths")}>Learn More</button>
      </div>
      <div className="banner-image">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
        <img className="footer-logo" src={footer} alt="" />
      </div>
    </div>
  );
};

export default Banner;
