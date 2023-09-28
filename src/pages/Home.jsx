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
      <main>
        <section className="hero-section">
          <div className="container">
            {/* <GsapReveal> */}
            <h1 className="hidden md:block">
              Bring your vision <br /> to life
            </h1>
            <h1 className="block md:hidden">Bring your vision to life</h1>
            {/* <GsapReveal> */}
            <div className=" space-y-2">
              <Reveal repeat>
                <Tween from={{ opacity: 0, y: 100 }} duration={1}>
                  <p className="">
                    Take your event to the next level next level, watch as we
                    build your programme from our preparation to excution as we
                    embark you on something special
                  </p>
                </Tween>
              </Reveal>
              <div className="hero-btn-mobile">
                <DefaultButton linkTo="/booking" notShow color="white">
                  Book a service
                </DefaultButton>
              </div>
            </div>
          </div>
        </section>
        <section className="video-section og ">
          <GsapScaleCus value="1.5">
            <div className="w-full p-2 relative">
              <Video
                // controls
                autoPlay
                paused
                muted
                className="the-video"
                publicId="https://res.cloudinary.com/kaizen-img/video/upload/v1693790285/Adinkra_Overlay.mp4"
                quality="30"
                poster="https://res.cloudinary.com/kaizen-img/image/upload/v1691547177/kaizen-test/Forbes/00.jpg"
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
          {/* <div>
            <h3 className="headings">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse,
              voluptatum ratione ut dolor quasi optio laborum repellat eos.
              Pariatur.
            </h3>
          </div> */}
        </section>

        <section className="read-more-abt-us container">
          <div className="abs--">
            {/* <Image publicId="https://res.cloudinary.com/dfxayzhcf/image/upload/v1691350931/kaizen-test/abt_doh2xe.jpg" /> */}
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
          <div className="relative p-2">
            <div className="r-img ">
              <div className="abt-img ">
                <div className="abt-btn">
                  <Tween from={{ opacity: 0, y: 100 }} duration={1}>
                    <DefaultButton
                      outlined
                      linkTo="/about"
                      bColor="white"
                      color="white"
                    >
                      More about us
                    </DefaultButton>
                  </Tween>
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

        {/* the apporach section */}
        {/* <section className="approach">
          <div className="container">
            <GsapReveal>
              <h1 className="headings">Our Approach</h1>
            </GsapReveal>
            <div className="the-approaches">
              {approachData.map((approach, index) => (
                <>
                  <ApproachCard
                    identifyer={index}
                    approachData={approach}
                  />
                </>
              ))}
            </div>
          </div>
        </section> */}

        <section className="break container">
          <GsapScale value="8">
            <div className="the-video">
              <h1>Be heard loud and clear</h1>
            </div>
          </GsapScale>
        </section>

        <section className="recents " id="projects">
          <div className="container">
            <div className=" flex flex-col items-center">
              <h2 className="headings">See for your self</h2>
              <p className=" max-w-[40rem] text-center">
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
                        <span className="  font-bold">explore</span>
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
                        <span className="  font-bold">explore</span>
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
                        <span className="  font-bold">explore</span>
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
                        <span className="  font-bold">explore</span>
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
            <DefaultButton color="white">Contact</DefaultButton>
          </div>
        </section>
      </main>
      {footer}
    </>
  );
};

export default Home;
