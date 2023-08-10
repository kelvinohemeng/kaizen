import { useEffect } from "react";
import ProjectList from "../components/ProjectList";
import { useLocation } from "react-router-dom";

export const ProjectPage = ({ projects }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="container">
      ProjectPage
      <ProjectList projects={projects} />
    </div>
  );
};
