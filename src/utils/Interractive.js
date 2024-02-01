import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useInteractive = ({
  classNames,
  vertical,
  horizontal,
  opacity,
}) => {
  useEffect(() => {
    const targets = document.querySelectorAll(`.${classNames}`);

    targets.forEach((target) => {
      gsap.from(target, {
        y: vertical ? 100 : 0,
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

export const useBoxOverlay = ({ classNames }) => {
  useEffect(() => {
    const targets = document.querySelectorAll(`.${classNames}`);

    targets.forEach((target) => {
      const width = target.offsetWidth;
      const height = target.offsetHeight;

      target.style.setProperty("--overlayWidth", `${width}px`);
      target.style.setProperty("--overlayHeight", `${height}px`);

      gsap.to(target, {
        "--overlayHeight": 0,
        duration: 1,
        scrollTrigger: {
          trigger: target,
          start: "top 70%",
          end: "bottom center",
        },
      });
    });
  }, []);
};
