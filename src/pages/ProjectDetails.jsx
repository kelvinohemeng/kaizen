import { Image, Video } from "cloudinary-react";
import { useParams } from "react-router-dom";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

// or only core styles
import "@splidejs/react-splide/css/core";

import { DefaultButton } from "../components/Components";
import { TestimonialProj } from "../components/testimonial";
import { Container } from "../utils/TailwindComps";
import { SplitWordAnim } from "../components/Interactive";
import Printable from "../components/Printable";
import { useBoxOverlay } from "../utils/Interractive";

const ProjectDetail = ({ projects, footer }) => {
  //   const { projectId } = useParams();
  const parems = useParams();
  const projectId = parems.projectId;
  //   const project = projects.find((project) => project.id === projectId);
  const project = projects.find(
    (project) => project.id === parseInt(projectId)
  );

  const prevPageIndex =
    projects.findIndex((project) => project.id === parseInt(projectId)) - 1;

  const handlePreviousPage = () => {
    if (prevPageIndex >= 0) {
      const prevProjectId = projects[prevPageIndex].id;
      window.location.href = `/projects/${prevProjectId}`;
    } else {
      window.location.href = "/projects";
    }
  };
  const nextProjectIndex =
    projects.findIndex((project) => project.id === parseInt(projectId)) + 1;
  const determineNextPageIndex = nextProjectIndex < projects.length;
  const handleNextPage = () => {
    if (determineNextPageIndex) {
      const nextProjectId = projects[nextProjectIndex].id;
      window.location.href = `/projects/${nextProjectId}`;
    } else {
      window.location.href = "/projects";
    }
  };

  if (!project) {
    return <div>Project not found.</div>;
  }

  const downloadPage = () => {
    window.print();
  };

  useBoxOverlay({
    classNames: "box-overlay",
  });

  return (
    <>
      <Printable project={project} />
      <main className="no-print py-[10vh]">
        <Container>
          <div className=" project-details-page">
            <div className=" print:py-0 my-[10vh] space-y-10">
              <div className=" space-y-4 md:space-y-0 md:flex justify-between items-center">
                <div>
                  <b>
                    <SplitWordAnim tag="h2" text={project.title} />
                  </b>
                  <p className="text-xl">{project.owner}</p>
                </div>
                <div className="no-print flex justify-start">
                  <DefaultButton
                    blackBg
                    color={`white w-full`}
                    rounded
                    notShow
                    flip
                    customIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="white"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"></path>
                      </svg>
                    }
                    onClick={downloadPage}
                  >
                    Download this project as pdf
                  </DefaultButton>
                </div>
              </div>
              <div className="box-overlay w-full overflow-hidden">
                {project.video ? (
                  <Video
                    publicId={project.video}
                    controls={false}
                    autoPlay
                    muted={true}
                    width="640"
                    height="360"
                  />
                ) : (
                  <Image
                    className="w-full max-h-[400px] aspect-square object-cover"
                    publicId={project.images[0]}
                  />
                )}
              </div>
            </div>
            {/* <div className="sliderr"> */}
            <div>
              <SplitWordAnim tag="h3" text={`Project summary`} />

              <div className="flex items-center gap-2">
                {" "}
                <div className="border text-white bg-kaizen-black w-fit px-4 rounded-full">
                  {project.category}
                </div>
                <div className="font-medium text-kaizen-blue">
                  {project.date}
                </div>
              </div>
              <p className=" md:max-w-[70%] pt-5">{project.descriptions}</p>
            </div>

            {/* image slider */}
            <div className="hidden md:block">
              <Splide
                tag="div"
                className="w-full"
                hasTrack={false}
                aria-label="our projects"
                options={{
                  arrows: true, // Display 2 slides per page
                  perMove: 2, // Move 1 slide at a time
                  gap: "1rem", // Adjust the gap between slides
                  fixedWidth: "30%",
                  omitEnd: true,
                  drag: false,
                }}
              >
                <div>
                  <div className="splide__arrows flex justify-end py-10 gap-8">
                    <button className="splide__arrow splide__arrow--prev">
                      <img src="../images/button-left.svg" alt="" />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                      <img src="../images/button-right.svg" alt="" />
                    </button>
                  </div>
                </div>
                <SplideTrack>
                  {project.images.map((image, index) => (
                    <SplideSlide className="box-overlay w-fit ">
                      <div className="relative">
                        <Image
                          key={`gkkj_${index}`}
                          publicId={image}
                          alt={`Project ${project.title} Image ${index + 1}`}
                          className=" object-cover"
                        />
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>

            <div className="block md:hidden">
              <Splide
                tag="div"
                className="w-full"
                hasTrack={false}
                aria-label="our projects"
                options={{
                  arrows: true, // Display 2 slides per page
                  perMove: 2, // Move 1 slide at a time
                  gap: "1rem", // Adjust the gap between slides
                  fixedWidth: "75%",
                  omitEnd: true,
                  drag: false,
                }}
              >
                <div>
                  <div className="splide__arrows flex justify-end py-10 gap-8">
                    <button className="splide__arrow splide__arrow--prev">
                      <img src="../images/button-left.svg" alt="" />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                      <img src="../images/button-right.svg" alt="" />
                    </button>
                  </div>
                </div>
                <SplideTrack>
                  {project.images.map((image, index) => (
                    <SplideSlide className="w-fit ">
                      <div className="relative">
                        <Image
                          key={`gkkj_${index}`}
                          publicId={image}
                          alt={`Project ${project.title} Image ${index + 1}`}
                          className=" object-cover"
                        />
                      </div>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-[5rem]">
              <div>
                <h4>
                  <b>Challenges</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                  alias sapiente dignissimos eos iusto, doloribus, voluptatibus
                  et expedita officiis voluptatum enim provident sunt beatae,
                  cupiditate quisquam? Deleniti assumenda repellat mollitia.
                </p>
              </div>
              <div>
                <h4>
                  <b>Outcome</b>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi dolor blanditiis recusandae atque nulla error aut iure
                  laudantium, repellat a.
                </p>
              </div>
            </div>

            {project.testimonialData && (
              <div className="pt-[5rem] space-y-9">
                {/* testimonial */}
                <h4>
                  <b>Testimonial</b>
                </h4>
                {project.testimonialData.map(
                  (projectTestimonial, testIndex) => (
                    <TestimonialProj
                      name={projectTestimonial.person}
                      statement={projectTestimonial.statement}
                      rating={4.5}
                    />
                  )
                )}
              </div>
            )}
          </div>
          <div className="no-print w-full flex justify-between pt-[5rem] flex-wrap">
            <div>
              <DefaultButton notShow color="white" onClick={handlePreviousPage}>
                Previous Project
              </DefaultButton>
            </div>
            {determineNextPageIndex ? (
              <div>
                <DefaultButton notShow color="white" onClick={handleNextPage}>
                  Next Project
                </DefaultButton>
              </div>
            ) : (
              ""
            )}
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProjectDetail;
