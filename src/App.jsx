import { Suspense, useEffect, useState } from "react";
// import { Cloudinary } from "@cloudinary/url-gen";
import { CloudinaryContext } from "cloudinary-react";
import cloudinaryConfig from "./cloudinaryConfig";
import "./App.scss";
// import projectsData from "./projectsData";

// import { DefaultButton } from "./components/Components";
import { Navbar } from "./components/Navbar";
// import { GsapReveal, GsapScale } from "./components/Gsaps";
// import { Accordion } from "./components/Accordion";
// import { Faq } from "./components/Faq";
// import { ApproachCard } from "./components/ApproachCard";
import { Footer } from "./components/Footer";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [projectData, setProjectData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const fetchData = async () => {
    await fetch(
      "https://kelvinohemeng.github.io/kaizen-api-port/projectsData.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.projectData);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 5000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 5000);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
        <main
          className={`h-full relative bg-opacity-40 w-full  bg-kaizen-white`}
        >
          <Navbar />
          <AnimatedRoutes project={projectData} footer={<Footer />} />
        </main>
      </CloudinaryContext>
    </>
  );
}
export default App;
