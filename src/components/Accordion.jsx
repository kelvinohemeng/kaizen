import { useState } from "react";
import { AccordionCard } from "./AccordionCard";

const accordionData = [
  {
    title: "Audio Visual Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    style: { transform: "translateY(-0px)" },
    state: false,
  },
  {
    title: "Conferencing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    style: { transform: "translateY(-30px)" },
    state: false,
  },
  {
    title: "Interactive Media",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    style: { transform: "translateY(-60px)" },

    state: false,
  },
  {
    title: "System Integration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
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
