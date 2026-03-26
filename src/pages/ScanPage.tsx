import { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { ChevronLeft, Camera, ScanBarcode, ScanText, Keyboard, HelpCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { productsDatabase } from '@/data/products';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

export default function ScanPage() {
  const { language, setCurrentPage, setCurrentProduct, setScanType } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showTimeoutPrompt, setShowTimeoutPrompt] = useState(false);
  const [inputType, setInputType] = useState<'barcode' | 'ingredients'>('barcode');
  const [isOCRProcessing, setIsOCRProcessing] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [showBarcodeNotFound, setShowBarcodeNotFound] = useState(false);
  const [scannedBarcode, setScannedBarcode] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const timer = setTimeout(() => {
      if (isMounted.current) setIsVisible(true);
    }, 100);

    // Check if instructions should be shown automatically
    const hasSeenScannerHelp = localStorage.getItem('sssf_hide_scan_help');
    if (!hasSeenScannerHelp) {
      setTimeout(() => {
        if (isMounted.current) setShowInstructions(true);
      }, 800);
    }

    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, []);

  const dismissInstructions = () => {
    setShowInstructions(false);
    localStorage.setItem('sssf_hide_scan_help', 'true');
  };

  const stopCamera = async () => {
    if (scanTimeoutRef.current) {
      clearTimeout(scanTimeoutRef.current);
      scanTimeoutRef.current = null;
    }

    // Stop Html5Qrcode if running
    if (scannerRef.current) {
      try {
        if (scannerRef.current.isScanning) {
          await scannerRef.current.stop();
        }
        scannerRef.current.clear();
      } catch (err) {
        console.error('Error stopping scanner', err);
      } finally {
        scannerRef.current = null;
      }
    }
    // Stop standard video track if running (for ingredients mode)
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => {
        track.stop();
        stream.removeTrack(track);
      });
      videoRef.current.srcObject = null;
    }
    setIsCameraReady(false);
    setCameraError(null);
  };

  useEffect(() => {
    // Only init standard camera for ingredients mode here
    if (showCamera && inputType === 'ingredients' && videoRef.current) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: 'environment',
              width: { ideal: 1280 },
              height: { ideal: 720 }
            }
          });
          if (videoRef.current && isMounted.current) {
            videoRef.current.srcObject = stream;
            // Add listener to actual video playing
            videoRef.current.onloadedmetadata = () => {
              if (isMounted.current) setIsCameraReady(true);
            };
          }
        } catch (err: any) {
          console.error('Camera error:', err);
          if (isMounted.current) {
            let errorMsg = language === 'zh-TW' ? '無法啟動相機，請檢查權限設定' : 'Camera failed to start, please check settings';
            if (err.name === 'NotAllowedError') {
              errorMsg = language === 'zh-TW' ? '相機權限已被拒絕，請在瀏覽器設定中開啟' : 'Camera permission denied, please enable in settings';
            } else if (err.name === 'NotFoundError') {
              errorMsg = language === 'zh-TW' ? '找不到相機裝置' : 'Camera device not found';
            }
            setCameraError(errorMsg);
            setIsCameraReady(false);
          }
        }
      };
      startCamera();
    }

    return () => {
      stopCamera();
    };
  }, [showCamera, inputType]);

  const startScan = async (mode: 'barcode' | 'ingredients') => {
    // Stop any existing camera first
    await stopCamera();

    setInputType(mode);
    setShowCamera(true);
    setShowTimeoutPrompt(false);

    if (mode === 'barcode') {
      // Wait for the DOM element to render
      setTimeout(() => {
        const html5QrCode = new Html5Qrcode('reader');
        scannerRef.current = html5QrCode;

        html5QrCode.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText: string) => {
            // Successfully scanned
            const state = useAppStore.getState();
            const product = productsDatabase.find(p => p.barcode === decodedText) || 
                          state.contributedProducts.find(p => p.barcode === decodedText);
            stopCamera();
            setShowCamera(false);
            
            if (product) {
              setCurrentProduct(decodedText);
              setCurrentPage('analyzing');
            } else {
              setScannedBarcode(decodedText);
              setShowBarcodeNotFound(true);
            }
          },
          (_errorMessage: string) => {
            // Intentionally suppressed parse errors
          }
        ).then(() => {
          if (isMounted.current) setIsCameraReady(true);
          // Set timeout for 5 seconds empty scanning
          scanTimeoutRef.current = setTimeout(() => {
            setShowTimeoutPrompt(true);
          }, 5000);
        }).catch((err: any) => console.error("Scanner failed to start", err));
      }, 100);
    }
  };

  const captureIngredients = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsOCRProcessing(true);
    setOcrProgress(0);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    // Set canvas dimensions to a focused center area (70% of Original)
    const cropWidth = Math.floor(video.videoWidth * 0.8);
    const cropHeight = Math.floor(video.videoHeight * 0.8);
    const startX = Math.floor((video.videoWidth - cropWidth) / 2);
    const startY = Math.floor((video.videoHeight - cropHeight) / 1.5); // Slightly higher than center

    canvas.width = cropWidth;
    canvas.height = cropHeight;

    // Apply filters for better OCR visibility
    // Grayscale + Contrast + Sharpen effect via brightness/contrast
    context.filter = 'grayscale(100%) contrast(1.5) brightness(1.1)';

    // Draw cropped video frame to canvas
    context.drawImage(
      video,
      startX, startY, cropWidth, cropHeight, // Source
      0, 0, cropWidth, cropHeight           // Destination
    );

    // Stop camera as soon as frame is captured
    await stopCamera();

    try {
      const { createWorker } = await import('tesseract.js');
      const worker = await createWorker('eng+chi_tra', 1, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setOcrProgress(Math.round(m.progress * 100));
          }
        }
      });

      // Set parameters for better recognition
      await worker.setParameters({
        tessedit_pageseg_mode: '3' as any, // PSM.AUTO
        preserve_interword_spaces: '1',
      });

      const { data: { text } } = await worker.recognize(canvas.toDataURL('image/jpeg', 0.95));
      await worker.terminate();

      // Clean up text: replace newlines with commas to simulate a list
      const cleanedText = text
        .replace(/\n/g, ', ')
        .replace(/\s+/g, ' ')
        .trim();

      setShowCamera(false);
      setIsOCRProcessing(false);
      setCurrentProduct(cleanedText);
      setCurrentPage('analyzing');
    } catch (err) {
      console.error('OCR Error:', err);
      setIsOCRProcessing(false);
      setShowCamera(false);
      // Fallback or error state
    }
  };

  const handleBack = () => {
    if (showCamera) {
      stopCamera();
      setShowCamera(false);
    } else {
      setCurrentPage('quiz');
    }
  };



  // Get scan options title
  const getScanOptionTitle = (type: 'barcode' | 'ingredients') => {
    const titles = {
      'zh-TW': {
        barcode: '掃描條碼',
        ingredients: '掃描成分',
      },
      'en': {
        barcode: 'Scan Barcode',
        ingredients: 'Scan Ingredients',
      },
      'ja': {
        barcode: 'バーコードをスキャン',
        ingredients: '成分をスキャン',
      },
    };
    return titles[language][type];
  };

  // Get manual entry button text
  const getManualButtonText = (type: 'barcode' | 'ingredients') => {
    const texts = {
      'zh-TW': {
        barcode: '手動輸入條碼',
        ingredients: '手動輸入成分',
      },
      'en': {
        barcode: 'Enter Barcode Manually',
        ingredients: 'Enter Ingredients Manually',
      },
      'ja': {
        barcode: 'バーコードを手動入力',
        ingredients: '成分を手動入力',
      },
    };
    return texts[language][type];
  };

  return (
    <div className="min-h-screen gradient-navy flex flex-col px-4 sm:px-6 py-6 sm:py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center mb-6">
        <button
          onClick={handleBack}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex-1" />
        {!showCamera && (
          <button
            onClick={() => setShowInstructions(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 hover:bg-coral/20 text-coral transition-all border border-coral/20"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{language === 'zh-TW' ? '如何掃描' : language === 'en' ? 'How to scan' : 'スキャン方法'}</span>
          </button>
        )}
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-start sm:justify-center overflow-y-auto scrollbar-hide transition-all duration-700 min-h-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {!showCamera ? (
          <div className="w-full flex flex-col items-center py-4">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              {t.scanTitle}
            </h1>

            <p className="text-white/60 text-center mb-10 max-w-md">
              {t.scanSubtitle}
            </p>

            {/* Character */}
            <div className="mb-6 sm:mb-10 shrink-0">
              <img
                src="/images/Scan Caracter.png"
                alt="Ready to scan"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto"
              />
            </div>

            {/* Scan options */}
            <Tabs defaultValue="barcode" className="w-full max-w-md mb-6">
              <TabsList className="grid w-full grid-cols-2 bg-white/10">
                <TabsTrigger value="barcode" className="text-white data-[state=active]:bg-coral data-[state=active]:text-navy">
                  {getScanOptionTitle('barcode')}
                </TabsTrigger>
                <TabsTrigger value="ingredients" className="text-white data-[state=active]:bg-coral data-[state=active]:text-navy">
                  {getScanOptionTitle('ingredients')}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="barcode" className="mt-4">
                <div className="space-y-3">
                  <button
                    onClick={() => startScan('barcode')}
                    className="w-full flex items-center justify-center gap-3 p-6 rounded-2xl border-2 border-white/20 bg-white/5 hover:border-coral hover:bg-coral/10 transition-all duration-300"
                  >
                    <ScanBarcode className="w-8 h-8 text-coral" />
                    <span className="text-white font-semibold text-lg">{getScanOptionTitle('barcode')}</span>
                  </button>
                  <button
                    onClick={() => {
                      setScanType('barcode');
                      setCurrentPage('manual-input');
                    }}
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border-2 border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <Keyboard className="w-5 h-5 text-white/60" />
                    <span className="text-white/60 font-medium">{getManualButtonText('barcode')}</span>
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="ingredients" className="mt-4">
                <div className="space-y-3">
                  <button
                    onClick={() => startScan('ingredients')}
                    className="w-full flex items-center justify-center gap-3 p-6 rounded-2xl border-2 border-white/20 bg-white/5 hover:border-coral hover:bg-coral/10 transition-all duration-300"
                  >
                    <ScanText className="w-8 h-8 text-coral" />
                    <span className="text-white font-semibold text-lg">{getScanOptionTitle('ingredients')}</span>
                  </button>
                  <button
                    onClick={() => {
                      setScanType('ingredients');
                      setCurrentPage('manual-input');
                    }}
                    className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl border-2 border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <Keyboard className="w-5 h-5 text-white/60" />
                    <span className="text-white/60 font-medium">{getManualButtonText('ingredients')}</span>
                  </button>
                </div>
              </TabsContent>
            </Tabs>

            {/* Hint */}
            <div className="flex items-center gap-2 text-white/40 text-sm text-center mb-4 shrink-0 px-6 py-2 bg-white/5 rounded-full border border-white/5">
              <Camera className="w-4 h-4 text-coral" />
              <span>{t.scanHint}</span>
            </div>
          </div>
        ) : (
          /* Camera view */
          <div key={inputType} className="w-full max-w-md flex flex-col">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black shadow-2xl">
              {/* Hidden canvas for OCR frame capture */}
              <canvas ref={canvasRef} className="hidden" />

              {/* Barcode Scanner Container */}
              {inputType === 'barcode' && (
                <div id="reader" className="absolute inset-0 w-full h-full" />
              )}

              {/* Video feed (only used for ingredients OCR mode) */}
              {inputType === 'ingredients' && (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* OCR Processing Overlay */}
              {isOCRProcessing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/90 backdrop-blur-md z-30">
                  <div className="relative w-24 h-24 mb-6">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50" cy="50" r="45"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50" cy="50" r="45"
                        fill="none"
                        stroke="#e8927c"
                        strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 45}
                        strokeDashoffset={2 * Math.PI * 45 * (1 - ocrProgress / 100)}
                        strokeLinecap="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{ocrProgress}%</span>
                    </div>
                  </div>
                  <p className="text-white font-medium text-lg animate-pulse">
                    {language === 'zh-TW' ? '正在辨識成分...' : language === 'en' ? 'Recognizing ingredients...' : '成分を認識しています...'}
                  </p>
                  <p className="text-white/50 text-sm mt-2 font-mono">
                    Tesseract OCR Active
                  </p>
                </div>
              )}

              {/* Fallback mock camera view */}
              {!isCameraReady && !cameraError && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy/80 z-10 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-coral/30 border-t-coral rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-white/50">{t.scanProcessing}</p>
                  </div>
                </div>
              )}

              {/* Camera Error Display */}
              {cameraError && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy/90 z-20 p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Camera className="w-8 h-8 text-rose-500" />
                    </div>
                    <p className="text-white font-medium">{cameraError}</p>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white"
                      onClick={() => setShowCamera(false)}
                    >
                      {t.back}
                    </Button>
                  </div>
                </div>
              )}

              {/* Scan overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Corner markers */}
                <div className="absolute top-8 left-8 w-12 h-12 border-l-4 border-t-4 border-coral rounded-tl-lg" />
                <div className="absolute top-8 right-8 w-12 h-12 border-r-4 border-t-4 border-coral rounded-tr-lg" />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-l-4 border-b-4 border-coral rounded-bl-lg" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-r-4 border-b-4 border-coral rounded-br-lg" />

                {/* Scan line animation */}
                <div className="absolute left-0 right-0 h-0.5 bg-coral shadow-lg animate-scan"
                  style={{ boxShadow: '0 0 10px 2px rgba(232, 146, 124, 0.8)' }}
                />

                {/* In-camera Help Button */}
                <div className="absolute top-4 right-4 pointer-events-auto">
                   <button
                     onClick={() => setShowInstructions(true)}
                     className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/80 hover:bg-black/60 transition-all"
                   >
                     <HelpCircle className="w-5 h-5" />
                   </button>
                </div>

                {/* Instruction Overlay based on mode */}
                <div className="absolute bottom-6 left-0 right-0 px-6 text-center">
                   <p className="inline-block px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-sm font-medium border border-white/10">
                     {inputType === 'barcode' 
                       ? (language === 'zh-TW' ? '將條碼放入框內' : 'Fit barcode in the frame')
                       : (language === 'zh-TW' ? '對準成分表並拍照' : 'Align ingredients & capture')
                     }
                   </p>
                </div>
              </div>

              {/* Timeout Prompt Overlay */}
              {showTimeoutPrompt && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-20">
                  <div className="bg-navy border border-white/20 p-6 rounded-2xl m-6 text-center shadow-2xl relative animate-fade-in z-30 pointer-events-auto">
                    <p className="text-white font-medium mb-6 text-lg leading-relaxed whitespace-pre-line">
                      {language === 'zh-TW' ? '沒有掃描到東西嗎？\n要改用手動輸入試試看？' : language === 'en' ? "Can't scan anything?\nTry manual entry instead." : 'スキャンできませんか？\n手動入力を試しますか？'}
                    </p>
                    <div className="flex flex-col gap-3">
                      <Button
                        className="w-full bg-coral hover:bg-coral-dark text-navy font-bold py-6 rounded-xl"
                        onClick={async () => {
                          setShowTimeoutPrompt(false);
                          await stopCamera();
                          setShowCamera(false);
                          setScanType('barcode');
                          setCurrentPage('manual-input');
                        }}
                      >
                        {getManualButtonText('barcode')}
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full text-white/60 hover:text-white"
                        onClick={() => setShowTimeoutPrompt(false)}
                      >
                        {language === 'zh-TW' ? '繼續掃描' : language === 'en' ? 'Keep scanning' : 'スキャンを続ける'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Scanning text & manual capture */}
            {inputType === 'barcode' ? (
              <p className="text-center text-white mt-6 text-lg animate-pulse">
                {t.scanProcessing}
              </p>
            ) : (
              <div className="mt-6 flex flex-col items-center">
                <button
                  onClick={captureIngredients}
                  className="w-16 h-16 rounded-full bg-white/20 border-4 border-white flex items-center justify-center hover:bg-white/40 hover:scale-105 active:scale-95 transition-all outline-none focus:outline-none"
                  aria-label="Take photo"
                >
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </button>
                <p className="text-center text-white/50 text-sm mt-3">
                  {language === 'zh-TW' ? '按下拍照以掃描成分' : language === 'en' ? 'Tap to capture ingredients' : '成分をスキャンするために写真を撮る'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="relative z-10 text-white/40 text-xs text-center mt-6">
        {t.disclaimer}
      </div>

      {/* Barcode Not Found Dialog */}
      <Dialog open={showBarcodeNotFound} onOpenChange={setShowBarcodeNotFound}>
        <DialogContent className="bg-navy border-white/20 text-white">
          <DialogHeader>
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <ScanBarcode className="w-8 h-8 text-amber-500" />
            </div>
            <DialogTitle className="text-center text-xl">{t.barcodeNotFound}</DialogTitle>
            <DialogDescription className="text-white/60 text-center">
              {t.barcodeNotFoundDesc}
              <div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/10 font-mono text-sm text-coral">
                {scannedBarcode}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button
              variant="outline"
              onClick={() => setShowBarcodeNotFound(false)}
              className="border-white/20 text-white hover:bg-white/10"
            >
              {t.cancel}
            </Button>
            <Button
              onClick={() => {
                setShowBarcodeNotFound(false);
                setScanType('barcode');
                setCurrentPage('manual-input');
                // Pass the scanned barcode via store or URL (Zustand store is better)
                setCurrentProduct(scannedBarcode); 
              }}
              className="bg-coral hover:bg-coral-dark text-navy font-bold"
            >
              {t.addToDatabase}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Scan Instructions Dialog */}
      <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
        <DialogContent className="bg-navy border-white/20 text-white max-w-sm sm:max-w-md p-0 overflow-hidden">
          <div className="relative h-32 bg-coral flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
             <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
               <Info className="w-10 h-10 text-white" />
             </div>
             {/* Decorative circles */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          </div>

          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-center text-2xl font-bold">
                {t.scanHowToTitle}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center border border-coral/20 group-hover:bg-coral/20 transition-colors">
                  <ScanBarcode className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1 text-lg">{language === 'zh-TW' ? '1. 條碼掃描' : language === 'en' ? '1. Barcode Scan' : '1. バーコード'}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t.scanHowToBarcode.split('\n')[1] || t.scanHowToBarcode}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <ScanText className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1 text-lg">{language === 'zh-TW' ? '2. 成分辨識' : language === 'en' ? '2. Ingredient Scan' : '2. 成分辨識'}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t.scanHowToIngredients.split('\n')[1] || t.scanHowToIngredients}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                  <Info className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1 text-lg">{language === 'zh-TW' ? '為何要掃描？' : language === 'en' ? 'Why Scan?' : 'スキャンの理由'}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t.scanHowToPurpose.split('\n')[1] || t.scanHowToPurpose}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={dismissInstructions}
                className="w-full bg-coral hover:bg-coral-dark text-navy font-bold py-7 text-lg rounded-2xl shadow-xl shadow-coral/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.gotIt}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

