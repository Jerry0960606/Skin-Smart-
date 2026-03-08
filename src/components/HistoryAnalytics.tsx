import { useMemo } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Target, Shield, Sparkles } from 'lucide-react';

export default function HistoryAnalytics() {
    const { language, scanHistory } = useAppStore();
    const t = translations[language];

    // We only run this if scanHistory.length >= 2, this is guaranteed by HistoryPage
    const data = useMemo(() => {
        // Reverse so chronologically oldest is first on the left
        return [...scanHistory].reverse().map(record => {
            const date = new Date(record.date);
            return {
                name: date.toLocaleDateString(language === 'zh-TW' ? 'zh-TW' : language === 'ja' ? 'ja-JP' : 'en-US', {
                    month: 'short',
                    day: 'numeric'
                }),
                safety: record.safetyScore,
                match: record.matchScore,
                fullDate: date,
                productName: record.productName
            };
        });
    }, [scanHistory, language]);

    const stats = useMemo(() => {
        const avgSafety = Math.round(data.reduce((acc, curr) => acc + curr.safety, 0) / data.length);
        const avgMatch = Math.round(data.reduce((acc, curr) => acc + curr.match, 0) / data.length);

        // Trend calculation (last vs first)
        const safetyDelta = data[data.length - 1].safety - data[0].safety;
        const matchDelta = data[data.length - 1].match - data[0].match;

        return { avgSafety, avgMatch, safetyDelta, matchDelta };
    }, [data]);

    const getInsight = () => {
        if (stats.matchDelta > 5 && stats.safetyDelta >= 0) {
            return language === 'zh-TW'
                ? '太棒了！您近期的產品選擇比過去更適合您的膚質，且安全性穩定。'
                : language === 'en' ? 'Great! Your recent product choices match your skin better while maintaining safety.'
                    : '素晴らしい！最近の製品はあなたの肌にさらに適しており、安全性も安定しています。';
        } else if (stats.safetyDelta < -10) {
            return language === 'zh-TW'
                ? '請注意：您近期的產品選擇風險較高，建議多留意成分。'
                : language === 'en' ? 'Caution: Your recent products show higher risk profiles. Please check the ingredients.'
                    : '注意: 最近の製品はリスクが高くなっています。成分を確認してください。';
        } else {
            return language === 'zh-TW'
                ? '您的保養品選擇十分穩定，繼續保持對肌膚的關注吧！'
                : language === 'en' ? 'Your skincare choices are very stable. Keep up the good work!'
                    : 'スキンケアの選択は非常に安定しています。引き続き肌に関心を持ちましょう！';
        }
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-navy border border-white/20 p-3 rounded-xl shadow-xl backdrop-blur-md">
                    <p className="text-white/60 text-xs mb-2">{label}</p>
                    <p className="font-bold text-white mb-2 max-w-[150px] truncate">{payload[0].payload.productName}</p>
                    {payload.map((entry: any, index: number) => (
                        <div key={index} className="flex gap-2 items-center text-sm mb-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-white/80">
                                {entry.dataKey === 'safety' ? t.safetyScore : t.matchScore}:
                            </span>
                            <span className="font-bold text-white">{entry.value}%</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* Insight Card */}
            <div className="bg-gradient-to-br from-coral/20 to-coral-dark/10 border border-coral/20 rounded-2xl p-5 relative overflow-hidden">
                <Sparkles className="absolute top-4 right-4 w-12 h-12 text-coral/20" />
                <h3 className="flex items-center gap-2 font-bold text-white mb-2">
                    <Sparkles className="w-4 h-4 text-coral" />
                    {t.insightTitle}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm">
                    {getInsight()}
                </p>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-white/50 mb-2">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">{t.avgSafety}</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">{stats.avgSafety}%</span>
                        {stats.safetyDelta !== 0 && (
                            <span className={`flex items-center text-xs pb-1 ${stats.safetyDelta > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {stats.safetyDelta > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(stats.safetyDelta)}%
                            </span>
                        )}
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-white/50 mb-2">
                        <Target className="w-4 h-4" />
                        <span className="text-sm">{t.avgMatch}</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">{stats.avgMatch}%</span>
                        {stats.matchDelta !== 0 && (
                            <span className={`flex items-center text-xs pb-1 ${stats.matchDelta > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {stats.matchDelta > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                                {Math.abs(stats.matchDelta)}%
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Chart */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 pt-6">
                <h3 className="font-bold text-white mb-6 pl-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-coral" />
                    {t.safetyTrend} / {t.matchTrend}
                </h3>
                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorSafety" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#41d992" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#41d992" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorMatch" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ffb099" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#ffb099" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area type="monotone" dataKey="safety" stroke="#41d992" strokeWidth={2} fillOpacity={1} fill="url(#colorSafety)" name={t.safetyScore} />
                            <Area type="monotone" dataKey="match" stroke="#ffb099" strokeWidth={2} fillOpacity={1} fill="url(#colorMatch)" name={t.matchScore} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
