"use client";
import { motion } from "framer-motion";
import { Search, Zap, Filter, FileText, Image, Mic, Calendar, Tag } from "lucide-react";

const SearchPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Search",
      description: "Find any file instantly with our optimized search algorithm that scans through thousands of files in milliseconds."
    },
    {
      icon: Filter,
      title: "Advanced Filters",
      description: "Narrow down results by file type, date, folder location, tags, and more with powerful filtering options."
    },
    {
      icon: FileText,
      title: "Text Content Search",
      description: "Search within text memos and notes, not just file names. Find content based on what you wrote inside."
    },
    {
      icon: Image,
      title: "Image Recognition",
      description: "Locate photos and images by searching for visual content, dates captured, or associated metadata."
    },
    {
      icon: Mic,
      title: "Voice Memo Search",
      description: "Quickly find voice recordings by date, duration, or the tags you've associated with them."
    },
    {
      icon: Calendar,
      title: "Date-Based Search",
      description: "Search files by creation date, modification date, or custom date ranges for precise results."
    },
    {
      icon: Tag,
      title: "Tag & Annotation Search",
      description: "Find files by searching through annotations and tags you've added for better organization."
    },
    {
      icon: Search,
      title: "Smart Suggestions",
      description: "Get intelligent search suggestions as you type, helping you find files even with partial information."
    }
  ];

  return (
    <>
      <section className="pb-20 pt-15 lg:pb-25 lg:pt-20 xl:pb-30 xl:pt-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-600 mb-6"
            >
              <Search className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl mb-4"
            >
              Universal Search
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              Find anything, anywhere, instantly. Our powerful search engine helps you locate images, voice memos, text notes, and files across your entire RedTree collection in seconds.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-2 xl:gap-12.5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-stroke bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gray-600/10">
                    <feature.icon className="h-7.5 w-7.5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search Demo Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-10">
              <h2 className="text-2xl font-bold text-white mb-8 md:text-3xl text-center">
                Search Everything, Find Anything
              </h2>
              
              {/* Search Bar Demo */}
              <div className="max-w-3xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search images, voice memos, notes, and more..."
                    className="w-full pl-14 pr-4 py-5 rounded-full text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 transition-all"
                  />
                </div>
              </div>

              {/* Quick Filter Tags */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm cursor-pointer hover:bg-white/20 transition-all">
                  📷 Images
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm cursor-pointer hover:bg-white/20 transition-all">
                  🎤 Voice Memos
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm cursor-pointer hover:bg-white/20 transition-all">
                  📝 Text Notes
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm cursor-pointer hover:bg-white/20 transition-all">
                  📁 Folders
                </span>
              </div>

              <div className="text-center">
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-gray-800 hover:bg-gray-100 transition-colors">
                  Try Advanced Search
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;