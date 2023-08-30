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
  DefaultButtonVar2,
  DefaultButtonVar2Alt,
} from "../components/Components";
import { Testimonial } from "../components/testimonial";
import { Reveal, Tween, SplitWords, SplitChars } from "react-gsap";
import { GsapScale } from "../components/Gsaps";
// import { EffectCards } from "swiper/modules";

const ProjectDetail = ({ projects }) => {
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

  if (!project) {
    return <div>Project not found.</div>;
  }

  const handlePreviousPage = () => {
    const prevPageIndex =
      projects.findIndex((project) => project.id === parseInt(projectId)) - 1;

    if (prevPageIndex >= 0) {
      const prevProjectId = projects[prevPageIndex].id;
      navigate(`/projects/${prevProjectId}`);
    } else {
      // You can handle what happens when there's no next project
      navigate("/projects");
    }
    console.log(prevPageIndex);
  };
  const nextProjectIndex =
    projects.findIndex((project) => project.id === parseInt(projectId)) + 1;
  const determineNextPageIndex = nextProjectIndex < projects.length;
  const handleNextPage = () => {
    if (determineNextPageIndex) {
      const nextProjectId = projects[nextProjectIndex].id;
      navigate(`/projects/${nextProjectId}`);
    } else {
      // You can handle what happens when there's no next project
      navigate("/projects");
    }
  };

  return (
    <main>
      <div className=" project-details-page">
        <div className=" container intro">
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
              <SplitWords wrapper={<h2 />}>{project.title}</SplitWords>
            </Tween>
          </Reveal>
          <p> Client - {project.owner}</p>
          <div className="inline-details">
            <p>Project Type - {project.category}</p>
            <p> Date -{project.date}</p>
          </div>
        </div>
        {/* <div className="sliderr"> */}
        <div className="images-container ">
          <div className="video-section">
            <GsapScale value="1.3">
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
            </GsapScale>
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
        <div className="container">
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

          <div className="btnss">
            <DefaultButtonVar2Alt onClick={handlePreviousPage}>
              Previous Project
            </DefaultButtonVar2Alt>
            {determineNextPageIndex ? (
              <DefaultButtonVar2 onClick={handleNextPage}>
                Next Project
              </DefaultButtonVar2>
            ) : (
              ""
            )}
          </div>
          <div className="btn-d-p">
            <DefaultButton
              onClick={() => {
                window.print();
              }}
            >
              Download page
            </DefaultButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
