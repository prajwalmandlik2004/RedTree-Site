"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-20 md:pt-25 xl:pb-25 xl:pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <div className="text-center mt-6 mb-6">
            <h4 className="text-base md:text-lg font-medium text-black dark:text-white">
              Capture Moments & Organize Seamlessly with RedTree
            </h4>
          </div> */}

          <div className="mt-3 relative flex flex-col items-center">
            <div className="relative w-full">
              <div className="relative z-20 flex justify-center mb-[-30px] md:mb-[-40px]">
                <div className="w-20 h-20 md:w-30 md:h-30 bg-white rounded-full p-2 shadow-lg">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero/redtreelogo.png"
                      alt="RedTree Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="relative aspect-[10/8] md:aspect-[20/8] w-full max-w-7xl mx-auto rounded-lg overflow-hidden -mt-2 md:-mt-3">
                <Image
                  src="/images/hero/hero_bg.jpeg"
                  alt="RedTree Hero Background"
                  fill
                  className="object-cover contrast-105 saturate-150"
                  priority
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 pt-8 md:pt-12">
                  <div className="max-w-4xl mt-4 md:mt-8">
                    <div className="mb-4 md:mb-6">
                      <p className="text-white text-base md:text-xl lg:text-3xl font-medium italic leading-relaxed mb-2 text-left ml-8 md:ml-16" style={{ fontFamily: 'Times New Roman, serif' }}>
                        "In the legends of the North,
                      </p>
                      <p className="mt-3 text-white text-base md:text-xl lg:text-3xl font-medium italic leading-relaxed mb-4 text-left ml-16 md:ml-40" style={{ fontFamily: 'Times New Roman, serif' }}>
                        there is a tree that sees, judges, and weeps...
                      </p>
                      <p className="mt-10 text-white text-base md:text-xl lg:text-3xl font-medium italic leading-relaxed text-left ml-24 md:ml-46" style={{ fontFamily: 'Times New Roman, serif' }}>
                        RedTree has no carved face, but it, too, remembers."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 max-w-5xl">
              <h3 className="text-center md:text-left md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4 md:ms-[-100px]">
                An exclusive intelligent camera experience combined with a powerful, seamless tree-structured file system.
              </h3>

              <h3 className="text-center font-bold md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed md:ms-30">
                Capture, name, store and manage all your memories, notes and any data like you never could imagine before.
              </h3>

              <div className="flex justify-center">
                <button
                  aria-label="download button"
                  className="flex items-center rounded-lg bg-red-500 px-6 py-2.5 text-white text-lg font-medium duration-300 ease-in-out hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 shadow-lg"
                >
                  Download Now
                  <svg className="ml-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;