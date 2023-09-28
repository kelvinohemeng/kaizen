import { Link, Outlet } from "react-router-dom";

export const DefaultButton = ({
  children,
  linkTo,
  onClick,
  notShow,
  outlined,
  color,
  background,
  bColor,
}) => {
  const primary = `${notShow ? "btn-alt-alt" : "btn"}`;
  const outline = `${outlined ? "outlined" : ""}`;
  return (
    <Link onClick={onClick} to={linkTo}>
      <div
        className={`${primary} ${outline}`}
        style={{
          borderColor: `${bColor}`,
          background: `${background}`,
        }}
      >
        <div className="btn-container">
          <div
            className="btn-content"
            style={{
              background: `${background}`,
            }}
          >
            <span
              style={{
                color: color ? `${color}` : "#3c4090",
              }}
            >
              {children}
            </span>
            <span
              style={{
                color: color ? `${color}` : "#3c4090",
              }}
            >
              {children}
            </span>
          </div>
        </div>
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
          ""
        )}
      </div>
    </Link>
  );
};

export const DefaultButton2 = ({
  children,
  linkTo,
  onClick,
  notShow,
  outlined,
  color,
  background,
  bColor,
}) => {
  const primary = `${notShow ? "btn-alt-alt" : "btn"}`;
  const outline = `${outlined ? "outlined" : ""}`;
  return (
    <Link onClick={onClick} to={linkTo}>
      <div
        className={`${primary} ${outline}`}
        style={{
          borderColor: `${bColor}`,
        }}
      >
        {!notShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 256 256"
            style={{
              fill: `${color}`,
              transform: "rotate(-180deg)",
            }}
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        ) : (
          ""
        )}
        <div className="btn-container">
          <div
            className="btn-content"
            style={{
              background: `${background}`,
            }}
          >
            <span
              style={{
                color: `${color}`,
              }}
            >
              {children}
            </span>
            <span
              style={{
                color: `${color}`,
              }}
            >
              {children}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const DefaultButtonVar = ({
  children,
  linkTo,
  onClick,
  notShow,
  outlined,
  color,
  background,
  bColor,
}) => {
  const primary = `${notShow ? "btn-alt-alt" : "btn"}`;
  const outline = `${outlined ? "outlined" : ""}`;
  return (
    <a href={linkTo} onClick={onClick}>
      <div
        className={`${primary} ${outline}`}
        style={{
          borderColor: `${bColor}`,
        }}
      >
        <div className="btn-container">
          <div
            className="btn-content"
            style={{
              background: `${background}`,
            }}
          >
            <span
              style={{
                color: `${color}`,
              }}
            >
              {children}
            </span>
            <span
              style={{
                color: `${color}`,
              }}
            >
              {children}
            </span>
          </div>
        </div>
        {!notShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 256 256"
            style={{
              fill: `${color}`,
            }}
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        ) : (
          ""
        )}
      </div>
    </a>
  );
};

export const DefaultButton2Var = ({
  children,
  linkTo,
  onClick,
  notShow,
  outlined,
  color,
  background,
  bColor,
}) => {
  const primary = `${notShow ? "btn-alt-alt" : "btn"}`;
  const outline = `${outlined ? "outlined" : ""}`;
  return (
    <a href={linkTo} onClick={onClick}>
      <div
        className={`${primary} ${outline}`}
        style={{
          borderColor: `${bColor}`,
        }}
      >
        {!notShow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 256 256"
            style={{
              fill: `${color}`,
              transform: "rotate(-180deg)",
            }}
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        ) : (
          ""
        )}
        <div className="btn-container">
          <div
            className="btn-content"
            style={{
              background: `${background}`,
            }}
          >
            <span
              style={{
                color: `${color}`,
              }}
            >
              {children}
            </span>
            <span
              style={{
                color: `${color}`,
              }}
            >
              {children}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};
