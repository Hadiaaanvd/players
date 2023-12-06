import React from "react";
import man from "../../assets/man.svg";
import aviation1 from "../../assets/aviation1.jpg";
import aviation2 from "../../assets/aviation2.jpg";
import aviation3 from "../../assets/aviation3.jpg";
import "./aviation-content.styles.scss";

const aviationContent = [
  {
    title: "Expansion",
    desc: "Player and Company was entrusted with the expansion of the fuel storage and distribution system for the new international concourse at Hartsfield-Jackson Atlanta International Airport.",
    image: aviation1,
  },
  {
    title: "Installation",
    desc: "This project, which had to be accomplished without interrupting service to the existing concourse, consisted of the installation of a new 35,000 bbl fuel storage tank, an 8000 gpm capacity pump station, a fuel control service building with a quality control laboratory, and the installation of nearly two miles of 20 inch diameter underground fuel mains.",
    image: aviation2,
  },
  {
    title: "Underground Piping",
    desc: "The fuel mains were run from the fuel farm to the concouse beneath active runways. To accomplish this, 1700 linear feet of 54 inch diameter horizontal boxes were made, the longest of which was 550 feet. All pipe joints were welded per ASME Code and X-rayed to ensure code compliance. All underground piping was coated, wrapped and cathodically protected to provide a durable system.",
    image: aviation3,
  },
];
const AviationContent = () => {
  return (
    <div className="aviation-content-component">
      <div className="avi-background-container">
        <div className="avi-background">
          <img src={man} alt="" />
        </div>
        <div className="aviation-content">
          <h3>Aviation: International Concourse Fueling Station</h3>
          {aviationContent.map((item) => (
            <div className="aviation-point">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="description">
                <span>{item.title}</span> {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AviationContent;
