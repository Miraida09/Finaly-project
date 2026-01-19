import React from "react";
import "../styles/Home.css";
import Image6 from "../assets/svg/06.svg";

import Banner from "../components/Banner/Banner";
import Delivery from "../components/Delivery/Delivery";
import Card from "../components/Card/Card";
import Information from "../components/Information/Information";
import Aboutus from "../components/Aboutus/Aboutus";
import Info from "../components/Info/Info";
import Follow from "../components/Follow/Follow";
import Foto from "../components/Foto/Foto";

function Home() {
  return (
    <div className="home-container">
      <div className="Home">
        <h1>
          TODAY ONLY! Special offer for Mother’s Day — 20% OFF
        </h1>
        <img className="image" src={Image6} alt="Mother’s Day Offer" />
      </div>

      <div className="item"></div>

      <Banner />
      <Delivery />
      <Card />
      <Information />
      <Aboutus />
      <Info />
      <Follow />
      <Foto />
    </div>
  );
}

export default Home;
