import { useState, useEffect, useRef } from "react";
import { DefaultButton } from "../components/Components";
import { Accordion } from "../components/Accordion";
import Countdown from "../components/Countdown";
import { GsapReveal, GsapScale } from "../components/Gsaps";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Link } from "react-router-dom";
import { Video } from "cloudinary-react";

const Service = ({ themeState, footer }) => {
  // create a ref to the video element
  const videoRef = useRef(null);
  // create a state to store the video status
  const [isPlaying, setIsPlaying] = useState(true);

  // define a function to toggle the video play/pause
  const toggleVideo = () => {
    // check if the video is playing
    if (isPlaying) {
      // pause the video
      videoRef.current.pause();
      // update the state
      setIsPlaying(false);
    } else {
      // play the video
      videoRef.current.play();
      // update the state
      setIsPlaying(true);
    }
  };
  return (
    <>
      <main className=" overflow-hidden py-[10vh]">
        <div className="container ">
          <div className=" mt-[40vh]  md:mt-[50vh] text-center py-[5vh] block md:hidden">
            <h1>What we offer you</h1>
          </div>
          <div className=" intro my-[20vh] text-center hidden md:flex">
            <h1>What we offer you</h1>
          </div>
          <section className="video-section cont-reset hidden md:block">
            <GsapScale value="1.5">
              <div className="w-full p-2 relative">
                <video
                  ref={videoRef}
                  className="the-video"
                  autoPlay={true}
                  // controls
                  muted={false}
                >
                  <source src="https://res.cloudinary.com/kaizen-img/video/upload/v1693789196/about.mp4" />
                </video>
                <div className=" absolute top-0 w-full h-full flex items-end justify-start p-10 z-[99999999] pointer-events-none">
                  <button
                    onClick={toggleVideo}
                    className=" text-white pointer-events-auto"
                  >
                    {isPlaying ? (
                      <span className=" flex gap-4 items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
                        </svg>
                        <span className=" text-white">Pause Video</span>
                      </span>
                    ) : (
                      <span className=" flex gap-4 items-center ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                        </svg>
                        <span className=" text-white">Play Video</span>
                      </span>
                    )}
                  </button>
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
            </GsapScale>
          </section>
          <section className="block md:hidden video-section mb-[10vh] md:mb-[0]">
            <div className="w-full p-2 relative">
              <video
                className="the-video"
                autoPlay={true}
                controls
                muted={false}
              >
                <source src="https://res.cloudinary.com/kaizen-img/video/upload/v1693789196/about.mp4" />
              </video>
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
