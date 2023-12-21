import React from "react";
import land from "../../../public/images/land4.gif";
import Link from "next/link";
function hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${land.src})` }}
    >
      <div className=" h-full">
        {/* <div className="bg-gradient-to-b from-gray-800 via-transparent h-full"> */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          {/* <div class="flex justify-center">
            <a
              class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
              href="./land-acknowledgement"
            >
              <p class="me-2 inline-block text-white text-sm">
               Get Started
              </p>
              <span class="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </a>
          </div> */}

          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Acknowledging Our Lands
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-400">
            Acknowledging Our Lands!This app will help you
          detect your location and guide you through the process of making a
          meaningful territory acknowledgment.
            </p>
            <p className="text-lg text-gray-400">
            Thanks to the valuable dataset provided by Native Land Digital, our
          project has been able to accurately map and acknowledge the Indigenous
          territories and traditional lands. Visit their website at{" "}
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
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="/land-acknowledgement"
            >
              Get started
              <svg
               className="flex-shrink-0 w-4 h-4"
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

export default hero;
