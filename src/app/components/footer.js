import React from "react";
import Image from "next/image";
import everyChild from "../../../public/images/everyChild.png";

const footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div className="mt-3">
          <div className="flex justify-center items-center">
            <Image
              width={150}
              height={100}
              src={everyChild}
              alt="Every Child Matters Image"
            />
          </div>
          <p className="text-gray-500 mt-4">
            Made with ❤️ by Acknowledging Our Lands. All rights reserved.
          </p>
          <p className="text-gray-500 mt-4">© 2023 All rights reserved.</p>
        </div>

        <div className="mt-3 space-x-2">
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-500 transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="https://www.linkedin.com/in/chantellepasceri/"
            target="_blank"
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.875 0H2.125C1.009 0 0 1.009 0 2.125v19.75C0 22.991 1.009 24 2.125 24h19.75C22.991 24 24 22.991 24 21.875V2.125C24 1.009 22.991 0 21.875 0zM7.103 20.243h-3.15V9.102h3.15v11.141zM5.528 7.839c-1.08 0-1.924-.752-1.924-1.682 0-.931.844-1.683 1.924-1.683s1.924.752 1.924 1.683c0 .93-.845 1.682-1.924 1.682zM20.8 20.243h-3.15v-5.38c0-1.358-.486-2.283-1.697-2.283-1.158 0-1.843.775-2.143 1.523-.11.27-.138.647-.138 1.03v5.11h-3.15V9.102h2.995v1.284c.396-.612 1.098-1.49 2.672-1.49 1.957 0 3.437 1.28 3.437 4.023v5.324z" />
            </svg>
          </a>

          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-500 transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="https://github.com/bella77-69"
            target="_blank"
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-500 transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
            href="mailto:acknowledgingourlands@gmail.com"
            target="_blank"
          >
            <svg
              className="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.998 4H2c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h19.998c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zM21.998 18H2V8l9.999 7.5L21.998 8v10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
