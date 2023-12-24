"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LandAcknowledgment from "./landAcknowledgement";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const Location = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [indigenousLands, setIndigenousLands] = useState([]);
  const [error, setError] = useState(null);

  // Function to fetch Indigenous Land information using the Native Land API.
  const fetchIndigenousLands = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://native-land.ca/api/index.php?maps=territories&position=${latitude},${longitude}`
      );
      console.log("Indigenous Land data:", response);
      // Handle the response and set the state with the Indigenous Land data.
      setIndigenousLands(response.data);
    } catch (error) {
      console.error("Error fetching Indigenous Land data:", error);
    }
  };

  // Function to fetch city information based on latitude and longitude using OpenCageData API.
  const fetchCityData = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
      );
      console.log("City data:", response);
      if (response.data.results.length > 0) {
        const city = response.data.results[0].components.city;
        setCity(city);
      } else {
        setCity("City data not found");
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Success callback: position contains the user's location
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          // Fetch city information based on the user's location
          fetchCityData(position.coords.latitude, position.coords.longitude);

          // Fetch Indigenous Land information based on the user's location
          fetchIndigenousLands(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          // Error callback: handle the error if there's a problem fetching the location
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  }, []);

  return (
    <section className="flex flex-col font-poppins  bg-gray-800">
      {/* <div className="relative bg-center bg-no-repeat bg-cover"> */}
        {/* <div class="absolute top-0 left-0 w-full h-full bg-gray-800"> */}
        {/* <div className="p-8"> */}
        {latitude && longitude ? (
          <div className="px-4 py-4 mx-auto lg:py-10 md:px-7">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-wide text-gray-100 my-7 dark:text-gray-300 lg:text-6xl">
                Land Acknowledgement
              </h2>
              <span className="text-lg font-bold text-blue-300 dark:text-blue-200">
                Your Current Location:
              </span>
              <p className="mb-10 text-base font-medium text-gray-300 dark:text-gray-400 md:text-lg">
                This page detects your current location and displays the
                coordinates. Additionally, the land acknowledgment section below
                helps you identify the traditional lands you are on, fostering
                awareness and respect.
              </p>
              <p class="text-base font-medium text-gray-700 md:text-lg dark:text-gray-400">
                Latitude:{" "}
                <span className="text-sm text-gray-100">{latitude}</span>
              </p>
              <p class="text-base font-medium text-gray-700 md:text-lg dark:text-gray-400">
                Longitude:{" "}
                <span className="text-sm text-gray-100">{longitude}</span>
              </p>
              <p class="text-base font-medium text-gray-700 md:text-lg dark:text-gray-400">
                City: <span className="text-sm text-gray-100">{city}</span>
              </p>
              <div class="flex flex-wrap items-center justify-center">
                <LandAcknowledgment indigenousLands={indigenousLands} />
              </div>

              {/* <div class="w-full px-4 mb-20 md:w-1/3 md:mb-0">
              <h2 class="mb-6 text-3xl font-bold text-gray-700 dark:text-gray-400">
              Your Current Location:
              </h2>
              <p class="text-base text-gray-500 dark:text-gray-400">
                This page detects your current location and displays the
                coordinates. Additionally, the land acknowledgment section below
                helps you identify the traditional lands you are on, fostering
                awareness and respect.
              </p>
            </div> */}
              {/* <div class="w-full px-4 text-center md:w-1/3">
              <div class="inline-block md:ml-auto">
                <div className="space-y-2">
                  <span class="text-sm text-gray-100">Get Started Today</span>
                  <p className="text-sm text-gray-100">
                    Latitude: <span className="text-sm text-gray-100">{latitude}</span>
                  </p>
                  <p className="text-sm text-gray-100">
                    Longitude: <span className="text-sm text-gray-100">{longitude}</span>
                  </p>
                  <p className="font-semibold text-white">
                    City: <span className="text-sm text-gray-100">{city}</span>
                  </p>
                </div>
                <div className="land-acknowledgment-container text-sm text-gray-100">
                  <LandAcknowledgment indigenousLands={indigenousLands} />
                </div>
              </div>
            </div> */}
            </div>
          </div>
        ) : error ? (
          <p className="alert alert-danger">Error: {error}</p>
        ) : (
          <p>Loading location...</p>
        )}
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Location;
