"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { CloudUpload, Camera, Settings, Folder, Search, Edit, MicIcon, Pin } from "lucide-react";

const FloatingPalette = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 160, y: 110 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);
  const clickTimer = useRef<NodeJS.Timeout | null>(null);
  const touchStartTime = useRef<number>(0);
  const touchStartPos = useRef({ x: 0, y: 0 });
  const dragThreshold = 5;
  const hasMoved = useRef(false);

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

  const getButtonPosition = (index, total) => {
    const angle = (index * 360) / total;
    const radius = 70;
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    return { x, y };
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    hasMoved.current = false;
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      if (Math.abs(newX - position.x) > dragThreshold || Math.abs(newY - position.y) > dragThreshold) {
        hasMoved.current = true;
      }

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (!hasMoved.current) {
      setClickCount(prev => prev + 1);

      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }

      clickTimer.current = setTimeout(() => {
        if (clickCount + 1 === 1) {
          setIsOpen(prev => !prev);
        } else if (clickCount + 1 === 2) {
          router.push('/');
        }
        setClickCount(0);
      }, 300);
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    touchStartTime.current = Date.now();
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
    hasMoved.current = false;

    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;

      const deltaX = Math.abs(touch.clientX - touchStartPos.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartPos.current.y);

      if (deltaX > dragThreshold || deltaY > dragThreshold) {
        hasMoved.current = true;
        e.preventDefault();
      }

      setPosition({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    const touchDuration = Date.now() - touchStartTime.current;
    setIsDragging(false);

    if (!hasMoved.current && touchDuration < 200) {
      setClickCount(prev => prev + 1);

      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }

      clickTimer.current = setTimeout(() => {
        if (clickCount + 1 === 1) {
          setIsOpen(prev => !prev);
        } else if (clickCount + 1 === 2) {
          router.push('/');
        }
        setClickCount(0);
      }, 300);
    }

    hasMoved.current = false;
  };

  const handleButtonClick = (route) => {
    setIsOpen(false);
    router.push(route);
  };

  return (
    <div
      className="fixed z-[9999] floating-palette-container"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: 'none',
      }}
    >
      <div className="relative flex items-center justify-center w-28 h-28">
        {/* Center Logo Button */}
        <div
          className="relative z-10 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'none' }}
        >
          <div className="relative w-12 h-12">
            <Image
              src="/images/hero/redtreelogo.png"
              alt="RedTree Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Surrounding Buttons */}
        {isOpen && buttons.map((button, index) => {
          const { x, y } = getButtonPosition(index, buttons.length);
          const Icon = button.icon;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: `all 0.3s ease-out`,
              }}
            >
              <button
                onClick={() => handleButtonClick(button.route)}
                className={`w-11 h-11 ${button.color} rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110`}
                title={button.label}
              >
                <Icon className="w-5 h-5 text-white" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingPalette;