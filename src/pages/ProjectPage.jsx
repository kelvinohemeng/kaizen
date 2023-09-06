import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import { useLocation } from "react-router-dom";
import { Tween, SplitWords, Reveal } from "react-gsap";

const ProjectPage = ({ projects, themeState }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default category is "all"
  const [animationTrigger, setAnimationTrigger] = useState(0);
  useEffect(() => {
    setAnimationTrigger(animationTrigger + 1);
  }, [location, selectedCategory]);
  const resetScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className=" project container">
      <Reveal repeat trigger={<h1 />}>
        <Tween
          from={{ y: "200px", opacity: "0" }}
          stagger={0.1}
          playState={animationTrigger}
          wrapper={
            <div
              style={{
                overflow: "hidden",
                paddingBlock: "15px",
              }}
            />
          }
        >
          <h1 className="biggest">{selectedCategory}</h1>
        </Tween>
      </Reveal>
      <div className="hr"></div>
      <div className="projects">
        <div>
          <div className="filter" onClick={resetScroll}>
            <div className="filter-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M200,128a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,128Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path>
              </svg>
              <h3 className=" headings-md">filter</h3>
            </div>
            <div>
              <button
                className={selectedCategory === "all" ? `active` : ""}
                onClick={() => setSelectedCategory("all")}
              >
                all
              </button>
              <button
                className={selectedCategory === "av design" ? `active` : ""}
                onClick={() => setSelectedCategory("av design")}
              >
                av design
              </button>
              <button
                className={selectedCategory === "conferencing" ? `active` : ""}
                onClick={() => setSelectedCategory("conferencing")}
              >
                conferencing
              </button>
              <button
                className={
                  selectedCategory === "interactive media" ? `active` : ""
                }
                onClick={() => setSelectedCategory("interactive media")}
              >
                interactive media
              </button>
              <button
                className={
                  selectedCategory === "system intergration" ? `active` : ""
                }
                onClick={() => setSelectedCategory("system intergration")}
              >
                system intergration
              </button>
            </div>
          </div>
        </div>
        <div>
          <ProjectList
            projects={projects}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
