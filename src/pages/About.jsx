import { useEffect } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";

export const About = ({ themeState }) => {
  return (
    <main className={themeState ? `darkmode` : ""}>
      <div className="container">
        <div className=" intro">
          <h1 className="biggest">Who are we?</h1>
        </div>
        <section className="video-section ">
          <GsapScale value="1.5">
            <div className="ab-img"></div>
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
          <p>
            Built on a unique model of relentless dedication to detail and
            service, our team is on the front-lines of developing and redefining
            integrated systems delivery in Ghana. Over years, we have worked
            with many clients across several industries and on several projects
            in the Digital Audio Visuals and corporate staging industry here in
            Ghana. <br />
            <br /> Our unique business culture and highly adaptable perspective
            has made us the agency of choice for true outstanding delivery. We
            provide not only the most feature-rich services but are intuitive in
            our operations. From our pioneering position as the nationʼs first
            campus digital signage service provider and having engaged thousands
            of audiences through our tailored webcast services, we have the
            experience and light- heartedness to make your next project truly
            outstanding.
          </p>
          <DefaultButton>Book a service</DefaultButton>
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
      </div>
    </main>
  );
};
