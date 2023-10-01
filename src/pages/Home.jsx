import { useState } from "react";
import { Image, Video } from "cloudinary-react";
import { Reveal, Tween } from "react-gsap";
import { Link } from "react-router-dom";
// import "./App.scss";
import { DefaultButton } from "../components/Components";
import { GsapReveal, GsapScale, GsapScaleCus } from "../components/Gsaps";
import { Accordion } from "../components/Accordion";
import { Faq } from "../components/Faq";
// import { ApproachCard } from "../components/ApproachCard";

const approachData = [
  {
    id: 1,
    title: "Empathise",
    context:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
  {
    id: 2,
    title: "Ideate",
    context:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
  {
    id: 3,
    title: "Prototype",
    context:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
  {
    id: 4,
    title: "Execute",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
];
const Home = ({ projects, themeState, footer }) => {
  const [display, setDisplay] = useState(false);
  function toggleDisplay() {
    setDisplay(!display);
  }
  return (
    <>
      <section className="hero-section pt-[20vh]">
        <div className="container">
          {/* <GsapReveal> */}
          <h1 className="hidden md:block ">
            Bring your vision <br /> to life
          </h1>
          <h1 className="block md:hidden text-center">
            Bring your vision to life
          </h1>
          {/* <GsapReveal> */}
          <div className=" space-y-2">
            <p className="">
              Take your event to the next level next level, watch as we build
              your programme from our preparation to excution as we embark you
              on something special
            </p>
            <div className="hero-btn-mobile">
              <DefaultButton linkTo="/booking" notShow color="white">
                Book a service
              </DefaultButton>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section hidden md:block">
        <GsapScaleCus value="1.5">
          <div className="w-full p-2 relative">
            <Video
              publicId="https://res.cloudinary.com/kaizen-img/video/upload/q_40/v1692457488/kaizen/show-reel.mp4"
              controls
              autoPlay
              quality={30}
              muted={true}
              className="the-video"
            />
            <div
              className={`absolute inset-0 ${
                themeState ? "bg-white" : "bg-kaizen-blue"
              } z-[-2] rounded-[20px] bg-opacity-50`}
            ></div>
            <div
              className={`absolute inset-0 ${
                themeState ? "bg-kaizen-white" : "bg-kaizen-blue"
              } z-[-2] rounded-[20px] bg-opacity-50 animate-pulse scale-[1.01] scale-y-[1.02]`}
            ></div>
          </div>
        </GsapScaleCus>
      </section>

      <section className="video-section container block md:hidden">
        <div className="w-full">
          <div className="relative p-2">
            <Video
              publicId="https://res.cloudinary.com/kaizen-img/video/upload/q_40/v1692457488/kaizen/show-reel.mp4"
              controls
              autoPlay
              quality={30}
              muted={true}
              className="the-video"
            />
            <div
              className={`absolute inset-0 ${
                themeState ? "bg-white" : "bg-kaizen-blue"
              } z-[-2] rounded-[20px] bg-opacity-50`}
            ></div>
            <div
              className={`absolute inset-0 ${
                themeState ? "bg-kaizen-white" : "bg-kaizen-blue"
              } z-[-2] rounded-[20px] bg-opacity-50 animate-pulse scale-[1.01] scale-y-[1.02]`}
            ></div>
          </div>
        </div>
        {/* <div>
            <h3 className="headings">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse,
              voluptatum ratione ut dolor quasi optio laborum repellat eos.
              Pariatur.
            </h3>
          </div> */}
      </section>

      <section className="read-more-abt-us relative container">
        <div className="relative w-full h-full p-2">
          <div
            className={`absolute inset-0 z-[10] ${
              themeState ? "bg-white" : "bg-kaizen-blue"
            } z-[-2] rounded-[20px] bg-opacity-50`}
          ></div>
          <div
            className={`absolute inset-0 z-[10] ${
              themeState ? "bg-kaizen-white" : "bg-kaizen-blue"
            } z-[-2] rounded-[20px] bg-opacity-50 animate-pulse scale-[1.01] scale-y-[1.02]`}
          ></div>
          <div className="r-img relative p-4 z-[99999]">
            <Image
              publicId="kaizen/b-rrf.jpg"
              className=" absolute inset-0 h-full object-cover w-full opacity-60  rounded-[20px]"
            />
            <div className="abt-img ">
              <div className="abt-btn">
                <DefaultButton
                  outlined
                  linkTo="/about"
                  bColor="white"
                  color="white"
                >
                  More about us
                </DefaultButton>
              </div>
              <Reveal repeat trigger={<div className="rmau" />}>
                <Tween from={{ opacity: 0, y: 100 }} duration={1}>
                  <h2 className="headings-md">
                    We are a creative audio visual agency that is dedicated to
                    executing professional and reliable services
                  </h2>
                </Tween>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="service">
        <div className="container">
          <div className="left">
            <h1 className=" text-kaizen-blue ">Service</h1>
            <DefaultButton
              outlined
              color={themeState ? "#f2edf4" : "#000796"}
              bColor={themeState ? "#f2edf4" : "#000796"}
              linkTo="/booking"
            >
              Book a service
            </DefaultButton>
          </div>
          <div className="right">
            <Accordion />
          </div>
        </div>
      </section>

      <section className="break overflow-hidden hidden md:flex">
        <GsapScale value="8">
          <div className="the-video">
            <h1>Be heard loud and clear</h1>
          </div>
        </GsapScale>
      </section>
      <section className=" h-[30vh] overflow-hidden flex items-center md:hidden">
        <div className=" text-center px-4">
          <h1>Be heard loud and clear</h1>
        </div>
      </section>

      <section className="recents hidden md:block " id="projects">
        <div className="container">
          <div className=" flex flex-col items-center">
            <h2 className="headings">See for your self</h2>
            <p className=" max-w-[20rem] md:max-w-[40rem] text-center">
              See for your self some projects we've worked on over the past
              recent years, and what client say about us.
            </p>
            <div className="cta-all-projects">
              <DefaultButton linkTo="/projects" color="white">
                See all projects
              </DefaultButton>
            </div>
          </div>
          <div className="r-works">
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link
                  to={`/projects/${projects[30].id}`}
                  className="ww bg-opacity-50 "
                >
                  <Image publicId={projects[30].images[0]} />
                  <div className="flex justify-between items-start">
                    <div className=" space-y-2">
                      <h4>{projects[30].title}</h4>
                      <p>{projects[30].category}</p>
                    </div>
                    <div className=" flex items-center gap-x-4">
                      <span className="  font-bold hidden md:block">
                        explore
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                      >
                        <path
                          d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                          fill={themeState ? "#ffff" : "#111214"}
                          stroke={themeState ? "#ffff" : "#111214"}
                          stroke-width="0.355092"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Tween>
            </Reveal>
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link
                  to={`/projects/${projects[10].id}`}
                  className="ww bg-opacity-50 "
                >
                  <Image publicId={projects[10].images[0]} />
                  <div className="flex justify-between items-start">
                    <div className=" space-y-2">
                      <h4>{projects[10].title}</h4>
                      <p>{projects[10].title}</p>
                    </div>
                    <div className=" flex items-center gap-x-4">
                      <span className="  font-bold hidden md:block">
                        explore
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                          fill={themeState ? "#ffff" : "#111214"}
                          stroke={themeState ? "#ffff" : "#111214"}
                          stroke-width="0.355092"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Tween>
            </Reveal>
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link
                  to={`/projects/${projects[1].id}`}
                  className="ww bg-opacity-50 "
                >
                  <Image publicId={projects[1].images[0]} />
                  <div className="flex justify-between items-start">
                    <div className=" space-y-2">
                      <h4>{projects[1].title}</h4>
                      <p>{projects[1].category}</p>
                    </div>
                    <div className=" flex items-center gap-x-4">
                      <span className="  font-bold hidden md:block">
                        explore
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                          fill={themeState ? "#ffff" : "#111214"}
                          stroke={themeState ? "#ffff" : "#111214"}
                          stroke-width="0.355092"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Tween>
            </Reveal>
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link
                  to={`/projects/${projects[50].id}`}
                  className="ww bg-opacity-50 "
                >
                  <Image publicId={projects[50].images[0]} />
                  <div className="flex justify-between items-start">
                    <div className=" space-y-2">
                      <h4>{projects[50].title}</h4>
                      <p>{projects[50].title}</p>
                    </div>
                    <div className=" flex items-center gap-x-4">
                      <span className="  font-bold hidden md:block">
                        explore
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                          fill={themeState ? "#ffff" : "#111214"}
                          stroke={themeState ? "#ffff" : "#111214"}
                          stroke-width="0.355092"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Tween>
            </Reveal>
          </div>
          {/* <div className="cta-all-projects">
            <DefaultButton linkTo="/projects" color="white">
              See all projects
            </DefaultButton>
          </div> */}
        </div>
      </section>
      <section className="recents block md:hidden " id="projects">
        <div className="container">
          <div className=" flex flex-col items-center">
            <h2 className="headings">See for your self</h2>
            <p className=" max-w-[20rem] md:max-w-[40rem] text-center">
              See for your self some projects we've worked on over the past
              recent years, and what client say about us.
            </p>
            <div className="cta-all-projects">
              <DefaultButton linkTo="/projects" color="white">
                See all projects
              </DefaultButton>
            </div>
          </div>
          <div className="r-works">
            <Link
              to={`/projects/${projects[30].id}`}
              className="ww bg-opacity-50 "
            >
              <Image publicId={projects[30].images[0]} />
              <div className="flex justify-between items-start">
                <div className=" space-y-2">
                  <h4>{projects[30].title}</h4>
                  <p>{projects[30].category}</p>
                </div>
                <div className=" flex items-center gap-x-4">
                  <span className="  font-bold hidden md:block">explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                      fill={themeState ? "#ffff" : "#111214"}
                      stroke={themeState ? "#ffff" : "#111214"}
                      stroke-width="0.355092"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link
              to={`/projects/${projects[10].id}`}
              className="ww bg-opacity-50 "
            >
              <Image publicId={projects[10].images[0]} />
              <div className="flex justify-between items-start">
                <div className=" space-y-2">
                  <h4>{projects[10].title}</h4>
                  <p>{projects[10].title}</p>
                </div>
                <div className=" flex items-center gap-x-4">
                  <span className="  font-bold hidden md:block">explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                      fill={themeState ? "#ffff" : "#111214"}
                      stroke={themeState ? "#ffff" : "#111214"}
                      stroke-width="0.355092"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link
              to={`/projects/${projects[1].id}`}
              className="ww bg-opacity-50 "
            >
              <Image publicId={projects[1].images[0]} />
              <div className="flex justify-between items-start">
                <div className=" space-y-2">
                  <h4>{projects[1].title}</h4>
                  <p>{projects[1].category}</p>
                </div>
                <div className=" flex items-center gap-x-4">
                  <span className="  font-bold hidden md:block">explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                      fill={themeState ? "#ffff" : "#111214"}
                      stroke={themeState ? "#ffff" : "#111214"}
                      stroke-width="0.355092"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link
              to={`/projects/${projects[50].id}`}
              className="ww bg-opacity-50 "
            >
              <Image publicId={projects[50].images[0]} />
              <div className="flex justify-between items-start">
                <div className=" space-y-2">
                  <h4>{projects[50].title}</h4>
                  <p>{projects[50].title}</p>
                </div>
                <div className=" flex items-center gap-x-4">
                  <span className="  font-bold hidden md:block">explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1.60175 13.1944L1.60182 13.1944L1.60625 13.19L11.7571 3.03918V10.5575C11.7571 10.7459 11.8319 10.9265 11.9651 11.0597C12.0983 11.1929 12.2789 11.2677 12.4673 11.2677C12.6556 11.2677 12.8362 11.1929 12.9694 11.0597C13.1026 10.9265 13.1774 10.7459 13.1774 10.5575V1.32512C13.1774 1.13677 13.1026 0.956128 12.9694 0.822943C12.8362 0.689757 12.6556 0.614935 12.4673 0.614935H3.23486C3.04651 0.614935 2.86587 0.689757 2.73269 0.822942C2.5995 0.956128 2.52468 1.13677 2.52468 1.32512C2.52468 1.51347 2.5995 1.69411 2.73269 1.82729C2.86587 1.96048 3.04651 2.0353 3.23486 2.0353H10.7532L0.602371 12.1861L0.602293 12.186L0.59802 12.1906C0.472574 12.3253 0.404279 12.5033 0.407526 12.6873C0.410772 12.8713 0.485305 13.0468 0.615423 13.1769C0.745541 13.3071 0.921084 13.3816 1.10507 13.3848C1.28906 13.3881 1.46712 13.3198 1.60175 13.1944Z"
                      fill={themeState ? "#ffff" : "#111214"}
                      stroke={themeState ? "#ffff" : "#111214"}
                      stroke-width="0.355092"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="cta-all-projects">
            <DefaultButton linkTo="/projects" color="white">
              See all projects
            </DefaultButton>
          </div> */}
        </div>
      </section>

      <section className="faq container" id="faq">
        <div>
          <h1 className="headings">FAQs</h1>
        </div>
        <div className="faq-container">
          <Faq />
        </div>
        <div className="outro">
          <Link to="/projects">
            <h2 className="">Still got questions?</h2>
          </Link>
          <DefaultButton color="white" linkTo="/booking">
            Contact
          </DefaultButton>
        </div>
      </section>
      {/* {footer} */}
    </>
  );
};

export default Home;
