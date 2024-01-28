import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const DefaultButton = ({
  children,
  linkTo,
  onClick,
  notShow,
  color,
  blackBg,
  rounded,
  noFill,
  flip,
  customIcon,
}) => {
  return (
    <Link onClick={onClick} to={linkTo}>
      <button
        className={`
        ${
          !noFill
            ? blackBg
              ? "bg-kaizen-black hover:bg-kaizen-blue"
              : "bg-buttonBlue hover:bg-kaizen-black"
            : "border border-kaizen-black"
        } 
        ${rounded ? "rounded-full" : "rounded-md"}
        ${flip ? "flex-row-reverse pl-4" : "flex-row"}
        w-fit flex items-center gap-3  px-8 py-3 hover:shadow-[rgba(92,_97,_188,_0.6)_0px_0px_20px] transition-all duration-300 hover:-rotate-2 hover:scale-105`}
      >
        <span className={color ? `text-${color}` : "text-black"}>
          {children}
        </span>
        {!notShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 256 256"
            style={{
              fill: color ? `${color}` : "#3c4090",
            }}
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        ) : (
          customIcon && customIcon
        )}
      </button>
    </Link>
  );
};

// Prop types
DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
  notShow: PropTypes.bool,
  color: PropTypes.string,
  blackBg: PropTypes.bool,
  rounded: PropTypes.bool,
  noFill: PropTypes.bool,
};
