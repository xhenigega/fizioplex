import React from "react";
import image1 from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* <!-- Logo --> */}
        <div className="text-teal-500 md:order-1">
          <img
            src={image1}
            className="h-10 w-10"
            alt="Descriptive Text About The Image"
          />
        </div>

        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold  justify-between">
            {/* <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 --> */}
            <li className="md:px-4 md:py-2 text-teal-500">
              <a href="#">Menu</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-teal-400">
              <a href="/services">Sherbimet tona</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-teal-400">
              <a href="/about">Reth nesh</a>
            </li>
           
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-4 py-2 bg-primary hover:bg-teal-700 text-gray-50 rounded-xl flex items-center gap-2">
            <span>Na kontaktoni</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
