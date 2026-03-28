export type Language = 'zh-TW' | 'en' | 'ja';

export const translations = {
  'zh-TW': {
    // Common
    appName: 'Smart Buy Safe Skin',
    tagline: '讓我們幫你找到適合的產品',
    startAnalysis: '開始分析',
    next: '下一步',
    back: '返回',
    skip: '跳過',
    save: '保存',
    cancel: '取消',
    confirm: '確認',
    close: '關閉',
    loading: '載入中...',
    login: '立即登入',

    // Menu
    menu: '選單',
    home: '首頁',
    history: '我的化妝品',
    settings: '設定',
    help: '幫助',
    about: '關於我們',
    labelInfo: '介紹分級標籤',

    // Language
    language: '語言',
    zhTW: '繁體中文',
    en: 'English',
    ja: '日本語',

    // Cover Page
    coverTitle: 'Smart Buy\nSafe Skin',
    coverSubtitle: '確保您買到的每一件產品都適合您的肌膚',

    // Reminder Page
    reminderTitle: '等等！',
    reminderText: '這個產品對你的肌膚安全嗎？\n購買前先檢查！',
    reminderSubtext: '點擊開始進行皮膚分析測驗',

    // Gender Selection
    selectGender: '選擇性別',
    boy: '男生',
    girl: '女生',
    genderHint: '選擇最符合你身份的選項',

    // Quiz
    quizProgress: '問題 {current} / {total}',
    quizTitle: '膚質檢測問卷',

    // Questions
    questions: {
      q1: '你的肌膚通常感覺如何？',
      q1_option1: '乾燥緊繃',
      q1_option2: '油膩發亮',
      q1_option3: '混合性 (T字部位 (額頭、鼻子、下巴) 油)',
      q1_option4: '正常舒適',

      q2: '你的毛孔大小如何？',
      q2_option1: '幾乎看不見',
      q2_option2: 'T字部位 (額頭、鼻子、下巴) 明顯',
      q2_option3: '全臉都明顯',
      q2_option4: '偶爾明顯',

      q3: '你多久長一次痘痘？',
      q3_option1: '很少或從不',
      q3_option2: '偶爾（月經前/壓力大）',
      q3_option3: '經常',
      q3_option4: '非常頻繁',

      q4: '你的肌膚對陽光的反應？',
      q4_option1: '容易曬傷',
      q4_option2: '會曬黑',
      q4_option3: '先紅後黑',
      q4_option4: '幾乎不變',

      q5: '使用新保養品後的反應？',
      q5_option1: '經常過敏',
      q5_option2: '偶爾刺痛',
      q5_option3: '通常沒問題',
      q5_option4: '從未過敏',

      q6: '你的肌膚紋理如何？',
      q6_option1: '細緻光滑',
      q6_option2: '有些粗糙',
      q6_option3: '明顯粗糙',
      q6_option4: '有脫皮現象',

      q7: '下午時你的臉部狀態？',
      q7_option1: '依然清爽',
      q7_option2: 'T字部位出油',
      q7_option3: '全臉出油',
      q7_option4: '感覺更乾',

      q8: '你的臉頰肌膚狀況？',
      q8_option1: '正常且平滑',
      q8_option2: '偶爾有些乾燥',
      q8_option3: '容易泛紅脫皮',
      q8_option4: '經常長小顆粒',

      q9: '作息如何影響你的肌膚？',
      q9_option1: '熬夜後容易長痘痘',
      q9_option2: '熬夜後臉色暗沉',
      q9_option3: '壓力大時容易發炎泛紅',
      q9_option4: '沒什麼特別影響',

      q10: '你目前的肌膚困擾？',
      q10_option1: '痘痘/粉刺',
      q10_option2: '暗沉/痘印',
      q10_option3: '粗糙/顆粒感',
      q10_option4: '敏感/泛紅',
    },

    // Scan Page
    scanTitle: '準備好分析產品了嗎？',
    scanSubtitle: '掃描產品條碼或成分標籤',
    scanBarcode: '掃描條碼',
    scanIngredients: '掃描成分',
    scanHint: '相機僅用於掃描分析',
    scanProcessing: '正在掃描...',
    scanHowToTitle: '如何掃描產品？',
    scanHowToBarcode: '【步驟 1：條碼掃描】\n將相機對準產品條碼，保持穩定 1-2 秒即可自動辨識。若條碼磨損，可用手動輸入功能。',
    scanHowToIngredients: '【步驟 2：成分辨識】\n對準產品背後的「全成分」清單，儘量讓字體清晰可見，按下拍照後 AI 會進行文字分析。',
    scanHowToPurpose: '【分析原理】\n我們將產品成分與您的【個人膚質】進行交叉比對，找出致敏、致粉刺或不適合您的成分。',
    gotIt: '開始使用',

    // Analyzing Page
    analyzingTitle: '分析中...',
    analyzingText: 'Dr. Lipstick 正在為你掃描成分',
    analyzingHint: '請稍候，正在比對資料庫',

    // Results
    resultGreen: '完美匹配！',
    resultGreenDesc: '這個產品非常適合你的肌膚',
    resultYellow: '三思而後行！',
    resultYellowDesc: '這個產品可能不完全適合你',
    resultRed: '注意！',
    resultRedDesc: '這個產品可能不適合你的肌膚',

    // Result Actions
    seeFullReport: '查看完整報告',
    proceedToBuy: '前往購買',
    compareOthers: '比較其他產品',
    findAlternatives: '尋找替代方案',

    // Report Page
    reportTitle: '產品分析報告',
    productName: '產品名稱',
    safetyScore: '安全評分',
    matchScore: '適配度',
    ingredients: '成分分析',
    warnings: '注意事項',
    recommendations: '推薦建議',
    historyItem: '歷史紀錄',
    myCosmetics: '我的化妝品藏書',
    reuseQuiz: '要沿用上次的檢測結果嗎？',
    retakeQuiz: '重新檢測',
    usePrevious: '沿用紀錄',
    barcodeNotFound: '找不到此條碼',
    barcodeNotFoundDesc: '資料庫中目前沒有這款產品的資訊。',
    addToDatabase: '協助添加資料',
    analyzeNow: '要立即進行成分分析嗎？',
    thankYouContribution: '感謝您為資料庫添加了新的產品！',
    selectMode: '選擇模式',
    deleteSelected: '刪除所選 ({count})',
    confirmDelete: '確定要刪除這些項目嗎？',

    // History
    historyTitle: '我的化妝品藏書',
    historyEmpty: '尚無檢測記錄',
    historyHint: '開始你的第一次產品分析吧！',
    saveResult: '保存這次結果？',
    saveResultHint: '你可以在歷史記錄中隨時查看',
    historyList: '歷史列表',
    historyAnalysis: '交叉分析',
    safetyTrend: '安全趨勢',
    matchTrend: '適配趨勢',
    avgSafety: '平均安全分',
    avgMatch: '平均適配度',
    insightTitle: 'AI 交叉比對總結',
    compare: '比較',
    compareSelection: '比較選擇 ({count}/2)',
    compareLimit: '最多選擇 2 個產品進行比較',
    startComparison: '開始對比分析',
    clearSelection: '清空選擇',
    comparisonTitle: '產品對比分析',
    commonIngredients: '共同成分',
    uniqueTo: '僅存在於 {name}',
    betterMatch: '更適合你',
    safetyComparison: '安全性對比',
    matchComparison: '適配度對比',
    blacklistTitle: '個人黑名單',
    blacklistDesc: '添加你不希望在產品中看到的成分，我們會在分析時特別提醒你',
    addIngredient: '添加成分',
    ingredientPlaceholder: '例如：酒精、香料...',
    blacklistEmpty: '尚無黑名單成分',
    blacklistWarning: '含有你的個人黑名單成分：{name}',
    wikiTitle: '成分維基',
    wikiSearchPlaceholder: '搜尋成分名稱...',
    wikiCategoryAll: '全部',
    wikiCategorySafe: '安全',
    wikiCategoryCaution: '注意',
    wikiCategoryWarning: '警告',
    wikiNoResults: '找不到相關成分',
    suitableFor: '適合對象',
    hazardAnalysis: '成分風險分析',
    hazardRisks: {
      alcohol: '變性酒精：可能對嬌嫩或受損的肌膚屏障具刺激性，長期使用可能導致敏感。',
      fragrance: '人工香料：常見過敏原，可能引發皮炎或接觸性不適。',
      salicylic_acid: '水楊酸：高濃度可能過度剝離角質，對敏感肌膚負擔較重。',
      retinol: 'A醇：高效抗老成分，初次使用可能具高刺激性，易造成脫皮。',
      silicone: '矽靈：可能封閉毛孔，對於皮脂分泌旺盛的肌膚恐誘發粉刺。',
    },
    scoreDetails: {
      safety: {
        title: '安全評分說明',
        high: {
          why: '成分主要由溫和的保濕劑和安定劑組成，絕不含致敏香料或強烈酸類，對嬌嫩肌膚非常友善。',
          notes: '即使評分達標，仍建議初次使用於耳後小範圍測試，觀察是否因個人獨特體質產生偶發不適。'
        },
        medium: {
          why: '含有少量防腐劑或微量活性成分（如低濃度果酸），對大多數人安全，但屏障受損時可能有感。',
          notes: '應避免在日曬後或深度去角質後立即使用。若皮膚出現微紅或發熱感，請暫停使用並加強保濕。'
        },
        low: {
          why: '含有較高濃度的刺激性成分（如酒精、人工香料），容易破壞青少年發育中的肌膚屏障。',
          notes: '強烈建議不要頻繁使用，或先諮詢專業意見。使用時若有刺痛感應立即洗淨。'
        }
      },
      match: {
        title: '適配度說明',
        high: {
          why: '產品成分組合精準契合您的膚質需求（如油性肌膚搭配控油且輕薄的質地）。',
          notes: '隨著季節或環境改變，膚質可能會有所波動，請隨時重新進行檢測以維持最佳契合。'
        },
        medium: {
          why: '產品能提供基礎保養功能，但缺乏能積極改善您特定困擾（如暗沉或泛紅）的主力成分。',
          notes: '建議搭配其他針對性精華液使用，以補足本產品在特定修護功能上的不足。'
        },
        low: {
          why: '產品特性與您的肌膚需求相悖（如乾性肌膚使用了清潔力過強的控油型產品）。',
          notes: '使用後請密切注意是否有脫皮或過度乾燥現象。若引起不適，應考慮更換更契合的產品。'
        }
      }
    },
    scoreDetailLabels: {
      why: '為什麼獲得這個分數？',
      notes: '使用注意事項',
    },

    // Footer
    footerText: 'Smart Buy Safe Skin © 2024',
    disclaimer: '本分析僅供參考，如有嚴重肌膚問題請諮詢專業皮膚科醫師',

    // Skin Analysis Result Page
    skinAnalysisResult: {
      title: '您的肌膚分析結果',
      typeTitle: '您的膚質是：',
      types: {
        dry: '乾性肌膚',
        oily: '油性肌膚',
        combination: '混合性肌膚',
        normal: '中性肌膚',
        sensitive: '敏感性肌膚',
      },
      whatIsTitle: '什麼是{type}？',
      whatIs: {
        dry: '乾性肌膚通常是因為皮脂分泌不足，導致肌膚缺乏油分與水分。容易感到緊繃、粗糙，甚至出現脫皮或細紋。',
        oily: '油性肌膚的皮脂腺分泌旺盛，全臉容易發亮，毛孔較為明顯，且容易產生黑頭粉刺與痘痘問題。',
        combination: '混合性肌膚是最常見的類型。通常在 T 字部位 (額頭、鼻子、下巴) 容易出油，而臉頰區域則偏向正常或乾燥。',
        normal: '中性肌膚水分與油分分泌平衡，毛孔細緻，肌膚紋理平滑，狀態非常穩定，是理想的健康肌膚。',
        sensitive: '敏感性肌膚其屏障功能較弱，容易受到環境或產品刺激而產生泛紅、乾癢或刺痛感。',
      },
      adviceTitle: 'Dr. Lipstick 的保養建議',
      advice: {
        dry: '您的肌膚容易感到乾燥緊繃，建議加強保濕，選用含有神經醯胺或角鯊烷的滋潤型產品。',
        oily: '您的油脂分泌較旺盛，建議選擇清爽控油的產品，並定期進行深層清潔，避免毛孔堵塞。',
        combination: 'T 字部位 (額頭、鼻子、下巴) 容易出油但臉頰偏乾，建議分區保養：T 字區域控油，臉頰則加強保濕。',
        normal: '恭喜！您的肌膚狀態非常穩定。維持基礎的清潔、保濕與防曬即可。',
        sensitive: '您的肌膚較脆弱，容易泛紅刺激。請避開酒精、香料，優先選用成分簡單、溫和的修護產品。',
      },
      precautionTitle: '日常注意事項',
      precautions: [
        '避免過度清潔：每天洗臉次數不宜過多，選用溫和清潔產品。',
        '防曬是關鍵：無論晴雨，出門請務必塗抹防曬產品保護肌膚。',
        '新產品先測試：使用新保養品前，建議先在耳後或手臂內側小範圍測試。',
        '充足水分與睡眠：內在的調節對肌膚健康同樣重要。',
      ],
      startScanning: '開始掃描產品',
    },
  },

  'en': {
    // Common
    appName: 'Smart Buy Safe Skin',
    tagline: "Let's find the right products for you",
    startAnalysis: 'Start Analysis',
    next: 'Next',
    back: 'Back',
    skip: 'Skip',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    close: 'Close',
    loading: 'Loading...',
    login: 'Login Now',

    // Menu
    menu: 'Menu',
    home: 'Home',
    history: 'My Cosmetics',
    settings: 'Settings',
    help: 'Help',
    about: 'About Us',
    labelInfo: 'Classification Labels',

    // Language
    language: 'Language',
    zhTW: '繁體中文',
    en: 'English',
    ja: '日本語',

    // Cover Page
    coverTitle: 'Smart Buy\nSafe Skin',
    coverSubtitle: 'Ensure every product you buy is right for your skin',

    // Reminder Page
    reminderTitle: 'Wait!',
    reminderText: 'Is this product safe for your skin?\nCheck before you buy!',
    reminderSubtext: 'Click to start the skin analysis quiz',

    // Gender Selection
    selectGender: 'Select Gender',
    boy: 'Boy',
    girl: 'Girl',
    genderHint: 'Choose the option that best describes you',

    // Quiz
    quizProgress: 'Question {current} / {total}',
    quizTitle: 'Skin Type Assessment',

    // Questions
    questions: {
      q1: 'How does your skin usually feel?',
      q1_option1: 'Dry and tight',
      q1_option2: 'Oily and shiny',
      q1_option3: 'Combination (oily T-zone)',
      q1_option4: 'Normal and comfortable',

      q2: 'How visible are your pores?',
      q2_option1: 'Almost invisible',
      q2_option2: 'Visible in T-zone',
      q2_option3: 'Visible all over',
      q2_option4: 'Occasionally visible',

      q3: 'How often do you get breakouts?',
      q3_option1: 'Rarely or never',
      q3_option2: 'Occasionally (before period/stress)',
      q3_option3: 'Frequently',
      q3_option4: 'Very often',

      q4: 'How does your skin react to sun?',
      q4_option1: 'Burns easily',
      q4_option2: 'Tans easily',
      q4_option3: 'Burns then tans',
      q4_option4: 'Hardly changes',

      q5: 'Reaction to new skincare products?',
      q5_option1: 'Often allergic',
      q5_option2: 'Occasionally stings',
      q5_option3: 'Usually fine',
      q5_option4: 'Never allergic',

      q6: 'How is your skin texture?',
      q6_option1: 'Fine and smooth',
      q6_option2: 'Somewhat rough',
      q6_option3: 'Obviously rough',
      q6_option4: 'Has peeling',

      q7: 'Your face condition in the afternoon?',
      q7_option1: 'Still fresh',
      q7_option2: 'T-zone gets oily',
      q7_option3: 'Whole face oily',
      q7_option4: 'Feels drier',

      q8: 'How is your cheek skin condition?',
      q8_option1: 'Normal and smooth',
      q8_option2: 'Occasionally dry',
      q8_option3: 'Easily red or peeling',
      q8_option4: 'Often gets small bumps',

      q9: 'How does your routine affect your skin?',
      q9_option1: 'Breakouts after staying up late',
      q9_option2: 'Dullness after staying up late',
      q9_option3: 'Redness/inflammation when stressed',
      q9_option4: 'No noticeable impact',

      q10: 'Your current skin concerns?',
      q10_option1: 'Acne/Blackheads',
      q10_option2: 'Dullness/Acne scars',
      q10_option3: 'Roughness/Bumps',
      q10_option4: 'Sensitivity/Redness',
    },

    // Scan Page
    scanTitle: 'Ready to analyze the product?',
    scanSubtitle: 'Scan product barcode or ingredient label',
    scanBarcode: 'Scan Barcode',
    scanIngredients: 'Scan Ingredients',
    scanHint: 'Camera is only used for scanning analysis',
    scanProcessing: 'Scanning...',
    scanHowToTitle: 'How to scan?',
    scanHowToBarcode: '[Step 1: Barcode]\nPoint at the barcode and hold steady for 1-2 seconds. Use manual entry if the barcode is damaged or not found.',
    scanHowToIngredients: '[Step 2: Ingredients]\nFind the "Ingredients" list, ensure the text is clear, and tap the capture button for AI analysis.',
    scanHowToPurpose: '[Why analyze?]\nWe match ingredients with your unique skin profile to find risks or perfect matches.',
    gotIt: 'Get Started',

    // Analyzing Page
    analyzingTitle: 'Analyzing...',
    analyzingText: 'Dr. Lipstick is scanning ingredients for you',
    analyzingHint: 'Please wait, comparing with database',

    // Results
    resultGreen: 'Perfect Match!',
    resultGreenDesc: 'This product is perfect for your skin',
    resultYellow: 'Think Twice!',
    resultYellowDesc: 'This product may not be fully suitable',
    resultRed: 'WATCH OUT!',
    resultRedDesc: 'This product may not be suitable for your skin',

    // Result Actions
    seeFullReport: 'See Full Report',
    proceedToBuy: 'Proceed to Buy',
    compareOthers: 'Compare Others',
    findAlternatives: 'Find Alternatives',

    // Report Page
    reportTitle: 'Product Analysis Report',
    productName: 'Product Name',
    safetyScore: 'Safety Score',
    matchScore: 'Match Score',
    ingredients: 'Ingredient Analysis',
    warnings: 'Warnings',
    recommendations: 'Recommendations',
    historyItem: 'Search History',
    myCosmetics: 'My Cosmetics Collection',
    reuseQuiz: 'Reuse your previous skin profile?',
    retakeQuiz: 'Retake Quiz',
    usePrevious: 'Use Previous',
    barcodeNotFound: 'Barcode Not Found',
    barcodeNotFoundDesc: 'We don\'t have information for this product in our database yet.',
    addToDatabase: 'Contribute Data',
    analyzeNow: 'Would you like to analyze ingredients now?',
    thankYouContribution: 'Thank you for adding a new product to our database!',
    selectMode: 'Select Mode',
    deleteSelected: 'Delete Selected ({count})',
    confirmDelete: 'Are you sure you want to delete selected items?',

    // History
    historyTitle: 'My Cosmetics Collection',
    historyEmpty: 'No scan records yet',
    historyHint: 'Start your first product analysis!',
    saveResult: 'Save this result?',
    saveResultHint: 'You can view it anytime in history',
    historyList: 'History List',
    historyAnalysis: 'Cross Analysis',
    safetyTrend: 'Safety Trend',
    matchTrend: 'Match Trend',
    avgSafety: 'Avg Safety',
    avgMatch: 'Avg Match',
    insightTitle: 'AI Cross-Reference Insights',
    compare: 'Compare',
    compareSelection: 'Selection ({count}/2)',
    compareLimit: 'Select max 2 products to compare',
    startComparison: 'Start Comparison',
    clearSelection: 'Clear Selection',
    comparisonTitle: 'Product Comparison',
    commonIngredients: 'Common Ingredients',
    uniqueTo: 'Unique to {name}',
    betterMatch: 'Better Match',
    safetyComparison: 'Safety Comparison',
    matchComparison: 'Match Comparison',
    blacklistTitle: 'Personal Blacklist',
    blacklistDesc: 'Add ingredients you want to avoid. We will alert you if they are found in products.',
    addIngredient: 'Add Ingredient',
    ingredientPlaceholder: 'e.g. Alcohol, Fragrance...',
    blacklistEmpty: 'No blacklisted ingredients yet',
    blacklistWarning: 'Contains your blacklisted ingredient: {name}',
    wikiTitle: 'Ingredient Wiki',
    wikiSearchPlaceholder: 'Search ingredient name...',
    wikiCategoryAll: 'All',
    wikiCategorySafe: 'Safe',
    wikiCategoryCaution: 'Caution',
    wikiCategoryWarning: 'Warning',
    wikiNoResults: 'No ingredients found',
    suitableFor: 'Suitable For',
    hazardAnalysis: 'Ingredient Risk Analysis',
    hazardRisks: {
      alcohol: 'Alcohol Denat: Can be irritating to delicate or damaged skin barriers; long-term use may lead to sensitivity.',
      fragrance: 'Artificial Fragrance: Common allergen, can trigger dermatitis or contact discomfort.',
      salicylic_acid: 'Salicylic Acid: High concentrations may over-exfoliate, heavy burden for sensitive skin.',
      retinol: 'Retinol: Potent anti-aging active can be highly irritating for first-time users, causes peeling.',
      silicone: 'Silicone: May clog pores; risky for sebum-active skin, potentially inducing acne.',
    },
    scoreDetails: {
      safety: {
        title: 'Safety Score Info',
        high: {
          why: 'Ingredients are mostly gentle humectants and stabilizers, free from allergens and harsh acids.',
          notes: 'Even with a high score, a 24-hour patch test is recommended to ensure no unique personal sensitivities.'
        },
        medium: {
          why: 'Contains minor preservatives or low-level actives, generally safe but may be felt on broken barriers.',
          notes: 'Avoid use immediately after sun exposure or exfoliation. Pause if redness occurs.'
        },
        low: {
          why: 'Contains higher concentrations of irritants like alcohol or fragrance, which can disrupt teen skin.',
          notes: 'Not recommended for frequent use. Discontinue immediately if stinging sensation occurs.'
        }
      },
      match: {
        title: 'Match Score Info',
        high: {
          why: 'The formula precisely matches your skin type needs (e.g., lightweight for oily skin).',
          notes: 'Skin needs change with seasons. Retake the quiz occasionally to ensure ongoing compatibility.'
        },
        medium: {
          why: 'Provides basic care but lacks specific actives to address your primary concerns like dullness.',
          notes: 'Consider layering with a targeted serum to address your specific skin goals.'
        },
        low: {
          why: 'The product profile conflicts with your skin needs (e.g., stripping products for dry skin).',
          notes: 'Watch for excessive dryness or breakouts. Consider switching to a more compatible formula.'
        }
      }
    },
    scoreDetailLabels: {
      why: 'Why this score?',
      notes: 'Usage Notes',
    },

    // Footer
    footerText: 'Smart Buy Safe Skin © 2024',
    disclaimer: 'This analysis is for reference only. Consult a dermatologist for serious skin concerns.',

    // Skin Analysis Result Page
    skinAnalysisResult: {
      title: 'Your Skin Analysis Result',
      typeTitle: 'Your Skin Type:',
      types: {
        dry: 'Dry Skin',
        oily: 'Oily Skin',
        combination: 'Combination Skin',
        normal: 'Normal Skin',
        sensitive: 'Sensitive Skin',
      },
      whatIsTitle: 'What is {type}?',
      whatIs: {
        dry: 'Dry skin is caused by insufficient sebum production, leading to a lack of both oil and moisture. It often feels tight, looks dull, and can have fine lines or flaking.',
        oily: 'Oily skin has overactive sebaceous glands, leading to shine, enlarged pores, and a higher tendency for blackheads and breakouts.',
        combination: 'Combination skin is very common. It typically features an oily T-zone (forehead, nose, chin) while cheeks are normal to dry.',
        normal: 'Normal skin has balanced oil and moisture levels. It features fine pores and a smooth texture, remaining stable and healthy under most conditions.',
        sensitive: 'Sensitive skin has a weakened barrier, making it more reactive to environmental factors or ingredients, leading to redness, itching, or stinging.',
      },
      adviceTitle: 'Dr. Lipstick\'s Maintenance Advice',
      advice: {
        dry: 'Your skin often feels tight and dry. Focus on deep hydration and look for products containing ceramides or squalane.',
        oily: 'Your skin produces excess oil. Choose oil-control, lightweight products and maintain regular deep cleansing.',
        combination: 'Oily T-zone but dry cheeks. We recommend dual-zone care: oil control for the T-zone and hydration for the cheeks.',
        normal: 'Congratulations! Your skin is very stable. Maintain a basic routine of cleansing, hydration, and sun protection.',
        sensitive: 'Your skin is fragile and easily irritated. Avoid alcohol and fragrance, and choose simple, soothing products.',
      },
      precautionTitle: 'Daily Precautions',
      precautions: [
        'Avoid over-cleansing: Do not wash your face too frequently; use gentle cleansers.',
        'Sun protection is key: Always apply sunscreen before going out to protect your skin barrier.',
        'Patch test new products: Test on a small area behind the ear or inner arm before full use.',
        'Stay hydrated and well-rested: Internal balance is just as important for skin health.',
      ],
      startScanning: 'Start Scanning Products',
    },
  },

  'ja': {
    // Common
    appName: 'Smart Buy Safe Skin',
    tagline: 'あなたに合った製品を見つけましょう',
    startAnalysis: '分析を開始',
    next: '次へ',
    back: '戻る',
    skip: 'スキップ',
    save: '保存',
    cancel: 'キャンセル',
    confirm: '確認',
    close: '閉じる',
    loading: '読み込み中...',
    login: '今すぐログイン',

    // Menu
    menu: 'メニュー',
    home: 'ホーム',
    history: '私の化粧品',
    settings: '設定',
    help: 'ヘルプ',
    about: '私たちについて',
    labelInfo: '分級標籤の紹介',

    // Language
    language: '言語',
    zhTW: '繁體中文',
    en: 'English',
    ja: '日本語',

    // Cover Page
    coverTitle: 'Smart Buy\nSafe Skin',
    coverSubtitle: '購入するすべての製品があなたの肌に適していることを確認しましょう',

    // Reminder Page
    reminderTitle: '待って！',
    reminderText: 'この製品はお肌に安全ですか？\n購入前にチェック！',
    reminderSubtext: '肌分析クイズを開始するにはクリック',

    // Gender Selection
    selectGender: '性別を選択',
    boy: '男性',
    girl: '女性',
    genderHint: '最も適切なオプションを選択してください',

    // Quiz
    quizProgress: '質問 {current} / {total}',
    quizTitle: '肌質診断アンケート',

    // Questions
    questions: {
      q1: 'お肌の普段の状態は？',
      q1_option1: '乾燥して引き締まる',
      q1_option2: '油っぽくてテカる',
      q1_option3: '混合肌（Tゾーンが油）',
      q1_option4: '普通で快適',

      q2: '毛穴の大きさは？',
      q2_option1: 'ほとんど見えない',
      q2_option2: 'Tゾーンで目立つ',
      q2_option3: '顔全体で目立つ',
      q2_option4: '時々目立つ',

      q3: 'ニキビの発生頻度は？',
      q3_option1: 'めったにまたは全く',
      q3_option2: '時々（生理前/ストレス時）',
      q3_option3: '頻繁に',
      q3_option4: '非常に頻繁',

      q4: '日焼けへの反応は？',
      q4_option1: '簡単に日焼けする',
      q4_option2: '簡単に日焼けする',
      q4_option3: '赤くなってから日焼け',
      q4_option4: 'ほとんど変わらない',

      q5: '新しいスキンケア製品使用後の反応は？',
      q5_option1: 'よくアレルギーが出る',
      q5_option2: '時々ヒリヒリする',
      q5_option3: '通常問題なし',
      q5_option4: 'アレルギーが出たことがない',

      q6: '肌の質感は？',
      q6_option1: '細かく滑らか',
      q6_option2: 'やや粗い',
      q6_option3: '明らかに粗い',
      q6_option4: '皮むけがある',

      q7: '午後の顔の状態は？',
      q7_option1: '依然としてさっぱり',
      q7_option2: 'Tゾーンが油っぽく',
      q7_option3: '顔全体が油っぽく',
      q7_option4: 'より乾燥を感じる',

      q8: '頬の肌の状態はどうですか？',
      q8_option1: '普通で滑らか',
      q8_option2: '時々少し乾燥する',
      q8_option3: '赤みが出たり皮がむけやすい',
      q8_option4: 'よく小さなブツブツができる',

      q9: '生活リズムは肌にどう影響しますか？',
      q9_option1: '夜更かしするとニキビができやすい',
      q9_option2: '夜更かしすると肌がくすむ',
      q9_option3: 'ストレスで赤みや炎症が出やすい',
      q9_option4: '特に影響はない',

      q10: '現在の肌の悩みは？',
      q10_option1: 'ニキビ/黒ずみ',
      q10_option2: 'くすみ/ニキビ跡',
      q10_option3: 'ざらつき/ブツブツ',
      q10_option4: '敏感/赤み',
    },

    // Scan Page
    scanTitle: '製品の分析準備はできましたか？',
    scanSubtitle: '製品のバーコードまたは成分ラベルをスキャン',
    scanBarcode: 'バーコードをスキャン',
    scanIngredients: '成分をスキャン',
    scanHint: 'カメラはスキャン分析専用です',
    scanProcessing: 'スキャン中...',
    scanHowToTitle: 'スキャン方法',
    scanHowToBarcode: '【ステップ 1：バーコード】\n製品のバーコードにカメラを向け、1〜2秒間静止してください。読み取れない場合は手動入力を使用します。',
    scanHowToIngredients: '【ステップ 2：成分表示】\n「全成分表示」を枠内に収め、ピントを合わせてから撮影ボタンを押して分析を開始します。',
    scanHowToPurpose: '【分析の仕組み】\n成分とあなたの【肌質】を照合し、刺激が強いものや最適なものを科学的に判別します。',
    gotIt: 'スキャンを開始',

    // Analyzing Page
    analyzingTitle: '分析中...',
    analyzingText: 'Dr. Lipstickが成分をスキャンしています',
    analyzingHint: 'データベースと比較中です。お待ちください',

    // Results
    resultGreen: '完璧なマッチ！',
    resultGreenDesc: 'この製品はあなたの肌に最適です',
    resultYellow: 'よく考えて！',
    resultYellowDesc: 'この製品は完全には適合しない可能性があります',
    resultRed: '注意！',
    resultRedDesc: 'この製品はあなたの肌に適さない可能性があります',

    // Result Actions
    seeFullReport: '完全なレポートを見る',
    proceedToBuy: '購入に進む',
    compareOthers: '他と比較',
    findAlternatives: '代替品を探す',

    // Report Page
    reportTitle: '製品分析レポート',
    productName: '製品名',
    safetyScore: '安全性スコア',
    matchScore: '適合度',
    ingredients: '成分分析',
    warnings: '注意事項',
    recommendations: '推奨事項',
    historyItem: '検索履歴',
    myCosmetics: 'マイコスメ',
    reuseQuiz: '前回の肌診断結果を使用しますか？',
    retakeQuiz: 'もう一度診断する',
    usePrevious: '前回の結果を使用',
    barcodeNotFound: 'バーコードが見つかりません',
    barcodeNotFoundDesc: 'データベースにこの商品の情報がまだありません。',
    addToDatabase: 'データを追加する',
    analyzeNow: '今すぐ成分分析を行いますか？',
    thankYouContribution: 'データベースへの商品追加ありがとうございます！',
    selectMode: '選択モード',
    deleteSelected: '選択した項目を削除 ({count})',
    confirmDelete: '選択した項目を削除してもよろしいですか？',

    // History
    historyTitle: '私の化粧品コレクション',
    historyEmpty: 'まだスキャン記録がありません',
    historyHint: '最初の製品分析を始めましょう！',
    saveResult: 'この結果を保存しますか？',
    saveResultHint: '履歴でいつでも確認できます',
    historyList: '履歴リスト',
    historyAnalysis: 'クロス分析',
    safetyTrend: '安全性の傾向',
    matchTrend: '適合性の傾向',
    avgSafety: '平均安全スコア',
    avgMatch: '平均適合度',
    insightTitle: 'AIクロス分析概要',
    compare: '比較',
    compareSelection: '選択中 ({count}/2)',
    compareLimit: '最大2つの製品を選択して比較',
    startComparison: '比較分析を開始',
    clearSelection: '選択をクリア',
    comparisonTitle: '製品比較分析',
    commonIngredients: '共通成分',
    uniqueTo: '{name} のみ',
    betterMatch: 'あなたにより適合',
    safetyComparison: '安全性比較',
    matchComparison: '適合度比較',
    blacklistTitle: '個人ブラックリスト',
    blacklistDesc: '避けたい成分を追加してください。製品に含まれている場合にアラートを表示します。',
    addIngredient: '成分を追加',
    ingredientPlaceholder: '例：アルコール、香料...',
    blacklistEmpty: 'ブラックリストに登録された成分はありません',
    blacklistWarning: 'ブラックリスト登録成分が含まれています：{name}',
    wikiTitle: '成分ウィキ',
    wikiSearchPlaceholder: '成分名で検索...',
    wikiCategoryAll: 'すべて',
    wikiCategorySafe: '安全',
    wikiCategoryCaution: '注意',
    wikiCategoryWarning: '警告',
    wikiNoResults: '成分が見つかりませんでした',
    suitableFor: '適した対象',
    hazardAnalysis: '成分リスク分析',
    hazardRisks: {
      alcohol: '変性アルコール：デリケートな肌やバリア機能が低下した肌には刺激となる可能性があり、長期の使用は敏感肌を招く恐れがあります。',
      fragrance: '人工香料：一般的なアレルゲンであり、皮膚炎や接触性不快感を引き起こす可能性があります。',
      salicylic_acid: 'サリチル酸：高濃度では過剰な角質剥離を招き、敏感肌には負担が大きすぎます。',
      retinol: 'レチノール：強力なエイジングケア成分ですが、初めて使用する場合は刺激が強く、皮剥けを起こすことがあります。',
      silicone: 'シリコン：毛穴を塞ぐ可能性があり、皮脂分泌が活発な肌ではニキビを誘発する恐れがあります。',
    },
    scoreDetails: {
      safety: {
        title: '安全スコアの詳細',
        high: {
          why: '成分は主に低刺激の保湿剤と安定剤で構成されており、アレルゲンや強い酸は含まれていません。',
          notes: '高スコアであっても、念のため耳の後ろなどでパッチテストを行うことをお勧めします。'
        },
        medium: {
          why: '少量の防腐剤や低濃度の活性成分を含んでおり、通常は安全ですが、肌が敏感な時は刺激を感じる場合があります。',
          notes: '日焼け直後やピーリング直後の使用は避けてください。赤みが出た場合は使用を控えてください。'
        },
        low: {
          why: 'アルコールや香料など、デリケートな肌やバリア機能の低下した肌に刺激を与える可能性のある成分が高濃度で含まれています。',
          notes: '頻繁な使用は推奨されません。刺激を感じた場合はすぐに洗い流し、使用を中止してください。'
        }
      },
      match: {
        title: '適応度スコアの詳細',
        high: {
          why: '成分の組み合わせがあなたの肌質（例：脂性肌向けのさっぱりしたテクスチャーなど）に正確に合致しています。',
          notes: '季節や環境の変化で肌質も変わるため、定期的な再診断をお勧めします。'
        },
        medium: {
          why: '基本的なケアは可能ですが、特定の悩み（くすみや赤みなど）を改善するための主要成分が不足しています。',
          notes: '不足している機能を補うために、他の美容液と併用することをお勧めします。'
        },
        low: {
          why: '製品の特性があなたの肌ニーズと逆行しています（例：乾燥肌に洗浄力の強すぎる製品など）。',
          notes: '使用後の乾燥や肌荒れに注意してください。不快感がある場合は、より適した製品への変更を検討してください。'
        }
      }
    },
    scoreDetailLabels: {
      why: 'なぜこのスコア？',
      notes: '使用上の注意',
    },

    // Footer
    footerText: 'Smart Buy Safe Skin © 2024',
    disclaimer: 'この分析は参考用です。深刻な肌の問題がある場合は、皮膚科医に相談してください。',

    // Skin Analysis Result Page
    skinAnalysisResult: {
      title: '肌診断結果',
      typeTitle: 'あなたの肌質は：',
      types: {
        dry: '乾燥肌',
        oily: '脂性肌',
        combination: '混合肌',
        normal: '普通肌',
        sensitive: '敏感肌',
      },
      whatIsTitle: '{type}とは？',
      whatIs: {
        dry: '皮脂分泌が不足し、油分と水分の両方が不足しています。つっぱり感やかさつきがあり、細かいしわができやすい状態です。',
        oily: '皮脂腺の働きが活発で、顔全体がテカリやすく、毛穴が目立ちやすいタイプです。ニキビや毛穴詰まりに注意が必要です。',
        combination: 'Tゾーン（額・鼻・あご）はテカりやすく、頬などは乾燥または普通という、最も一般的な肌質です。',
        normal: '水分と油分のバランスが非常に良く、毛穴が目立たずキメが整った、理想的な健康肌です。',
        sensitive: 'バリア機能が低下しており、外部刺激に反応しやすい状態です。赤み、かゆみ、ヒリつきが出やすいのが特徴です。',
      },
      adviceTitle: 'Dr. Lipstick のアドバイス',
      advice: {
        dry: 'お肌が乾燥しやすくつっぱり感があるため、高保湿成分のセラミドやスクワランを配合した製品をおすすめします。',
        oily: '皮脂分泌が活發なため、さっぱりとした使用感のオイルコントロール製品を選び、丁寧な洗顔を心がけましょう。',
        combination: 'Tゾーンはテカリやすく頬はカサつきがちです。部位ごとに、テカリ防止と保湿を使い分けるのがコツです。',
        normal: 'おめでとうございます！お肌の状態はとても安定しています。清潔、保湿、UVケアの基本を続けましょう。',
        sensitive: 'お肌のバリア機能が弱いため、アルコールや香料を避け、低刺激でシンプルな処方の製品を選びましょう。',
      },
      precautionTitle: '日常の注意事項',
      precautions: [
        '洗いすぎに注意：一日の洗顔回数は控えめに、優しい洗顔料を選びましょう。',
        'UVケアは必須：肌のバリアを守るため、外出時は必ず日焼け止めを塗りましょう。',
        '試用テスト：新しい製品を使う時は、耳の後ろなどでパッチテストをおすすめします。',
        '十分な睡眠と水分：健康な肌のためには、生活習慣の調整も大切です。',
      ],
      startScanning: '製品スキャンを開始',
    },
  },
};

export type Translations = typeof translations['zh-TW'];
