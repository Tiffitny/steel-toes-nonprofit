import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_ICON_URL = "/manus-storage/cursor-boot-32x32_085cc749.png";

// Boot loading animation - shows briefly on mobile when page loads
function BootLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f1b2d]"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <motion.img
              src={BOOT_ICON_URL}
              alt="Steel Toes"
              className="w-16 h-16"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.8, repeat: 1, ease: "easeInOut" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white/60 text-sm font-medium tracking-wider"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              STEEL TOES & SECOND CHANCES
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Touch ripple effect - shows boot icon at tap location on mobile
function BootTouchRipple() {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleTouch = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x: touch.clientX, y: touch.clientY }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 700);
  }, []);

  useEffect(() => {
    // Only add on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) return;

    document.addEventListener("touchstart", handleTouch, { passive: true });
    return () => document.removeEventListener("touchstart", handleTouch);
  }, [handleTouch]);

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.3, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="absolute w-10 h-10 -ml-5 -mt-5"
            style={{ left: ripple.x, top: ripple.y }}
          >
            <img
              src={BOOT_ICON_URL}
              alt=""
              className="w-full h-full opacity-60"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function BootEffects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <>
      <BootLoader />
      <BootTouchRipple />
    </>
  );
}
