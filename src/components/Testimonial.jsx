import React from "react";
import "../App.scss";
import { Image } from "cloudinary-react";

const Testimonial = ({ testImg, person, statement }) => {
  return (
    <div className="testimonial">
      <div className="flex flex-col md:flex-row gap-[10px]">
        {testImg ? (
          <Image width="50" publicId={testImg} alt="testimonial-image" />
        ) : (
          ""
        )}
        <hr />
        <div className="space-y-4">
          <h3>{person}</h3>
          {statement()}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
