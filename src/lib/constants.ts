// ==========================================
// telvecitorgu.com - Site Constants
// ==========================================

export const SITE_CONFIG = {
  name: 'NOVA Tel Çit',
  domain: 'telvecitorgu.com',
  url: 'https://telvecitorgu.com',
  phone: '+90 552 367 64 03',
  phoneClean: '905523676403',
  phoneDisplay: '0552 367 64 03',
  whatsappUrl: 'https://wa.me/905523676403',
  whatsappMessage: 'Merhaba, telvecitorgu.com üzerinden ulaşıyorum. Bilgi almak istiyorum.',
  email: 'telvecitorgu@gmail.com',
  description: 'Türkiye genelinde panel çit, tel örgü, jiletli tel, dikenli tel, çim çit ve bahçe çiti sistemleri. Profesyonel montaj, uygun fiyat, ücretsiz keşif.',
  slogan: 'Güvenliğiniz Bizim Önceliğimiz',
  foundedYear: 2010,
} as const;

export const TRUST_BADGES = [
  { icon: '⚡', title: 'Aynı Gün Dönüş', description: 'Taleplerinize aynı gün içinde dönüş yapıyoruz' },
  { icon: '💰', title: 'Uygun Fiyat', description: 'Rekabetçi ve şeffaf fiyatlandırma' },
  { icon: '🔧', title: 'Profesyonel Montaj', description: 'Uzman ekiplerimizle kusursuz montaj' },
  { icon: '🛡️', title: 'Kaliteli Malzeme', description: 'TSE ve CE belgeli, dayanıklı malzemeler' },
  { icon: '🇹🇷', title: 'Türkiye Geneli', description: '81 ilde hizmet veriyoruz' },
  { icon: '👷', title: 'Uzman Ekip', description: '15+ yıllık sektör deneyimi' },
  { icon: '✅', title: 'Garanti', description: 'Tüm ürünlerimizde kalite garantisi' },
  { icon: '📞', title: 'Ücretsiz Keşif', description: 'Yerinde ücretsiz keşif ve teklif' },
] as const;

export const STATS = [
  { value: '5000+', label: 'Tamamlanan Proje' },
  { value: '81', label: 'İl\'de Hizmet' },
  { value: '15+', label: 'Yıllık Deneyim' },
  { value: '%100', label: 'Müşteri Memnuniyeti' },
] as const;

export const SERVICE_AREAS = [
  'Fabrika ve Endüstriyel Tesisler',
  'Tarla ve Arazi Çevirme',
  'Villa ve Bahçe Çevirme',
  'Spor Sahaları ve Tesisler',
  'Okul ve Eğitim Kurumları',
  'İnşaat Alanları',
  'Kamu ve Devlet Kurumları',
  'Askeri Alanlar',
  'Havalimanları ve Limanlar',
  'Otopark ve Depo Alanları',
] as const;
