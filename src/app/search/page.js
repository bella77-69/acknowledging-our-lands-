"use client";
import React, { useState } from "react";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
import Loading from "../components/loading";

export default function Search() {
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState(null);
  const [indigenousLands, setIndigenousLands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCityInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const cityResponse = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          inputCity
        )}&key=${apiKey}`
      );

      const cityData = await cityResponse.json();
      console.log("City data:", cityResponse);
      if (cityData.results.length > 0) {
        const { lat, lng } = cityData.results[0].geometry;

        const indigenousLandResponse = await fetch(
          `https://native-land.ca/api/index.php?maps=territories&position=${lat},${lng}`
        );
        console.log("City data:", cityData);
        console.log("Indigenous Land data:", indigenousLandResponse);
        const indigenousLandData = await indigenousLandResponse.json();

        setError(null);
        setIndigenousLands(indigenousLandData);
      } else {
        setError("City data not found");
        setIndigenousLands([]);
      }
    } catch (error) {
      console.error("Error fetching city and indigenous land data:", error);
      setError("An error occurred while fetching data.");
      setIndigenousLands([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <section className="min-h-screen flex flex-col items-center justify-center font-poppins dark:bg-gray-800 sm:flex-row p-4">
    //   <div className="w-full max-w-3xl py-4 mx-auto">
    //     <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md sm:flex-row dark:bg-gray-900">
    //       <div className="w-full p-4 md:w-1/2">
    //         <h2 className="mb-4 text-4xl font-black text-center lg:text-left text-gray-300">
    //           Locate the Lands You Stand On
    //         </h2>
    //         <p className="mb-8 text-base leading-loose text-center text-gray-500 lg:text-left lg:max-w-lg">
    //           Enter your location to take a step towards reconciliation by
    //           acknowledging the Indigenous lands you are on and understanding
    //           their significance in the broader tapestry of Indigenous rights
    //           and recognition.
    //         </p>
    //       </div>
    //       <div className="w-full p-4 md:w-1/2">
    //         <div className="flex flex-col sm:flex-row  items-center justify-center md:justify-end">
    //           <input
    //             className="w-full px-4 py-2 mb-4 md:mr-2 leading-loose text-center bg-white border border-gray-300 lg:mb-0 lg:text-left lg:w-auto rounded-xl dark:border-gray-800 dark:text-gray-400 dark:bg-gray-800"
    //             value={inputCity}
    //             onChange={handleCityInputChange}
    //             type="text"
    //             placeholder="Enter your city"
    //             required=""
    //           />
    //           <button
    //             className="inline-block w-full px-4 py-2 mb-4 font-bold leading-loose text-white transition duration-200 bg-blue-500 lg:mb-0 lg:text-left lg:w-auto hover:bg-blue-700 rounded-xl "
    //             onClick={handleSearch}
    //           >
    //             Search
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     {isLoading && <Loading />}
    //     <div className="py-4 mx-auto ">
    //       <p className="text-sm leading-loose text-center text-red-500 lg:text-left lg:max-w-lg">
    //         {error}
    //       </p>
    //       {indigenousLands.length > 0 && (
    //         <div className="flex flex-col items-center bg-gray-900 rounded-lg shadow-lg p-4 ">
    //           <h2 className="mb-4 text-2xl font-bold text-left text-gray-300">
    //             Discover Indigenous Lands in {inputCity}
    //           </h2>
    //           <ul className="text-sm leading-loose lg:text-left lg:max-w-lg">
    //             {indigenousLands.map((land) => (
    //               <li
    //                 key={land.properties.Name}
    //                 className="py-2 border-b border-gray-200 last:border-b-0 text-gray-500"
    //               >
    //                 {land.properties.Name}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </section>
    <section className="min-h-screen flex flex-col items-center justify-center font-poppins dark:bg-gray-900 sm:flex-row p-4">
  <div className="w-full max-w-3xl py-8 mx-auto">
    <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-lg sm:flex-row dark:bg-gray-800">
      <div className="w-full p-6 md:w-1/2 mx-auto md:p-10 ">
        <h2 className="mb-6 text-4xl font-black text-center lg:text-left text-gray-400">
          Locate the Lands You Stand On
        </h2>
        <p className="mb-10 text-base leading-loose text-center text-gray-600 lg:text-left lg:max-w-lg">
          Enter your location to take a step towards reconciliation by acknowledging the Indigenous lands you are on and understanding their significance in the broader tapestry of Indigenous rights and recognition.
        </p>
      </div>
      <div className="w-full p-6 md:w-1/2">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end">
          <input
            className="w-full px-4 py-3 mb-6 md:mr-4 leading-loose text-center bg-white border border-gray-400 lg:mb-0 lg:text-left lg:w-auto rounded-xl dark:border-gray-700 dark:text-gray-400 dark:bg-gray-700"
            value={inputCity}
            onChange={handleCityInputChange}
            type="text"
            placeholder="Enter your city"
            required=""
          />
          <button
            className="inline-block w-full px-6 py-3 mb-6 font-bold leading-loose text-white transition duration-200 bg-blue-600 lg:mb-0 lg:text-left lg:w-auto hover:bg-blue-700 rounded-xl "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {isLoading && <Loading />}
    <div className="py-6 mx-auto ">
      <p className="text-sm leading-loose text-center text-red-600 lg:text-left lg:max-w-lg">
        {error}
      </p>
      {indigenousLands.length > 0 && (
        <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-xl p-6 ">
          <h2 className="mb-6 text-2xl font-bold text-left text-gray-400">
            Discover Indigenous Lands in {inputCity}
          </h2>
          <ul className="text-sm leading-loose lg:text-left lg:max-w-lg">
            {indigenousLands.map((land) => (
              <li
                key={land.properties.Name}
                className="py-3 border-b border-gray-300 last:border-b-0 text-gray-600"
              >
                {land.properties.Name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
</section>
  );
}
