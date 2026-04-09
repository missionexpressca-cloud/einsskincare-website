const translations = {
  en: {
    nav: {
      home: "Home",
      brand: "Brand",
      products: "Products",
      partner: "Partner",
      contact: "Contact"
    },

    common: {
      viewMore: "View More"
    },

    home: {
      heroTitle: "Eins Skincare",
      heroSubtitle: "Science-led skincare, centered on effective ingredients.",
      ctaProducts: "Explore Products",
      ctaBrand: "About Eins"
    },

    productsPage: {
      title: "Product Collection",
      subtitle: "A complete skincare range designed around repair, radiance, hydration, and anti-aging care.",
      gridTitle: "Explore Our Collection",
      gridDesc: "Discover targeted solutions for brightening, repair, hydration, and daily skin balance."
    },

    brandPage: {
      title: "About Eins",
      subtitle: "Science-led skincare, centered on effective ingredients.",
      storyTitle: "Our Story",
      storyText: "Eins was created to bring skincare back to what truly matters: effective ingredients, clear formulation logic, and honest value.",
      missionTitle: "Our Mission",
      missionText: "We believe that high-quality skincare should not be defined by price alone. Our goal is to make effective skincare more accessible.",
      positioningTitle: "Brand Positioning",
      positioningText: "Eins is a skincare brand focused on efficacy, refined textures, simplified formulas, and long-term value for modern consumers.",
      valuesTitle: "What We Stand For",
      value1Title: "Efficacy First",
      value1Text: "We focus on ingredients and formulas that serve real skin needs.",
      value2Title: "Ingredient Logic",
      value2Text: "We prioritize core active ingredients over unnecessary complexity.",
      value3Title: "Refined Simplicity",
      value3Text: "We reduce excess in fragrance, packaging, and marketing noise.",
      value4Title: "Accessible Quality",
      value4Text: "We aim to make better skincare choices available to more people.",
      audienceTitle: "Who We Create For",
      audienceText: "Eins is designed for thoughtful skincare users who care about results, ingredient quality, and long-term value."
    },

    partnerPage: {
      title: "Partner With Eins",
      subtitle: "A skincare brand built around efficacy, clarity, and scalable channel value.",
      whyTitle: "Why Eins",
      whyText: "Eins combines clear product positioning, market-friendly price logic, and a cohesive brand direction for multi-channel growth.",
      adv1Title: "Clear Product Selling Points",
      adv1Text: "Each product is designed around a clear need such as repair, brightening, hydration, or anti-aging.",
      adv2Title: "High Value Positioning",
      adv2Text: "The brand supports a strong balance between quality perception and competitive pricing.",
      adv3Title: "Flexible Channel Fit",
      adv3Text: "Suitable for e-commerce, private domain sales, retail collections, and international Chinese-speaking markets.",
      adv4Title: "Long-Term Expansion Potential",
      adv4Text: "The product matrix supports future launches, education content, and ongoing brand growth.",
      channelsTitle: "Ideal Channels",
      channel1: "Online stores and marketplace channels",
      channel2: "Private domain and social commerce",
      channel3: "Beauty retail and concept stores",
      channel4: "Cross-border and overseas Chinese markets",
      processTitle: "Cooperation Process",
      process1: "Initial brand and channel communication",
      process2: "Product selection and cooperation model discussion",
      process3: "Material support and commercial coordination",
      process4: "Launch and follow-up collaboration",
      ctaTitle: "Let’s Build Together",
      ctaText: "We welcome channel partners who value product clarity, brand growth, and long-term cooperation.",
      ctaButton: "Contact Us"
    },

    contactPage: {
      title: "Contact Eins",
      subtitle: "For business partnerships, product inquiries, and brand communication.",
      infoTitle: "Contact Information",
      formTitle: "Leave a Message",
      sendButton: "Send Message",
      noteTitle: "Business Note",
      noteText: "For partnership inquiries, please include your company name, market area, and preferred cooperation model in your message."
    },

    productDetail: {
      keyBenefits: "Key Benefits",
      keyIngredients: "Key Ingredients",
      skinType: "Suitable For",
      howToUse: "How to Use"
    },

    products: {
      orangeCream: {
        name: "Orange Radiance Cream",
        subtitle: "Antioxidant brightening cream for oily skin",
        desc: "Helps improve dullness and supports a clear, lightweight finish.",
        benefit1: "Brightens dull-looking skin",
        benefit2: "Supports antioxidant care",
        benefit3: "Lightweight texture for oily skin",
        ingredients: "Idebenone, Niacinamide, Antioxidant Complex",
        skinType: "Oily skin, combination skin, dull skin",
        howToUse: "Apply after serum as the final step of your skincare routine."
      },

      cream50: {
        name: "50% Repair Cream",
        subtitle: "Firming and barrier support cream",
        desc: "Designed for repair, comfort, and visible skin resilience.",
        benefit1: "Supports firmness and resilience",
        benefit2: "Helps comfort compromised skin",
        benefit3: "Suitable for repair-focused routines",
        ingredients: "Pro-Xylane, Barrier Support Complex, Soothing Blend",
        skinType: "Dry skin, mature skin, weakened barrier",
        howToUse: "Apply evenly to face and neck after serum."
      },

      essenceLotion: {
        name: "Caviar Essence Lotion",
        subtitle: "Luxurious revitalizing essence lotion",
        desc: "Helps improve skin smoothness, radiance, and firmness.",
        benefit1: "Supports smoother-looking skin",
        benefit2: "Helps improve visible radiance",
        benefit3: "Comfortable, refined texture",
        ingredients: "Caviar Extract, Peptide Complex",
        skinType: "Normal skin, dry skin, mature skin",
        howToUse: "Apply after cleansing and before serum or cream."
      },

      eyeCream: {
        name: "Rose Pro-Xylane Eye Cream",
        subtitle: "Hydrating anti-aging eye care",
        desc: "Targets dryness, fine lines, and tired-looking eyes.",
        benefit1: "Helps soften the look of fine lines",
        benefit2: "Provides moisture to the eye area",
        benefit3: "Supports a smoother eye contour",
        ingredients: "Pro-Xylane, Rose Extract, Anti-aging Peptides",
        skinType: "Dry eye area, mature skin, tired-looking eyes",
        howToUse: "Apply a small amount around the eye contour morning and evening."
      },

      orchidOil: {
        name: "Orchid Facial Oil",
        subtitle: "Nourishing antioxidant facial oil",
        desc: "Helps soften roughness and improve skin comfort.",
        benefit1: "Helps nourish dry skin",
        benefit2: "Supports a smoother skin feel",
        benefit3: "Adds comfort and softness",
        ingredients: "Orchid Extract, Plant Squalane, Antioxidant Oil Blend",
        skinType: "Dry skin, rough skin, dull skin",
        howToUse: "Use a few drops as the final step, or mix with cream."
      },

      purpleRiceSerum: {
        name: "Purple Rice Serum",
        subtitle: "Plumping and smoothing serum",
        desc: "Supports a fuller, smoother, and more elastic look.",
        benefit1: "Helps improve skin bounce",
        benefit2: "Supports a smoother appearance",
        benefit3: "Lightweight serum texture",
        ingredients: "Pro-Xylane, Purple Rice Extract, Hyaluronic Acid",
        skinType: "Normal skin, dry skin, early aging concerns",
        howToUse: "Apply to clean skin before moisturizer."
      },

      whiteTruffleMask: {
        name: "White Truffle Sleeping Mask",
        subtitle: "Overnight radiance and recovery mask",
        desc: "An overnight treatment for dull, tired-looking skin.",
        benefit1: "Supports overnight nourishment",
        benefit2: "Helps improve morning radiance",
        benefit3: "Comfortable overnight finish",
        ingredients: "White Truffle Extract, Niacinamide, Antioxidant Blend",
        skinType: "Dull skin, dry skin, tired-looking skin",
        howToUse: "Apply as the last step of your evening skincare routine."
      },

      oilyToner: {
        name: "Balancing Toner",
        subtitle: "Fresh hydration for oily skin",
        desc: "Refreshes and hydrates without heaviness.",
        benefit1: "Provides lightweight hydration",
        benefit2: "Helps balance oily skin",
        benefit3: "Fresh, comfortable feel",
        ingredients: "Copper Peptide, Botanical Extracts, Lightweight Humectants",
        skinType: "Oily skin, combination skin, sensitive oily skin",
        howToUse: "Apply with hands or cotton pad after cleansing."
      },

      seaFennelEmulsion: {
        name: "Sea Fennel Emulsion",
        subtitle: "Lightweight repair emulsion for oily skin",
        desc: "Comforts skin while maintaining a fresh matte feel.",
        benefit1: "Supports skin comfort and balance",
        benefit2: "Light texture for oily skin",
        benefit3: "Helps reduce greasy after-feel",
        ingredients: "Sea Fennel Extract, Repair Complex, Oil-control Support",
        skinType: "Oily skin, combination skin, dull oily skin",
        howToUse: "Apply after toner or serum as a lightweight moisturizer."
      },

      oliveMask: {
        name: "Olive Repair Mask",
        subtitle: "Soothing and barrier-repair sheet mask",
        desc: "Designed for skin that feels dry, stressed, or fragile.",
        benefit1: "Helps comfort stressed skin",
        benefit2: "Supports barrier recovery",
        benefit3: "Good for temporary skin discomfort",
        ingredients: "Olive Leaf Extract, Panthenol, Soothing Repair Complex",
        skinType: "Sensitive skin, compromised skin barrier, redness-prone skin",
        howToUse: "Apply for 10–15 minutes after cleansing, then massage in the remaining essence."
      },

      seaGrapeMask: {
        name: "Sea Grape Hydrating Mask",
        subtitle: "Deep hydration and moisture-lock mask",
        desc: "Replenishes moisture for smoother, plumper skin.",
        benefit1: "Helps replenish hydration",
        benefit2: "Supports a plumper-looking skin surface",
        benefit3: "Good for dry and tired skin",
        ingredients: "Sea Grape Extract, Multi-molecular Hyaluronic Acid, Moisture-lock Complex",
        skinType: "Dry skin, dehydrated skin, rough skin",
        howToUse: "Apply for 10–15 minutes, then massage remaining serum into the skin."
      },

      astaxanthinMask: {
        name: "Astaxanthin Brightening Mask",
        subtitle: "Antioxidant glow-boosting sheet mask",
        desc: "Helps revive dull, tired-looking skin with a fresh glow.",
        benefit1: "Supports brighter-looking skin",
        benefit2: "Helps improve the look of dullness",
        benefit3: "Comfortable sheet mask care",
        ingredients: "Astaxanthin, Niacinamide, Antioxidant Brightening Blend",
        skinType: "Dull skin, uneven-looking tone, tired-looking skin",
        howToUse: "Use after cleansing for 10–15 minutes, then continue with moisturizer."
      }
    }
  },

  zh: {
    nav: {
      home: "首页",
      brand: "品牌介绍",
      products: "产品中心",
      partner: "招商合作",
      contact: "联系我们"
    },

    common: {
      viewMore: "查看详情"
    },

    home: {
      heroTitle: "Eins 护肤",
      heroSubtitle: "以科学护肤为基础，回归有效成分本身。",
      ctaProducts: "查看产品",
      ctaBrand: "了解品牌"
    },

    productsPage: {
      title: "产品系列",
      subtitle: "围绕修护、提亮、补水与抗老需求打造的完整护肤产品矩阵。",
      gridTitle: "浏览产品",
      gridDesc: "探索适用于提亮、维稳、补水与日常护理的产品选择。"
    },

    brandPage: {
      title: "关于 Eins",
      subtitle: "以科学护肤为基础，回归有效成分本身。",
      storyTitle: "品牌故事",
      storyText: "Eins 的诞生，是为了让护肤回到真正重要的部分：有效成分、清晰配方逻辑，以及真诚合理的价值。",
      missionTitle: "品牌使命",
      missionText: "我们相信，高品质护肤不该只由价格定义。Eins 希望让真正有效的护肤选择变得更可及。",
      positioningTitle: "品牌定位",
      positioningText: "Eins 是一个聚焦功效、质地、精简配方与长期价值的现代护肤品牌。",
      valuesTitle: "我们的坚持",
      value1Title: "功效优先",
      value1Text: "围绕真实皮肤需求设计产品，而不是围绕营销概念做堆叠。",
      value2Title: "重视成分逻辑",
      value2Text: "将重点放在真正有价值的核心活性成分上。",
      value3Title: "精简而克制",
      value3Text: "减少不必要的冗余添加、复杂包装与营销噪音。",
      value4Title: "让好护肤更可及",
      value4Text: "希望让更多消费者以更合理的预算拥有更好的护肤体验。",
      audienceTitle: "我们为谁而做",
      audienceText: "Eins 面向注重效果、在意成分质量、同时重视长期价值的理性护肤用户。"
    },

    partnerPage: {
      title: "招商合作",
      subtitle: "一个围绕功效清晰、价值明确、具备渠道成长性的护肤品牌。",
      whyTitle: "为什么选择 Eins",
      whyText: "Eins 兼具清晰的产品定位、友好的市场价格逻辑，以及统一的品牌成长方向，适合多渠道拓展。",
      adv1Title: "产品卖点清晰",
      adv1Text: "每款产品都围绕修护、提亮、补水、抗老等明确需求展开。",
      adv2Title: "高性价比定位",
      adv2Text: "兼顾品质感与市场竞争力，适合当前理性消费趋势。",
      adv3Title: "适配多种渠道",
      adv3Text: "适合电商、私域、美妆集合店及海外华人市场等多种场景。",
      adv4Title: "具备长期扩展空间",
      adv4Text: "产品矩阵清晰，利于后续扩品、内容教育与持续增长。",
      channelsTitle: "适合渠道",
      channel1: "线上商城与平台电商",
      channel2: "私域与社交电商",
      channel3: "美妆零售与集合店",
      channel4: "跨境与海外华人市场",
      processTitle: "合作流程",
      process1: "品牌与渠道初步沟通",
      process2: "产品选择与合作模式确认",
      process3: "物料支持与商务对接",
      process4: "正式上线与后续协同",
      ctaTitle: "期待与您合作",
      ctaText: "欢迎认同品牌价值、重视长期合作的伙伴与 Eins 一起成长。",
      ctaButton: "联系我们"
    },

    contactPage: {
      title: "联系 Eins",
      subtitle: "用于商务合作、产品咨询与品牌沟通。",
      infoTitle: "联系信息",
      formTitle: "在线留言",
      sendButton: "发送留言",
      noteTitle: "合作说明",
      noteText: "如为招商合作，请在留言中注明公司名称、市场区域与意向合作模式。"
    },

    productDetail: {
      keyBenefits: "核心功效",
      keyIngredients: "核心成分",
      skinType: "适合肤质",
      howToUse: "使用方法"
    },

    products: {
      orangeCream: {
        name: "橘灿面霜",
        subtitle: "适合油皮的抗氧提亮面霜",
        desc: "帮助改善暗沉，肤感清爽轻盈。",
        benefit1: "改善暗沉肤色",
        benefit2: "提供抗氧护理",
        benefit3: "清爽不厚重，适合油皮",
        ingredients: "艾地苯、烟酰胺、抗氧复配因子",
        skinType: "油皮、混合皮、暗沉肤质",
        howToUse: "精华后使用，作为护肤最后一步涂抹全脸。"
      },

      cream50: {
        name: "50% 面霜",
        subtitle: "紧致修护型面霜",
        desc: "帮助修护屏障，提升肌肤舒适度与韧性。",
        benefit1: "帮助提升肌肤紧致感",
        benefit2: "适合修护型护理流程",
        benefit3: "适用于屏障脆弱阶段",
        ingredients: "玻色因、屏障修护复配、舒缓因子",
        skinType: "干皮、熟龄肌、屏障脆弱肌",
        howToUse: "精华后均匀涂抹于面部与颈部。"
      },

      essenceLotion: {
        name: "精华露",
        subtitle: "奢养焕活精华露",
        desc: "帮助提升肌肤细腻度、光泽感与紧致感。",
        benefit1: "帮助改善肤感细腻度",
        benefit2: "提升肌肤光泽感",
        benefit3: "适合日常抗老护理",
        ingredients: "鱼子提取物、紧致抗老多肽",
        skinType: "中性肌、干皮、熟龄肌",
        howToUse: "洁面后使用，后续搭配精华或面霜。"
      },

      eyeCream: {
        name: "眼霜",
        subtitle: "滋润抗老眼部护理",
        desc: "针对干燥、细纹与眼周疲惫状态。",
        benefit1: "帮助改善眼周干纹细纹",
        benefit2: "滋润眼周脆弱肌肤",
        benefit3: "提升眼周柔润度",
        ingredients: "玻色因、玫瑰提取物、抗老胜肽",
        skinType: "干燥眼周、熟龄肌、熬夜眼周",
        howToUse: "早晚取少量轻点于眼周并轻柔按摩。"
      },

      orchidOil: {
        name: "兰花油",
        subtitle: "修护抗氧精华油",
        desc: "帮助缓解粗糙干燥，提升肌肤柔润度。",
        benefit1: "滋养干燥粗糙肌肤",
        benefit2: "帮助提升肌肤柔软度",
        benefit3: "增强护肤舒适感",
        ingredients: "兰花提取物、植物角鲨烷、抗氧精油",
        skinType: "干皮、粗糙肤质、暗沉肤质",
        howToUse: "可作为护肤最后一步使用，或混合面霜使用。"
      },

      purpleRiceSerum: {
        name: "色修",
        subtitle: "弹润淡纹精华",
        desc: "帮助肌肤呈现更饱满平滑的状态。",
        benefit1: "帮助提升肌肤弹润感",
        benefit2: "支持平滑细腻肤感",
        benefit3: "精华质地清爽易吸收",
        ingredients: "10%玻色因、紫米提取物、透明质酸",
        skinType: "中性肌、干皮、初老肌",
        howToUse: "洁面后、面霜前使用。"
      },

      whiteTruffleMask: {
        name: "白松露睡眠面膜",
        subtitle: "夜间修护焕亮面膜",
        desc: "针对暗沉、熬夜肌的夜间密集护理。",
        benefit1: "夜间持续滋养修护",
        benefit2: "帮助提升晨起肤色状态",
        benefit3: "夜间使用舒适不厚重",
        ingredients: "白松露提取物、烟酰胺、多重抗氧成分",
        skinType: "暗沉肌、干燥肌、熬夜肌",
        howToUse: "晚间护肤最后一步涂抹，过夜使用。"
      },

      oilyToner: {
        name: "油皮爽肤水",
        subtitle: "清爽补水型爽肤水",
        desc: "清爽补水，不增加油腻负担。",
        benefit1: "提供轻盈补水感",
        benefit2: "帮助调理油皮状态",
        benefit3: "使用后肤感清爽舒适",
        ingredients: "蓝铜肽、复合植物提取物、小分子保湿因子",
        skinType: "油皮、混油皮、敏感油皮",
        howToUse: "洁面后用手拍或化妆棉擦拭全脸。"
      },

      seaFennelEmulsion: {
        name: "海茴香乳",
        subtitle: "油皮修护乳液",
        desc: "兼顾修护与清爽哑光肤感。",
        benefit1: "帮助维持肌肤舒适平衡",
        benefit2: "轻盈乳液质地适合油皮",
        benefit3: "减少厚重油腻感",
        ingredients: "海茴香提取物、控油舒缓因子、屏障修护成分",
        skinType: "油皮、混油皮、暗沉油皮",
        howToUse: "在爽肤水或精华后，作为轻乳液使用。"
      },

      oliveMask: {
        name: "油橄榄面膜",
        subtitle: "舒缓维稳修护面膜",
        desc: "适合肌肤脆弱、泛红或状态不稳定时使用。",
        benefit1: "帮助舒缓脆弱不适肤况",
        benefit2: "支持屏障修护护理",
        benefit3: "适合阶段性集中护理",
        ingredients: "油橄榄叶提取物、泛醇、舒缓修护复配",
        skinType: "敏感肌、屏障脆弱肌、易泛红肌",
        howToUse: "洁面后敷 10–15 分钟，取下面膜后按摩吸收剩余精华。"
      },

      seaGrapeMask: {
        name: "海葡萄面膜",
        subtitle: "深层补水面膜",
        desc: "帮助快速补充水分，改善干燥粗糙。",
        benefit1: "帮助快速补充水分",
        benefit2: "支持更饱满的肌肤状态",
        benefit3: "适合干燥疲惫肌肤",
        ingredients: "海葡萄提取物、多重透明质酸、锁水因子",
        skinType: "干皮、缺水肌、粗糙肤质",
        howToUse: "洁面后敷 10–15 分钟，再按摩吸收剩余精华。"
      },

      astaxanthinMask: {
        name: "虾青素面膜",
        subtitle: "提亮焕肤面膜",
        desc: "帮助改善暗沉，提升肌肤光泽感。",
        benefit1: "帮助提升肤色明亮感",
        benefit2: "改善疲惫暗沉观感",
        benefit3: "面膜护理舒适便捷",
        ingredients: "高活性虾青素、烟酰胺、抗氧提亮复配",
        skinType: "暗沉肌、肤色不均肌、熬夜肌",
        howToUse: "洁面后敷 10–15 分钟，再继续后续保湿步骤。"
      }
    }
  },

  fr: {
    nav: {
      home: "Accueil",
      brand: "Marque",
      products: "Produits",
      partner: "Partenariat",
      contact: "Contact"
    },

    common: {
      viewMore: "Voir plus"
    },

    home: {
      heroTitle: "Eins Skincare",
      heroSubtitle: "Une approche scientifique du soin, centrée sur les ingrédients efficaces.",
      ctaProducts: "Découvrir les produits",
      ctaBrand: "À propos de Eins"
    },

    productsPage: {
      title: "Collection de Produits",
      subtitle: "Une gamme complète de soins pensée autour de la réparation, de l’éclat, de l’hydratation et de l’anti-âge.",
      gridTitle: "Découvrir la Collection",
      gridDesc: "Explorez des solutions ciblées pour l’éclat, la réparation, l’hydratation et l’équilibre quotidien."
    },

    brandPage: {
      title: "À propos de Eins",
      subtitle: "Une approche scientifique du soin, centrée sur les ingrédients efficaces.",
      storyTitle: "Notre histoire",
      storyText: "Eins a été créé pour ramener le soin à l’essentiel : des ingrédients efficaces, une logique de formulation claire et une valeur honnête.",
      missionTitle: "Notre mission",
      missionText: "Nous pensons qu’un soin de haute qualité ne devrait pas être défini uniquement par son prix. Notre objectif est de rendre le soin efficace plus accessible.",
      positioningTitle: "Positionnement de la marque",
      positioningText: "Eins est une marque de soin moderne axée sur l’efficacité, des textures raffinées, des formules simplifiées et une valeur durable.",
      valuesTitle: "Nos engagements",
      value1Title: "L’efficacité d’abord",
      value1Text: "Nous créons des produits qui répondent à de vrais besoins de la peau.",
      value2Title: "Logique des ingrédients",
      value2Text: "Nous privilégions les actifs essentiels plutôt qu’une complexité inutile.",
      value3Title: "Simplicité raffinée",
      value3Text: "Nous réduisons les excès en parfum, emballage et bruit marketing.",
      value4Title: "Qualité accessible",
      value4Text: "Nous voulons rendre de meilleurs choix de soin accessibles à plus de personnes.",
      audienceTitle: "Pour qui nous créons",
      audienceText: "Eins s’adresse aux utilisateurs attentifs qui recherchent des résultats, la qualité des ingrédients et une valeur durable."
    },

    partnerPage: {
      title: "Partenariat avec Eins",
      subtitle: "Une marque de soin construite autour de l’efficacité, de la clarté et d’une vraie valeur pour les canaux de distribution.",
      whyTitle: "Pourquoi Eins",
      whyText: "Eins associe un positionnement produit clair, une logique de prix adaptée au marché et une direction de marque cohérente pour une croissance multi-canale.",
      adv1Title: "Arguments produits clairs",
      adv1Text: "Chaque produit répond à un besoin clair comme la réparation, l’éclat, l’hydratation ou l’anti-âge.",
      adv2Title: "Positionnement à forte valeur",
      adv2Text: "La marque soutient un bon équilibre entre perception de qualité et compétitivité tarifaire.",
      adv3Title: "Adapté à plusieurs canaux",
      adv3Text: "Convient au e-commerce, au social commerce, aux enseignes beauté et aux marchés chinois d’outre-mer.",
      adv4Title: "Potentiel d’expansion durable",
      adv4Text: "La matrice produits permet de futurs lancements, du contenu éducatif et une croissance continue.",
      channelsTitle: "Canaux idéaux",
      channel1: "Boutiques en ligne et marketplaces",
      channel2: "Vente sociale et domaine privé",
      channel3: "Retail beauté et concept stores",
      channel4: "Marchés transfrontaliers et communautés chinoises à l’étranger",
      processTitle: "Processus de coopération",
      process1: "Premier échange sur la marque et le canal",
      process2: "Sélection produits et discussion du modèle de coopération",
      process3: "Support matériel et coordination commerciale",
      process4: "Lancement et suivi de la collaboration",
      ctaTitle: "Construisons ensemble",
      ctaText: "Nous accueillons les partenaires qui valorisent la clarté produit, la croissance de marque et la coopération à long terme.",
      ctaButton: "Nous contacter"
    },

    contactPage: {
      title: "Contacter Eins",
      subtitle: "Pour les partenariats, les demandes produits et la communication de marque.",
      infoTitle: "Informations de contact",
      formTitle: "Laisser un message",
      sendButton: "Envoyer",
      noteTitle: "Note commerciale",
      noteText: "Pour les demandes de partenariat, veuillez indiquer le nom de votre société, votre zone de marché et le mode de coopération souhaité."
    },

    productDetail: {
      keyBenefits: "Bienfaits clés",
      keyIngredients: "Ingrédients clés",
      skinType: "Convient à",
      howToUse: "Conseils d’utilisation"
    },

    products: {
      orangeCream: {
        name: "Crème Éclat Orange",
        subtitle: "Crème antioxydante éclat pour peau grasse",
        desc: "Aide à raviver l’éclat et offre une texture légère.",
        benefit1: "Aide à illuminer le teint terne",
        benefit2: "Soutient le soin antioxydant",
        benefit3: "Texture légère pour peau grasse",
        ingredients: "Idébénone, Niacinamide, Complexe antioxydant",
        skinType: "Peau grasse, peau mixte, teint terne",
        howToUse: "Appliquer après le sérum comme dernière étape du soin."
      },

      cream50: {
        name: "Crème Réparatrice 50%",
        subtitle: "Crème raffermissante et réparatrice",
        desc: "Pensée pour le confort, la réparation et la résistance cutanée.",
        benefit1: "Aide à soutenir la fermeté de la peau",
        benefit2: "Conforte la peau fragilisée",
        benefit3: "Adaptée aux routines axées sur la réparation",
        ingredients: "Pro-Xylane, complexe réparateur de barrière, mélange apaisant",
        skinType: "Peau sèche, peau mature, barrière fragilisée",
        howToUse: "Appliquer uniformément sur le visage et le cou après le sérum."
      },

      essenceLotion: {
        name: "Lotion Essence au Caviar",
        subtitle: "Lotion essence revitalisante luxueuse",
        desc: "Aide à améliorer douceur, éclat et fermeté.",
        benefit1: "Aide à lisser visiblement la peau",
        benefit2: "Soutient l’éclat du teint",
        benefit3: "Texture raffinée et confortable",
        ingredients: "Extrait de caviar, complexe de peptides",
        skinType: "Peau normale, peau sèche, peau mature",
        howToUse: "Appliquer après le nettoyage, avant le sérum ou la crème."
      },

      eyeCream: {
        name: "Crème Contour des Yeux Rose Pro-Xylane",
        subtitle: "Soin hydratant anti-âge pour les yeux",
        desc: "Cible sécheresse, ridules et regard fatigué.",
        benefit1: "Aide à atténuer l’apparence des ridules",
        benefit2: "Hydrate le contour de l’œil",
        benefit3: "Soutient un contour des yeux plus lisse",
        ingredients: "Pro-Xylane, extrait de rose, peptides anti-âge",
        skinType: "Contour des yeux sec, peau mature, regard fatigué",
        howToUse: "Appliquer matin et soir en petite quantité autour des yeux."
      },

      orchidOil: {
        name: "Huile Visage Orchidée",
        subtitle: "Huile nourrissante antioxydante",
        desc: "Aide à adoucir la peau et à améliorer le confort cutané.",
        benefit1: "Nourrit les peaux sèches",
        benefit2: "Aide à lisser le grain de peau",
        benefit3: "Apporte souplesse et confort",
        ingredients: "Extrait d’orchidée, squalane végétal, mélange d’huiles antioxydantes",
        skinType: "Peau sèche, peau rugueuse, teint terne",
        howToUse: "Utiliser quelques gouttes en dernière étape ou mélanger à la crème."
      },

      purpleRiceSerum: {
        name: "Sérum Riz Violet",
        subtitle: "Sérum repulpant et lissant",
        desc: "Aide la peau à paraître plus souple et rebondie.",
        benefit1: "Aide à améliorer le rebond de la peau",
        benefit2: "Soutient une apparence plus lisse",
        benefit3: "Texture sérum légère",
        ingredients: "Pro-Xylane, extrait de riz violet, acide hyaluronique",
        skinType: "Peau normale, peau sèche, premiers signes de l’âge",
        howToUse: "Appliquer sur peau propre avant la crème hydratante."
      },

      whiteTruffleMask: {
        name: "Masque de Nuit à la Truffe Blanche",
        subtitle: "Masque de nuit éclat et réparation",
        desc: "Un soin de nuit pour les peaux ternes et fatiguées.",
        benefit1: "Soutient la nutrition de nuit",
        benefit2: "Aide à améliorer l’éclat au réveil",
        benefit3: "Fini confortable pendant la nuit",
        ingredients: "Extrait de truffe blanche, niacinamide, mélange antioxydant",
        skinType: "Peau terne, peau sèche, peau fatiguée",
        howToUse: "Appliquer comme dernière étape de la routine du soir."
      },

      oilyToner: {
        name: "Lotion Équilibrante",
        subtitle: "Hydratation légère pour peau grasse",
        desc: "Rafraîchit et hydrate sans effet lourd.",
        benefit1: "Apporte une hydratation légère",
        benefit2: "Aide à équilibrer la peau grasse",
        benefit3: "Sensation fraîche et confortable",
        ingredients: "Peptide de cuivre, extraits botaniques, humectants légers",
        skinType: "Peau grasse, peau mixte, peau grasse sensible",
        howToUse: "Appliquer avec les mains ou un coton après le nettoyage."
      },

      seaFennelEmulsion: {
        name: "Émulsion au Fenouil Marin",
        subtitle: "Émulsion légère réparatrice pour peau grasse",
        desc: "Apaise la peau tout en gardant un fini frais et mat.",
        benefit1: "Soutient le confort et l’équilibre cutané",
        benefit2: "Texture légère pour peau grasse",
        benefit3: "Réduit l’effet gras après application",
        ingredients: "Extrait de fenouil marin, complexe réparateur, soutien séborégulateur",
        skinType: "Peau grasse, peau mixte, peau grasse terne",
        howToUse: "Appliquer après la lotion ou le sérum comme hydratant léger."
      },

      oliveMask: {
        name: "Masque Réparateur à l’Olive",
        subtitle: "Masque tissu apaisant et réparateur",
        desc: "Conçu pour les peaux sèches, fragiles ou stressées.",
        benefit1: "Aide à apaiser les peaux stressées",
        benefit2: "Soutient la réparation de la barrière cutanée",
        benefit3: "Adapté aux inconforts temporaires de la peau",
        ingredients: "Extrait de feuille d’olive, panthénol, complexe réparateur apaisant",
        skinType: "Peau sensible, barrière fragilisée, rougeurs",
        howToUse: "Appliquer 10 à 15 minutes puis faire pénétrer l’essence restante."
      },

      seaGrapeMask: {
        name: "Masque Hydratant Raisin de Mer",
        subtitle: "Masque hydratation intense",
        desc: "Aide à repulper la peau grâce à une hydratation durable.",
        benefit1: "Aide à recharger l’hydratation",
        benefit2: "Soutient une peau visiblement plus rebondie",
        benefit3: "Idéal pour les peaux sèches et fatiguées",
        ingredients: "Extrait de raisin de mer, acide hyaluronique multi-poids, complexe hydratant",
        skinType: "Peau sèche, peau déshydratée, peau rugueuse",
        howToUse: "Appliquer 10 à 15 minutes puis masser le sérum restant."
      },

      astaxanthinMask: {
        name: "Masque Éclat à l’Astaxanthine",
        subtitle: "Masque tissu antioxydant illuminateur",
        desc: "Aide à raviver l’éclat des peaux ternes et fatiguées.",
        benefit1: "Soutient une peau plus lumineuse",
        benefit2: "Aide à améliorer l’apparence du teint terne",
        benefit3: "Soin masque confortable et pratique",
        ingredients: "Astaxanthine, niacinamide, mélange illuminateur antioxydant",
        skinType: "Peau terne, teint irrégulier, peau fatiguée",
        howToUse: "Utiliser après le nettoyage pendant 10 à 15 minutes puis hydrater."
      }
    }
  }
};

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function applyTranslations(lang) {
  const langPack = translations[lang];
  if (!langPack) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNestedValue(langPack, key);
    if (value) {
      el.textContent = value;
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("siteLanguage", lang);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeBtn = document.querySelector(`.lang-switch button[onclick="setLanguage('${lang}')"]`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

function setLanguage(lang) {
  applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLanguage") || "en";
  applyTranslations(savedLang);
});
