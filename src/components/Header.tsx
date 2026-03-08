import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Menu, Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  title?: string;
}

export default function Header({ showBack, onBack, title }: HeaderProps) {
  const { language, setLanguage, toggleMenu, currentPage } = useAppStore();
  const t = translations[language];

  // Don't show header on cover page
  if (currentPage === 'cover') {
    return (
      <div className="fixed top-0 right-0 z-50 p-4 flex items-center gap-3">
        {/* Language selector */}
        <Select value={language} onValueChange={(val) => setLanguage(val as any)}>
          <SelectTrigger className="w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white text-sm">
            <Globe className="w-4 h-4 mr-2" />
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

        {/* Menu button */}
        <button
          onClick={toggleMenu}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
      {/* Left side - Back button or spacer */}
      <div className="w-12">
        {showBack && (
          <button
            onClick={onBack}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Center - Title */}
      {title && (
        <h1 className="text-white font-bold text-lg">{title}</h1>
      )}

      {/* Right side - Language and Menu */}
      <div className="flex items-center gap-3">
        {/* Language selector */}
        <Select value={language} onValueChange={(val) => setLanguage(val as any)}>
          <SelectTrigger className="w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white text-sm">
            <Globe className="w-4 h-4 mr-2" />
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

        {/* Menu button */}
        <button
          onClick={toggleMenu}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
