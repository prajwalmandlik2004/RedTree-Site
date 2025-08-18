"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Pricing and Plans`,
                description: `Start local. Add secure sync when needed. Scale to team workspace.`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">


              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Freemium
                  </h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400">
                    (Local Only)
                  </h4>
                </div>
              </div>

              <p className="mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                Unlimited local use.<br />
                Capture, classify (RT²),<br />
                annotate — all on device.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    No permanent free cloud storage
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Includes a trial sync: 14 days / up to 500 MB
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    After the trial, sync stops — upgrade required
                  </span>
                </div>
              </div>

              <button className="w-full py-3 px-6 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                Use locally
              </button>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">

              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>


              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Premium
                  </h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400">
                    (Annual)
                  </h4>
                </div>
              </div>

              <p className="mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                Secure sync & backup<br />
                across devices — with<br />
                integrated AI.
              </p>

              <div className="mb-6 space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">50 GB</span>
                  <span className="font-bold text-xl text-black dark:text-white">€29 / year</span>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">200 GB</span>
                  <span className="font-bold text-xl text-black dark:text-white">€59 / year</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Multi-device sync
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    AI: search, contextual linking, smart retrieval
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Encrypted storage in transit & at rest
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">⊙</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Data encrypted in transit & at rest
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">⊙</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Region selection (where available)
                  </span>
                </div>
              </div>

              <button className="w-full py-3 px-6 bg-red-500 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Choose Premium
              </button>
            </div>

            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Professional /
                  </h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-400">
                    Workspace
                  </h4>
                </div>
              </div>

              <p className="mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                Team storage,<br />
                collaboration, and<br />
                AI Pro.
              </p>

              <div className="mb-6 p-3 border border-gray-200 rounded-lg dark:border-gray-700">
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">1 TB shared team storage</div>
                <div className="font-bold text-xl text-black dark:text-white">
                  €199 /<br />
                  <span className="text-base">year / user</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Shared folders & simple roles (Admin / Member)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    AI Pro: full analysis of notes, annotations (text + voice) & classifications
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Priority email support
                  </span>
                </div>
              </div>

              <button className="w-full py-3 px-6 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;