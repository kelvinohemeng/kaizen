import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import { useLocation } from "react-router-dom";
import { Tween, SplitWords, Reveal } from "react-gsap";

const ProjectPage = ({ projects, themeState, footer }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default category is "all"
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [activate, setActivate] = useState(false);
  useEffect(() => {
    setAnimationTrigger(animationTrigger + 1);
  }, [location, selectedCategory]);
  const resetScroll = () => {
    window.scrollTo(0, 0);
  };
  const activateFilter = () => {
    setActivate(!activate);
  };
  return (
    <>
      <main className=" pt-[50vh]">
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
              <h1>{selectedCategory}</h1>
            </Tween>
          </Reveal>
          <div className="hr"></div>
          <div className="projects">
            <div className=" hidden md:block">
              <div className="filter" onClick={resetScroll}>
                <div className="filter-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,128a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,128Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path>
                  </svg>
                  <h3 className={`${themeState ? "text-white" : "text-white"}`}>
                    filter
                  </h3>
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
                    className={
                      selectedCategory === "conferencing" ? `active` : ""
                    }
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
            <div className="block md:hidden sticky top-20 z-30">
              <div className="filter cursor-pointer" onClick={activateFilter}>
                <div className=" flex items-center justify-center gap-4 w-full py-3 px-2 rounded-md border-4 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,128a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,128Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path>
                  </svg>
                  <h3 className={`${themeState ? "text-white" : "text-white"}`}>
                    filter category
                  </h3>
                </div>
              </div>
              <div
                className={` mobile-btn fixed bg-kaizen-white z-[999999999] inset-0 h-screen px-4 ${
                  activate ? "flex flex-col justify-center" : "hidden"
                }`}
                onClick={() => {
                  setActivate(false);
                  window.scrollTo(0, 0);
                }}
              >
                <div
                  className=" absolute bottom-[10px] left-[45%] cursor-pointer"
                  onClick={() => {
                    setActivate(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                  </svg>
                </div>
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
                  className={
                    selectedCategory === "conferencing" ? `active` : ""
                  }
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
            <div>
              <ProjectList
                projects={projects}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
