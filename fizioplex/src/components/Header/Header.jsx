import React from "react";
import Navbar from "../Navbar/Navbar";
import video1 from "../../assets/video/fizioplexx.mp4";
import video2 from "../../assets/video/landingpagevideo.mp4";
import video3 from "../../assets/video/landingpage2.mp4";

const Header = () => {
  return (
    <div>
      <section>
        <div className="bg-gray-900 font-roboto text-white py-2">
          <Navbar />
          <div className="container mx-auto p-2 sm:ml-10 lg:ml-16 flex flex-col md:flex-row justify-center items-center min-h-screen">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-center text-center md:text-left md:items-start">
              <h1 className="text-6xl sm:text-4xl md:text-7xl lg:text-8xl py-8 text-primary tracking-widest">
                Fizioplex
              </h1>
              <p className="text-sm md:text-xl leading-relaxed md:leading-snug md:my-3">
                Klinikë Fizioterapie dhe Fitnessi
              </p>
              <h2 className="text-sm md:text-sm lg:text-2xl leading-relaxed md:leading-snug mb-4 md:mb-10">
                Aty ku Trupi Gjen Shërim dhe Fuqi
              </h2>
              <a
                href="/contact"
                className="bg-transparent hover:bg-primary text-primary hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent transition-colors duration-300"
              >
                Rezervo Konsultën Tënde
              </a>
            </div>
            <div className="flex justify-center items-center w-full lg:w-2/3 mt-8 md:mt-0 md:mr-12 px-16">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <video
                  className="inline-block rounded-l-full hidden xl:block w-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video
                  className="inline-block rounded-full w-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video
                  className="inline-block rounded-r-full hidden xl:block w-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
