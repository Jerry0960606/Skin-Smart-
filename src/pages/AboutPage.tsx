import { useAppStore } from '@/store/appStore';
import { ChevronLeft, ShieldCheck, Zap, Lock } from 'lucide-react';

export default function AboutPage() {
    const { language, setCurrentPage } = useAppStore();

    return (
        <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden custom-scrollbar overflow-y-auto pb-10">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-48 h-48 bg-coral/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/10 bg-navy/50 backdrop-blur-md sticky top-0">
                <button
                    onClick={() => setCurrentPage('cover')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-white font-bold text-lg">
                    {language === 'zh-TW' ? '關於我們' : language === 'en' ? 'About Us' : '私たちについて'}
                </span>
                <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            <div className="relative z-10 px-6 pt-8 max-w-2xl mx-auto w-full space-y-10">

                {/* Logo and Mission */}
                <div className="flex flex-col items-center text-center animate-fade-in">
                    <div className="w-32 h-32 mb-6 drop-shadow-2xl bg-white/5 rounded-full p-4 border border-white/10 flex items-center justify-center">
                        <img src="/images/Iconic Character.png" alt="Smart Buy Safe Skin" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Smart Buy Safe Skin</h1>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                        {language === 'zh-TW'
                            ? '「致力於打破複雜的化學成分迷思，讓每個人都能清清楚楚看懂擦在臉上的每一滴保養品。」'
                            : language === 'en'
                                ? '"Dedicated to breaking the myths of complex chemical ingredients, so everyone can clearly understand every drop of skincare they use."'
                                : '「複雑な化学成分の神話を打ち破り、顔に塗るすべてのスキンケアの一滴一滴を誰もがはっきりと理解できるようにすることに専念しています。」'}
                    </p>
                </div>

                {/* Features */}
                <div className="grid gap-4 mt-8">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4">
                        <div className="bg-coral/20 p-3 rounded-xl shrink-0">
                            <Zap className="w-6 h-6 text-coral" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">
                                {language === 'zh-TW' ? '一秒拍照測試' : language === 'en' ? '1-Second Photo Scan' : '1秒写真スキャン'}
                            </h3>
                            <p className="text-white/60 text-sm">
                                {language === 'zh-TW' ? '無需繁瑣輸入，只要拍下成分表或是條碼，系統瞬間解析。' : language === 'en' ? 'No tedious input needed, just snap the ingredient list or barcode for instant analysis.' : '面倒な入力は不要、成分表やバーコードを撮るだけで瞬時に解析。'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4">
                        <div className="bg-coral/20 p-3 rounded-xl shrink-0">
                            <Lock className="w-6 h-6 text-coral" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">
                                {language === 'zh-TW' ? '隱私絕對安全' : language === 'en' ? 'Absolute Privacy' : '絶対的なプライバシー'}
                            </h3>
                            <p className="text-white/60 text-sm">
                                {language === 'zh-TW' ? '您的膚質資訊與掃描結果只存在於您的設備，絕不上傳雲端。' : language === 'en' ? 'Your skin info and scan results stay strictly on your device, never uploaded to the cloud.' : 'お肌の情報とスキャン結果はデバイス内にのみ保存され、クラウドにはアップロードされません。'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-4">
                        <div className="bg-coral/20 p-3 rounded-xl shrink-0">
                            <ShieldCheck className="w-6 h-6 text-coral" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">
                                {language === 'zh-TW' ? '量身定製分析' : language === 'en' ? 'Tailored Analysis' : 'オーダーメイド分析'}
                            </h3>
                            <p className="text-white/60 text-sm">
                                {language === 'zh-TW' ? '結合您的膚況測驗，為您篩選出可能致敏或不合適的保養品警示。' : language === 'en' ? 'Combined with your skin quiz, we highlight potential allergens or unsuitable products for you.' : '肌質クイズと組み合わせて、アレルギーの原因となる可能性のあるものや、あなたに合わない製品をハイライトします。'}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Disclaimer & Version */}
                <div className="text-center mt-12 border-t border-white/10 pt-8 pb-10">
                    <p className="text-white/30 text-xs leading-relaxed max-w-sm mx-auto mb-4">
                        {language === 'zh-TW' ? '免責聲明：本應用程式之分析結果建立於公開成份資料庫及演算法，僅供參考，不具醫療診斷效力。若有嚴重肌膚問題請務必尋求專業皮膚科醫師協助。'
                            : language === 'en' ? 'Disclaimer: The analysis results of this app are based on public ingredient databases and algorithms for reference only, and do not constitute medical advice. Please seek help from a professional dermatologist for serious skin issues.'
                                : '免責事項：本アプリの分析結果は公開成分データベースとアルゴリズムに基づく参考情報であり、医療診断の効力はありません。深刻な肌トラブルがある場合は必ず専門の皮膚科医にご相談ください。'}
                    </p>
                    <span className="text-white/40 text-xs font-mono">
                        Smart Buy Safe Skin v1.0.0
                    </span>
                </div>

            </div>
        </div>
    );
}
