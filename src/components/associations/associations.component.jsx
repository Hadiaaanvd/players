import React from "react";
import "./associations.styles.scss";
import { useNavigate } from "react-router-dom";
const Associations = () => {
  const navigate = useNavigate();
  return (
    <div className="associations-component">
      <h2>Associations & Memberships</h2>
      <div className="boxes-container">
        <div className="box">
          National Certified Pipe <br /> Welding Bureau
        </div>
        <div className="box">
          <h1>NCPWB</h1>
        </div>
        <div className="box">
          American Welding <br /> Society
        </div>
        <div className="box">
          <h1>AWS</h1>
        </div>
      </div>
      <div className="boxes-container">
        <div className="box">
          <h1>NCPWB</h1>
        </div>
        <div className="box">
          Mechanical Contractors <br /> Association of America
        </div>
        <div className="box">
          <h1>NECA</h1>
        </div>
        <div className="box">
          National Electronic <br /> Contractors Association
        </div>
      </div>
      <div className="boxes-container">
        <div className="box">
          Metro Atlantic <br /> Chamber of Commerce
        </div>
        <div className="box">
          <h1>MACC</h1>
        </div>

        <div className="double-box" onClick={() => navigate("/our-strengths")}>
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Associations;
