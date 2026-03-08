import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function CoverPage() {
  const { language, setLanguage, setCurrentPage } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const languages = [
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
  ];

  return (
    <div className="min-h-screen gradient-navy flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Language Selector - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white text-sm font-medium">
              {languages.find(l => l.code === language)?.label}
            </span>
          </button>

          {showLangMenu && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-navy-light rounded-xl border border-white/20 shadow-xl overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    setShowLangMenu(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors ${language === lang.code
                      ? 'bg-coral/20 text-coral'
                      : 'text-white hover:bg-white/10'
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo/Character */}
        <div className="mb-8 animate-float">
          <img
            src="/images/Transition_Mascot.png"
            alt="Dr. Lipstick"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white whitespace-pre-line leading-tight text-shadow-glow">
            {t.coverTitle}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl text-center mb-12 max-w-md">
          {t.coverSubtitle}
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => setCurrentPage('reminder')}
          className="bg-coral hover:bg-coral-dark text-navy font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {t.startAnalysis}
        </Button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-white/40 text-sm">
        Skin Smart Design 2026
      </div>
    </div>
  );
}
