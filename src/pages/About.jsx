import { DefaultButton } from "../components/Components";
import { Container } from "../utils/TailwindComps";
import { Service } from "../sections/Service";
import { ReachOut } from "../sections/Contact";
import { SplitWordAnim } from "../components/Interactive";
import { Image } from "cloudinary-react";
import { useBoxOverlay } from "../utils/Interractive";

const About = ({ footer }) => {
  useBoxOverlay({
    classNames: "box-overlay",
  });

  return (
    <>
      <main className="  min-h-screen pt-[30vh]">
        <section className="mb-[10rem]">
          <Container className={`space-y-10`}>
            <div className="md:flex justify-between space-y-5">
              <div className="max-w-[400px]">
                {" "}
                <SplitWordAnim
                  tag={`h3`}
                  from={`bottom`}
                  text={`We deliver with unmatched professionalism`}
                />
              </div>
              <div className="md:max-w-[50%] space-y-10">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptates similique, voluptatibus animi itaque minus pariatur
                  aut! Quibusdam magni optio doloremque?
                </p>
                <div>
                  {" "}
                  <DefaultButton notShow color={`white`}>
                    Start a project
                  </DefaultButton>
                </div>
              </div>
            </div>
            <div className="box-overlay">
              <Image
                className="w-full aspect-[1/0.5] bg-gray-500 object-cover"
                publicId="https://res.cloudinary.com/kaizen-img/image/upload/v1692526135/kaizen/projects/nfl/07.jpg"
              />
            </div>
          </Container>
        </section>

        <section className="mb-[10rem]">
          <Container className={`space-y-10`}>
            <SplitWordAnim tag={`h3`} from={`bottom`} text={`How we work`} />
            <div className="grid md:grid-cols-2 gap-8">
              <div className=" space-y-8">
                <p className="max-w-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore sequi cum iusto esse cupiditate ab maiores quia
                  quisquam inventore aspernatur?
                </p>
                <div className="box-overlay w-full aspect-[1.2/0.5] bg-gray-500">
                  <Image
                    className="w-full aspect-[1.2/0.5] bg-gray-500 object-cover"
                    publicId="kaizen/projects/joynews/03.jpg"
                  />
                </div>
              </div>
              <div className=" space-y-8">
                <p className="max-w-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore sequi cum iusto esse cupiditate ab maiores quia
                  quisquam inventore aspernatur?
                </p>
                <div className="box-overlay w-full aspect-[1.2/0.5] bg-gray-500">
                  <Image
                    className="w-full aspect-[1.2/0.5] bg-gray-500 object-cover"
                    publicId="https://res.cloudinary.com/kaizen-img/image/upload/v1692526022/kaizen/projects/gys/04.jpg"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Service />
        <ReachOut />
      </main>
      {footer}
    </>
  );
};

export default About;
