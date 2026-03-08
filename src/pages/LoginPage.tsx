import { useState, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
    const { language, setCurrentPage, setIsAuthenticated } = useAppStore();
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) return;

        setIsSubmitting(true);

        // Simulate API delay
        setTimeout(() => {
            setIsAuthenticated(true);
            setCurrentPage('cover'); // Return home after login
        }, 1000);
    };

    const getLoginText = () => {
        return {
            'zh-TW': {
                title: '登入帳號',
                subtitle: '登入以解鎖歷史紀錄同步功能',
                emailPlaceholder: '電子信箱',
                passwordPlaceholder: '密碼',
                loginButton: '登入',
                loggingIn: '登入中...'
            },
            'en': {
                title: 'Welcome Back',
                subtitle: 'Login to unlock history synchronization',
                emailPlaceholder: 'Email Address',
                passwordPlaceholder: 'Password',
                loginButton: 'Login',
                loggingIn: 'Logging in...'
            },
            'ja': {
                title: 'ログイン',
                subtitle: 'ログインして履歴の同期を解除する',
                emailPlaceholder: 'メールアドレス',
                passwordPlaceholder: 'パスワード',
                loginButton: 'ログイン',
                loggingIn: 'ログイン中...'
            }
        }[language];
    };

    const texts = getLoginText();

    return (
        <div className="min-h-screen gradient-navy flex flex-col relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center p-6">
                <button
                    onClick={() => setCurrentPage('cover')}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Main content */}
            <div className={`relative z-10 flex-1 flex flex-col items-center justify-center px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-full max-w-sm">
                    {/* Default Logo Placeholder */}
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-coral to-coral-dark rounded-2xl flex items-center justify-center shadow-lg shadow-coral/20">
                            <Lock className="w-10 h-10 text-navy" />
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-white mb-2">{texts?.title}</h1>
                        <p className="text-white/60">{texts?.subtitle}</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-4 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={texts?.emailPlaceholder}
                                    className="w-full bg-white/10 border-transparent focus:border-coral/50 text-white placeholder:text-white/40 py-6 pl-12 rounded-xl transition-all"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={texts?.passwordPlaceholder}
                                    className="w-full bg-white/10 border-transparent focus:border-coral/50 text-white placeholder:text-white/40 py-6 pl-12 rounded-xl transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting || !email || !password}
                            className="w-full bg-coral hover:bg-coral-dark text-navy font-bold py-6 rounded-2xl disabled:opacity-50 mt-6 shadow-lg shadow-coral/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isSubmitting ? texts?.loggingIn : texts?.loginButton}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
