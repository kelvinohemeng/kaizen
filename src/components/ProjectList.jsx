import { useEffect } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";

const ProjectList = ({ projects, selectedCategory, themeState }) => {
  //framer motion variants
  const transitionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    gsap.from(".project-link", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
    });
  }, [selectedCategory]);

  return (
    <div className="py-[10vh] grid gap-4 grid-cols-fluid">
      <AnimatePresence mode="wait" initial="false" key={selectedCategory}>
        {filteredProjects.length === 0 ? (
          <motion.div
            key="no_projects"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
            className=""
          >
            <p>No projects found under this category</p>
          </motion.div>
        ) : (
          filteredProjects.map((project, index) => (
            <motion.div
              key={`c_${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {" "}
              <Link
                key={`gg_${index}`}
                to={`/projects/${project.id}`}
                className="project-link justify-self-start"
              >
                <div className="max-w-[350px] h-full group overflow-hidden">
                  <div className="relative">
                    <div className=" bg-kaizen-black h-full absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40  transition-all"></div>
                    <div className="absolute border border-kaizen-white text-white rounded-full px-4 py-1 ml-4 -top-1/2 group-hover:top-5 duration-300 transition-all">
                      eplore
                    </div>
                    <Image
                      publicId={`${project.images[0]}`}
                      className="aspect-square object-cover "
                      alt={project.title}
                    />
                  </div>
                  <div className="p-[20px] bg-kaizen-black space-y-2 h-full">
                    <p className="text-2xl font-regular text-white">
                      {project.title}
                    </p>
                    <p className=" text-white text-xs line-clamp-2 font-regular text-opacity-50">
                      {project.descriptions}
                    </p>
                    <p className="text-white border border-white w-fit px-3 py-1 text-sm rounded-full">
                      {project.category}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
