import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <div className="w-10 h-10 text-white p-2 bg-red-500 rounded-full text-center">
              L
            </div>
            <span className="ml-3 text-xl">Live</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/"} className="mr-5 hover:text-gray-900">
              All Streams
            </Link>
          </nav>
          <GoogleAuth />
        </div>
      </header>
    </>
  );
};

export default Header;
