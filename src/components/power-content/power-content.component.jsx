import React from "react";
import { useParams } from "react-router-dom";
import power1 from "../../assets/power/power1.jpg";
import power2 from "../../assets/power/power2.jpg";
import power3 from "../../assets/power/power3.png";
import power4 from "../../assets/power/power4.jpg";
import power5 from "../../assets/power/power5.jpg";
import power6 from "../../assets/power/power6.jpg";
import power7 from "../../assets/power/power7.jpg";
import power8 from "../../assets/power/power8.jpg";
import power9 from "../../assets/power/power9.jpg";
import power10 from "../../assets/power/power10.jpg";
import power11 from "../../assets/power/power11.jpg";
import power12 from "../../assets/power/power12.jpg";
import power13 from "../../assets/power/power13.jpg";
import power14 from "../../assets/power/power14.jpg";
import star from "../../assets/star.png";

import "./power-content.styles.scss";
import Dots from "../dots-container/dots-container.component";

export const powerContent = [
  {
    images: "",
    title: "Compressed Natural Gas Bus Refueling Facility",
    id: "/power-energy-utilities/energyutilities",
    bullets: true,
    thumbnail: [
      {
        image: power1,
        caption:
          "The photograph shows the main compressor and dryer area. Designed to fill 200 buses in eight hours. The dispensers (not shown) are some several hundred feet remote to the compressor storage building.",
      },
    ],
    description: [
      {
        desc: "Player and Company was selected to provide design/build services for a compressed natural gas (CNG) bus refueling site at a new Metropolitan Atlanta Rapid Transit Authority (MARTA) bus facility. The installation was the first of its kind in Georgia.",
      },
      {
        desc: "The Player team was responsible for the design and construction of a facility to house a fully automated system consisting of naural gas engine-powered compressors, high pressure gas storage, process gas dryers, and miscellaneous items.        ",
      },

      {
        bullet: true,
        bullets: [
          {
            main: "Bus dispensers:",
            subBullets: [
              "Capacity 2500 scfm each or 18 diesel equivalent gallons",
              "Fill pressure 3600 psig (fully compensated)",
            ],
          },

          {
            main: "Support dispenser:",
            subBullets: [
              "Capacity 500 scfm or 4.5 DEG",
              "Fill pressure 300 psig",
            ],
          },
          {
            main: "Compressors (Total of three):",
            subBullets: [
              "Nominal capacity 3300 scfm or 24 diesel equivalent gallons",
              "Maximum capacity 3720 scfm or 27 diesel equivalent gallons",
              "Storage 69,900 scf @ 5000 psig or 510 diesel equivalent gallons",
            ],
          },
          { main: "System inlet pressure 150-180 psig" },
          { main: "Dryer 5500 scfm @ 160 psig" },
        ],
        desc: "Station capabilities include:",
      },

      {
        desc: "All work was done in strict compliance with applicable local and federal codes and ANSI/NFPA 52. All high pressure gas piping was subjected to hydrostatic testing at 8250 psig. All butt-welds were radiographed to ANSI B31.3 standards.",
      },
    ],
  },

  {
    thumbnail: [
      {
        image: power2,
        caption: "",
      },
    ],
    title: "Ethanol Plant",
    id: "/power-energy-utilities/ethanol-plant",
    description: [
      {
        desc: "Player and Company was chosen to provide the equipment erection and alignment for a pilot Ethanol plant. Player provided the rigging, installation, assembly and final alignment of the major pieces of the production equipment.",
      },
      {
        desc: "The project was installed on a fast track basis to provide a much needed domestic fuel supplement. By mixing the Ethanol with gasoline, it reduces the amount of US dependency on foreign oil and provides a fuel with lower carbon emissions.",
      },
      {
        desc: "Player also installed the stainless steel process piping for the project, which was all orbital welded.",
      },
    ],
  },

  {
    images: [],
    thumbnail: [
      {
        image: power3,
        caption: "",
      },
    ],
    title: "Natural Gas Compression",
    id: "/power-energy-utilities/natural-gas-compression",
    description: [
      {
        desc: "Player and Company was the prime contractor for a natural gas compression plant installation for an existing LNG facility. The new system collected boil off natural gas from the liquefied natural gas storage for compression and introduction back into the system.",
      },
      {
        desc: "The project included all site development, building erection, piping, equipment erection, concrete foundations, electrical and controls. All was performed by Player’s own forces.",
      },
    ],
  },

  {
    images: [power6, power7, power8, power9, power10, power11],
    thumbnail: [
      {
        image: power4,
        caption:
          "LNG Loading/unloading Skid fabricated in player’s shop including cryogenic piping, insulation, electrical and controls. All systems tested prior to delivery to job site.",
      },
      {
        image: power5,
        caption:
          "Pipe fabrication in the shop allows work to progress off site at the same time as on site work and allows modular units to be installed in the field saving time and money for the client. Piping can be shop fabricated using latest cutting and welding technology, NDT tested and pressure tested prior to shipment.",
      },
    ],
    title: "Shop Fabrication",
    id: "/power-energy-utilities/shop-fabrication",
    description: [
      {
        desc: "Fabrication of piping and shop construction of modular units saves time and money on all projects. Player and Company has the resources and facilities to accomplish this, as shown here.",
      },
      {
        desc: "We typically design, construct, test and operate skid units prior to shipping, including electrical, controls and insulation. Fabricated piping is pressure tested and all NDT testing is completed in the shop.",
      },
    ],
  },
  {
    images: [power12, power14],
    thumbnail: [
      {
        image: power13,
        caption: "",
      },
    ],
    title: "LNG Process",
    id: "/power-energy-utilities/lng-process",
    description: [
      {
        desc: "Player and Company performed a rebuild of this LNG gas peak shaving and storage facility which included mechanical, electrical, instrumentation and general construction services. All work was completed on time and within budget.",
      },
    ],
  },
];

