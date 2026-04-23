/* Ramires Vendas — main.js */

const WPP = '5534997994444';

/* =============================================
   TRANSLATIONS
   ============================================= */
const T = {
  pt: {
    nav_products:'Produtos', nav_iphones:'iPhones', nav_watches:'Apple Watch',
    nav_about:'Sobre', nav_contact:'Contato',
    hero_eyebrow:'Edições Limitadas · Ouro 24KT',
    hero_title:'O Luxo que<br/><span>Cabe na sua Mão</span>',
    hero_sub:'iPhones e Apple Watch banhados a ouro 24 quilates.<br/>Empresa brasileira. Entrega em todo o país.',
    btn_collection:'Ver Coleção', btn_whatsapp:'Falar no WhatsApp',
    badge_years:'Anos de Mercado', badge_gold:'Ouro Puro', badge_delivery:'Entrega Brasil',
    feat1_title:'Ouro 24 Quilates', feat1_desc:'Cada peça é banhada com ouro 24KT de alta pureza, com acabamento espelhado impecável.',
    feat2_title:'Edições Exclusivas', feat2_desc:'Cartier, Gucci, Royal, Pegasus — coleções únicas com gravações artesanais e pedras preciosas.',
    feat3_title:'Empresa Brasileira', feat3_desc:'8 anos no mercado. Entregamos em todo o Brasil com segurança e rastreamento completo.',
    feat4_title:'Certificado de Autenticidade', feat4_desc:'Cada produto acompanha certificado e embalagem premium em caixa banhada a ouro.',
    products_eyebrow:'Nossa Coleção', products_title:'Produtos Exclusivos',
    products_sub:'Selecione a categoria e encontre a peça perfeita para você.',
    filter_all:'Todos', filter_iphone:'iPhones', filter_watch:'Apple Watch', filter_accessories:'Acessórios',
    btn_details:'Ver Detalhes', btn_add:'Adicionar', price_consult:'Consulte',
    banner_eyebrow:'Exclusividade',
    banner_title:'Peças que Definem<br/>um Estilo de Vida',
    banner_desc:'Cada iPhone e Apple Watch banhado a ouro 24KT é uma obra de arte. Personalização disponível sob consulta.',
    banner_btn:'Solicitar Orçamento',
    gallery_eyebrow:'Galeria', gallery_title:'Veja de Perto',
    about_eyebrow:'Sobre Nós', about_title:'8 Anos de Excelência no Mercado',
    about_p1:'A Ramires Vendas é uma empresa brasileira especializada em produtos Apple de luxo. Há mais de 8 anos no mercado, oferecemos iPhones e Apple Watches banhados a ouro 24 quilates com as mais exclusivas edições do mundo.',
    about_p2:'Atendemos clientes em todo o Brasil com entrega segura, rastreada e embalagem premium. Cada produto acompanha certificado de autenticidade e garantia.',
    about_list:['Empresa 100% brasileira','Mais de 8 anos no mercado','Entrega em todo o Brasil','Certificado de autenticidade incluso','Embalagem premium banhada a ouro','Atendimento personalizado via WhatsApp'],
    cta_eyebrow:'Fale Conosco',
    cta_title:'Pronto para o<br/><span>Próximo Nível?</span>',
    cta_desc:'Entre em contato agora pelo WhatsApp e receba atendimento exclusivo. Tire suas dúvidas, faça pedidos e solicite personalização.',
    cta_btn:'Chamar no WhatsApp',
    footer_nav:'Navegação', footer_products:'Produtos', footer_contact_title:'Contato',
    footer_brand_desc:'Especializados em iPhones e Apple Watch banhados a ouro 24KT. Empresa brasileira há 8 anos no mercado.',
    footer_link_home:'Início', footer_limited:'Edições Limitadas',
    footer_hours:'Atendimento via WhatsApp<br/>Seg–Sáb, 9h–20h',
    footer_copy:'© 2026 Ramires Vendas. Todos os direitos reservados.',
    footer_sub:'Empresa Brasileira · Entrega em todo o Brasil',
    cart_title:'Meu Carrinho', cart_empty:'Seu carrinho está vazio',
    cart_total:'Total', cart_checkout:'Fechar Pedido no WhatsApp',
    modal_add:'Adicionar ao Carrinho', modal_consult:'Consultar Preço',
    wpp_greeting:'Olá! Vim pelo site brilhante de vocês ✨ e gostaria de mais informações sobre os produtos.',
    wpp_cart_intro:'Olá! Vim pelo site brilhante de vocês ✨\n\nTenho interesse nos seguintes produtos:\n',
    wpp_cart_closing:'\n\nAguardo atendimento! 🙏',
  },
  en: {
    nav_products:'Products', nav_iphones:'iPhones', nav_watches:'Apple Watch',
    nav_about:'About', nav_contact:'Contact',
    hero_eyebrow:'Limited Editions · 24KT Gold',
    hero_title:'Luxury That<br/><span>Fits in Your Hand</span>',
    hero_sub:'iPhones and Apple Watch plated in 24 karat gold.<br/>Brazilian company. Delivery across Brazil.',
    btn_collection:'View Collection', btn_whatsapp:'Chat on WhatsApp',
    badge_years:'Years in Market', badge_gold:'Pure Gold', badge_delivery:'Brazil Delivery',
    feat1_title:'24 Karat Gold', feat1_desc:'Each piece is plated with high-purity 24KT gold, with an impeccable mirror finish.',
    feat2_title:'Exclusive Editions', feat2_desc:'Cartier, Gucci, Royal, Pegasus — unique collections with handcrafted engravings and precious stones.',
    feat3_title:'Brazilian Company', feat3_desc:'8 years in the market. We deliver across Brazil with full security and tracking.',
    feat4_title:'Certificate of Authenticity', feat4_desc:'Each product includes a certificate and premium packaging in a gold-plated box.',
    products_eyebrow:'Our Collection', products_title:'Exclusive Products',
    products_sub:'Select a category and find the perfect piece for you.',
    filter_all:'All', filter_iphone:'iPhones', filter_watch:'Apple Watch', filter_accessories:'Accessories',
    btn_details:'View Details', btn_add:'Add', price_consult:'Inquire',
    banner_eyebrow:'Exclusivity',
    banner_title:'Pieces That Define<br/>a Lifestyle',
    banner_desc:'Every 24KT gold-plated iPhone and Apple Watch is a work of art. Custom orders available on request.',
    banner_btn:'Request a Quote',
    gallery_eyebrow:'Gallery', gallery_title:'See Up Close',
    about_eyebrow:'About Us', about_title:'8 Years of Excellence in the Market',
    about_p1:'Ramires Vendas is a Brazilian company specialized in luxury Apple products. For over 8 years, we have offered 24-karat gold-plated iPhones and Apple Watches with the world\'s most exclusive editions.',
    about_p2:'We serve customers across Brazil with secure, tracked delivery and premium packaging. Every product includes a certificate of authenticity and warranty.',
    about_list:['100% Brazilian company','Over 8 years in the market','Delivery across Brazil','Certificate of authenticity included','Premium gold-plated packaging','Personalized WhatsApp service'],
    cta_eyebrow:'Contact Us',
    cta_title:'Ready for the<br/><span>Next Level?</span>',
    cta_desc:'Contact us now on WhatsApp and receive exclusive personalized service. Ask questions, place orders, and request customization.',
    cta_btn:'Chat on WhatsApp',
    footer_nav:'Navigation', footer_products:'Products', footer_contact_title:'Contact',
    footer_brand_desc:'Specialists in 24KT gold-plated iPhones and Apple Watches. Brazilian company with 8 years in the market.',
    footer_link_home:'Home', footer_limited:'Limited Editions',
    footer_hours:'WhatsApp service<br/>Mon–Sat, 9am–8pm',
    footer_copy:'© 2026 Ramires Vendas. All rights reserved.',
    footer_sub:'Brazilian Company · Delivery Across Brazil',
    cart_title:'My Cart', cart_empty:'Your cart is empty',
    cart_total:'Total', cart_checkout:'Order via WhatsApp',
    modal_add:'Add to Cart', modal_consult:'Inquire Price',
    wpp_greeting:"Hello! I found your brilliant website ✨ and I'd like to know more about your products.",
    wpp_cart_intro:"Hello! I found your brilliant website ✨\n\nI'm interested in the following products:\n",
    wpp_cart_closing:"\n\nLooking forward to hearing from you! 🙏",
  },
  ar: {
    nav_products:'المنتجات', nav_iphones:'آيفون', nav_watches:'آبل ووتش',
    nav_about:'من نحن', nav_contact:'تواصل',
    hero_eyebrow:'إصدارات محدودة · ذهب 24 قيراط',
    hero_title:'الفخامة التي<br/><span>تناسب يدك</span>',
    hero_sub:'آيفون وآبل ووتش مطلية بذهب 24 قيراط.<br/>شركة برازيلية. التوصيل في جميع أنحاء البرازيل.',
    btn_collection:'استعرض المجموعة', btn_whatsapp:'تواصل عبر واتساب',
    badge_years:'سنوات في السوق', badge_gold:'ذهب خالص', badge_delivery:'توصيل للبرازيل',
    feat1_title:'ذهب 24 قيراط', feat1_desc:'كل قطعة مطلية بذهب 24 قيراط عالي النقاء مع تشطيب مرآوي لا مثيل له.',
    feat2_title:'إصدارات حصرية', feat2_desc:'كارتييه، غوتشي، رويال، بيغاسوس — مجموعات فريدة بنقوش يدوية وأحجار كريمة.',
    feat3_title:'شركة برازيلية', feat3_desc:'8 سنوات في السوق. نوصّل في جميع أنحاء البرازيل بأمان وتتبع كامل.',
    feat4_title:'شهادة الأصالة', feat4_desc:'كل منتج يأتي مع شهادة وتغليف فاخر في صندوق مطلي بالذهب.',
    products_eyebrow:'مجموعتنا', products_title:'منتجات حصرية',
    products_sub:'اختر الفئة وابحث عن القطعة المثالية لك.',
    filter_all:'الكل', filter_iphone:'آيفون', filter_watch:'آبل ووتش', filter_accessories:'إكسسوارات',
    btn_details:'عرض التفاصيل', btn_add:'إضافة', price_consult:'استفسار',
    banner_eyebrow:'حصرية',
    banner_title:'قطع تُعرِّف<br/>أسلوب حياة',
    banner_desc:'كل آيفون وآبل ووتش مطلي بذهب 24 قيراط هو تحفة فنية. الطلبات المخصصة متاحة عند الطلب.',
    banner_btn:'طلب عرض سعر',
    gallery_eyebrow:'معرض الصور', gallery_title:'شاهد عن قرب',
    about_eyebrow:'من نحن', about_title:'8 سنوات من التميز في السوق',
    about_p1:'راميريس فينداس شركة برازيلية متخصصة في منتجات آبل الفاخرة. منذ أكثر من 8 سنوات، نقدم أجهزة آيفون وآبل ووتش المطلية بذهب 24 قيراط بأكثر الإصدارات حصرية في العالم.',
    about_p2:'نخدم العملاء في جميع أنحاء البرازيل مع توصيل آمن وتتبع كامل وتغليف فاخر. كل منتج يأتي مع شهادة أصالة وضمان.',
    about_list:['شركة برازيلية 100%','أكثر من 8 سنوات في السوق','توصيل لجميع أنحاء البرازيل','شهادة أصالة مشمولة','تغليف فاخر مطلي بالذهب','خدمة شخصية عبر واتساب'],
    cta_eyebrow:'تواصل معنا',
    cta_title:'هل أنت مستعد<br/><span>للمستوى التالي؟</span>',
    cta_desc:'تواصل معنا الآن عبر واتساب واحصل على خدمة حصرية ومخصصة. اسأل، اطلب، وخصّص قطعتك.',
    cta_btn:'تواصل عبر واتساب',
    footer_nav:'التنقل', footer_products:'المنتجات', footer_contact_title:'التواصل',
    footer_brand_desc:'متخصصون في آيفون وآبل ووتش المطلية بذهب 24 قيراط. شركة برازيلية منذ 8 سنوات.',
    footer_link_home:'الرئيسية', footer_limited:'إصدارات محدودة',
    footer_hours:'خدمة واتساب<br/>الإثنين–السبت، 9ص–8م',
    footer_copy:'© 2026 راميريس فينداس. جميع الحقوق محفوظة.',
    footer_sub:'شركة برازيلية · توصيل في جميع أنحاء البرازيل',
    cart_title:'سلة المشتريات', cart_empty:'سلة المشتريات فارغة',
    cart_total:'المجموع', cart_checkout:'إتمام الطلب عبر واتساب',
    modal_add:'أضف إلى السلة', modal_consult:'استفسار عن السعر',
    wpp_greeting:'مرحباً! وجدت موقعكم الرائع ✨ وأود الاستفسار عن المنتجات.',
    wpp_cart_intro:'مرحباً! وجدت موقعكم الرائع ✨\n\nأنا مهتم بالمنتجات التالية:\n',
    wpp_cart_closing:'\n\nأتطلع إلى ردكم! 🙏',
  }
};

