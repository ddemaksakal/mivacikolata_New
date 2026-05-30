export type Badge =
  | 'ATELIER BLEND'
  | 'HANDMADE'
  | 'GOLD SERIES'
  | 'LIMITED EDITION'
  | 'PROFESSIONAL'
  | 'ORGANIC';

export type CategoryKey =
  | 'kuvertur'
  | 'dolgu-ganaj'
  | 'sos'
  | 'pralin'
  | 'kakao'
  | 'damla-cikolata'
  | 'drajeler'
  | 'special';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: CategoryKey;
  subcategory: string;
  badge: Badge;
  shortDescription: string;
  detailedDescription: string;
  cocoaContent?: string;
  weight: string[];
  usageArea: string;
  highlights: string[];
  image: string;
  featured: boolean;
  seoDescription: string;
}

export interface Category {
  key: CategoryKey;
  label: string;
  description: string;
}

export const CATEGORIES: Record<CategoryKey, Category> = {
  kuvertur: {
    key: 'kuvertur',
    label: 'Kuvertür',
    description: 'Profesyonel kuvertür çeşitleri ve özel harmanlamalar',
  },
  'dolgu-ganaj': {
    key: 'dolgu-ganaj',
    label: 'Dolgu & Ganaj',
    description: 'Pralin ve tatlı dolgularının temel bileşenleri',
  },
  sos: {
    key: 'sos',
    label: 'Soslar & Naplaj',
    description: 'Tatlı sunumlarına renk ve lezzet katan sos çeşitleri',
  },
  pralin: {
    key: 'pralin',
    label: 'Pralin & Krokant',
    description: 'Textüre ve aromalı bileşenler',
  },
  kakao: {
    key: 'kakao',
    label: 'Kakao Ürünleri',
    description: 'Saf kakao ve türevleri',
  },
  'damla-cikolata': {
    key: 'damla-cikolata',
    label: 'Damla Çikolata',
    description: 'Çeşitli çikolata damlaları',
  },
  drajeler: {
    key: 'drajeler',
    label: 'Drajeler',
    description: 'Renkli ve lezzetli drajelerimiz',
  },
  special: {
    key: 'special',
    label: 'Special Ürünler',
    description: 'Özel seçilmiş premium ürünler',
  },
};

// ═══════════════════════════════════════════════════════════════════
// KUVERTÜR (6 products)
// ═══════════════════════════════════════════════════════════════════

export const KUVERTUR_PRODUCTS: Product[] = [
  {
    id: 'kuv-001',
    name: 'Bitter Kuvertür %70',
    slug: 'bitter-kuvertur-70',
    category: 'kuvertur',
    subcategory: 'Bitter',
    badge: 'PROFESSIONAL',
    shortDescription: '%70 kakao içerikli profesyonel bitter kuvertür',
    detailedDescription:
      'Yüksek kakao oranıyla derin ve yoğun lezzet profili sunan, kaplama ve ganaj üretiminde yaygın kullanılan profesyonel bitter kuvertür.',
    cocoaContent: '%70',
    weight: ['2.5kg', '5kg', '25kg'],
    usageArea: 'Kaplama, Ganaj, Tablet Üretimi',
    highlights: ['%70 Kakao', 'Kolay Temperleme', 'Profesyonel Kullanım'],
    image: '/images/products/kuvertur-bitter-70.jpg',
    featured: true,
    seoDescription: '%70 bitter kuvertür, profesyonel çikolata üretimi için',
  },
  {
    id: 'kuv-002',
    name: 'Sütlü Kuvertür %38',
    slug: 'sutlu-kuvertur-38',
    category: 'kuvertur',
    subcategory: 'Sütlü',
    badge: 'PROFESSIONAL',
    shortDescription: '%38 kakao içerikli kremsi sütlü kuvertür',
    detailedDescription:
      'Dengeli kakao ve süt oranıyla kremsi bir tekstür sunan, geniş kullanım alanına sahip sütlü kuvertür.',
    cocoaContent: '%38',
    weight: ['2.5kg', '5kg', '25kg'],
    usageArea: 'Kaplama, Pralin, Mousse',
    highlights: ['%38 Kakao', 'Kremsi Yapı', 'Geniş Kullanım Alanı'],
    image: '/images/products/kuvertur-sutlu-38.jpg',
    featured: true,
    seoDescription: '%38 sütlü kuvertür, kremsi tekstürlü çikolata',
  },
  {
    id: 'kuv-003',
    name: 'Beyaz Kuvertür %35',
    slug: 'beyaz-kuvertur-35',
    category: 'kuvertur',
    subcategory: 'Beyaz',
    badge: 'PROFESSIONAL',
    shortDescription: '%35 kakao yağı içerikli beyaz kuvertür',
    detailedDescription:
      'Saf kakao yağı bazlı, vanilya aromalı ve nötr lezzet profiliyle renklendirme ve kaplama işlemlerine uygun profesyonel beyaz kuvertür.',
    cocoaContent: '%35 Kakao Yağı',
    weight: ['2.5kg', '5kg', '10kg'],
    usageArea: 'Kaplama, Dekorasyon, Ganaj',
    highlights: ['Saf Kakao Yağı', 'Vanilya Aromalı', 'Renklendirmeye Uygun'],
    image: '/images/products/kuvertur-beyaz-35.jpg',
    featured: true,
    seoDescription: 'Beyaz kuvertür, saf kakao yağı bazlı',
  },
  {
    id: 'kuv-004',
    name: 'Ruby Kuvertür %47',
    slug: 'ruby-kuvertur-47',
    category: 'kuvertur',
    subcategory: 'Ruby',
    badge: 'GOLD SERIES',
    shortDescription: 'Doğal pembe renkli ruby kuvertür',
    detailedDescription:
      'Boyasız, doğal işlem yöntemiyle elde edilen pembe renkli kuvertür. Hafif meyvemsi lezzet profiliyle butik çikolata üretiminde tercih edilir.',
    cocoaContent: '%47',
    weight: ['2.5kg', '5kg'],
    usageArea: 'Butik Üretim, Kaplama, Dekorasyon',
    highlights: ['Doğal Pembe Renk', 'Boyasız', 'Meyvemsi Profil'],
    image: '/images/products/kuvertur-ruby-47.jpg',
    featured: true,
    seoDescription: 'Ruby kuvertür, doğal pembe renkli çikolata',
  },
  {
    id: 'kuv-005',
    name: 'Bitter Kuvertür %85',
    slug: 'bitter-kuvertur-85',
    category: 'kuvertur',
    subcategory: 'Ekstra Bitter',
    badge: 'PROFESSIONAL',
    shortDescription: '%85 kakao içerikli ekstra bitter kuvertür',
    detailedDescription:
      'Minimum şeker içeriğiyle yoğun kakao aroması sunan ekstra bitter kuvertür. Güçlü lezzet profili gerektiren ürünlerde tercih edilir.',
    cocoaContent: '%85',
    weight: ['2.5kg', '5kg', '25kg'],
    usageArea: 'Tablet, Şeker İşleri, İçecek',
    highlights: ['%85 Kakao', 'Minimum Şeker', 'Yoğun Aroma'],
    image: '/images/products/kuvertur-bitter-85.jpg',
    featured: false,
    seoDescription: '%85 ekstra bitter kuvertür, profesyonel çikolata',
  },
  {
    id: 'kuv-006',
    name: 'Karamelize Beyaz Kuvertür',
    slug: 'karamelize-beyaz-kuvertur',
    category: 'kuvertur',
    subcategory: 'Karamelize',
    badge: 'GOLD SERIES',
    shortDescription: 'Karamelize edilmiş beyaz kuvertür',
    detailedDescription:
      'Beyaz kuvertürün yavaş pişirme yöntemiyle karamelize edilmesiyle elde edilen, toffee ve karamel aromalı kuvertür çeşidi.',
    cocoaContent: '%36',
    weight: ['2.5kg', '5kg'],
    usageArea: 'Pralin, Tart, Özel Üretim',
    highlights: ['Karamel Aroması', 'Toffee Notası', 'Özel Üretim'],
    image: '/images/products/kuvertur-karamelize-beyaz.jpg',
    featured: false,
    seoDescription: 'Karamelize beyaz kuvertür, toffee aromalı',
  },
];

