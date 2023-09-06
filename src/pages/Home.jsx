import { useState } from "react";
import { Image, Video } from "cloudinary-react";
import { Reveal, Tween } from "react-gsap";
import { Link } from "react-router-dom";
// import "./App.scss";
import { DefaultButton } from "../components/Components";
import { GsapReveal, GsapScale, GsapScaleCus } from "../components/Gsaps";
import { Accordion } from "../components/Accordion";
import { Faq } from "../components/Faq";
import { ApproachCard } from "../components/ApproachCard";

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
const Home = ({ projects }) => {
  const [display, setDisplay] = useState(false);
  function toggleDisplay() {
    setDisplay(!display);
  }
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div>
            {/* <GsapReveal> */}
            <h1 className="biggest">Bring your vision to life</h1>
            {/* <GsapReveal> */}
            <Reveal repeat>
              <Tween from={{ opacity: 0, y: 100 }} duration={1}>
                <p>
                  Take your event to the next level next level, watch as we
                  build your programme from our preparation to excution as we
                  embark you on something special
                </p>
              </Tween>
            </Reveal>
            {/* </GsapReveal> */}
            {/* </GsapReveal> */}
            <div className="hero-btn-mobile">
              <DefaultButton notShow color="white">
                Book Service
              </DefaultButton>
            </div>
          </div>
        </div>
      </section>
      <section className="video-section og ">
        <GsapScaleCus value="1.5">
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
        <div className="r-img">
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
      </section>

      <Reveal repeat trigger={<section />}>
        <Tween from={{ opacity: 0, y: 100 }} duration={1}>
          <section className="services" id="service">
            <div className="container">
              <div className="left">
                <h2 className="headings">Service</h2>
                <DefaultButton outlined color="#3c4090" bColor="#3c4090">
                  Book a service
                </DefaultButton>
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
            {approachData.map((approach, index) => (
              <>
                <ApproachCard
                  identifyer={index}
                  // display={display}
                  approachData={approach}
                  // current={currentId}
                  // toggleDisplay={toggleDisplay}
                />
                {/* {!display ? (
                    <DisplaySomething
                      reverse={toggleDisplay}
                      text={approachData.title}
                      current={newIdentifyer}
                      extras={approachData}
                    />
                  ) : (
                    ""
                  )} */}
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="break container">
        <GsapScale value="5">
          <div className="the-video">
            <h1 className="biggest">We speak loud yet subtile</h1>
          </div>
        </GsapScale>
      </section>

      <section className="recents ">
        <div className="container">
          <div>
            <h2 className="headings">See for your self</h2>
          </div>
          <div className="r-works">
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link to={`/projects/${projects[30].id}`} className="ww">
                  <Image publicId={projects[30].images[0]} />
                  <div>
                    <h3>{projects[30].title}</h3>
                    {/* <p>Category</p> */}
                  </div>
                </Link>
              </Tween>
            </Reveal>
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link to={`/projects/${projects[10].id}`} className="ww">
                  <Image publicId={projects[10].images[0]} />
                  <div>
                    <h3>{projects[10].title}</h3>
                    {/* <p>Category</p> */}
                  </div>
                </Link>
              </Tween>
            </Reveal>
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link to={`/projects/${projects[1].id}`} className="ww">
                  <Image publicId={projects[1].images[0]} />
                  <div>
                    <h3>{projects[1].title}</h3>
                    {/* <p>Category</p> */}
                  </div>
                </Link>
              </Tween>
            </Reveal>
            <Reveal repeat>
              <Tween from={{ scale: 0, opacity: 1 }}>
                <Link to={`/projects/${projects[50].id}`} className="ww">
                  <Image publicId={projects[50].images[0]} />
                  <div>
                    <h3>{projects[50].title}</h3>
                    {/* <p>Category</p> */}
                  </div>
                </Link>
              </Tween>
            </Reveal>
          </div>
          <div className="cta-all-projects">
            <DefaultButton linkTo="/projects" color="white">
              See all projects
            </DefaultButton>
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
        <div className="outro">
          <Link to="/projects">
            <h2 className="biggest">Still got questions ?</h2>
          </Link>
          <DefaultButton color="white">Contact</DefaultButton>
        </div>
      </section>
    </>
  );
};

export default Home;
