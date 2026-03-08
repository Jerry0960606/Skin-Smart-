import { useState, useMemo } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { ChevronLeft, Search, Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ingredientSafety } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function IngredientWikiPage() {
    const { language, setCurrentPage } = useAppStore();
    const t = translations[language];
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<'all' | 'safe' | 'caution' | 'warning'>('all');

    const ingredients = useMemo(() => {
        return Object.entries(ingredientSafety).map(([name, data]) => ({
            name,
            ...data,
        }));
    }, []);

    const filteredIngredients = useMemo(() => {
        return ingredients.filter((ing) => {
            const matchesSearch = ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ing.zhName.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'all' || ing.safety === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [ingredients, searchQuery, activeCategory]);

    const getSafetyIcon = (safety: string) => {
        switch (safety) {
            case 'safe': return <CheckCircle className="w-5 h-5 text-emerald-400" />;
            case 'caution': return <AlertTriangle className="w-5 h-5 text-amber-400" />;
            case 'warning': return <XCircle className="w-5 h-5 text-rose-400" />;
            default: return <Info className="w-5 h-5 text-white/50" />;
        }
    };

    const getSafetyBg = (safety: string) => {
        switch (safety) {
            case 'safe': return 'bg-emerald-500/10 border-emerald-500/20';
            case 'caution': return 'bg-amber-500/10 border-amber-500/20';
            case 'warning': return 'bg-rose-500/10 border-rose-500/20';
            default: return 'bg-white/5 border-white/10';
        }
    };

    return (
        <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-coral/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-navy-light/10 rounded-full blur-[100px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 px-6 pt-8 pb-4 bg-navy/20 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={() => setCurrentPage('cover')}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-white uppercase tracking-wider">{t.wikiTitle}</h1>
                    <div className="w-10" />
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t.wikiSearchPlaceholder}
                        className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 rounded-xl focus:ring-coral"
                    />
                </div>

                {/* Categories */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {[
                        { id: 'all', label: t.wikiCategoryAll },
                        { id: 'safe', label: t.wikiCategorySafe },
                        { id: 'caution', label: t.wikiCategoryCaution },
                        { id: 'warning', label: t.wikiCategoryWarning },
                    ].map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id as any)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${activeCategory === cat.id
                                ? 'bg-coral text-navy border-coral'
                                : 'bg-white/5 text-white/50 border-white/10 hover:bg-white/10'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-6 pb-24">
                    <AnimatePresence mode="popLayout">
                        {filteredIngredients.length > 0 ? (
                            <div className="grid gap-4">
                                {filteredIngredients.map((ing, idx) => (
                                    <motion.div
                                        key={ing.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`p-4 rounded-2xl border ${getSafetyBg(ing.safety)} group transition-all hover:scale-[1.02]`}
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <div>
                                                <h3 className="text-white font-bold leading-tight group-hover:text-coral transition-colors">
                                                    {ing.name}
                                                </h3>
                                                <p className="text-white/40 text-xs font-medium">{ing.zhName}</p>
                                            </div>
                                            <div className="p-2 rounded-lg bg-white/5">
                                                {getSafetyIcon(ing.safety)}
                                            </div>
                                        </div>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            {ing.description[language]}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col items-center justify-center py-20 text-center"
                            >
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
                                    <Search className="w-8 h-8 text-white/20" />
                                </div>
                                <p className="text-white/30 italic">{t.wikiNoResults}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </ScrollArea>
        </div>
    );
}
