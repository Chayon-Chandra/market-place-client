import React, { use } from "react";
import LatestProductCard from "../LatestProductCard/LatestProductCard";
import Container from "../Container/Container";
import { Link } from "react-router";

const LatestProducts = ({ latestProductsPromiss }) => {
  const latestProducts = use(latestProductsPromiss);

  return (
    <div className="bg-gray-200 py-10">
      <Container>
        <div className="text-center py-5">
            <h1 className="latoBold text-3xl text-center  border-b-2 border-black-500 inline-block pb-1.5">Recent Jobs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 px-2">
          {latestProducts.map((latestProduct) => (
            <LatestProductCard
              key={latestProduct._id}
              latestProduct={latestProduct}
            ></LatestProductCard>
          ))}
        </div>
        <div className="flex justify-center items-center pt-10">
          <Link to="/all-Jobs" className="btn btn-outline btn-primary LatoSemibold text-2xl">Show All</Link>
        </div>
      </Container>
    </div>
  );
};

export default LatestProducts;
