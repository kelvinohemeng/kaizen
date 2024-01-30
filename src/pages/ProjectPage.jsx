import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import { useLocation } from "react-router-dom";
import { Tween, SplitWords, Reveal } from "react-gsap";
import { Container } from "../utils/TailwindComps";
import { SplitWordAnim } from "../components/Interactive";

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

  const categories = [
    "all",
    "av design",
    "conferencing",
    "interactive media",
    "system integration",
  ];
  return (
    <>
      <main className=" pt-[5rem]">
        <Container>
          {selectedCategory && (
            <div className="pb-8">
              <SplitWordAnim
                tag="h1"
                text={selectedCategory}
                key={selectedCategory}
              />
            </div>
          )}
          <div className="projects">
            <div className="">
              <div className="flex flex-wrap gap-2" onClick={resetScroll}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${
                      selectedCategory === category
                        ? "bg-kaizen-black text-white"
                        : ""
                    } px-4 py-1 border border-kaizen-black rounded-full`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <ProjectList
                projects={projects}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProjectPage;
