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
    barcode: '8806085910301',
    name: {
      'zh-TW': '蘭芝 水酷肌因保濕精華',
      'en': 'Laneige Water Bank Blue Hyaluronic Serum',
      'ja': 'ラネージュ ウォーターバンク ブルーヒアルロン酸 セラム',
    },
    brand: 'Laneige',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Hyaluronic Acid', 'Blue Hyaluronic Acid', 'Squalane', 'Panthenol'],
    safetyScore: 90,
    warnings: ['fragrance'],
    goodFor: ['dry', 'dehydrated', 'normal'],
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
    barcode: '3606002532854',
    name: {
      'zh-TW': '理膚寶水 B5全面修復霜',
      'en': 'La Roche-Posay Cicaplast Baume B5',
      'ja': 'ラロッシュポゼ シカプラスト ボーム B5',
    },
    brand: 'La Roche-Posay',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Panthenol', 'Shea Butter', 'Copper-Zinc-Manganese', 'Madecassoside'],
    safetyScore: 94,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'damaged'],
  },
  {
    barcode: '4971710251482',
    name: {
      'zh-TW': '珂潤 浸潤保濕乳霜',
      'en': 'Curel Intensive Moisture Cream',
      'ja': 'キュレル 潤浸保湿 フェイスクリーム',
    },
    brand: 'Curel',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Ceramide EOP', 'Ceramide NP', 'Ceramide AP', 'Eucalyptus Extract'],
    safetyScore: 97,
    warnings: [],
    goodFor: ['sensitive', 'dry', 'eczema'],
  },
  {
    barcode: '4901301326299',
    name: {
      'zh-TW': '資生堂 百優精純乳霜',
      'en': 'Shiseido Bio-Performance Advanced Super Revitalizing Cream',
      'ja': '資生堂 バイオパフォーマンス アドバンススーパーレバイタライジングクリーム',
    },
    brand: 'Shiseido',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Squalane', 'Alcohol', 'Fragrance', 'Retinyl Acetate'],
    safetyScore: 72,
    warnings: ['alcohol', 'fragrance', 'retinol'],
    goodFor: ['mature', 'normal', 'dry'],
  },
  {
    barcode: '3606002532915',
    name: {
      'zh-TW': '理膚寶水 青春控油調理化妝水',
      'en': 'La Roche-Posay Effaclar Clarifying Solution Acne Toner',
      'ja': 'ラロッシュポゼ エファクラ クラリファイング ソリューション',
    },
    brand: 'La Roche-Posay',
    category: 'toner',
    ingredients: ['Water', 'Alcohol Denat', 'Glycerin', 'Salicylic Acid', 'Citric Acid', 'Zinc PCA'],
    safetyScore: 78,
    warnings: ['alcohol', 'salicylic_acid'],
    goodFor: ['oily', 'acne', 'combination'],
  },
  {
    barcode: '8809642710407',
    name: {
      'zh-TW': 'innisfree 火山泥毛孔清潔面膜',
      'en': 'innisfree Super Volcanic Pore Clay Mask',
      'ja': 'イニスフリー スーパーボルカニック ポアクレイマスク',
    },
    brand: 'innisfree',
    category: 'mask',
    ingredients: ['Water', 'Volcanic Ash', 'Kaolin', 'Bentonite', 'Glycerin', 'Titanium Dioxide'],
    safetyScore: 85,
    warnings: [],
    goodFor: ['oily', 'combination', 'pores'],
  },
  {
    barcode: '8806085910332',
    name: {
      'zh-TW': '蘭芝 睡美人香氛水凝膜',
      'en': 'Laneige Water Sleeping Mask',
      'ja': 'ラネージュ ウォータースリーピングマスク',
    },
    brand: 'Laneige',
    category: 'mask',
    ingredients: ['Water', 'Glycerin', 'Trehalose', 'Evening Primrose Extract', 'Squalane', 'Fragrance'],
    safetyScore: 86,
    warnings: ['fragrance'],
    goodFor: ['dry', 'dehydrated', 'normal'],
  },
  {
    barcode: '3337872413050',
    name: {
      'zh-TW': '薇姿 水感超保濕精華',
      'en': 'Vichy Aqualia Thermal Rehydrating Serum',
      'ja': 'ヴィシー アクアリア サーマル リハイドレーティング セラム',
    },
    brand: 'Vichy',
    category: 'serum',
    ingredients: ['Water', 'Glycerin', 'Hyaluronic Acid', 'Vichy Mineralizing Water', 'Mannose', 'Arginine'],
    safetyScore: 91,
    warnings: [],
    goodFor: ['dry', 'dehydrated', 'sensitive'],
  },
  {
    barcode: '4971710251529',
    name: {
      'zh-TW': '珂潤 控油保濕化妝水',
      'en': 'Curel Sebum Care Lotion',
      'ja': 'キュレル 皮脂トラブルケア 化粧水',
    },
    brand: 'Curel',
    category: 'toner',
    ingredients: ['Water', 'Glycerin', 'Ceramide', 'Allantoin', 'Zinc Oxide', 'Eucalyptus Extract'],
    safetyScore: 93,
    warnings: [],
    goodFor: ['oily', 'combination', 'sensitive'],
  },
  {
    barcode: '8801042694950',
    name: {
      'zh-TW': '雪花秀 滋陰生人蔘面霜',
      'en': 'Sulwhasoo Concentrated Ginseng Renewing Cream',
      'ja': 'ソルファス コンセントレーテッド ジンセン リニューイング クリーム',
    },
    brand: 'Sulwhasoo',
    category: 'cream',
    ingredients: ['Water', 'Ginseng Extract', 'Butylene Glycol', 'Glycerin', 'Alcohol', 'Fragrance'],
    safetyScore: 73,
    warnings: ['alcohol', 'fragrance'],
    goodFor: ['mature', 'dry', 'normal'],
  },
  {
    barcode: '4901301326251',
    name: {
      'zh-TW': '資生堂 紅妍肌活露',
      'en': 'Shiseido Ultimune Power Infusing Concentrate',
      'ja': '資生堂 アルティミューン パワライジング コンセントレート',
    },
    brand: 'Shiseido',
    category: 'serum',
    ingredients: ['Water', 'Alcohol', 'Glycerin', 'Dimethicone', 'Fragrance', 'Yeast Extract'],
    safetyScore: 74,
    warnings: ['alcohol', 'fragrance', 'silicone'],
    goodFor: ['normal', 'combination'],
  },
  {
    barcode: '8809642710506',
    name: {
      'zh-TW': 'innisfree 濟州石榴活顏精華',
      'en': 'innisfree Jeju Pomegranate Revitalizing Serum',
      'ja': 'イニスフリー 済州ザクロ リバイタライジング セラム',
    },
    brand: 'innisfree',
    category: 'serum',
    ingredients: ['Water', 'Pomegranate Extract', 'Glycerin', 'Niacinamide', 'Adenosine', 'Fragrance'],
    safetyScore: 84,
    warnings: ['fragrance'],
    goodFor: ['dull', 'mature', 'normal'],
  },
  {
    barcode: '8806085910363',
    name: {
      'zh-TW': '蘭芝 水酷肌因智慧保濕凝凍',
      'en': 'Laneige Water Bank Gel Cream',
      'ja': 'ラネージュ ウォーターバンク ジェルクリーム',
    },
    brand: 'Laneige',
    category: 'cream',
    ingredients: ['Water', 'Glycerin', 'Hyaluronic Acid', 'Squalane', 'Panthenol', 'Fragrance'],
    safetyScore: 89,
    warnings: ['fragrance'],
    goodFor: ['oily', 'combination', 'normal'],
  },
  {
    barcode: '3337872413074',
    name: {
      'zh-TW': '薇姿 皮脂調護保濕乳',
      'en': 'Vichy Normaderm Phytosolution Double Correction Daily Care',
      'ja': 'ヴィシー ノーマダーム フィトソリューション デイリーケア',
    },
    brand: 'Vichy',
    category: 'moisturizer',
    ingredients: ['Water', 'Glycerin', 'Salicylic Acid', 'Zinc PCA', 'Hyaluronic Acid', 'Probiotic Fractions'],
    safetyScore: 82,
    warnings: ['salicylic_acid'],
    goodFor: ['oily', 'acne', 'combination'],
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
export function analyzeIngredientList(ingredients: string[], language: 'zh-TW' | 'en' | 'ja') {
  let safetyScore = 100;
  const analysis = ingredients.map(ing => {
    const info = getIngredientSafety(ing, language);
    if (info.safety === 'warning') safetyScore -= 15;
    if (info.safety === 'caution') safetyScore -= 5;
    return {
      name: ing,
      safety: info.safety,
      description: info.description
    };
  });

  // Clamp safety score
  safetyScore = Math.max(0, Math.min(100, safetyScore));

  let result: 'green' | 'yellow' | 'red' = 'green';
  if (safetyScore >= 85) result = 'green';
  else if (safetyScore >= 70) result = 'yellow';
  else result = 'red';

  return {
    safetyScore,
    result,
    analysis
  };
}


