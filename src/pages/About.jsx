import { useEffect } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Video } from "cloudinary-react";

const About = ({ themeState, footer }) => {
  return (
    <>
      <main className=" overflow-hidden py-[10vh]">
        <div className="container">
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
          <section className="ab-context py-[20vh] md:px-[100px] space-y-11">
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
              outlined
              color={themeState ? "#f2edf4" : "#000796"}
              bColor={themeState ? "#f2edf4" : "#000796"}
            >
              Book a service
            </DefaultButton>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
