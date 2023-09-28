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
          <Link
            to="/projects"
            className=" border-b-[0.3px] border-opacity-40 pb-2 border-black"
          >
            <span className="">
              <span className=" font-bold text-kaizen-accent">
                see projects
              </span>
              <span className=" font-bold text-kaizen-accent">
                see projects
              </span>
            </span>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
