"use client";
import Image from "next/image";
import { useState } from "react";
import { Smartphone } from "lucide-react";


const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Capture Moments & Organize Seamlessly with RedTree
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-red-500 dark:text-red-500 xl:text-hero ">
                RedTree App and Software Site {"   "}
                {/* <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  SaaS
                </span> */}
              </h1>
              <p>
                An intelligent camera experience combined with a tree-structured file system. Capture, store, and manage your memories efficiently – all in one intuitive app.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}

                    <button
                      aria-label="get started button"
                      className="flex items-center rounded-lg bg-red-500 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-500"
                    >
                      Download Now
                      <svg className="ml-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M17.523 15.3414c-.5665 0-1.0253-.4588-1.0253-1.0253s.4588-1.0253 1.0253-1.0253 1.0253.4588 1.0253 1.0253-.4588 1.0253-1.0253 1.0253zm-11.046 0c-.5665 0-1.0253-.4588-1.0253-1.0253s.4588-1.0253 1.0253-1.0253 1.0253.4588 1.0253 1.0253-.4588 1.0253-1.0253 1.0253zm11.405-6.34l1.48-2.501c.092-.155.037-.353-.118-.445-.155-.092-.353-.037-.445.118l-1.501 2.534c-1.398-.716-2.973-1.092-4.758-1.092-1.784 0-3.36.375-4.758 1.092L6.281 6.172c-.092-.155-.29-.21-.445-.118-.155.092-.21.29-.118.445L7.198 8.96C4.089 10.868 2 14.439 2 18.5h20c0-4.061-2.089-7.632-5.198-9.54z" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                /> */}
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/app.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/app.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
