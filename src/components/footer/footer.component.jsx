import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import footer from "../../assets/footer.png";
import "./footer.styles.scss";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-component">
      <div className="navitems">
        <div className="navitem" onClick={() => navigate("/our-strengths")}>
          Our Strengths
        </div>
        <div
          className="navitem"
          onClick={() => navigate("/natural-gas-compression-stations")}
        >
          Natural Gas
        </div>
        <div className="navitem" onClick={() => navigate("/chemicals")}>
          Chemicals
        </div>
        <div
          className="navitem"
          onClick={() => navigate("/electrical/baggage-handling")}
        >
          Electrical
        </div>
        <div
          className="navitem"
          onClick={() =>
            navigate("/aviation/international-concourse-fueling-station")
          }
        >
          Aviation
        </div>
        <div className="navitem" onClick={() => navigate("/contact")}>
          contact
        </div>
      </div>
      <div className="logos-container">
        <img className="logo" onClick={() => navigate("/")} src={logo} alt="" />
        <img
          onClick={() =>
            window.open("https://www.3einfrastructure.com/", "_blank")
          }
          className="logo other"
          src={footer}
          alt=""
        />
      </div>
      <div>
        <span>© 2023 Player & Company. All Rights Reserved. Privacy </span>
      </div>
    </div>
  );
};

export default Footer;
