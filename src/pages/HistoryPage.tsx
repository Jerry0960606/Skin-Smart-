import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Trash2, Calendar, CheckCircle, Lock } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HistoryAnalytics from '@/components/HistoryAnalytics';

export default function HistoryPage() {
  const {
    language, setCurrentPage, scanHistory, deleteFromHistory, bulkDeleteFromHistory,
    isAuthenticated, selectedComparisonIds, toggleComparisonSelection, clearComparisonSelection
  } = useAppStore();
  const t = translations[language];
  const [deleteId, setDeleteId] = useState<string>('');
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showBulkDeleteDialog, setShowBulkDeleteDialog] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh-TW' ? 'zh-TW' : language === 'ja' ? 'ja-JP' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getResultText = (result: string | null) => {
    switch (result) {
      case 'green':
        return t.resultGreen;
      case 'yellow':
        return t.resultYellow;
      case 'red':
        return t.resultRed;
      default:
        return '';
    }
  };

  const getResultColor = (result: string | null) => {
    switch (result) {
      case 'green':
        return 'border-emerald-500/50 bg-emerald-500/10';
      case 'yellow':
        return 'border-amber-500/50 bg-amber-500/10';
      case 'red':
        return 'border-rose-500/50 bg-rose-500/10';
      default:
        return 'border-white/20 bg-white/5';
    }
  };

  return (
    <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-navy/20 backdrop-blur-sm">
        <button
          onClick={() => {
            clearComparisonSelection();
            setCurrentPage('cover');
          }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold text-white">{t.historyItem}</h1>
        <div className="flex items-center gap-2">
          {scanHistory.length > 0 && (
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
              <div className="w-24 h-24 bg-gradient-to-br from-coral to-coral-dark rounded-full flex items-center justify-center mb-8 shadow-lg shadow-coral/20">
                <Lock className="w-10 h-10 text-navy" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 text-center">
                {language === 'zh-TW' ? '請先登入' : language === 'en' ? 'Login Required' : 'ログインが必要です'}
              </h2>
              <p className="text-white/60 text-center mb-10 max-w-[280px] leading-relaxed">
                {language === 'zh-TW' 
                  ? '登入以保存並查看您專屬的分析歷史紀錄。' 
                  : 'Login to save and view your analysis history.'}
              </p>
              <Button
                onClick={() => setCurrentPage('login')}
                className="w-full max-w-[280px] bg-coral hover:bg-coral-dark text-navy font-bold py-6 rounded-2xl"
              >
                {t.login}
              </Button>
            </div>
          ) : scanHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-12 h-12 text-white/30" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{t.historyEmpty}</h2>
              <p className="text-white/60 text-center mb-8">{t.historyHint}</p>
              <Button
                onClick={() => setCurrentPage('cover')}
                className="bg-coral hover:bg-coral-dark text-navy font-bold px-8 py-5 rounded-full"
              >
                {t.startAnalysis}
              </Button>
            </div>
          ) : (
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="w-full grid grid-cols-2 bg-white/5 border border-white/10 rounded-xl mb-6 p-1">
                <TabsTrigger value="list" className="rounded-lg text-white/70">{t.historyList}</TabsTrigger>
                <TabsTrigger value="analytics" className="rounded-lg text-white/70">{t.historyAnalysis}</TabsTrigger>
              </TabsList>

              <TabsContent value="list" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AnimatePresence mode="popLayout">
                    {scanHistory.map((record, idx) => (
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
                            toggleComparisonSelection(record.id);
                          }
                        }}
                        className={`relative p-5 rounded-3xl border cursor-pointer transition-all duration-300 group ${
                          (isSelectMode ? selectedIds.includes(record.id) : selectedComparisonIds.includes(record.id))
                            ? 'border-coral bg-coral/20 shadow-xl shadow-coral/10'
                            : getResultColor(record.result) + ' hover:bg-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center relative overflow-hidden bg-white/5">
                              {record.imageUrl ? (
                                <img src={record.imageUrl} alt={record.productName} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xl">🧴</span>
                              )}
                            </div>
                            <div className="flex gap-2">
                              {!isSelectMode && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setDeleteId(record.id);
                                  }}
                                  className="p-2 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 hover:bg-rose-500/30 transition-all"
                                >
                                  <Trash2 className="w-4 h-4 text-white/60" />
                                </button>
                              )}
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                (isSelectMode ? selectedIds.includes(record.id) : selectedComparisonIds.includes(record.id))
                                  ? 'border-coral bg-coral'
                                  : 'border-white/20'
                                }`}>
                                {(isSelectMode ? selectedIds.includes(record.id) : selectedComparisonIds.includes(record.id)) && <CheckCircle className="w-4 h-4 text-navy" />}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-bold text-white text-lg mb-1 truncate group-hover:text-coral transition-colors">
                              {record.productName}
                            </h3>
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md ${
                                record.result === 'green' ? 'bg-emerald-500/30 text-emerald-400' :
                                record.result === 'yellow' ? 'bg-amber-500/30 text-amber-400' :
                                'bg-rose-500/30 text-rose-400'
                              }`}>
                                {getResultText(record.result)}
                              </span>
                              <span className="text-[10px] text-white/40 font-medium">
                                {formatDate(record.date)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-0">
                <HistoryAnalytics />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </ScrollArea>

      {/* Bulk Delete Floating Bar */}
      <AnimatePresence>
        {isSelectMode && selectedIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 p-6 z-50 bg-navy/90 backdrop-blur-xl border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
              <span className="text-white font-bold">
                {t.deleteSelected.replace('{count}', selectedIds.length.toString())}
              </span>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setIsSelectMode(false);
                    setSelectedIds([]);
                  }}
                  className="text-white/60 hover:text-white"
                >
                  {t.cancel}
                </Button>
                <Button
                  onClick={() => {
                    useAppStore.getState().bulkDeleteFromHistory(selectedIds);
                    setSelectedIds([]);
                    setIsSelectMode(false);
                  }}
                  className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg"
                >
                  {t.confirm}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Bar */}
      <AnimatePresence>
        {(selectedComparisonIds.length > 0 || (isSelectMode && selectedIds.length > 0)) && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 p-6 z-40 bg-navy/80 backdrop-blur-lg border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
              <span className="text-white font-bold">
                {isSelectMode ? `已選擇 ${selectedIds.length} 個` : `已選擇 ${selectedComparisonIds.length} 個項目`}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-white/60" onClick={() => { setSelectedIds([]); setIsSelectMode(false); clearComparisonSelection(); }}>{t.cancel}</Button>
                {isSelectMode ? (
                  <Button className="bg-rose-500 text-white" onClick={() => setShowBulkDeleteDialog(true)}>{t.confirm}</Button>
                ) : (
                  <Button className="bg-coral text-navy" disabled={selectedComparisonIds.length < 2} onClick={() => setCurrentPage('comparison')}>{t.startComparison}</Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dialogs */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId('')}>
        <DialogContent className="bg-navy border-white/20 text-white">
          <DialogHeader><DialogTitle>刪除記錄</DialogTitle><DialogDescription>確定要刪除這筆項目嗎？</DialogDescription></DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId('')}>{t.cancel}</Button>
            <Button className="bg-rose-500" onClick={() => { deleteFromHistory(deleteId); setDeleteId(''); }}>{t.confirm}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showBulkDeleteDialog} onOpenChange={setShowBulkDeleteDialog}>
        <DialogContent className="bg-navy border-white/20 text-white">
          <DialogHeader><DialogTitle>{t.confirmDelete}</DialogTitle><DialogDescription>確定要刪除選中的項目嗎？</DialogDescription></DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBulkDeleteDialog(false)}>{t.cancel}</Button>
            <Button className="bg-rose-500" onClick={() => { bulkDeleteFromHistory(selectedIds); setSelectedIds([]); setIsSelectMode(false); setShowBulkDeleteDialog(false); }}>{t.confirm}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
