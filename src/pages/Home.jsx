import { useState, useRef, useEffect } from "react";
import { Image, Video } from "cloudinary-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Link } from "react-router-dom";
import { DefaultButton } from "../components/Components";
import { Container } from "../utils/TailwindComps";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ReachOut } from "../sections/Contact";
// import { ApproachCard } from "../components/ApproachCard";

// or only core styles
import "@splidejs/react-splide/css/core";
import { Service } from "../sections/Service";
import { Testimonial } from "../components/testimonial";
import { SplitWordAnim } from "../components/Interactive";
import HeroSection from "../sections/HeroSection";
import { useInteractive, useBoxOverlay } from "../utils/Interractive";

const testimonials = [
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
];
const testimonials2 = [
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
  {
    dp: "",
    name: "Joyce Amaveyo",
    testimonial:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, ",
    rating: 4.5,
  },
];

const Home = ({ projects, footer }) => {
  useInteractive({
    classNames: "fade-in",
    vertical: true,
    horizontal: false,
    opacity: 0,
  });
  useInteractive({
    classNames: "fade-in-horizontal",
    vertical: false,
    horizontal: true,
    opacity: 0,
  });

  useBoxOverlay({
    classNames: "box-overlay",
  });

  return (
    <>
      <main className="">
        {" "}
        <HeroSection />
        {/* intro 2 */}
        {/* <section className="grid md:grid-cols-2 bg-kaizen-black bg-opacity-75 gap-12">
          <div className=" px-5 py-8 md:ml-[123px] 2xl:ml-[500px] flex items-center ">
            <div className="left space-y-4 text-white">
              <SplitWordAnim
                tag={`h3`}
                text={`Bring your vision to life with kaizen`}
              />
              <div className={` fade-in space-y-4`}>
                <p className="text-white max-w-[500px]">
                  Experience the future of audio visual with kaizen AV Projects.
                  Book a service with us today and take your business to the
                  next level.
                </p>
                <div>
                  <DefaultButton blackBg notShow color={`white`}>
                    Get started on your project
                  </DefaultButton>
                </div>
              </div>
            </div>
          </div>
          <div className="right   h-[500px] bg-gray-400"></div>
        </section> */}
        {/* cta-read */}
        <section className="">
          <Container className="py-[136px]">
            <SplitWordAnim
              tag={`h3`}
              from={`bottom`}
              text={`We are dedicated to making it work beyond and over your expectations, with kaizen nothing is impossible.`}
            />
          </Container>
        </section>
        {/* cta-read-2 */}
        <section className="">
          <Container className="flex flex-col gap-12">
            <div className="top space-y-5 md:flex justify-between">
              <div className="wck space-y-5">
                <SplitWordAnim
                  tag={`h3`}
                  from={`bottom`}
                  text={`Why choose kaizen...?`}
                />
                <div>
                  <DefaultButton notShow color={`white`}>
                    Get started
                  </DefaultButton>
                </div>
              </div>
              <div className=" fade-in md:max-w-[55%]">
                <p>
                  Experience the future of audio visual with kaizen AV Projects.
                  Book a service with us today and take your business to the
                  next level. <br />
                  <br />
                  Experience the future of audio visual with kaizen AV Projects.
                  Book a service with us today and take your business to the
                  next level.
                </p>
              </div>
            </div>
            <div className="w-full box-overlay bg-gray-400 ">
              <Image
                className="w-full h-[25rem] aspect-[1.2/0.5] bg-gray-500 object-cover"
                publicId="https://res.cloudinary.com/kaizen-img/image/upload/v1692530427/kaizen/projects/k_and_a/03.jpg"
              />
            </div>
          </Container>
        </section>
        <section className=" relative w-full bg-white py-[5rem]">
          <Container
            className={`relative flex flex-col items-center gap-[5rem] overflow-hidden`}
          >
            <div>
              <SplitWordAnim
                tag={`h3`}
                from={`bottom`}
                text={`The trust we have built`}
              />
            </div>
            <div className="slider-logos overflow-hidden  space-y-8">
              <div className="track-logos">
                <img
                  src="/companies/i1.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i2.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i3.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i4.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i5.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i6.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i7.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i8.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i9.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i10.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i11.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i12.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
              </div>
              <div className="track-logos ">
                <img
                  src="/companies/i12.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i13.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i14.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i15.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i16.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i17.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i18.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i19.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i20.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i21.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
                <img
                  src="/companies/i22.png"
                  alt="caompanies we have worked with"
                  className="w-[80px] object-contain "
                />
              </div>
            </div>
          </Container>
        </section>
        <Service />
        {/* testimonial */}
        <section className="relative space-y-[8rem]  z-10 bg-white">
          <Container
            className={` relative space-y-16 overflow-hidden py-[5rem]`}
          >
            <div className="space-y-8">
              <SplitWordAnim
                tag={`h3`}
                from={`bottom`}
                text={`What people say about kaizen`}
              />
              <p className="fade-in-horizontal md:max-w-[60%]">
                Experience the future of audio visual with kaizen AV Projects.
                Book a service with us today and take your business to the next
                level.
              </p>
            </div>
            <div className="slider space-y-8">
              <div className="track">
                {testimonials.map((testimonial, index) => {
                  return (
                    <div key={`cc_${index}`}>
                      <Testimonial
                        name={testimonial.name}
                        rating={testimonial.rating}
                        statement={testimonial.testimonial}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="slider">
              <div className="track">
                {testimonials2.map((testimonial, index) => {
                  return (
                    <div key={`bc_${index}`}>
                      <Testimonial
                        name={testimonial.name}
                        rating={testimonial.rating}
                        statement={testimonial.testimonial}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
          {/* <div className="absolute -top-[44%] right-0 translate-x-[50%] -z-[1] rotate-45">
            <img
              src="/patt-blue.png"
              className="w-[550px] scale-125 opacity-10"
              alt=""
            />
          </div> */}
        </section>
        {/* project section */}
        <section className="">
          <Container className={``}>
            <div className="md:max-w-[60%] space-y-8">
              <SplitWordAnim
                tag={`h3`}
                from={`bottom`}
                text={`What we have done`}
              />
              <div className="fade-in-horizontal space-y-4">
                <p>
                  Experience the future of audio visual with kaizen AV Projects.
                  Book a service with us today and take your business to the
                  next level.
                </p>
                <div>
                  <DefaultButton notShow color={`white`} linkTo="/projects">
                    Explore all projects
                  </DefaultButton>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Splide
                tag="div"
                className="w-screen"
                hasTrack={false}
                aria-label="our projects"
                options={{
                  width: "100%",
                  arrows: true, // Display 2 slides per page
                  perMove: 1, // Move 1 slide at a time
                  gap: "1rem", // Adjust the gap between slides
                  fixedWidth: "30%",
                  omitEnd: true,
                  drag: false,
                }}
              >
                <div className="splide__arrows flex justify-end py-10 gap-8">
                  <button className="splide__arrow splide__arrow--prev">
                    <img src="./images/button-left.svg" alt="" />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <img src="./images/button-right.svg" alt="" />
                  </button>
                </div>
                <SplideTrack>
                  {projects.slice(0, 6).map((proj, index) => (
                    <SplideSlide key={`gg_${index}`} className="w-fit">
                      <Link to={`/projects/${proj.id}`}>
                        <div className=" max-w-[350px] group">
                          <div className="relative">
                            <div className=" bg-kaizen-black absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40  transition-all"></div>
                            <div className="absolute border border-kaizen-white text-white rounded-full px-4 py-1 ml-4 -top-1/2 group-hover:top-5 duration-300 transition-all">
                              eplore
                            </div>
                            <Image
                              publicId={`${proj.images[0]}`}
                              className="aspect-square object-cover "
                              alt={proj.title}
                            />
                          </div>
                          <div className="p-[20px] bg-kaizen-black space-y-2">
                            <p className="text-2xl font-regular text-white">
                              {proj.title}
                            </p>
                            <p className=" text-white text-xs line-clamp-2 font-regular text-opacity-50">
                              {proj.descriptions}
                            </p>
                            <p className="text-white border border-white w-fit px-3 py-1 text-sm rounded-full">
                              {proj.category}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
            <div className="block md:hidden">
              <Splide
                tag="div"
                className="w-screen"
                hasTrack={false}
                aria-label="our projects"
                options={{
                  width: "100%",
                  arrows: true, // Display 2 slides per page
                  perMove: 1, // Move 1 slide at a time
                  gap: "1rem", // Adjust the gap between slides
                  fixedWidth: "70%",
                  omitEnd: true,
                  drag: false,
                }}
              >
                <div className="splide__arrows flex justify-end py-10 gap-8">
                  <button className="splide__arrow splide__arrow--prev">
                    <img src="./images/button-left.svg" alt="" />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <img src="./images/button-right.svg" alt="" />
                  </button>
                </div>
                <SplideTrack>
                  {projects.slice(0, 6).map((proj, index) => (
                    <SplideSlide key={`gg_${index}`} className="w-fit">
                      <Link to={`/projects/${proj.id}`}>
                        <div className=" max-w-[350px] group h-full">
                          <div className="relative">
                            <div className=" bg-kaizen-black absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40  transition-all"></div>
                            <div className="absolute border border-kaizen-white text-white rounded-full px-4 py-1 ml-4 -top-1/2 group-hover:top-5 duration-300 transition-all">
                              eplore
                            </div>
                            <Image
                              publicId={`${proj.images[0]}`}
                              className="aspect-square object-cover "
                              alt={proj.title}
                            />
                          </div>
                          <div className="p-[20px] bg-kaizen-black h-full space-y-2">
                            <p className="text-2xl font-regular text-white">
                              {proj.title}
                            </p>
                            <p className=" text-white text-xs line-clamp-2 font-regular text-opacity-50">
                              {proj.descriptions}
                            </p>
                            <p className="text-white border border-white w-fit px-3 py-1 text-sm rounded-full">
                              {proj.category}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </SplideSlide>
                  ))}
                </SplideTrack>
              </Splide>
            </div>
          </Container>
        </section>
        {/* contact us */}
        <ReachOut />
      </main>
      {footer}
    </>
  );
};

export default Home;
