import React from "react";
const Home = React.lazy(() => import("./pages/home/home"));
const Chemicals = React.lazy(() => import("./pages/chemicals/chemicals"));
const Strengths = React.lazy(() => import("./pages/strengths/strengths"));
const Natural = React.lazy(() => import("./pages/natural/natural"));
const Power = React.lazy(() => import("./pages/power/power"));
const Aviation = React.lazy(() => import("./pages/aviation/aviation"));
const Projects = React.lazy(() => import("./pages/projects/projects"));
const Electrical = React.lazy(() => import("./pages/electrical/electrical"));
const Contact = React.lazy(() => import("./pages/contact/contact"));
const IndividualProject = React.lazy(() =>
  import("./pages/individual-project/individual-project")
);

export const finalRoutes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: <Home />,
  },
  {
    path: "/our-strengths",
    name: "our-strengths",
    exact: true,
    component: <Strengths />,
  },
  {
    path: "/chemicals",
    name: "chemicals",
    exact: true,
    component: <Chemicals />,
  },
  {
    path: "/projects",
    name: "projects",
    exact: true,
    component: <Projects />,
  },
  {
    path: "/project/:id",
    name: "projects",
    exact: true,
    component: <IndividualProject />,
  },
  {
    path: "/electrical/:id",
    name: "electrical",
    exact: true,
    component: <Electrical />,
  },
  {
    path: "/natural-gas-compression-stations",
    name: "natural",
    exact: true,
    component: <Natural />,
  },
  {
    path: "/power-energy-utilities/:id",
    name: "natural",
    exact: true,
    component: <Power />,
  },
  {
    path: "/aviation/international-concourse-fueling-station",
    name: "natural",
    exact: true,
    component: <Aviation />,
  },
  {
    path: "/contact",
    name: "natural",
    exact: true,
    component: <Contact />,
  },
];
