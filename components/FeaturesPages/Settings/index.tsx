"use client";
import FloatingPalette from "@/components/FloatingPalette";
import { motion } from "framer-motion";
import { Settings, Clock, FileType, FolderTree, LayoutGrid, Globe, Calendar, Sliders } from "lucide-react";

const SettingsPage = () => {
  const features = [
    {
      icon: Clock,
      title: "RT Box Delay Setter",
      description: "Customize the delay time for the RT Box to appear after capturing images or videos, optimizing your workflow."
    },
    {
      icon: FileType,
      title: "File Naming Format",
      description: "Define your preferred naming convention for captured files with customizable templates including date, time, and custom prefixes."
    },
    {
      icon: FolderTree,
      title: "Default Folder Path",
      description: "Set your default save location for different file types, ensuring all captures are automatically organized where you want them."
    },
    {
      icon: LayoutGrid,
      title: "View Mode Preferences",
      description: "Choose how files are displayed in RT Manager - list view, small thumbnails, or large preview tiles to suit your preference."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Switch between multiple languages seamlessly. RedTree supports various languages to make the app accessible globally."
    },
    {
      icon: Calendar,
      title: "Date Format Customization",
      description: "Select your preferred date format (DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD) for file timestamps and organization."
    },
    {
      icon: Clock,
      title: "Time Format Options",
      description: "Choose between 12-hour and 24-hour time formats for all timestamps and file naming conventions."
    },
    {
      icon: Sliders,
      title: "Advanced Controls",
      description: "Fine-tune every aspect of RedTree's behavior with granular settings for notifications, storage, and capture quality."
    }
  ];

  return (
    <>
     <section className="pb-20 pt-15 lg:pb-25 lg:pt-20 xl:pb-30 xl:pt-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Header Section */}
           <FloatingPalette />
          <div className="text-center mb-16 mt-12">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500 mb-6"
            >
              <Settings className="w-10 h-10 text-white" />
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
              Settings & Preferences
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
              Customize RedTree to work exactly the way you want. From file naming conventions to display preferences, take complete control of your experience.
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
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-red-500/10">
                    <feature.icon className="h-7.5 w-7.5 text-red-500" />
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

          {/* Settings Categories */}
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
            <div className="rounded-lg bg-gradient-to-br from-red-500 to-rose-600 p-10">
              <h2 className="text-2xl font-bold text-white mb-8 md:text-3xl text-center">
                Comprehensive Configuration Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <FileType className="w-10 h-10 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">File Management</h3>
                  <p className="text-white/80 text-sm">Control naming, paths, and organization</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <LayoutGrid className="w-10 h-10 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Display Options</h3>
                  <p className="text-white/80 text-sm">Customize views and layouts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Globe className="w-10 h-10 text-white mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Localization</h3>
                  <p className="text-white/80 text-sm">Language, date, and time formats</p>
                </div>
              </div>

              <div className="text-center">
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-red-600 hover:bg-gray-100 transition-colors">
                  Open Settings
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SettingsPage;