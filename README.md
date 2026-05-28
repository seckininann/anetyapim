# PixelCraft Agency — Web Tasarım Ajansı Sitesi

Next.js 14 App Router + Tailwind CSS + Framer Motion + Upstash Redis ile yapılmış profesyonel web tasarım ajansı sitesi.

---

## 🚀 Kurulum Adımları

### 1. Bağımlılıkları Kur
```bash
npm install
```

### 2. Upstash Redis Kurulumu (Ücretsiz)
1. [upstash.com](https://upstash.com) adresine git → Ücretsiz hesap aç
2. **Create Database** → Redis → Free tier seç → İsim ver → Create
3. Database detay sayfasında **REST API** bölümünden:
   - `UPSTASH_REDIS_REST_URL` → kopyala
   - `UPSTASH_REDIS_REST_TOKEN` → kopyala

### 3. .env.local Dosyasını Düzenle
Proje klasöründeki `.env.local` dosyasını aç ve bilgileri gir:
```env
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AXxxxxxxxxxxxxxxxx

ADMIN_PASSWORD=admin123        # İstediğin şifreyi yaz

DEFAULT_WHATSAPP_NUMBER=905551234567  # Varsayılan numara
```

### 4. Geliştirme Sunucusunu Başlat
```bash
npm run dev
```
→ http://localhost:3000 adresini aç

---

## 🔐 Admin Paneli

- **Adres:** http://localhost:3000/admin
- **Şifre:** `.env.local` dosyasındaki `ADMIN_PASSWORD` değeri
- **Numara formatı:** Ülke kodu dahil, sadece rakam (örn: `905551234567`)

---

## 🌐 Render'da Deploy

1. GitHub'a push et
2. [render.com](https://render.com) → New Web Service → GitHub repon seç
3. **Build Command:** `npm install && npm run build`
4. **Start Command:** `npm start`
5. **Environment Variables** bölümüne `.env.local` içindeki değerleri ekle

---

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── api/whatsapp/route.ts    # GET/POST API
│   ├── admin/page.tsx           # Admin paneli
│   ├── page.tsx                 # Ana sayfa
│   ├── layout.tsx               # Global layout
│   └── globals.css              # Global stiller
├── components/
│   ├── Navbar.tsx               # Navigasyon + hamburger
│   ├── Hero.tsx                 # Hero section
│   ├── Services.tsx             # Hizmetler
│   ├── Portfolio.tsx            # Portföy
│   ├── About.tsx                # Hakkımızda
│   ├── Contact.tsx              # İletişim formu
│   ├── Footer.tsx               # Footer
│   └── WhatsAppFloat.tsx        # Floating WhatsApp butonu
├── context/
│   ├── LanguageContext.tsx      # TR/EN dil yönetimi
│   └── WhatsAppContext.tsx      # Global numara state'i
├── lib/
│   └── upstash.ts               # Redis client
└── locales/
    ├── tr.ts                    # Türkçe metinler
    └── en.ts                    # İngilizce metinler
```

---

## ✅ Özellikler

- ✅ Dark mode tasarım (profesyonel)
- ✅ TR/EN çift dil desteği
- ✅ Framer Motion animasyonları
- ✅ Floating WhatsApp butonu (pulse efekti)
- ✅ Hero WhatsApp CTA butonu
- ✅ Admin paneli `/admin`
- ✅ Upstash Redis ile kalıcı numara saklama
- ✅ 100% mobil uyumlu + hamburger menü
- ✅ wa.me/{numara} formatında WhatsApp yönlendirme
