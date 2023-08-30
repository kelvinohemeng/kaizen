import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AccordionCard = ({
  readMore,
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
      className={`acc-general ${
        initialActiveState || isActive
          ? `acc-container-active`
          : `acc-container`
      }`}
      style={style}
      onClick={flipState}
    >
      <div className="acc-height">
        <h3>{title}</h3>
      </div>
      <div className="content">
        <p>{content}</p>
        {readMore ? (
          <Link to="/services">
            <span>
              <span>Read more</span>
              <span>Read more</span>
            </span>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
