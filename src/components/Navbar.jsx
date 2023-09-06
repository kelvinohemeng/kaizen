import { useState, useEffect, useRef } from "react";
import { DefaultButton } from "./Components";
import { Link, Outlet, useLocation } from "react-router-dom";
import { gsap } from "gsap";

export const Navbar = ({ toggleDarkMode, themeState }) => {
  const animateElementRef = useRef(null);
  const location = useLocation();
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
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > lastScrollY) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const toggleNav = () => {
    setNavState(!navState);
    // animateElement();
  };
  const deactivateNav = () => {
    navState ? setNavState(!navState) : setNavState(navState);
  };
  const navClasses = ` ${hideNav ? `hide-nav` : ""}`;
  // useEffect(() => {}, []);
  return (
    <nav ref={ref} className={navClasses}>
      <div
        className="nav-bg"
        style={navState ? { display: "block" } : { display: "none" }}
        onClick={deactivateNav}
      ></div>
      <div className="nav-contianer space-y-5">
        <div className="nav-nav ">
          <Link to="/" onClick={deactivateNav} className="route-show">
            <div className="logo">
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
              <span>
                <em>kaizen</em>
                {location.pathname}
              </span>
            </div>
          </Link>
          <div className="desk-links hidden md:flex">
            <Link to="/about">About us</Link>
            <Link to="/services">Service</Link>
            <Link to="/projects">Works</Link>
            <Link to="/">Book us</Link>
          </div>
          <div className="flex md:hidden">
            {/* <div className="mode " onClick={toggleDarkMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#100f0f"
                viewBox="0 0 256 256"
              >
                <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"></path>
              </svg>
            </div> */}
            <div
              className={navState ? `nav-toggler-off ` : `nav-toggler `}
              onClick={toggleNav}
            >
              <span></span>
              <span></span>
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
            <DefaultButton
              notShow
              outlined
              bColor="transparent"
              linkTo="/about"
            >
              about
            </DefaultButton>
          </Link>
          <Link
            to="/service"
            className="nav-btn-container"
            onClick={deactivateNav}
          >
            <DefaultButton
              notShow
              outlined
              bColor="transparent"
              linkTo="/services"
            >
              Service
            </DefaultButton>
          </Link>
          <Link
            to="/projects"
            className="nav-btn-container"
            onClick={deactivateNav}
          >
            <DefaultButton
              notShow
              outlined
              bColor="transparent"
              linkTo="/projects"
            >
              Works
            </DefaultButton>
          </Link>
          <Link to="/" className="nav-btn-container" onClick={deactivateNav}>
            <DefaultButton notShow outlined bColor="transparent" linkTo="/">
              Book us
            </DefaultButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};
