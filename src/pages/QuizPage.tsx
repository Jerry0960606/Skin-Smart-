import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SliderQuestion from '@/components/SliderQuestion';
import FaceClickQuestion from '@/components/FaceClickQuestion';

const TOTAL_QUESTIONS = 10;

// Question types: 'choice' | 'slider' | 'face'
const QUESTION_TYPES: Record<number, 'choice' | 'slider' | 'face'> = {
  1: 'slider', // Skin oiliness - slider
  2: 'choice', // Pore size
  3: 'face',   // Pimple locations - face click
  4: 'choice', // Sun reaction
  5: 'choice', // Product reaction
  6: 'choice', // Skin texture
  7: 'choice', // Afternoon condition
  8: 'choice', // Elasticity
  9: 'choice', // Eye area
  10: 'choice', // Skin concerns
};

export default function QuizPage() {
  const { language, setCurrentPage, quizAnswers, setQuizAnswer, calculateSkinType } = useAppStore();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const getQuestionKey = (num: number) => `q${num}` as keyof typeof t.questions;
  const getOptionKey = (qNum: number, oNum: number) => `q${qNum}_option${oNum}` as keyof typeof t.questions;

  const handleChoiceAnswer = (answerIndex: number) => {
    setQuizAnswer(currentQuestion, answerIndex);
    
    // Auto advance after short delay for choice questions
    if (currentQuestion < TOTAL_QUESTIONS) {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
        }, 200);
      }, 400);
    }
  };

  const handleSliderAnswer = (value: number) => {
    setQuizAnswer(currentQuestion, value);
  };

  const handleFaceAnswer = (count: number) => {
    // Store count as answer (0-5 scale)
    const answerValue = Math.min(count, 4);
    setQuizAnswer(currentQuestion, answerValue);
  };

  const handleNext = () => {
    if (currentQuestion < TOTAL_QUESTIONS) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 200);
    } else {
      // Complete quiz
      calculateSkinType();
      setCurrentPage('scan');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
      }, 200);
    } else {
      setCurrentPage('gender');
    }
  };

  const currentAnswer = quizAnswers.find(a => a.questionId === currentQuestion)?.answer;
  const progress = (currentQuestion / TOTAL_QUESTIONS) * 100;
  const questionType = QUESTION_TYPES[currentQuestion];

  // Check if current question has an answer
  const hasAnswer = currentAnswer !== undefined;

  return (
    <div className="min-h-screen gradient-navy flex flex-col px-6 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        {/* Progress text */}
        <span className="text-white/70 text-sm">
          {t.quizProgress.replace('{current}', currentQuestion.toString()).replace('{total}', TOTAL_QUESTIONS.toString())}
        </span>
        
        <div className="w-10" /> {/* Spacer for alignment */}
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-full h-2 bg-white/10 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-coral rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex flex-col transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        {/* Question */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            {t.questions[getQuestionKey(currentQuestion)]}
          </h2>
        </div>

        {/* Question content based on type */}
        <div className="flex-1 flex flex-col">
          {questionType === 'slider' && (
            <div className="flex-1 flex flex-col justify-center">
              <SliderQuestion
                questionId={currentQuestion}
                onAnswer={handleSliderAnswer}
                currentValue={currentAnswer}
              />
            </div>
          )}

          {questionType === 'face' && (
            <div className="flex-1 flex flex-col justify-center">
              <FaceClickQuestion onAnswer={handleFaceAnswer} />
            </div>
          )}

          {questionType === 'choice' && (
            <div className="flex-1 flex flex-col gap-3 mb-6">
              {[0, 1, 2, 3].map((optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleChoiceAnswer(optionIndex)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                    currentAnswer === optionIndex
                      ? 'border-coral bg-coral/20'
                      : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <span className={`text-base md:text-lg ${
                    currentAnswer === optionIndex ? 'text-coral font-semibold' : 'text-white'
                  }`}>
                    {t.questions[getOptionKey(currentQuestion, optionIndex + 1)]}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Character */}
        <div className="flex justify-center my-4">
          <img
            src="/images/Question.png"
            alt="Dr. Lipstick"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleNext}
            disabled={!hasAnswer && questionType !== 'slider'}
            className="flex-1 bg-coral hover:bg-coral-dark text-navy font-bold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion < TOTAL_QUESTIONS ? t.next : t.next}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
