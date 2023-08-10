import React from "react";
import { Image } from "cloudinary-react";

export const Testimonial = ({ testImg, person, statement }) => {
  return (
    <div className="testimonial">
      <div className="inner">
        <Image width="50" publicId={testImg} />
        <hr />
        <div>
          <h3>{person}</h3>
          {statement()}
        </div>
      </div>
    </div>
  );
};
