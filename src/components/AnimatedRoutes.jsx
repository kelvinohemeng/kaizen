import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ProjectPage = lazy(() => import("../pages/ProjectPage"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));
const Service = lazy(() => import("../pages/Service"));
import Preloader from "../components/Fallback";

export const AnimatedRoutes = ({ project }) => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route exact path="/" element={<Home projects={project} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route
            path="/projects"
            element={<ProjectPage projects={project} />}
          />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails projects={project} />}
          />
        </Routes>
      </Suspense>
    </>
  );
};
