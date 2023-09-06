import { useEffect } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Video } from "cloudinary-react";

const About = ({ themeState }) => {
  return (
    <>
      <div className="container">
        <div className=" intro">
          <h1 className="biggest">Who are we?</h1>
          <DefaultButton notShow outlined>
            find out
          </DefaultButton>
        </div>
        <section className="video-section cont-reset">
          <GsapScale value="1.5">
            <Video
              controls
              autoPlay
              paused
              muted
              className="the-video"
              publicId="https://res.cloudinary.com/kaizen-img/video/upload/v1693789196/about.mp4"
              quality="30"
            />
          </GsapScale>
        </section>
        <section className="ab-context">
          <Reveal
            repeat
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
          <Reveal repeat trigger={<div style={{ overflow: "hidden" }} />}>
            <Tween from={{ y: "200px", opacity: "0" }}>
              <p>
                Built on a unique model of relentless dedication to detail and
                service, our team is on the front-lines of developing and
                redefining integrated systems delivery in Ghana. Over years, we
                have worked with many clients across several industries and on
                several projects in the Digital Audio Visuals and corporate
                staging industry here in Ghana. <br />
                <br /> Our unique business culture and highly adaptable
                perspective has made us the agency of choice for true
                outstanding delivery. We provide not only the most feature-rich
                services but are intuitive in our operations. From our
                pioneering position as the nationʼs first campus digital signage
                service provider and having engaged thousands of audiences
                through our tailored webcast services, we have the experience
                and light- heartedness to make your next project truly
                outstanding.
              </p>
            </Tween>
          </Reveal>
          <DefaultButton outlined>Book a service</DefaultButton>
        </section>

        {/* counter section not going to be used */}
        {/* <section className="ab-count">
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
        </section> */}
      </div>
    </>
  );
};

export default About;
