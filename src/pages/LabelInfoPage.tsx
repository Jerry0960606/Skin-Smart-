import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChevronLeft, Info } from 'lucide-react';
import ProductBox3D from '@/components/ProductBox3D';
import { motion, AnimatePresence } from 'framer-motion';

export default function LabelInfoPage() {
    const { language, setCurrentPage } = useAppStore();
    const [selectedLabel, setSelectedLabel] = useState<'green' | 'yellow' | 'red'>('green');

    const info = {
        'zh-TW': {
            title: '介紹分級標籤',
            subtitle: '了解我們的安全分析標準',
            green: '安全匹配 (Green)',
            greenDesc: '產品成分非常溫和，且完全避開了您的個人黑名單。適合您的膚質使用，無已知風險。',
            yellow: '需加注意 (Yellow)',
            yellowDesc: '含有少量可能引起過敏或對特定膚質具刺激性的成分（如微量酒精或香料）。使用時請留意皮膚狀況。',
            red: '專業匹配 (Red)',
            redDesc: '此為醫美級或高功效成分，建議先諮詢專業醫師或確認膚況後再使用，並非目前皮膚不能使用。',
            footer: '所有分析結果僅供參考，如有皮膚不適請立即停止使用並諮詢專業醫師。',
            interactiveTitle: '互動體驗：標章預覽',
            interactiveDesc: '點選下列標籤，查看它們貼在產品包裝上的樣子：',
            greenMsg: '這是一款安全、低刺激性的化妝品，適合日常溫和保養。',
            yellowMsg: '這款產品含有特定活性成分，使用時請留意皮膚狀況。',
            redMsg: '這款屬於高效能/醫美級產品，建議確認膚況或諮詢專業建議後使用。',
            labelNote: '這些分級標籤會貼在化妝品包裝上，幫助您快速識別產品特性。'
        },
        'en': {
            title: 'Classification Labels',
            subtitle: 'Understanding our safety standards',
            green: 'Safe Match (Green)',
            greenDesc: 'Ingredients are gentle and free from your blacklist items. Perfectly suitable for your skin type.',
            yellow: 'Use with Caution (Yellow)',
            yellowDesc: 'Contains minor potential allergens or mild irritants. Monitor your skin during use.',
            red: 'Professional Match (Red)',
            redDesc: 'This formula contains high-potency or medical-grade ingredients. Consultation or careful patch testing is advised; it does not mean it cannot be used.',
            footer: 'Analysis results for reference only. Consult a doctor if irritation occurs.',
            interactiveTitle: 'Interactive Preview',
            interactiveDesc: 'Click labels below to see how they look on the product:',
            greenMsg: 'This is a safe, low-irritation cosmetic suitable for gentle daily care.',
            yellowMsg: 'This product contains active ingredients; monitor your skin during use.',
            redMsg: 'This is a high-efficacy/medical-grade product; use with professional guidance.',
            labelNote: 'These labels are placed on cosmetics to help you identify product traits quickly.'
        },
        'ja': {
            title: '分級標籤の紹介',
            subtitle: '安全分析基準について',
            green: '安全 (Green)',
            greenDesc: '成分は穏やかで、ブラックリスト項目も含まれていません。あなたの肌質に最適です。',
            yellow: '注意 (Yellow)',
            yellowDesc: '軽度の低刺激性または特定のアレルゲンが含まれている可能性があります。使用中は肌の状態を観察してください。',
            red: 'プロフェッショナル (Red)',
            redDesc: 'この成分は高濃度またはドクターズコスメ級です。使用できないわけではありませんが、専門家への相談や肌の状態に合わせた慎重な使用を推奨します。',
            footer: '分析結果は参考情報です。異常を感じた場合は医師にご相談ください。',
            interactiveTitle: 'インタラクティブ：ラベルプレビュー',
            interactiveDesc: '以下のラベルをクリックして、製品パッケージへの貼付イメージを確認：',
            greenMsg: 'これは安全で低刺激性の化粧品で、毎日の穏やかなケアに適しています。',
            yellowMsg: 'この製品には特定の有効成分が含まれています。使用中は肌の状態に注意してください。',
            redMsg: 'これは高機能・ドクターズコスメ級の製品です。肌の状態を確認し、専門のアドバイスに従って使用してください。',
            labelNote: 'これらの分類ラベルは化粧品のパッケージに貼られ、製品の特性を素早く識別するのに役立ちます。'
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
                <div className="bg-white/5 border border-green-500/20 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div className="bg-green-500/10 p-2 rounded-xl shrink-0">
                        <img src="/images/Green Label.png" alt="Green" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                        <h3 className="text-green-400 font-bold text-xl mb-2">{t.green}</h3>
                        <p className="text-white/70 leading-relaxed">{t.greenDesc}</p>
                    </div>
                </div>

                {/* Yellow */}
                <div className="bg-white/5 border border-yellow-500/20 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div className="bg-yellow-500/10 p-2 rounded-xl shrink-0">
                        <img src="/images/Yellow Label.png" alt="Yellow" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                        <h3 className="text-yellow-400 font-bold text-xl mb-2">{t.yellow}</h3>
                        <p className="text-white/70 leading-relaxed">{t.yellowDesc}</p>
                    </div>
                </div>

                {/* Red */}
                <div className="bg-white/5 border border-red-500/20 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors">
                    <div className="bg-red-500/10 p-2 rounded-xl shrink-0">
                        <img src="/images/Red Label.png" alt="Red" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                        <h3 className="text-red-400 font-bold text-xl mb-2">{t.red}</h3>
                        <p className="text-white/70 leading-relaxed">{t.redDesc}</p>
                    </div>
                </div>

                {/* Interactive Tool Section */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden">
                    <div className="flex items-center gap-3 mb-2">
                        <Info className="w-5 h-5 text-coral" />
                        <h3 className="text-xl font-bold text-white">{t.interactiveTitle}</h3>
                    </div>
                    <p className="text-white/60 text-sm">{t.interactiveDesc}</p>

                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-4">
                        {/* 3D Box Canvas Area */}
                        <div className="relative group flex-1 flex justify-center py-6 min-h-[300px]">
                            <div className="absolute inset-0 bg-coral/5 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                            <ProductBox3D 
                                size={window.innerWidth < 640 ? 'md' : 'lg'} 
                                labelType={selectedLabel} 
                            />
                        </div>

                        {/* Label Selection Buttons */}
                        <div className="flex flex-row lg:flex-col justify-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 px-2 lg:px-0 scrollbar-hide">
                            {(['green', 'yellow', 'red'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedLabel(type)}
                                    className={`
                                        flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300
                                        ${selectedLabel === type 
                                            ? (type === 'green' ? 'bg-green-500/20 border-green-500 text-green-400' :
                                               type === 'yellow' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400' :
                                               'bg-red-500/20 border-red-500 text-red-400')
                                            : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:border-white/20'
                                        }
                                    `}
                                >
                                    <img 
                                        src={`/images/${type === 'green' ? 'Green' : type === 'yellow' ? 'Yellow' : 'Red'} Label.png`} 
                                        alt={type}
                                        className="w-10 h-10 object-contain"
                                    />
                                    <span className="font-bold hidden sm:inline uppercase">{type}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Result Message */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedLabel}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`
                                p-5 rounded-2xl border text-center font-medium
                                ${selectedLabel === 'green' ? 'bg-green-500/10 border-green-500/20 text-green-300' :
                                  selectedLabel === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300' :
                                  'bg-red-500/10 border-red-500/20 text-red-300'
                                }
                            `}
                        >
                            {selectedLabel === 'green' ? t.greenMsg : 
                             selectedLabel === 'yellow' ? t.yellowMsg : 
                             t.redMsg}
                        </motion.div>
                    </AnimatePresence>

                    <p className="text-xs text-white/30 text-center italic">
                        {t.labelNote}
                    </p>
                </div>

                <p className="text-center text-white/40 text-sm italic pt-4">
                    {t.footer}
                </p>
            </div>
        </div>
    );
}
