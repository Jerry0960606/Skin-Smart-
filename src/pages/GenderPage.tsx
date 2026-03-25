import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function GenderPage() {
  const { language, setCurrentPage, setGender } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGenderSelect = (gender: 'boy' | 'girl') => {
    setSelectedGender(gender);
  };

  const handleNext = () => {
    if (selectedGender) {
      setGender(selectedGender);
      setCurrentPage('quiz');
    }
  };

  return (
    <div className="min-h-screen gradient-navy flex flex-col px-6 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center mb-8">
        <button
          onClick={() => setCurrentPage('reminder')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t.selectGender}
        </h1>
        
        <p className="text-white/60 text-center mb-6">
          {t.genderHint}
        </p>

        {/* Gender options */}
        <div className="flex flex-row gap-4 mb-6 w-full max-w-md">
          {/* Boy option */}
          <button
            onClick={() => handleGenderSelect('boy')}
            className={`flex-1 flex flex-col items-center p-5 rounded-2xl border-2 transition-all duration-300 ${
              selectedGender === 'boy'
                ? 'border-coral bg-coral/20'
                : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            <img
              src="/images/Boy.png"
              alt="Boy"
              className="w-16 h-16 object-contain mb-3"
            />
            <span className={`text-base font-semibold ${
              selectedGender === 'boy' ? 'text-coral' : 'text-white'
            }`}>
              {t.boy}
            </span>
          </button>

          {/* Girl option */}
          <button
            onClick={() => handleGenderSelect('girl')}
            className={`flex-1 flex flex-col items-center p-5 rounded-2xl border-2 transition-all duration-300 ${
              selectedGender === 'girl'
                ? 'border-coral bg-coral/20'
                : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            <img
              src="/images/Girl.png"
              alt="Girl"
              className="w-16 h-16 object-contain mb-3"
            />
            <span className={`text-base font-semibold ${
              selectedGender === 'girl' ? 'text-coral' : 'text-white'
            }`}>
              {t.girl}
            </span>
          </button>
        </div>

        {/* Character */}
        <div className="mb-5">
          <img
            src="/images/Ask Gender.png"
            alt="Dr. Lipstick"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Next button */}
        <Button
          onClick={handleNext}
          disabled={!selectedGender}
          className="bg-coral hover:bg-coral-dark text-navy font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-sm"
        >
          {t.next}
        </Button>
      </div>
    </div>
  );
}
