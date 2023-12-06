import React from "react";

import piping from "../../assets/pipe.svg";
import pump from "../../assets/pump.svg";
// import water from "../../assets/water-waste.svg";
import loading from "../../assets/loading.svg";
import packaging from "../../assets/packaging.svg";
import plant from "../../assets/plant.svg";
// import electrical from "../../assets/electrical.svg";
import chemical1 from "../../assets/chemical1.jpg";
import chemical2 from "../../assets/chemical2.jpg";
import chemical3 from "../../assets/chemical3.jpg";
import chemical4 from "../../assets/chemical4.jpg";
import BackgroundHeading from "../background-heading/background-heading.component";

import "./chemicals-content.styles.scss";
import { Carousel } from "react-bootstrap";

const ChemicalsContent = () => {
  return (
    <div className="chemicals-content-component">
      <br />
      <BackgroundHeading
        sub
        heading=" As prime contractor for expansion of internationally known liquid
        detergent producer, Player and Company has deployed a multi-craft work
        force including mechanical, electrical, civil and millwright
        personnel."
      />

      <div className="challenges">
        <div className="challenges-content">
          <div className="subtext">
            One of the major challenges of the project was to keep the facility
            fully operational during the extensive modifications, which were
            involved. Years earlier, Player and Company had served as prime
            contractor for the original plant, which was constructed on a
            design/build basis. Modifications in the plant expansion included
            not only process changes but control systems, product handling,
            safety and environmental aspects of the operation. Among the more
            significant facets of this assignment were:
            <br /> <br />
            <div className="bullet">
              <div className="icon-container">
                <img src={piping} alt="" />
              </div>
              Installations of thousands of feet of piping including process,
              product, steam and condensate, air, CIP, DI, and domestic water
              piping. Construction materials included stainless steel, Sch 80
              CPVC and PVC, copper and carbon steel.
            </div>
            <div className="bullet">
              <div className="icon-container">
                <img src={pump} alt="" />
              </div>
              Installation of new blenders, agitators, pumps, steam generators,
              air compressors, 40 ton chiller, reverse osmosis system, CIP
              system, vent scrubber system, homogenizer and tanks.
            </div>
            <div className="bullet">
              <div className="icon-container">
                <img src={plant} alt="" />
              </div>
              Relocation of existing bulk raw material storage tanks, setting
              new tanks and installation of temporary piping system to keep
              plant operating at capacity.
            </div>
            <div className="bullet">
              <div className="icon-container">
                <img src={loading} alt="" />
              </div>
              Building modifications to accommodate new loading and unloading
              systems and installation of new switch gear, VFDs, modification of
              electrical service to and inside the plant.
            </div>
            <div className="bullet last">
              <div className="icon-container">
                <img src={packaging} alt="" />
              </div>
              Relocation of existing packaging system and the addition of new
              packaging equipment. Expansion and modification of existing waste
              water reclamation system.
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel touch={true} wrap={true} interval={100000000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={chemical4}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={chemical1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={chemical2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={chemical3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ChemicalsContent;
