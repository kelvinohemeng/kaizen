import { useEffect } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Reveal, Tween } from "react-gsap";

const ProjectList = ({ projects, selectedCategory, themeState }) => {
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    gsap.from(".project-link", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2, // Stagger effect
    });
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 all-projects py-[10vh]">
      {filteredProjects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          className="project-link"
          key={project.id}
        >
          <Reveal trigger={<div />}>
            <Tween from={{ opacity: 0, duration: 1 }} stagger={0.5}>
              <div className="temp-proj bg-kaizen-white rounded-lg bg-opacity-25">
                <div
                  className="img-container"
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    height: "fit-content",
                  }}
                >
                  <Image publicId={project.images[0]} quality="20" />
                </div>
                {/* <img src={project.displayImage} alt="" /> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <h4>{project.title}</h4>
                    <p
                      className={`${
                        themeState ? "text-white" : "text-kaizen-accent"
                      }`}
                    >
                      {project.category}
                    </p>
                  </div>
                  {/* <span>explore</span> */}
                </div>
              </div>
            </Tween>
          </Reveal>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
