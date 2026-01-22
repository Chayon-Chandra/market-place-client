import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { _id, title, postedBy, image } = product;

  return (
    <motion.div
    className="card bg-base-100 shadow-sm"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.3)" }} 
    >
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl w-96 h-52" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title LatoSemibold text-2xl">{postedBy}</h2>
          <p className="LatoRegular text-xl">{title}</p>
          <div className="card-actions">
            <Link
              to={`/job-details/${_id}`}
              className="btn btn-outline btn-primary LatoRegular text-xl"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
