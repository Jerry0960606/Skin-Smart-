import { useAppStore } from '@/store/appStore';
import { ChevronLeft, ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';

export default function LabelInfoPage() {
    const { language, setCurrentPage } = useAppStore();

    const info = {
        'zh-TW': {
            title: '介紹分級標籤',
            subtitle: '了解我們的安全分析標準',
            green: '安全匹配 (Green)',
            greenDesc: '產品成分非常溫和，且完全避開了您的個人黑名單。適合您的膚質使用，無已知風險。',
            yellow: '需加注意 (Yellow)',
            yellowDesc: '含有少量可能引起過敏或對特定膚質具刺激性的成分（如微量酒精或香料）。使用時請留意皮膚狀況。',
            red: '不建議使用 (Red)',
            redDesc: '含有高度致敏成分、強烈刺激性物質，或直接命中了您的個人黑名單。強烈建議在全臉使用前先進行局部測試。',
            footer: '所有分析結果僅供參考，如有皮膚不適請立即停止使用並諮詢專業醫師。'
        },
        'en': {
            title: 'Classification Labels',
            subtitle: 'Understanding our safety standards',
            green: 'Safe Match (Green)',
            greenDesc: 'Ingredients are gentle and free from your blacklist items. Perfectly suitable for your skin type.',
            yellow: 'Use with Caution (Yellow)',
            yellowDesc: 'Contains minor potential allergens or mild irritants. Monitor your skin during use.',
            red: 'Not Recommended (Red)',
            redDesc: 'Contains high-risk allergens or items from your blacklist. Patch test required before full use.',
            footer: 'Analysis results for reference only. Consult a doctor if irritation occurs.'
        },
        'ja': {
            title: '分級標籤の紹介',
            subtitle: '安全分析基準について',
            green: '安全 (Green)',
            greenDesc: '成分は穏やかで、ブラックリスト項目も含まれていません。あなたの肌質に最適です。',
            yellow: '注意 (Yellow)',
            yellowDesc: '軽度の低刺激性または特定のアレルゲンが含まれている可能性があります。使用中は肌の状態を観察してください。',
            red: '非推奨 (Red)',
            redDesc: '高リスクのアレルゲンまたはブラックリストに含まれる成分が含まれています。使用前にパッチテストを推奨します。',
            footer: '分析結果は参考情報です。異常を感じた場合は医師にご相談ください。'
        }
    };

    const t = info[language as keyof typeof info] || info['en'];

    return (
        <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden custom-scrollbar overflow-y-auto pb-10">
            {/* Header */}
            <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/10 bg-navy/50 backdrop-blur-md sticky top-0">
                <button
                    onClick={() => setCurrentPage('cover')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-white font-bold text-lg">{t.title}</span>
                <div className="w-10"></div>
            </div>

            <div className="relative z-10 px-6 pt-8 max-w-2xl mx-auto w-full space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">{t.subtitle}</h2>
                    <div className="h-1 w-20 bg-coral mx-auto rounded-full" />
                </div>

                {/* Green */}
                <div className="bg-white/5 border border-green-500/20 p-6 rounded-2xl flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-xl shrink-0">
                        <ShieldCheck className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-green-400 font-bold text-xl mb-2">{t.green}</h3>
                        <p className="text-white/70 leading-relaxed">{t.greenDesc}</p>
                    </div>
                </div>

                {/* Yellow */}
                <div className="bg-white/5 border border-yellow-500/20 p-6 rounded-2xl flex items-start gap-4">
                    <div className="bg-yellow-500/20 p-3 rounded-xl shrink-0">
                        <AlertTriangle className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div>
                        <h3 className="text-yellow-400 font-bold text-xl mb-2">{t.yellow}</h3>
                        <p className="text-white/70 leading-relaxed">{t.yellowDesc}</p>
                    </div>
                </div>

                {/* Red */}
                <div className="bg-white/5 border border-red-500/20 p-6 rounded-2xl flex items-start gap-4">
                    <div className="bg-red-500/20 p-3 rounded-xl shrink-0">
                        <XCircle className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                        <h3 className="text-red-400 font-bold text-xl mb-2">{t.red}</h3>
                        <p className="text-white/70 leading-relaxed">{t.redDesc}</p>
                    </div>
                </div>

                <p className="text-center text-white/40 text-sm italic pt-4">
                    {t.footer}
                </p>
            </div>
        </div>
    );
}
