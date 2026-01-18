import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-[#F5F5F5] ">
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <img src={errorImg} alt="" />
          <h2 className="font-bold text-2xl text-center mt-3 py-3">
            Oops, page not found!
          </h2>
          <p className="font-normal text-xl text-center pb-3">
            The page you are looking for is not available.
          </p>
          <div className="text-center">
            <Link
            to="/"
            className="font-semibold text-xl btn "
          >
            Go Back!
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
