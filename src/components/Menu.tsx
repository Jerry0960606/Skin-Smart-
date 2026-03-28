import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { X, Home, History, Settings, HelpCircle, Info, Globe, ChevronRight, LogIn, LogOut, BookOpen, Package, User } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Menu() {
  const {
    language,
    setLanguage,
    isMenuOpen,
    setMenuOpen,
    setCurrentPage,
    isAuthenticated,
    setIsAuthenticated
  } = useAppStore();
  const t = translations[language];

  const menuItems: Array<{ icon: any, label: string, page: any }> = [
    { icon: Home, label: t.home, page: 'cover' },
    { icon: Package, label: t.myCosmetics, page: 'cosmetics' },
    { icon: History, label: t.historyItem, page: 'history' },
    { icon: BookOpen, label: t.wikiTitle, page: 'wiki' },
    { icon: Info, label: t.labelInfo, page: 'label-info' },
    { icon: Settings, label: t.settings, page: 'settings' },
    { icon: HelpCircle, label: t.help, page: 'help' },
    { icon: User, label: t.about, page: 'about' },
  ];

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
      <SheetContent
        side="right"
        className="w-[300px] bg-navy border-l border-white/10 p-0 flex flex-col h-full"
      >
        <SheetHeader className="p-6 border-b border-white/10 shrink-0">
          <SheetTitle className="text-white flex items-center justify-between">
            <span>{t.menu}</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </SheetTitle>
        </SheetHeader>

        {/* Scrollable area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
          {/* Language selector */}
          <div className="mb-8">
            <label className="text-white/60 text-sm mb-2 block flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {t.language}
            </label>
            <Select value={language} onValueChange={(val) => setLanguage(val as any)}>
              <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-navy-light border-white/20">
                <SelectItem value="zh-TW" className="text-white hover:bg-white/10">
                  {t.zhTW}
                </SelectItem>
                <SelectItem value="en" className="text-white hover:bg-white/10">
                  {t.en}
                </SelectItem>
                <SelectItem value="ja" className="text-white hover:bg-white/10">
                  {t.ja}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Menu items */}
          <nav className="space-y-2 mb-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handlePageChange(item.page)}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-coral" />
                  <span className="text-white font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </button>
            ))}
          </nav>

          {/* Auth Button */}
          <div className="pt-4 border-t border-white/10">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setMenuOpen(false);
                  setCurrentPage('cover');
                }}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5 text-coral" />
                  <span className="text-white font-medium">
                    {language === 'zh-TW' ? '登出' : language === 'en' ? 'Logout' : 'ログアウト'}
                  </span>
                </div>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setCurrentPage('login');
                }}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-coral/20 border border-coral/30 hover:bg-coral/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <LogIn className="w-5 h-5 text-coral" />
                  <span className="text-white font-medium">
                    {language === 'zh-TW' ? '登入' : language === 'en' ? 'Login' : 'ログイン'}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-coral group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>

        {/* Footer - standard flex item */}
        <div className="p-6 border-t border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/images/Iconic Character.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <p className="text-white font-bold text-sm">Smart Buy Safe Skin</p>
              <p className="text-white/50 text-xs">v1.0.0</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
