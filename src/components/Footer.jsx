import { useEffect } from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "./Components";
import { Container } from "../utils/TailwindComps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = ({}) => {
  useEffect(() => {
    gsap.from(".kaizen-slide-infinite", {
      opacity: 0,
      scale: 2,
      y: 100,
      stagger: 0.05,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".kaizen-slide-infinite",
        // markers: true,
        scrub: 1,
        start: "top center",
        end: "center center",
      },
    });
  }, []);

  return (
    <footer className={`no-print  h-full  w-full bg-kaizen-white `}>
      <div className="w-full flex items-center flex-col justify-between  pt-[4rem]">
        <Container
          className={`grid grid-col-1 md:grid-cols-3 md:justify-between gap-5 w-full`}
        >
          <div className="justify-self-center md:justify-self-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="20"
              viewBox="0 0 31 24"
              fill="none"
            >
              <g clipPath="url(#clip0_3593_7416)">
                <path
                  d="M25.6818 2.71626L19.0683 9.01279L14.9291 12.9519L9.46404 18.1577C9.36659 18.2503 9.26052 18.3335 9.14722 18.4064C7.84828 19.2406 6.01947 18.3454 6.01947 16.7136V10.9182C6.01966 10.5568 6.11872 10.2021 6.3062 9.89161C6.49367 9.58113 6.7626 9.32639 7.08458 9.15429C7.40656 8.98218 7.76964 8.89911 8.13548 8.91384C8.50132 8.92857 8.85635 9.04056 9.16306 9.23797L14.019 12.292L18.1566 8.35131L6.05749 0.634875C3.4509 -1.04383 0 0.802981 0 3.87345V20.9319C0 22.8311 1.62605 24.0774 3.27507 23.9961C4.01953 23.9585 4.72412 23.6524 5.25516 23.136L15.5405 13.3452L25.3531 19.6636C27.6349 21.132 30.6597 19.5268 30.6756 16.8371L30.75 4.86019C30.7666 2.24556 27.5874 0.90228 25.6818 2.71626ZM26.5269 11.5664C26.526 11.7855 26.4653 12.0004 26.3511 12.1883C26.237 12.3763 26.0737 12.5303 25.8783 12.6344C25.683 12.7384 25.4628 12.7885 25.241 12.7795C25.0192 12.7704 24.804 12.7025 24.6181 12.5829L19.6797 9.40295L24.4454 4.86801C25.2287 4.12131 26.538 4.67175 26.5364 5.74763L26.5269 11.5664Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>

          <div className=" flex gap-8 justify-self-center">
            <Link className="text-black" to={`Projects`}>
              Projects
            </Link>
            <Link className="text-black" to={`Projects`}>
              About
            </Link>
            <Link className="text-black" to={`Projects`}>
              Services
            </Link>
            <Link className="text-black" to={`Projects`}>
              Book a service
            </Link>
          </div>

          <div className=" flex gap-3 justify-self-center md:justify-self-end">
            {/* facebook */}
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z"
                  fill="black"
                />
              </svg>
            </a>
            {/* Instagram */}
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                  fill="black"
                />
              </svg>
            </a>
            {/* X */}
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.9727 6.7174C20.5083 7.33692 19.9469 7.87733 19.3102 8.31776C19.3102 8.47959 19.3102 8.64142 19.3102 8.81225C19.3153 11.7511 18.1414 14.5691 16.0517 16.6345C13.9619 18.6999 11.1311 19.8399 8.19393 19.7989C6.49587 19.8046 4.81955 19.4169 3.2963 18.6661C3.21416 18.6302 3.16119 18.549 3.1615 18.4593V18.3604C3.1615 18.2313 3.26611 18.1267 3.39515 18.1267C5.0643 18.0716 6.6739 17.4929 7.99622 16.4724C6.48541 16.4419 5.12607 15.5469 4.50048 14.1707C4.46889 14.0956 4.47872 14.0093 4.52645 13.9432C4.57417 13.8771 4.65288 13.8407 4.73413 13.8471C5.1933 13.8932 5.65706 13.8505 6.10008 13.7212C4.43227 13.375 3.17909 11.9904 2.99974 10.2957C2.99337 10.2144 3.0298 10.1357 3.09588 10.0879C3.16195 10.0402 3.24812 10.0303 3.32326 10.062C3.77082 10.2595 4.25397 10.3635 4.74312 10.3676C3.28172 9.40846 2.65049 7.58405 3.20643 5.92622C3.26382 5.76513 3.40169 5.64612 3.56938 5.61294C3.73706 5.57975 3.90984 5.63728 4.0242 5.76439C5.99627 7.86325 8.70592 9.11396 11.5818 9.25279C11.5082 8.95885 11.472 8.65676 11.474 8.35372C11.5009 6.76472 12.4841 5.34921 13.9633 4.76987C15.4424 4.19054 17.1248 4.56203 18.2229 5.71044C18.9713 5.56785 19.6949 5.31645 20.3706 4.96421C20.4201 4.93331 20.4829 4.93331 20.5324 4.96421C20.5633 5.01373 20.5633 5.07652 20.5324 5.12604C20.2051 5.87552 19.6522 6.50412 18.9508 6.92419C19.565 6.85296 20.1684 6.70807 20.7481 6.49264C20.7969 6.45942 20.861 6.45942 20.9098 6.49264C20.9507 6.51134 20.9813 6.54711 20.9934 6.59042C21.0055 6.63373 20.9979 6.68018 20.9727 6.7174Z"
                  fill="black"
                />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </Container>
      </div>
      <div className="hidden kaizen-slide-infinite md:flex justify-center">
        <h1>kaizen</h1>
      </div>
      <div className="text-black py-[4rem] text-center flex flex-col md:flex-row gap-3 items-center justify-center">
        <div className="text-black">
          {" "}
          &copy;{new Date().getFullYear()} Kai Zen Design. All rights reserved.
        </div>
        <div className="space-x-4">
          <Link className="text-black" to={`/`}>
            Privacy Policy
          </Link>
          <Link className="text-black" to={`/`}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
