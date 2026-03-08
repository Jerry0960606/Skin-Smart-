import { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { ChevronLeft, Camera, ScanBarcode, ScanText, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ScanPage() {
  const { language, setCurrentPage, setCurrentProduct, setScanType } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showTimeoutPrompt, setShowTimeoutPrompt] = useState(false);
  const [inputType, setInputType] = useState<'barcode' | 'ingredients'>('barcode');
  const [isOCRProcessing, setIsOCRProcessing] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stopCamera = async () => {
    if (scanTimeoutRef.current) {
      clearTimeout(scanTimeoutRef.current);
      scanTimeoutRef.current = null;
    }

    // Stop Html5Qrcode if running
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
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
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    // Only init standard camera for ingredients mode here
    if (showCamera && inputType === 'ingredients' && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
          console.error('Camera error:', err);
        });
    }

    return () => {
      stopCamera();
    };
  }, [showCamera, inputType]);

  const startScan = (mode: 'barcode' | 'ingredients') => {
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
            stopCamera();
            setShowCamera(false);
            setCurrentProduct(decodedText);
            setCurrentPage('analyzing');
          },
          (_errorMessage: string) => {
            // Intentionally suppressed parse errors
          }
        ).then(() => {
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

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

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

      const { data: { text } } = await worker.recognize(canvas.toDataURL('image/jpeg'));
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
    <div className="min-h-screen gradient-navy flex flex-col px-6 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center mb-6">
        <button
          onClick={handleBack}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {!showCamera ? (
          <>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              {t.scanTitle}
            </h1>

            <p className="text-white/60 text-center mb-10 max-w-md">
              {t.scanSubtitle}
            </p>

            {/* Character */}
            <div className="mb-10">
              <img
                src="/images/Scan Caracter.png"
                alt="Ready to scan"
                className="w-40 h-40 object-contain"
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
            <p className="text-white/40 text-sm text-center">
              <Camera className="w-4 h-4 inline mr-1" />
              {t.scanHint}
            </p>
          </>
        ) : (
          /* Camera view */
          <div className="w-full max-w-md">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black" id="reader">
              {/* Hidden canvas for OCR frame capture */}
              <canvas ref={canvasRef} className="hidden" />

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
              <div className="absolute inset-0 flex items-center justify-center bg-navy/80">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/50">{t.scanProcessing}</p>
                </div>
              </div>

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
    </div>
  );
}

