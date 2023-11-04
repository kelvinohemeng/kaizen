import { useState } from "react";
import { Image, Video } from "cloudinary-react";
import { Reveal, Tween } from "react-gsap";
import { Link } from "react-router-dom";
// import "./App.scss";
import { DefaultButton } from "../components/Components";
import { GsapReveal, GsapScale, GsapScaleCus } from "../components/Gsaps";
import { Accordion } from "../components/Accordion";
import { Faq } from "../components/Faq";
// import { ApproachCard } from "../components/ApproachCard";

const approachData = [
  {
    id: 1,
    title: "Empathise",
    context:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
  {
    id: 2,
    title: "Ideate",
    context:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
  {
    id: 3,
    title: "Prototype",
    context:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
  {
    id: 4,
    title: "Execute",
    context:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
  },
];
const NotFound = ({ themeState, footer }) => {
  return (
    <>
      <section className=" w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-6">
          <h1>404</h1>
          <p>Page not found or page timeout</p>
          <DefaultButton linkTo="/" color="white">
            Go back home
          </DefaultButton>
        </div>
      </section>
    </>
  );
};

export default NotFound;
