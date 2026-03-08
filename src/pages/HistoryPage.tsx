import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Trash2, Calendar, CheckCircle, AlertTriangle, XCircle, Lock } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
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
  const { language, setCurrentPage, scanHistory, deleteFromHistory, clearHistory, isAuthenticated } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [deleteId, setDeleteId] = useState<string>('');
  const [showClearDialog, setShowClearDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

  const getResultIcon = (result: string | null) => {
    switch (result) {
      case 'green':
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case 'yellow':
        return <AlertTriangle className="w-6 h-6 text-amber-400" />;
      case 'red':
        return <XCircle className="w-6 h-6 text-rose-400" />;
      default:
        return null;
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

  return (
    <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6">
        <button
          onClick={() => setCurrentPage('cover')}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-bold text-white">{t.historyTitle}</h1>
        {scanHistory.length > 0 ? (
          <button
            onClick={() => setShowClearDialog(true)}
            className="p-2 rounded-full bg-white/10 hover:bg-rose-500/30 transition-colors"
          >
            <Trash2 className="w-5 h-5 text-white" />
          </button>
        ) : (
          <div className="w-10" />
        )}
      </div>

      {/* Main content */}
      <ScrollArea className="flex-1 px-6">
        <div className={`pb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {!isAuthenticated ? (
            // Unauthenticated state
            <div className="flex flex-col items-center justify-center py-20 mt-10">
              <div className="w-24 h-24 bg-gradient-to-br from-coral to-coral-dark rounded-full flex items-center justify-center mb-8 shadow-lg shadow-coral/20">
                <Lock className="w-10 h-10 text-navy" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 text-center">
                {language === 'zh-TW' ? '請先登入' : language === 'en' ? 'Login Required' : 'ログインが必要です'}
              </h2>
              <p className="text-white/60 text-center mb-10 max-w-[280px] leading-relaxed">
                {language === 'zh-TW'
                  ? '登入以保存並查看您專屬的分析歷史紀錄，隨時掌握肌膚狀況。'
                  : language === 'en' ? 'Login to save and view your personal analysis history, keeping track of your skin condition anywhere.'
                    : 'ログインして個人的な分析履歴を保存・表示し、肌の状態を把握しましょう。'}
              </p>
              <Button
                onClick={() => setCurrentPage('login')}
                className="w-full max-w-[280px] bg-coral hover:bg-coral-dark text-navy font-bold py-6 rounded-2xl shadow-lg transition-transform active:scale-95"
              >
                {language === 'zh-TW' ? '立即登入' : language === 'en' ? 'Login Now' : '今すぐログイン'}
              </Button>
            </div>
          ) : scanHistory.length === 0 ? (
            // Empty state
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
            // History list or Tabs
            <>
              {scanHistory.length >= 2 ? (
                <Tabs defaultValue="list" className="w-full">
                  <TabsList className="w-full grid grid-cols-2 bg-white/5 border border-white/10 rounded-xl mb-6 p-1">
                    <TabsTrigger value="list" className="rounded-lg data-[state=active]:bg-coral data-[state=active]:text-navy text-white/70">
                      {t.historyList || 'History List'}
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-coral data-[state=active]:text-navy text-white/70">
                      {t.historyAnalysis || 'Cross Analysis'}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="list" className="mt-0">
                    <div className="space-y-4">
                      {scanHistory.map((record) => (
                        <div
                          key={record.id}
                          className={`relative p-4 rounded-2xl border ${getResultColor(record.result)} transition-all duration-300 hover:scale-[1.02]`}
                        >
                          <div className="flex items-start gap-4">
                            {/* Result icon */}
                            <div className="flex-shrink-0">
                              {getResultIcon(record.result)}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-bold text-white truncate">
                                  {record.productName}
                                </h3>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${record.result === 'green' ? 'bg-emerald-500/30 text-emerald-400' :
                                  record.result === 'yellow' ? 'bg-amber-500/30 text-amber-400' :
                                    'bg-rose-500/30 text-rose-400'
                                  }`}>
                                  {getResultText(record.result)}
                                </span>
                              </div>

                              <div className="flex items-center gap-4 text-sm text-white/60">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {formatDate(record.date)}
                                </span>
                              </div>

                              <div className="flex gap-4 mt-3">
                                <div className="text-sm">
                                  <span className="text-white/50">{t.safetyScore}: </span>
                                  <span className={`font-semibold ${record.result === 'green' ? 'text-emerald-400' :
                                    record.result === 'yellow' ? 'text-amber-400' :
                                      'text-rose-400'
                                    }`}>
                                    {record.safetyScore}%
                                  </span>
                                </div>
                                <div className="text-sm">
                                  <span className="text-white/50">{t.matchScore}: </span>
                                  <span className={`font-semibold ${record.result === 'green' ? 'text-emerald-400' :
                                    record.result === 'yellow' ? 'text-amber-400' :
                                      'text-rose-400'
                                    }`}>
                                    {record.matchScore}%
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Delete button */}
                            <button
                              onClick={() => setDeleteId(record.id)}
                              className="p-2 rounded-full bg-white/10 hover:bg-rose-500/30 transition-colors flex-shrink-0"
                            >
                              <Trash2 className="w-4 h-4 text-white/60" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="analytics" className="mt-0">
                    <HistoryAnalytics />
                  </TabsContent>
                </Tabs>
              ) : (
                <div className="space-y-4">
                  {scanHistory.map((record) => (
                    <div
                      key={record.id}
                      className={`relative p-4 rounded-2xl border ${getResultColor(record.result)} transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Result icon */}
                        <div className="flex-shrink-0">
                          {getResultIcon(record.result)}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-white truncate">
                              {record.productName}
                            </h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${record.result === 'green' ? 'bg-emerald-500/30 text-emerald-400' :
                              record.result === 'yellow' ? 'bg-amber-500/30 text-amber-400' :
                                'bg-rose-500/30 text-rose-400'
                              }`}>
                              {getResultText(record.result)}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-white/60">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(record.date)}
                            </span>
                          </div>

                          <div className="flex gap-4 mt-3">
                            <div className="text-sm">
                              <span className="text-white/50">{t.safetyScore}: </span>
                              <span className={`font-semibold ${record.result === 'green' ? 'text-emerald-400' :
                                record.result === 'yellow' ? 'text-amber-400' :
                                  'text-rose-400'
                                }`}>
                                {record.safetyScore}%
                              </span>
                            </div>
                            <div className="text-sm">
                              <span className="text-white/50">{t.matchScore}: </span>
                              <span className={`font-semibold ${record.result === 'green' ? 'text-emerald-400' :
                                record.result === 'yellow' ? 'text-amber-400' :
                                  'text-rose-400'
                                }`}>
                                {record.matchScore}%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Delete button */}
                        <button
                          onClick={() => setDeleteId(record.id)}
                          className="p-2 rounded-full bg-white/10 hover:bg-rose-500/30 transition-colors flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4 text-white/60" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </ScrollArea>

      {/* Delete confirmation dialog */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId('')}>
        <DialogContent className="bg-navy-light border-white/20 text-white">
          <DialogHeader>
            <DialogTitle>刪除記錄</DialogTitle>
            <DialogDescription className="text-white/60">
              確定要刪除這筆記錄嗎？此操作無法復原。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setDeleteId('')}
              className="border-white/30 text-white hover:bg-white/10"
            >
              {t.cancel}
            </Button>
            <Button
              onClick={() => {
                if (deleteId) {
                  deleteFromHistory(deleteId);
                  setDeleteId('');
                }
              }}
              className="bg-rose-500 hover:bg-rose-600 text-white"
            >
              {t.confirm}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Clear all dialog */}
      <Dialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <DialogContent className="bg-navy-light border-white/20 text-white">
          <DialogHeader>
            <DialogTitle>清除所有記錄</DialogTitle>
            <DialogDescription className="text-white/60">
              確定要清除所有歷史記錄嗎？此操作無法復原。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setShowClearDialog(false)}
              className="border-white/30 text-white hover:bg-white/10"
            >
              {t.cancel}
            </Button>
            <Button
              onClick={() => {
                clearHistory();
                setShowClearDialog(false);
              }}
              className="bg-rose-500 hover:bg-rose-600 text-white"
            >
              {t.confirm}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
