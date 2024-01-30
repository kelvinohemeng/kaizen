import { Image } from "cloudinary-react";
import React from "react";
import { Container } from "../utils/TailwindComps";
import { TestimonialProj } from "./testimonial";
import { DefaultButton } from "./Components";

const Printable = ({ project }) => {
  return (
    <div className="hidden print:block py-[8rem] print:min-h-screen">
      <Container className={`space-y-5`}>
        <div className="space-y-5 ">
          <div>
            {" "}
            <h3 className="text-4xl text-black">{project.title}</h3>
            <p className="text-xl">{project.owner}</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="border border-kaizen-black text-white bg-kaizen-black w-fit px-4 rounded-full">
                {project.category}
              </div>
              <div className="font-medium text-kaizen-blue">{project.date}</div>
            </div>
            <p className=" md:max-w-[70%] pt-5">{project.descriptions}</p>
          </div>
          <Image
            className="w-full h-[297px] aspect-square object-cover"
            publicId={project.images[0]}
          />
        </div>
        <div className="grid gap-10  ">
          <div>
            <h4>Challenges</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              alias sapiente dignissimos eos iusto, doloribus, voluptatibus et
              expedita officiis voluptatum enim provident sunt beatae,
              cupiditate quisquam? Deleniti assumenda repellat mollitia.
            </p>
          </div>
          <div className="pt-[5rem] break-before-page">
            <h4>Outcome</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              dolor blanditiis recusandae atque nulla error aut iure laudantium,
              repellat a.
            </p>
          </div>
        </div>

        {project.testimonialData && (
          <div className="pt-[5rem] space-y-9">
            {/* testimonial */}
            <h4>Testimonial</h4>
            {project.testimonialData.map((projectTestimonial, testIndex) => (
              <TestimonialProj
                name={projectTestimonial.person}
                statement={projectTestimonial.statement}
                rating={4.5}
              />
            ))}
          </div>
        )}
        <div className="flex flex-col gap-4 pt-[2rem] break-before-page">
          <h3>Project gallary</h3>
          {project.images.map((image, index) => (
            <div>
              <Image
                className="w-full h-[297px] aspect-square object-cover"
                publicId={image}
              />
            </div>
          ))}
        </div>
        <div className="">
          <button className="bg-black text-white px-6 py-2 rounded-md">
            <a href=""> Start a project with us</a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Printable;
