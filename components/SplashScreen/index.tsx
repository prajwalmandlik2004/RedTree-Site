"use client";
import { useState, useEffect } from "react";
import { ChevronDown, CloudUpload, Camera, Settings, Folder, Search, Edit, Mic, Pin, MicIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const SplashScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(-1);
  const router = useRouter();

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
    const hasSeenSplash = sessionStorage.getItem("redtree_splash_shown");

    if (hasSeenSplash) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timer1 = setTimeout(() => setStep(1), 2000);

    const timer2 = setTimeout(() => setStep(2), 4500);

    const timer3 = setTimeout(() => setStep(3), 7000);

    const timer4 = setTimeout(() => setStep(4), 9500);

    const timer5 = setTimeout(() => setStep(5), 11000);

    const timer6 = setTimeout(() => setStep(6), 16000);

    const timer7 = setTimeout(() => {
      setIsPaletteOpen(true);
      setStep(7);
    }, 19000);

    const timer8 = setTimeout(() => {
      buttons.forEach((_, index) => {
        setTimeout(() => {
          setShowTooltip(index);
          setTimeout(() => setShowTooltip(-1), 1500);
        }, index * 400);
      });
      setStep(8);
    }, 20000);

    const timer9 = setTimeout(() => {
      setStep(9);
    }, 23500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
      clearTimeout(timer9);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    sessionStorage.setItem("redtree_splash_shown", "true");
    onComplete();
  };

  const handleSkip = () => {
    handleComplete();
  };

  if (!isVisible) return null;



  const getButtonPosition = (index, total) => {
    const angle = (index * 360) / total;
    const radius = 90;
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    return { x, y };
  };

  const handleButtonClick = (route) => {
    sessionStorage.setItem("redtree_splash_shown", "true");
    router.push(route);
  };


  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero_bg.jpeg"
          alt="Background"
          className="w-full h-full object-cover contrast-105 saturate-150 animate-breathing"
        />
      </div>

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">

        {step >= 1 && step < 4 && (
          <div className="text-center space-y-4">
            {step >= 1 && (
              <p
                className="text-white -mt-50 text-2xl md:text-2xl font-medium leading-relaxed animate-fadeIn text-center"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                In the legends of the North, there is a tree that sees, judges, and weeps...
              </p>
            )}
          </div>
        )}


        {step >= 5 && step < 6 && (
          <div className="animate-fadeIn -mt-50 flex flex-col items-center">
            <div className="relative z-10 w-15 h-15 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center mb-10">
              <img
                src="/images/hero/redtreelogo.png"
                alt="RedTree Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            {step === 5 && (
              <p
                className="text-white text-2xl md:text-2xl text-center leading-relaxed px-4 max-w-2xl font-medium opacity-0"
                style={{
                  fontFamily: "Times New Roman, serif",
                  animation: 'fadeIn 1s ease-out 3s forwards'
                }}
              >
                RedTree notes, structures and gives sense to your memories, your notes, your thoughts
              </p>
            )}
          </div>
        )}

        {step >= 6 && step < 9 && (
          <div className="-mt-50 flex flex-col items-center">
            <div className="relative w-40 h-40 mb-8">
              {/* Center Logo Button */}
              <div className="relative z-10 w-15 h-15 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center">
                <img
                  src="/images/hero/redtreelogo.png"
                  alt="RedTree Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              {buttons.map((button, index) => {
                const { x, y } = getButtonPosition(index, buttons.length);
                const isVisible = isPaletteOpen;
                const ButtonIcon = button.icon;

                const isTop = y < 0;
                const isRight = x > 0;
                const tooltipPosition = `${isTop ? "-top-10" : "top-12"} ${isRight ? "left-full ml-1" : "right-full mr-1"}`;
                const tooltipArrow = isTop
                  ? (isRight ? "border-t-gray-900 bottom-[-4px] left-1" : "border-t-gray-900 bottom-[-4px] right-1")
                  : (isRight ? "border-b-gray-900 top-[-4px] left-1" : "border-b-gray-900 top-[-4px] right-1");

                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 pointer-events-auto"
                    style={{
                      transform: isVisible
                        ? `translate(calc(-50% + ${x}px), calc(-130% + ${y}px))`
                        : "translate(-50%, -50%)",
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.6s ease-out ${index * 0.1}s`,
                    }}
                  >
                    <div className="relative">
                      <button
                        onClick={() => handleButtonClick(button.route)}
                        className={`w-12 h-12 ${button.color} rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-800 hover:scale-125 animate-float`}
                        style={{
                          animationDelay: `${index * 1}s`,
                        }}
                      >
                        <ButtonIcon className="w-6 h-6 text-white" />
                      </button>

                      {/* {showTooltip === index && (
                        <div
                          className={`absolute ${tooltipPosition} bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap z-[9999]`}
                        >
                          {button.label}
                          <div
                            className={`absolute w-0 h-0 border-l-4 border-r-4 border-transparent ${tooltipArrow}`}
                          ></div>
                        </div>
                      )} */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {step >= 9 && (
          <div className="flex flex-col items-center mt-20">
            <div className="relative w-40 h-40 mb-12">
              {/* Center Logo Button */}
              <div className="relative z-10 w-15 h-15 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center">
                <img
                  src="/images/hero/redtreelogo.png"
                  alt="RedTree Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>

              {buttons.map((button, index) => {
                const { x, y } = getButtonPosition(index, buttons.length);
                const ButtonIcon = button.icon;
                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 pointer-events-auto"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-130% + ${y}px))`,
                    }}
                  >
                    <button
                      onClick={() => handleButtonClick(button.route)}
                      className={`${button.color} w-12 h-12 rounded-full shadow-lg flex items-center justify-center animate-float cursor-pointer hover:scale-110 transition-transform`}
                      style={{ animationDelay: `${index * 1}s` }}
                    >
                      <ButtonIcon className="w-6 h-6 text-white" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="text-white text-center space-y-4 px-4 mb-12">
              <p className="text-xl md:text-2xl font-bold tracking-widest animate-fadeIn me-10" style={{ animationDelay: '2s', fontFamily: "Times New Roman, serif" }}>CAPTURE</p>
              <p className="text-xl md:text-2xl font-bold tracking-widest animate-fadeIn ms-15" style={{ animationDelay: '4s', fontFamily: "Times New Roman, serif" }}>STRUCTURE</p>
              <p className="text-xl md:text-2xl font-bold tracking-widest animate-fadeIn" style={{ animationDelay: '6s', fontFamily: "Times New Roman, serif" }}>RETRIEVE</p>
              <p className="text-xl md:text-2xl font-bold tracking-widest animate-fadeIn ms-15" style={{ animationDelay: '8s', fontFamily: "Times New Roman, serif" }}>PROTECT</p>
            </div>

            {/* <button
              onClick={handleSkip}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </button> */}
          </div>
        )}
      </div>

      {step === 9 && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          aria-label="Skip animation"
        >
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </button>
      )}

      <style jsx>{`
        @keyframes breathing {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-breathing {
          animation: breathing 6s ease-in-out infinite;
        }
        
        .animate-fadeIn {
           opacity: 0;
           animation: fadeText 3s ease-out forwards;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;