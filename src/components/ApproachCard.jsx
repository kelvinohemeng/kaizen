import React, { useEffect } from "react";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { DisplaySomething } from "./DispaySomething";

export const ApproachCard = ({ identifyer, approachData }) => {
  // useEffect(() => {
  //   console.log(identifyer + 1);
  //   console.log(currentId);
  // });
  // const newIdentifyer = identifyer + 1;
  // const current = approachData.id;
  return (
    <>
      <div className=" app-card-cont" key={identifyer}>
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
        <Reveal repeat trigger={<div className="app-content" />}>
          <Tween
            from={{ y: "200px", opacity: "0" }}
            stagger={0.1}
            wrapper={<div style={{ overflow: "hidden", width: "100%" }} />}
          >
            <SplitWords wrapper={<h3 className="headings-md" />}>
              {approachData.title}
            </SplitWords>
          </Tween>
          {/* <Tween
            from={{ y: "200px", opacity: "0" }}
            stagger={0.1}
            wrapper={
              <div
                style={{
                  overflow: "hidden",
                  width: "100%",
                }}
              />
            }
          >
            <p>{approachData.context}</p>
          </Tween> */}
        </Reveal>
      </div>
    </>
  );
};
