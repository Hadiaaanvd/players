import React from "react";
import { useParams } from "react-router-dom";
import electrical1 from "../../assets/electrical/electrical1.jpg";
import electrical2 from "../../assets/electrical/electrical2.jpg";
import electrical3 from "../../assets/electrical/electrical3.jpg";
import electrical4 from "../../assets/electrical/electrical4.jpg";
import electrical5 from "../../assets/electrical/electrical5.jpg";
import electrical6 from "../../assets/electrical/electrical6.jpg";
import electrical7 from "../../assets/electrical/electrical7.jpg";
import electrical8 from "../../assets/electrical/electrical8.jpeg";
import electrical9 from "../../assets/electrical/electrical9.jpg";
import electrical10 from "../../assets/electrical/electrical10.jpg";
import electrical11 from "../../assets/electrical/electrical11.jpg";
import electrical12 from "../../assets/electrical/electrical12.jpg";
import electrical13 from "../../assets/electrical/electrical13.jpg";
import electrical14 from "../../assets/electrical/electrical14.jpg";
import electrical15 from "../../assets/electrical/electrical15.jpg";
import electrical16 from "../../assets/electrical/electrical16.png";
import electrical17 from "../../assets/electrical/electrical17.jpg";
import electrical18 from "../../assets/electrical/electrical18.jpg";

import star from "../../assets/star.png";
import "./electrical-content.styles.scss";
import { Carousel } from "react-bootstrap";
import Dots from "../dots-container/dots-container.component";

