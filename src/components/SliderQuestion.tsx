import { useState, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';

interface SliderQuestionProps {
  questionId: number;
  onAnswer: (value: number) => void;
  currentValue?: number;
}

export default function SliderQuestion({ onAnswer, currentValue }: SliderQuestionProps) {
  const { language } = useAppStore();
  const [value, setValue] = useState(currentValue !== undefined ? currentValue * 25 : 50);

  const labels = {
    'zh-TW': ['非常乾燥', '偏乾', '中性', '偏油', '非常油膩'],
    'en': ['Very Dry', 'Dry', 'Normal', 'Oily', 'Very Oily'],
    'ja': ['とても乾燥', '乾燥', '普通', '脂性', 'とても脂性'],
  };

  const currentLabels = labels[language];
  const currentLabelIndex = Math.min(Math.floor(value / 25), 4);

  useEffect(() => {
    onAnswer(Math.floor(value / 25));
  }, [value]);

  return (
    <div className="w-full">
      <div className="mb-8">
        {/* Slider track */}
        <div className="relative h-4 bg-white/20 rounded-full mb-6">
          {/* Progress fill */}
          <div 
            className="absolute left-0 top-0 h-full bg-coral rounded-full transition-all duration-150"
            style={{ width: `${value}%` }}
          />
          
          {/* Thumb */}
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          {/* Visual thumb */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-coral rounded-full shadow-lg border-4 border-navy transition-all duration-150 pointer-events-none"
            style={{ left: `calc(${value}% - 16px)` }}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between text-xs text-white/50 mb-4">
          {currentLabels.map((label, index) => (
            <span 
              key={index} 
              className={`transition-colors ${currentLabelIndex === index ? 'text-coral font-semibold' : ''}`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Current selection display */}
        <div className="text-center">
          <span className="text-coral text-lg font-bold">
            {currentLabels[currentLabelIndex]}
          </span>
        </div>
      </div>

      {/* Visual indicator */}
      <div className="flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentLabelIndex === index ? 'bg-coral scale-125' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
