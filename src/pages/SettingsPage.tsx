import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChevronLeft, Trash2, RefreshCcw, AlertTriangle, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations } from '@/i18n/translations';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';

export default function SettingsPage() {
    const { language, setCurrentPage, clearHistory, resetQuiz, blacklist, addToBlacklist, removeFromBlacklist } = useAppStore();
    const t = translations[language];
    const [showConfirmClear, setShowConfirmClear] = useState(false);
    const [showConfirmReset, setShowConfirmReset] = useState(false);
    const [newIngredient, setNewIngredient] = useState('');

    const handleAddIngredient = () => {
        if (!newIngredient.trim()) return;
        addToBlacklist(newIngredient.trim());
        setNewIngredient('');
        toast.success(language === 'zh-TW' ? '已加入黑名單' : language === 'en' ? 'Added to blacklist' : 'ブラックリストに追加されました');
    };

    const handleClearHistory = () => {
        clearHistory();
        setShowConfirmClear(false);
        toast.success(language === 'zh-TW' ? '歷史紀錄已清空' : language === 'en' ? 'History cleared' : '履歴がクリアされました');
    };

    const handleResetQuiz = () => {
        resetQuiz();
        setShowConfirmReset(false);
        toast.success(language === 'zh-TW' ? '膚質測驗已重置' : language === 'en' ? 'Quiz reset' : 'クイズがリセットされました');
    };

    return (
        <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Header */}
            <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/10 bg-navy/50 backdrop-blur-md">
                <button
                    onClick={() => setCurrentPage('cover')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-white font-bold text-lg">
                    {t.settings || (language === 'zh-TW' ? '設定' : language === 'en' ? 'Settings' : '設定')}
                </span>
                <div className="w-10"></div> {/* Spacer */}
            </div>

            <div className="relative z-10 flex-1 p-6 max-w-2xl mx-auto w-full space-y-8 mt-4">

                {/* Account Data Management section */}
                <div>
                    <h2 className="text-coral text-sm font-bold uppercase tracking-wider mb-4 px-2">
                        {language === 'zh-TW' ? '資料管理' : language === 'en' ? 'Data Management' : 'データ管理'}
                    </h2>
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/5">

                        {/* Clear History */}
                        <div className="p-4 flex flex-col">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
                                        <Trash2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">
                                            {language === 'zh-TW' ? '清除掃描歷史紀錄' : language === 'en' ? 'Clear Scan History' : 'スキャン履歴をクリア'}
                                        </p>
                                        <p className="text-white/50 text-xs mt-0.5">
                                            {language === 'zh-TW' ? '此操作無法復原，將刪除所有儲存在本機的紀錄' : language === 'en' ? 'This action cannot be undone. All local records will be deleted.' : 'この操作は元に戻せません。保存されたすべての履歴が削除されます。'}
                                        </p>
                                    </div>
                                </div>
                                {!showConfirmClear ? (
                                    <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-white/5" onClick={() => setShowConfirmClear(true)}>
                                        {language === 'zh-TW' ? '清除' : 'Clear'}
                                    </Button>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="sm" className="text-white/60 hover:text-white" onClick={() => setShowConfirmClear(false)}>取消</Button>
                                        <Button variant="destructive" size="sm" onClick={handleClearHistory}>
                                            確認
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Reset Skin Profile */}
                        <div className="p-4 flex flex-col">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400">
                                        <RefreshCcw className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">
                                            {language === 'zh-TW' ? '重新測驗膚質' : language === 'en' ? 'Reset Skin Profile Quiz' : '肌質クイズをリセットする'}
                                        </p>
                                        <p className="text-white/50 text-xs mt-0.5">
                                            {language === 'zh-TW' ? '這將清除您的現有膚質評估，讓您重新測驗' : language === 'en' ? 'This clears your current evaluation so you can take it again.' : '現在の評価をクリアして、再度クイズを受けることができます。'}
                                        </p>
                                    </div>
                                </div>
                                {!showConfirmReset ? (
                                    <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 hover:bg-white/5" onClick={() => setShowConfirmReset(true)}>
                                        {language === 'zh-TW' ? '重置' : 'Reset'}
                                    </Button>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="sm" className="text-white/60 hover:text-white" onClick={() => setShowConfirmReset(false)}>取消</Button>
                                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm" size="sm" onClick={handleResetQuiz}>
                                            確認
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Personal Blacklist Section */}
                <div>
                    <h2 className="text-coral text-sm font-bold uppercase tracking-wider mb-4 px-2">
                        {t.blacklistTitle}
                    </h2>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
                        <p className="text-white/50 text-xs">
                            {t.blacklistDesc}
                        </p>

                        <div className="flex gap-2">
                            <Input
                                value={newIngredient}
                                onChange={(e) => setNewIngredient(e.target.value)}
                                placeholder={t.ingredientPlaceholder}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/20"
                                onKeyDown={(e) => e.key === 'Enter' && handleAddIngredient()}
                            />
                            <Button
                                onClick={handleAddIngredient}
                                className="bg-coral hover:bg-coral-dark text-navy font-bold shrink-0"
                            >
                                <Plus className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {blacklist.length > 0 ? (
                                blacklist.map((ing) => (
                                    <div
                                        key={ing}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 group transition-all hover:bg-white/20"
                                    >
                                        <span className="text-white text-sm">{ing}</span>
                                        <button
                                            onClick={() => removeFromBlacklist(ing)}
                                            className="text-white/40 hover:text-rose-400 p-0.5 rounded-full hover:bg-rose-400/20 transition-colors"
                                        >
                                            <X className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-white/20 text-sm italic w-full text-center py-4">
                                    {t.blacklistEmpty}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Security Info */}
                <div className="mt-8 p-5 bg-navy-light/50 border border-white/5 rounded-2xl flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-white/40 shrink-0 mt-1" />
                    <p className="text-white/50 text-sm leading-relaxed">
                        {language === 'zh-TW'
                            ? '我們相當重視您的隱私，應用程式不會在不知情的情況下追蹤您的活動，所有掃描紀錄均加密保管於您的設備中。'
                            : language === 'en'
                                ? 'We value your privacy. The app does not track your activity tracking without consent. All scan logs are encrypted and stored locally on your device.'
                                : '私たちはあなたのプライバシーを尊重します。アプリは同意なしにあなたのアクティビティを追跡しません。すべてのスキャンログは暗号化され、デバイスのローカルに保存されます。'}
                    </p>
                </div>

            </div>
        </div>
    );
}