const ProjectContent = () => {
  const { id } = useParams();
  const project = powerContent.find(
    (x) => x.id === `/power-energy-utilities/${id}`
  );
  const thumbnail = project.thumbnail ? project.thumbnail[0] : "";
  console.log(thumbnail);
  return (
    <div className="power-content-component">
      <div className="thumbnail-container">
        {thumbnail && thumbnail.image ? (
          <div className="caption-container">
            <div className="dots-top">
              <Dots count={10} />
            </div>
            <img className="thumbnail" src={thumbnail.image} alt="" />
            {thumbnail.caption && (
              <div className="caption">{thumbnail.caption}</div>
            )}
            <div className="dots-bottom">
              <Dots count={10} />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={`description ${thumbnail.image ? "full" : ""}`}>
          <div className="title">{project.title}</div>
          <div className="first-description">
            {project.description.map((x, i) =>
              !x.bullet ? <div className="text">{x.desc} </div> : ""
            )}
          </div>
        </div>
        {!thumbnail.image ? (
          <div className="images-container">
            {project.images.map((x, i) => (
              <img className="image" src={x} alt="" />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {project.thumbnail.length > 1 ? (
        <div className="second-thumbnail">
          <div className="caption-container">
            <img src={project.thumbnail[1].image} alt="" />
            <div className="caption">{project.thumbnail[1].caption}</div>
          </div>
          <div className="images-container">
            <div>
              {project.images.map((x, i) =>
                i < 3 ? <img className="image" src={x} alt="" /> : ""
              )}
            </div>
            <div>
              {project.images.map((x, i) =>
                i > 3 ? <img className="image" src={x} alt="" /> : ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {project.thumbnail.length < 2 && project.images?.length ? (
        <div className="secondary-images">
          {project.images.map((x, i) =>
            i < 3 ? <img className="image" src={x} alt="" /> : ""
          )}
        </div>
      ) : (
        ""
      )}

      {project.description[2] && project.description[2].bullets && (
        <div>
          <div className="bullet-desc">{project.description[2].desc}</div>
          <div className="second-description">
            {project.description[2] &&
              project.description[2].bullets &&
              project.description[2].bullets.map((x, i) => (
                <div className="bullet-container">
                  <div className="text">{x.main}</div>

                  <div className="bullets">
                    {x.subBullets &&
                      x.subBullets.map((item) => (
                        <div className="subbullet">
                          <img className="star" src={star} alt="" />
                          &nbsp; {item}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectContent;
