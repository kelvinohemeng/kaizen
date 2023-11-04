import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ProjectPage = lazy(() => import("../pages/ProjectPage"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));
import ScrollToTop from "./ScrollToTop";
const Service = lazy(() => import("../pages/Service"));
import Preloader from "../components/Fallback";
import { Booking } from "../pages/Booking";

export const AnimatedRoutes = ({ project, themeState, footer }) => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <ScrollToTop />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                projects={project}
                themeState={themeState}
                footer={footer}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                projects={project}
                themeState={themeState}
                footer={footer}
              />
            }
          />
          <Route
            path="/services"
            element={<Service themeState={themeState} footer={footer} />}
          />
          <Route
            path="/projects"
            element={
              <ProjectPage
                projects={project}
                themeState={themeState}
                footer={footer}
              />
            }
          />
          <Route
            path="/projects/:projectId"
            element={
              <ProjectDetails
                projects={project}
                themeState={themeState}
                footer={footer}
              />
            }
          />
          <Route
            path="/booking"
            element={<Booking themeState={themeState} footer={footer} />}
          />
          <Route
            path="*"
            element={<NotFound themeState={themeState} footer={footer} />}
          />
        </Routes>
      </Suspense>
    </>
  );
};
