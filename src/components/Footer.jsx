import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "./Components";

export const Footer = () => {
  return (
    <footer>
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
          <div className="biggest-cta">
            <h1 className="headings">Let's Chat</h1>
            <DefaultButton outlined color="white" bColor="white">
              hop on a call with us.
            </DefaultButton>
          </div>
          <div className="social-ctas">
            <Link to="">LinkedIn</Link>
            <Link to="">Twitter</Link>
            <Link to="">Behance</Link>
          </div>
        </div>
        <div className="links">
          <p>©️2023 All rights reserved kaizen</p>
          <div className="linkss">
            <ul>
              <Link to="/about">
                <li>Privacy Policy</li>
              </Link>
              <Link to="/">
                <li>Terms of Service</li>
              </Link>
              <a href="#">
                <li>Back to top</li>
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
