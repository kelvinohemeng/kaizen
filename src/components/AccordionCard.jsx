import { useState } from "react";

export const AccordionCard = ({
  index,
  title,
  content,
  style,
  isActive,
  state,
  onAccordionClick,
}) => {
  const [initialActiveState, setInititalActiveState] = useState(state);
  const flipState = () => {
    onAccordionClick(isActive ? null : index);
    setInititalActiveState(null);
  };
  return (
    <div
      className={
        isActive || initialActiveState
          ? `acc-container-active`
          : `acc-container`
      }
      style={style}
      onClick={flipState}
    >
      <div className="acc-height">
        <h3>{title}</h3>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};