// ═══════════════════════════════════════════════════════════════════
// DOLGU & GANAJ (6 products)
// ═══════════════════════════════════════════════════════════════════

export const DOLGU_GANAJ_PRODUCTS: Product[] = [
  {
    id: 'dol-001',
    name: 'Fındık Ezmesi Dolgusu',
    slug: 'findik-ezmesi-dolgusu',
    category: 'dolgu-ganaj',
    subcategory: 'Fındık',
    badge: 'PROFESSIONAL',
    shortDescription: 'Kavrulmuş fındıktan hazırlanan pralin dolgusu',
    detailedDescription:
      'Kavrulmuş iç fındığın öğütülmesiyle elde edilen, pürüzsüz tekstürlü ve yoğun fındık aromalı profesyonel pralin dolgusu.',
    weight: ['1kg', '5kg', '10kg'],
    usageArea: 'Pralin Dolgu, Trüf, Tablet İçi',
    highlights: ['Yüksek Fındık İçeriği', 'Pürüzsüz Tekstür', 'Uzun Raf Ömrü'],
    image: '/images/products/dolgu-findik-ezmesi.jpg',
    featured: true,
    seoDescription: 'Fındık ezmesi dolgusu, pralin ve trüf üretimi için',
  },
  {
    id: 'dol-002',
    name: 'Karamel Dolgusu',
    slug: 'karamel-dolgusu',
    category: 'dolgu-ganaj',
    subcategory: 'Karamel',
    badge: 'PROFESSIONAL',
    shortDescription: 'Pişirme stabilitesi yüksek karamel dolgusu',
    detailedDescription:
      'Tereyağı ve şeker bazlı, pişirme ve soğutma süreçlerine dayanıklı, kolay uygulanabilir profesyonel karamel dolgusu.',
    weight: ['1kg', '3kg', '5kg'],
    usageArea: 'Pralin, Tart, Pasta Arası',
    highlights: ['Fırın Stabil', 'Kolay Uygulama', 'Uzun Raf Ömrü'],
    image: '/images/products/dolgu-karamel.jpg',
    featured: true,
    seoDescription: 'Karamel dolgusu, fırın stabil profesyonel üretim',
  },
  {
    id: 'dol-003',
    name: 'Bitter Çikolata Ganajı',
    slug: 'bitter-cikolata-ganaji',
    category: 'dolgu-ganaj',
    subcategory: 'Ganaj',
    badge: 'PROFESSIONAL',
    shortDescription: '%65 bitter çikolata ve krema bazlı ganaj',
    detailedDescription:
      '%65 bitter kuvertür ve krema ile hazırlanan, dengeli lezzet profili ve uzun raf ömrüyle öne çıkan profesyonel ganaj konsantresi.',
    cocoaContent: '%65',
    weight: ['1kg', '2kg', '5kg'],
    usageArea: 'Trüf, Pralin Dolgu, Tart',
    highlights: ['%65 Kakao', 'Krema Bazlı', 'Kolay Uygulanabilir'],
    image: '/images/products/ganaj-bitter-65.jpg',
    featured: true,
    seoDescription: 'Bitter çikolata ganajı, trüf üretimi için',
  },
  {
    id: 'dol-004',
    name: 'Sütlü Çikolata Ganajı',
    slug: 'sutlu-cikolata-ganaji',
    category: 'dolgu-ganaj',
    subcategory: 'Ganaj',
    badge: 'PROFESSIONAL',
    shortDescription: 'Kremsi sütlü çikolata ganajı',
    detailedDescription:
      'Sütlü kuvertür ve krema karışımından elde edilen, yumuşak tekstürlü ve geniş kullanım alanına sahip profesyonel sütlü ganaj.',
    cocoaContent: '%38',
    weight: ['1kg', '2kg', '5kg'],
    usageArea: 'Pralin, Trüf, Pasta Arası',
    highlights: ['Kremsi Yapı', 'Kolay Uygulama', 'Geniş Kullanım'],
    image: '/images/products/ganaj-sutlu-38.jpg',
    featured: false,
    seoDescription: 'Sütlü çikolata ganajı, kremsi tekstürlü',
  },
  {
    id: 'dol-005',
    name: 'Fıstık Ezmesi Dolgusu',
    slug: 'fistik-ezmesi-dolgusu',
    category: 'dolgu-ganaj',
    subcategory: 'Fıstık',
    badge: 'PROFESSIONAL',
    shortDescription: 'Kavrulmuş antepfıstığı ezmesi dolgusu',
    detailedDescription:
      'Kavrulmuş antepfıstığından üretilen, yoğun renk ve karakteristik aromasıyla öne çıkan profesyonel fıstık ezmesi dolgusu.',
    weight: ['1kg', '5kg'],
    usageArea: 'Pralin, Tablet İçi, Bar Üretimi',
    highlights: ['Yüksek Fıstık İçeriği', 'Doğal Renk', 'Yoğun Aroma'],
    image: '/images/products/dolgu-fistik-ezmesi.jpg',
    featured: false,
    seoDescription: 'Fıstık ezmesi dolgusu, antepfıstığı bazlı',
  },
  {
    id: 'dol-006',
    name: 'Badem Ezmesi Dolgusu',
    slug: 'badem-ezmesi-dolgusu',
    category: 'dolgu-ganaj',
    subcategory: 'Badem',
    badge: 'PROFESSIONAL',
    shortDescription: 'Kavrulmuş bademden hazırlanan dolgu ezmesi',
    detailedDescription:
      'İnce öğütülmüş kavrulmuş bademden üretilen, hafif tatlı ve yoğun badem aromalı çok amaçlı dolgu ezmesi.',
    weight: ['1kg', '5kg'],
    usageArea: 'Pralin, Marzipan, Tart',
    highlights: ['Kavrulmuş Badem', 'İnce Öğütme', 'Çok Amaçlı'],
    image: '/images/products/dolgu-badem-ezmesi.jpg',
    featured: false,
    seoDescription: 'Badem ezmesi dolgusu, çok amaçlı kullanım',
  },
];

