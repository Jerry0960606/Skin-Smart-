import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CheckCircle, AlertTriangle, XCircle, Info, ArrowLeftRight } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

export default function ComparisonPage() {
    const { language, setCurrentPage, scanHistory, selectedComparisonIds, clearComparisonSelection } = useAppStore();
    const t = translations[language];
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const products = scanHistory.filter(record => selectedComparisonIds.includes(record.id));

    // Ensure we have exactly 2 products
    if (products.length < 2) {
        return (
            <div className="min-h-screen gradient-navy flex items-center justify-center p-6 text-center">
                <div>
                    <p className="text-white/60 mb-6">{t.compareLimit}</p>
                    <Button onClick={() => setCurrentPage('history')} className="bg-coral text-navy font-bold">
                        {t.back}
                    </Button>
                </div>
            </div>
        );
    }

    const p1 = products[0];
    const p2 = products[1];

    // Logic to find common and unique ingredients
    const ingredients1 = new Set(p1.ingredients.map(i => i.toLowerCase().trim()));
    const ingredients2 = new Set(p2.ingredients.map(i => i.toLowerCase().trim()));

    const common = p1.ingredients.filter(i => ingredients2.has(i.toLowerCase().trim()));
    const uniqueTo1 = p1.ingredients.filter(i => !ingredients2.has(i.toLowerCase().trim()));
    const uniqueTo2 = p2.ingredients.filter(i => !ingredients1.has(i.toLowerCase().trim()));

    const getResultIcon = (result: string) => {
        switch (result) {
            case 'green': return <CheckCircle className="w-5 h-5 text-emerald-400" />;
            case 'yellow': return <AlertTriangle className="w-5 h-5 text-amber-400" />;
            case 'red': return <XCircle className="w-5 h-5 text-rose-400" />;
            default: return <Info className="w-5 h-5 text-white/50" />;
        }
    };

    const getResultColor = (result: string) => {
        switch (result) {
            case 'green': return 'text-emerald-400';
            case 'yellow': return 'text-amber-400';
            case 'red': return 'text-rose-400';
            default: return 'text-white/70';
        }
    };

    return (
        <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-coral/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-navy-light/20 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-6 py-6 border-b border-white/5 bg-navy/20 backdrop-blur-sm">
                <button
                    onClick={() => setCurrentPage('history')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <ArrowLeftRight className="w-5 h-5 text-coral" />
                    {t.comparisonTitle}
                </h1>
                <div className="w-10" />
            </div>

            <ScrollArea className="flex-1">
                <div className={`px-6 py-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Main comparison cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {[p1, p2].map((p, idx) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative overflow-hidden group"
                            >
                                {/* Winner badge */}
                                {((idx === 0 && p1.matchScore > p2.matchScore) || (idx === 1 && p2.matchScore > p1.matchScore)) && (
                                    <div className="absolute -top-1 -right-1 bg-coral text-navy text-[10px] font-bold px-2 py-1 rounded-bl-lg z-10 animate-pulse">
                                        {t.betterMatch}
                                    </div>
                                )}

                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform">
                                    🧴
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1 line-clamp-2 min-h-[40px]">
                                    {p.productName}
                                </h3>

                                <div className="mt-4 space-y-3">
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[10px] uppercase tracking-wider">{t.safetyScore}</span>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-lg font-bold ${getResultColor(p.result || 'green')}`}>{p.safetyScore}%</span>
                                            {getResultIcon(p.result || 'green')}
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[10px] uppercase tracking-wider">{t.matchScore}</span>
                                        <span className="text-lg font-bold text-white">{p.matchScore}%</span>
                                        <div className="w-full h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                                            <div
                                                className="h-full bg-coral rounded-full transition-all duration-1000"
                                                style={{ width: `${p.matchScore}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Detailed Differences */}
                    <div className="space-y-8">
                        {/* Common Ingredients */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                                {t.commonIngredients}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {common.length > 0 ? common.map((ing, i) => (
                                    <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">
                                        {ing}
                                    </span>
                                )) : <span className="text-white/30 text-sm italic">None found</span>}
                            </div>
                        </div>

                        {/* Unique to P1 */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-coral rounded-full" />
                                {t.uniqueTo.replace('{name}', p1.productName || '')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {uniqueTo1.length > 0 ? uniqueTo1.map((ing, i) => (
                                    <span key={i} className="px-3 py-1 bg-coral/10 text-coral text-xs rounded-full border border-coral/20">
                                        {ing}
                                    </span>
                                )) : <span className="text-white/30 text-sm italic">None found</span>}
                            </div>
                        </div>

                        {/* Unique to P2 */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-sky-400 rounded-full" />
                                {t.uniqueTo.replace('{name}', p2.productName || '')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {uniqueTo2.length > 0 ? uniqueTo2.map((ing, i) => (
                                    <span key={i} className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs rounded-full border border-sky-500/20">
                                        {ing}
                                    </span>
                                )) : <span className="text-white/30 text-sm italic">None found</span>}
                            </div>
                        </div>
                    </div>

                    {/* Comparison table dummy visuals */}
                    <div className="mt-8 bg-navy-light/30 rounded-3xl p-6 border border-white/10 shadow-xl overflow-hidden">
                        <h4 className="text-white font-bold mb-6 text-center">{t.safetyComparison}</h4>
                        <div className="space-y-6">
                            {[
                                { label: 'Irritants', v1: 2, v2: 0, bad: true },
                                { label: 'Comedogenic', v1: 1, v2: 1, bad: true },
                                { label: 'Antioxidants', v1: 3, v2: 5, bad: false },
                                { label: 'Hydration', v1: 4, v2: 2, bad: false },
                            ].map((row, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-24 text-white/50 text-[10px] uppercase font-bold text-right">{row.label}</div>
                                    <div className="flex-1 flex items-center gap-2">
                                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden flex justify-end">
                                            <div
                                                className={`h-full ${row.bad ? 'bg-rose-500' : 'bg-emerald-500'} transition-all duration-1000`}
                                                style={{ width: `${row.v1 * 20}%` }}
                                            />
                                        </div>
                                        <div className="w-8 text-center text-white font-mono text-xs">{row.v1}</div>
                                        <div className="w-8 text-center text-white font-mono text-xs">{row.v2}</div>
                                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${row.bad ? 'bg-rose-500' : 'bg-emerald-500'} transition-all duration-1000`}
                                                style={{ width: `${row.v2 * 20}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action button */}
                    <div className="mt-12 flex flex-col gap-4">
                        <Button
                            onClick={() => {
                                clearComparisonSelection();
                                setCurrentPage('history');
                            }}
                            className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-6 rounded-2xl transition-all"
                        >
                            {t.clearSelection}
                        </Button>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}
