import React, { useState } from "react";
import logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { electricalContent } from "../electrical-content/electrical-content.component";
import { projectContent } from "../project-content/project-content.component";
import { powerContent } from "../power-content/power-content.component";

import "./navbar.styles.scss";
const Navbarr = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClick = (id) => {
    navigate(id);
    setShow(false);
    setTimeout(() => setShow(true), 100);
  };

  return (
    <div className="navbar-component">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand onClick={() => navigate("/")}>
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <Nav navbarScroll>
            <Nav.Link>
              <Dropdown className="show">
                <Dropdown.Toggle className="navitem show">
                  <span onClick={() => handleClick("/projects")}>Projects</span>
                </Dropdown.Toggle>
                {show && (
                  <div className="dropdown-menu">
                    {projectContent.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleClick(item.id)}
                      >
                        {item.title}
                      </Dropdown.Item>
                    ))}
                  </div>
                )}
              </Dropdown>
            </Nav.Link>
            <Nav.Link
              className="navitem"
              onClick={() => handleClick("/our-strengths")}
            >
              Strengths
            </Nav.Link>

            <Nav.Link>
              <Dropdown className="show">
                <Dropdown.Toggle
                  className="navitem show"
                  variant="success"
                  id="dropdown-basic"
                >
                  Power & Energy Utilities
                </Dropdown.Toggle>
                {show && (
                  <div className="dropdown-menu">
                    {powerContent.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleClick(item.id)}
                      >
                        {item.title}
                      </Dropdown.Item>
                    ))}
                  </div>
                )}
              </Dropdown>
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/natural-gas-compression-stations")}
              className="navitem"
            >
              Natural Gas
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/chemicals")}
              className="navitem"
            >
              Chemicals
            </Nav.Link>
            <Nav.Link>
              <Dropdown className="show">
                <Dropdown.Toggle
                  className="navitem show"
                  variant="success"
                  id="dropdown-basic"
                >
                  Electrical
                </Dropdown.Toggle>
                {show && (
                  <div className="dropdown-menu">
                    {electricalContent.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleClick(item.id)}
                      >
                        {item.title}
                      </Dropdown.Item>
                    ))}
                  </div>
                )}
              </Dropdown>
            </Nav.Link>
            <Nav.Link>
              <Dropdown className="show">
                <Dropdown.Toggle
                  className="navitem show"
                  variant="success"
                  id="dropdown-basic"
                >
                  Aviation
                </Dropdown.Toggle>
                {show && (
                  <div className="dropdown-menu">
                    <Dropdown.Item
                      onClick={() =>
                        handleClick(
                          "/aviation/international-concourse-fueling-station"
                        )
                      }
                    >
                      International Concourse Fueling Station
                    </Dropdown.Item>
                  </div>
                )}
              </Dropdown>
            </Nav.Link>
            <Nav.Link
              className="navitem"
              onClick={() => handleClick("/contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
