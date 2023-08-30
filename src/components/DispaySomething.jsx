import React, { useEffect } from "react";

export const DisplaySomething = ({ text, reverse, current, key, extras }) => {
  const findCurrentData = current && extras.id;
  useEffect(() => {
    console.log(current);
    console.log(extras);
    console.log(findCurrentData);
  });
  if (findCurrentData) {
    return (
      <div className="display-container" onClick={reverse}>
        <div className="container">{extras.title}</div>
      </div>
    );
  }
};
