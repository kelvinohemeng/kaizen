import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SplitTextAnim = ({ text, className }) => {
  const charRefs = useRef([]);

  useEffect(() => {
    // Select all the characters using the refs
    const chars = charRefs.current.flat();

    // Check if GSAP is available and if there are characters to animate
    if (gsap && chars.length > 0) {
      gsap.from(chars, {
        y: -200,
        duration: 0.5,
        stagger: 0.02,
        ease: "expo.out",
        scrollTrigger: {
          trigger: chars,
          // markers: true,
          start: "center center",
          end: "bottom top",
          // toggleActions: "restart none restart none",
        },
      });
    }
  }, [text]); // Add 'text' as a dependency to re-run the effect when the text changes

  return (
    <span className="block">
      <span className={className}>
        {/* Word splitting */}
        {text.split(" ").map((word, i) => (
          <span key={i} className=" ">
            {" "}
            <span className="inline-flex w-max px-[2px] overflow-hidden">
              {/* character splitting */}
              {word.split("").map((char, j) => (
                <span
                  className="w-max chars"
                  key={j}
                  ref={(el) =>
                    (charRefs.current[i] = [...(charRefs.current[i] || []), el])
                  }
                >
                  {char}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
};

export const SplitWordAnim = ({
  text,
  fontSize,
  tag,
  duration,
  from,
  textColor,
}) => {
  const wordRef = useRef(null);

  useEffect(() => {
    const animateWords = () => {
      const word = wordRef.current.querySelectorAll(".word");

      gsap.from(word, {
        // opacity: 0,
        y: from === "top" ? -300 : from === "bottom" ? 300 : -300,
        duration: duration ? duration : 0.8,
        stagger: duration ? duration / 10 : 0.05,
        ease: "expo.out",
        scrollTrigger: {
          trigger: wordRef.current,
          // markers: true,
          start: "top 70%",
          end: "bottom center",
        },
      });

      return () => {
        // gsap.killTweensOf(wordRef.current);
        ScrollTrigger.clearTrigger(wordRef.current);
      };
    };
    animateWords();
  }, [text]); // Add 'text' as a dependency to re-run the effect when the text changes

  return (
    <span className={`${fontSize} `}>
      {/* Word splitting */}
      <span className="block leading-[120%] relative" ref={wordRef}>
        {text.split(" ").map((word, i) => (
          <span
            key={i}
            className={`inline-flex relative overflow-hidden word-spacing`}
          >
            {" "}
            {React.createElement(
              tag || "p",
              {
                className: `block w-max word relative p-[1px] ${textColor}`,
              },

              word
            )}
          </span>
        ))}
      </span>
    </span>
  );
};