/* =============================================
   PRODUCTS DATA
   ============================================= */
const PRODUCTS = [
  {
    id:0, img:'assets/images/iphone-cartier.jpeg', category:'iphone', badge:'BEST SELLER',
    name:'iPhone 17 Pro Max 256GB Cartier Edition',
    cat:{ pt:'iPhone · Edição Limitada', en:'iPhone · Limited Edition', ar:'آيفون · إصدار محدود' },
    price:'Consulte',
    desc:{ pt:'Banhado a ouro 24KT com pantera de diamantes Cartier e gravações artesanais exclusivas.', en:'Plated in 24KT gold with Cartier diamond panther and exclusive handcrafted engravings.', ar:'مطلي بذهب 24 قيراط مع نمر ماسي كارتييه ونقوش يدوية حصرية.' },
    features:{ pt:['Banhamento em ouro 24KT','Pantera de diamantes Cartier','iPhone 17 Pro Max 256GB original','Caixa premium banhada a ouro','Certificado de autenticidade'], en:['24KT gold plating','Cartier diamond panther','Original iPhone 17 Pro Max 256GB','Premium gold-plated box','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','نمر ماسي كارتييه','آيفون 17 برو ماكس 256GB أصلي','صندوق مطلي بالذهب','شهادة الأصالة'] }
  },
  {
    id:1, img:'assets/images/p-11.jpeg', category:'iphone', badge:null,
    name:'iPhone 17 Pro Max 256GB Classic Arabesque',
    cat:{ pt:'iPhone · Edição Clássica', en:'iPhone · Classic Edition', ar:'آيفون · الإصدار الكلاسيكي' },
    price:'Consulte',
    desc:{ pt:'Gravações arabescas simétricas em ouro 24KT com acabamento espelhado e bordas ornamentais.', en:'Symmetric arabesque engravings in 24KT gold with mirror finish and ornamental borders.', ar:'نقوش عربية متماثلة بذهب 24 قيراط مع تشطيب مرآوي وحدود زخرفية.' },
    features:{ pt:['Banhamento em ouro 24KT','Gravações arabescas simétricas','Acabamento espelhado premium','iPhone 17 Pro Max 256GB original','Certificado de autenticidade'], en:['24KT gold plating','Symmetric arabesque engravings','Premium mirror finish','Original iPhone 17 Pro Max 256GB','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','نقوش عربية متماثلة','تشطيب مرآوي فاخر','آيفون 17 برو ماكس 256GB أصلي','شهادة الأصالة'] }
  },
  {
    id:2, img:'assets/images/p-18.jpeg', category:'iphone', badge:null,
    name:'iPhone 17 Pro Max 256GB Pure Gold',
    cat:{ pt:'iPhone · Pure Gold', en:'iPhone · Pure Gold', ar:'آيفون · ذهب خالص' },
    price:'Consulte',
    desc:{ pt:'Design minimalista totalmente banhado em ouro 24KT. Sofisticação na forma mais pura.', en:'Minimalist design fully plated in 24KT gold. Sophistication in its purest form.', ar:'تصميم بسيط مطلي كلياً بذهب 24 قيراط. الرقي في أنقى صوره.' },
    features:{ pt:['Banhamento em ouro 24KT','Design minimalista','Acabamento espelhado uniforme','iPhone 17 Pro Max 256GB original','Certificado de autenticidade'], en:['24KT gold plating','Minimalist design','Uniform mirror finish','Original iPhone 17 Pro Max 256GB','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','تصميم بسيط','تشطيب مرآوي موحد','آيفون 17 برو ماكس 256GB أصلي','شهادة الأصالة'] }
  },
  {
    id:3, img:'assets/images/p-23.jpeg', category:'iphone', badge:'EXCLUSIVO',
    name:'iPhone 17 Pro Max 256GB Royal Edition',
    cat:{ pt:'iPhone · Royal Edition', en:'iPhone · Royal Edition', ar:'آيفون · الإصدار الملكي' },
    price:'Consulte',
    desc:{ pt:'Gravação de coroa real com caligrafia árabe personalizada e arabescos florais em ouro 24KT.', en:'Royal crown engraving with personalized Arabic calligraphy and floral arabesques in 24KT gold.', ar:'نقش تاج ملكي مع خط عربي مخصص وزخارف زهرية بذهب 24 قيراط.' },
    features:{ pt:['Banhamento em ouro 24KT','Gravação de coroa real','Caligrafia árabe personalizada','Arabescos florais premium','iPhone 17 Pro Max 256GB original','Certificado de autenticidade'], en:['24KT gold plating','Royal crown engraving','Custom Arabic calligraphy','Premium floral arabesques','Original iPhone 17 Pro Max 256GB','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','نقش تاج ملكي','خط عربي مخصص','زخارف زهرية فاخرة','آيفون 17 برو ماكس 256GB أصلي','شهادة الأصالة'] }
  },
  {
    id:4, img:'assets/images/p-16.jpeg', category:'iphone', badge:null,
    name:'iPhone 17 Pro Max 256GB Eagle Edition',
    cat:{ pt:'iPhone · Edição Especial', en:'iPhone · Special Edition', ar:'آيفون · الإصدار الخاص' },
    price:'Consulte',
    desc:{ pt:'Gravação de águia em alto relevo com molduras ornamentais. Acabamento rose gold exclusivo.', en:'Eagle engraving in high relief with ornamental frames. Exclusive rose gold finish.', ar:'نقش نسر بارز مع إطارات زخرفية. تشطيب ذهب وردي حصري.' },
    features:{ pt:['Banhamento rose gold 24KT','Águia em alto relevo','Molduras ornamentais','iPhone 17 Pro Max 256GB original','Certificado de autenticidade'], en:['24KT rose gold plating','Eagle in high relief','Ornamental frames','Original iPhone 17 Pro Max 256GB','Certificate of authenticity'], ar:['طلاء ذهب وردي 24 قيراط','نسر بارز','إطارات زخرفية','آيفون 17 برو ماكس 256GB أصلي','شهادة الأصالة'] }
  },
  {
    id:5, img:'assets/images/p-22.jpeg', category:'iphone', badge:'NOVO',
    name:'iPhone 17 Pro Max 256GB Gucci Bee',
    cat:{ pt:'iPhone · Gucci Edition', en:'iPhone · Gucci Edition', ar:'آيفون · إصدار غوتشي' },
    price:'Consulte',
    desc:{ pt:'Monograma Gucci em ouro com abelha central cravejada de diamantes e listras multicoloridas.', en:'Gucci monogram in gold with diamond-studded bee and multicolored stripes.', ar:'مونوغرام غوتشي ذهبي مع نحلة مرصعة بالألماس وخطوط متعددة الألوان.' },
    features:{ pt:['Banhamento em ouro 24KT','Monograma Gucci gravado','Abelha com diamantes','Listras multicoloridas','iPhone 17 Pro Max 256GB original','Certificado de autenticidade'], en:['24KT gold plating','Gucci monogram engraved','Diamond-studded bee','Multicolored stripes','Original iPhone 17 Pro Max 256GB','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','مونوغرام غوتشي منقوش','نحلة بالألماس','خطوط متعددة الألوان','آيفون 17 برو ماكس 256GB أصلي','شهادة الأصالة'] }
  },
  {
    id:6, img:'assets/images/iphone-luxury-bee.jpeg', category:'iphone', badge:null,
    name:'iPhone 17 Pro Max 256GB Luxury 2026',
    cat:{ pt:'iPhone · Luxury 2026', en:'iPhone · Luxury 2026', ar:'آيفون · فاخر 2026' },
    price:'Consulte',
    desc:{ pt:'Edição 2026 com abelha dourada em relevo e acabamento rose gold com brilho espelhado incomparável.', en:'2026 edition with raised gold bee and rose gold finish with incomparable mirror shine.', ar:'إصدار 2026 مع نحلة ذهبية بارزة وتشطيب ذهب وردي مع لمعة مرآوية لا مثيل لها.' },
    features:{ pt:['Acabamento rose gold','Abelha dourada em relevo','Edição 2026 exclusiva','iPhone 17 Pro Max 256GB original','Certificado de autenticidade'], en:['Rose gold finish','Raised gold bee','Exclusive 2026 edition','Original iPhone 17 Pro Max 256GB','Certificate of authenticity'], ar:['تشطيب ذهب وردي','نحلة ذهبية بارزة','إصدار 2026 حصري','آيفون 17 برو ماكس 256GB أصلي','شهادة الأصالة'] }
  },
  {
    id:7, img:'assets/images/iphone-caixa-gold.jpeg', category:'iphone', badge:null,
    name:'iPhone 17 Pro Max 256GB Kit Gold',
    cat:{ pt:'iPhone · Kit Premium', en:'iPhone · Premium Kit', ar:'آيفون · الطقم الفاخر' },
    price:'Consulte',
    desc:{ pt:'Kit completo com iPhone 24KT em caixa premium banhada a ouro e certificado de autenticidade.', en:'Complete kit with 24KT iPhone in premium gold-plated box and certificate of authenticity.', ar:'طقم كامل مع آيفون 24 قيراط في صندوق مطلي بالذهب وشهادة الأصالة.' },
    features:{ pt:['iPhone 17 Pro Max 256GB 24KT','Caixa premium banhada a ouro','Certificado de autenticidade','Embalagem de presente','Entrega rastreada'], en:['iPhone 17 Pro Max 256GB 24KT','Premium gold-plated box','Certificate of authenticity','Gift packaging','Tracked delivery'], ar:['آيفون 17 برو ماكس 256GB 24 قيراط','صندوق مطلي بالذهب','شهادة الأصالة','تغليف هدية','توصيل مع تتبع'] }
  },
  {
    id:8, img:'assets/images/watch-colecao.jpeg', category:'watch', badge:'COLEÇÃO',
    name:'Apple Watch Ultra Gold Collection',
    cat:{ pt:'Apple Watch · 24KT Gold', en:'Apple Watch · 24KT Gold', ar:'آبل ووتش · ذهب 24 قيراط' },
    price:'Consulte',
    desc:{ pt:'Coleção completa de Apple Watch banhados a ouro 24KT com gravações exclusivas.', en:'Complete Apple Watch collection plated in 24KT gold with exclusive engravings.', ar:'مجموعة كاملة من ساعات آبل ووتش المطلية بذهب 24 قيراط بنقوش حصرية.' },
    features:{ pt:['Banhamento em ouro 24KT','Gravações artesanais','Caixa e pulseira douradas','Certificado de autenticidade'], en:['24KT gold plating','Artisan engravings','Golden case and band','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','نقوش يدوية','هيكل وسوار ذهبيان','شهادة الأصالة'] }
  },
  {
    id:9, img:'assets/images/watch-pulso.jpeg', category:'watch', badge:null,
    name:'Apple Watch Engraved Gold',
    cat:{ pt:'Apple Watch · Gravado', en:'Apple Watch · Engraved', ar:'آبل ووتش · منقوش' },
    price:'Consulte',
    desc:{ pt:'Pulseira e caixa completamente banhadas a ouro 24KT com detalhes gravados à mão.', en:'Band and case fully plated in 24KT gold with hand-engraved details.', ar:'سوار وهيكل مطليان كلياً بذهب 24 قيراط مع تفاصيل منقوشة يدوياً.' },
    features:{ pt:['Banhamento ouro 24KT','Gravações artesanais à mão','Padrão floral detalhado','Certificado de autenticidade'], en:['24KT gold plating','Hand-engraved details','Detailed floral pattern','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','نقوش يدوية','نمط زهري مفصل','شهادة الأصالة'] }
  },
  {
    id:10, img:'assets/images/watch-pulseira.jpeg', category:'watch', badge:null,
    name:'Apple Watch Band 24KT Floral',
    cat:{ pt:'Apple Watch · Pulseira', en:'Apple Watch · Band', ar:'آبل ووتش · سوار' },
    price:'Consulte',
    desc:{ pt:'Pulseira metálica banhada a ouro 24KT com gravações florais artesanais. Compatível com todas as séries.', en:'Metal band plated in 24KT gold with artisan floral engravings. Compatible with all Apple Watch series.', ar:'سوار معدني مطلي بذهب 24 قيراط بنقوش زهرية يدوية. متوافق مع جميع أجهزة آبل ووتش.' },
    features:{ pt:['Banhamento ouro 24KT','Gravações florais artesanais','Compatível com todas as séries','Metal premium'], en:['24KT gold plating','Artisan floral engravings','Compatible with all series','Premium metal'], ar:['طلاء ذهب 24 قيراط','نقوش زهرية يدوية','متوافق مع جميع الأجهزة','معدن فاخر'] }
  },
  {
    id:11, img:'assets/images/airpods-gold-2.jpeg', category:'acessorio', badge:'NOVO',
    name:'AirPods Max 24KT Gold Edition',
    cat:{ pt:'Acessórios · Ouro 24KT', en:'Accessories · 24KT Gold', ar:'إكسسوارات · ذهب 24 قيراط' },
    price:'Consulte',
    desc:{ pt:'AirPods Max banhados a ouro 24KT com gravação personalizada. Produzidos nos EAU com garantia de 12 meses.', en:'24KT gold-plated AirPods Max with custom engraving. Made in UAE with 12-month warranty.', ar:'سماعات AirPods Max مطلية بذهب 24 قيراط مع نقش مخصص. صُنعت في الإمارات مع ضمان 12 شهراً.' },
    features:{ pt:['Banhamento em ouro 24KT','Gravação personalizada exclusiva','Produzido nos Emirados Árabes','Garantia 12 meses','Embalagem premium','Certificado de autenticidade'], en:['24KT gold plating','Exclusive custom engraving','Made in UAE','12-month warranty','Premium packaging','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','نقش مخصص حصري','صُنع في الإمارات','ضمان 12 شهراً','تغليف فاخر','شهادة الأصالة'] }
  },
  {
    id:12, img:'assets/images/airpods-gold-1.jpeg', category:'acessorio', badge:'EXCLUSIVO',
    name:'AirPods Max Gold Personalizado',
    cat:{ pt:'Acessórios · Sob Encomenda', en:'Accessories · Custom Order', ar:'إكسسوارات · طلب مخصص' },
    price:'Consulte',
    desc:{ pt:'Crie seu AirPods Max único: banhado a ouro 24KT com seu nome, número ou símbolo gravado. Peça exclusiva feita sob encomenda.', en:'Create your unique AirPods Max: 24KT gold-plated with your name, number or symbol engraved. Exclusive custom-made piece.', ar:'أنشئ سماعات AirPods Max الفريدة الخاصة بك: مطلية بذهب 24 قيراط مع نقش اسمك أو رقمك أو رمزك. قطعة حصرية مصنوعة بالطلب.' },
    features:{ pt:['Banhamento em ouro 24KT','Gravação personalizada com seu nome/número','Feito sob encomenda','Produzido nos Emirados Árabes','Garantia 12 meses','Certificado de autenticidade'], en:['24KT gold plating','Custom engraving with your name/number','Made to order','Made in UAE','12-month warranty','Certificate of authenticity'], ar:['طلاء ذهب 24 قيراط','نقش مخصص باسمك/رقمك','مصنوع بالطلب','صُنع في الإمارات','ضمان 12 شهراً','شهادة الأصالة'] }
  }
];

