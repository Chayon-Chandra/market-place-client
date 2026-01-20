import React from "react";
import Container from "../Container/Container";
import graphic from "../../assets/popularImage/gra.jpg";
import webDevlopment from "../../assets/popularImage/person-front.jpg";
import uiux from "../../assets/popularImage/representat.jpg";
import marketing from "../../assets/popularImage/document-marketing-.jpg";

const PopularCategories = () => {
  return (
    <div className="bg-gray-200 pb-10 ">
      <Container>
        <div className="text-center pb-10">
            <h1 className="latoBold text-3xl text-center  border-b-2 border-black-500 inline-block pb-1.5">Top Categories</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1st image */}
          <div className="relative  h-64 group overflow-hidden shadow-sm rounded-lg">
            <img
              src={graphic}
              alt="category"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0  bg-black/60 flex flex-col justify-center items-center text-white text-center p-4 transition-all duration-500 group-hover:opacity-0 group-active:opacity-0">
              <h2 className="text-2xl font-semibold">Graphic Design</h2>
              <p className="text-lg mt-2">
                Logos, banners, social media posts and brand identity designs.
              </p>
            </div>
          </div>
          {/* 2nd image */}
          <div className="relative  h-64 group overflow-hidden shadow-sm rounded-lg">
            <img
              src={webDevlopment}
              alt="category"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center p-4 transition-all duration-500 group-hover:opacity-0">
              <h2 className="text-2xl font-semibold">Web Development</h2>
              <p className="text-lg mt-2">
                Build modern websites and web apps using latest technologies.
              </p>
            </div>
          </div>
          {/* 3rd image */}
          <div className="relative  h-64 group overflow-hidden shadow-sm rounded-lg">
            <img
              src={uiux}
              alt="category"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center p-4 transition-all duration-500 group-hover:opacity-0">
              <h2 className="text-2xl font-semibold">UI / UX Design</h2>
              <p className="text-lg mt-2">
                User-friendly UI, wireframes, prototypes and UX research.
              </p>
            </div>
          </div>
          {/* 4th image */}
          <div className="relative  h-64 group overflow-hidden shadow-sm rounded-lg">
            <img
              src={marketing}
              alt="category"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center p-4 transition-all duration-500 group-hover:opacity-0">
              <h2 className="text-2xl font-semibold">Digital Marketing</h2>
              <p className="text-lg mt-2">
                SEO, social media marketing, Facebook & Google ads services.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularCategories;
