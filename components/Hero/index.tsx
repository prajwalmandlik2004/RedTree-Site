"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CloudUpload, Camera, Settings, File, Folder, Save, Search, Edit, Icon, Mic2Icon, MicIcon, Pin } from "lucide-react";


const AnimatedButtonCircle = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(-1);
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);

  const togglePalette = () => {
    setIsPaletteOpen((prev) => !prev);
  };

  const buttons = [
    { icon: CloudUpload, label: "Sync", color: "bg-yellow-400", route: "/backup" },
    { icon: Folder, label: "RT Manager", color: "bg-green-500", route: "/rt-manager" },
    { icon: MicIcon, label: "Voice", color: "bg-violet-400", route: "/voice-memo" },
    { icon: Search, label: "Search", color: "bg-gray-600", route: "/search" },
    { icon: Settings, label: "Settings", color: "bg-red-500", route: "/settings" },
    { icon: Pin, label: "Annotation", color: "bg-orange-500", route: "/annotation" },
    { icon: Edit, label: "Text", color: "bg-blue-400", route: "/text-memo" },
    { icon: Camera, label: "Camera", color: "bg-cyan-400", route: "/camera" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 16000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      buttons.forEach((_, index) => {
        setTimeout(() => {
          setShowTooltip(index);
          setTimeout(() => setShowTooltip(-1), 17000);
        }, index * 1800);
      });
    }
  }, [isOpen]);

  const getButtonPosition = (index, total) => {
    const angle = (index * 360) / total;
    const radius = 80;
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    return { x, y };
  };

  const handleButtonClick = (route) => {
    router.push(route);
  };

  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      {/* Center RedTree Logo Button */}
      <div className="relative z-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-110">
        <div onClick={togglePalette} className="relative w-35 h-35 cursor-pointer">
          <Image
            src="/images/hero/redtreelogo.png"
            alt="RedTree Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Surrounding Buttons */}
      {buttons.map((button, index) => {
        const { x, y } = getButtonPosition(index, buttons.length);
        const isVisible = isOpen;
        const Icon = button.icon;

        const isTop = y < 0;
        const isRight = x > 0;

        const tooltipPosition = `
  ${isTop ? "-top-10" : "top-12"} 
  ${isRight ? "left-full ml-1" : "right-full mr-1"}
`;

        const tooltipArrow = isTop
          ? (isRight ? "border-t-gray-900 bottom-[-4px] left-1" : "border-t-gray-900 bottom-[-4px] right-1")
          : (isRight ? "border-b-gray-900 top-[-4px] left-1" : "border-b-gray-900 top-[-4px] right-1");

        return (
          <div
            key={index}
            className="absolute"
            style={{
              transform: isVisible
                ? `translate(${x}px, ${y}px)`
                : "translate(0, 0)",
              opacity: isVisible ? 1 : 0,
              transition: `all 0.6s ease-out ${index * 0.1}s`,
            }}
          >
            {isPaletteOpen && (
              <div className="relative">
                <button
                  onClick={() => handleButtonClick(button.route)}
                  className={`w-12 h-12 ${button.color} rounded-full shadow-lg flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-125 animate-float cursor-pointer`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </button>

                {showTooltip === index && (
                  <div
                    className={`absolute ${tooltipPosition} bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap z-[9999]`}
                  >
                    {button.label}

                    <div
                      className={`absolute w-0 h-0 border-l-4 border-r-4 border-transparent ${tooltipArrow}`}
                    ></div>
                  </div>
                )}

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-20 md:pt-25 xl:pb-25 xl:pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="mt-10 ms-3 relative flex flex-col items-center">
            <div className="relative w-full">
              <div className="relative aspect-[6/8] md:aspect-[22/8] w-full max-w-7xl mx-auto rounded-lg overflow-hidden -mt-2 md:-mt-3">
                <div className="absolute inset-0 hero-bg-start">
                  <Image
                    src="/images/hero/hero_bg.jpeg"
                    alt="RedTree Hero Background"
                    fill
                    className="object-cover contrast-105 saturate-150 animate-slowzoom"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 pt-8 md:pt-12">
                  <div className="max-w-4xl -mt-10">
                    <div className="mb-4 md:mb-6">
                      <p
                        className="fade-line animate-line1 text-white text-base md:text-xl lg:text-4xl font-medium  leading-relaxed mb-2 text-left ml-5 md:ml-16"
                        style={{ fontFamily: "Times New Roman, serif" }}
                      >
                        In the legends of the North,
                      </p>

                      <p
                        className="fade-line animate-line2 mt-3 text-white text-base md:text-xl lg:text-4xl font-medium  leading-relaxed mb-3 text-left ml-8 md:ml-40"
                        style={{ fontFamily: "Times New Roman, serif" }}
                      >
                        There is a tree that sees, judges, and weeps...
                      </p>

                      <p
                        className="fade-line animate-line3 mt-6 md:mt-10 text-white text-base md:text-xl lg:text-4xl font-medium  leading-relaxed text-left ml-12 md:ml-46 whitespace-normal lg:whitespace-nowrap"
                        style={{ fontFamily: "Times New Roman, serif" }}
                      >
                        RedTree has no carved face, but it, too, remembers.
                      </p>
                    </div>

                  </div>
                  {/* Animated Button Circle */}
                  <div className="flex justify-center md:justify-center mt-12 mb-10 logo-fade">
                    <AnimatedButtonCircle />
                  </div>
                </div>

              </div>

            </div>

            <div className="mt-6 md:mt-8 max-w-5xl">
              <h3 className="text-center md:text-left md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4 md:ms-[-100px]">
                An exclusive intelligent camera experience combined with a powerful, seamless tree-structured file system.
              </h3>

              <h3 className="text-center font-bold md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed md:ms-30">
                Capture, name, store and manage all your images, photos, notes, files and any data like you never could imagine before.
              </h3>

              <div className="flex justify-center">
                <button
                  aria-label="download button"
                  className="flex items-center rounded-lg bg-red-500 px-6 py-2.5 text-white text-lg font-medium duration-300 ease-in-out hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 shadow-lg"
                >
                  Download Now
                  <svg className="ml-2 h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;