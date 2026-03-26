import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoverPage() {
  const { language, setLanguage, setCurrentPage } = useAppStore();
  const t = translations[language];
  const [showLangMenu, setShowLangMenu] = useState(false);

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
      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
        {/* Logo/Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-coral/20 rounded-full blur-3xl -z-10"
          />
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="/images/General version.png"
            alt="Dr. Lipstick"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_30px_rgba(255,127,80,0.3)]"
          />
        </motion.div>

        {/* Title */}
        <div className="text-center mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white whitespace-pre-line leading-tight text-shadow-glow tracking-tighter"
          >
            {t.coverTitle.split('\n').map((line, li) => (
              <div key={li}>{line}</div>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-white/60 text-lg md:text-xl text-center mb-12 max-w-sm font-medium"
        >
          {t.coverSubtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-full"
        >
          <div className="flex flex-col gap-4 w-full">
            <Button
              onClick={() => setCurrentPage('reminder')}
              className="w-full bg-coral hover:bg-coral-dark text-navy font-black text-xl py-8 rounded-2xl shadow-2xl shadow-coral/20 transition-all duration-300 group overflow-hidden relative"
            >
              <motion.div
                className="absolute inset-0 bg-white/20 translate-x-[-100%]"
                whileHover={{ translateX: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="flex items-center gap-3 relative z-10">
                {t.startAnalysis}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 text-white/20 text-[10px] font-bold uppercase tracking-widest"
      >
        Skin Smart Design 2026
      </motion.div>
    </div>
  );
}
