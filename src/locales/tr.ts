const tr = {
  nav: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    portfolio: "Portföy",
    about: "Hakkımızda",
    contact: "İletişim",
    contactBtn: "Bize Ulaşın",
  },
  hero: {
    badge: "⚡ Elite Digital Engineering Studio",
    title: "Her Sistemi",
    titleHighlight: "İnşa Edebiliriz",
    titleEnd: "",
    subtitle:
      "Ne kadar karmaşık olursa olsun — fintech platformları, AI destekli uygulamalar, gerçek zamanlı izleme sistemleri, blockchain altyapıları. Hayal edin, biz inşa edelim.",
    ctaPrimary: "Projenizi Konuşalım",
    ctaSecondary: "Projelerimizi Gör",
    stat1Value: "250+",
    stat1Label: "Tamamlanan Proje",
    stat2Value: "40+",
    stat2Label: "Teknoloji & Framework",
    stat3Value: "10+",
    stat3Label: "Yıllık Deneyim",
  },
  services: {
    badge: "Uzmanlık Alanlarımız",
    title: "Her Ölçekte Çözüm",
    subtitle:
      "Basit landing page'den ultra-karmaşık enterprise sistemlere kadar — teknik sınırımız yok.",
    items: [
      {
        title: "Kurumsal Web & SaaS Platformları",
        desc: "Yüksek trafikli, ölçeklenebilir SaaS ürünleri ve kurumsal web platformları. Mikro servis mimarisi, CDN optimizasyonu ve %99.9 uptime garantisi.",
      },
      {
        title: "Fintech & Kripto Sistemleri",
        desc: "Kripto borsa arayüzleri, DeFi dashboard'ları, cüzdan yönetim panelleri, algoritmik trading görselleştirme ve gerçek zamanlı fiyat akışı sistemleri.",
      },
      {
        title: "AI & Makine Öğrenimi Entegrasyonu",
        desc: "GPT tabanlı chatbot ve asistan entegrasyonları, öneri motorları, görüntü analizi, doğal dil işleme ve özel AI model arayüzleri.",
      },
      {
        title: "Gerçek Zamanlı İzleme & IoT",
        desc: "Anlık veri akışlı dashboard'lar, IoT sensör izleme sistemleri, WebSocket tabanlı canlı bildirimler ve anomali tespit arayüzleri.",
      },
      {
        title: "Blokzincir & Web3",
        desc: "Akıllı kontrat arayüzleri, NFT marketplace, multi-chain token sistemleri, DAO yönetim panelleri ve merkeziyetsiz uygulama (dApp) geliştirme.",
      },
      {
        title: "API Mimarisi & Backend Geliştirme",
        desc: "REST / GraphQL / WebSocket API tasarımı, mikro servis mimarisi, veritabanı optimizasyonu ve üçüncü taraf servis entegrasyonları.",
      },
      {
        title: "Güvenlik Denetimi & Sızma Testi",
        desc: "Web uygulama güvenlik analizi, OWASP Top 10 taraması, güvenlik açığı raporlama ve penetrasyon testi hizmetleri.",
      },
      {
        title: "Mobil Uygulama (iOS & Android)",
        desc: "Karmaşık iş mantığına sahip native ve cross-platform mobil uygulamalar. React Native, gerçek zamanlı sync ve offline-first mimari.",
      },
    ],
  },
  portfolio: {
    badge: "Portföy",
    title: "İnşa Ettiklerimiz",
    subtitle: "Her biri gerçek bir mühendislik zorluğunun çözümü.",
    viewAll: "Tümünü Gör",
    viewLess: "Daha Az Gör",
    filters: ["Hepsi", "Fintech", "AI/ML", "IoT", "Web3", "Enterprise", "Güvenlik"],
    projects: [
      {
        title: "Algoritmik Trading Dashboard",
        category: "Fintech",
        desc: "Gerçek zamanlı kripto borsa verisi görselleştirmesi, 50ms gecikme ile canlı emir defteri, PnL analitikleri.",
        tags: ["WebSocket", "React", "Node.js", "Redis"],
        detail: "Binance ve FTX API'leri ile entegre çalışan, saniyede 10.000+ işlem verisini işleyebilen trading paneli. Kullanıcı başına özelleştirilebilir widget sistemi.",
      },
      {
        title: "AI Destekli Müşteri Analitik Paneli",
        category: "AI/ML",
        desc: "Doğal dil işleme ile müşteri geri bildirim analizi, davranış tahmini ve churn skorlaması.",
        tags: ["Python", "GPT-4", "Next.js", "PostgreSQL"],
        detail: "Günlük 500K+ müşteri verisi işleyen, churn olasılığını %87 doğrulukla tahmin eden ve otomatik raporlar üreten AI analitik platformu.",
      },
      {
        title: "Akıllı Fabrika İzleme Sistemi",
        category: "IoT",
        desc: "500+ IoT sensöründen gelen veriyi gerçek zamanlı işleyen anomali tespit ve uyarı sistemi.",
        tags: ["MQTT", "WebSocket", "React", "InfluxDB"],
        detail: "Fabrika katında yerleşik 500'den fazla sensörü milisaniye gecikmeyle izleyen, makine arızalarını %94 doğrulukla önceden tespit eden sistem.",
      },
      {
        title: "DeFi Protokol Arayüzü",
        category: "Web3",
        desc: "Likidite havuzu yönetimi, staking, yield farming ve çoklu cüzdan entegrasyonu.",
        tags: ["Solidity", "Web3.js", "React", "Ethers.js"],
        detail: "Ethereum ve Polygon üzerinde çalışan, 10M$+ TVL yöneten DeFi protokolünün kullanıcı arayüzü. MetaMask, WalletConnect ve Coinbase Wallet desteği.",
      },
      {
        title: "Kurumsal ERP Platformu",
        category: "Enterprise",
        desc: "10.000+ kullanıcı kapasiteli, modüler mimari ERP sistemi. İK, muhasebe, lojistik modülleri.",
        tags: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
        detail: "Role tabanlı erişim kontrolü, 15 farklı iş modülü ve gerçek zamanlı raporlama sistemiyle 10.000+ aktif kullanıcıyı destekleyen kurumsal platform.",
      },
      {
        title: "Güvenlik Açığı Tarama Platformu",
        category: "Güvenlik",
        desc: "Otomatik OWASP Top 10 taraması, CVE veritabanı entegrasyonu ve detaylı güvenlik raporu üretimi.",
        tags: ["Python", "React", "Docker", "PostgreSQL"],
        detail: "Hedef URL'yi dakikalar içinde tarayarak SQL injection, XSS, CSRF ve diğer kritik açıkları tespit eden, PDF raporu üreten güvenlik otomasyon aracı.",
      },
      {
        title: "Gerçek Zamanlı Lojistik Takip",
        category: "IoT",
        desc: "Harita tabanlı araç ve kargo takibi, rota optimizasyonu ve teslimat tahmin motoru.",
        tags: ["WebSocket", "Mapbox", "Node.js", "Redis"],
        detail: "1000+ araç ve kargo görevini eş zamanlı takip eden, tahmini varış sürelerini yapay zeka ile hesaplayan lojistik yönetim sistemi.",
      },
      {
        title: "Multi-Chain NFT Marketplace",
        category: "Web3",
        desc: "Ethereum ve Solana üzerinde çalışan, lazy minting destekli NFT alım-satım platformu.",
        tags: ["Solidity", "Rust", "React", "IPFS"],
        detail: "İki farklı blok zincirde sorunsuz çalışan, IPFS üzerinde metadata saklayan ve düşük gas ücretleri için Layer 2 çözümleri kullanan NFT pazaryeri.",
      },
    ],
  },
  about: {
    badge: "Hakkımızda",
    title: "Limitin Olmadığı Yerden Başlıyoruz",
    subtitle:
      "10 yılı aşkın deneyim, 250'den fazla karmaşık proje ve hiçbir zaman 'yapamayız' demedik.",
    description:
      "Standart yazılım stüdyolarından farkımız şu: biz 'bu proje çok zor' demiyoruz. Algoritmik trading sistemleri, gerçek zamanlı IoT platformları, AI entegrasyonları, blockchain altyapıları — bunlar bizim için birer mühendislik görevi. Her projede NDA koruması, enterprise SLA ve DevSecOps standartları uyguluyoruz.",
    features: [
      "10+ yıllık enterprise yazılım geliştirme deneyimi",
      "250+ kompleks proje başarıyla teslim edildi",
      "NDA ile tam gizlilik ve fikri mülkiyet koruması",
      "Enterprise SLA — %99.9 uptime garantisi",
      "DevSecOps standartları ile güvenli geliştirme",
      "7/24 teknik destek ve proaktif izleme",
    ],
    ctaText: "Projenizi Konuşalım",
  },
  contact: {
    badge: "İletişim",
    title: "Projenizi Konuşalım",
    subtitle:
      "Ne kadar karmaşık olursa olsun — ücretsiz teknik danışmanlık için hemen yazın.",
    whatsappBtn: "WhatsApp'tan Yazın",
    whatsappDesc: "Hızlı yanıt için WhatsApp tercih edin",
    form: {
      name: "Ad Soyad",
      email: "E-posta Adresi",
      phone: "Telefon (Opsiyonel)",
      message: "Projenizi Anlatın",
      messagePlaceholder:
        "Projenizi kısaca anlatın. Ne tür bir sistem ihtiyacınız var?",
      submit: "WhatsApp'tan Gönder",
      sending: "Yönlendiriliyor...",
      success: "WhatsApp açılıyor! Mesajınız hazırlandı.",
      error: "Bir hata oluştu. Lütfen tekrar deneyin.",
    },
  },
  footer: {
    description:
      "Her ölçekte karmaşık dijital sistemi inşa eden elite mühendislik stüdyosu.",
    links: "Hızlı Bağlantılar",
    services: "Hizmetler",
    contact: "İletişim",
    rights: "Tüm hakları saklıdır.",
    madeWith: "⚡ ile inşa edildi",
  },
  floatingBtn: "WhatsApp'tan Yazın",
};

export default tr;
