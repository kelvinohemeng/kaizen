import { useEffect } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Link } from "react-router-dom";

const Service = ({ themeState }) => {
  return (
    <div className="container">
      <div className=" intro">
        <h1 className="biggest">What we offer you</h1>
      </div>
      <section className="video-section cont-reset">
        <GsapScale value="1.3">
          <div className="the-video"></div>
        </GsapScale>
      </section>
      <div className="serv-c">
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
                Being intuitive in our concepts; minimalist in our design;
                ergonomic in our form; zen in our philosophy; ︎360º in our
                approach and process-oriented in our execution; our systems and
                solutions are always designed with your particular project in
                mind.
              </p>
            </Tween>
          </Reveal>
          <DefaultButton color="white" linkTo="/booking">
            Book a service
          </DefaultButton>
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
                With both the technology and support staff's capacity to handle
                anything from one (1) to over ten thousand (10,000) guests we
                stay in step with the ever changing dynamics of your event and
                the relevant technologies. In most cases, proactively
                pre-empting possible bottlenecks and incidents.
              </p>
            </Tween>
          </Reveal>
          <DefaultButton color="white" linkTo="/booking">
            Book a service
          </DefaultButton>
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
                Being intuitive in our concepts; minimalist in our design;
                ergonomic in our form; zen in our philosophy; ︎360º in our
                approach and process-oriented in our execution; our systems and
                solutions are always designed with your particular project in
                mind.
              </p>
            </Tween>
          </Reveal>
          <DefaultButton color="white" linkTo="/booking">
            Book a service
          </DefaultButton>
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
                We are a Systems Integration company with a primary focus on
                Audio-Visuals and Display Technology. Our areas of execution are
                in Conferencing (On-site & Telepresence), Collaboration and
                Meeting Spaces; Live Broadcast, Abstract AV Installations,
                Interactive Design and People Engagement.
              </p>
            </Tween>
          </Reveal>
          <DefaultButton color="white" linkTo="/booking">
            Book a service
          </DefaultButton>
        </section>
      </div>
      <div className="outro">
        <Link to="/projects">
          <h2 className="biggest">See for your self !</h2>
        </Link>
      </div>
    </div>
  );
};

export default Service;