// ═══════════════════════════════════════════════════════════════════
// SOSLAR & NAPLAJ (5 products)
// ═══════════════════════════════════════════════════════════════════

export const SOS_PRODUCTS: Product[] = [
  {
    id: 'sos-001',
    name: 'Çikolata Ayna Glazesi',
    slug: 'cikolata-ayna-glazesi',
    category: 'sos',
    subcategory: 'Glaze',
    badge: 'PROFESSIONAL',
    shortDescription: 'Parlak yüzey veren çikolata ayna glazesi',
    detailedDescription:
      'Isıtıldığında akıcı, soğuduğunda parlak ayna yüzeyi oluşturan profesyonel çikolata kaplama sosu. Entremet ve pasta kaplamada yaygın kullanılır.',
    weight: ['1kg', '3kg', '10kg'],
    usageArea: 'Entremet Kaplama, Pasta, Tart Üzeri',
    highlights: ['Parlak Yüzey', 'Kolay Uygulama', 'Stabil Yapı'],
    image: '/images/products/sos-cikolata-ayna.jpg',
    featured: true,
    seoDescription: 'Çikolata ayna glazesi, pasta kaplama sosu',
  },
  {
    id: 'sos-002',
    name: 'Karamel Sos',
    slug: 'karamel-sos',
    category: 'sos',
    subcategory: 'Karamel',
    badge: 'PROFESSIONAL',
    shortDescription: 'Akıcı yapıda tereyağlı karamel sos',
    detailedDescription:
      'Tereyağı ve şeker bazlı, sıcak ve soğuk servise uygun, kolay dozajlanabilir profesyonel karamel sos.',
    weight: ['1kg', '3kg', '5kg'],
    usageArea: 'Tart, Dondurma, Pasta Üzeri',
    highlights: ['Akıcı Yapı', 'Sıcak-Soğuk Servis', 'Kolay Dozaj'],
    image: '/images/products/sos-karamel.jpg',
    featured: true,
    seoDescription: 'Karamel sos, tereyağlı servis sosu',
  },
  {
    id: 'sos-003',
    name: 'Çilek Sosu',
    slug: 'cilek-sosu',
    category: 'sos',
    subcategory: 'Meyve',
    badge: 'PROFESSIONAL',
    shortDescription: 'Yüksek meyve içerikli çilek servis sosu',
    detailedDescription:
      'Çilek püresi bazlı, canlı rengi ve doğal aromasıyla öne çıkan, sıcak ve soğuk uygulamalara uygun profesyonel çilek sosu.',
    weight: ['1kg', '3kg'],
    usageArea: 'Pasta, Dondurma, Tabak Sunumu',
    highlights: ['Yüksek Meyve İçeriği', 'Doğal Renk', 'Isıya Dayanıklı'],
    image: '/images/products/sos-cilek.jpg',
    featured: true,
    seoDescription: 'Çilek sosu, yüksek meyve içerikli',
  },
  {
    id: 'sos-004',
    name: 'Beyaz Çikolata Glazesi',
    slug: 'beyaz-cikolata-glazesi',
    category: 'sos',
    subcategory: 'Glaze',
    badge: 'PROFESSIONAL',
    shortDescription: 'Parlak beyaz çikolata kaplama glazesi',
    detailedDescription:
      'Beyaz kuvertür bazlı, pürüzsüz ve parlak yüzey veren, renklendirmeye uygun profesyonel glaze sosu.',
    weight: ['1kg', '3kg'],
    usageArea: 'Pasta Kaplama, Tart, Ekler',
    highlights: ['Parlak Yüzey', 'Renklendirilebilir', 'Kolay Uygulama'],
    image: '/images/products/sos-beyaz-glaze.jpg',
    featured: false,
    seoDescription: 'Beyaz çikolata glazesi, renklendirilebilir',
  },
  {
    id: 'sos-005',
    name: 'Ahududu Sosu',
    slug: 'ahududu-sosu',
    category: 'sos',
    subcategory: 'Meyve',
    badge: 'PROFESSIONAL',
    shortDescription: 'Yoğun renkli ahududu servis sosu',
    detailedDescription:
      'Ahududu püresi bazlı, asidik dengesi ve yoğun rengiyle öne çıkan, pasta ve tatlı sunumlarında kullanılan profesyonel meyve sosu.',
    weight: ['1kg', '3kg'],
    usageArea: 'Mousse, Tart, Pasta Üzeri',
    highlights: ['Yoğun Renk', 'Asit Dengeli', 'Meyve Bazlı'],
    image: '/images/products/sos-ahududu.jpg',
    featured: false,
    seoDescription: 'Ahududu sosu, meyve bazlı servis sosu',
  },
];

// ═══════════════════════════════════════════════════════════════════
// PRALİN & KROKANT (6 products)
// ═══════════════════════════════════════════════════════════════════

