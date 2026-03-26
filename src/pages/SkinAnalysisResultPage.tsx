import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { productsDatabase } from '@/data/products';

export default function SkinAnalysisResultPage() {
  const { language, setCurrentPage, skinType } = useAppStore();
  const t = translations[language];
  const tr = t.skinAnalysisResult;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!skinType) {
    // Fallback if no skin type is found
    return (
      <div className="min-h-screen gradient-navy flex items-center justify-center p-6">
        <Button onClick={() => setCurrentPage('quiz')} className="bg-coral text-navy">
          Please take the quiz first
        </Button>
      </div>
    );
  }

  // Filter recommendations based on skin type
  const recommendations = productsDatabase
    .filter(p => p.goodFor.includes(skinType as string))
    .slice(0, 5);

  return (
    <div className="min-h-screen gradient-navy flex flex-col px-6 py-12 relative overflow-y-auto no-scrollbar pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className={`relative z-10 max-w-lg mx-auto w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-coral to-coral-dark flex items-center justify-center shadow-lg shadow-coral/20 transform rotate-12">
            <Sparkles className="w-10 h-10 text-navy" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          {tr.title}
        </h1>
        <p className="text-white/40 text-center mb-10 text-sm">
          {language === 'zh-TW' ? 'Dr. Lipstick 為您完成的專業分析' : language === 'en' ? 'Professional analysis by Dr. Lipstick' : 'Dr. Lipstick による専門的な分析'}
        </p>

        {/* Result Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ShieldCheck className="w-24 h-24 text-white" />
          </div>
          
          <span className="text-coral font-medium text-sm tracking-widest uppercase mb-2 block">
            {tr.typeTitle}
          </span>
          <h2 className="text-4xl font-bold text-white mb-6">
            {tr.types[skinType as keyof typeof tr.types]}
          </h2>
          
          <div className="h-px w-full bg-white/10 mb-6" />
          
          <div className="flex gap-4">
            <div className="mt-1">
              <Info className="w-5 h-5 text-coral/80" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">{tr.adviceTitle}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {tr.advice[skinType as keyof typeof tr.advice]}
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mb-10">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-coral" />
            {tr.recommendationTitle}
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            {recommendations.map((product, idx) => (
              <div 
                key={product.barcode}
                className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy/50 flex items-center justify-center text-coral font-bold text-[10px] shrink-0 border border-white/5 group-hover:border-coral/50 transition-colors">
                  {product.category.substring(0, 3).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white text-sm font-medium truncate group-hover:text-coral transition-colors">
                    {product.name[language]}
                  </h4>
                  <p className="text-white/40 text-xs truncate">
                    {product.brand}
                  </p>
                </div>
                <div className="text-coral flex items-center gap-1 font-bold">
                  {product.safetyScore}
                  <span className="text-[10px] text-white/30 font-normal">pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="fixed bottom-8 left-6 right-6 z-50 max-w-lg mx-auto">
          <Button 
            onClick={() => setCurrentPage('scan')}
            className="w-full bg-coral hover:bg-coral-dark text-navy font-bold py-7 rounded-2xl text-lg shadow-xl shadow-coral/20 flex items-center justify-center gap-2 group transition-all"
          >
            {tr.startScanning}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <p className="mt-6 text-white/30 text-xs text-center italic">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
}
