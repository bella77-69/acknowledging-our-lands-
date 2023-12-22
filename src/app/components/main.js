import React from "react";
import Image from "next/image";
import land from "../../../public/images/land-landscape.png";
import land1 from "../../../public/images/land-landscape1.png";
import land2 from "../../../public/images/land-landscape2.png";
import land3 from "../../../public/images/land-landscape3.png";

const main = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Territory acknowledgment is
          </h2>
          <p className="mb-4">
            crucial to respecting Indigenous presence and land rights,
            highlighting the ongoing impacts of colonialism. It's vital during
            events to express solidarity, fostering reconciliation and promoting
            a deeper understanding of Indigenous history and culture.
          </p>
          <p>
            However, we understand the significance of going beyond mere token
            gestures. Our app emphasizes meaningful actions, urging settlers to
            reflect on privileges shaped by historical colonial injustices.
            Recognize that these privileges result from Indigenous dispossession
            and marginalization.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={land}
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={land1}
            alt="office content 2"
          />
        </div>
      </div>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={land2}
            alt="office content 1"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={land3}
            alt="office content 2"
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            With Acknowledging Our Lands,
          </h2>
          <p className="mb-4">
            we aim to promote understanding and empathy. By helping you identify
            your location and providing information on the Indigenous
            territories you are on, our app encourages a deeper connection to
            the land and its history. We believe that this awareness can lead to
            more informed and respectful territory acknowledgments.
          </p>
          <p>
            Let's take a step forward in supporting reconciliation efforts and
            working towards a society that acknowledges and honors Indigenous
            rights and sovereignty. Download our app today and join us in making
            a positive impact through meaningful territory acknowledgments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default main;
