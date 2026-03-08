import { useState, useRef } from 'react';
import { useAppStore } from '@/store/appStore';

interface Pimple {
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
  const [nextId, setNextId] = useState(1);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
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
      <p className="text-white/60 text-sm text-center mb-4">
        {getHintText()}
      </p>

      {/* Face image with clickable area */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-xs mx-auto cursor-crosshair select-none"
        onClick={handleImageClick}
      >
        <img
          ref={imageRef}
          src="/images/豆豆.png"
          alt="Face"
          className="w-full h-auto rounded-2xl"
          draggable={false}
        />
        
        {/* Pimple markers */}
        {pimples.map((pimple) => (
          <div
            key={pimple.id}
            className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 animate-pulse"
            style={{ 
              left: `${pimple.x}%`, 
              top: `${pimple.y}%`,
            }}
          >
            <div className="w-full h-full bg-rose-500 rounded-full border-2 border-white shadow-lg" />
            <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-50" />
          </div>
        ))}
      </div>

      {/* Count and Clear */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-coral font-semibold">
          {getCountText()}
        </span>
        {pimples.length > 0 && (
          <button
            onClick={clearAll}
            className="px-4 py-2 text-sm text-white/60 hover:text-rose-400 transition-colors"
          >
            {getClearText()}
          </button>
        )}
      </div>
    </div>
  );
}