export const PRALIN_PRODUCTS: Product[] = [
  {
    id: 'prl-001',
    name: 'Fındık Pralinesi %65',
    slug: 'findik-pralinesi-65',
    category: 'pralin',
    subcategory: 'Pralin',
    badge: 'PROFESSIONAL',
    shortDescription: '%65 fındık oranında taş değirmen pralinesi',
    detailedDescription:
      'Kavrulmuş iç fındığın taş değirmende öğütülmesiyle hazırlanan, yoğun fındık aromalı ve akıcı tekstürlü profesyonel pralin kütlesi.',
    weight: ['1kg', '5kg', '10kg'],
    usageArea: 'Pralin Merkezi, Trüf, Pasta Kremaları',
    highlights: ['%65 Fındık', 'Taş Değirmen', 'Akıcı Tekstür'],
    image: '/images/products/pralin-findik-65.jpg',
    featured: true,
    seoDescription: 'Fındık pralinesi %65, taş değirmen',
  },
  {
    id: 'prl-002',
    name: 'Badem Pralinesi %60',
    slug: 'badem-pralinesi-60',
    category: 'pralin',
    subcategory: 'Pralin',
    badge: 'PROFESSIONAL',
    shortDescription: '%60 badem oranında pralin kütlesi',
    detailedDescription:
      'Kavrulmuş bademin öğütülmesiyle elde edilen, hafif tatlı ve yoğun badem aromalı, pürüzsüz yapıda profesyonel pralin kütlesi.',
    weight: ['1kg', '5kg'],
    usageArea: 'Financier, Tart, Pralin Dolgu',
    highlights: ['%60 Badem', 'Kavrulmuş', 'Pürüzsüz Yapı'],
    image: '/images/products/pralin-badem-60.jpg',
    featured: true,
    seoDescription: 'Badem pralinesi %60, profesyonel üretim',
  },
  {
    id: 'prl-003',
    name: 'Wafer Krokant',
    slug: 'wafer-krokant',
    category: 'pralin',
    subcategory: 'Krokant',
    badge: 'PROFESSIONAL',
    shortDescription: 'İnce wafer kırığı, çıtırlık için',
    detailedDescription:
      'İnce wafer yapraklarından elde edilen, pralin ve çikolata ürünlerine çıtır tekstür katmak için kullanılan profesyonel krokant malzemesi.',
    weight: ['500g', '2kg'],
    usageArea: 'Pralin Tabanı, Çıtır Katman, Tablet İçi',
    highlights: ['Ultra İnce', 'Uzun Çıtırlık', 'Nem Geçirmez'],
    image: '/images/products/krokant-wafer.jpg',
    featured: true,
    seoDescription: 'Wafer krokant, pralin ve tablet üretimi',
  },
  {
    id: 'prl-004',
    name: 'Fındık Krokantı',
    slug: 'findik-krokanti',
    category: 'pralin',
    subcategory: 'Krokant',
    badge: 'PROFESSIONAL',
    shortDescription: 'Kavrulmuş fındık ve şeker krokantı',
    detailedDescription:
      'Kavrulmuş iç fındığın şekerle kaplanmasıyla elde edilen, çıtır tekstürlü ve fındık aromalı krokant parçaları.',
    weight: ['500g', '2kg'],
    usageArea: 'Dekor, Pasta Üzeri, Dondurma',
    highlights: ['Kavrulmuş Fındık', 'Şekerli Kaplama', 'Çıtır Yapı'],
    image: '/images/products/krokant-findik.jpg',
    featured: false,
    seoDescription: 'Fındık krokantı, dekoratif öğe',
  },
  {
    id: 'prl-005',
    name: 'Badem Krokantı',
    slug: 'badem-krokanti',
    category: 'pralin',
    subcategory: 'Krokant',
    badge: 'PROFESSIONAL',
    shortDescription: 'Dilimlenmiş kavrulmuş badem krokantı',
    detailedDescription:
      'Dilimlenmiş bademin şekerle karanelize edilmesiyle hazırlanan, ince ve çıtır yapıda profesyonel badem krokantı.',
    weight: ['500g', '2kg'],
    usageArea: 'Dekor, Pasta Üzeri, Tart',
    highlights: ['Dilimlenmiş Badem', 'Karanelize', 'Dekor Uyumlu'],
    image: '/images/products/krokant-badem.jpg',
    featured: false,
    seoDescription: 'Badem krokantı, karanelize edilmiş',
  },
  {
    id: 'prl-006',
    name: 'Karışık Kuruyemiş Pralinesi',
    slug: 'karisik-kuruyemis-pralinesi',
    category: 'pralin',
    subcategory: 'Özel Pralin',
    badge: 'GOLD SERIES',
    shortDescription: 'Fındık, badem ve fıstık karışımı pralinesi',
    detailedDescription:
      'Fındık, badem ve antepfıstığının birlikte kavrulup öğütülmesiyle hazırlanan, kompleks aromalı karışık kuruyemiş pralinesi.',
    weight: ['1kg', '3kg'],
    usageArea: 'Özel Üretim, Gourmet Pralin, Tablet',
    highlights: ['3 Çeşit Kuruyemiş', 'Kompleks Aroma', 'Özel Üretim'],
    image: '/images/products/pralin-karisik-kuruyemis.jpg',
    featured: false,
    seoDescription: 'Karışık kuruyemiş pralinesi, gourmet',
  },
];

// ═══════════════════════════════════════════════════════════════════
// KAKAO ÜRÜNLERI (6 products)
// ═══════════════════════════════════════════════════════════════════

