import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="container all-projects">
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <div
            className="temp-proj"
            style={{
              backgroundImage: `url(${project.displayImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2>{project.title}</h2>
            {/* <p>{project.description}</p> */}
            {/* <Image publicId={project.images[0]} /> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
