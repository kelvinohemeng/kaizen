import React from "react";

export const Container = ({ inner, outerDivColor, children, className }) => {
  return (
    <div
      className={`${inner ? `w-max` : `w-screen`} ${
        !inner && `bg-${outerDivColor}`
      } h-full`}
    >
      <div className="container mx-auto px-4 md:px-8 h-full">
        <div className={`${className}`}>{children}</div>
      </div>
    </div>
  );
};
