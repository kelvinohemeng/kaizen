import { useEffect, useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./cloudinaryConfig";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import projectsData from "./projectsData";

// import { DefaultButton } from "./components/Components";
import { Navbar } from "./components/navbar";
// import { GsapReveal, GsapScale } from "./components/Gsaps";
// import { Accordion } from "./components/Accordion";
// import { Faq } from "./components/Faq";
// import { ApproachCard } from "./components/ApproachCard";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./pages/ProjectDetails";
import { ProjectPage } from "./pages/ProjectPage";
import TestImage from "/test-img.jpeg";
import data from "./projectsData";

function App() {
  const projectData = projectsData;
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route exact path="/" element={<Home themeState={darkMode} />} />
          <Route path="/about" element={<About themeState={darkMode} />} />
          <Route
            path="/projects"
            element={<ProjectPage projects={projectData} />}
          />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails projects={projectData} />}
          />
        </Routes>
        <Footer />
      </CloudinaryContext>
    </>
  );
}

export default App;
