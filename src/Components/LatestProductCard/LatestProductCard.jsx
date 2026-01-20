import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";


const LatestProductCard = ({ latestProduct }) => {
  const { _id, title, postedBy, image } = latestProduct;
  return (
    <Container>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl w-96 h-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title LatoSemibold text-2xl">{postedBy}</h2>
          <p className="LatoRegular text-xl">{title}</p>
          <div className="card-actions">
            <Link to={`/job-details/${_id}`} className="btn btn-outline btn-primary LatoRegular text-xl">Details</Link>
          </div>
        </div>
        
      </div>
    </Container>
  );
};

export default LatestProductCard;
