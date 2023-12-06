import React from "react";

import img1 from "../../assets/strengths-img1.svg";
import img2 from "../../assets/strengths-img2.jpg";
import img4 from "../../assets/strengths-img4.svg";
import img5 from "../../assets/strengths-img5.svg";
import img6 from "../../assets/strengths-img6.svg";
import img7 from "../../assets/strengths-img7.svg";
import "./strengths-content.styles.scss";
import BackgroundHeading from "../background-heading/background-heading.component";

const specs = [
  {
    heading: "Personal attention from top management",
    description:
      "Who are committed to maintaining the company’s record of completing projects on time and within budget, whether large or small, simple or complex.",
    image: img1,
  },
  {
    heading: "Highly qualified personnel",
    description:
      "Our project managers, engineers, and field superintendents average 20 years experience in the industry. ",
    span: "Committment to developing our own multi-craft field forces, to ensure flexibility and control during critical situations, particularly during scheduled plant shutdowns and multi-craft jobs of short duration.",
    image: img2,
  },
  {
    heading: "Our “contractor team” approach to project management",
    description:
      "Capable of carrying out every phase of a job from estimating through start-up, our project managers function as automomous contractors – with full home office support – enabling them to bring to your job the individual attention, cooperation, and efficiency you need.",
    image: img4,
  },
  {
    heading: "Solid design capabilities",
    description:
      "Which time and again have proven to be an intergral part of cost-effective installation, whether or not a project was initially conceived as design/build. Player and Company’s ability to assist owners with design modifications, when asked, is widely appreciated.",
    image: img5,
  },
  {
    heading: "Our comprehensive Atlanta fabricating facility",
    description:
      "Outfitted with state-of-the-art equipment, is staffed with qualified welders, highly experienced in performing under the stringent requirements of ASME Code and radiographic inspection for carbon and stainless steel, as well as many of the alloy metals. Prefabricated work is carefully planned and detailed by our engineering staff and coordinated with the field to meet on-site conditions, resulting in important savings of time and often cost.",
    image: img6,
  },
  {
    heading: "Knowledge of, and investment in",
    description:
      "State-of-the-art equipment: Player and Company is attuned to progressive construction methods and equipment and is committed to continued investment in quality machinery and tools that can make our forces more productive. We believe such investment pays dividends in cost-effectiveness and quality – for you, as well as for us.",
    image: img7,
  },
];
const StrengthsContent = () => {
  return (
    <div className="strengths-content-component">
      <br />
      <BackgroundHeading
        sub
        heading="Player and Company’s unique strength as a prime contractor comes from
        seven key areas"
      />

      <div className="specs">
        {specs.map((item) => (
          <div className="spec-container">
            <div className="spec-content">
              <h3>{item.heading}</h3>
              <div className="description">
                {item.description}
                {item.span && (
                  <div>
                    <br />
                    {item.span}
                  </div>
                )}
              </div>
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

export default StrengthsContent;