export const KAKAO_PRODUCTS: Product[] = [
  {
    id: 'kak-001',
    name: 'Alkalize Toz Kakao',
    slug: 'alkalize-toz-kakao',
    category: 'kakao',
    subcategory: 'Toz Kakao',
    badge: 'PROFESSIONAL',
    shortDescription: '%22-24 yağ oranında alkalize toz kakao',
    detailedDescription:
      'Hollanda prosesiyle alkalize edilen, derin rengi ve yumuşak lezzet profiliyle fırıncılık ve içecek üretiminde yaygın kullanılan profesyonel toz kakao.',
    weight: ['500g', '1kg', '5kg', '25kg'],
    usageArea: 'Kek, Kurabiye, İçecek, Toz Karışımlar',
    highlights: ['%22-24 Yağ Oranı', 'Koyu Renk', 'Geniş Kullanım'],
    image: '/images/products/kakao-alkalize-toz.jpg',
    featured: true,
    seoDescription: 'Alkalize toz kakao, profesyonel fırıncılık',
  },
  {
    id: 'kak-002',
    name: 'Doğal Toz Kakao',
    slug: 'dogal-toz-kakao',
    category: 'kakao',
    subcategory: 'Toz Kakao',
    badge: 'PROFESSIONAL',
    shortDescription: '%10-12 yağ oranında doğal toz kakao',
    detailedDescription:
      'Alkalizasyon işlemi uygulanmamış, doğal asidik profili korunmuş, açık kahve rengiyle tanınan standart toz kakao.',
    weight: ['500g', '1kg', '5kg', '25kg'],
    usageArea: 'Kek, Sos, Sıcak İçecek',
    highlights: ['Doğal İşlem', 'Asidik Profil', 'Standart Kullanım'],
    image: '/images/products/kakao-dogal-toz.jpg',
    featured: true,
    seoDescription: 'Doğal toz kakao, asidik profil',
  },
  {
    id: 'kak-003',
    name: 'Kakao Yağı',
    slug: 'kakao-yagi',
    category: 'kakao',
    subcategory: 'Kakao Yağı',
    badge: 'PROFESSIONAL',
    shortDescription: 'Saf ve rafine kakao yağı',
    detailedDescription:
      'Kakao kütlesinden preslenerek elde edilen, rafine edilmiş saf kakao yağı. Kuvertür üretimi ve temperleme işlemlerinde kullanılır.',
    weight: ['1kg', '5kg', '10kg'],
    usageArea: 'Kuvertür Üretimi, Temperleme, Kaplama İnceltme',
    highlights: ['Saf Kakao Yağı', 'Rafine', 'Çok Amaçlı'],
    image: '/images/products/kakao-yagi.jpg',
    featured: true,
    seoDescription: 'Kakao yağı, saf ve rafine',
  },
  {
    id: 'kak-004',
    name: 'Kakao Kütlesi',
    slug: 'kakao-kutlesi',
    category: 'kakao',
    subcategory: 'Kakao Kütlesi',
    badge: 'PROFESSIONAL',
    shortDescription: '%100 saf kakao kütlesi, şekersiz',
    detailedDescription:
      'Kakao çekirdeklerinin kavrulup öğütülmesiyle elde edilen %100 saf kakao kütlesi. Kuvertür ve bitter çikolata üretiminin temel hammaddesi.',
    cocoaContent: '%100',
    weight: ['1kg', '5kg', '25kg'],
    usageArea: 'Kuvertür Üretimi, Bitter Çikolata',
    highlights: ['%100 Kakao', 'Şekersiz', 'Temel Hammadde'],
    image: '/images/products/kakao-kutlesi.jpg',
    featured: false,
    seoDescription: 'Kakao kütlesi %100, saf şekersiz',
  },
  {
    id: 'kak-005',
    name: 'Kakao Nibs',
    slug: 'kakao-nibs',
    category: 'kakao',
    subcategory: 'Kakao Nibs',
    badge: 'PROFESSIONAL',
    shortDescription: 'Kırık ve kavrulmuş kakao çekirdeği parçaları',
    detailedDescription:
      'Kavrulmuş kakao çekirdeklerinin kırılmasıyla elde edilen, yoğun kakao aromalı ve çıtır tekstürlü kakao nibs parçaları.',
    weight: ['500g', '2kg'],
    usageArea: 'Dekor, Granola, Tablet İçi, Krema',
    highlights: ['Kavrulmuş', 'Çıtır Tekstür', 'Çok Amaçlı'],
    image: '/images/products/kakao-nibs.jpg',
    featured: false,
    seoDescription: 'Kakao nibs, kavrulmuş çiçek parçaları',
  },
  {
    id: 'kak-006',
    name: 'Temperleme Kakao Yağı Tozu',
    slug: 'temperleme-kakao-yagi-tozu',
    category: 'kakao',
    subcategory: 'Yardımcı',
    badge: 'PROFESSIONAL',
    shortDescription: 'Toz formda kakao yağı, temperleme kolaylaştırıcı',
    detailedDescription:
      'Beta kristal formunda üretilmiş toz kakao yağı. Erimiş çikolataya %2 oranında eklenerek temperleme işlemini kolaylaştırır ve hızlandırır.',
    weight: ['550g'],
    usageArea: 'Hızlı Temperleme, Çikolata Kaplama',
    highlights: ['%2 Kullanım Oranı', 'Hızlı Temperleme', 'Kolay Uygulama'],
    image: '/images/products/kakao-temperleme-tozu.jpg',
    featured: false,
    seoDescription: 'Temperleme kakao yağı tozu, hızlı temperleme',
  },
];

// ═══════════════════════════════════════════════════════════════════
// DAMLA ÇİKOLATALAR (4 products)
// ═════
export const DAMLA_CIKOLATA_PRODUCTS: Product[] = [
  {
    id: 'dcl-001',
    name: 'Bitter Damla Çikolata %70',
    slug: 'bitter-damla-cikolata-70', 
    category: 'damla-cikolata',
    subcategory: 'Bitter',
    badge: 'PROFESSIONAL',
    shortDescription: '%70 kakao içerikli bitter damla çikolata',
    detailedDescription:
      'Yüksek kakao içeriğiyle yoğun aroma sunan, profesyonel kullanıma uygun bitter damla çikolata. Kek, kurabiye ve tatlılarda ideal.',
    cocoaContent: '%70',
    weight: ['500g', '1kg', '5kg'],
    usageArea: 'Kek, Kurabiye, Tatlı Üzeri',
    highlights: ['%70 Kakao', 'Yoğun Aroma', 'Profesyonel Kullanım'],
    image: '/images/products/damla-bitter-70.jpg',
    featured: true,
    seoDescription: 'Bitter damla çikolata %70, yoğun aroma',
  },
  {
    id: 'dcl-002',
    name: 'Sütlü Damla Çikolata %38',
    slug: 'sutlu-damla-cikolata-38',
    category: 'damla-cikolata',
    subcategory: 'Sütlü',
    badge: 'PROFESSIONAL',
    shortDescription: '%38 kakao içerikli sütlü damla çikolata',
    detailedDescription:
      'Kakao ve süt oranının dengeli olduğu, kremsi yapıya sahip profesyonel sütlü damla çikolata. Kek ve kurabiye tariflerinde tercih edilir.',
    cocoaContent: '%38',
    weight: ['500g', '1kg', '5kg'],
    usageArea: 'Kek, Kurabiye, Tatlı Üzeri',      
    highlights: ['%38 Kakao', 'Kremsi Yapı', 'Profesyonel Kullanım'],
    image: '/images/products/damla-sutlu-38.jpg',
    featured: true,
    seoDescription: 'Sütlü damla çikolata %38, kremsi yapı',
  },
  {
    id: 'dcl-003',
    name: 'Fildişi Damla Çikolata %35',
    slug: 'fildisi-damla-cikolata-35',
    category: 'damla-cikolata',
    subcategory: 'Fildişi',
    badge: 'PROFESSIONAL',
    shortDescription: '%35 kakao yağı içerikli fildişi damla çikolata',
    detailedDescription:
      'Saf kakao yağı bazlı, kremsi ve vanilya aromalı profesyonel fildişi damla çikolata. Kek ve kurabiye tariflerinde yumuşak renk ve lezzet için ideal.',
    cocoaContent: '%35 Kakao Yağı',
    weight: ['500g', '1kg', '5kg'],
    usageArea: 'Kek, Kurabiye, Tatlı Üzeri',
    highlights: ['%35 Kakao Yağı', 'Kremsi Renk', 'Profesyonel Kullanım'],
    image: '/images/products/damla-fildisi-35.jpg',
    featured: true,
    seoDescription: 'Fildişi damla çikolata %35 kakao yağı',
  },
  {
    id: 'dcl-004',
    name: 'Ruby Damla Çikolata %47',
    slug: 'ruby-damla-cikolata-47',
    category: 'damla-cikolata',
    subcategory: 'Ruby',
    badge: 'GOLD SERIES',
    shortDescription: '%47 kakao içerikli ruby damla çikolata',
    detailedDescription:
      'Doğal pembe renkli, meyvemsi aromaya sahip ruby damla çikolata. Kek ve kurabiye tariflerinde görsel ve lezzet farkı yaratmak için ideal profesyonel ürün.',
    cocoaContent: '%47',
    weight: ['500g', '1kg', '5kg'],
    usageArea: 'Kek, Kurabiye, Tatlı Üzeri',
    highlights: ['%47 Kakao', 'Meyvemsi Aroma', 'Görsel Fark'],
    image: '/images/products/damla-ruby-47.jpg',
    featured: true,
    seoDescription: 'Ruby damla çikolata %47, meyvemsi aroma',
  },
];  


