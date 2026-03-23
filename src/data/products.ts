export interface Product {
  barcode: string;
  name: {
    'zh-TW': string;
    'en': string;
    'ja': string;
  };
  brand: string;
  category: string;
  ingredients: string[];
  safetyScore: number; // 0-100
  warnings: string[];
  goodFor: string[];
}

// 20 Real cosmetic products database
export const productsDatabase: Product[] = [
  {
    barcode: '4713037924824',
    name: {
      'zh-TW': 'DR.WU 杏仁酸亮白煥膚精華 18%',
      'en': 'DR.WU Mandelic Intensive Renewal Serum 18%',
      'ja': 'DR.WU マンデル酸 ピーリング美容液 18%',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Water', 'Mandelic Acid', 'Propylene Glycol', 'Butylene Glycol', 'Sodium Hyaluronate', 'Allantoin'],
    safetyScore: 85,
    warnings: ['mandelic_acid'],
    goodFor: ['oily', 'acne', 'combination'],
  },
  {
    barcode: '4712052506091',
    name: {
      'zh-TW': 'DR.WU 杏仁酸溫和煥膚精華 6%',
      'en': 'DR.WU Mandelic Daily Renewal Serum 6%',
      'ja': 'DR.WU マンデル酸 デイリー ピーリング美容液 6%',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Water', 'Mandelic Acid', 'Butylene Glycol', 'Glycerin', 'Panthenol', 'Sodium Hyaluronate'],
    safetyScore: 90,
    warnings: ['mandelic_acid'],
    goodFor: ['sensitive', 'dry', 'normal'],
  },
  {
    barcode: '4713575090562',
    name: {
      'zh-TW': '我的美麗日記 黑珍珠煥白面膜',
      'en': 'My Beauty Diary Black Pearl Brightening Mask',
      'ja': '私のきれい日記 黒真珠マスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Butylene Glycol', 'Pearl Extract', 'Centella Asiatica Extract', 'Sodium Hyaluronate'],
    safetyScore: 92,
    warnings: [],
    goodFor: ['dull', 'dry', 'normal'],
  },
  {
    barcode: '4713575090654',
    name: {
      'zh-TW': '我的美麗日記 玻尿酸極效保濕面膜',
      'en': 'My Beauty Diary Hyaluronic Acid Ultra Moisturizing Mask',
      'ja': '私のきれい日記 ヒアルロン酸保湿マスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Propylene Glycol', 'Sodium Hyaluronate', 'Aloe Vera', 'Centella Asiatica Extract'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'sensitive'],
  },
  {
    barcode: '4715872642406',
    name: {
      'zh-TW': '森田藥粧 玻尿酸保濕精華面膜',
      'en': 'Dr. Morita Hyaluronic Acid Essence Mask',
      'ja': '森田薬粧 ヒアルロン酸エッセンスマスク',
    },
    brand: 'Dr. Morita',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Hyaluronic Acid', 'Hydrolyzed Hyaluronic Acid', 'Ceramide NP', 'Allantoin'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '4718009814585',
    name: {
      'zh-TW': '森田藥粧 玻尿酸潤澤修護精華面膜',
      'en': 'Dr. Morita Hyaluronic Acid Moisturizing & Repairing Essence Mask',
      'ja': '森田薬粧 ヒアルロン酸潤い修復マスク',
    },
    brand: 'Dr. Morita',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Panthenol', 'Sodium Hyaluronate', 'Ceramide AP', 'Madecassoside'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['damaged', 'sensitive', 'dry'],
  },
  {
    barcode: '4713361811050',
    name: {
      'zh-TW': '霓淨思 極效積雪草B5舒敏修護精華',
      'en': 'Neogence Extreme Cica & B5 Soothing Repair Essence',
      'ja': 'ネオジェンス CICA B5 修復エッセンス',
    },
    brand: 'Neogence',
    category: 'serum',
    ingredients: ['Water', 'Pentylene Glycol', 'Panthenol', 'Madecassoside', 'Sodium Hyaluronate'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['sensitive', 'damaged', 'dry'],
  },
  {
    barcode: '4713361811067',
    name: {
      'zh-TW': '霓淨思 積雪草B5修護純粹凝乳',
      'en': 'Neogence Cica & B5 Repairing Cream',
      'ja': 'ネオジェンス CICA B5 修復クリーム',
    },
    brand: 'Neogence',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Squalane', 'Panthenol', 'Madecassoside', 'Cetyl Alcohol'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'combination'],
  },
  {
    barcode: '4711542421010',
    name: {
      'zh-TW': 'NARUKO 茶樹抗痘粉刺調理晚安凍膜',
      'en': 'Naruko Tea Tree Shine Control & Blemish Clear Night Gelly',
      'ja': 'ナルコ ティーツリーナイトジェリー',
    },
    brand: 'Naruko',
    category: 'mask',
    ingredients: ['Water', 'Gluconolactone', 'Salicylic Acid', 'Tea Tree Oil', 'Zinc PCA', 'Phytoferulin'],
    safetyScore: 82,
    warnings: ['salicylic_acid', 'tea_tree_oil'],
    goodFor: ['oily', 'acne', 'combination'],
  },
  {
    barcode: '4712953211017',
    name: {
      'zh-TW': '23.5°N 北緯23.5 米粹舒緩活酵凍膜',
      'en': '23.5°N Rice Soothing Active Gel Mask',
      'ja': '23.5°N お米の活性ジェルマスク',
    },
    brand: '23.5°N',
    category: 'mask',
    ingredients: ['Water', 'Rice Extract', 'Rice Ferment Filtrate', 'Sodium Hyaluronate', 'Carbomer'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'dull'],
  },
  {
    barcode: '4710108861234',
    name: {
      'zh-TW': 'Bioré 蜜妮 含水防曬保濕水凝乳',
      'en': 'Biore UV Aqua Rich Watery Essence SPF50+',
      'ja': 'ビオレUV アクアリッチ ウォータリーエッセンス',
    },
    brand: 'Biore',
    category: 'sunscreen',
    ingredients: ['Water', 'Alcohol', 'Methoxycinnamate', 'Xylitol', 'Royal Jelly Extract', 'Sodium Hyaluronate'],
    safetyScore: 78,
    warnings: ['alcohol', 'fragrance'],
    goodFor: ['all', 'face', 'body'],
  },
  {
    barcode: '4710224121015',
    name: {
      'zh-TW': '自肌研 極潤保濕化粧水',
      'en': 'Hada Labo Gokujyun Hydrating Lotion',
      'ja': '肌ラボ 極潤 ヒアルロン液',
    },
    brand: 'Hada Labo',
    category: 'toner',
    ingredients: ['Water', 'Butylene Glycol', 'Glycerin', 'Sodium Hyaluronate', 'Hydrolyzed Hyaluronic Acid'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'normal'],
  },
  {
    barcode: '0655439020015',
    name: {
      'zh-TW': 'Paula\'s Choice 寶拉珍選 2%水楊酸精華液',
      'en': 'Paula\'s Choice 2% BHA Liquid Exfoliant',
      'ja': 'ポーラチョイス 2% BHA リキッド',
    },
    brand: 'Paula\'s Choice',
    category: 'serum',
    ingredients: ['Water', 'Methylpropanediol', 'Butylene Glycol', 'Salicylic Acid', 'Green Tea Extract'],
    safetyScore: 88,
    warnings: ['salicylic_acid'],
    goodFor: ['oily', 'acne', 'combination'],
  },
  {
    barcode: '3337875597197',
    name: {
      'zh-TW': 'CeraVe 適樂膚 長效修護安撫霜',
      'en': 'CeraVe Moisturizing Cream',
      'ja': 'セラヴィ モイスチャライジングクリーム',
    },
    brand: 'CeraVe',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Cetearyl Alcohol', 'Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Cholesterol', 'Hyaluronic Acid'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'eczema'],
  },
  {
    barcode: '4710987654012',
    name: {
      'zh-TW': '輕鬆美膚 ezskin 高濃度玻尿酸保濕凝膠',
      'en': 'ezskin High Potency Hydrating Gel',
      'ja': 'ezskin 高濃度ヒアルロン酸保湿ジェル',
    },
    brand: 'ezskin',
    category: 'serum',
    ingredients: ['Water', 'Hyaluronic Acid', 'Sodium Hyaluronate', 'Phenoxyethanol'],
    safetyScore: 99,
    warnings: [],
    goodFor: ['all', 'sensitive', 'acne'],
  },
  {
    barcode: '4713289011019',
    name: {
      'zh-TW': 'Dr.Satin 魚子角鯊奇蹟修復菁萃',
      'en': 'Dr.Satin Caviar Squalane Miracle Repairing Essence',
      'ja': 'Dr.Satin キャビアスクワランリペアエッセンス',
    },
    brand: 'Dr.Satin',
    category: 'serum',
    ingredients: ['Squalane', 'Cyclopentasiloxane', 'Caviar Extract', 'Vitamin E'],
    safetyScore: 91,
    warnings: ['silicone'],
    goodFor: ['dry', 'aging', 'damaged'],
  },
  {
    barcode: '4987241169689',
    name: {
      'zh-TW': '樂敦製藥 Melano CC 高純度維他命C亮白精華',
      'en': 'Mentholatum Melano CC Vitamin C Brightening Essence',
      'ja': 'メラノCC 薬用しみ 集中対策 美容液',
    },
    brand: 'Mentholatum',
    category: 'serum',
    ingredients: ['Ascorbic Acid', 'Tocopheryl Acetate', 'Dipotassium Glycyrrhizate', 'Isopropylmethylphenol'],
    safetyScore: 84,
    warnings: ['vitamin_c'],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4560410401015',
    name: {
      'zh-TW': 'OZIO 歐姬兒 蜂王乳凝露',
      'en': 'OZIO Royal Jelly Gel',
      'ja': 'オージオ ビューティーオープナージェル',
    },
    brand: 'OZIO',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Royal Jelly Extract', 'Honey', 'Squalane', 'Hyaluronic Acid'],
    safetyScore: 93,
    warnings: [],
    goodFor: ['aging', 'dry', 'normal'],
  },
  {
    barcode: '4894820000000',
    name: {
      'zh-TW': 'Target Pro by Watsons 全效美白淡斑精華',
      'en': 'Target Pro by Watsons Whitening & Dark Spot Serum',
      'ja': 'ターゲットプロ ホワイトニングセラム',
    },
    brand: 'Watsons',
    category: 'serum',
    ingredients: ['Water', 'Niacinamide', 'Tranexamic Acid', 'Ascorbyl Glucoside', 'Arbutin', 'Sodium Hyaluronate'],
    safetyScore: 89,
    warnings: [],
    goodFor: ['dull', 'spot', 'combination'],
  },
  {
    barcode: '8809611311018',
    name: {
      'zh-TW': 'AHC 超能玻尿酸肌亮機能水',
      'en': 'AHC Hyaluronic Dewy Radiance Toner',
      'ja': 'AHC ヒアルロニック トナー',
    },
    brand: 'AHC',
    category: 'toner',
    ingredients: ['Water', 'Glycerin', 'Niacinamide', 'Hyaluronic Acid', 'Glutathione', 'Silver Vine Extract'],
    safetyScore: 92,
    warnings: ['fragrance'],
    goodFor: ['dry', 'dehydrated', 'dull'],
  },
  {
    barcode: '4712852271012',
    name: {
      'zh-TW': '寵愛之名 三分子玻尿酸藍銅保濕生物纖維面膜',
      'en': 'For Beloved One Hyaluronic Acid GHK-Cu Moisturizing Bio-Cellulose Mask',
      'ja': 'フォービラブドワン ブルーカッパーマスク',
    },
    brand: 'For Beloved One',
    category: 'mask',
    ingredients: ['Water', 'Hyaluronic Acid', 'GHK-Cu', 'Malachite Extract', 'Sodium Hyaluronate'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['dry', 'aging', 'dehydrated'],
  },
  {
    barcode: '3606002532885',
    name: {
      'zh-TW': '理膚寶水 多容安舒緩保濕化妝水',
      'en': "La Roche-Posay Toleriane Dermallergo Fluid",
      'ja': 'ラロッシュポゼ トレリアン ダーマルジェロ フルイド',
    },
    brand: 'La Roche-Posay',
    category: 'toner',
    ingredients: ['Water', 'Glycerin', 'Niacinamide', 'Ceramide NP', 'Sodium Hyaluronate', 'Thermal Water'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'normal'],
  },
  {
    barcode: '3337872413036',
    name: {
      'zh-TW': '薇姿 89火山能量精華',
      'en': 'Vichy Mineral 89 Hyaluronic Acid Booster',
      'ja': 'ヴィシー ミネラル89 ヒアルロン酸ブースター',
    },
    brand: 'Vichy',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Hyaluronic Acid', 'Vichy Mineralizing Water', 'Citric Acid'],
    safetyScore: 92,
    warnings: [],
    goodFor: ['all', 'dry', 'dehydrated'],
  },
  {
    barcode: '4971710251444',
    name: {
      'zh-TW': '珂潤 浸潤保濕化妝水',
      'en': 'Curel Intensive Moisture Care Lotion',
      'ja': 'キュレル 潤浸保湿 化粧水',
    },
    brand: 'Curel',
    category: 'toner',
    ingredients: ['Water', 'Glycerin', 'Ceramide EOP', 'Ceramide NP', 'Ceramide AP', 'Allantoin'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'eczema'],
  },
  {
    barcode: '4901301326213',
    name: {
      'zh-TW': '資生堂 安耐曬金鑽高效防曬露',
      'en': 'Shiseido Anessa Perfect UV Sunscreen Skincare Milk',
      'ja': '資生堂 アネッサ パーフェクトUV スキンケアミルク',
    },
    brand: 'Shiseido',
    category: 'sunscreen',
    ingredients: ['Water', 'Alcohol', 'Ethylhexyl Methoxycinnamate', 'Zinc Oxide', 'Titanium Dioxide', 'Silica'],
    safetyScore: 75,
    warnings: ['alcohol', 'fragrance'],
    goodFor: ['oily', 'combination', 'outdoor'],
  },
  {
    barcode: '3337875816847',
    name: {
      'zh-TW': '理膚寶水 B5+全面修復霜',
      'en': 'La Roche-Posay Cicaplast Baume B5+',
      'ja': 'ラロッシュポゼ シカプラスト ボーム B5+',
    },
    brand: 'La Roche-Posay',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Panthenol', 'Shea Butter', 'Madecassoside', 'Thermal Water'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'damaged'],
  },
  {
    barcode: '8809403130185',
    name: {
      'zh-TW': 'COSRX 蝸牛 96 賦活黏液精華',
      'en': 'COSRX Advanced Snail 96 Mucin Power Essence',
      'ja': 'COSRX アドバンスド スネイル 96 ムチン パワーエッセンス',
    },
    brand: 'COSRX',
    category: 'serum',
    ingredients: ['Snail Secretion Filtrate', 'Betaine', 'Butylene Glycol', 'Sodium Hyaluronate', 'Panthenol'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['dry', 'acne', 'normal'],
  },
  {
    barcode: '8801042694929',
    name: {
      'zh-TW': '雪花秀 潤燥精華',
      'en': 'Sulwhasoo First Care Activating Serum',
      'ja': 'ソルファス ファーストケア アクティベーティング セラム',
    },
    brand: 'Sulwhasoo',
    category: 'serum',
    ingredients: ['Water', 'Alcohol Denat', 'Glycerin', 'Butylene Glycol', 'Jaum Activator', 'Fragrance'],
    safetyScore: 70,
    warnings: ['alcohol', 'fragrance'],
    goodFor: ['normal', 'combination'],
  },
  {
    barcode: '8809642710278',
    name: {
      'zh-TW': 'innisfree 綠茶籽保濕精華',
      'en': 'innisfree Green Tea Seed Serum',
      'ja': 'イニスフリー グリーンティーシード セラム',
    },
    brand: 'innisfree',
    category: 'serum',
    ingredients: ['Water', 'Green Tea Extract', 'Glycerin', 'Propanediol', 'Betaine', 'Squalane'],
    safetyScore: 88,
    warnings: ['fragrance'],
    goodFor: ['combination', 'oily', 'normal'],
  },
  {
    barcode: '4713575090012',
    name: {
      'zh-TW': '我的美麗日記 膠原蛋白彈力面膜',
      'en': 'My Beauty Diary Collagen Firming Mask',
      'ja': '私のきれい日記 コラーゲンマスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Soluble Collagen', 'Elastin', 'Sodium Hyaluronate', 'Tocopherol'],
    safetyScore: 93,
    warnings: [],
    goodFor: ['mature', 'dry', 'normal'],
  },
  {
    barcode: '4713575090227',
    name: {
      'zh-TW': '我的美麗日記 蘆薈舒緩保濕面膜',
      'en': 'My Beauty Diary Aloe Vera Soothing Mask',
      'ja': '私のきれい日記 アロエベラマスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Aloe Barbadensis Leaf Juice', 'Sodium Hyaluronate', 'Allantoin'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'sunburned'],
  },
  {
    barcode: '4713575090333',
    name: {
      'zh-TW': '我的美麗日記 熊果素極淨美白面膜',
      'en': 'My Beauty Diary Arbutin Brightening Mask',
      'ja': '私のきれい日記 アルブチン美白マスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Butylene Glycol', 'Arbutin', 'Magnesium Ascorbyl Phosphate', 'Sodium Hyaluronate'],
    safetyScore: 92,
    warnings: [],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4711542421041',
    name: {
      'zh-TW': 'NARUKO 紅薏仁超亮白面膜',
      'en': 'Naruko Raw Job\'s Tears Brightening Mask',
      'ja': 'ナルコ 紅薏仁美白マスク',
    },
    brand: 'Naruko',
    category: 'mask',
    ingredients: ['Water', 'Job\'s Tears Extract', 'Niacinamide', 'Tranexamic Acid', 'Sodium Hyaluronate'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['dull', 'combination', 'normal'],
  },
  {
    barcode: '4711542421058',
    name: {
      'zh-TW': 'NARUKO 紅薏仁超亮白精華液',
      'en': 'Naruko Raw Job\'s Tears Brightening Essence',
      'ja': 'ナルコ 紅薏仁美白エッセンス',
    },
    brand: 'Naruko',
    category: 'serum',
    ingredients: ['Water', 'Niacinamide', 'Tranexamic Acid', 'Job\'s Tears Extract', 'Sodium Hyaluronate'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4713361811012',
    name: {
      'zh-TW': '霓淨思 玻尿酸保濕原液',
      'en': 'Neogence Hyaluronic Acid Hydrating Serum',
      'ja': 'ネオジェンス ヒアルロン酸原液',
    },
    brand: 'Neogence',
    category: 'serum',
    ingredients: ['Water', 'Sodium Hyaluronate', 'Hyaluronic Acid', 'Phenoxyethanol'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['all', 'dry', 'sensitive'],
  },
  {
    barcode: '4713361811029',
    name: {
      'zh-TW': '霓淨思 HA9 低分子玻尿酸保濕面膜',
      'en': 'Neogence HA9 Moisturizing Mask',
      'ja': 'ネオジェンス HA9 保湿マスク',
    },
    brand: 'Neogence',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Sodium Hyaluronate', 'Hydrolyzed Hyaluronic Acid', 'Panthenol'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'normal'],
  },
  {
    barcode: '4712052504622',
    name: {
      'zh-TW': 'DR.WU 玻尿酸保濕精華液',
      'en': 'DR.WU Hyaluronic Acid Hydrating Essence',
      'ja': 'DR.WU ヒアルロン酸保湿エッセンス',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Sodium Hyaluronate', 'Hydrolyzed Hyaluronic Acid', 'Ceramide NP'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '4712052504127',
    name: {
      'zh-TW': 'DR.WU 角鯊潤澤修復精華油',
      'en': 'DR.WU Squalane Intensive Repairing Oil',
      'ja': 'DR.WU スクワラン修復オイル',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Squalane', 'Vitamin E', 'Argan Oil', 'Rosehip Oil'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['dry', 'aging', 'damaged'],
  },
  {
    barcode: '4712052504226',
    name: {
      'zh-TW': 'DR.WU 潤透光美白精華液',
      'en': 'DR.WU Glutalight Whitening Serum',
      'ja': 'DR.WU グルタライト美白エッセンス',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Water', 'Glutathione', 'Vitamin C', 'Niacinamide', 'Sodium Hyaluronate'],
    safetyScore: 92,
    warnings: [],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4712052504257',
    name: {
      'zh-TW': 'DR.WU 10%菸鹼醯胺B5舒緩精華',
      'en': 'DR.WU 10% Niacinamide B5 Soothing Serum',
      'ja': 'DR.WU 10%ナイアシンアミドB5エッセンス',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Water', 'Niacinamide', 'Panthenol', 'Sodium Hyaluronate', 'Allantoin'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['sensitive', 'acne', 'oily'],
  },
  {
    barcode: '4718009814592',
    name: {
      'zh-TW': '森田藥粧 全日極保濕精華液',
      'en': 'Dr. Morita Intense Hydrating Serum',
      'ja': '森田薬粧 極保湿美容液',
    },
    brand: 'Dr. Morita',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Sodium Hyaluronate', 'Panthenol', 'Ceramide NP'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['dry', 'normal', 'combination'],
  },
  {
    barcode: '4718009814608',
    name: {
      'zh-TW': '森田藥粧 傳明酸淡斑美白精華面膜',
      'en': 'Dr. Morita Tranexamic Acid Whitening Essence Mask',
      'ja': '森田薬粧 トラネキサム酸美白マスク',
    },
    brand: 'Dr. Morita',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Tranexamic Acid', 'Arbutin', 'Sodium Hyaluronate'],
    safetyScore: 93,
    warnings: [],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4711542421065',
    name: {
      'zh-TW': 'NARUKO 森玫瑰超水感保濕精華液',
      'en': 'Naruko Rose & Botanic HA Serum',
      'ja': 'ナルコ ローズ保湿エッセンス',
    },
    brand: 'Naruko',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Rose Water', 'Sodium Hyaluronate', 'Ceramide NP'],
    safetyScore: 94,
    warnings: ['fragrance'],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '4711542421089',
    name: {
      'zh-TW': 'NARUKO 京城之霜 青春修護精華',
      'en': 'Naruko Jing Cheng Face Renewal Miracle Essence',
      'ja': 'ナルコ 京城之霜 奇跡のエッセンス',
    },
    brand: 'Naruko',
    category: 'serum',
    ingredients: ['Water', 'Rice Ferment Filtrate', 'Yeast Extract', 'Niacinamide', 'Peptides'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['aging', 'normal', 'dry'],
  },
  {
    barcode: '4712852271036',
    name: {
      'zh-TW': '寵愛之名 20%杏仁酸亮白煥膚精華',
      'en': 'For Beloved One Mandelic Acid Serum 20%',
      'ja': 'フォービラブドワン マンデル酸 20%',
    },
    brand: 'For Beloved One',
    category: 'serum',
    ingredients: ['Water', 'Mandelic Acid', 'Butylene Glycol', 'Oat Extract', 'Sodium Hyaluronate'],
    safetyScore: 84,
    warnings: ['mandelic_acid'],
    goodFor: ['oily', 'acne', 'combination'],
  },
  {
    barcode: '4712953211024',
    name: {
      'zh-TW': '23.5°N 北緯23.5 紅薏仁白潤菁華',
      'en': '23.5°N Red Pearl Barley Brightening Serum',
      'ja': '23.5°N 紅薏仁美白エッセンス',
    },
    brand: '23.5°N',
    category: 'serum',
    ingredients: ['Water', 'Red Pearl Barley Extract', 'Job\'s Tears Extract', 'Sodium Hyaluronate'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['dull', 'normal', 'dry'],
  },
  {
    barcode: '4710108861241',
    name: {
      'zh-TW': 'Bioré 蜜妮 含水防曬保濕水凝乳 (大容量版)',
      'en': 'Biore UV Aqua Rich Watery Gel SPF50+',
      'ja': 'ビオレUV アクアリッチ ウォータリージェル',
    },
    brand: 'Biore',
    category: 'sunscreen',
    ingredients: ['Water', 'Alcohol', 'Methoxycinnamate', 'Titanium Dioxide', 'Hyaluronic Acid', 'Royal Jelly'],
    safetyScore: 76,
    warnings: ['alcohol', 'fragrance'],
    goodFor: ['all', 'body', 'outdoor'],
  },
  {
    barcode: '4710108861258',
    name: {
      'zh-TW': 'Bioré 蜜妮 深層淨透洗面乳 (炭深層)',
      'en': 'Biore Charcoal Deep Pore Cleanser',
      'ja': 'ビオレ 炭深層洗顔料',
    },
    brand: 'Biore',
    category: 'cleanser',
    ingredients: ['Water', 'Glycerin', 'Lauric Acid', 'Charcoal Powder', 'Menthol'],
    safetyScore: 82,
    warnings: ['menthol'],
    goodFor: ['oily', 'pores', 'teen'],
  },
  {
    barcode: '4710108861265',
    name: {
      'zh-TW': 'Bioré 蜜妮 溫和卸妝乳',
      'en': 'Biore Mild Cleansing Liquid',
      'ja': 'ビオレ マイルドクレンジングリキッド',
    },
    brand: 'Biore',
    category: 'cleanser',
    ingredients: ['Water', 'Glycerin', 'PEG-8 Glyceryl Isostearate', 'Butylene Glycol', 'Mineral Oil'],
    safetyScore: 88,
    warnings: ['fragrance'],
    goodFor: ['all', 'face', 'makeup'],
  },
  {
    barcode: '4710224121022',
    name: {
      'zh-TW': '自肌研 極潤潔面乳',
      'en': 'Hada Labo Gokujyun Hyaluronic Acid Face Wash',
      'ja': '肌ラボ 極潤 ヒアルロン洗顔',
    },
    brand: 'Hada Labo',
    category: 'cleanser',
    ingredients: ['Water', 'Glycerin', 'Sodium Cocoyl Glycinate', 'Sodium Hyaluronate', 'Hydrolyzed Hyaluronic Acid'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '4710224121039',
    name: {
      'zh-TW': '自肌研 白潤美白化粧水',
      'en': 'Hada Labo Shirojyun Whitening Lotion',
      'ja': '肌ラボ 白潤 美白化粧水',
    },
    brand: 'Hada Labo',
    category: 'toner',
    ingredients: ['Water', 'Tranexamic Acid', 'Magnesium Ascorbyl Phosphate', 'Sodium Hyaluronate', 'Vitamin E'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '0655439020022',
    name: {
      'zh-TW': 'Paula\'s Choice 寶拉珍選 10%B3菸鹼醯胺精華液',
      'en': 'Paula\'s Choice 10% Niacinamide Booster',
      'ja': 'ポーラチョイス 10% ナイアシンアミド',
    },
    brand: 'Paula\'s Choice',
    category: 'serum',
    ingredients: ['Water', 'Niacinamide', 'Acetyl Glucosamine', 'Ascorbyl Glucoside', 'Sodium Hyaluronate'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['oily', 'pores', 'dull'],
  },
  {
    barcode: '3337875597203',
    name: {
      'zh-TW': 'CeraVe 適樂膚 溫和泡沫潔膚露',
      'en': 'CeraVe Hydrating Facial Cleanser',
      'ja': 'セラヴィ ハイドレーティング クレンザー',
    },
    brand: 'CeraVe',
    category: 'cleanser',
    ingredients: ['Water', 'Glycerin', 'Cetearyl Alcohol', 'Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Hyaluronic Acid'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'eczema'],
  },
  {
    barcode: '3337875598019',
    name: {
      'zh-TW': '理膚寶水 淨痘無瑕極效精華',
      'en': 'La Roche-Posay Effaclar Duo+',
      'ja': 'ラロッシュポゼ エファクラ Duo+',
    },
    brand: 'La Roche-Posay',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Niacinamide', 'Salicylic Acid', 'Zinc PCA', 'Procerad'],
    safetyScore: 82,
    warnings: ['salicylic_acid'],
    goodFor: ['acne', 'oily', 'combination'],
  },
  {
    barcode: '3337875598033',
    name: {
      'zh-TW': '理膚寶水 B5彈潤修復精華',
      'en': 'La Roche-Posay Hyalu B5 Serum',
      'ja': 'ラロッシュポゼ B5セラム',
    },
    brand: 'La Roche-Posay',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Alcohol Denat', 'Panthenol', 'Hyaluronic Acid', 'Madecassoside'],
    safetyScore: 86,
    warnings: ['alcohol', 'fragrance'],
    goodFor: ['dry', 'aging', 'damaged'],
  },
  {
    barcode: '4712852281028',
    name: {
      'zh-TW': 'divinia 蒂芬妮亞 胺基酸深層卸妝乳',
      'en': 'Divinia Amino Acid Deep Cleansing Milk',
      'ja': 'ディビニア アミノ酸クレンジングミルク',
    },
    brand: 'Divinia',
    category: 'cleanser',
    ingredients: ['Water', 'Glycerin', 'Sodium Cocoyl Glycinate', 'Cetyl Alcohol', 'Sodium Hyaluronate'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['all', 'sensitive', 'normal'],
  },
  {
    barcode: '4712852311014',
    name: {
      'zh-TW': 'Timeless Truth Mask 提提研 角鯊烷輕乳霜面膜',
      'en': 'Timeless Truth Mask Squalane Mask',
      'ja': 'TTM スクワランマスク',
    },
    brand: 'Timeless Truth Mask',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Squalane', 'Sodium Hyaluronate', 'Panthenol'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '4712852331012',
    name: {
      'zh-TW': '未來美 能量型保濕面膜',
      'en': 'Mirae Aqua NMF Mask',
      'ja': 'ミライ NMFマスク',
    },
    brand: 'Mirae',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Sodium Hyaluronate', 'Panthenol', 'Ceramide NP'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'sensitive'],
  },
  {
    barcode: '4712052504639',
    name: {
      'zh-TW': 'DR.WU 玻尿酸保濕精華乳',
      'en': 'DR.WU Hyaluronic Acid Hydrating Lotion',
      'ja': 'DR.WU ヒアルロン酸保湿乳液',
    },
    brand: 'DR.WU',
    category: 'moisturizer',
    ingredients: ['Water', 'Glycerin', 'Squalane', 'Sodium Hyaluronate', 'Ceramide NP'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '4712052504158',
    name: {
      'zh-TW': 'DR.WU 維他命C微導美白精華液',
      'en': 'DR.WU Vitamin C Whitening Serum',
      'ja': 'DR.WU ビタミンC美白エッセンス',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Water', 'Vitamin C', 'Glutathione', 'Sodium Hyaluronate', 'Allantoin'],
    safetyScore: 90,
    warnings: ['vitamin_c'],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4712052504172',
    name: {
      'zh-TW': 'DR.WU 玻尿酸保濕微導面膜',
      'en': 'DR.WU Intensive Hydrating Mask',
      'ja': 'DR.WU ヒアルロン酸保湿マスク',
    },
    brand: 'DR.WU',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Sodium Hyaluronate', 'Hydrolyzed Hyaluronic Acid', 'Ceramide AP'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'sensitive'],
  },
  {
    barcode: '4712052504318',
    name: {
      'zh-TW': 'DR.WU 杏仁酸亮白煥膚身體乳',
      'en': 'DR.WU Mandelic Acid Renewal Body Lotion',
      'ja': 'DR.WU マンデル酸ボディーローション',
    },
    brand: 'DR.WU',
    category: 'body_lotion',
    ingredients: ['Water', 'Mandelic Acid', 'Salicylic Acid', 'Vitamin E', 'Shea Butter'],
    safetyScore: 82,
    warnings: ['mandelic_acid', 'salicylic_acid'],
    goodFor: ['body', 'acne', 'rough_skin'],
  },
  {
    barcode: '4713361811081',
    name: {
      'zh-TW': '霓淨思 極透光亮白淡斑精華',
      'en': 'Neogence Brightening Spot Corrector',
      'ja': 'ネオジェンス ホワイトニングセラム',
    },
    brand: 'Neogence',
    category: 'serum',
    ingredients: ['Water', 'Ethyl Ascorbic Acid', 'Salicylic Acid', 'Sodium Hyaluronate', 'Allantoin'],
    safetyScore: 88,
    warnings: ['salicylic_acid'],
    goodFor: ['dull', 'spot', 'combination'],
  },
  {
    barcode: '4713361811098',
    name: {
      'zh-TW': '霓淨思 18%杏仁酸透亮煥膚精華',
      'en': 'Neogence 18% Mandelic Acid Serum',
      'ja': 'ネオジェンス マンデル酸 18%',
    },
    brand: 'Neogence',
    category: 'serum',
    ingredients: ['Water', 'Mandelic Acid', 'Propylene Glycol', 'Sodium Hyaluronate'],
    safetyScore: 85,
    warnings: ['mandelic_acid'],
    goodFor: ['oily', 'acne', 'combination'],
  },
  {
    barcode: '4713361811111',
    name: {
      'zh-TW': '霓淨思 1.8%超效逆時A醇精華',
      'en': 'Neogence 1.8% Retinol Renewal Serum',
      'ja': 'ネオジェンス レチノール 1.8%',
    },
    brand: 'Neogence',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Retinol', 'Bakuchiol', 'Hyaluronic Acid'],
    safetyScore: 78,
    warnings: ['retinol'],
    goodFor: ['aging', 'normal', 'combination'],
  },
  {
    barcode: '4711542421027',
    name: {
      'zh-TW': 'NARUKO 茶樹抗痘粉刺調理乳',
      'en': 'Naruko Tea Tree Blemish Clear Lotion',
      'ja': 'ナルコ ティーツリーローション',
    },
    brand: 'Naruko',
    category: 'moisturizer',
    ingredients: ['Water', 'Salicylic Acid', 'Tea Tree Oil', 'Gluconolactone', 'Zinc PCA'],
    safetyScore: 80,
    warnings: ['salicylic_acid', 'tea_tree_oil'],
    goodFor: ['oily', 'acne', 'combination'],
  },
  {
    barcode: '4711542421034',
    name: {
      'zh-TW': 'NARUKO 茶樹神奇痘痘油',
      'en': 'Naruko Tea Tree Blemish Clear Oil',
      'ja': 'ナルコ ティーツリーオイル',
    },
    brand: 'Naruko',
    category: 'serum',
    ingredients: ['Tea Tree Oil', 'Salicylic Acid', 'Alcohol Denat', 'Phytoferulin'],
    safetyScore: 72,
    warnings: ['tea_tree_oil', 'salicylic_acid', 'alcohol'],
    goodFor: ['acne', 'spot', 'oily'],
  },
  {
    barcode: '4711542421072',
    name: {
      'zh-TW': 'NARUKO 白玉蘭鑽采超亮白乳液',
      'en': 'Naruko Magnolia EX Brightening Lotion',
      'ja': 'ナルコ マグノリア美白乳液',
    },
    brand: 'Naruko',
    category: 'moisturizer',
    ingredients: ['Water', 'Niacinamide', 'Tranexamic Acid', 'Magnolia Extract', 'Sodium Hyaluronate'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['dull', 'dry', 'normal'],
  },
  {
    barcode: '4713575090228',
    name: {
      'zh-TW': '我的美麗日記納豆發酵保濕面膜',
      'en': 'My Beauty Diary Natto Moisturizing Mask',
      'ja': '私のきれい日記 納豆マスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Natto Extract', 'Sodium Hyaluronate', 'Centella Asiatica Extract'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'normal'],
  },
  {
    barcode: '4713575090662',
    name: {
      'zh-TW': '我的美麗日記 角鯊烷修護保濕面膜',
      'en': 'My Beauty Diary Squalane Restorative Mask',
      'ja': '私のきれい日記 スクワラン修復マスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Squalane', 'Sodium Hyaluronate', 'Panthenol'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'damaged'],
  },
  {
    barcode: '4718009814615',
    name: {
      'zh-TW': '森田藥粧 茶樹涼感控油面膜',
      'en': 'Dr. Morita Tea Tree Cooling Mask',
      'ja': '森田薬粧 ティーツリー冷却マスク',
    },
    brand: 'Dr. Morita',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Tea Tree Oil', 'Menthol', 'Salicylic Acid'],
    safetyScore: 81,
    warnings: ['tea_tree_oil', 'menthol', 'salicylic_acid'],
    goodFor: ['oily', 'acne', 'teen'],
  },
  {
    barcode: '4718009814622',
    name: {
      'zh-TW': '森田藥粧 神經醯胺保濕乳液',
      'en': 'Dr. Morita Ceramide Moisturizing Lotion',
      'ja': '森田薬粧 セラミド保湿乳液',
    },
    brand: 'Dr. Morita',
    category: 'moisturizer',
    ingredients: ['Water', 'Glycerin', 'Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Sodium Hyaluronate'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '4712852271029',
    name: {
      'zh-TW': '寵愛之名 亮白淨化生物纖維面膜',
      'en': 'For Beloved One Melasleep Brightening Mask',
      'ja': 'フォービラブドワン メラスリープマスク',
    },
    brand: 'For Beloved One',
    category: 'mask',
    ingredients: ['Water', 'Niacinamide', 'Tranexamic Acid', 'Mandarin Orange Extract', 'Sodium Hyaluronate'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4712852271043',
    name: {
      'zh-TW': '寵愛之名 抗皺神經醯胺角鯊烷精華',
      'en': 'For Beloved One Advanced Anti-Aging Serum',
      'ja': 'フォービラブドワン 抗皺エッセンス',
    },
    brand: 'For Beloved One',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Ceramide NP', 'Squalane', 'Peptides'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['aging', 'dry', 'normal'],
  },
  {
    barcode: '4712953211031',
    name: {
      'zh-TW': '23.5°N 北緯23.5 桂竹超保濕水凝霜',
      'en': '23.5°N Bamboo Ultra Hydrating Gel Mask',
      'ja': '23.5°N 桂竹保湿ジェルマスク',
    },
    brand: '23.5°N',
    category: 'mask',
    ingredients: ['Water', 'Bamboo Extract', 'Sodium Hyaluronate', 'Glycerin', 'Cucumber Extract'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['dry', 'normal', 'combination'],
  },
  {
    barcode: '4712953211048',
    name: {
      'zh-TW': '23.5°N 北緯23.5 米粹舒緩活酵精華露',
      'en': '23.5°N Rice Soothing Active Essence',
      'ja': '23.5°N お米のエッセンス',
    },
    brand: '23.5°N',
    category: 'serum',
    ingredients: ['Water', 'Rice Extract', 'Rice Ferment Filtrate', 'Sodium Hyaluronate', 'Butylene Glycol'],
    safetyScore: 99,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'dull'],
  },
  {
    barcode: '4710108861272',
    name: {
      'zh-TW': 'Bioré 蜜妮 抗痘保濕洗顏慕斯',
      'en': 'Biore Marshmallow Whip Facial Wash',
      'ja': 'ビオレ マシュマロホイップ',
    },
    brand: 'Biore',
    category: 'cleanser',
    ingredients: ['Water', 'Glycerin', 'Potassium Stearate', 'Isopropylmethylphenol', 'Fragrance'],
    safetyScore: 86,
    warnings: ['fragrance'],
    goodFor: ['acne', 'oily', 'teen'],
  },
  {
    barcode: '4710224121046',
    name: {
      'zh-TW': '自肌研 極潤金緻特濃保濕精華水',
      'en': 'Hada Labo Gokujyun Premium Lotion',
      'ja': '肌ラボ 極潤プレミアム ヒアルロン液',
    },
    brand: 'Hada Labo',
    category: 'toner',
    ingredients: ['Water', 'Glycerin', 'Sodium Hyaluronate', 'Hydrolyzed Hyaluronic Acid', 'Urea'],
    safetyScore: 92,
    warnings: ['urea'],
    goodFor: ['extremely_dry', 'dry', 'normal'],
  },
  {
    barcode: '0655439020039',
    name: {
      'zh-TW': 'Paula\'s Choice 寶拉珍選 C15緊緻亮采精華液',
      'en': 'Paula\'s Choice C15 Super Booster',
      'ja': 'ポーラチョイス C15 ブースター',
    },
    brand: 'Paula\'s Choice',
    category: 'serum',
    ingredients: ['Water', 'Ascorbic Acid', 'Ferulic Acid', 'Vitamin E', 'Sodium Hyaluronate'],
    safetyScore: 88,
    warnings: ['vitamin_c'],
    goodFor: ['dull', 'aging', 'spot'],
  },
  {
    barcode: '0655439020053',
    name: {
      'zh-TW': 'Paula\'s Choice 寶拉珍選 修護霜',
      'en': 'Paula\'s Choice Skin Recovery Replenishing Moisturizer',
      'ja': 'ポーラチョイス 修復クリーム',
    },
    brand: 'Paula\'s Choice',
    category: 'moisturizer',
    ingredients: ['Water', 'Glycerin', 'Evening Primrose Oil', 'Sodium Hyaluronate', 'Ceramide NP'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'sensitive', 'normal'],
  },
  {
    barcode: '3337875597234',
    name: {
      'zh-TW': 'CeraVe 適樂膚 夜間修護保濕乳',
      'en': 'CeraVe PM Facial Moisturizing Lotion',
      'ja': 'セラヴィ PM ローション',
    },
    brand: 'CeraVe',
    category: 'moisturizer',
    ingredients: ['Water', 'Glycerin', 'Niacinamide', 'Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Hyaluronic Acid'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['all', 'face', 'night'],
  },
  {
    barcode: '3337875598040',
    name: {
      'zh-TW': '理膚寶水 C10肌光活膚精華',
      'en': 'La Roche-Posay Pure Vitamin C10 Serum',
      'ja': 'ラロッシュポゼ C10セラム',
    },
    brand: 'La Roche-Posay',
    category: 'serum',
    ingredients: ['Water', 'Ascorbic Acid', 'Glycerin', 'Adenosine', 'Salicylic Acid'],
    safetyScore: 84,
    warnings: ['vitamin_c', 'salicylic_acid'],
    goodFor: ['dull', 'spot', 'normal'],
  },
  {
    barcode: '4713289011026',
    name: {
      'zh-TW': 'Dr.Satin 魚子高水感保濕菁露',
      'en': 'Dr.Satin Caviar High Moisture Lotion',
      'ja': 'Dr.Satin キャビア高保湿ローション',
    },
    brand: 'Dr.Satin',
    category: 'toner',
    ingredients: ['Water', 'Glycerin', 'Caviar Extract', 'Sodium Hyaluronate', 'Honey'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'normal'],
  },
  {
    barcode: '8809611311025',
    name: {
      'zh-TW': 'AHC 瞬效保濕B5微導化妝水',
      'en': 'AHC Premium Hydra B5 Soothing Toner',
      'ja': 'AHC B5 トナー',
    },
    brand: 'AHC',
    category: 'toner',
    ingredients: ['Water', 'Glycerin', 'Panthenol', 'Sodium Hyaluronate', 'Centella Asiatica Extract'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'dehydrated'],
  },
  {
    barcode: '4712852291010',
    name: {
      'zh-TW': 'Skin Advanced 卓沿白金 舒緩保濕霜',
      'en': 'Skin Advanced Rejuvenating Cream',
      'ja': 'スキンアドバンス 修復クリーム',
    },
    brand: 'Skin Advanced',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Squalane', 'Ceramide NP', 'Sodium Hyaluronate'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'damaged'],
  },
  {
    barcode: '4712852301015',
    name: {
      'zh-TW': 'PSK 深海美肌專家 物理性潤色防曬霜',
      'en': 'PSK Physical Illuminating Sunscreen',
      'ja': 'PSK 物理性日焼け止め',
    },
    brand: 'PSK',
    category: 'sunscreen',
    ingredients: ['Water', 'Zinc Oxide', 'Titanium Dioxide', 'Sorbitan Olivate', 'Coconut Oil'],
    safetyScore: 88,
    warnings: ['coconut_oil'],
    goodFor: ['sensitive', 'outdoor', 'normal'],
  },
  {
    barcode: '4712852321013',
    name: {
      'zh-TW': 'Unitary 金盞花溫和潔面慕斯',
      'en': 'Unitary Calendula Cleansing Mousse',
      'ja': 'Unitary カレンデュラ洗顔慕斯',
    },
    brand: 'Unitary',
    category: 'cleanser',
    ingredients: ['Water', 'Cocamidopropyl Betaine', 'Calendula Extract', 'Glycerin', 'Allantoin'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['sensitive', 'teen', 'normal'],
  },
  {
    barcode: '8806085910302',
    name: {
      'zh-TW': '蘭芝 水酷肌因保濕精華 (清爽型)',
      'en': 'Laneige Water Bank Blue Hyaluronic Serum (Oily)',
      'ja': 'ラネージュ ウォーターバンク セラム (清爽)',
    },
    brand: 'Laneige',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Hyaluronic Acid', 'Sea Water', 'Niacinamide'],
    safetyScore: 92,
    warnings: ['fragrance'],
    goodFor: ['oily', 'combination', 'normal'],
  },
  {
    barcode: '4710108861289',
    name: {
      'zh-TW': 'Bioré 蜜妮 潤色隔離防曬乳液',
      'en': 'Biore UV Color Control Milk',
      'ja': 'ビオレUV カラーコントロールミルク',
    },
    brand: 'Biore',
    category: 'sunscreen',
    ingredients: ['Water', 'Cyclopentasiloxane', 'Zinc Oxide', 'Titanium Dioxide', 'Talc'],
    safetyScore: 85,
    warnings: ['silicone', 'talc'],
    goodFor: ['all', 'face', 'makeup_base'],
  },
  {
    barcode: '4710108861296',
    name: {
      'zh-TW': 'Bioré 蜜妮 淨嫩洗身體乳 (櫻花香)',
      'en': 'Biore Body Wash Sakura Fragrance',
      'ja': 'ビオレ ボディウォッシュ 桜の香り',
    },
    brand: 'Biore',
    category: 'body_wash',
    ingredients: ['Water', 'Lauric Acid', 'Potassium Hydroxide', 'Fragrance', 'Sakura Extract'],
    safetyScore: 84,
    warnings: ['fragrance'],
    goodFor: ['body', 'all'],
  },
  {
    barcode: '4712052504646',
    name: {
      'zh-TW': 'DR.WU 玻尿酸保濕潔顏露',
      'en': 'DR.WU Hyaluronic Acid Hydrating Cleanser',
      'ja': 'DR.WU ヒアルロン酸洗顔フォーム',
    },
    brand: 'DR.WU',
    category: 'cleanser',
    ingredients: ['Water', 'Sodium Lauroyl Glutamate', 'Glycerin', 'Sodium Hyaluronate'],
    safetyScore: 98,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'normal'],
  },
  {
    barcode: '4712052504653',
    name: {
      'zh-TW': 'DR.WU 玻尿酸保濕精華液 (重量版)',
      'en': 'DR.WU Hyaluronic Acid Hydrating Essence (Jumbo)',
      'ja': 'DR.WU ヒアルロン酸保湿エッセンス (大)',
    },
    brand: 'DR.WU',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Sodium Hyaluronate', 'Hydrolyzed Hyaluronic Acid', 'Ceramide NP'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'sensitive'],
  },
  {
    barcode: '4713361811128',
    name: {
      'zh-TW': '霓淨思 玻尿酸保濕潤澤乳霜',
      'en': 'Neogence Hyaluronic Acid Deeply Moisturizing Cream',
      'ja': 'ネオジェンス ヒアルロン酸保湿クリーム',
    },
    brand: 'Neogence',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Caprylic/Capric Triglyceride', 'Sodium Hyaluronate', 'Ceramide NP'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['extremely_dry', 'dry', 'sensitive'],
  },
  {
    barcode: '4713361811135',
    name: {
      'zh-TW': '霓淨思 水漾超保濕好氣色面膜',
      'en': 'Neogence Hydra-Glow Moisturizing Mask',
      'ja': 'ネオジェンス 保湿美肌マスク',
    },
    brand: 'Neogence',
    category: 'mask',
    ingredients: ['Water', 'Butylene Glycol', 'Sodium Hyaluronate', 'Vitamin B12', 'Centella Asiatica Extract'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['dry', 'dull', 'combination'],
  },
  {
    barcode: '4711542421096',
    name: {
      'zh-TW': 'NARUKO 茶樹抗痘粉刺速效修護液',
      'en': 'Naruko Tea Tree Blemish Clear Spot Treatment',
      'ja': 'ナルコ ティーツリースポット',
    },
    brand: 'Naruko',
    category: 'serum',
    ingredients: ['Water', 'Alcohol Denat', 'Salicylic Acid', 'Tea Tree Oil', 'Phytoferulin'],
    safetyScore: 78,
    warnings: ['alcohol', 'salicylic_acid', 'tea_tree_oil'],
    goodFor: ['acne', 'spot', 'oily'],
  },
  {
    barcode: '4711542421102',
    name: {
      'zh-TW': 'NARUKO 森玫瑰超水感保濕精華乳',
      'en': 'Naruko Rose & Botanic HA Aqua Cubic Complex',
      'ja': 'ナルコ ローズ保湿乳液',
    },
    brand: 'Naruko',
    category: 'moisturizer',
    ingredients: ['Water', 'Glycerin', 'Squalane', 'Rose Water', 'Sodium Hyaluronate'],
    safetyScore: 94,
    warnings: ['fragrance'],
    goodFor: ['dry', 'normal', 'sensitive'],
  },
  {
    barcode: '4713575090029',
    name: {
      'zh-TW': '我的美麗日記 官燕窩全效修護面膜',
      'en': 'My Beauty Diary Bird\'s Nest Mask',
      'ja': '私のきれい日記 燕の巣マスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Bird\'s Nest Extract', 'Centella Asiatica Extract', 'Sodium Hyaluronate'],
    safetyScore: 95,
    warnings: [],
    goodFor: ['aging', 'dry', 'damaged'],
  },
  {
    barcode: '4713575090334',
    name: {
      'zh-TW': '我的美麗日記 墨西哥納塔仙人掌面膜',
      'en': 'My Beauty Diary Mexico Cactus Mask',
      'ja': '私のきれい日記 サボテンマスク',
    },
    brand: 'My Beauty Diary',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Cactus Extract', 'Hydrolyzed Hyaluronic Acid', 'Allantoin'],
    safetyScore: 96,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'sensitive'],
  },
];

// Ingredient safety database
export const ingredientSafety: Record<string, {
  safety: 'safe' | 'caution' | 'warning';
  zhName: string;
  description: {
    'zh-TW': string;
    'en': string;
    'ja': string;
  };
}> = {
  'Water': {
    safety: 'safe',
    zhName: '水',
    description: {
      'zh-TW': '安全基底成分',
      'en': 'Safe base ingredient',
      'ja': '安全なベース成分',
    },
  },
  'Glycerin': {
    safety: 'safe',
    zhName: '甘油',
    description: {
      'zh-TW': '優秀保濕劑，適合所有膚質',
      'en': 'Excellent humectant, suitable for all skin types',
      'ja': '優れた保湿剤、すべての肌タイプに適しています',
    },
  },
  'Hyaluronic Acid': {
    safety: 'safe',
    zhName: '玻尿酸 / 透明質酸',
    description: {
      'zh-TW': '強效保濕成分，可吸收1000倍水分',
      'en': 'Powerful hydrator, can hold 1000x its weight in water',
      'ja': '強力な保湿成分、1000倍の水分を保持できます',
    },
  },
  'Niacinamide': {
    safety: 'safe',
    zhName: '菸鹼醯胺 / 維生素B3',
    description: {
      'zh-TW': '維生素B3，改善膚色、縮小毛孔，對青少年油脂分泌有幫助',
      'en': 'Vitamin B3, improves skin tone and minimizes pores, helpful for teen sebum',
      'ja': 'ビタミンB3、肌のトーンを改善し、毛穴を最小化します',
    },
  },
  'Ceramide NP': {
    safety: 'safe',
    zhName: '神經醯胺 NP',
    description: {
      'zh-TW': '天然保濕因子，強化肌膚屏障',
      'en': 'Natural moisturizing factor, strengthens skin barrier',
      'ja': '天然保湿因子、肌のバリアを強化します',
    },
  },
  'Ceramide EOP': {
    safety: 'safe',
    zhName: '神經醯胺 EOP',
    description: {
      'zh-TW': '天然保濕因子，強化肌膚屏障',
      'en': 'Natural moisturizing factor, strengthens skin barrier',
      'ja': '天然保湿因子、肌のバリアを強化します',
    },
  },
  'Ceramide AP': {
    safety: 'safe',
    zhName: '神經醯胺 AP',
    description: {
      'zh-TW': '天然保濕因子，強化肌膚屏障',
      'en': 'Natural moisturizing factor, strengthens skin barrier',
      'ja': '天然保湿因子、肌のバリアを強化します',
    },
  },
  'Salicylic Acid': {
    safety: 'caution',
    zhName: '水楊酸',
    description: {
      'zh-TW': '去角質成分，青少年痘痘常用但不可過量，可能導致過度乾燥',
      'en': 'BHA exfoliant, common for teen acne but avoid overuse to prevent dryness',
      'ja': 'BHAピーリング成分、ニキビに効果的ですが過剰使用に注意',
    },
  },
  'Alcohol Denat': {
    safety: 'warning',
    zhName: '變性酒精',
    description: {
      'zh-TW': '變性酒精，對青少年嫩弱肌膚可能過於刺激，導致屏障受損',
      'en': 'Denatured alcohol, may be too harsh for teen skin and damage barrier',
      'ja': '変性アルコール、刺激し肌を乾燥させる可能性があります',
    },
  },
  'Fragrance': {
    safety: 'caution',
    zhName: '香料',
    description: {
      'zh-TW': '香料，對敏感肌及青少年容易引起不必要的過敏反應',
      'en': 'Fragrance, common source of irritation for sensitive and teen skin',
      'ja': '香料、敏感肌に刺激を与える可能性があります',
    },
  },
  'Retinol': {
    safety: 'warning',
    zhName: 'A醇 / 視黃醇',
    description: {
      'zh-TW': '強效抗老成分，對青少年肌膚太過刺激且非必要，容易導致脫皮',
      'en': 'Anti-aging active, too strong and unnecessary for teen skin, causes peeling',
      'ja': 'ビタミンA、抗老化ですが刺激を与える可能性があります',
    },
  },
  'AHA (Glycolic Acid)': {
    safety: 'caution',
    zhName: '甘醇酸 / 果酸',
    description: {
      'zh-TW': '果酸去角質，青少年肌膚較薄，使用高濃度需謹慎',
      'en': 'AHA exfoliant, teen skin is thinner, use high concentrations with caution',
      'ja': 'AHAピーリング、高濃度での使用には注意が必要です',
    },
  },
  'Phenoxyethanol': {
    safety: 'safe',
    zhName: '苯氧乙醇',
    description: {
      'zh-TW': '通用防腐劑，添加量通常在1%以下，對大多數人安全',
      'en': 'Common preservative, safe for most in concentrations below 1%',
      'ja': '一般的な防腐剤、ほとんどの人に安全です',
    },
  },
  'Parabens': {
    safety: 'caution',
    zhName: '對羥基苯甲酸酯 (防腐劑)',
    description: {
      'zh-TW': '傳統防腐劑，具爭議性，青少年建議減少長期接觸',
      'en': 'Controversial preservative, recommended to limit long-term exposure for teens',
      'ja': '物議を醸している防腐剤、長期曝露を避けるのが賢明です',
    },
  },
  'SLS (Sodium Lauryl Sulfate)': {
    safety: 'warning',
    zhName: '十二烷基硫酸鈉 (界面活性劑)',
    description: {
      'zh-TW': '強力清潔劑，容易帶走青少年肌膚必要的油脂，造成刺激',
      'en': 'Strong surfactant, can strip essential oils from teen skin causing irritation',
      'ja': '強力な洗浄剤、刺激を与える可能性があります',
    },
  },
  'Titanium Dioxide': {
    safety: 'safe',
    zhName: '二氧化鈦',
    description: {
      'zh-TW': '物理防曬成分，溫和不刺激，非常適合青少年使用',
      'en': 'Physical sunscreen, gentle and non-irritating, great for teen skin',
      'ja': '二酸化チタン、物理的日焼け止め成分',
    },
  },
  'Zinc Oxide': {
    safety: 'safe',
    zhName: '氧化鋅',
    description: {
      'zh-TW': '物理防曬成分，安全性高且具舒緩效果，推薦青少年使用',
      'en': 'Physical sunscreen, highly safe and soothing, recommended for teens',
      'ja': '酸化亜鉛、物理的日焼け止め成分',
    },
  },
  'Aloe Vera': {
    safety: 'safe',
    zhName: '蘆薈萃取',
    description: {
      'zh-TW': '天然保濕舒緩，受傷或曬後肌膚首選',
      'en': 'Natural soothing and hydrating, ideal for irritated or sun-exposed skin',
      'ja': 'アロエベラエキス、肌を落ち着かせます',
    },
  },
  'Sodium Hyaluronate': {
    safety: 'safe',
    zhName: '玻尿酸鈉',
    description: {
      'zh-TW': '保濕鎖水，改善乾燥',
      'en': 'Hydrating and moisture-locking, improves dryness',
      'ja': 'ヒアルロン酸Na、乾燥を改善します',
    },
  },
  'Panthenol': {
    safety: 'safe',
    zhName: '泛醇 / 維生素B5',
    description: {
      'zh-TW': '強大的修復與保濕成分，適合青少年修補屏障',
      'en': 'Powerful repairing and hydrating ingredient, helps skin barrier',
      'ja': 'ビタミンB5、修復と保湿に優れています',
    },
  },
  'Tocopherol': {
    safety: 'safe',
    zhName: '維生素E / 生育酚',
    description: {
      'zh-TW': '抗氧化維生素，保護肌膚免受環境傷害',
      'en': 'Antioxidant vitamin, protects skin from environmental damage',
      'ja': 'ビタミンE、抗酸化作用があります',
    },
  },
  'Squalane': {
    safety: 'safe',
    zhName: '角鯊烷',
    description: {
      'zh-TW': '親膚性極佳的油脂，清爽不致痘，適合多數青少年',
      'en': 'Skin-friendly oil, non-comedogenic and great for most teens',
      'ja': 'スクワラン、肌に馴染みやすく非コメドジェニックです',
    },
  },
  'Shea Butter': {
    safety: 'safe',
    zhName: '乳木果油',
    description: {
      'zh-TW': '滋潤保濕，適合乾燥肌膚使用',
      'en': 'Nourishing and moisturizing, ideal for dry skin',
      'ja': 'シアバター、乾燥肌に適しています',
    },
  },
  'Allantoin': {
    safety: 'safe',
    zhName: '尿囊素',
    description: {
      'zh-TW': '抗敏、抗發炎，溫和促進傷口癒合',
      'en': 'Anti-allergic and anti-inflammatory, gently promotes healing',
      'ja': 'アラントイン、抗炎症作用があります',
    },
  },
  'Bisabolol': {
    safety: 'safe',
    zhName: '沒藥醇',
    description: {
      'zh-TW': '洋甘菊提取物，對青少年紅腫肌膚有很好的穩定效果',
      'en': 'Chamomile derivative, provides excellent stability for inflamed skin',
      'ja': 'ビサボロール、炎症を抑えます',
    },
  },
  'Green Tea Extract': {
    safety: 'safe',
    zhName: '綠茶萃取',
    description: {
      'zh-TW': '抗氧化、控油，對青少年油脂分泌有益',
      'en': 'Antioxidant and oil-control, beneficial for teen sebum production',
      'ja': '緑茶エキス、抗酸化と皮脂コントロール',
    },
  },
  'Witch Hazel': {
    safety: 'caution',
    zhName: '金縷梅',
    description: {
      'zh-TW': '收斂成分但通常含酒精，對青少年可能過於刺激',
      'en': 'Astringent, but often contains alcohol, can be over-stripping for teens',
      'ja': 'ウィッチヘーゼル、収れん作用がありますが刺激になることも',
    },
  },
  'Tea Tree Oil': {
    safety: 'caution',
    zhName: '茶樹精油',
    description: {
      'zh-TW': '天然抗菌，但純油對青少年嬌嫩肌膚可能灼傷，需稀釋',
      'en': 'Natural antibacterial, but pure oil can burn teen skin; must be diluted',
      'ja': 'ティーツリーオイル、抗菌ですが高濃度には注意',
    },
  },
  'Triclosan': {
    safety: 'warning',
    zhName: '三氯沙 (抗菌劑)',
    description: {
      'zh-TW': '具爭議的抗菌劑，可能影響賀爾蒙分泌，青少年應避免',
      'en': 'Controversial antibacterial agent, may interfere with hormones, avoid for teens',
      'ja': 'トリクロサン、ホルモンバランスへの影響が懸念されます',
    },
  },
  'Oxybenzone': {
    safety: 'warning',
    zhName: '二苯甲酮-3 (化學防曬)',
    description: {
      'zh-TW': '具爭議的化學防曬，高滲透性，青少年應選物理性替代品',
      'en': 'Controversial UV filter, high absorption, teens should choose physical alternatives',
      'ja': 'オキシベンゾン、ホルモンへの影響が指摘されています',
    },
  },
  'Petrolatum': {
    safety: 'safe',
    zhName: '凡士林 / 礦物脂',
    description: {
      'zh-TW': '極高鎖水性，對極乾燥或受損肌膚很安全',
      'en': 'Extremely effective occlusive, safe for very dry or damaged skin',
      'ja': 'ワセリン、非常に高い保湿効果があります',
    },
  },
  'Dimethicone': {
    safety: 'safe',
    zhName: '矽靈 / 二甲基矽油',
    description: {
      'zh-TW': '提供柔滑觸感，不堵塞毛孔，對多數人是安全的',
      'en': 'Provides smooth texture without clogging pores, safe for most',
      'ja': 'ジメチコン、滑らかな質感を与えます',
    },
  },
  'Mineral Oil': {
    safety: 'safe',
    zhName: '礦物油',
    description: {
      'zh-TW': '安全性高的油脂，但對易長粉刺的青少年可能稍微厚重',
      'en': 'Highly safe oil, but may feel heavy for acne-prone teen skin',
      'ja': 'ミネラルオイル、非常に安全なオイルです',
    },
  },
  'Coconut Oil': {
    safety: 'caution',
    zhName: '椰子油',
    description: {
      'zh-TW': '高致粉刺性，對易冒痘的青少年膚質較危險',
      'en': 'Highly comedogenic, risky for teen skin types prone to breakouts',
      'ja': 'ココナッツオイル、毛穴を詰まらせやすいです',
    },
  },
  'Propylene Glycol': {
    safety: 'safe',
    zhName: '丙二醇',
    description: {
      'zh-TW': '常見保濕溶劑，少數人可能會有微弱過敏感',
      'en': 'Common humectant solvent, small chance of mild allergic reaction',
      'ja': 'プロピレングリコール、一般的な保湿剤',
    },
  },
  'Butylene Glycol': {
    safety: 'safe',
    zhName: '丁二醇',
    description: {
      'zh-TW': '比丙二醇更溫和的保濕劑，非常常用於日系保養',
      'en': 'Gentler than Propylene Glycol, very common in Asian skincare',
      'ja': 'ブチレングリコール、非常に低刺激な保湿剤',
    },
  },
  'Citric Acid': {
    safety: 'safe',
    zhName: '檸檬酸',
    description: {
      'zh-TW': '常用於調整 pH 值，使保養品更親膚',
      'en': 'Used as a pH adjuster to make products skin-friendly',
      'ja': 'クエン酸、pH調整に使用されます',
    },
  },
  'Ascorbic Acid': {
    safety: 'caution',
    zhName: '維生素C / 左旋C',
    description: {
      'zh-TW': '抗氧化美白，但偏酸性對部分青少年肌膚可能有刺痛感',
      'en': 'Antioxidant/brightening, but acidic nature may sting sensitive teen skin',
      'ja': 'ビタミンC、抗酸化ですが刺激になることも',
    },
  },
  'Magnesium Ascorbyl Phosphate': {
    safety: 'safe',
    zhName: '維生素C磷酸鎂鹽',
    description: {
      'zh-TW': '維生素C衍生物，比純C更溫和且穩定，適合青少年',
      'en': 'Vitamin C derivative, gentler and more stable than pure C for teens',
      'ja': 'ビタミンC誘導体、非常に低刺激で安定しています',
    },
  },
  'Lactic Acid': {
    safety: 'caution',
    zhName: '乳酸',
    description: {
      'zh-TW': '較溫和的果酸，對暗沉肌膚有幫助但需注意防曬',
      'en': 'Gentle AHA, helps dull skin but requires careful sun protection',
      'ja': '乳酸、マイルドなピーリング成分',
    },
  },
  'Arbutin': {
    safety: 'safe',
    zhName: '熊果苷',
    description: {
      'zh-TW': '溫和的美白成分，抑制黑色素生成，相對穩定',
      'en': 'Gentle brightening active, inhibits melanin production, stable',
      'ja': 'アルブチン、穏やかな美白成分',
    },
  },
  'Tranexamic Acid': {
    safety: 'safe',
    zhName: '傳明酸',
    description: {
      'zh-TW': '抑制黑色素及紅斑，穩定性高，青少年也能放心使用',
      'en': 'Reduces melanin and redness, very stable and safe for teens',
      'ja': 'トラネキサム酸、美白と抗炎症',
    },
  },
  'Licorice Root Extract': {
    safety: 'safe',
    zhName: '甘草根萃取',
    description: {
      'zh-TW': '天然舒緩、減輕過敏，非常適合敏感肌',
      'en': 'Natural soothing active, reduces irritation, great for sensitive skin',
      'ja': '甘草根エキス、肌を落ち着かせます',
    },
  },
  'Centella Asiatica Extract': {
    safety: 'safe',
    zhName: '積雪草萃取 / CICA',
    description: {
      'zh-TW': '強大的修復植物萃取，幫助傷口癒合，青少年必備',
      'en': 'Legendary repairing extract, helps healing, a must for teens',
      'ja': 'ツボクサエキス、修復効果が高いです',
    },
  },
  'Sorbitol': {
    safety: 'safe',
    zhName: '山梨糖醇',
    description: {
      'zh-TW': '糖類保濕劑，維持肌膚保濕度且質地細膩',
      'en': 'Sugar alcohol humectant, maintains hydration with smooth texture',
      'ja': 'ソルビトール、保湿効果があります',
    },
  },
  'Carbomer': {
    safety: 'safe',
    zhName: '卡波姆',
    description: {
      'zh-TW': '增稠劑，決定凝膠質地的成分，安全性高',
      'en': 'Thickener, used for gel textures, highly safe profile',
      'ja': 'カルボマー、テクスチャーを整えます',
    },
  },
  'Xanthan Gum': {
    safety: 'safe',
    zhName: '三仙膠 / 黃原膠',
    description: {
      'zh-TW': '天然來源增稠劑，成分穩定且安全',
      'en': 'Natural origin thickener, stable and safe',
      'ja': 'キサンタンガム、天然の増粘剤です',
    },
  },
  'Kaolin': {
    safety: 'safe',
    zhName: '高嶺土',
    description: {
      'zh-TW': '溫和的礦物泥，幫助吸收油脂但不帶走水分',
      'en': 'Gentle clay, helps absorb oil without stripping moisture',
      'ja': 'カオリン、皮脂を適度に吸収します',
    },
  },
  'Bentonite': {
    safety: 'safe',
    zhName: '膨潤土',
    description: {
      'zh-TW': '清潔力較強的礦物泥，油性肌膚的好朋友',
      'en': 'Cleansing clay with stronger absorbency, great for oily skin',
      'ja': 'ベントナイト、高い吸着力があります',
    },
  },
  'Honey Extract': {
    safety: 'safe',
    zhName: '蜂蜜萃取',
    description: {
      'zh-TW': '滋潤抗菌，天然保濕劑',
      'en': 'Nourishing and antibacterial, a natural humectant',
      'ja': 'ハチミツエキス、栄養と抗菌効果',
    },
  },
  'Royal Jelly': {
    safety: 'safe',
    zhName: '蜂王乳',
    description: {
      'zh-TW': '極高營養價值的成分，適合修護脆弱肌膚',
      'en': 'Highly nutritious active, good for repairing delicate skin',
      'ja': 'ローヤルゼリー、肌を活性化させます',
    },
  },
  'Peptides': {
    safety: 'safe',
    zhName: '胜肽',
    description: {
      'zh-TW': '小分子蛋白質，溫和且對多種膚質有益',
      'en': 'Small chains of amino acids, gentle and beneficial for most skin',
      'ja': 'ペプチド、肌の修復を助けます',
    },
  },
  'Snail Secretion Filtrate': {
    safety: 'safe',
    zhName: '蝸牛黏液過濾物',
    description: {
      'zh-TW': '保濕修復雙效合一，雖然聽起來可怕但對傷口修復極佳',
      'en': 'Dual moisturizing/repairing, excellent for healing scars/spots',
      'ja': 'カタツムリ分泌液、高い保湿と修復',
    },
  },
  'Beeswax': {
    safety: 'safe',
    zhName: '蜂蠟',
    description: {
      'zh-TW': '天然成膜劑，幫助鎖住水分且保護表皮',
      'en': 'Natural occlusive, helps lock in moisture and protect skin',
      'ja': 'ミツロウ、潤いを閉じ込めます',
    },
  },
  'Isopropyl Alcohol': {
    safety: 'warning',
    zhName: '異丙醇',
    description: {
      'zh-TW': '強烈溶劑，極度去油，會嚴重破壞青少年皮脂膜',
      'en': 'Strong solvent, extreme stripping of oils, damages teen skin barrier',
      'ja': 'イソプロピルアルコール、非常に刺激が強いです',
    },
  },
  'Menthol': {
    safety: 'caution',
    zhName: '薄荷腦',
    description: {
      'zh-TW': '提供清涼感但在發炎肌膚上可能過於刺激',
      'en': 'Provides cooling sensation but may be too irritating for inflamed skin',
      'ja': 'メントール、清涼感がありますが刺激に注意',
    },
  },
  'Peppermint Oil': {
    safety: 'caution',
    zhName: '薄荷精油',
    description: {
      'zh-TW': '天然香味但對青少年敏感肌膚容易誘發過敏',
      'en': 'Natural scent but easily triggers reactions on sensitive teen skin',
      'ja': 'ハッカ油、刺激になる可能性があります',
    },
  },
  'Lavender Oil': {
    safety: 'caution',
    zhName: '薰衣草精油',
    description: {
      'zh-TW': '常見過敏源，並非每個人都適合，需進行貼布測試',
      'en': 'Common allergen, not suitable for everyone, test before full use',
      'ja': 'ラベンダー油、アレルギーに注意',
    },
  },
  'Lemon Oil': {
    safety: 'warning',
    zhName: '檸檬精油',
    description: {
      'zh-TW': '具光毒性，塗抹後曬太陽可能導致灼傷，對青少年極危險',
      'en': 'Phototoxic; sun exposure after application can cause severe burns',
      'ja': 'レモン油、光毒性に注意',
    },
  },
  'Sodium Cocoyl Isethionate': {
    safety: 'safe',
    zhName: '椰油醯羥乙基磺酸鈉 (溫和界面活性劑)',
    description: {
      'zh-TW': '非常溫和的洗劑成分，不傷屏障，非常適合青少年',
      'en': 'Very gentle surfactant, doesn\'t damage barrier, ideal for teens',
      'ja': 'ココイルイセチオン酸Na、非常に低刺激',
    },
  },
  'Cocamidopropyl Betaine': {
    safety: 'safe',
    zhName: '椰油醯胺丙基甜菜鹼',
    description: {
      'zh-TW': '普遍且溫和的起泡劑，安全性高且減少眼睛刺激',
      'en': 'Common/gentle foaming agent, high safety and low eye sting',
      'ja': 'コカミドプロピルベタイン、肌に優しい洗浄剤',
    },
  },
  'Stearic Acid': {
    safety: 'safe',
    zhName: '硬脂酸',
    description: {
      'zh-TW': '常見脂肪酸，提供產品細軟觸感，安全性高',
      'en': 'Common fatty acid, provides creamy texture with high safety',
      'ja': 'ステアリン酸、テクスチャーを整えます',
    },
  },
  'Palmitic Acid': {
    safety: 'safe',
    zhName: '棕櫚酸',
    description: {
      'zh-TW': '肌膚本身就存在的脂肪酸，安全性無虞',
      'en': 'Fatty acid naturally present in skin, very safe profile',
      'ja': 'パルミチン酸、天然の脂肪酸です',
    },
  },
  'Cetyl Alcohol': {
    safety: 'safe',
    zhName: '鯨蠟醇 / 棕櫚醇',
    description: {
      'zh-TW': '高級脂肪醇，並非刺激性的酒精，反而具保濕效果',
      'en': 'Fatty alcohol, not drying like ethanol; actually has moisturizing properties',
      'ja': 'セタノール、保湿効果のあるアルコールです',
    },
  },
  'Potassium Sorbate': {
    safety: 'safe',
    zhName: '山梨酸鉀',
    description: {
      'zh-TW': '安全的防腐劑，常用於食品與化妝品中',
      'en': 'Safe preservative, widely used in both food and cosmetics',
      'ja': 'ソルビン酸K、安全な防腐剤',
    },
  },
  'Sodium Benzoate': {
    safety: 'safe',
    zhName: '苯甲酸鈉',
    description: {
      'zh-TW': '環境友好的防腐劑，對大多數青少年是安全的',
      'en': 'Eco-friendly preservative, generally safe for most teens',
      'ja': '安息香酸Na、安全な防腐剤',
    },
  },
  'Urea': {
    safety: 'caution',
    zhName: '尿素',
    description: {
      'zh-TW': '保濕去角質成分，對極乾肌有效但高濃度可能引起刺痛',
      'en': 'Hydrating exfoliant, good for very dry skin but high conc. may sting',
      'ja': '尿素、高い保湿効果がありますが刺激に注意',
    },
  },
  'Azelaic Acid': {
    safety: 'safe',
    zhName: '杜鵑花酸',
    description: {
      'zh-TW': '對青少年粉刺非常有效，且性質比 BHA 溫和穩定',
      'en': 'Highly effective for teen acne, gentler and more stable than BHA',
      'ja': 'アゼライン酸、ニキビに効果的です',
    },
  },
  'Mandelic Acid': {
    safety: 'safe',
    zhName: '杏仁酸',
    description: {
      'zh-TW': '分子量大的溫和酸類，適合青少年溫和去角質',
      'en': 'Large molecule gentle acid, ideal for mild teen exfoliation',
      'ja': 'マンデル酸、低刺激なピーリング成分',
    },
  },
  'Rosehip Oil': {
    safety: 'safe',
    zhName: '玫瑰果油',
    description: {
      'zh-TW': '富含維生素A與C，對青少年留下的痘疤修復特別有效',
      'en': 'Rich in Vit A/C, particularly effective for healing teen acne scars',
      'ja': 'ローズヒップ油、ビタミンが豊富です',
    },
  },
  'Jojoba Oil': {
    safety: 'safe',
    zhName: '荷荷巴油',
    description: {
      'zh-TW': '質地與人體皮脂極像，不會堵塞毛孔，青少年也能用的油',
      'en': 'Very similar to human sebum, won\'t clog pores, teen-safe oil',
      'ja': 'ホホバ油、毛穴を詰まらせません',
    },
  },
  'Argan Oil': {
    safety: 'safe',
    zhName: '阿甘油 / 摩洛哥堅果油',
    description: {
      'zh-TW': '滋潤保濕且不膩，抗老化與保濕首選',
      'en': 'Nourishing and non-greasy, excellent for protection/hydration',
      'ja': 'アルガンオイル、栄養を与えます',
    },
  },
  'Polysorbate 20': {
    safety: 'safe',
    zhName: '聚山梨醇酯 20',
    description: {
      'zh-TW': '溫和的乳化劑系統，安全性高',
      'en': 'Gentle emulsifier system with high safety profile',
      'ja': 'ポリソルベート20、安全な乳化剤',
    },
  },
  'PEG-40 Hydrogenated Castor Oil': {
    safety: 'safe',
    zhName: '氫化蓖麻油',
    description: {
      'zh-TW': '作為增溶劑使用，對肌膚穩定且安全',
      'en': 'Used as a solubilizer, stable and safe for skin use',
      'ja': '水添ヒマシ油、安全な成分です',
    },
  },
  'Ethylhexylglycerin': {
    safety: 'safe',
    zhName: '乙基己基甘油',
    description: {
      'zh-TW': '保濕助防腐雙效成分，非常溫和',
      'en': 'Dual-action moisturizer and preservative booster, very gentle',
      'ja': 'エチルヘキシルグリセリン、保湿と保護',
    },
  },
  'Glutathione': {
    safety: 'safe',
    zhName: '穀胱甘肽',
    description: {
      'zh-TW': '強效抗氧化劑，美白亮膚且安全性高',
      'en': 'Powerful antioxidant, high safety profile for brightening',
      'ja': 'グルタチオン、強力な抗酸化',
    },
  },
  'Squalene': {
    safety: 'caution',
    zhName: '角鯊烯',
    description: {
      'zh-TW': '角鯊烷的原型，但在空氣中容易氧化，建議選「角鯊烷」',
      'en': 'Precursor to Squalane; prone to oxidation, Squalane is preferred',
      'ja': 'スクワレン、酸化しやすいです',
    },
  },
  'Quaternium-15': {
    safety: 'warning',
    zhName: '四級銨鹽-15',
    description: {
      'zh-TW': '可能釋放甲醛的防腐劑，是常見的接觸型過敏源，應避免',
      'en': 'Formaldehyde-releasing preservative, common allergen, avoid',
      'ja': 'クオタニウム-15、ホルムアルデヒド放出の可能性',
    },
  },
  'Resveratrol': {
    safety: 'safe',
    zhName: '白藜蘆醇',
    description: {
      'zh-TW': '提煉自葡萄的抗氧化活性成分，溫和且能保護肌膚',
      'en': 'Antioxidant derived from grapes, gentle protection for skin',
      'ja': 'レスベラトロール、強力な抗酸化',
    },
  },
  'Q10 (Ubiquinone)': {
    safety: 'safe',
    zhName: '輔酶 Q10',
    description: {
      'zh-TW': '抗氧化輔助成分，幫助肌膚維持能量，安全不刺激',
      'en': 'Antioxidant coenzyme, helps skin energy, safe and non-irritating',
      'ja': 'コエンザイムQ10、抗酸化作用',
    },
  },
  'BHT': {
    safety: 'caution',
    zhName: '丁羥甲苯 (抗氧化劑)',
    description: {
      'zh-TW': '食品與化妝品防腐劑，長期接觸及高劑量可能有累積風險',
      'en': 'Preservative antioxidant, may have cumulative risks at high doses',
      'ja': 'BHT、酸化防止剤ですが物議もあります',
    },
  },
  'Aloe Barbadensis Leaf Juice': {
    safety: 'safe',
    zhName: '庫拉索蘆薈葉汁',
    description: {
      'zh-TW': '純度高的蘆薈來源，保濕舒緩力極佳',
      'en': 'High-purity aloe source, excellent soothing and hydration',
      'ja': 'アロエベラ液汁、保湿効果が高い',
    },
  },
  'Hamamelis Virginiana Water': {
    safety: 'caution',
    zhName: '金縷梅水',
    description: {
      'zh-TW': '具收斂、抗炎作用，但對敏感肌可能因成分比例過強',
      'en': 'Astringent/anti-inflammatory, but can be too strong for sensitive skin',
      'ja': 'ハマメリス水、収れん作用',
    },
  },
  'Sodium Lauryl Sulfate': {
    safety: 'warning',
    zhName: '十二烷基硫酸鈉',
    description: {
      'zh-TW': '強效介面活性劑，致敏與刺激度高，不建議青少年經常使用',
      'en': 'Strong detergent with high irritation potential, not ideal for frequent use',
      'ja': 'ラウリル硫酸Na、刺激が強いです',
    },
  },
  'Limonene': {
    safety: 'caution',
    zhName: '檸檬烯',
    description: {
      'zh-TW': '柑橘香氣成分，氧化後容易引起接觸性皮膚炎',
      'en': 'Citrus fragrance component, prone to causing dermatitis when oxidized',
      'ja': 'リモネン、アレルギーの原因になることも',
    },
  },
  'Linalool': {
    safety: 'caution',
    zhName: '芳樟醇',
    description: {
      'zh-TW': '常見花香調成分，敏感肌膚的使用者應多加留意',
      'en': 'Common floral scent component, should be monitored by sensitive users',
      'ja': 'リナロール、香料アレルギーに注意',
    },
  },
  'Cocamide DEA': {
    safety: 'warning',
    zhName: '椰油醯胺 DEA',
    description: {
      'zh-TW': '增稠劑，可能有健康與致敏潛在爭議，現代保養品已漸減少',
      'en': 'Thickener with potential health concerns, becoming less common',
      'ja': 'コカミドDEA、刺激性が指摘されています',
    },
  },
  'Colloidal Oatmeal': {
    safety: 'safe',
    zhName: '膠態燕麥',
    description: {
      'zh-TW': '經醫學證實能修復濕疹與過敏肌，對青少年肌膚非常溫和',
      'en': 'Proven to repair eczema and irritation, extremely gentle for teens',
      'ja': 'コロイド性オートミール、炎症を抑えます',
    },
  },
  'Ceramide NP / Ceramide AP / Ceramide EOP': {
    safety: 'safe',
    zhName: '神經醯胺複合物',
    description: {
      'zh-TW': '多種神經醯胺組合，模擬天然皮脂效果更佳',
      'en': 'Combined ceramides better mimic natural skin barrier',
      'ja': 'セラミド複合体、高い保湿効果',
    },
  },
};

// Search product by barcode
export function searchProductByBarcode(barcode: string): Product | undefined {
  return productsDatabase.find(p => p.barcode === barcode);
}

// Search products by ingredients (partial match)
export function searchProductsByIngredients(ingredientQuery: string): Product[] {
  const query = ingredientQuery.toLowerCase();
  return productsDatabase.filter(p =>
    p.ingredients.some(i => i.toLowerCase().includes(query))
  );
}

// Get ingredient safety info
export function getIngredientSafety(ingredient: string, language: 'zh-TW' | 'en' | 'ja') {
  const trimmed = ingredient.trim();
  // 1. Try exact English match
  let info = ingredientSafety[trimmed];

  // 2. Try case-insensitive English match
  if (!info) {
    const key = Object.keys(ingredientSafety).find(k => k.toLowerCase() === trimmed.toLowerCase());
    if (key) info = ingredientSafety[key];
  }

  // 3. Try Chinese name match (exact or partial within common aliases)
  if (!info) {
    const key = Object.keys(ingredientSafety).find(k =>
      ingredientSafety[k].zhName.split(/[ \/、,]+/).some(name =>
        name.length > 0 && (trimmed.includes(name) || name.includes(trimmed))
      )
    );
    if (key) info = ingredientSafety[key];
  }

  if (!info) {
    return {
      safety: 'safe' as const,
      description: {
        'zh-TW': '一般成分 (未在資料庫中標註風險)',
        'en': 'Common ingredient (No specific risk noted in database)',
        'ja': '一般的な成分',
      }[language],
    };
  }

  return {
    safety: info.safety,
    description: info.description[language],
  };
}

// Analyze a list of ingredients and return scores + analysis
export function analyzeIngredientList(ingredients: string[], language: 'zh-TW' | 'en' | 'ja', skinProfile: any = null) {
  let safetyScore = 100;
  let matchScore = 80;
  
  const profile = skinProfile || { type: 'normal', sensitivity: 1, oiliness: 50, acneProne: false, sunSensitive: false, barrierHealth: 2, concerns: [] };
  const skinType = profile.type;

  const warnings: string[] = [];
  const benefits: string[] = [];
  const unknownIngredients: string[] = [];

  const analysis = ingredients.map(ing => {
    const info = getIngredientSafety(ing, language);
    const isUnknown = info.description.includes('暫無詳細資料') || info.description.includes('No detailed information');
    
    if (isUnknown) {
      unknownIngredients.push(ing);
      return {
        name: ing,
        safety: 'unknown' as any,
        description: language === 'zh-TW' ? '此成分目前暫未列入資料庫，不計入產品評估' : 
                     language === 'en' ? 'This ingredient is not in the database and is excluded from evaluation' :
                     'この成分は現在データベースに登録されておらず、評価から除外されています'
      };
    }

    // Safety Impact
    if (info.safety === 'warning') {
      let penalty = 15;
      // Heavier penalty for sensitive skin or specific ingredients
      if (ing.toLowerCase().includes('retinol') && (profile.sensitivity > 1 || profile.sunSensitive)) {
        penalty = 25;
      }
      safetyScore -= penalty;
      warnings.push(ing);
    }
    if (info.safety === 'caution') {
      safetyScore -= 5;
      warnings.push(ing);
    }
    
    // Benefit/Match Impact
    const lowerIng = ing.toLowerCase();
    
    // Hydration
    if (lowerIng.includes('hyaluronic') || lowerIng.includes('glycerin') || lowerIng.includes('panthenol') || lowerIng.includes('sodium hyaluronate')) {
      if (skinType === 'dry' || skinType === 'sensitive' || profile.barrierHealth < 2) {
        matchScore += 4;
        benefits.push(ing);
      }
    }
    
    // Oil Control / Acne
    if (lowerIng.includes('salicylic') || lowerIng.includes('tea tree') || lowerIng.includes('zinc') || lowerIng.includes('niacinamide')) {
      if (profile.oiliness > 60 || profile.acneProne) {
        matchScore += 4;
        benefits.push(ing);
      }
      if (lowerIng.includes('salicylic') && profile.barrierHealth < 1) {
        matchScore -= 5; // Too harsh for broken barrier
      }
    }
    
    // Calming
    if (lowerIng.includes('centella') || lowerIng.includes('madecassoside') || lowerIng.includes('allantoin') || lowerIng.includes('mugwort')) {
      if (profile.sensitivity > 0 || profile.type === 'sensitive' || profile.concerns.includes('sensitivity')) {
        matchScore += 5;
        benefits.push(ing);
      }
    }
    
    // Negative Match (Harsh ingredients for specific profiles)
    if (lowerIng.includes('alcohol') || lowerIng.includes('fragrance')) {
      if (profile.sensitivity > 1 || profile.type === 'dry') {
        matchScore -= 12;
      }
    }

    return {
      name: ing,
      safety: info.safety,
      description: info.description
    };
  });

  // Clamp scores
  safetyScore = Math.max(0, Math.min(100, safetyScore));
  matchScore = Math.max(0, Math.min(100, matchScore));

  let result: 'green' | 'yellow' | 'red' = 'green';
  if (safetyScore >= 85 && matchScore >= 70) result = 'green';
  else if (safetyScore >= 70 && matchScore >= 50) result = 'yellow';
  else result = 'red';

  // Generate localized deep explanations
  const getExplanations = () => {
    if (language === 'zh-TW') {
      let safetyExpl = '';
      if (warnings.length > 0) {
        safetyExpl = `含有 ${warnings.slice(0, 2).join('、')} 等成分。`;
        if (warnings.some(w => w.toLowerCase().includes('retinol')) && profile.sunSensitive) {
          safetyExpl += ' 特別注意到您對陽光較敏感，A醇成分需加強防曬。';
        } else {
          safetyExpl += ' 建議先進行局部測試。';
        }
      } else {
        safetyExpl = '成分極其溫和安全，適合您的肌膚屏障狀況。';
      }
      
      let matchExpl = '';
      if (benefits.length > 0) {
        matchExpl = `含有 ${benefits.slice(0, 2).join('、')}。`;
        if (profile.oiliness > 70) {
          matchExpl += ' 這些成分能有效平衡您的出油狀況。';
        } else if (profile.type === 'dry') {
          matchExpl += ' 能深度滋潤您的乾燥肌膚。';
        } else if (profile.type === 'sensitive') {
          matchExpl += ' 有助於舒緩您的敏感乾癢。';
        }
      } else {
        matchExpl = '這是一款基礎型產品，能維持現狀但缺乏針對性改善。';
      }
      
      if (unknownIngredients.length > 0) {
        matchExpl += ` (注意：有 ${unknownIngredients.length} 項成分暫不在資料庫中)。`;
      }
      
      return { safetyExpl, matchExpl };
    } else if (language === 'en') {
      const safetyExpl = warnings.length > 0 
        ? `Contains ${warnings.slice(0, 2).join(', ')}. Use with caution ${profile.sunSensitive ? 'especially under sun' : ''}.`
        : 'Highly safe and compatible with your current skin barrier.';
      
      let matchExpl = benefits.length > 0
        ? `Contains ${benefits.slice(0, 2).join(', ')}, helping address your ${profile.concerns[0] || 'skin'} needs.`
        : 'Basic product that provides standard care for your skin type.';
      
      if (unknownIngredients.length > 0) matchExpl += ` (${unknownIngredients.length} unknown ingredients skipped).`;
      
      return { safetyExpl, matchExpl };
    } else {
      const safetyExpl = warnings.length > 0 
        ? `${warnings.slice(0, 2).join('、')}が含まれています。慎重に使用してください。`
        : '成分は非常に安全で、あなたの肌バリアに適しています。';
      
      let matchExpl = benefits.length > 0
        ? `${benefits.slice(0, 2).join('、')}が配合されており、あなたの${profile.type}肌をサポートします。`
        : '基本的なケアを提供する標準的な製品です。';
      
      return { safetyExpl, matchExpl };
    }
  };

  const { safetyExpl, matchExpl } = getExplanations();

  return {
    safetyScore,
    matchScore,
    result,
    analysis,
    safetyExplanation: safetyExpl,
    matchExplanation: matchExpl
  };
}


