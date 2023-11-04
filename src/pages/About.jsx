import { useEffect } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Image, Video } from "cloudinary-react";
import { Link } from "react-router-dom";
import Testimonial from "../components/testimonial";

const About = ({ projects, themeState, footer }) => {
  return (
    <>
      <main className=" overflow-hidden py-[10vh]">
        <div className="container ">
          <div className="  mt-[50vh] py-[5vh] block md:hidden">
            <h1>Who are we?</h1>
          </div>
          <div className=" intro my-[20vh] hidden md:flex">
            <h1>Who are we?</h1>
          </div>
          <section className="video-section cont-reset">
            <GsapScale value="1.5">
              <div className="w-full p-2 relative">
                <Video
                  controls
                  autoPlay
                  paused
                  muted
                  className="the-video"
                  publicId="https://res.cloudinary.com/kaizen-img/video/upload/v1693789196/about.mp4"
                  quality="30"
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
            </GsapScale>
          </section>
          <section className="ab-context pt-[20vh] md:px-[100px] space-y-11">
            <Reveal
              trigger={
                <div
                  className="chars-wrapper"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    height: "100%",
                    gap: "20px",
                    overflow: "hidden",
                  }}
                />
              }
            >
              <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
                <SplitWords wrapper={<h2 style={{}} />}>
                  We deliver with unmatched professionalism
                </SplitWords>
              </Tween>
            </Reveal>
            <Reveal
              trigger={
                <div style={{ overflow: "hidden", paddingBlock: "40px" }} />
              }
            >
              <Tween from={{ y: "200px", opacity: "0" }}>
                <p>
                  Built on a unique model of relentless dedication to detail and
                  service, our team is on the front-lines of developing and
                  redefining integrated systems delivery in Ghana. Over years,
                  we have worked with many clients across several industries and
                  on several projects in the Digital Audio Visuals and corporate
                  staging industry here in Ghana. <br />
                  <br /> Our unique business culture and highly adaptable
                  perspective has made us the agency of choice for true
                  outstanding delivery. We provide not only the most
                  feature-rich services but are intuitive in our operations.
                  From our pioneering position as the nationʼs first campus
                  digital signage service provider and having engaged thousands
                  of audiences through our tailored webcast services, we have
                  the experience and light- heartedness to make your next
                  project truly outstanding.
                </p>
              </Tween>
            </Reveal>
            <DefaultButton
              linkTo="/booking"
              outlined
              color={themeState ? "#f2edf4" : "#000796"}
              bColor={themeState ? "#f2edf4" : "#000796"}
            >
              Book a service
            </DefaultButton>
          </section>
          {/* <div className="experience py-[10vh] space-y-[4rem]">
            <section className=" ">
              <h2>Our numbers don't lie</h2>
            </section>
            <section className="ab-count">
              <div className="c-p">
                <span>
                  <Countdown targetNumber={400} />
                  <h2>+</h2>
                </span>
                <p>Completed Projects</p>
              </div>
              <div className="c-p">
                <span>
                  <Countdown targetNumber={700} />
                  <h2>+</h2>
                </span>
                <p>Clients Served</p>
              </div>
              <div className="c-p">
                <span>
                  <Countdown targetNumber={15} />
                  <h2>+</h2>
                </span>
                <p>Years of Experience</p>
              </div>
            </section>
          </div> */}
          <section className="relative py-[10vh] space-y-12  h-full overflow-hidden">
            <div className=" text-center py-[4rem] relative z-[99999]">
              <h3>What people say about us</h3>
            </div>
            <div className=" relative w-full h-full">
              <div className="flex justify-between absolute inset-0 ">
                <div className=" absolute left-[-250px] z-[999] -rotate-90 pointer-events-none">
                  <svg
                    width="603"
                    height="131"
                    viewBox="0 0 603 131"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="603"
                      height="131"
                      transform="matrix(1 0 0 -1 0 131)"
                      fill="url(#paint0_linear_4703_2300)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4703_2300"
                        x1="301.5"
                        y1="0"
                        x2="301.5"
                        y2="123"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.427083"
                          stop-color="white"
                          stop-opacity="0.42"
                        />
                        <stop offset="0.786458" stop-color="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className=" absolute right-[-250px] z-[999] rotate-90 pointer-events-none">
                  <svg
                    width="603"
                    height="131"
                    viewBox="0 0 603 131"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="603"
                      height="131"
                      transform="matrix(1 0 0 -1 0 131)"
                      fill="url(#paint0_linear_4703_2300)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4703_2300"
                        x1="301.5"
                        y1="0"
                        x2="301.5"
                        y2="123"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.427083"
                          stop-color="white"
                          stop-opacity="0.42"
                        />
                        <stop offset="0.786458" stop-color="white" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className=" flex gap-[30px] relative w-[200vw] md:w-screen animate-slide ">
                {projects.slice(0, 4).map((recent, index) => (
                  <Link className="" to={`/projects/${recent.id}`}>
                    <div className="">
                      {recent.testimonialData.map((testimonial) => (
                        <Testimonial
                          key={testimonial.id}
                          // testImg={testimonial.img}
                          person={testimonial.person}
                          statement={() => {
                            const statement =
                              testimonial.statement.split("\n\n");
                            return <p>{statement[0]}</p>;
                          }}
                        />
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
