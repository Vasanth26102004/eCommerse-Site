import React from "react";
import "./Shop.css";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offers/Offers";
import NewCollection from "./../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
