import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import { useLocation } from "react-router-dom";
import { Tween, SplitWords, Reveal } from "react-gsap";

export const ProjectPage = ({ projects, themeState }) => {
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
    <main>
      <div className=" projects container">
        <Reveal repeat trigger={<h1 />}>
          <Tween
            from={{ y: "200px", opacity: "0" }}
            stagger={0.1}
            playState={animationTrigger}
            wrapper={
              <div
                style={{
                  overflow: "hidden",
                  textTransform: "capitalize",
                  paddingBlock: "15px",
                }}
              />
            }
          >
            <h1>{selectedCategory}</h1>
          </Tween>
        </Reveal>
        <div className="filter" onClick={resetScroll}>
          <button onClick={() => setSelectedCategory("all")}>all</button>
          <button onClick={() => setSelectedCategory("av design")}>
            av design
          </button>
          <button onClick={() => setSelectedCategory("conferencing")}>
            conferencing
          </button>
          <button onClick={() => setSelectedCategory("interactive media")}>
            interactive media
          </button>
          <button onClick={() => setSelectedCategory("system intergration")}>
            system intergration
          </button>
        </div>
        <ProjectList projects={projects} selectedCategory={selectedCategory} />
      </div>
    </main>
  );
};
