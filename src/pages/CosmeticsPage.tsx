import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CheckCircle, Package, Lock } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

export default function CosmeticsPage() {
  const {
    language, setCurrentPage, myCosmetics, bulkDeleteFromMyCosmetics,
    isAuthenticated
  } = useAppStore();
  const t = translations[language];
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh-TW' ? 'zh-TW' : language === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };


  const handleBulkDelete = () => {
    bulkDeleteFromMyCosmetics(selectedIds);
    setSelectedIds([]);
    setIsSelectMode(false);
  };

  return (
    <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-navy/20 backdrop-blur-sm">
        <button
          onClick={() => setCurrentPage('cover')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold text-white">{t.myCosmetics}</h1>
        <div className="flex items-center gap-2">
          {myCosmetics.length > 0 && (
            <button
              onClick={() => {
                setIsSelectMode(!isSelectMode);
                setSelectedIds([]);
              }}
              className={`p-2 rounded-full transition-colors ${isSelectMode ? 'bg-coral text-navy' : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <CheckCircle className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Main content */}
      <ScrollArea className="flex-1 px-6">
        <div className="pb-32 pt-6">
          {!isAuthenticated ? (
            <div className="flex flex-col items-center justify-center py-20 mt-10">
              <div className="w-24 h-24 bg-gradient-to-br from-coral to-coral-dark rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Lock className="w-10 h-10 text-navy" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 text-center">
                {language === 'zh-TW' ? '請先登入' : 'Login Required'}
              </h2>
              <Button
                onClick={() => setCurrentPage('login')}
                className="w-full max-w-[280px] bg-coral text-navy font-bold py-6 rounded-2xl"
              >
                {t.login || 'Login'}
              </Button>
            </div>
          ) : myCosmetics.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Package className="w-12 h-12 text-white/30" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{language === 'zh-TW' ? '尚無收藏' : 'No Collection'}</h2>
              <p className="text-white/60 text-center mb-8">
                {language === 'zh-TW' ? '手動添加您的化妝品，建立專屬藏書！' : 'Add your cosmetics manually to build your collection!'}
              </p>
              <Button
                onClick={() => {
                   useAppStore.getState().setScanType('ingredients');
                   setCurrentPage('manual-input');
                }}
                className="bg-coral text-navy font-bold px-8 py-5 rounded-full"
              >
                {language === 'zh-TW' ? '立即添加' : 'Add Now'}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {myCosmetics.map((record, idx) => (
                  <motion.div
                    key={record.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => {
                      if (isSelectMode) {
                        setSelectedIds(prev =>
                          prev.includes(record.id)
                            ? prev.filter(id => id !== record.id)
                            : [...prev, record.id]
                        );
                      } else {
                        // View details - maybe go to report or just show info
                      }
                    }}
                    className={`relative flex flex-col p-4 rounded-3xl border cursor-pointer transition-all duration-300 group ${
                      selectedIds.includes(record.id)
                        ? 'border-coral bg-coral/20'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="aspect-square w-full rounded-2xl bg-white/5 mb-3 overflow-hidden">
                      {record.imageUrl ? (
                        <img src={record.imageUrl} alt={record.productName} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl">🧴</div>
                      )}
                    </div>
                    <h3 className="font-bold text-white text-sm truncate mb-1">{record.productName}</h3>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-[10px] text-white/40">{formatDate(record.date)}</span>
                        {isSelectMode && (
                             <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedIds.includes(record.id) ? 'bg-coral border-coral' : 'border-white/20'}`}>
                                {selectedIds.includes(record.id) && <CheckCircle className="w-3 h-3 text-navy" />}
                             </div>
                        )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Bulk Delete Bar */}
      <AnimatePresence>
        {isSelectMode && selectedIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 p-6 z-50 bg-navy/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto flex items-center justify-between">
              <span className="text-white font-bold">
                {t.deleteSelected.replace('{count}', selectedIds.length.toString())}
              </span>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setIsSelectMode(false)} className="text-white/60">{t.cancel}</Button>
                <Button onClick={handleBulkDelete} className="bg-rose-500 text-white font-bold px-6">{t.confirm}</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
