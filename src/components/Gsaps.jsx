import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GsapScale = ({ value, endValue, children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  // useLayoutEffect(() => {
  //   let from = gsap.from(ref.current, {
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       pin: true,
  //       scrub: 1,
  //       markers: true,
  //       // start: "top center",
  //     },
  //     scale: 8,
  //   });

  //   return () => {
  //     from.kill();
  //   };
  // });
  useEffect(() => {
    // gsap
    const element = ref.current;
    const containerElement = containerRef.current;

    // gsap.set(element, { scale: 0 });
    gsap.from(element, {
      scrollTrigger: {
        trigger: containerElement,
        pin: true,
        anticipatePin: 1,
        scrub: 2,
        // markers: true,
        start: "30% center",
        end: "top top",
      },
      scale: value,
      // opacity: 0,
    });
  }, []);
  return (
    <div ref={containerRef} className="trigger-container container">
      {/* <div className=" scale"> */}
      <div ref={ref} className="scale-container">
        {children}
      </div>
      {/* </div> */}
    </div>
  );
};

export const GsapReveal = ({ children }) => {
  const ref = useRef(null);
  const timeline = gsap.timeline({ repeat: 0 });

  useEffect(() => {
    // gsap
    const element = ref.current;
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        // markers: true,
        start: "20% bottom ",
        // end: "top top",
      },
      // repeat: -1,
      opacity: 0,
      y: 100,
      duration: 1,
    });
  }, []);
  return <div ref={ref}>{children}</div>;
};
