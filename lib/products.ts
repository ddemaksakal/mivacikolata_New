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
  | 'kakao';

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
// ALL PRODUCTS
// ═══════════════════════════════════════════════════════════════════

export const ALL_PRODUCTS: Product[] = [
  ...KUVERTUR_PRODUCTS,
  ...DOLGU_GANAJ_PRODUCTS,
  ...SOS_PRODUCTS,
  ...PRALIN_PRODUCTS,
  ...KAKAO_PRODUCTS,
];

export const PRODUCTS_BY_CATEGORY: Record<CategoryKey, Product[]> = {
  kuvertur: KUVERTUR_PRODUCTS,
  'dolgu-ganaj': DOLGU_GANAJ_PRODUCTS,
  sos: SOS_PRODUCTS,
  pralin: PRALIN_PRODUCTS,
  kakao: KAKAO_PRODUCTS,
};

export const FEATURED_PRODUCTS_CATALOG = ALL_PRODUCTS.filter((p) => p.featured);
