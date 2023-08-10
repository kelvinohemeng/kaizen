import React from "react";

export const ApproachCard = ({ title, content }) => {
  return (
    <div className=" app-card-cont">
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M1 18.3538L18.3538 1M18.3538 1H1M18.3538 1V18.3538"
            stroke="#111214"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="app-content">
        <h3 className="headings-md">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};