// ═══════════════════════════════════════════════════════════════════
// DRAJELER (19 products)
// ═══════════════════════════════════════════════════════════════════

export const DRAJELER_PRODUCTS: Product[] = [
  {
    id: 'drj-001',
    name: 'Antepfıstığı Draje',
    slug: 'antepfistigi-draje',
    category: 'drajeler',
    subcategory: 'Kuruyemiş',
    badge: 'HANDMADE',
    shortDescription: 'Antepfıstığı çekirdeğinin çikolata ile kaplanmış hali',
    detailedDescription:
      'Kaliteli antepfıstığı çekirdeğinin ince çikolata tabakasıyla kaplanmış, lezzetli ve çıtır drajeler. Tatlı seçenekleri ve hediye paketlerine ideal.',
    weight: ['500g', '1kg', '2kg'],
    usageArea: 'Hediye Paketi, Tatlı Seçenekleri, Masa Sunumu',
    highlights: ['Antepfıstığı İçi', 'Çikolata Kaplaması', 'Çıtır Tekstür'],
    image: '/images/products/draje-antepfistigi.jpg',
    featured: true,
    seoDescription: 'Antepfıstığı draje, çikolata kaplı',
  },
  {
    id: 'drj-002',
    name: 'Badem Draje',
    slug: 'badem-draje',
    category: 'drajeler',
    subcategory: 'Kuruyemiş',
    badge: 'HANDMADE',
    shortDescription: 'Kavrulmuş badem çekirdeğinin çikolata kaplaması',
    detailedDescription:
      'Taze kavrulmuş badem çekirdeğinin lezzetli çikolata tabakasıyla kaplanmış, yumuşak dış ve çıtır iç yapıya sahip drajeler.',
    weight: ['500g', '1kg', '2kg'],
    usageArea: 'Hediye Paketi, Tatlı Seçenekleri, Parti',
    highlights: ['Kavrulmuş Badem', 'İnce Kaplama', 'Yumuşak Dış'],
    image: '/images/products/draje-badem.jpg',
    featured: true,
    seoDescription: 'Badem draje, çikolata kaplı badem',
  },
  {
    id: 'drj-003',
    name: 'Badem Şekeri',
    slug: 'badem-sekeri',
    category: 'drajeler',
    subcategory: 'Şeker Coated',
    badge: 'HANDMADE',
    shortDescription: 'Şeker kaplaması yapılmış kavrulmuş badem',
    detailedDescription:
      'Kavrulmuş bademin kırılgan şeker kaplamasıyla kaplı, tatlı ve çıtır yapıda badem şekeri. Nostaljik tatlı tercihi.',
    weight: ['500g', '1kg'],
    usageArea: 'Tatlı Seçenekleri, Nostalji Ürünü, Hediye',
    highlights: ['Kavrulmuş Badem', 'Şeker Kaplama', 'Çıtır Yapı'],
    image: '/images/products/draje-badem-sekeri.jpg',
    featured: false,
    seoDescription: 'Badem şekeri, şeker kaplı badem',
  },
  {
    id: 'drj-004',
    name: 'Bonibon',
    slug: 'bonibon',
    category: 'drajeler',
    subcategory: 'Bonbon',
    badge: 'HANDMADE',
    shortDescription: 'Renkli ve lezzetli çikolata bonbonları',
    detailedDescription:
      'Çeşitli tatlarıyla hazırlanan, renkli çikolata kaplamasıyla sunulan bonbon drajeler. Her bir tadında farklı bir lezzet deneyimi.',
    weight: ['500g', '1kg'],
    usageArea: 'Hediye Paketi, Tatlı Seçenekleri, Özel Günler',
    highlights: ['Çok Tatl', 'Renkli Kaplama', 'Gourmet Deneyim'],
    image: '/images/products/draje-bonibon.jpg',
    featured: true,
    seoDescription: 'Bonibon, renkli çikolata bonbonları',
  },
  {
    id: 'drj-005',
    name: 'Bronz Kahve',
    slug: 'bronz-kahve',
    category: 'drajeler',
    subcategory: 'Kahve Aromalı',
    badge: 'HANDMADE',
    shortDescription: 'Kahve aromalı çikolata drajesi',
    detailedDescription:
      'Yoğun kahve aromasıyla hazırlanan, kahve severler için tasarlanmış bronze renkli çikolata kaplamalı draje.',
    weight: ['500g', '1kg'],
    usageArea: 'Kahve Severleri, Tatlı Seçenekleri, Hediye',
    highlights: ['Kahve Aroması', 'Bronze Renk', 'Yoğun Tat'],
    image: '/images/products/draje-bronz-kahve.jpg',
    featured: false,
    seoDescription: 'Bronz kahve draje, kahve aromalı',
  },
  {
    id: 'drj-006',
    name: 'Çakıltaşı',
    slug: 'cakiltasi',
    category: 'drajeler',
    subcategory: 'Klasik',
    badge: 'HANDMADE',
    shortDescription: 'Geleneksel çakıltaşı şekli draje',
    detailedDescription:
      'Çıtır ve hafif kavrulmuş çekirdeğin şeker tarafından çevrili, geleneksel çakıltaşı şeklinde draje. Klasik tatlı tercihlerinin favorisi.',
    weight: ['500g', '1kg'],
    usageArea: 'Tatlı Seçenekleri, Geleneksel, Masa Sunumu',
    highlights: ['Geleneksel Şekil', 'Şeker Kaplaması', 'Çıtır Yapı'],
    image: '/images/products/draje-cakiltasi.jpg',
    featured: true,
    seoDescription: 'Çakıltaşı draje, geleneksel çikolata',
  },
  {
    id: 'drj-007',
    name: 'Fındık Draje',
    slug: 'findik-draje',
    category: 'drajeler',
    subcategory: 'Kuruyemiş',
    badge: 'HANDMADE',
    shortDescription: 'İç fındığın çikolata kaplaması',
    detailedDescription:
      'Seçilmiş iç fındığının ince çikolata tabakasıyla kaplanmış, fındık severlerin favori seçeneği olan draje.',
    weight: ['500g', '1kg', '2kg'],
    usageArea: 'Hediye Paketi, Tatlı Seçenekleri, Premium Sunumu',
    highlights: ['İç Fındık', 'Çikolata Kaplaması', 'Premium Kalite'],
    image: '/images/products/draje-findik.jpg',
    featured: true,
    seoDescription: 'Fındık draje, çikolata kaplı fındık',
  },
  {
    id: 'drj-008',
    name: 'Kahve Mix',
    slug: 'kahve-mix',
    category: 'drajeler',
    subcategory: 'Kahve Aromalı',
    badge: 'HANDMADE',
    shortDescription: 'Çeşitli kahve aromalı drajeler karışımı',
    detailedDescription:
      'Kahve aromasının farklı yoğunluklarda sunulduğu, çeşitli çikolata kaplamalı kahve draje mix. Her birinde farklı bir kahve deneyimi.',
    weight: ['500g', '1kg'],
    usageArea: 'Kahve Seçenekleri, Hediye Paketi, Profesyonel Sunumu',
    highlights: ['Kahve Aroması', 'Çeşitli Çikolata', 'Mix Ürün'],
    image: '/images/products/draje-kahve-mix.jpg',
    featured: false,
    seoDescription: 'Kahve mix draje, karışık kahve aromalı',
  },
  {
    id: 'drj-009',
    name: 'Kalp Draje',
    slug: 'kalp-draje',
    category: 'drajeler',
    subcategory: 'Özel Şekil',
    badge: 'HANDMADE',
    shortDescription: 'Sevgi sembolü kalp şeklinde draje',
    detailedDescription:
      'Romantik kalp şeklinde, çikolata ve renkli kaplama seçenekleriyle sunulan draje. Sevgili hediyesi ve özel günlerin favorisi.',
    weight: ['250g', '500g'],
    usageArea: 'Sevgili Hediyesi, Özel Günler, Romantik Sunumu',
    highlights: ['Kalp Şekli', 'Romantik Tasarım', 'Özel Kaplama'],
    image: '/images/products/draje-kalp.jpg',
    featured: true,
    seoDescription: 'Kalp draje, romantik şekil',
  },
  {
    id: 'drj-010',
    name: 'Mokka Fındık',
    slug: 'mokka-findik',
    category: 'drajeler',
    subcategory: 'Kahve-Fındık',
    badge: 'HANDMADE',
    shortDescription: 'Fındık içi, mokka aromalı çikolata kaplaması',
    detailedDescription:
      'Sıcak mokka aromasıyla şehvetle kaplanmış fındık draje. Kahve ve fındık severler için mükemmel kombinasyon.',
    weight: ['500g', '1kg'],
    usageArea: 'Hediye Paketi, Tatlı Seçenekleri, Kahve Vakti',
    highlights: ['Fındık İçi', 'Mokka Aroması', 'Premium Kombinasyon'],
    image: '/images/products/draje-mokka-findik.jpg',
    featured: false,
    seoDescription: 'Mokka fındık draje, kahve fındık kombinasyonu',
  },
  {
    id: 'drj-011',
    name: 'Narlı Fındık',
    slug: 'narli-findik',
    category: 'drajeler',
    subcategory: 'Meyveli',
    badge: 'HANDMADE',
    shortDescription: 'Fındık içi, nar aromalı çikolata kaplaması',
    detailedDescription:
      'Fringe nar aromasıyla kaplanmış fındık draje. Meyvemsi lezzet sevenlerin seçim yapabileceği, farklı bir kombinasyon.',
    weight: ['500g', '1kg'],
    usageArea: 'Tatlı Seçenekleri, Meyveli Ürünler, Hediye',
    highlights: ['Fındık İçi', 'Nar Aroması', 'Meyvemsi Tat'],
    image: '/images/products/draje-narli-findik.jpg',
    featured: false,
    seoDescription: 'Narlı fındık draje, nar aromalı',
  },
  {
    id: 'drj-012',
    name: 'Portakal Draje',
    slug: 'portakal-draje',
    category: 'drajeler',
    subcategory: 'Meyveli',
    badge: 'HANDMADE',
    shortDescription: 'Portakal aromalı çikolata kaplı draje',
    detailedDescription:
      'Taze portakal aromasıyla enerji veren çikolata draje. Meyvemsi ve ferahlatıcı lezzetiyle yaz aylarının favorisi.',
    weight: ['500g', '1kg'],
    usageArea: 'Meyveli Seçenekler, Yaz Tatlıları, Hediye',
    highlights: ['Portakal Aroması', 'Ferah Tat', 'Meyveli'],
    image: '/images/products/draje-portakal.jpg',
    featured: false,
    seoDescription: 'Portakal draje, portakal aromalı',
  },
  {
    id: 'drj-013',
    name: 'Pütürlü Badem',
    slug: 'puturlulu-badem',
    category: 'drajeler',
    subcategory: 'Kuruyemiş',
    badge: 'HANDMADE',
    shortDescription: 'Pürüzlü çikolata kaplamalı badem',
    detailedDescription:
      'Kavrulmuş bademin pürüzlü ve çok katmanlı çikolata kaplamasıyla sunulan, tekstürlü görüntü ve yoğun lezzeti olan draje.',
    weight: ['500g', '1kg'],
    usageArea: 'Hediye Paketi, Tatlı Seçenekleri, Premium Sunumu',
    highlights: ['Pütürlü Kaplama', 'Badem İçi', 'Tekstürlü Görüntü'],
    image: '/images/products/draje-puturlulu-badem.jpg',
    featured: true,
    seoDescription: 'Pütürlü badem draje, pürüzlü kaplama',
  },
  {
    id: 'drj-014',
    name: 'Pütürlü Fındık',
    slug: 'puturlulu-findik',
    category: 'drajeler',
    subcategory: 'Kuruyemiş',
    badge: 'HANDMADE',
    shortDescription: 'Pürüzlü çikolata kaplamalı fındık',
    detailedDescription:
      'Fındığın pürüzlü ve çok katmanlı çikolata kaplamasıyla sunulan, görsel olarak çekici ve lezzetli premium draje.',
    weight: ['500g', '1kg', '2kg'],
    usageArea: 'Hediye Paketi, Premium Sunumu, Özel Sunumu',
    highlights: ['Pütürlü Kaplama', 'Fındık İçi', 'Premium Tasarım'],
    image: '/images/products/draje-puturlulu-findik.jpg',
    featured: true,
    seoDescription: 'Pütürlü fındık draje, pürüzlü kaplama',
  },
  {
    id: 'drj-015',
    name: 'Rainbow',
    slug: 'rainbow',
    category: 'drajeler',
    subcategory: 'Renkli',
    badge: 'HANDMADE',
    shortDescription: 'Renkli çikolata kaplama yapılmış drajeler',
    detailedDescription:
      'Gökkuşağı renklerinde farklı çikolata kaplamalı drajeler. Çocuklu aileler ve eğlenceli sunumlar için ideal seçim.',
    weight: ['500g', '1kg'],
    usageArea: 'Çocuk Partileri, Renkli Sunumlar, Hediye',
    highlights: ['Renkli Kaplama', 'Gökkuşağı Renkleri', 'Eğlenceli'],
    image: '/images/products/draje-rainbow.jpg',
    featured: false,
    seoDescription: 'Rainbow draje, renkli çikolata drajeler',
  },
  {
    id: 'drj-016',
    name: 'Renkli Mix Badem',
    slug: 'renkli-mix-badem',
    category: 'drajeler',
    subcategory: 'Renkli Mix',
    badge: 'HANDMADE',
    shortDescription: 'Çeşitli renkli çikolata kaplı badem',
    detailedDescription:
      'Bademin farklı renkli çikolata kaplamalı karışımı. Görsel çekiciliği ve çeşitli tat seçenekleriyle hediye paketlerine ideal.',
    weight: ['500g', '1kg'],
    usageArea: 'Hediye Paketi, Renkli Sunumlar, Tatlı Seçenekleri',
    highlights: ['Renkli Kaplama', 'Badem İçi', 'Mix Ürün'],
    image: '/images/products/draje-renkli-mix-badem.jpg',
    featured: true,
    seoDescription: 'Renkli mix badem draje, karışık renkli',
  },
  {
    id: 'drj-017',
    name: 'Tramisu Ceviz',
    slug: 'tramisu-ceviz',
    category: 'drajeler',
    subcategory: 'Özel Tat',
    badge: 'GOLD SERIES',
    shortDescription: 'Tramisu aromalı çikolata kaplı ceviz',
    detailedDescription:
      'Tramisu tatlısının aromasıyla hazırlanan ceviz draje. Sofistike tat sevenlerin seçimi olan özel kombinasyon.',
    weight: ['500g', '1kg'],
    usageArea: 'Gourmet Seçenek, Hediye Paketi, Özel Sunumu',
    highlights: ['Tramisu Aroması', 'Ceviz İçi', 'Sofistike Tat'],
    image: '/images/products/draje-tramisu-ceviz.jpg',
    featured: false,
    seoDescription: 'Tramisu ceviz draje, tramisu aromalı',
  },
  {
    id: 'drj-018',
    name: 'Üzüm Draje',
    slug: 'uzum-draje',
    category: 'drajeler',
    subcategory: 'Meyveli',
    badge: 'HANDMADE',
    shortDescription: 'Kuru üzüm çekirdeğinin çikolata kaplaması',
    detailedDescription:
      'Seçilmiş kuru üzüm çekirdeğinin ince çikolata tabakasıyla kaplanmış, doğal meyvemsi lezzeti olan draje.',
    weight: ['500g', '1kg'],
    usageArea: 'Meyveli Seçenekler, Tatlı Seçenekleri, Hediye',
    highlights: ['Kuru Üzüm', 'Çikolata Kaplaması', 'Meyvemsi'],
    image: '/images/products/draje-uzum.jpg',
    featured: false,
    seoDescription: 'Üzüm draje, kuru üzüm çikolata',
  },
  {
    id: 'drj-019',
    name: 'Yeşil Pütürlü Badem',
    slug: 'yesil-puturlulu-badem',
    category: 'drajeler',
    subcategory: 'Renkli',
    badge: 'HANDMADE',
    shortDescription: 'Yeşil pürüzlü çikolata kaplı badem',
    detailedDescription:
      'Bademin yeşil renkli pürüzlü çikolata kaplamasıyla sunulan, göz alıcı ve lezzetli premium draje. Bahar koleksiyonu favori.',
    weight: ['500g', '1kg'],
    usageArea: 'Hediye Paketi, Mevsimlik Sunumu, Özel Tasarım',
    highlights: ['Yeşil Renk', 'Pütürlü Kaplama', 'Premium Tasarım'],
    image: '/images/products/draje-yesil-puturlulu-badem.jpg',
    featured: false,
    seoDescription: 'Yeşil pütürlü badem draje, yeşil renkli',
  },
];

