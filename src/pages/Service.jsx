import { useEffect } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Link } from "react-router-dom";
import { Video } from "cloudinary-react";

const Service = ({ themeState, footer }) => {
  return (
    <>
      <main className=" overflow-hidden py-[10vh]">
        <div className="container ">
          <div className="  mt-[50vh] text-center py-[5vh] block md:hidden">
            <h1>What we offer you</h1>
          </div>
          <div className=" intro my-[20vh] text-center hidden md:flex">
            <h1>What we offer you</h1>
          </div>
          <section className="video-section cont-reset hidden md:block">
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
                <div className="absolute inset-0 bg-[#000796] z-[-2] rounded-[20px] bg-opacity-50"></div>
                <div className="absolute inset-0 bg-[#000796] z-[-2] rounded-[20px] bg-opacity-50 animate-pulse scale-[1.01] scale-y-[1.02]"></div>
              </div>
            </GsapScale>
          </section>
          <section className="block md:hidden video-section mb-[10vh] md:mb-[0]">
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
              <div className="absolute inset-0 bg-[#000796] z-[-2] rounded-[20px] bg-opacity-50"></div>
              <div className="absolute inset-0 bg-[#000796] z-[-2] rounded-[20px] bg-opacity-50 animate-pulse scale-[1.01] scale-y-[1.02]"></div>
            </div>
          </section>
          <div className="serv-c">
            <section className="ab-context md:px-[100px] py-[20vh] flex flex-col md:flex-row gap-[2rem] md:gap-[6rem]">
              <div className=" h-full space-y-8 flex-1">
                <Reveal
                  trigger={
                    <div
                      className="chars-wrapper w-fit "
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "20px",
                        overflow: "hidden",
                        paddingBlock: "10px",
                      }}
                    />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
                    <SplitWords wrapper={<h2 />}>
                      Audio Visual Design
                    </SplitWords>
                  </Tween>
                </Reveal>
                <Reveal
                  trigger={
                    <div style={{ overflow: "hidden", paddingBlock: "20px" }} />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }}>
                    <p>
                      Being intuitive in our concepts; minimalist in our design;
                      ergonomic in our form; zen in our philosophy; ︎360º in our
                      approach and process-oriented in our execution; our
                      systems and solutions are always designed with your
                      particular project in mind.
                    </p>
                  </Tween>
                </Reveal>
                <DefaultButton color="white" linkTo="/booking">
                  Book a service
                </DefaultButton>
              </div>
              <div
                className="flex-1 bg-gray-900 min-h-[300px] md:min-h-[500px] order-first md:order-last rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://iamadinkra.com/assets/img/projects/explo/05.jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </section>
            <section className="ab-context md:px-[100px] py-[20vh] flex flex-col md:flex-row gap-[2rem] md:gap-[6rem]">
              <div className=" h-full space-y-8 flex-1">
                <Reveal
                  trigger={
                    <div
                      className="chars-wrapper w-fit "
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "20px",
                        overflow: "hidden",
                        paddingBlock: "10px",
                      }}
                    />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
                    <SplitWords wrapper={<h2 />}>Conferencing</SplitWords>
                  </Tween>
                </Reveal>
                <Reveal
                  trigger={
                    <div style={{ overflow: "hidden", paddingBlock: "20px" }} />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }}>
                    <p>
                      With both the technology and support staff's capacity to
                      handle anything from one (1) to over ten thousand (10,000)
                      guests we stay in step with the ever changing dynamics of
                      your event and the relevant technologies. In most cases,
                      proactively pre-empting possible bottlenecks and
                      incidents.
                    </p>
                  </Tween>
                </Reveal>
                <DefaultButton color="white" linkTo="/booking">
                  Book a service
                </DefaultButton>
              </div>
              <div
                className="flex-1 bg-gray-900 min-h-[300px] md:min-h-[500px] order-first md:order-last rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://iamadinkra.com/assets/img/conferences_header/conferences_page_.jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </section>
            <section className="ab-context md:px-[100px] py-[20vh] flex flex-col md:flex-row gap-[2rem] md:gap-[6rem]">
              <div className=" h-full space-y-8 flex-1">
                <Reveal
                  trigger={
                    <div
                      className="chars-wrapper w-fit "
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "20px",
                        overflow: "hidden",
                        paddingBlock: "10px",
                      }}
                    />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
                    <SplitWords wrapper={<h2 />}>Interractive Media</SplitWords>
                  </Tween>
                </Reveal>
                <Reveal
                  trigger={
                    <div style={{ overflow: "hidden", paddingBlock: "20px" }} />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }}>
                    <p>
                      Being intuitive in our concepts; minimalist in our design;
                      ergonomic in our form; zen in our philosophy; ︎360º in our
                      approach and process-oriented in our execution; our
                      systems and solutions are always designed with your
                      particular project in mind.
                    </p>
                  </Tween>
                </Reveal>
                <DefaultButton color="white" linkTo="/booking">
                  Book a service
                </DefaultButton>
              </div>
              <div
                className="flex-1 bg-gray-900 min-h-[300px] md:min-h-[500px] order-first md:order-last rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://iamadinkra.com/assets/img/projects/scb_review/01.jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </section>
            <section className="ab-context md:px-[100px] py-[20vh] flex flex-col md:flex-row gap-[2rem] md:gap-[6rem]">
              <div className=" h-full space-y-8 flex-1">
                <Reveal
                  trigger={
                    <div
                      className="chars-wrapper w-fit "
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "20px",
                        overflow: "hidden",
                        paddingBlock: "10px",
                      }}
                    />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
                    <SplitWords wrapper={<h2 />}>
                      System Intergration
                    </SplitWords>
                  </Tween>
                </Reveal>
                <Reveal
                  trigger={
                    <div style={{ overflow: "hidden", paddingBlock: "20px" }} />
                  }
                >
                  <Tween from={{ y: "200px", opacity: "0" }}>
                    <p>
                      We are a Systems Integration company with a primary focus
                      on Audio-Visuals and Display Technology. Our areas of
                      execution are in Conferencing (On-site & Telepresence),
                      Collaboration and Meeting Spaces; Live Broadcast, Abstract
                      AV Installations, Interactive Design and People
                      Engagement.
                    </p>
                  </Tween>
                </Reveal>
                <DefaultButton color="white" linkTo="/booking">
                  Book a service
                </DefaultButton>
              </div>
              <div
                className="flex-1 bg-gray-900 min-h-[300px] md:min-h-[500px] order-first md:order-last rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://iamadinkra.com/assets/img/projects/airport/03.jpg")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </section>
          </div>
          <Link to="/projects">
            <div className="outro">
              <div className="">
                <h2>See for your self !</h2>
              </div>
              <p className=" pt-[2rem]">
                visit our project section to see what we have done
              </p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Service;
