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
  const handleNextPage = () => {
    const nextProjectIndex =
      projects.findIndex((project) => project.id === parseInt(projectId)) + 1;

    if (nextProjectIndex < projects.length) {
      const nextProjectId = projects[nextProjectIndex].id;
      navigate(`/projects/${nextProjectId}`);
    } else {
      // You can handle what happens when there's no next project
      navigate("/projects");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="container project-details-page">
      <div className="detail-disp">
        <Reveal
          // repeat
          trigger={
            <div
              className="chars-wrapper"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
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
      <div className="images-container">
        <GsapScale value="1.3">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={0}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Video
                publicId={project.video}
                controls={false}
                autoPlay={true}
                // width="640"
                // height="360"
                muted
              />
            </SwiperSlide>
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
          <SwiperSlide>
            <Image publicId={project.images[0]} />
          </SwiperSlide>
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
      {/* </div> */}
      <div className="description">
        {project.descriptions.map((describe, index) => (
          <p key={index}>{describe}</p>
        ))}
      </div>

      {project.testimonialData ? (
        <div className="testContainer">
          <h3 className="test-heading">- What the client said about us</h3>
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
      ) : (
        ""
      )}

      <div className="btnss">
        <DefaultButtonVar2Alt onClick={handlePreviousPage}>
          Previous Project
        </DefaultButtonVar2Alt>
        <DefaultButtonVar2 onClick={handleNextPage}>
          Next Project
        </DefaultButtonVar2>
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
    </main>
  );
};

export default ProjectDetail;
