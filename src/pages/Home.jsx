import React from "react";
import "../styles/home.css";
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
    <main className="home__">

      <section className="home__promo container">
        <div className="home__promo-content">
          <h1 className="home__promo-title">
            TODAY ONLY! Special offer for Mother's Day — 20% OFF
          </h1>
        </div>
      </section>


      <Banner />


      <Delivery />


      <Card />


      <Information />


      <Aboutus />


      <Info />


      <section className="instagram-section container">
        <Follow />
        <Foto />
      </section>
    </main>
  );
}

export default Home;
