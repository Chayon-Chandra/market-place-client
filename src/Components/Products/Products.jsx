import React, { use } from "react";
import Container from "../Container/Container";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ productsPromiss }) => {
  const products = use(productsPromiss);

  return (
    <div className="bg-gray-200 py-10">
      <Container>
        <div className="text-center pb-7">
          <h1 className="latoBold text-3xl text-center  border-b-2 border-black-500 inline-block pb-1.5">
           All Jobs
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
