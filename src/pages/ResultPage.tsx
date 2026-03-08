import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, XCircle, FileText, ShoppingCart, Search } from 'lucide-react';
import { searchProductByBarcode, searchProductsByIngredients } from '@/data/products';

export default function ResultPage() {
  const { language, setCurrentPage, scanHistory, currentProduct, skinType } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [foundProduct, setFoundProduct] = useState<any>(null);

  // Get the most recent result
  const latestRecord = scanHistory[0];
  const result = latestRecord?.result || 'green';

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Search for product info
    if (currentProduct) {
      if (/^\d+$/.test(currentProduct)) {
        const product = searchProductByBarcode(currentProduct);
        if (product) setFoundProduct(product);
      } else {
        const products = searchProductsByIngredients(currentProduct);
        if (products.length > 0) setFoundProduct(products[0]);
      }
    }
  }, [currentProduct]);

  const resultConfig = {
    green: {
      bgColor: 'bg-emerald-500/20',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-400',
      icon: CheckCircle,
      title: t.resultGreen,
      description: t.resultGreenDesc,
      image: '/images/Green Resut.png',
      primaryAction: t.proceedToBuy,
      secondaryAction: t.seeFullReport,
    },
    yellow: {
      bgColor: 'bg-amber-500/20',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-400',
      icon: AlertTriangle,
      title: t.resultYellow,
      description: t.resultYellowDesc,
      image: '/images/Yellow Result.png',
      primaryAction: t.compareOthers,
      secondaryAction: t.seeFullReport,
    },
    red: {
      bgColor: 'bg-rose-500/20',
      borderColor: 'border-rose-500',
      textColor: 'text-rose-400',
      icon: XCircle,
      title: t.resultRed,
      description: t.resultRedDesc,
      image: '/images/Red Result.png',
      primaryAction: t.findAlternatives,
      secondaryAction: t.seeFullReport,
    },
  };

  const config = resultConfig[result];
  const Icon = config.icon;

  const handlePrimaryAction = () => {
    if (result === 'green') {
      // Proceed to buy - open product search
      const searchQuery = foundProduct?.name?.en || foundProduct?.name?.['zh-TW'] || currentProduct || 'skincare';
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery + ' buy')}`, '_blank');
    } else {
      // Compare others or find alternatives
      setCurrentPage('scan');
    }
  };

  const handleSecondaryAction = () => {
    setCurrentPage('report');
  };

  // Get skin type warning text
  const getSkinWarning = () => {
    if (!foundProduct || !skinType) return null;
    
    const warnings = foundProduct.warnings || [];
    const hasAlcohol = warnings.includes('alcohol');
    const hasFragrance = warnings.includes('fragrance');
    
    if (skinType === 'sensitive' && (hasAlcohol || hasFragrance)) {
      const texts = {
        'zh-TW': '⚠️ 敏感肌注意：此產品含' + (hasAlcohol ? '酒精' : '') + (hasAlcohol && hasFragrance ? '及' : '') + (hasFragrance ? '香料' : '') + '，可能引起刺激',
        'en': '⚠️ Sensitive skin alert: This product contains ' + (hasAlcohol ? 'alcohol' : '') + (hasAlcohol && hasFragrance ? ' and ' : '') + (hasFragrance ? 'fragrance' : '') + ' which may cause irritation',
        'ja': '⚠️ 敏感肌注意：この製品には' + (hasAlcohol ? 'アルコール' : '') + (hasAlcohol && hasFragrance ? 'と' : '') + (hasFragrance ? '香料' : '') + 'が含まれており、刺激を与える可能性があります',
      };
      return texts[language];
    }
    
    if (skinType === 'dry' && hasAlcohol) {
      const texts = {
        'zh-TW': '⚠️ 乾性肌注意：此產品含酒精，可能使肌膚更乾燥',
        'en': '⚠️ Dry skin alert: This product contains alcohol which may further dry out your skin',
        'ja': '⚠️ 乾燥肌注意：この製品にはアルコールが含まれており、肌をさらに乾燥させる可能性があります',
      };
      return texts[language];
    }
    
    return null;
  };

  return (
    <div className="min-h-screen gradient-navy flex flex-col px-6 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-30 ${
          result === 'green' ? 'bg-emerald-500' : result === 'yellow' ? 'bg-amber-500' : 'bg-rose-500'
        }`} />
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Result card */}
        <div className={`w-full max-w-md rounded-3xl border-2 ${config.borderColor} ${config.bgColor} p-8 mb-8`}>
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 rounded-full ${config.bgColor} flex items-center justify-center`}>
              <Icon className={`w-10 h-10 ${config.textColor}`} />
            </div>
          </div>

          {/* Title */}
          <h1 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${config.textColor}`}>
            {config.title}
          </h1>

          {/* Description */}
          <p className="text-white/80 text-center mb-4">
            {config.description}
          </p>

          {/* Product name */}
          {foundProduct && (
            <p className="text-white text-center font-semibold mb-4">
              {foundProduct.name[language]}
            </p>
          )}

          {/* Skin warning */}
          {getSkinWarning() && (
            <p className="text-amber-400 text-sm text-center mb-4 px-4">
              {getSkinWarning()}
            </p>
          )}

          {/* Character image */}
          <div className="flex justify-center mb-6">
            <img
              src={config.image}
              alt={config.title}
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Scores */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-white/60 text-sm mb-1">{t.safetyScore}</p>
              <p className={`text-2xl font-bold ${config.textColor}`}>
                {latestRecord?.safetyScore || 85}%
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-white/60 text-sm mb-1">{t.matchScore}</p>
              <p className={`text-2xl font-bold ${config.textColor}`}>
                {latestRecord?.matchScore || 78}%
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="w-full max-w-md space-y-3">
          <Button
            onClick={handleSecondaryAction}
            variant="outline"
            className="w-full border-white/30 text-white hover:bg-white/10 py-6 rounded-xl"
          >
            <FileText className="w-5 h-5 mr-2" />
            {config.secondaryAction}
          </Button>

          <Button
            onClick={handlePrimaryAction}
            className={`w-full py-6 rounded-xl font-bold text-lg ${
              result === 'green'
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                : result === 'yellow'
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : 'bg-rose-500 hover:bg-rose-600 text-white'
            }`}
          >
            {result === 'green' && <ShoppingCart className="w-5 h-5 mr-2" />}
            {result !== 'green' && <Search className="w-5 h-5 mr-2" />}
            {config.primaryAction}
          </Button>

          <Button
            onClick={() => setCurrentPage('cover')}
            variant="ghost"
            className="w-full text-white/60 hover:text-white hover:bg-transparent"
          >
            {t.back}
          </Button>
        </div>
      </div>
    </div>
  );
}
