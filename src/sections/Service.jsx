import React from "react";
import { Container } from "../utils/TailwindComps";
import { DefaultButton } from "../components/Components";
import { SplitWordAnim } from "../components/Interactive";
import { Image } from "cloudinary-react";

export const Service = () => {
  const services = [
    {
      id: 1,
      title: "Audio Visual Design",
      image:
        "https://res.cloudinary.com/kaizen-img/image/upload/v1692525955/kaizen/projects/hp19/01.jpg",
      context:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
    {
      id: 2,
      title: "Conferencing",
      image:
        "https://res.cloudinary.com/kaizen-img/image/upload/v1692525956/kaizen/projects/hp19/02.jpg",
      context:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
    {
      id: 3,
      title: "System Integration",
      image:
        "https://res.cloudinary.com/kaizen-img/image/upload/v1692526027/kaizen/projects/hubtel/00.jpg",
      context:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
    {
      id: 4,
      title: "Interactive Media",
      image:
        "https://res.cloudinary.com/kaizen-img/image/upload/v1692526036/kaizen/projects/itc/02.jpg",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
  ];

  return (
    <section className=" mb-[10rem]">
      <Container className="grid md:grid-cols-2  gap-12">
        <div className=" flex flex-col justify-start gap-10 items-start relative">
          <div className=" sticky top-[5rem] space-y-4">
            <div className="wck space-y-5 ">
              <SplitWordAnim tag={`h3`} from={`bottom`} text={`Our Services`} />
            </div>

            <div className="fade-in-horizontal flex gap-4 flex-wrap">
              <div className="max-w-[500px]">
                <p>
                  Experience the future of audio visual with kaizen AV Projects.
                  Book a service with us today and take your business to the
                  next level.
                </p>
              </div>
              <DefaultButton notShow color={`white`}>
                Learn more
              </DefaultButton>
              <DefaultButton notShow blackBg color={`white`}>
                take my money already
              </DefaultButton>
            </div>
          </div>
        </div>

        <div className="flex gap-8 justify-self-center relative">
          <div className="flex-1  grid relative gap-4">
            {services.map((service, index) => (
              <div
                key={"cac__" + index}
                className={` p-2 max-w-[350px] sticky top-[5rem] rounded-md bg-kaizen-accent bg-opacity-40 text-white`}
                style={{
                  transform: `rotate(${
                    index === 0
                      ? -4
                      : index === 1
                      ? 1
                      : index === 2
                      ? -4
                      : index === 3
                      ? 1
                      : ""
                  }deg)`,
                }}
              >
                <div className="bg-kaizen-black p-4 rounded-md space-y-8">
                  <div className="w-full aspect-video bg-kaizen-white">
                    <Image publicId={service.image} />
                  </div>
                  <div>
                    {" "}
                    <h5 className="text-white">{service.title}</h5>
                    <p className="leading-4 pt-2">
                      <span className="text-white text-opacity-40 font-regulart text-[14px] line-clamp-3">
                        {service.context}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
