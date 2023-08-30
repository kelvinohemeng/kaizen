import { useEffect, useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./cloudinaryConfig";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import projectsData from "./projectsData";

// import { DefaultButton } from "./components/Components";
import { Navbar } from "./components/Navbar";
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
import data from "./projectsData";
import { Service } from "./pages/Service";

function App() {
  const projectData = projectsData;
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
        <Navbar toggleDarkMode={toggleDarkMode} themeState={darkMode} />
        <main className={darkMode ? `darkmode` : ""}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
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
        </main>
      </CloudinaryContext>
    </>
  );
}

export default App;
