import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Countdown = ({ targetNumber }) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const animatedValue = { number: 0 };

    // Create the timeline for the animation using GSAP's ScrollTrigger
    gsap.to(animatedValue, {
      number: targetNumber,
      duration: 1, // Duration of the animation in seconds
      onUpdate: () => {
        // Update the number in the component based on the animation progress
        element.innerText = Math.floor(animatedValue.number);
      },
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Animation will start when the top of the element is 80% inside the viewport
        end: "center center", // Animation will end when the element is at the center of the viewport
        // scrub: true, // Smoothly animates the element as you scroll
        // markers: true,
      },
    });
  }, [ref, targetNumber]);

  return <h2 ref={ref}>{targetNumber} +</h2>;
};

export default Countdown;
