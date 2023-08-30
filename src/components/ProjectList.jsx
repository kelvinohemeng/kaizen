import { useEffect } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Reveal, Tween } from "react-gsap";

const ProjectList = ({ projects, selectedCategory }) => {
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    gsap.from(".project-link", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1, // Stagger effect
    });
  }, [selectedCategory]);

  return (
    <div className="container all-projects">
      {filteredProjects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          className="project-link"
          key={project.id}
        >
          <Reveal repeat trigger={<div />}>
            <Tween from={{ scale: 0, opacity: 0 }} stagger={0.5}>
              <div className="temp-proj">
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
                    <h2>{project.title}</h2>
                    <h3>{project.category}</h3>
                  </div>
                  <span>explore</span>
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
