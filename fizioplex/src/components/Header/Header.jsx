import React from 'react'
import Navbar from '../Navbar/Navbar'
import video1 from "../../assets/video/fizioplexx.mp4";
import video2 from "../../assets/video/landingpagevideo.mp4";
import video3 from "../../assets/video/landingpage2.mp4";

const Header = () => {
  return (
    <div>
     
      <section>
        <div className="bg-gray-900 h-screen  text-white py-1">
        <Navbar/>
        <div className="container mx-auto ml-10 flex flex-col md:flex-row items-center justify-center h-full">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start text-center md:text-left">
              <h1 className="text-4xl md:text-7xl p-2 text-primary tracking-widest">
                Fizoplex
              </h1>
              <p className='text-xl md:text-xl leading-relaxed md:leading-snug mt-4'>Klinika e Fizioterapie dhe Fitnessi</p>
              <h2 className="text-xl md:text-2xl leading-relaxed md:leading-snug mb-10">
               Aty ku Trupi Gjen Shërim dhe Fuqi
              </h2>
             
              <a
                href="/contact"
                className="bg-transparent hover:bg-primary text-primary hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="p-10 mb-28 md:mb-0 md:mt-0 ml-0 md:mr-10 lg:w-2/3 lg:h-56 md:w-11/12 w-11/12 ">
              <div className="lg:h-48 flex items-center content-center gap-8 ">
                <div >
                  <video className="inline-block rounded-l-full hidden  xl:block" autoPlay muted loop>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div >
                  <video className="inline-block rounded-full  md:mt-0 md:p-0" autoPlay muted loop>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div >
                  <video className="inline-block rounded-r-full hidden lg:block" autoPlay muted loop>
                    <source src={video3} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header