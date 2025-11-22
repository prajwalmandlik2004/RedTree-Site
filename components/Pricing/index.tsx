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
                </div>
              </div>

              <h1 className="mb-8 text-black leading-relaxed ms-8 text-xl">
                €0/30 days
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Full access to all features
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Local storage
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Web sync up to 1 GB, access limited to 30 days
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    No payment, No Credit Card required
                  </span>
                </div>
              </div>

              <button className="w-full py-3 px-6 bg-red-500 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Start Free
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

                </div>
              </div>

              <h1 className="mb-8 text-black leading-relaxed ms-8 text-xl">
                €9/month or €69/year
              </h1>


              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Everything included in Freemium
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Secure web synchronization (10 GB storage on Red Tree servers)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Multi Device Backup
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-400">
                    Unlimited photo capture and annotations (text + voice)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-400">
                    Full RT navigation and management
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-400">
                    Priority updates and maintenance
                  </span>
                </div>
              </div>

              <button className="w-full py-3 px-6 bg-red-500 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Subscribe
              </button>
            </div>



            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Pro
                  </h3>
                </div>
              </div>

              <h1 className="mb-8 text-black leading-relaxed ms-8 text-xl">
                €19/month or €199/year
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Everything included in Premium
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Collaborative sharing (Pro profiles)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Smart cross-search and advance filtering
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    AI-assisted analysis and summaries
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-800 dark:text-gray-200">
                    Early access to new modules and beta features
                  </span>
                </div>
              </div>


              <button className="w-full py-3 px-6 bg-red-500 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Upgrade to Pro
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;