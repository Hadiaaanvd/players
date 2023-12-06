import React from "react";
import Banner from "../../components/banner/banner.component";
import HomeContent from "../../components/home-content/home-content.component";
import Associations from "../../components/associations/associations.component";
import HomeProjects from "../../components/home-projects/home-projects.component";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <HomeContent />
      <Associations />
      <HomeProjects />
    </div>
  );
};

export default Home;
