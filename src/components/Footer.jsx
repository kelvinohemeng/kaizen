import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "./Components";

export const Footer = ({ themeState }) => {
  return (
    <footer
      className={`no-print ${
        themeState
          ? "bg-kaizen-white text-kaizen-black"
          : "bg-kaizen-black text-kaizen-white"
      }`}
    >
      <div className="container">
        <div className="layer-up">
          <div className=" space-y-8">
            <h1 className=" text-center md:text-left">Let's Chat</h1>
            <div>
              <DefaultButton
                outlined
                // color="white"
                // bColor="white"
                color={themeState ? "#131313" : "#f2edf4"}
                bColor={themeState ? "#131313" : "#f2edf4"}
                linkTo="/booking"
              >
                Book us now
              </DefaultButton>
            </div>
          </div>
          <div className="social-ctas">
            <Link
              className={` flex ${
                themeState ? " text-kaizen-black" : " text-kaizen-white"
              }`}
              to=""
            >
              LinkedIn
            </Link>
            <Link
              className={` flex ${
                themeState ? " text-kaizen-black" : " text-kaizen-white"
              }`}
              to=""
            >
              Twitter
            </Link>
            <Link
              className={` flex ${
                themeState ? " text-kaizen-black" : " text-kaizen-white"
              }`}
              to=""
            >
              Instagram
            </Link>
          </div>
        </div>
        <div
          className={` py-[20px] w-full flex flex-col items-center md:flex-row justify-between md:items-start border-t-[1px] ${
            themeState
              ? "border-kaizen-black text-kaizen-black"
              : "border-kaizen-white text-kaizen-white"
          }`}
        >
          <p
            className={` flex gap-2${
              themeState ? " text-kaizen-black" : " text-kaizen-white"
            }`}
          >
            ©️2023 All rights reserved kaizen
          </p>
          <div>
            <ul className={` flex gap-2`}>
              <Link to="/about">
                <li
                  className={` flex gap-2${
                    themeState ? " text-kaizen-black" : " text-kaizen-white"
                  }`}
                >
                  Privacy Policy
                </li>
              </Link>
              <Link to="/">
                <li
                  className={` flex gap-2${
                    themeState ? " text-kaizen-black" : " text-kaizen-white"
                  }`}
                >
                  Terms of Service
                </li>
              </Link>
              <a href="#">
                <li
                  className={` flex gap-2${
                    themeState ? " text-kaizen-black" : " text-kaizen-white"
                  }`}
                >
                  Back to top
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="kaizen-slide-infinite">
        <h1>kaizen</h1>
        <h1>kaizen</h1>
        <h1>kaizen</h1>
        <h1>kaizen</h1>
      </div>
    </footer>
  );
};
