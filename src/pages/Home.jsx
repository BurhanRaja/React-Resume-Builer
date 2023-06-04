import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font px-11">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to
              <br class="hidden lg:inline-block" />
              <p className="font-extrabold text-6xl">Resume Cratfr</p>
            </h1>
            <p class="mb-8 leading-relaxed">
              Start building your Resume for free and quickly using Resume
              Craftr
            </p>
            <div class="flex justify-center">
              <Link to="/register">
                <button class="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                  Build my Resume
                </button>
              </Link>
            </div>
          </div>
          <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/hero-image.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
