"use client";
import { motion } from "framer-motion";
import { Camera, Video, Zap, FolderTree, Mic, Image as ImageIcon, Settings, Sparkles } from "lucide-react";

const CameraPage = () => {
  const features = [
    {
      icon: Camera,
      title: "High-Quality Capture",
      description: "Take stunning photos with advanced camera controls and high-resolution output for professional-grade results."
    },
    {
      icon: Video,
      title: "Video Recording",
      description: "Record high-definition videos with stable capture and smooth frame rates for all your video needs."
    },
    {
      icon: Zap,
      title: "Quick Capture",
      description: "Instant capture mode lets you take photos and videos immediately without any delay or complex settings."
    },
    {
      icon: FolderTree,
      title: "Auto RT Box Integration",
      description: "After capturing, RT Box opens automatically to save your content in the right folder with proper naming."
    },
    {
      icon: Mic,
      title: "Voice Naming Support",
      description: "Use voice input to name your captures instantly. Just speak the file name and it's saved automatically."
    },
    {
      icon: Settings,
      title: "Respects Settings",
      description: "All captures follow your defined naming format, folder paths, and preferences set in the Settings page."
    },
    {
      icon: ImageIcon,
      title: "Smart Organization",
      description: "Every photo and video is organized with timestamps and custom names, making retrieval simple and fast."
    },
    {
      icon: Sparkles,
      title: "Enhanced Features",
      description: "Access special camera modes, filters, and enhancement options to make every capture perfect."
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-400 mb-6"
            >
              <Camera className="w-10 h-10 text-white" />
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
              RedTree Camera
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
              The heart of RedTree. Capture life's moments with an intelligent camera that not only takes great photos and videos but organizes them automatically.
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
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-cyan-400/10">
                    <feature.icon className="h-7.5 w-7.5 text-cyan-400" />
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

          {/* Workflow Visualization */}
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
            <div className="rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 p-10">
              <h2 className="text-2xl font-bold text-white mb-8 md:text-3xl text-center">
                Intelligent Capture Workflow
              </h2>
              
              {/* Workflow Steps */}
              <div className="max-w-5xl mx-auto mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">1. Capture</h3>
                    <p className="text-white/80 text-sm">Take photo or video</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">2. RT Box Opens</h3>
                    <p className="text-white/80 text-sm">Automatic dialog appears</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mic className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">3. Name It</h3>
                    <p className="text-white/80 text-sm">Voice or text input</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FolderTree className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">4. Save</h3>
                    <p className="text-white/80 text-sm">Organized perfectly</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-cyan-600 hover:bg-gray-100 transition-colors">
                  Open Camera
                  <Camera className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CameraPage;