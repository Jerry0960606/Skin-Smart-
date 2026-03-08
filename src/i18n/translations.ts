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

    // Menu
    menu: '選單',
    home: '首頁',
    history: '歷史記錄',
    settings: '設定',
    help: '幫助',
    about: '關於我們',

    // Language
    language: '語言',
    zhTW: '繁體中文',
    en: 'English',
    ja: '日本語',

    // Cover Page
    coverTitle: 'Smart Buy\nSafe Skin',
    coverSubtitle: '讓我們確保你買到適合的產品',

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
      q1_option3: '混合性（T字部位油）',
      q1_option4: '正常舒適',

      q2: '你的毛孔大小如何？',
      q2_option1: '幾乎看不見',
      q2_option2: 'T字部位明顯',
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

    // History
    historyTitle: '檢測歷史',
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

    // Footer
    footerText: 'Smart Buy Safe Skin © 2024',
    disclaimer: '本分析僅供參考，如有嚴重肌膚問題請諮詢專業皮膚科醫師',
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

    // Menu
    menu: 'Menu',
    home: 'Home',
    history: 'History',
    settings: 'Settings',
    help: 'Help',
    about: 'About Us',

    // Language
    language: 'Language',
    zhTW: '繁體中文',
    en: 'English',
    ja: '日本語',

    // Cover Page
    coverTitle: 'Smart Buy\nSafe Skin',
    coverSubtitle: "Let's ensure you buy suitable products",

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

    // History
    historyTitle: 'Scan History',
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

    // Footer
    footerText: 'Smart Buy Safe Skin © 2024',
    disclaimer: 'This analysis is for reference only. Consult a dermatologist for serious skin concerns.',
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

    // Menu
    menu: 'メニュー',
    home: 'ホーム',
    history: '履歴',
    settings: '設定',
    help: 'ヘルプ',
    about: '私たちについて',

    // Language
    language: '言語',
    zhTW: '繁體中文',
    en: 'English',
    ja: '日本語',

    // Cover Page
    coverTitle: 'Smart Buy\nSafe Skin',
    coverSubtitle: 'あなたに適した製品を購入しましょう',

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

    // History
    historyTitle: 'スキャン履歴',
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

    // Footer
    footerText: 'Smart Buy Safe Skin © 2024',
    disclaimer: 'この分析は参考用です。深刻な肌の問題がある場合は、皮膚科医に相談してください。',
  },
};

export type Translations = typeof translations['zh-TW'];
