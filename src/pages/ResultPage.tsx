import { useState, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, XCircle, FileText, ShoppingCart, Search, Sparkles } from 'lucide-react';
import { searchProductByBarcode, searchProductsByIngredients } from '@/data/products';
import { motion } from 'framer-motion';

export default function ResultPage() {
  const { language, setCurrentPage, scanHistory, currentProduct, skinType } = useAppStore();
  const t = translations[language];
  const [foundProduct, setFoundProduct] = useState<any>(null);

  // Get the most recent result
  const latestRecord = scanHistory[0];
  const result = latestRecord?.result || 'green';


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
        <div className={`absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-30 ${result === 'green' ? 'bg-emerald-500' : result === 'yellow' ? 'bg-amber-500' : 'bg-rose-500'
          }`} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-10 w-full max-w-md mx-auto">
        {/* Result card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full rounded-[2.5rem] border-2 ${config.borderColor} ${config.bgColor} p-8 mb-8 relative overflow-hidden backdrop-blur-xl`}
        >
          {/* Ambient Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl ${result === 'green' ? 'bg-emerald-500' : result === 'yellow' ? 'bg-amber-500' : 'bg-rose-500'
              }`}
          />

          {/* Icon */}
          <div className="flex justify-center mb-6 relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className={`w-24 h-24 rounded-full ${config.bgColor} flex items-center justify-center relative z-10`}
            >
              <Icon className={`w-12 h-12 ${config.textColor}`} />

              {result === 'green' && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        x: Math.cos(i * 60 * Math.PI / 180) * 40,
                        y: Math.sin(i * 60 * Math.PI / 180) * 40
                      }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="absolute"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-300" />
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-3xl md:text-4xl font-black text-center mb-4 tracking-tighter ${config.textColor}`}
          >
            {config.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/80 text-center mb-4 font-medium"
          >
            {config.description}
          </motion.p>

          {/* Product name & Image */}
          {(foundProduct || latestRecord?.productName) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl mb-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex-shrink-0 overflow-hidden flex items-center justify-center">
                {latestRecord?.imageUrl ? (
                  <img src={latestRecord.imageUrl} alt="Product" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl">🧴</span>
                )}
              </div>
              <p className="text-white font-bold truncate flex-1">
                {foundProduct?.name?.[language] || latestRecord?.productName}
              </p>
            </motion.div>
          )}

          {/* Skin warning */}
          {getSkinWarning() && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mb-4"
            >
              <p className="text-amber-400 text-xs text-center font-medium">
                {getSkinWarning()}
              </p>
            </motion.div>
          )}

          {/* Character image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="flex justify-center mb-6"
          >
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src={config.image}
              alt={config.title}
              className="w-40 h-40 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Scores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center group hover:bg-white/10 transition-colors">
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{t.safetyScore}</p>
              <p className={`text-2xl font-black ${config.textColor}`}>
                {latestRecord?.safetyScore || 85}%
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center group hover:bg-white/10 transition-colors">
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">{t.matchScore}</p>
              <p className={`text-2xl font-black ${config.textColor}`}>
                {latestRecord?.matchScore || 78}%
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Action buttons */}
        <div className="w-full space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            <Button
              onClick={handleSecondaryAction}
              variant="outline"
              className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10 py-7 rounded-2xl font-bold group"
            >
              <FileText className="w-5 h-5 mr-3 text-coral group-hover:scale-110 transition-transform" />
              {config.secondaryAction}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
          >
            <Button
              onClick={handlePrimaryAction}
              className={`w-full py-7 rounded-2xl font-black text-lg shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] ${result === 'green'
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20'
                : result === 'yellow'
                  ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20'
                  : 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20'
                }`}
            >
              {result === 'green' && <ShoppingCart className="w-6 h-6 mr-3" />}
              {result !== 'green' && <Search className="w-6 h-6 mr-3" />}
              {config.primaryAction}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
          >
            <Button
              onClick={() => setCurrentPage('cover')}
              variant="ghost"
              className="w-full text-white/30 hover:text-white hover:bg-transparent uppercase text-[10px] font-bold tracking-widest mt-4"
            >
              {t.back}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
