import { useAppStore } from '@/store/appStore';
import CoverPage from '@/pages/CoverPage';
import ReminderPage from '@/pages/ReminderPage';
import GenderPage from '@/pages/GenderPage';
import QuizPage from '@/pages/QuizPage';
import ScanPage from '@/pages/ScanPage';
import LoginPage from '@/pages/LoginPage';
import ManualInputPage from '@/pages/ManualInputPage';
import AnalyzingPage from '@/pages/AnalyzingPage';
import ResultPage from '@/pages/ResultPage';
import ReportPage from '@/pages/ReportPage';
import HistoryPage from '@/pages/HistoryPage';
import CosmeticsPage from '@/pages/CosmeticsPage';
import HelpPage from '@/pages/HelpPage';
import AboutPage from '@/pages/AboutPage';
import SettingsPage from '@/pages/SettingsPage';
import ComparisonPage from '@/pages/ComparisonPage';
import IngredientWikiPage from '@/pages/IngredientWikiPage';
import SkinAnalysisResultPage from '@/pages/SkinAnalysisResultPage';
import LabelInfoPage from '@/pages/LabelInfoPage';
import Menu from '@/components/Menu';
import { Toaster } from '@/components/ui/sonner';
import { Menu as MenuIcon } from 'lucide-react';

function App() {
  const { currentPage, setMenuOpen } = useAppStore();

  const renderPage = () => {
    switch (currentPage) {
      case 'cover':
        return <CoverPage />;
      case 'reminder':
        return <ReminderPage />;
      case 'gender':
        return <GenderPage />;
      case 'quiz':
        return <QuizPage />;
      case 'scan':
        return <ScanPage />;
      case 'manual-input':
        return <ManualInputPage />;
      case 'login':
        return <LoginPage />;
      case 'analyzing':
        return <AnalyzingPage />;
      case 'result':
        return <ResultPage />;
      case 'report':
        return <ReportPage />;
      case 'history':
        return <HistoryPage />;
      case 'cosmetics':
        return <CosmeticsPage />;
      case 'help':
        return <HelpPage />;
      case 'about':
        return <AboutPage />;
      case 'label-info':
        return <LabelInfoPage />;
      case 'settings':
        return <SettingsPage />;
      case 'comparison':
        return <ComparisonPage />;
      case 'wiki':
        return <IngredientWikiPage />;
      case 'skin-analysis-result':
        return <SkinAnalysisResultPage />;
      default:
        return <CoverPage />;
    }
  };

  return (
    <div className="min-h-screen relative bg-navy overflow-hidden">
      {renderPage()}
      <Menu />
      {/* Floating Menu Button */}
      {currentPage !== 'cover' && (
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed top-6 right-6 z-[60] p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-105 active:scale-95 shadow-lg"
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      )}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'hsl(210 45% 22%)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />
    </div>
  );
}

export default App;