export const electricalContent = [
  {
    images: [electrical4, electrical1, electrical5, electrical2, electrical3],
    title: "Baggage Handling",
    id: "/electrical/baggage-handling",
    bullets: true,
    description: [
      {
        desc: "Player and Company has completed several Baggage Handling Systems (BHS) at the Hartsfield-Jackson International Atlanta Airport (the busiest airport in the world). We have provided these projects to a wide variety of Customers: Manufactures of BHS Systems, Integrators, Department of Aviation, Facility Maintenance Groups, Transportation Security Administration (TSA), U.S. Customs and Border Protection and Airline Companies. Player and Company has the capabilities to perform upgrades or expansions to existing operating systems, Electrical and Controls Installation, Turnkey Installation & Integration and Full System Decommissioning.",
      },

      {
        bullets: [
          "High Speed Transport",
          "Sortation",
          "Volume Management",
          "Load Balancing",
          "Bag Jam Detection",
          "Bag Counting",
          "Bag Tracking",
        ],
        desc: "A BHS is a type of conveyor system installed in airports to transport checked luggage from ticket counters to departure gates, from one gate to another for transfers and from arrival gates to the baggage-claim areas. A complete BHS has several characteristics, some of which are:",
      },
      {
        bullets: [
          "Complete Tracking",
          "Automatic Bag Routing",
          "Sortation Control",
          "Multi-user Functionality",
          "Screening image",
          "Baggage reconciliation",
          "Global Bag Tracking",
        ],
        desc: "The BHS is generally controlled by a multi-platform PLC-based control system. The control system can be configured to fit any airport. Common features of a BHS control system include:",
      },
      {
        bullets: [
          "Belted Conveyor",
          "Tilt Tray Sorters",
          "Claim Carousels",
          "Spirals and Turns",
          "Pushers",
          "Diverters",
          "Control Stations",
          "Photo Eyes",
          "Shaft Encoders",
          "Motor Control Panels",
          "PLC Cabinets",
          "Manual Encode Systems",
          "Human Machine Interface (HMI)",
        ],
        desc: "A high speed BHS in Airports are assembled using several different types of equipment.",
      },
      {
        desc: "The TSA inserted electronic baggage screening directly into the BHS after September 11, 2001. These systems are referred to as Checked Baggage Inspection System (CBIS). Within a CBIS the checked baggage is fed directly into Explosive Detection System (EDS) machines. The CBIS will sort baggage based on each bag’s security status which is assigned by an EDS machine or by a security screening operator. When a bag is not cleared by an EDS machine it is sent to a Checked Baggage Resolution Area (CBRA). Within the CBRA the TSA will further inspect the baggage via hand inspection and Explosives Trace Detection (ETD) machines. Once the alarmed bag has been cleared it is reintroduced into the BHS for further sortation.",
      },
      {
        desc: "Throughout the past several years, the construction and integration of Airport Baggage Handling Systems has evolved into to complex precision high speed conveyor equipment. Player and Company has experience with the construction of Baggage Handling Systems for more than two decades.",
      },
    ],
  },

  {
    images: [electrical6, electrical7],
    title: "Earth Moving Muscle",
    id: "/electrical/earth-moving-muscle",
    description: [
      {
        desc: "The BHS is generally controlled by a multi-platform PLC-based control system. The control system can be configured to fit any airport. Common features of a BHS control system include:",
      },
      {
        desc: "The environmentally friendly conveyor snakes 51/2 miles through the countryside from quarries and dirt pits south of the airport to four discharge areas at the project site. Its multiple stages are driven by an electric motor system installed by Player and Company. Three years will be needed for the project. It is estimated that during that time the conveyor will save millions over the cost of trucking the fill to the site while simultaneously eliminating the noise and hazards of the millions of truck trips that would be required to do the job.",
      },
      {
        desc: "The conveyor network with its six-foot wide belting system is composed of hundreds of segments powered by numerous 500 h.p. electric motors with supporting installations and controls.",
      },
      {
        desc: "The conveyor transports its earth and rock fill uphill and down and across two major thoroughfares. The airport conveyor system is being studied by other communities facing similar problems in moving huge amounts of fill through built-up urban industrial areas.",
      },
    ],
  },
  {
    images: [electrical8, electrical9, electrical10],
    title: "In House System Powers Resort",
    id: "/electrical/in-house-system-powers-resort",
    description: [
      {
        desc: "Player and Company has constructed and installed the prime power system for a new 1300-room hotel near Montego Bay, Jamaica. The plant was needed because Jamaica’s power company could not provide adequate power to meet the demands of the new resort.",
      },
      {
        desc: "The system consists of three 1.25 megawatt generators and one 1.85 megawatt back-up generator for use in a storm catastrophe of other emergency. A storage capacity for 90,000 gallons of diesel fuel will keep the plant operating for 20 days. The generators are set on spring isolators with the muffler and exhaust piping routed to the building exterior. Each generator has a 150 gallon day tank, fuel cooler, exhaust fan, remote radiator and a heat recovery system that provides heated water to the hotel. The electrical system consists of parallelling switchgear, redundant house power supply by 480 volt transformers and a 5 kilovolt distribution system. Switchgear, the motor control center, transformers and wiring for the prime power system were installed by Player.",
      },
      {
        desc: "The fuel and water piping were fabricated in Player and Company’s Atlanta shop and shipped to the job site by containership along with all materials, tools and other equipment.",
      },
    ],
  },
  {
    images: [electrical11, electrical12, electrical13],
    title: "LNG System Instrumentation & Controls",
    id: "/electrical/lng-system-instrumentation-controls",
    description: [
      {
        desc: "Player and Company participated in the installation of this LNG facility and continues to perform upgrades and modifications as required by the owner.",
      },
      {
        desc: "Control Room operations allow for full distributed control systems with operators managing the liquefied natural gas plant from both the computer terminals and the panel board. Operators may also monitor plant security and hazard systems from this location. The schematic on top of the panel board provides operators with an overview of plant operations. With the company-wide network system, this location may assist three other liquefied natural gas plants with their plant operations and security.",
      },
      {
        desc: "The motor control provides power to motors associated with liquefaction, vaporization and boiloff systems.",
      },
    ],
  },
  {
    images: [electrical16, electrical14, electrical15],
    title: "Modern Wastewater Treatment",
    id: "/electrical/modern-wastewater-treatment",
    description: [
      {
        desc: "In suburban Atlanta, one of the nation’s most advanced wastewater reclamation facilities will treat 20 million gallons a day (mgd). A standby power plant for this modern facility was constructed by the electrical division of Player and Company, providing emergency power requirements, peak shaving and load management capabilities. Because of its extensive and modern process components, energy requirements of the plant are higher than those of most comparable treatment facilities.",
      },

      {
        desc: "Built around two diesel powered generators, the plant produces 4 megawatts of electricity. The standby facility, located adjacent to the electric utility company’s substation, has two 10,000 gallon tanks providing fuel storage for emergency operations. The auxiliary power plant is a critical safety factor, assuring that the treatment facility’s power needs will be met in the event of an interruption of electrical service. Because of the plant’s location, a premium is placed on reliability and performance, guarding against any failure which might result in accidental spills or discharges",
      },
      {
        desc: "The wastewater treatment plant, with a planned expansion to 60 mgd in the years ahead, features an ozone disinfection system and a large array of clarifiers and filter system spread over a 100 acre site. Effluent from the plant, produced under some of the strictest limits in the country, is piped to an outfall of the Chattahoochee River 20 miles away.",
      },
      {
        desc: "The site for the auxiliary power plant is shown in the top photo. The egg-shaped structure on the right is an anaerobic digester, which removes organics from sludge. Housing for the power plant is shown in the middle photo; onw of its diesel motors is shown in the bottom photo.",
      },
    ],
  },
  {
    images: [electrical17, electrical18],
    title: "Power on Standby",
    id: "/electrical/power-on-standby",
    description: [
      {
        desc: "Dependable emergency power generation is critical in the efficient operation of local utilities. Player and Company  has provided standby power installations in many areas of urban infrastructuress including water supply and waste water reclamation.",
      },

      {
        desc: "The standby power plant (top right) provides emergency power, peak sharing and load management capability for a reclamation facility that treats 20 million gallons of waste water daily. The design is based on four 1.5 megawatt diesel power generators rated at 5 KV.",
      },
      {
        desc: "Player has provided three of Atlanta’s raw water pumping stations with 2 megawatt standby units (bottom right). Each of the stations handles 25 million gallons of water each day.",
      },
    ],
  },
];

const ElectricalContent = () => {
  const { id } = useParams();
  const electrical = electricalContent.find(
    (x) => x.id === `/electrical/${id}`
  );

  return (
    <div className="electrical-content-component">
      <div className="challenges">
        <div className="challenges-content">
          <div className="title">{electrical.title}</div>
          <div className="subtext">
            {electrical.description
              .filter((x) => !x.bullets)
              .map((item) => (
                <div className="bullet">{item.desc}</div>
              ))}
          </div>
        </div>
        <div className="carousel-container">
          <div className="dots-top">
            <Dots />
          </div>
          <Carousel touch={true} wrap={true} interval={100000000}>
            {electrical.images.map((item) => (
              <Carousel.Item>
                <img src={item} className="d-block w-100" alt="Third slide" />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="dots-bottom">
            <Dots />
          </div>
        </div>
      </div>
      {electrical.description.filter((x) => x.bullets).length ? (
        <div className="bullets-container">
          {electrical.description
            .filter((x) => x.bullets)
            .map((item) => (
              <div className="bullet">
                <div className="desc">{item.desc}</div>
                <br />
                <div className="all-points">
                  {item.bullets.map((x) => (
                    <div className="point">
                      <img src={star} alt="" /> {x}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ElectricalContent;