// ═══════════════════════════════════════════════════════════════════
// SPECIAL PRODUCTS
// ═══════════════════════════════════════════════════════════════════

 export const SPECIAL_PRODUCTS : Product[] = [
  {
    id: 'madlen-001',
    name: 'Sütlü Ve Bitter Madlen Çikolata ',
    slug: 'madlen-001',
    category: 'special',
    subcategory: 'Toz Kakao',
    badge: 'PROFESSIONAL',
    shortDescription: ' Sütlü ve bitter madlen çikolata, %30 ve %70 kakao içeriği',
    detailedDescription:
      ' Sütlü madlen çikolata, %30 kakao içeriğiyle zenginleştirilmiş, kremsi ve tatlı bir lezzete sahip profesyonel çikolata ürünü.',
    weight: ['500g', '1kg', '5kg', '25kg'],
    usageArea: '',
    highlights: ['%22-24 Yağ Oranı', 'Açık renk', 'Geniş Kullanım'],
    image: '/public/images/special/madlen1.png',
    featured: true,
    seoDescription: 'Sütlü ve bitter madlen çikolata, %30 kakao içeriği',
  },
  {
    id: 'kak-002',
    name: 'Special Çikolatalar ',
    slug: 'Speacial-002',
    category: 'special',
    subcategory: 'specialürünler',
    badge: 'PROFESSIONAL',
    shortDescription: 'Farklı çeşitlerde hazırlanan özel çikolata ürünleri',
    detailedDescription:
      'Farklı çeşitlerde hazırlanan özel çikolata ürünleri, benzersiz tatlar ve görünümler sunarak profesyonel pastacılık ve şeflerin tercihi.',
    weight: ['500g', '1kg', '5kg', '25kg'],
    usageArea: '',
    highlights: ['Doğal İşlem', 'Asidik Profil', 'Standart Kullanım'],
    image: '/images/products/kakao-dogal-toz.jpg',
    featured: true,
    seoDescription: 'Farklı çeşitlerde hazırlanan özel çikolata ürünleri, benzersiz tatlar ve görünümler',
  },];

export const ALL_PRODUCTS: Product[] = [
  ...KUVERTUR_PRODUCTS,
  ...DOLGU_GANAJ_PRODUCTS,
  ...SOS_PRODUCTS,
  ...PRALIN_PRODUCTS,
  ...KAKAO_PRODUCTS,
  ...DAMLA_CIKOLATA_PRODUCTS,
  ...DRAJELER_PRODUCTS,
  ...SPECIAL_PRODUCTS,
];

export const PRODUCTS_BY_CATEGORY: Record<CategoryKey, Product[]> = {
  kuvertur: KUVERTUR_PRODUCTS,
  'dolgu-ganaj': DOLGU_GANAJ_PRODUCTS,
  sos: SOS_PRODUCTS,
  pralin: PRALIN_PRODUCTS,
  kakao: KAKAO_PRODUCTS,
  'damla-cikolata': DAMLA_CIKOLATA_PRODUCTS,
  drajeler: DRAJELER_PRODUCTS,
  special: SPECIAL_PRODUCTS,
};

export const FEATURED_PRODUCTS_CATALOG = ALL_PRODUCTS.filter((p) => p.featured);
