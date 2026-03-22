import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { searchProductByBarcode, searchProductsByIngredients, analyzeIngredientList, type Product } from '@/data/products';

export default function AnalyzingPage() {
  const { language, setCurrentPage, skinType, currentProduct, addToHistory, setCurrentResult, blacklist } = useAppStore();
  const t = translations[language];
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [foundProduct, setFoundProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Search for product when analysis starts
    if (currentProduct) {
      // Try barcode search first (if it's numeric)
      if (/^\d+$/.test(currentProduct)) {
        const product = searchProductByBarcode(currentProduct);
        if (product) {
          setFoundProduct(product);
        }
      } else {
        // Try ingredient search
        const products = searchProductsByIngredients(currentProduct);
        if (products.length > 0) {
          setFoundProduct(products[0]);
        }
      }
    }
  }, [currentProduct]);

  useEffect(() => {
    if (isComplete) {
      // Use the newly enhanced analysis for all cases
      const ingredientsToAnalyze = foundProduct ? foundProduct.ingredients : 
        (currentProduct && !/^\d+$/.test(currentProduct) ? 
          currentProduct.split(/[平衡,，、\n]+/).map(i => i.trim()).filter(i => i.length > 0) : []);

      const analysisResult = analyzeIngredientList(ingredientsToAnalyze, language, skinType);
      const result = analysisResult.result;
      const safetyScore = analysisResult.safetyScore;
      const matchScore = analysisResult.matchScore;
      const safetyExplanation = analysisResult.safetyExplanation;
      const matchExplanation = analysisResult.matchExplanation;

      // Final adjustments for Personal Blacklist
      const hasBlacklisted = ingredientsToAnalyze.some(ing =>
        blacklist.some(b => ing.toLowerCase().includes(b.toLowerCase()))
      );
      
      const finalResult = hasBlacklisted ? 'red' : result;
      setCurrentResult(finalResult);

      // Add to history
      const productName = foundProduct ? foundProduct.name[language] : 
        (currentProduct && !/^\d+$/.test(currentProduct) ? 
          (language === 'zh-TW' ? '手動輸入成分分析' : language === 'en' ? 'Manual Ingredient Analysis' : '手動入力成分分析') : 
          (currentProduct || 'Unknown Product'));

      addToHistory({
        productName: productName,
        result: finalResult,
        skinType: skinType || 'normal',
        safetyScore: safetyScore,
        matchScore: matchScore,
        ingredients: ingredientsToAnalyze,
        safetyExplanation: safetyExplanation,
        matchExplanation: matchExplanation,
      });

      // Navigate to result page after short delay
      setTimeout(() => {
        setCurrentPage('result');
      }, 500);
    }
  }, [isComplete, foundProduct, skinType, language]);

  const getAnalysisSteps = () => {
    const steps = {
      'zh-TW': [
        '識別產品資訊...',
        '比對資料庫...',
        '分析成分安全性...',
        '評估肌膚適配度...',
        '生成分析報告...',
      ],
      'en': [
        'Identifying product...',
        'Comparing database...',
        'Analyzing ingredient safety...',
        'Evaluating skin compatibility...',
        'Generating report...',
      ],
      'ja': [
        '製品情報を識別中...',
        'データベースを比較中...',
        '成分の安全性を分析中...',
        '肌との適合性を評価中...',
        'レポートを生成中...',
      ],
    };
    return steps[language];
  };

  const steps = getAnalysisSteps();

  return (
    <div className="min-h-screen gradient-navy flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-coral/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full">
        {/* Character analyzing */}
        <div className="mb-8 relative">
          <img
            src="/images/Analyze process.png"
            alt="Analyzing"
            className="w-48 h-48 object-contain"
          />
          {/* Animated dots */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-3 h-3 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-coral rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          {t.analyzingTitle}
        </h1>

        {/* Product name if found */}
        {foundProduct && (
          <p className="text-coral text-center mb-2 font-semibold">
            {foundProduct.name[language]}
          </p>
        )}

        {/* Description */}
        <p className="text-white/70 text-center mb-2">
          {t.analyzingText}
        </p>
        <p className="text-white/50 text-sm text-center mb-8">
          {t.analyzingHint}
        </p>

        {/* Progress bar */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-coral to-coral-dark rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        <p className="text-coral font-bold text-xl">
          {progress}%
        </p>

        {/* Analysis steps */}
        <div className="mt-8 space-y-2 text-sm">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 transition-opacity duration-300 ${progress > (index + 1) * 20 ? 'text-white/70' : 'text-white/30'
                }`}
            >
              <div className={`w-2 h-2 rounded-full ${progress > (index + 1) * 20 ? 'bg-coral' : 'bg-white/30'}`} />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
