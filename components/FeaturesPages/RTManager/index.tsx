"use client";
import FloatingPalette from "@/components/FloatingPalette";
import { motion } from "framer-motion";
import { Folder, FolderPlus, FolderOpen, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, Edit3, StickyNote, Palette, CheckSquare, Move, Trash2 } from "lucide-react";

const RTManager = () => {
  const features = [
    {
      icon: FolderPlus,
      title: "Create New Folders",
      description: "Organize your content effortlessly by creating new folders with custom names and hierarchies."
    },
    {
      icon: FolderOpen,
      title: "Smart Navigation",
      description: "Navigate through your folder structure with intuitive controls - move up, down, previous, and next with ease."
    },
    {
      icon: Edit3,
      title: "Quick Rename",
      description: "Rename folders and files instantly to keep your organization system clear and meaningful."
    },
    {
      icon: StickyNote,
      title: "Folder Annotations",
      description: "Add detailed notes to folders and files for better context and organization. Notes are easily accessible with a single tap."
    },
    {
      icon: Palette,
      title: "Color Coding",
      description: "Customize folder colors to visually categorize and identify different types of content at a glance."
    },
    {
      icon: CheckSquare,
      title: "Multi-Select Operations",
      description: "Select multiple files and folders simultaneously to perform batch operations like move, delete, or organize."
    },
    {
      icon: Move,
      title: "Drag & Move",
      description: "Effortlessly move files and folders between locations with intuitive drag-and-drop or move commands."
    },
    {
      icon: Trash2,
      title: "Safe Delete",
      description: "Delete unwanted files with confidence, knowing you can recover them if needed from the trash folder."
    }
  ];

  return (
    <>
     <section className="pb-20 pt-15 lg:pb-25 lg:pt-20 xl:pb-30 xl:pt-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Header Section */}
           <FloatingPalette />
          <div className="text-center mb-12 mt-12">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-6"
            >
              <Folder className="w-10 h-10 text-white" />
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
              RT Manager
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
              Your complete file management solution. Organize, navigate, and manage all your images, videos, voice memos, and text files with unparalleled flexibility and control.
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
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-green-500/10">
                    <feature.icon className="h-7.5 w-7.5 text-green-500" />
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

          {/* Navigation Controls Preview */}
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
            <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-10">
              <h2 className="text-2xl font-bold text-white mb-6 md:text-3xl text-center">
                Powerful File Management at Your Fingertips
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <ArrowUp className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Go Up</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <ArrowDown className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Go Down</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <ChevronLeft className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Previous</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <ChevronRight className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm">Next</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-green-600 hover:bg-gray-100 transition-colors">
                  Explore RT Manager
                  <Folder className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RTManager;