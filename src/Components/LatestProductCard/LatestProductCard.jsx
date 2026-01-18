import React from "react";
import Container from "../Container/Container";


const LatestProductCard = ({ latestProduct }) => {
  const { _id, title, postedBy, coverImage } = latestProduct;
  return (
    <Container>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={coverImage} className="rounded-xl w-96 h-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title LatoSemibold text-2xl">{postedBy}</h2>
          <p className="LatoRegular text-xl">{title}</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-primary LatoRegular text-xl">Details</button>
          </div>
        </div>
        
      </div>
    </Container>
  );
};

export default LatestProductCard;
