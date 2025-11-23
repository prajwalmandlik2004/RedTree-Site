"use client";
import FloatingPalette from "@/components/FloatingPalette";
import { motion } from "framer-motion";
import { Mic, Pause, Play, Save, Volume2, FileAudio, Clock, Headphones } from "lucide-react";

const VoiceMemo = () => {
  const features = [
    {
      icon: Mic,
      title: "High-Quality Recording",
      description: "Capture crystal-clear audio with advanced recording technology that preserves every detail of your voice notes."
    },
    {
      icon: Pause,
      title: "Pause & Resume",
      description: "Take breaks during recording without losing your flow. Pause and resume at any moment for perfect voice memos."
    },
    {
      icon: Save,
      title: "Instant Save",
      description: "Save your voice recordings instantly with automatic naming and organization into your preferred folders."
    },
    {
      icon: FileAudio,
      title: "Multiple Formats",
      description: "Voice memos are saved in optimized formats that balance quality and file size for efficient storage."
    },
    {
      icon: Clock,
      title: "Unlimited Duration",
      description: "Record voice memos for as long as you need without time restrictions - perfect for lectures, meetings, or ideas."
    },
    {
      icon: Volume2,
      title: "Real-Time Monitoring",
      description: "Visual waveform display shows your recording levels in real-time, ensuring optimal audio quality."
    },
    {
      icon: Headphones,
      title: "Playback Preview",
      description: "Review your recordings immediately after capturing to ensure you've captured exactly what you need."
    },
    {
      icon: FileAudio,
      title: "Smart Organization",
      description: "All voice memos are automatically organized with timestamps and can be tagged for easy retrieval later."
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-400 mb-6"
            >
              <Mic className="w-10 h-10 text-white" />
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
              Voice Memo
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
              Capture your thoughts, ideas, and important moments with high-quality voice recording. Perfect for meetings, lectures, interviews, or quick reminders on the go.
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
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-violet-400/10">
                    <feature.icon className="h-7.5 w-7.5 text-violet-400" />
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

          {/* Recording Controls Preview */}
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
            <div className="rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 p-10">
              <h2 className="text-2xl font-bold text-white mb-6 md:text-3xl text-center">
                Professional Recording Controls
              </h2>
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 hover:bg-white/20 transition-all cursor-pointer">
                  <Mic className="w-12 h-12 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 hover:bg-white/20 transition-all cursor-pointer">
                  <Pause className="w-12 h-12 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 hover:bg-white/20 transition-all cursor-pointer">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 hover:bg-white/20 transition-all cursor-pointer">
                  <Save className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-center">
                <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-violet-600 hover:bg-gray-100 transition-colors">
                  Start Recording
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VoiceMemo;