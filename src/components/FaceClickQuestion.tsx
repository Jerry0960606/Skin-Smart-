import { useState, useRef } from 'react';
import { useAppStore } from '@/store/appStore';
import { motion, AnimatePresence } from 'framer-motion';

interface Pimple {
  id: number;
  x: number;
  y: number;
}

interface TouchFeedback {
  id: number;
  x: number;
  y: number;
}

interface FaceClickQuestionProps {
  onAnswer: (count: number) => void;
}

export default function FaceClickQuestion({ onAnswer }: FaceClickQuestionProps) {
  const { language } = useAppStore();
  const [pimples, setPimples] = useState<Pimple[]>([]);
  const [recentClicks, setRecentClicks] = useState<TouchFeedback[]>([]);
  const [nextId, setNextId] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Add touch feedback
    const touchId = Date.now();
    const newTouch = { id: touchId, x, y };
    setRecentClicks(prev => [...prev, newTouch]);

    // Remove touch feedback after animation
    setTimeout(() => {
      setRecentClicks(prev => prev.filter(t => t.id !== touchId));
    }, 800);

    // Check if clicking near an existing pimple (to remove it)
    const clickRadius = 8;
    const existingIndex = pimples.findIndex(p => {
      const distance = Math.sqrt(Math.pow(p.x - x, 2) + Math.pow(p.y - y, 2));
      return distance < clickRadius;
    });

    if (existingIndex >= 0) {
      // Remove the pimple
      const newPimples = pimples.filter((_, i) => i !== existingIndex);
      setPimples(newPimples);
      onAnswer(newPimples.length);
    } else {
      // Add new pimple
      const newPimple = { id: nextId, x, y };
      const newPimples = [...pimples, newPimple];
      setPimples(newPimples);
      setNextId(nextId + 1);
      onAnswer(newPimples.length);
    }
  };

  const clearAll = () => {
    setPimples([]);
    onAnswer(0);
  };

  const getHintText = () => {
    const hints = {
      'zh-TW': '點擊臉部標記痘痘位置，再次點擊可移除',
      'en': 'Click on face to mark pimple locations, click again to remove',
      'ja': '顔をクリックしてニキビの位置をマークし、もう一度クリックして削除',
    };
    return hints[language];
  };

  const getClearText = () => {
    const texts = {
      'zh-TW': '清除全部',
      'en': 'Clear All',
      'ja': 'すべてクリア',
    };
    return texts[language];
  };

  const getCountText = () => {
    const texts = {
      'zh-TW': `已標記 ${pimples.length} 個位置`,
      'en': `${pimples.length} location${pimples.length !== 1 ? 's' : ''} marked`,
      'ja': `${pimples.length} 個の位置をマーク`,
    };
    return texts[language];
  };

  return (
    <div className="w-full">
      {/* Hint */}
      <div className="flex flex-col items-center mb-4">
        <p className="text-white/60 text-sm text-center">
          {getHintText()}
        </p>
      </div>

      {/* Face image with clickable area */}
      <div
        ref={containerRef}
        className="relative w-full max-w-xs mx-auto cursor-crosshair select-none touch-none"
        onClick={handleImageClick}
      >
        <img
          src="/images/豆豆 version 2.png"
          alt="Face"
          className="w-full h-auto rounded-3xl"
          draggable={false}
        />

        {/* Pimple markers */}
        {pimples.map((pimple) => (
          <motion.div
            key={pimple.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pimple.x}%`,
              top: `${pimple.y}%`,
              zIndex: 10
            }}
          >
            <div className="w-full h-full bg-rose-500 rounded-full border-2 border-white shadow-[0_0_15px_rgba(244,63,94,0.5)]" />
            <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-30" />
          </motion.div>
        ))}

        {/* Touch Feedback Animation (The Finger) */}
        <AnimatePresence mode="popLayout">
          {recentClicks.map((click) => (
            <motion.div
              key={click.id}
              initial={{ scale: 0.1, opacity: 0, rotate: -5 }}
              animate={{
                scale: [0.3, 1.1, 1],
                opacity: [0, 1, 1, 0],
                rotate: [0, -5, 0],
                y: [0, -10, -20]
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute pointer-events-none"
              style={{
                left: `${click.x}%`,
                top: `${click.y}%`,
                width: '70px',
                height: '70px',
                marginLeft: '-22px', // Refined alignment for natural angle
                marginTop: '-10px',  // Refined alignment for natural angle
                zIndex: 50
              }}
            >
              <img
                src="/images/image-removebg-preview.png"
                alt="Touch"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Count and Clear */}
      <div className="flex items-center justify-between mt-6 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
        <span className="text-coral font-bold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          {getCountText()}
        </span>
        {pimples.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
            className="px-4 py-2 text-sm text-white/60 hover:text-rose-400 hover:bg-white/5 rounded-xl transition-all"
          >
            {getClearText()}
          </button>
        )}
      </div>
    </div>
  );
}
