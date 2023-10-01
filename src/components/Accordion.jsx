import { useState } from "react";
import { AccordionCard } from "./AccordionCard";

const accordionData = [
  {
    title: "Audio Visual Design",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
    style: { transform: "translateY(-0px)" },
    state: false,
  },
  {
    title: "Conferencing",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
    style: { transform: "translateY(-30px)" },
    state: false,
  },
  {
    title: "Interactive Media",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
    style: { transform: "translateY(-60px)" },

    state: false,
  },
  {
    title: "System Integration",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
    style: { transform: "translateY(-90px)" },
    state: true,
  },
];
export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <AccordionCard
          readMore
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          style={item.style}
          isActive={index === openIndex}
          state={item.state}
          onAccordionClick={handleAccordionClick}
        />
      ))}
    </div>
  );
};
