import React from "react";
import { Link } from "react-router-dom";
import { DefaultButton } from "./Components";

export const Footer = ({ themeState }) => {
  return (
    <footer
      className={`no-print  h-full  w-full 
     
      `}
    >
      <div className="container h-full">
        <div className="layer-up flex justify-center gap-10  h-full">
          <div className=" space-y-8  bg-kaizen-black p-5 py-8 md:pl-10 rounded-[1.5rem] text-white">
            <h3 className=" text-left">Work with us</h3>
            <p className=" max-w-3xl opacity-50 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, accusantium quasi ut consequuntur recusandae
              repudiandae iste. Dolor architecto impedit voluptatum?
            </p>
            <div>
              <DefaultButton
                outlined
                color="white"
                bColor="white"
                linkTo="/booking"
              >
                Book us now
              </DefaultButton>
            </div>
          </div>
          <div className=" flex flex-col gap-5 bg-kaizen-black overflow-hidden rounded-[1.5rem] h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d254113.28412412305!2d-0.12660637649361353!3d5.637613630085477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf849983684341%3A0x6c2902d726fb93cb!2sSpintex%20Road%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1699060836763!5m2!1sen!2sus"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className=" flex gap-8 p-5">
              <div>
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to="/services"
                >
                  Services
                </Link>
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to=""
                >
                  Portfolio
                </Link>
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to=""
                >
                  About us
                </Link>
              </div>

              <div className="flex flex-col">
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to=""
                >
                  LinkedIn
                </Link>
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to=""
                >
                  Twitter
                </Link>
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to=""
                >
                  Instagram
                </Link>
              </div>

              <div>
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to=""
                >
                  Terms of Service
                </Link>
                <Link
                  className={` flex 
                     text-kaizen-white
                     tracking-tighter
                `}
                  to=""
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="kaizen-slide-infinite">
          <h1>kaizen</h1>
        </div>
      </div>
    </footer>
  );
};
