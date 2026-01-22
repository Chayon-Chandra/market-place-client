import React from "react";
import { Link, useLoaderData } from "react-router";
import Container from "../Container/Container";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { toast } from "react-toastify";

const JobDetails = () => {
  const axiosSecure = useAxiosSecure();

  const handleAccept = async () => {
    const acceptedJob = {
      jobId: jobDetailsProducts._id,
      title: jobDetailsProducts.title,
      category: jobDetailsProducts.category,
      image: jobDetailsProducts.image,
      budget: jobDetailsProducts.budget,
      description: jobDetailsProducts.description,
      clientName: jobDetailsProducts.clientName,
      userEmail: jobDetailsProducts.userEmail,
      status: "accepted",
      createdAt: new Date(),
    };
    axiosSecure
      .post("/accepted-jobs", acceptedJob)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success(<p><h5 className="LatoRegular text-xl text-green-500">Job Accepted Successfully!</h5></p>) 
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const jobDetailsProducts = useLoaderData();
  const {
    title,
    category,
    image,
    budget,
    shortDescription,
    postedBy,
    experienceLevel,
    clientName,
    userEmail,
    description,
    createdAt,
  } = jobDetailsProducts;
  return (
    <div className="bg-gray-200">
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-2">
            <div className="rounded-xl bg-base-100 shadow-xl hover:scale-105 transition ease-in-out ">
              <img
                src={image}
                className="w-full rounded-xl border-2 border-blue-400"
              />
            </div>
            <div className="rounded-xl bg-base-100 shadow-xl hover:scale-105 transition ease-in-out h-full flex justify-center items-center py-3 border-2 border-blue-400">
              <div>
                <h2 className=" latoBold text-2xl text-center">
                  <span className="latoBold">Price: $</span>
                  {budget}
                </h2>
                <h2 className=" LatoSemibold text-2xl py-1 text-center">
                  <span className="latoBold">Name:</span> {postedBy}
                </h2>
                <p className="LatoRegular text-xl text-center">
                  <span className="latoBold">Category:</span> {category}
                </p>
                <p className="LatoRegular text-xl py-1 text-center">
                  <span className="latoBold">Title: </span>
                  {title}
                </p>
                <p className="LatoRegular text-xl text-center">
                  {shortDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="w-10/12 mx-auto">
            <div className="rounded-xl bg-base-100 shadow-xl hover:scale-105 transition ease-in-out h-full flex justify-center items-center px-2 py-5 mt-5 border-2 border-blue-400 ">
              <div>
                <p className="LatoRegular text-xl text-center">
                  <span className="latoBold">Level: </span>
                  {experienceLevel}{" "}
                </p>
                <p className="LatoRegular text-xl text-center">
                  <span className="latoBold">Client: </span>
                  {clientName}{" "}
                </p>
                <p className="LatoRegular text-xl text-center">
                  <span className="latoBold">E-mail: </span>
                  {userEmail}{" "}
                </p>
                <p className="LatoRegular text-xl text-center">
                  <span className="latoBold">Description: </span>
                  {description}{" "}
                </p>
                <p className="LatoRegular text-xl text-center">
                  <span className="latoBold">createdAt: </span>
                  {createdAt}{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-7">
              <Link
                to="/my-accepted-tasks"
                onClick={handleAccept}
                className="btn btn-outline btn-primary LatoSemibold text-2xl "
              >
                Accept
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobDetails;
