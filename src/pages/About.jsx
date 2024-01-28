import { DefaultButton } from "../components/Components";
import { Container } from "../utils/TailwindComps";
import { Service } from "../sections/Service";
import { ReachOut } from "../sections/Contact";
import { SplitWordAnim } from "../components/Interactive";

const About = ({ footer }) => {
  return (
    <>
      <main className="  min-h-screen pt-[30vh]">
        <section className="mb-[10rem]">
          <Container className={`space-y-10`}>
            <div className="flex justify-between">
              <div className="max-w-[400px]">
                {" "}
                <SplitWordAnim
                  tag={`h3`}
                  from={`bottom`}
                  text={`We deliver with unmatched professionalism`}
                />
              </div>
              <div className="max-w-[50%] space-y-10">
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
            <div className="w-full aspect-[1.2/0.5] bg-gray-500"></div>
          </Container>
        </section>

        <section className="mb-[10rem]">
          <Container className={`space-y-10`}>
            <h3>How we work</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className=" space-y-8">
                <p className="max-w-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore sequi cum iusto esse cupiditate ab maiores quia
                  quisquam inventore aspernatur?
                </p>
                <div className="w-full aspect-[1.2/0.5] bg-gray-500"></div>
              </div>
              <div className=" space-y-8">
                <p className="max-w-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore sequi cum iusto esse cupiditate ab maiores quia
                  quisquam inventore aspernatur?
                </p>
                <div className="w-full aspect-[1.2/0.5] bg-gray-500"></div>
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
