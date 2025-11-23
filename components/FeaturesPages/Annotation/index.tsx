"use client";
import FloatingPalette from "@/components/FloatingPalette";
import { motion } from "framer-motion";
import { Pin, StickyNote, Edit3, Trash2, Eye, FileText, FolderOpen, MessageSquare } from "lucide-react";

const Annotation = () => {
  const features = [
    {
      icon: StickyNote,
      title: "Quick Note Addition",
      description: "Add detailed notes and annotations to any file or folder instantly with a simple tap or click."
    },
    {
      icon: Pin,
      title: "Visual Note Indicator",
      description: "Annotated items display an orange note icon for quick identification, making it easy to spot files with added context."
    },
    {
      icon: Edit3,
      title: "Edit Anytime",
      description: "Modify your annotations whenever needed. Keep your notes up-to-date as your projects and thoughts evolve."
    },
    {
      icon: Eye,
      title: "Quick Preview",
      description: "View annotation content instantly by clicking the note icon without opening the file or folder."
    },
    {
      icon: Trash2,
      title: "Easy Removal",
      description: "Delete annotations when they're no longer needed, keeping your workspace clean and organized."
    },
    {
      icon: FileText,
      title: "File Context",
      description: "Add important context to images, videos, and documents - remember why you captured them and what they mean."
    },
    {
      icon: FolderOpen,
      title: "Folder Descriptions",
      description: "Annotate entire folders to describe their purpose, contents, or project details for better organization."
    },
    {
      icon: MessageSquare,
      title: "Rich Text Support",
      description: "Create detailed notes with formatting support, making your annotations as descriptive as you need them to be."
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500 mb-6"
            >
              <Pin className="w-10 h-10 text-white" />
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
              Annotations & Notes
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
              Add context and meaning to your files and folders. With RedTree's annotation system, you'll never forget why you captured something or what it represents.
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
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-orange-500/10">
                    <feature.icon className="h-7.5 w-7.5 text-orange-500" />
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

          {/* Annotation Demo */}
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
            <div className="rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 p-10">
              <h2 className="text-2xl font-bold text-white mb-8 md:text-3xl text-center">
                Never Lose Context Again
              </h2>
              
              {/* Visual Demo */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Project_Photo.jpg</p>
                        <p className="text-white/70 text-sm">Captured: Nov 22, 2025</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Pin className="w-8 h-8 text-orange-300" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-300 rounded-full animate-pulse"></span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded p-4">
                    <p className="text-white/90 text-sm italic">
                      "Initial prototype design for the mobile app interface. Need to discuss color scheme with team next week."
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-orange-600 hover:bg-gray-100 transition-colors">
                  <Pin className="w-5 h-5" />
                  Add Note
                </button>
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors">
                  <Edit3 className="w-5 h-5" />
                  Edit
                </button>
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors">
                  <Trash2 className="w-5 h-5" />
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Annotation;