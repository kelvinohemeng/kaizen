import React from "react";
import { Container } from "../utils/TailwindComps";
import { DefaultButton } from "../components/Components";
import { SplitWordAnim } from "../components/Interactive";

export const ReachOut = () => {
  return (
    <section className="relative ">
      <Container className=" space-y-20 mb-[10rem] z-10 relative">
        <div>
          <p>Ready to elevate your project,</p>
          <SplitWordAnim tag={`h3`} from={`bottom`} text={`Reach out to us!`} />
        </div>
        <div className=" flex gap-8">
          <div className="max-w-[650px] w-full  aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d254113.28412412305!2d-0.12660637649361353!3d5.637613630085477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf849983684341%3A0x6c2902d726fb93cb!2sSpintex%20Road%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1699060836763!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col gap-1">
              <p>Email</p>
              <p className="text-sm">
                Send us a mail to discus your next big project
              </p>
              <a href="mailto:companymail@company.com">
                companymail@company.com
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <p>Phone</p>
              <p className="text-sm">Call us on these lines</p>
              <a href="tel:+1 (555) 000-0000">+1 (555) 000-0000</a>
            </div>
            <div className="flex flex-col gap-1">
              <p>Office</p>
              <p className="text-sm">Visit our main office</p>
              <a href="mailto:companymail@company.com">Get Directions</a>
            </div>
            <div className=" flex gap-4">
              <DefaultButton notShow color={`white`}>
                Start a project
              </DefaultButton>
              <DefaultButton notShow color={`white`}>
                Reach out
              </DefaultButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
