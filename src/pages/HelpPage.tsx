import { useState, useRef, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { ChevronLeft, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatMessage {
    id: string;
    sender: 'bot' | 'user';
    text: string;
    timestamp: Date;
}

export default function HelpPage() {
    const { language, setCurrentPage } = useAppStore();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    // Initial greeting
    useEffect(() => {
        const greetingMsg = {
            id: Date.now().toString(),
            sender: 'bot' as const,
            text: language === 'zh-TW' ? '你好！我是小幫手 Dr. Lipstick。有什麼我可以協助你的嗎？'
                : language === 'en' ? 'Hello! I am Dr. Lipstick, your assistant. How can I help you today?'
                    : 'こんにちは！アシスタントのDr.Lipstickです。何かお手伝いしましょうか？',
            timestamp: new Date()
        };
        setMessages([greetingMsg]);
    }, [language]);

    // Auto scroll to bottom
    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const quickReplies = [
        {
            id: 'q1',
            label: language === 'zh-TW' ? '如何使用相機掃描？' : language === 'en' ? 'How to use camera scan?' : 'カメラスキャンの使い方は？',
            response: language === 'zh-TW' ? '點擊主畫面的「開始分析」，完成測驗後選擇「掃描條碼」或「掃描成分」。將商品條碼或背後的成分表對準鏡頭，系統會自動在幾秒內為您分析安全性！'
                : language === 'en' ? 'Click "Start Analysis" on the home screen, finish the quiz, and select "Scan Barcode" or "Scan Ingredients". Point your camera at the barcode or ingredient list, and the system will automatically analyze its safety in seconds!'
                    : 'ホーム画面の「分析を開始」をクリックし、クイズを完了後、「バーコードをスキャン」または「成分をスキャン」を選択します。 カメラを商品のバーコードや成分表に向けると、システムが数秒で安全性を自動分析します！'
        },
        {
            id: 'q2',
            label: language === 'zh-TW' ? '我的膚質如何判斷？' : language === 'en' ? 'How is my skin type determined?' : '私の肌質はどのように判断されますか？',
            response: language === 'zh-TW' ? '我們會根據您在測驗階段回答的幾個問題（像是T字部位出油情況、洗臉後的感受等），由系統演算法自動歸納出最符合您的膚質特徵。'
                : language === 'en' ? 'Based on the questions you answered during the quiz phase (such as T-zone oiliness, post-wash feeling, etc.), our system algorithm automatically categorizes your skin type.'
                    : 'クイズで回答いただいたいくつかの質問（Tゾーンのテカリ具合、洗顔後の感覚など）に基づき、システムのアルゴリズムがあなたの肌質を自動的に分類します。'
        },
        {
            id: 'q3',
            label: language === 'zh-TW' ? '資料隱私安全嗎？' : language === 'en' ? 'Is my data private?' : 'データのプライバシーは安全ですか？',
            response: language === 'zh-TW' ? '非常安全！您的測驗紀錄與掃描歷程都只儲存在您本機瀏覽器設備中（Local Storage），我們並未將這些敏感資訊上傳到任何外部伺服器。'
                : language === 'en' ? 'Very secure! Your quiz records and scan history are stored locally on your device browser (Local Storage). We do not upload this sensitive information to any external servers.'
                    : '非常に安全です！クイズの記録やスキャン履歴はお客様のデバイスブラウザ（ローカルストレージ）にのみ保存され、外部サーバーにはアップロードされません。'
        }
    ];

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            sender: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            // Find hardcoded response if it matches quick replies
            const matchedReply = quickReplies.find(qr => qr.label === text);

            const botResponseText = matchedReply
                ? matchedReply.response
                : (language === 'zh-TW' ? '感謝您的提問，我目前還在學習中，稍後客服專員會為您解答！'
                    : language === 'en' ? 'Thank you for your question. I am still learning, a support agent will assist you shortly!'
                        : 'ご質問ありがとうございます。現在学習中ですので、後ほどサポート担当者が回答いたします！');

            const botMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                sender: 'bot',
                text: botResponseText,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/10 bg-navy/50 backdrop-blur-md">
                <button
                    onClick={() => setCurrentPage('cover')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <span className="text-white font-bold text-lg">
                    {language === 'zh-TW' ? '幫助' : language === 'en' ? 'Help' : 'ヘルプ'}
                </span>
                <div className="w-10"></div> {/* Spacer for centering */}
            </div>

            {/* Chat Area */}
            <div
                ref={scrollAreaRef}
                className="relative z-10 flex-1 overflow-y-auto p-6 space-y-6 flex flex-col custom-scrollbar"
            >
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    >
                        <div className={`flex max-w-[85%] gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                {msg.sender === 'bot' ? (
                                    <div className="w-10 h-10 rounded-full bg-white border border-white/20 flex items-center justify-center shadow-lg p-1 overflow-hidden">
                                        <img src="/images/Iconic Character.png" alt="Bot Avatar" className="w-full h-full object-contain" />
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-coral border border-coral/50 flex items-center justify-center shadow-lg">
                                        <User className="w-5 h-5 text-navy" />
                                    </div>
                                )}
                            </div>

                            {/* Message Bubble */}
                            <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                <div
                                    className={`px-5 py-3 rounded-2xl shadow-md ${msg.sender === 'user'
                                        ? 'bg-coral text-navy rounded-tr-sm'
                                        : 'bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-tl-sm'
                                        }`}
                                >
                                    <p className="text-sm md:text-base leading-relaxed break-words">{msg.text}</p>
                                </div>
                                <span className="text-white/40 text-xs mt-1 px-1">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>

                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                        <div className="flex max-w-[85%] gap-3 flex-row">
                            <div className="w-10 h-10 rounded-full bg-white border border-white/20 flex items-center justify-center p-1 overflow-hidden">
                                <img src="/images/Iconic Character.png" alt="Bot Avatar" className="w-full h-full object-contain" />
                            </div>
                            <div className="px-5 py-4 rounded-2xl rounded-tl-sm bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-1">
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="relative z-10 bg-navy/80 backdrop-blur-lg border-t border-white/10 p-4 pb-8 md:pb-6">

                {/* Quick Replies */}
                <div className="overflow-x-auto flex gap-2 pb-4 mb-2 custom-scrollbar no-scrollbar">
                    {quickReplies.map((qr) => (
                        <button
                            key={qr.id}
                            onClick={() => handleSend(qr.label)}
                            className="px-4 py-2 whitespace-nowrap rounded-full bg-white/5 border border-coral/30 text-white/80 text-sm hover:bg-coral hover:text-navy transition-colors shrink-0"
                        >
                            {qr.label}
                        </button>
                    ))}
                </div>

                <div className="flex gap-3">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSend(inputValue);
                        }}
                        placeholder={language === 'zh-TW' ? '輸入訊息...' : language === 'en' ? 'Type a message...' : 'メッセージを入力...'}
                        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 rounded-xl focus:ring-coral focus:border-coral"
                    />
                    <Button
                        onClick={() => handleSend(inputValue)}
                        disabled={!inputValue.trim() || isTyping}
                        className="h-12 w-12 rounded-xl bg-coral hover:bg-coral-dark text-navy flex items-center justify-center shrink-0 disabled:opacity-50"
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
