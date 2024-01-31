import React from "react";
import { Container } from "../utils/TailwindComps";
import { SplitWordAnim } from "../components/Interactive";
import { DefaultButton } from "../components/Components";
import { ReachOut } from "../sections/Contact";
import { Image } from "cloudinary-react";
import { useBoxOverlay } from "../utils/Interractive";

const Service = ({ footer }) => {
  const services = [
    {
      id: 1,
      title: "Audio Visual Design",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
    {
      id: 2,
      title: "Conferencing",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
    {
      id: 3,
      title: "System Integration",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
    {
      id: 4,
      title: "Interactive Media",
      context:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam aspernatur quam repudiandae ut sapiente accusamus laborum esse quisquam, nisi iusto, omnis, quo fugit sit. Laborum eius atque sunt a?",
    },
  ];

  useBoxOverlay({
    classNames: "box-overlay",
  });
  return (
    <>
      <main className="  min-h-screen pt-[30vh]">
        <section className="mb-[10rem]">
          <Container>
            {/* intro */}
            <div className="space-y-10">
              <div className="md:max-w-[50%] space-y-4">
                <div>
                  {" "}
                  <SplitWordAnim
                    tag={`h3`}
                    from={`bottom`}
                    text={`Our Core Strength`}
                  />
                </div>
                <div>
                  <SplitWordAnim
                    duration={0.4}
                    from={`bottom`}
                    text={`Built on a unique model of relentless dedication to detail and service, our team is on the front-lines of developing and redefining integrated systems delivery in Ghana. Over years, `}
                  />
                </div>
              </div>
              <div className="box-overlay">
                <Image
                  className="W-full aspect-square md:aspect-[1/.35] bg-gray-500 object-cover object-center"
                  publicId="kaizen/projects/samsung_unpacked/05.jpg"
                />
              </div>
            </div>
            <div className="pt-[10rem] space-y-[10rem]">
              {services.map((service, index) => (
                <div
                  className="grid grid-col-1 md:grid-cols-2 gap-12"
                  key={`ccq-${index}`}
                >
                  <div className="relative">
                    <div className=" space-y-4 sticky top-[5rem]">
                      <div>
                        {" "}
                        <SplitWordAnim
                          tag={`h3`}
                          from={`bottom`}
                          text={service.title}
                        />
                      </div>
                      <div className="fade-in space-y-4">
                        <div>
                          <p>{service.context} </p>
                        </div>
                        <div>
                          <DefaultButton noFill>
                            Book this service
                          </DefaultButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-overlay W-full aspect-[1/1.1] bg-gray-500"></div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <ReachOut />
      </main>
      {footer}
    </>
  );
};

export default Service;