/* =============================================
   STATE
   ============================================= */
let lang = localStorage.getItem('rv_lang') || 'pt';
let theme = localStorage.getItem('rv_theme') || 'dark';
let cart = JSON.parse(localStorage.getItem('rv_cart') || '[]');
let currentModalId = null;

/* =============================================
   LANGUAGE
   ============================================= */
function applyLang(l) {
  lang = l;
  localStorage.setItem('rv_lang', l);
  const html = document.documentElement;
  html.lang = l;
  html.dir = l === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[l][key]) el.textContent = T[l][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[l][key]) el.innerHTML = T[l][key];
  });

  // About list
  const aboutList = document.getElementById('aboutList');
  if (aboutList && T[l].about_list) {
    aboutList.innerHTML = T[l].about_list.map(i => `<li>✦ ${i}</li>`).join('');
  }

  // Footer hours (has html)
  document.querySelectorAll('[data-i18n="footer_hours"]').forEach(el => {
    el.innerHTML = T[l].footer_hours;
  });

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });

  // Re-render products in new lang
  renderProducts();
  updateCartUI();
  updateWppLinks();
}

/* =============================================
   THEME
   ============================================= */
function applyTheme(t) {
  theme = t;
  localStorage.setItem('rv_theme', t);
  document.body.className = t === 'light' ? 'light-theme' : 'dark-theme';
  const moon = document.querySelector('.icon-moon');
  const sun = document.querySelector('.icon-sun');
  if (moon) moon.style.display = t === 'light' ? 'none' : '';
  if (sun) sun.style.display = t === 'light' ? '' : 'none';
}

