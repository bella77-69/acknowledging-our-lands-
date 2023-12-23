import React from "react";
import land from "../../../public/images/land4.gif";
import Link from "next/link";

function Hero() {
  return (
    <div
      // className="relative h-screen bg-cover bg-center bg-no-repeat"
      className="bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${land.src})` }}
    >
      <div className="h-full flex flex-col justify-center items-center">
        <div className="max-w-[85rem] w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 space-y-6 sm:space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="font-semibold text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Welcome to Acknowledging Our Lands
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
              Acknowledging Our Lands! This app will help you detect your
              location and guide you through the process of making a meaningful
              territory acknowledgment.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed">
              Thanks to the valuable dataset provided by Native Land Digital,
              our project has been able to accurately map and acknowledge the
              Indigenous territories and traditional lands. Visit their website
              at{" "}
              <a
                className="hero-link"
                href="https://native-land.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Native Land
              </a>{" "}
              to learn more about their important work.
            </p>
          </div>

          <div className="text-center">
            <a
              className="inline-flex justify-center items-center gap-x-2 text-center bg-gray-600 
              hover:bg-gray-700  // Added this line for hover effect
              text-white text-xs sm:text-sm md:text-base font-medium rounded-full 
              hover:from-gray-700 hover:to-gray-700 shadow-lg hover:shadow-xl border border-transparent 
              focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-500 
              transition py-2 px-4 md:px-6 dark:focus:ring-offset-gray-900"
              href="/land-acknowledgement"
            >
              Get started
              <svg
                className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
