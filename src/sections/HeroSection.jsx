import { Image, Video } from "cloudinary-react";
import React, { useEffect } from "react";
import { SplitWordAnim } from "../components/Interactive";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-pin",
        pin: true,
        scrub: 2,
      },
    });

    timeline
      //   .set(".hero-text", { scale: 2 })
      .to(".hero-text", { opacity: 0, y: -100 })
      //   .from(".hero-pin", { scale: 0.5 })
      .to(".overlay", { opacity: 0.5 })
      .from(".hero-text-land", { opacity: 0 });

    document.body.style.overflowX = "hidden";

    return () => {
      // Remove overflow: hidden after the animation
      document.body.style.overflowX = "";
      // timeline.kill();
    };
  }, []);
  return (
    <header className="no-mb bg-kaizen-black">
      <div className="hero-pin max-w-screen h-screen relative ">
        <div className="">
          {" "}
          <div className="bg-kaizen-black scale-x-[115%] absolute overlay inset-0 z-[999]"></div>
          <Video
            className="w-full h-full absolute object-cover"
            controls={false}
            autoPlay
            muted={true}
            publicId="https://res.cloudinary.com/kaizen-img/video/upload/v1692526753/kaizen/projects/forbes/video.mp4"
          />
        </div>
        <div className="absolute z-[99999] pointer-event-none hero-text flex flex-col items-center justify-center w-full text-center min-h-[40rem] 2xl:min-h-[55rem]">
          <SplitWordAnim
            duration={2}
            textColor={`text-kaizen-white`}
            tag={`h1`}
            text={`Be heard loud and clear`}
          />
          <p className="animate-pulse text-white">keep scrolling down</p>
        </div>
        <div className="absolute z-[99999] pointer-event-none hero-text-land flex flex-col items-center justify-center w-full text-center min-h-[40rem] 2xl:min-h-[55rem]">
          <div className="">
            <Image
              className="max-w-[150px] contrast-100"
              publicId="https://res.cloudinary.com/kaizen-img/image/upload/v1706653520/kaizen/Asset_67_2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