/* =============================================
   WPP LINKS
   ============================================= */
function buildWppUrl(msg) {
  return `https://wa.me/${WPP}?text=${encodeURIComponent(msg)}`;
}
function updateWppLinks() {
  const msg = T[lang].wpp_greeting;
  document.querySelectorAll('.wpp-link').forEach(el => {
    el.href = buildWppUrl(msg);
    el.target = '_blank';
  });
}

/* =============================================
   PRODUCTS RENDER
   ============================================= */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-category="${p.category}" id="${p.id === 0 ? 'iphones' : p.id === 8 ? 'watches' : ''}">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="product-overlay">
          <button class="btn-quick" onclick="openModal(${p.id})">${T[lang].btn_details}</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.cat[lang] || p.cat.pt}</span>
        <h3>${p.name}</h3>
        <p>${p.desc[lang] || p.desc.pt}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="btn-cart" onclick="addToCart(${p.id})">${T[lang].btn_add}</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-attach filter
  const activeFilter = document.querySelector('.filter-btn.active');
  if (activeFilter && activeFilter.dataset.filter !== 'all') {
    filterProducts(activeFilter.dataset.filter);
  }
}

function filterProducts(filter) {
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
  });
}

/* =============================================
   CART
   ============================================= */
function updateCartUI() {
  const count = cart.length;
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    countEl.textContent = count;
    countEl.classList.toggle('visible', count > 0);
  }

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!itemsEl) return;

  if (count === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>${T[lang].cart_empty}</p>
      </div>`;
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (footerEl) footerEl.style.display = 'block';
  itemsEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}" /></div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>${item.price}</span>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})">×</button>
    </div>
  `).join('');

  // Build WhatsApp message with cart items
  const productList = cart.map(i => `• ${i.name}`).join('\n');
  const msg = T[lang].wpp_cart_intro + productList + T[lang].wpp_cart_closing;
  const btn = document.getElementById('checkoutBtn');
  if (btn) {
    btn.onclick = () => window.open(buildWppUrl(msg), '_blank');
  }

  const totalEl = document.getElementById('cartTotalVal');
  if (totalEl) {
    const priced = cart.filter(i => i.price !== 'Consulte' && i.price !== 'Inquire' && i.price !== 'استفسار');
    totalEl.textContent = priced.length ? priced.reduce((acc, i) => {
      const v = parseFloat(i.price.replace(/[^0-9,]/g, '').replace(',', '.'));
      return acc + (isNaN(v) ? 0 : v);
    }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '—';
  }

  localStorage.setItem('rv_cart', JSON.stringify(cart));
}

