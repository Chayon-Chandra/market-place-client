import React from "react";
import Products from "../../Components/Products/Products";

const productsPromiss = fetch(
  "https://market-place-api-server.vercel.app/products",
).then((res) => res.json());

const AllJobs = () => {
  return (
    <div>
      <Products productsPromiss={productsPromiss}></Products>
    </div>
  );
};

export default AllJobs;
