import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GsapScaleCus = ({ value, endValue, children }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // gsap
    const element = ref.current;
    const containerElement = containerRef.current;

    // gsap.set(element, { scale: 0 });
    gsap.fromTo(
      element,

      { scale: 0.3, y: -1000, x: 700, rotate: 40 },
      {
        scale: 1,
        y: 0,
        x: 0,
        rotate: 0,
        scrollTrigger: {
          trigger: containerElement,
          pin: true,
          anticipatePin: 1,
          scrub: 4,
          // markers: true,
          start: "20% bottom",
          end: "top bottom",
        },
      }
      // opacity: 0,
    );
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
        pin: containerElement,
        anticipatePin: 1,
        scrub: 2,
        // markers: true,
        start: "20% bottom",
        end: "top bottom",
      },
      scale: value,
      // opacity: 0,
    });
  }, []);
  return (
    <div ref={containerRef} className=" container">
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
