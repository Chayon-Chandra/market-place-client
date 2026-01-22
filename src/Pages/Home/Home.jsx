import React from "react";
import Banner from "../../Components/Banner/Banner";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import PopularCategories from "../../Components/PopularCategories/PopularCategories";
import About from "../../Components/About/About";

const latestProductsPromiss = fetch(
  "https://market-place-api-server.vercel.app/latest-products",
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestProducts
        latestProductsPromiss={latestProductsPromiss}
      ></LatestProducts>
      <PopularCategories></PopularCategories>
      <About></About>
    </div>
  );
};

export default Home;
