import { useState, useEffect, useRef } from "react";
import { DefaultButton } from "./Components";
import { Link, Outlet, useLocation } from "react-router-dom";
import { gsap } from "gsap";

export const Navbar = ({ toggleDarkMode, themeState }) => {
  const animateElementRef = useRef(null);
  const location = useLocation();
  const [animateMode, setAnimateMode] = useState(false);
  const [navState, setNavState] = useState(false);

  const animateElement = () => {
    const element = animateElementRef.current.querySelectorAll(".btn");

    if (element) {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.04,
        }
      ); // Example animation
    }
  };
  const [hideNav, setHideNav] = useState(false);

  // nav scroll functionality
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     if (scrollY > lastScrollY) {
  //       setHideNav(true);
  //     } else {
  //       setHideNav(false);
  //     }

  //     setLastScrollY(scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  const toggleNav = () => {
    setNavState(!navState);
    // animateElement();
  };
  const deactivateNav = () => {
    navState ? setNavState(!navState) : setNavState(navState);
  };
  const handleThemeChange = () => {
    setAnimateMode(!animateMode);
    toggleDarkMode();
  };
  const navClasses = ` ${hideNav ? `hide-nav` : ""}`;
  // useEffect(() => {}, []);
  return (
    <div
      className="absolute top-[-10vh] md:top-[-15vh] 
    2xl:top-[-5vh] h-[100%] w-full pt-[10rem] pointer-events-none"
    >
      {" "}
      <nav className={`${navClasses} no-print `}>
        <div
          className="nav-bg"
          style={navState ? { display: "block" } : { display: "none" }}
          onClick={deactivateNav}
        ></div>
        <div className="container mx-auto">
          <div className="nav-nav   flex flex-col items-center space-y-5 ">
            <div
              className={`rounded-lg w-full py-2  duration-300  ${
                themeState ? " bg-kaizen-accent" : "bg-kaizen-accent"
              } `}
            >
              <a
                href="#projects"
                className=" w-full flex flex-col md:flex-row justify-between px-4 items-center"
              >
                <em className="font-normal not-italic text-kaizen-white ">
                  Checkout our most recent projects
                </em>
                <em className="font-normal not-italic text-kaizen-white hidden md:block ">
                  beta-release
                </em>
              </a>
            </div>
            <div className=" flex justify-between items-center w-full bg-kaizen-white p-[15px] md:p-[10px] rounded-lg">
              <Link
                to="/"
                onClick={deactivateNav}
                className=" flex items-center gap-3 flex-1 pl-2"
              >
                <div className="">
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
                        fill="#000000"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <span className=" text-2xl font-light text-kaizen-black not-italic hidden md:block">
                    <em className="text-kaizen-black not-italic">kaizen</em>
                    <em className="text-kaizen-black not-italic ">
                      {location.pathname}
                    </em>
                  </span>
                </div>
              </Link>
              <div className="desk-links flex-1 hidden md:flex justify-center gap-8 text-[1.2rem] items-center">
                <Link to="/about">About us</Link>
                <Link to="/services">Service</Link>
                <Link to="/projects">Portfolio</Link>
                <a href="/#faq">FAQs</a>
              </div>
              <div className="flex items-center justify-end gap-2 flex-1">
                <div className="flex md:hidden">
                  <div
                    className={navState ? `nav-toggler-off ` : `nav-toggler `}
                    onClick={toggleNav}
                  >
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className=" hidden md:block">
                  <DefaultButton
                    linkTo="/booking"
                    notShow
                    color="white"
                    background="#111214"
                  >
                    Get started
                  </DefaultButton>
                </div>
                {/* <div
                  onClick={handleThemeChange}
                  className={` w-[50px] relative aspect-square 
                ${
                  animateMode ? "bg-kaizen-black" : ""
                } flex justify-center overflow-hidden rounded-md`}
                >
                  <div
                    className={` flex flex-col gap-2 absolute p-2 duration-200 overflow-hidden  ${
                      animateMode ? "translate-y-[-45%]" : "translate-y-[0%]"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill=" white"
                      viewBox="0 0 256 256"
                    >
                      <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"></path>
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className={navState ? `row mt-10` : `hidden`}
            ref={animateElementRef}
          >
            <Link
              to="/about"
              className="nav-btn-container"
              onClick={deactivateNav}
            >
              About us
            </Link>
            <Link
              to="/services"
              className="nav-btn-container"
              onClick={deactivateNav}
            >
              Service
            </Link>
            <Link
              to="/projects"
              className="nav-btn-container"
              onClick={deactivateNav}
            >
              Portfolio
            </Link>
            <a
              href="#faq"
              className="nav-btn-container"
              onClick={deactivateNav}
            >
              FAQs
            </a>
            <div className=" w-full p-3">
              <DefaultButton
                // notShow
                color="white"
                background="#111214"
                onClick={deactivateNav}
              >
                Book a service
              </DefaultButton>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
