import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function ReminderPage() {
  const { language, setCurrentPage } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen gradient-navy flex flex-col items-center justify-start px-6 py-12 relative overflow-y-auto no-scrollbar">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center max-w-lg w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} flex-1 flex flex-col justify-center`}>
        {/* Warning Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-coral/20 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-coral" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-coral mb-6 text-center">
          {t.reminderTitle}
        </h1>

        {/* Warning text */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 w-full">
          <p className="text-white text-xl text-center whitespace-pre-line leading-relaxed">
            {t.reminderText}
          </p>
        </div>

        {/* Character */}
        <div className="mb-8">
          <img
            src="/images/Question.png"
            alt="Dr. Lipstick"
            className="w-32 h-32 object-contain"
          />
        </div>

        {/* Subtext */}
        <p className="text-white/60 text-center mb-8">
          {t.reminderSubtext}
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => setCurrentPage('gender')}
          className="bg-coral hover:bg-coral-dark text-navy font-bold text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-sm:w-full max-w-xs"
        >
          {t.startAnalysis}
        </Button>

        {/* Footer hint - moved into the flow to avoid overlapping */}
        <div className="mt-12 text-white/40 text-sm text-center px-6 pb-4">
          {t.disclaimer}
        </div>
      </div>
    </div>
  );
}
