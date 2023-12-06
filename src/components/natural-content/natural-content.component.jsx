import React from "react";
import natural1 from "../../assets/natural1.jpg";
import natural2 from "../../assets/natural2.jpg";
import natural3 from "../../assets/natural3.jpg";
import natural4 from "../../assets/natural4.jpg";
import natural5 from "../../assets/natural5.jpg";
import "./natural-content.styles.scss";
import BackgroundHeading from "../background-heading/background-heading.component";

const naturalContent = [
  {
    images: natural1,
    description:
      "Player and Company was selected as the prime contractor to install two natural gas compression stations simultaneously on a fast track basis. The construction began as design was being completed, due to the demanding time requirements.",
  },
  {
    images: natural2,
    description:
      "Player was responsible for all areas of construction, from site development to finish painting and startup. This includes compressor and auxiliary buildings, piping, electrical controls, equipment erection, road construction, storm drainage, concrete foundations, and landscaping.",
  },
  {
    images: natural3,
    description:
      "Construction began at both sites approximately the same date, since the sites were over 100 miles apart it required totally separate crews and management staff. The piping included sizes up to 24″ in diameter for the high pressure natural gas.",
  },
  {
    images: natural4,
    description:
      "Piping was fabricated at Player’s fabrication shop and shipped to the site for installation. The piping was then tied into the existing gas main. All welds were x-rayed into accordance with ASME B31.3, pigged and dried to -40 degrees F prior to gas being introduced in to the new system.",
  },
  {
    images: natural5,
    description:
      "Player also performed the electrical installation including medium voltage and controls. The power for the compressor came from a 13,000 HP and a 10,000 HP VFD electric drive. Controls and instrumentation was fed to and from a pre-fabricated Power Distribution Center, set on concrete foundations. Both projects were completed on time and within budget.",
  },
];
const NaturalContent = () => {
  return (
    <div className="natural-component">
      <br />
      <BackgroundHeading
        sub
        heading="Player and Company was selected as the prime contractor to install two
          natural gas compression stations simultaneously on a fast track basis."
      />

      <div className="natural-content-container">
        {naturalContent.map((item, index) => (
          <div className="natural-content" key={index}>
            <div className="natural-images">
              <img src={item.images} alt="" />
            </div>
            <div className="natural-section">{item.description}</div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default NaturalContent;
