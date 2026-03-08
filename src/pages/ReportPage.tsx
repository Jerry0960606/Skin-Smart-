import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CheckCircle, AlertCircle, XCircle, Info } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { searchProductByBarcode, searchProductsByIngredients, getIngredientSafety } from '@/data/products';

export default function ReportPage() {
  const { language, setCurrentPage, scanHistory, currentProduct } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [foundProduct, setFoundProduct] = useState<any>(null);

  const latestRecord = scanHistory[0];
  const result = latestRecord?.result || 'green';

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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

  const getSafetyIcon = (safety: string) => {
    switch (safety) {
      case 'safe':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'caution':
        return <AlertCircle className="w-5 h-5 text-amber-400" />;
      case 'warning':
        return <XCircle className="w-5 h-5 text-rose-400" />;
      default:
        return <Info className="w-5 h-5 text-white/50" />;
    }
  };

  const getSafetyColor = (safety: string) => {
    switch (safety) {
      case 'safe':
        return 'text-emerald-400';
      case 'caution':
        return 'text-amber-400';
      case 'warning':
        return 'text-rose-400';
      default:
        return 'text-white/70';
    }
  };

  // Get ingredient analysis
  const getIngredientAnalysis = () => {
    if (foundProduct) {
      return foundProduct.ingredients.map((ingredient: string) => {
        const safety = getIngredientSafety(ingredient, language);
        return {
          name: ingredient,
          safety: safety.safety,
          description: safety.description,
        };
      });
    }

    if (currentProduct && !/^\d+$/.test(currentProduct)) {
      // Manual input analysis
      const ingredientList = currentProduct.split(/[平衡,，、\n]+/).map(i => i.trim()).filter(i => i.length > 0);
      return ingredientList.map(ing => {
        const safety = getIngredientSafety(ing, language);
        return {
          name: ing,
          safety: safety.safety,
          description: safety.description
        };
      });
    }

    return [];
  };

  // Get warnings based on skin type
  const getWarnings = () => {
    if (!foundProduct) return [];

    const warnings = [];
    const productWarnings = foundProduct.warnings || [];

    if (productWarnings.includes('alcohol')) {
      warnings.push({
        'zh-TW': '含有酒精，可能使肌膚乾燥，乾性/敏感肌需謹慎',
        'en': 'Contains alcohol, may dry out skin. Caution for dry/sensitive skin',
        'ja': 'アルコールを含み、肌を乾燥させる可能性があります。乾燥肌/敏感肌は注意',
      }[language]);
    }

    if (productWarnings.includes('fragrance')) {
      warnings.push({
        'zh-TW': '含有香料，敏感肌可能引起過敏反應',
        'en': 'Contains fragrance, may cause allergic reactions for sensitive skin',
        'ja': '香料を含み、敏感肌にアレルギー反応を起こす可能性があります',
      }[language]);
    }

    if (productWarnings.includes('salicylic_acid')) {
      warnings.push({
        'zh-TW': '含有水楊酸，孕婦及敏感肌請諮詢醫師後使用',
        'en': 'Contains salicylic acid. Pregnant women and sensitive skin should consult a doctor',
        'ja': 'サリチル酸を含みます。妊婦及び敏感肌は医師に相談してください',
      }[language]);
    }

    if (productWarnings.includes('retinol')) {
      warnings.push({
        'zh-TW': '含有維生素A衍生物，初次使用請從低濃度開始',
        'en': 'Contains vitamin A derivative. Start with low concentration for first-time use',
        'ja': 'ビタミンA誘導体を含みます。初めて使用する場合は低濃度から始めてください',
      }[language]);
    }

    if (productWarnings.includes('silicone')) {
      warnings.push({
        'zh-TW': '含有矽靈，易長痘痘的肌膚需注意',
        'en': 'Contains silicone. Acne-prone skin should use with caution',
        'ja': 'シリコンを含みます。ニキビができやすい肌は注意して使用してください',
      }[language]);
    }

    return warnings;
  };

  // Get recommendations
  const getRecommendations = () => {
    const recs = {
      'zh-TW': [
        '建議在耳後或手腕內側進行24小時貼膚測試',
        '初次使用請從少量開始，觀察肌膚反應',
        '如出現紅腫、搔癢等不適請立即停止使用',
      ],
      'en': [
        'Recommend doing a 24-hour patch test behind ear or inner wrist',
        'Start with a small amount for first use and observe skin reaction',
        'If redness, itching or discomfort occurs, discontinue use immediately',
      ],
      'ja': [
        '耳の後ろや手首の内側で24時間のパッチテストを推奨します',
        '初めて使用する場合は少量から始め、肌の反応を観察してください',
        '発赤、かゆみ、不快感が生じた場合は直ちに使用を中止してください',
      ],
    };
    return recs[language];
  };

  // Get good for skin types text
  const getGoodForText = () => {
    if (!foundProduct?.goodFor) return '';

    const skinTypeNames = {
      'zh-TW': {
        all: '所有膚質',
        dry: '乾性肌',
        oily: '油性肌',
        combination: '混合肌',
        sensitive: '敏感肌',
        normal: '一般肌',
        acne: '痘痘肌',
        mature: '熟齡肌',
        dehydrated: '缺水肌',
        dull: '暗沉肌',
        pores: '毛孔粗大',
        eczema: '濕疹肌',
        outdoor: '戶外活動',
      },
      'en': {
        all: 'All skin types',
        dry: 'Dry skin',
        oily: 'Oily skin',
        combination: 'Combination skin',
        sensitive: 'Sensitive skin',
        normal: 'Normal skin',
        acne: 'Acne-prone skin',
        mature: 'Mature skin',
        dehydrated: 'Dehydrated skin',
        dull: 'Dull skin',
        pores: 'Large pores',
        eczema: 'Eczema-prone skin',
        outdoor: 'Outdoor activities',
      },
      'ja': {
        all: 'すべての肌タイプ',
        dry: '乾燥肌',
        oily: '脂性肌',
        combination: '混合肌',
        sensitive: '敏感肌',
        normal: '普通肌',
        acne: 'ニキビ肌',
        mature: '熟齢肌',
        dehydrated: '脱水肌',
        dull: 'くすんだ肌',
        pores: '毛穴が目立つ',
        eczema: '湿疹のある肌',
        outdoor: 'アウトドア活動',
      },
    };

    const names = skinTypeNames[language];
    return foundProduct.goodFor.map((type: string) => names[type as keyof typeof names] || type).join('、');
  };

  const ingredientAnalysis = getIngredientAnalysis();
  const warnings = getWarnings();
  const recommendations = getRecommendations();

  return (
    <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6">
        <button
          onClick={() => setCurrentPage('result')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold text-white">{t.reportTitle}</h1>
        <div className="w-10" />
      </div>

      {/* Main content */}
      <ScrollArea className="flex-1 px-6">
        <div className={`pb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Product info card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🧴</span>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">{t.productName}</p>
                <h2 className="text-xl font-bold text-white mb-2">
                  {foundProduct?.name?.[language] || latestRecord?.productName || 'ABC Primer SPF 30'}
                </h2>
                {foundProduct?.brand && (
                  <p className="text-coral text-sm mb-2">{foundProduct.brand}</p>
                )}
                <div className="flex gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${result === 'green' ? 'bg-emerald-500/30 text-emerald-400' :
                      result === 'yellow' ? 'bg-amber-500/30 text-amber-400' :
                        'bg-rose-500/30 text-rose-400'
                    }`}>
                    {result === 'green' ? t.resultGreen : result === 'yellow' ? t.resultYellow : t.resultRed}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Good for skin types */}
          {foundProduct?.goodFor && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
              <p className="text-white/60 text-sm mb-2">
                {language === 'zh-TW' ? '適合膚質' : language === 'en' ? 'Good for' : '適した肌タイプ'}
              </p>
              <p className="text-white">{getGoodForText()}</p>
            </div>
          )}

          {/* Scores */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-white/60 text-sm mb-2">{t.safetyScore}</p>
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke={result === 'green' ? '#10b981' : result === 'yellow' ? '#f59e0b' : '#f43f5e'}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(latestRecord?.safetyScore || 85) * 2.51} 251`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold ${result === 'green' ? 'text-emerald-400' : result === 'yellow' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                    {latestRecord?.safetyScore || 85}%
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-white/60 text-sm mb-2">{t.matchScore}</p>
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke={result === 'green' ? '#10b981' : result === 'yellow' ? '#f59e0b' : '#f43f5e'}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(latestRecord?.matchScore || 78) * 2.51} 251`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold ${result === 'green' ? 'text-emerald-400' : result === 'yellow' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                    {latestRecord?.matchScore || 78}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients analysis */}
          {ingredientAnalysis.length > 0 && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">{t.ingredients}</h3>
              <div className="space-y-3">
                {ingredientAnalysis.slice(0, 6).map((ingredient: any, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                    {getSafetyIcon(ingredient.safety)}
                    <div className="flex-1">
                      <p className={`font-semibold ${getSafetyColor(ingredient.safety)}`}>
                        {ingredient.name}
                      </p>
                      <p className="text-white/60 text-sm">{ingredient.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warnings */}
          {warnings.length > 0 && (
            <div className={`rounded-2xl p-6 mb-6 ${result === 'yellow' ? 'bg-amber-500/20' : 'bg-rose-500/20'
              }`}>
              <h3 className="text-lg font-bold text-white mb-3">{t.warnings}</h3>
              <ul className="space-y-2">
                {warnings.map((warning, index) => (
                  <li key={index} className={`flex items-start gap-2 ${result === 'yellow' ? 'text-amber-300' : 'text-rose-300'
                    }`}>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-3">{t.recommendations}</h3>
            <ul className="space-y-2 text-white/70">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Character */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/Question.png"
              alt="Dr. Lipstick"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Back button */}
          <Button
            onClick={() => setCurrentPage('result')}
            className="w-full bg-coral hover:bg-coral-dark text-navy font-bold py-6 rounded-xl"
          >
            {t.back}
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}
