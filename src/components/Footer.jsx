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
      <div className="abs--">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1187"
          height="1117"
          viewBox="0 0 1187 1117"
          fill="none"
        >
          <g filter="url(#filter0_f_4103_7871)">
            <path
              d="M866.745 835.697C774.209 915.068 657.75 1024.3 531.272 1016.2C404.794 1008.09 145.664 915.058 107.877 787.065C70.0899 659.071 193.705 359.965 304.55 248.236C415.394 136.507 642.62 68.0702 772.943 116.692C903.267 165.314 1070.86 420.133 1086.49 539.968"
              fill="url(#paint0_linear_4103_7871)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4103_7871"
              x="0.932617"
              y="0.80957"
              width="1185.56"
              height="1115.81"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_4103_7871"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4103_7871"
              x1="458.275"
              y1="141.833"
              x2="684.742"
              y2="987.018"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A480FF" />
              <stop offset="1" stopColor="#000796" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="abs--">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1187"
          height="1117"
          viewBox="0 0 1187 1117"
          fill="none"
        >
          <g filter="url(#filter0_f_4103_7871)">
            <path
              d="M866.745 835.697C774.209 915.068 657.75 1024.3 531.272 1016.2C404.794 1008.09 145.664 915.058 107.877 787.065C70.0899 659.071 193.705 359.965 304.55 248.236C415.394 136.507 642.62 68.0702 772.943 116.692C903.267 165.314 1070.86 420.133 1086.49 539.968"
              fill="url(#paint0_linear_4103_7871)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4103_7871"
              x="0.932617"
              y="0.80957"
              width="1185.56"
              height="1115.81"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_4103_7871"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4103_7871"
              x1="458.275"
              y1="141.833"
              x2="684.742"
              y2="987.018"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A480FF" />
              <stop offset="1" stopColor="#000796" />
            </linearGradient>
          </defs>
        </svg>
      </div>
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
              >
                hop on a call with us.
              </DefaultButton>
            </div>
          </div>
          <div className="social-ctas">
            <Link
              className={` flex gap-2${
                themeState ? " text-kaizen-black" : " text-kaizen-white"
              }`}
              to=""
            >
              LinkedIn
            </Link>
            <Link
              className={` flex gap-2${
                themeState ? " text-kaizen-black" : " text-kaizen-white"
              }`}
              to=""
            >
              Twitter
            </Link>
            <Link
              className={` flex gap-2${
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
