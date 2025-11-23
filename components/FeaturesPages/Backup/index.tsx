"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CloudUpload, Shield, RefreshCw, Smartphone, Lock, Zap, Database, CheckCircle } from "lucide-react";
import FloatingPalette from "@/components/FloatingPalette";

const Backup = () => {
  const features = [
    {
      icon: CloudUpload,
      title: "Automatic Sync",
      description: "All your captured data including images, text, and voice memos automatically sync to your cloud storage in real-time."
    },
    {
      icon: Shield,
      title: "Secure Backup",
      description: "Free users get secure backup through their Gmail account, while premium users enjoy expanded storage options."
    },
    {
      icon: RefreshCw,
      title: "Easy Restore",
      description: "Seamlessly restore your entire data collection on any device with just a few clicks."
    },
    {
      icon: Smartphone,
      title: "Multi-Device Access",
      description: "Access your backed-up content from any device where you're logged in with your account."
    },
    {
      icon: Lock,
      title: "Encrypted Storage",
      description: "Your data is encrypted during transfer and storage, ensuring maximum privacy and security."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized sync technology ensures quick backups without slowing down your device."
    },
    {
      icon: Database,
      title: "Flexible Storage Plans",
      description: "Choose from free Gmail integration or upgrade to premium for additional storage capacity."
    },
    {
      icon: CheckCircle,
      title: "Version Control",
      description: "Keep track of file versions and restore previous states if needed, never lose important data."
    }
  ];

  return (
    <>
      <section className="pb-20 pt-15 lg:pb-25 lg:pt-20 xl:pb-30 xl:pt-25">
        
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <FloatingPalette />
          {/* Header Section */}
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
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 mb-6"
            >
              <CloudUpload className="w-10 h-10 text-white" />
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
              Cloud Backup & Sync
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
              Never lose your precious memories and important data. RedTree's intelligent backup system keeps everything safe and accessible across all your devices.
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
                  <div className="flex h-15 w-15 items-center justify-center rounded-full bg-yellow-400/10">
                    <feature.icon className="h-7.5 w-7.5 text-yellow-400" />
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

          {/* CTA Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 p-10">
              <h2 className="text-2xl font-bold text-white mb-4 md:text-3xl">
                Start Backing Up Your Data Today
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of users who trust RedTree to keep their data safe and accessible.
              </p>
              <button className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-medium text-yellow-500 hover:bg-gray-100 transition-colors">
                Get Started Free
                <CloudUpload className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Backup;