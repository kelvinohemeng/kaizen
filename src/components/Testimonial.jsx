import React from "react";
import "../App.scss";

export const Testimonial = ({ name, rating, statement }) => {
  return (
    <div className=" max-w-[400px]  p-3 bg-[#F7F7F7] rounded-lg  hover:scale-105 hover:rotate-2 transition-all duration-300">
      <div className="flex items-center gap-4 pb-5">
        <div className="w-[30px] bg-gray-500 aspect-square rounded-full"></div>
        <p>{name && name}</p>
        <p className="text-[11px]">{rating && rating}</p>
      </div>
      <p className="text-sm">{statement && statement}</p>
    </div>
  );
};
export const TestimonialProj = ({ name, rating, statement }) => {
  return (
    <div className=" max-w-[600px] w-full  p-3 bg-kaizen-black rounded-lg  transition-all duration-300">
      <div className="flex items-center gap-4 pb-5">
        <div className="w-[30px] bg-gray-100 aspect-square rounded-full"></div>
        <p className="text-white">{name && name}</p>
        <p className="text-[11px] text-white">{rating && rating}</p>
      </div>
      <p className="text-sm text-white">
        {statement &&
          statement.split("\n\n").map((paragraph, pIndex) => {
            return (
              <span>
                {paragraph} <br /> <br />
              </span>
            );
          })}
      </p>
    </div>
  );
};
