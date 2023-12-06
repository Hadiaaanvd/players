import React from "react";
import { useNavigate } from "react-router-dom";

import projects from "../../assets/projects.svg";
import liscense from "../../assets/liscence.jpg";
import productivity from "../../assets/productivity.svg";
import BackgroundHeading from "../background-heading/background-heading.component";

import "./home-content.styles.scss";
const specs = [
  {
    heading: "Productivity",
    description:
      "Player’s designers and managers have worked years within the industries in which we specialize, and they have had extensive experience as contractors for those industries.",
    image: liscense,
  },
  {
    heading: "Projects",
    description:
      "Since 1946, Player And Company has been providing quality industrial construction in Atlanta and the Southeast. Our long experience has proven its value in the commercial markets.",
    image: projects,
  },
  {
    heading: "Licensed",
    description:
      "Licensed throughout the southeastern US in: Electrical, Piping, General Construction and serving all areas in Georgia, Tennessee, Alabama, Virginia, Carolinas, and Florida.",
    image: productivity,
  },
];

const HomeContent = () => {
  const navigate = useNavigate();
  const redirect = (title) => {
    navigate(
      title === "Projects"
        ? "/projects"
        : title === "Licensed"
        ? "/contact"
        : "/our-strengths"
    );
  };
  return (
    <div className="home-content-component">
      <BackgroundHeading
        heading="Player and Company has provided high-quality and cost-effective
            industrial electrical and mechanical systems services for over 50
            years as a prime contractor."
        span="Industrial Constructors and Engineers • PLC and Controls • Emergency
            Generator Design and Installations • CNG Station Installations •
            “ASME” Code Fabrications Shop"
      />

      <div className="specs">
        {specs.map((item, index) => (
          <div className="spec-container" key={index}>
            <div className="spec-content">
              <h3>{item.heading}</h3>
              <div className="description">{item.description}</div>
              <button onClick={() => redirect(item.heading)}>Learn More</button>
            </div>
            <div className="spec-image">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
