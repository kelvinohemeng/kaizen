import { useEffect } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Link } from "react-router-dom";

export const Service = ({ themeState }) => {
  return (
    <main className="service">
      <div className="container">
        <div className=" intro">
          <h1 className="biggest">What we offer you</h1>
        </div>
        <section className="video-section cont-reset">
          <GsapScale value="1.3">
            <div className="the-video"></div>
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
                  paddingBlock: "10px",
                }}
              />
            }
          >
            <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
              <SplitWords wrapper={<h2 style={{}} />}>
                Audio Visual Design
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
          <DefaultButton linkTo="/booking">Book a service</DefaultButton>
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
                  paddingBlock: "10px",
                }}
              />
            }
          >
            <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
              <SplitWords wrapper={<h2 style={{}} />}>Conferencing</SplitWords>
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
          <DefaultButton linkTo="/booking">Book a service</DefaultButton>
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
                  paddingBlock: "10px",
                }}
              />
            }
          >
            <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
              <SplitWords wrapper={<h2 style={{}} />}>
                Interractive Media
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
          <DefaultButton linkTo="/booking">Book a service</DefaultButton>
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
                  paddingBlock: "10px",
                }}
              />
            }
          >
            <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
              <SplitWords wrapper={<h2 style={{}} />}>
                System Intergration
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
          <DefaultButton linkTo="/booking">Book a service</DefaultButton>
        </section>
        <div className="outro">
          <Link to="/projects">
            <h2 className="biggest">See for your self !</h2>
          </Link>
        </div>
      </div>
    </main>
  );
};
