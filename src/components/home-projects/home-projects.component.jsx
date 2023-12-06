import React from "react";
import { useNavigate } from "react-router-dom";
import project1 from "../../assets/project/project1.svg";
import project2 from "../../assets/project/project2.svg";
import project3 from "../../assets/project/project3.svg";
import "./home-projects.styles.scss";

const projects = [
  {
    id: "/project/recovery-from-electrical-catastrophe",
    image: project1,
    title: "Recovery From Electrical Catastrophe",
  },
  {
    id: "/project/hartsfield-jackson-international-airport-aviation-fuel-system",
    image: project2,
    title: "Hartsfield Jackson Intl Airport",
  },
  {
    id: "/project/compressed-natural-gas-fueling-station",
    image: project3,
    title: "Compressed Natural Gas Fuel Station",
  },
];
const HomeProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="home-projects-components">
      <h1>
        Projects <span onClick={() => navigate("/projects")}>More</span>
      </h1>

      <div className="projects-container">
        {projects.map((item, index) => (
          <div
            className="project"
            key={index}
            onClick={() => navigate(item.id)}
          >
            <img src={item.image} alt="" />
            <div className="title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
