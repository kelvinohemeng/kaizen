import { useState } from "react";
import { AccordionCard } from "./AccordionCard";

const faqData = [
  {
    title: "What is kaizen audio visual projects",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    style: { transform: "translateY(-0px)" },
    state: true,
  },
  {
    title: "How do we operate",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    style: { transform: "translateY(-30px)" },
    state: false,
  },
  {
    title: "How we deliver to your satisfaction",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    style: { transform: "translateY(-60px)" },
    state: false,
  },
  {
    title: "Others",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    style: { transform: "translateY(-90px)" },
    state: false,
  },
];
export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <AccordionCard
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
