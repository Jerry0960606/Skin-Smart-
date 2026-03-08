import { useState, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { ChevronLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ManualInputPage() {
    const { language, setCurrentPage, setCurrentProduct, scanType } = useAppStore();
    const t = translations[language];
    const [isVisible, setIsVisible] = useState(false);
    const [manualInput, setManualInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleManualSubmit = () => {
        if (manualInput.trim()) {
            setCurrentProduct(manualInput.trim());
            setCurrentPage('analyzing');
        }
    };

    const handleBack = () => {
        setCurrentPage('scan');
    };

    const getPlaceholder = () => {
        const placeholders = {
            'zh-TW': {
                barcode: '請輸入商品條碼（例如：4901234567890）',
                ingredients: '請輸入成分名稱，用逗號分隔',
            },
            'en': {
                barcode: 'Enter product barcode (e.g., 4901234567890)',
                ingredients: 'Enter ingredient names, separated by commas',
            },
            'ja': {
                barcode: '商品バーコードを入力（例：4901234567890）',
                ingredients: '成分名を入力、カンマで区切る',
            },
        };
        return placeholders[language][scanType];
    };

    const getManualTitle = () => {
        const titles = {
            'zh-TW': {
                barcode: '手動輸入條碼',
                ingredients: '手動輸入成分',
            },
            'en': {
                barcode: 'Manual Barcode Entry',
                ingredients: 'Manual Ingredient Entry',
            },
            'ja': {
                barcode: 'バーコードを手動入力',
                ingredients: '成分を手動入力',
            },
        };
        return titles[language][scanType];
    };

    return (
        <div className="min-h-screen gradient-navy flex flex-col px-6 py-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center mb-6 shrink-0">
                <button
                    onClick={handleBack}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Main content */}
            <div className={`relative z-10 flex-1 flex flex-col items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-full max-w-md">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white">{getManualTitle()}</h2>
                            <button
                                onClick={handleBack}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <Input
                                type="text"
                                value={manualInput}
                                onChange={(e) => setManualInput(e.target.value)}
                                placeholder={getPlaceholder()}
                                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/40 py-6 text-lg"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleManualSubmit();
                                    }
                                }}
                            />

                            <Button
                                onClick={handleManualSubmit}
                                disabled={!manualInput.trim()}
                                className="w-full bg-coral hover:bg-coral-dark text-navy font-bold py-6 rounded-xl disabled:opacity-50"
                            >
                                {t.next}
                            </Button>
                        </div>

                        {/* Example */}
                        <div className="mt-6 p-4 bg-white/5 rounded-xl">
                            <p className="text-white/40 text-sm mb-2">
                                {language === 'zh-TW' ? '範例：' : language === 'en' ? 'Example: ' : '例：'}
                            </p>
                            <p className="text-white/60 text-sm">
                                {scanType === 'barcode'
                                    ? (language === 'zh-TW' ? '4901234567890' : language === 'en' ? '4901234567890' : '4901234567890')
                                    : (language === 'zh-TW' ? '水, 甘油, 玻尿酸, 維生素C' : language === 'en' ? 'Water, Glycerin, Hyaluronic Acid, Vitamin C' : '水、グリセリン、ヒアルロン酸、ビタミンC')
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
