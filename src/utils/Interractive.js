import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useInteractive = ({ classNames, vertical, horizontal, opacity }) => {
  useEffect(() => {
    const targets = document.querySelectorAll(`.${classNames}`);

    targets.forEach((target) => {
      gsap.from(target, {
        y: vertical ? -100 : 0,
        x: horizontal ? -100 : 0,
        opacity: opacity,
        duration: 1,
        scrollTrigger: {
          trigger: target,
          start: "top 70%",
          end: "bottom center",
        },
      });
    });
  }, [classNames, vertical, horizontal, opacity]);

  return { classNames };
};

export default useInteractive;
