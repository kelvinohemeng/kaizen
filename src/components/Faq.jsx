import { useState } from "react";
import { AccordionCard } from "./AccordionCard";

const faqData = [
  {
    title: "What is kaizen audio visual projects",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
    style: { transform: "translateY(-0px)" },
    state: true,
  },
  {
    title: "How do we operate",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
    style: { transform: "translateY(-30px)" },
    state: false,
  },
  {
    title: "How we deliver to your satisfaction",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
    style: { transform: "translateY(-60px)" },
    state: false,
  },
  {
    title: "Others",
    content: `Being intuitive in our concepts; minimalist in our design; ergonomic in our form; zen in our philosophy; ︎360º in our approach and process-oriented in our execution;`,
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
