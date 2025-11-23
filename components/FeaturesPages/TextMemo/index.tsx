"use client";
import FloatingPalette from "@/components/FloatingPalette";
import { motion } from "framer-motion";
import { Edit, FileText, Save, Trash2, AlignLeft, Type, BookOpen, Clock } from "lucide-react";

const TextMemo = () => {
  const features = [
    {
      icon: Edit,
      title: "Rich Text Editor",
      description: "Write and format your text memos with an intuitive editor that supports various text styles and formatting options."
    },
    {
      icon: FileText,
      title: "Unlimited Content",
      description: "Create text memos of any length - from quick notes to lengthy documents. No character limits or restrictions."
    },
    {
      icon: Save,
      title: "Auto-Save",
      description: "Your work is automatically saved as you type, ensuring you never lose important content even if interrupted."
    },
    {
      icon: AlignLeft,
      title: "Formatting Options",
      description: "Format your text with paragraphs, bullet points, and text styling to make your memos clear and organized."
    },
    {
      icon: Type,
      title: "Font Customization",
      description: "Choose from various font sizes and styles to make your text memos comfortable to read and visually appealing."
    },
    {
      icon: BookOpen,
      title: "Easy Organization",
      description: "All text memos are organized alongside your other files, searchable and accessible from the RT Manager."
    },
    {
      icon: Edit,
      title: "Quick Edit Access",
      description: "Open and edit any text memo instantly. Make changes on the fly and save with a single tap."
    },
    {
      icon: Trash2,
      title: "Manage Memos",
      description: "Delete outdated memos or archive important ones. Full control over your text memo collection."
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-400 mb-6"
            >
              <Edit className="w-10 h-10 text-white" />
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
              Text Memo
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
              Capture your thoughts, ideas, and important information in written form. Perfect for notes, reminders, documentation, and any text content you need to save.
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
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-blue-400/10">
                    <feature.icon className="h-7.5 w-7.5 text-blue-400" />
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

          {/* Text Editor Demo */}
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
            <div className="rounded-lg bg-gradient-to-br from-blue-400 to-indigo-600 p-10">
              <h2 className="text-2xl font-bold text-white mb-8 md:text-3xl text-center">
                Your Digital Notepad, Always Ready
              </h2>
              
              {/* Editor Preview */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  {/* Toolbar */}
                  <div className="bg-gray-100 border-b border-gray-200 p-3 flex gap-2">
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Type className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <AlignLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Save className="w-5 h-5 text-blue-500" />
                    </button>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 min-h-[200px] bg-white">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Meeting Notes - November 22, 2025</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Key discussion points from today's project meeting:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Finalize design mockups by Friday</li>
                      <li>Review user feedback from beta testing</li>
                      <li>Schedule next sprint planning session</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-blue-600 hover:bg-gray-100 transition-colors">
                  Create New Memo
                  <Edit className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TextMemo;