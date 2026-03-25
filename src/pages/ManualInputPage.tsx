import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { ChevronLeft, X, Camera, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

export default function ManualInputPage() {
    const { 
        language, setCurrentPage, currentProduct, setCurrentProduct, 
        scanType, setManualProductName, setManualProductImage,
        addContributedProduct, addToMyCosmetics, skinType
    } = useAppStore();
    const t = translations[language];
    const [isVisible, setIsVisible] = useState(false);
    const [manualInput, setManualInput] = useState('');
    const [ingredientsInput, setIngredientsInput] = useState('');
    const [productName, setProductName] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [showContributionDialog, setShowContributionDialog] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        
        // Pre-fill barcode if coming from scan
        if (scanType === 'barcode' && currentProduct && /^\d+$/.test(currentProduct)) {
            setManualInput(currentProduct);
        }
        
        return () => clearTimeout(timer);
    }, [scanType, currentProduct]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setImagePreview(base64);
                setManualProductImage(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleManualSubmit = () => {
        if (manualInput.trim()) {
            if (scanType === 'barcode') {
                if (!ingredientsInput.trim()) {
                    // Ingredients are required for barcode contribution
                    return;
                }
                setShowContributionDialog(true);
            } else {
                setManualProductName(productName.trim() || null);
                setCurrentProduct(manualInput.trim());
                setCurrentPage('analyzing');
            }
        }
    };

    const confirmContribution = (analyze: boolean) => {
        setShowContributionDialog(false);
        const name = productName.trim() || (language === 'zh-TW' ? '新產品' : 'New Product');
        
        const productData = {
            barcode: manualInput.trim(),
            name: name,
            ingredients: ingredientsInput.trim().split(',').map(i => i.trim()).filter(i => i.length > 0),
            imageUrl: imagePreview || undefined
        };
        
        // Add to simulated shared database
        addContributedProduct(productData);
        
        if (analyze) {
            setManualProductName(name);
            setCurrentProduct(ingredientsInput.trim());
            setCurrentPage('analyzing');
        } else {
            // Add to personal library
            addToMyCosmetics({
                productName: name,
                ingredients: productData.ingredients,
                imageUrl: productData.imageUrl,
                result: null,
                safetyScore: 0,
                matchScore: 0,
                skinType: skinType
            });
            
            toast.success(t.thankYouContribution, {
                duration: 4000
            });
            setCurrentPage('cosmetics');
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
            <div className={`relative z-10 flex-1 flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

                        <div className="space-y-6">
                            {/* Image Upload */}
                            <div className="flex flex-col items-center gap-4">
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="w-32 h-32 rounded-3xl bg-white/5 border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:border-coral/50 transition-all overflow-hidden relative group"
                                >
                                    {imagePreview ? (
                                        <>
                                            <img src={imagePreview} alt="Product" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                <Camera className="w-8 h-8 text-white" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <ImageIcon className="w-8 h-8 text-white/30 mb-2" />
                                            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                                                {language === 'zh-TW' ? '新增圖片' : 'Add Image'}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 ml-1">
                                        {language === 'zh-TW' ? '產品名稱' : 'Product Name'}
                                    </label>
                                    <Input
                                        type="text"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        placeholder={language === 'zh-TW' ? '例如：我的晚霜' : 'e.g., My Night Cream'}
                                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/40 py-6 text-lg"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60 ml-1">
                                        {scanType === 'barcode' ? (language === 'zh-TW' ? '條碼編號' : 'Barcode') : (language === 'zh-TW' ? '成分列表' : 'Ingredients')}
                                    </label>
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
                                </div>

                                {scanType === 'barcode' && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60 ml-1">
                                            {language === 'zh-TW' ? '成分列表（必填，請以逗號分隔）' : 'Ingredients (Required, comma separated)'}
                                        </label>
                                        <Input
                                            type="text"
                                            value={ingredientsInput}
                                            onChange={(e) => setIngredientsInput(e.target.value)}
                                            placeholder={getPlaceholder()}
                                            className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/40 py-6 text-lg"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleManualSubmit();
                                                }
                                            }}
                                        />
                                    </div>
                                )}

                                <Button
                                    onClick={handleManualSubmit}
                                    disabled={!manualInput.trim() || (scanType === 'barcode' && !ingredientsInput.trim())}
                                    className="w-full bg-coral hover:bg-coral-dark text-navy font-bold py-6 rounded-xl disabled:opacity-50"
                                >
                                    {t.next}
                                </Button>
                            </div>
                        </div>

                        {/* Example */}
                        <div className="mt-8 p-4 bg-white/5 rounded-xl">
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

            {/* Contribution Dialog */}
            <Dialog open={showContributionDialog} onOpenChange={setShowContributionDialog}>
              <DialogContent className="bg-navy border-white/20 text-white">
                <DialogHeader>
                  <DialogTitle>{t.addToDatabase}</DialogTitle>
                  <DialogDescription className="text-white/60">
                    {t.analyzeNow}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    onClick={() => confirmContribution(false)}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    {language === 'zh-TW' ? '僅保存' : 'Only Save'}
                  </Button>
                  <Button
                    onClick={() => confirmContribution(true)}
                    className="bg-coral hover:bg-coral-dark text-navy font-bold"
                  >
                    {language === 'zh-TW' ? '現在分析' : 'Analyze Now'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
        </div>
    );
}

