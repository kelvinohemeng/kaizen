import { useState } from "react";
import { Image, Video } from "cloudinary-react";
import { Reveal, Tween } from "react-gsap";
// import "./App.scss";
import { DefaultButton } from "../components/Components";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Accordion } from "../components/Accordion";
import { Faq } from "../components/Faq";
import { ApproachCard } from "../components/ApproachCard";
import { Footer } from "../components/Footer";

export const Home = ({ themeState }) => {
  return (
    <>
      <main className={themeState ? `darkmode` : ""}>
        <section className="hero-section">
          <div className="container">
            <div className="hero-left">
              {/* <GsapReveal> */}
              <h1 className="biggest">
                From Ideating <br /> to production
              </h1>
              {/* <GsapReveal> */}
              <Reveal repeat>
                <Tween from={{ opacity: 0, y: 100 }} duration={1}>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat fuga reprehenderit voluptas eveniet accusamus ipsa
                    minima labore nihil dolorum eum?
                  </p>
                </Tween>
              </Reveal>
              {/* </GsapReveal> */}
              {/* </GsapReveal> */}
              <div className="hero-btn-mobile">
                <DefaultButton>Book Service</DefaultButton>
              </div>
            </div>
            {/* <div className="hero-btn">
              <DefaultButton>Book Service</DefaultButton>
            </div> */}
          </div>
        </section>
        <section className="video-section ">
          {/* <a href="#">
            <h3>Watch video</h3>
          </a> */}
          <GsapScale value="1.3">
            <Video
              controls
              autoPlay
              paused={true}
              className="the-video"
              publicId="https://res.cloudinary.com/base-data/video/upload/v1691548246/kaizen-test/Forbes/forbes_djwrkl.mp4"
              quality="50"
              poster="https://res.cloudinary.com/base-data/image/upload/v1691547177/kaizen-test/Forbes/00.jpg"
            />
            {/* <div className="the-video"></div> */}
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/F3-lK_-PQr0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> */}
          </GsapScale>
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
          <div className="r-img">
            <div className="abt-img ">
              <div className="abt-btn">
                <Tween from={{ opacity: 0, y: 100 }} duration={1}>
                  <DefaultButton>Read more about us</DefaultButton>
                </Tween>
              </div>
              <div className="rmau">
                <Reveal repeat trigger={<div />}>
                  <Tween from={{ opacity: 0, y: 100 }} duration={1}>
                    <h2>
                      We are a creative audio visual agency that is dedicated to
                      executing professional and reliable services
                    </h2>
                  </Tween>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Reveal repeat trigger={<section />}>
          <Tween from={{ opacity: 0, y: 100 }} duration={1}>
            <section className="services" id="service">
              <div className="container">
                <div className="left">
                  <h2 className="headings">Service</h2>
                  <DefaultButton>Book a service</DefaultButton>
                </div>
                <div className="right">
                  <Accordion />
                </div>
              </div>
            </section>
          </Tween>
        </Reveal>
        <section className="approach">
          <div className="container">
            <GsapReveal>
              <h2 className="headings">Our Approach</h2>
            </GsapReveal>
            <div className="the-approaches">
              <ApproachCard
                title={"Emphatize"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime facilis, quibusdam delectus exercitationem cum accusantium"
                }
              />
              <ApproachCard
                title={"Ideate"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime facilis, quibusdam delectus exercitationem cum accusantium"
                }
              />
              <ApproachCard
                title={"Execute"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime facilis, quibusdam delectus exercitationem cum accusantium"
                }
              />
              <ApproachCard
                title={"Prototype"}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime facilis, quibusdam delectus exercitationem cum accusantium"
                }
              />
            </div>
          </div>
        </section>

        <section className="break container">
          <GsapScale value="5">
            <h1 className="biggest">We speak loud yet subtile</h1>
          </GsapScale>
        </section>

        <section className="recents ">
          <div className="container">
            <div>
              <h2 className="headings">Our Most recent Works</h2>
            </div>
            <div className="r-works">
              <div className="ww">
                <h3>Project name</h3>
              </div>
              <div className="ww">
                <h3>Project name</h3>
              </div>
              <div className="ww">
                <h3>Project name</h3>
              </div>
              <div className="ww">
                <h3>Project name</h3>
              </div>
            </div>
            <div className="cta-all-projects">
              <DefaultButton>See all projects</DefaultButton>
            </div>
          </div>
        </section>

        <section className="faq container">
          <div>
            <h2 className="headings">FAQs</h2>
          </div>
          <div className="faq-container">
            <Faq />
          </div>
          <div className="cta-contact">
            <h2>Still got questions ?</h2>
            <DefaultButton>Contact</DefaultButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
