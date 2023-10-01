import React, { useState, useRef, useEffect } from "react";
import { Image, Video } from "cloudinary-react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-cards";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  DefaultButton,
  DefaultButton2,
  DefaultButton2Var,
  DefaultButtonVar,
} from "../components/Components";
import { Testimonial } from "../components/testimonial";
import { Reveal, Tween, SplitWords, SplitChars } from "react-gsap";
import { GsapScale } from "../components/Gsaps";
// import { EffectCards } from "swiper/modules";

const ProjectDetail = ({ projects, themeState, footer }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
      navigate(`/projects/${prevProjectId}`);
    } else {
      navigate("/projects");
    }
  };
  const nextProjectIndex =
    projects.findIndex((project) => project.id === parseInt(projectId)) + 1;
  const determineNextPageIndex = nextProjectIndex < projects.length;
  const handleNextPage = () => {
    if (determineNextPageIndex) {
      const nextProjectId = projects[nextProjectIndex].id;
      navigate(`/projects/${nextProjectId}`);
    } else {
      navigate("/projects");
    }
  };

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <div className=" project-details-page py-[10vh]">
        <div className=" container intro print:py-0 my-[10vh] md:my-[20vh]">
          <Reveal
            // repeat
            trigger={
              <div
                className="chars-wrapper"
                style={{
                  maxWidth: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "10px",
                  overflow: "hidden",
                }}
              />
            }
          >
            <Tween from={{ y: "200px", opacity: "0" }} stagger={0.1}>
              <SplitWords wrapper={<h2 className=" py-[20px]" />}>
                {project.title}
              </SplitWords>
            </Tween>
          </Reveal>
          <div className="inline-details">
            <span> Client - {project.owner}</span>
            <span>Project Type - {project.category}</span>
            <span> Date -{project.date}</span>
          </div>
        </div>
        {/* <div className="sliderr"> */}
        <div className=" container mx-auto px-4  print:space-y-5 hidden print:block">
          {project.images.map((image, index) => (
            <Image
              key={index}
              publicId={image}
              alt={`Project ${project.title} Image ${index + 1}`}
              height="contain"
              quality="50"
            />
          ))}
        </div>
        <div className="images-container print:hidden">
          <div className="video-section hidden md:block">
            <GsapScale value="1.3">
              <div className="w-full p-2 relative">
                <Swiper
                  // key={23669}
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={0}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 "
                >
                  {project.video ? (
                    <SwiperSlide>
                      <Video
                        publicId={project.video}
                        controls={false}
                        autoPlay
                        muted={true}
                        // width="640"
                        // height="360"
                      />
                    </SwiperSlide>
                  ) : (
                    ""
                  )}
                  {project.images.map((image, index) => (
                    <SwiperSlide>
                      <Image
                        key={index}
                        publicId={image}
                        alt={`Project ${project.title} Image ${index + 1}`}
                        height="contain"
                        quality="50"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className={`absolute inset-0 ${
                    themeState ? "bg-white" : "bg-kaizen-blue"
                  } z-[-2] rounded-[20px] bg-opacity-50`}
                ></div>
                <div
                  className={`absolute inset-0 ${
                    themeState ? "bg-kaizen-white" : "bg-kaizen-blue"
                  } z-[-2] rounded-[20px] bg-opacity-50 animate-pulse scale-[1.01] scale-y-[1.02]`}
                ></div>
              </div>
            </GsapScale>
          </div>
          <div className="video-section block md:hidden px-4">
            <div className="w-full p-2 relative">
              <Swiper
                // key={23669}
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={0}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 "
              >
                {project.video ? (
                  <SwiperSlide>
                    <Video
                      publicId={project.video}
                      controls={false}
                      autoPlay
                      muted={true}
                      // width="640"
                      // height="360"
                    />
                  </SwiperSlide>
                ) : (
                  ""
                )}
                {project.images.map((image, index) => (
                  <SwiperSlide>
                    <Image
                      key={index}
                      publicId={image}
                      alt={`Project ${project.title} Image ${index + 1}`}
                      height="contain"
                      quality="50"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                className={`absolute inset-0 ${
                  themeState ? "bg-white" : "bg-kaizen-blue"
                } z-[-2] rounded-[20px] bg-opacity-50`}
              ></div>
              <div
                className={`absolute inset-0 ${
                  themeState ? "bg-kaizen-white" : "bg-kaizen-blue"
                } z-[-2] rounded-[20px] bg-opacity-50 animate-pulse scale-[1.01] scale-y-[1.02]`}
              ></div>
            </div>
          </div>
          <div className="container thumbnails">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {project.video ? (
                <SwiperSlide>
                  <Image publicId={project.images[0]} />
                </SwiperSlide>
              ) : (
                ""
              )}
              {project.images.map((image, index) => (
                <SwiperSlide>
                  <Image
                    key={index}
                    publicId={image}
                    alt={`Project ${project.title} Image ${index + 1}`}
                    quality="10"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="container print:pt-40">
          {project.descriptions ? (
            <div className="description">
              {project.descriptions
                .split("\n\n")
                .map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
            </div>
          ) : (
            ""
          )}

          {project.testimonialData ? (
            <div className="testContainer">
              <h3 className="test-heading">- What the client said about us</h3>
              <div className="inline-testimonial">
                {project.testimonialData.map((testimonial, index) => (
                  <Testimonial
                    key={testimonial.id}
                    testImg={testimonial.img}
                    person={testimonial.person}
                    statement={() =>
                      testimonial.statement
                        .split("\n\n")
                        .map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        ))
                    }
                  />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          <div>
            <div className="btnss">
              <DefaultButton2Var
                notShow
                color="white"
                onClick={handlePreviousPage}
              >
                Previous Project
              </DefaultButton2Var>
              {determineNextPageIndex ? (
                <DefaultButtonVar
                  notShow
                  color="white"
                  onClick={handleNextPage}
                >
                  Next Project
                </DefaultButtonVar>
              ) : (
                ""
              )}
            </div>
            <div className="btn-d-p ">
              <DefaultButton
                notShow
                color={themeState ? "#f2edf4" : "#000796"}
                bColor={themeState ? "#f2edf4" : "#000796"}
                outlined
                onClick={() => {
                  window.print();
                }}
              >
                Download page
              </DefaultButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