function addToCart(id) {
  const product = PRODUCTS[id];
  if (!product) return;
  if (!cart.find(i => i.id === id)) {
    cart.push({ id: product.id, name: product.name, img: product.img, price: product.price });
    updateCartUI();
    openCartSidebar();
  } else {
    openCartSidebar();
  }
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  localStorage.setItem('rv_cart', JSON.stringify(cart));
  updateCartUI();
}

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

/* =============================================
   CART SIDEBAR
   ============================================= */
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');

function openCartSidebar() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartSidebar() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCartSidebar);
document.getElementById('cartClose').addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

/* =============================================
   MODAL
   ============================================= */
function openModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;
  currentModalId = id;
  document.getElementById('modalImg').innerHTML = `<img src="${p.img}" alt="${p.name}" />`;
  document.getElementById('modalCat').textContent = p.cat[lang] || p.cat.pt;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc[lang] || p.desc.pt;
  const features = p.features[lang] || p.features.pt;
  document.getElementById('modalFeatures').innerHTML = features.map(f => `<li>${f}</li>`).join('');
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalCartBtn').onclick = () => { addToCart(id); closeModal(); };

  // Update consult button
  const consultBtn = document.querySelector('#modal .btn-outline');
  if (consultBtn) {
    const msg = `${T[lang].wpp_greeting}\n\n${T[lang].btn_details}: ${p.name}`;
    consultBtn.href = buildWppUrl(msg);
    consultBtn.target = '_blank';
  }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

window.openModal = openModal;
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

/* =============================================
   HEADER SCROLL
   ============================================= */
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* =============================================
   MOBILE MENU
   ============================================= */
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav').classList.remove('open'));
});

/* =============================================
   FILTER TABS
   ============================================= */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterProducts(btn.dataset.filter);
  });
});

/* =============================================
   LANG SWITCHER
   ============================================= */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* =============================================
   THEME TOGGLE
   ============================================= */
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(theme === 'dark' ? 'light' : 'dark');
});

/* =============================================
   INIT
   ============================================= */
applyTheme(theme);
applyLang(lang);
