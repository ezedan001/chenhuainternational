const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenuBtn = document.getElementById('closeMobileMenu');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

// Event listeners
hamburgerBtn.addEventListener('click', openMobileMenu);
closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

// Optional: close menu when clicking outside menu on mobile (not required, but user friendly)
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    closeMobileMenu();
  }
});



// Elements
const modeToggle = document.getElementById('modeToggle');
const mobileModeToggle = document.getElementById('mobileModeToggle');

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});



// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    modeToggle.textContent = '☀️'; // change icon to sun
    if (mobileModeToggle) mobileModeToggle.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    modeToggle.textContent = '🌓'; // moon icon
    if (mobileModeToggle) mobileModeToggle.textContent = '🌓 Dark Mode';
  }
}

// Event listeners
if (modeToggle) modeToggle.addEventListener('click', toggleDarkMode);
if (mobileModeToggle) mobileModeToggle.addEventListener('click', toggleDarkMode);














// Get today's date
const today = new Date();

// Format: Month Day, Year (e.g., June 4, 2025)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

// Insert the formatted date into the span
document.getElementById('last-updated-date').textContent = formattedDate;










// Automatically update current year
document.getElementById("year").textContent = new Date().getFullYear();

// Automatically update current year///















const translations = {
  en: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",


    terms_title: "Terms of Service",
    terms_updated: "Last updated: June 4, 2025",

    intro_title: "Introduction",
    intro_text1: "This Terms of Service agreement outlines the rules and guidelines for using the website, products, and services provided by CHENHUA AUTO.",
    intro_text2: "By accessing or using our platform, you agree to be bound by these terms. These terms are designed to ensure a clear, secure, and respectful experience for all users of CHENHUA AUTO.",

    responsibilities_title: "User Responsibilities",
    responsibilities_text: "As a user of CHENHUA AUTO, you agree to the following responsibilities while using our website, products, and services:",
    responsibilities_list1: "Use the website and services in compliance with all applicable laws and regulations.",
    responsibilities_list2: "Provide accurate, honest, and complete information when submitting product inquiries and using contact forms.",
    responsibilities_list3: "Do not engage in fraudulent or malicious activities that could harm the website, its services, or its users.",
    responsibilities_list4: "Respect the privacy and confidentiality of other users and their information.",
    responsibilities_list5: "Abide by any other guidelines and policies set forth by CHENHUA AUTO.",

    orders_title: "Orders and Communication",
    orders_text1: "At CHENHUA AUTO, all product inquiries and orders are handled manually through direct communication channels such as WhatsApp, email, or phone. We do not support instant online purchasing on our website.",
    orders_list1: "Customers are required to initiate product inquiries through the provided contact forms, email (support@chenhuaauto.com), or WhatsApp.",
    orders_list2: "All orders are processed manually after detailed communication with our team regarding pricing, specifications, and delivery terms.",
    orders_list3: "We aim to respond to all inquiries as quickly as possible, typically within 24–48 hours.",
    orders_list4: "Quotes, invoices, and further transaction details are shared directly after mutual agreement.",
    orders_text2: "By using our website and contacting us, you acknowledge that the purchase process involves direct communication and agreement, not instant checkout or automatic payments.",

    intellectual_title: "Intellectual Property",
    intellectual_text1: "All content displayed on this website, including but not limited to logos, product images, graphics, text, layout, and design elements, are the exclusive property of CHENHUA AUTO.",
    intellectual_list1: "Unauthorized use, reproduction, or distribution of any content without prior written permission is strictly prohibited.",
    intellectual_list2: "All trademarks, service marks, and logos used on the website are owned by or licensed to CHENHUA AUTO and are protected by applicable intellectual property laws.",
    intellectual_list3: "Users may not copy, reuse, or modify any material from the website for commercial or public purposes without our explicit consent.",
    intellectual_text2: "We reserve all rights not expressly granted in and to the website and its content.",

    liability_title: "Limitation of Liability",
    liability_text1: "CHENHUA AUTO is not liable for any direct, indirect, incidental, or consequential damages resulting from:",
    liability_list1: "Delays or failures in delivery caused by third-party logistics providers.",
    liability_list2: "Errors or miscommunications originating from third-party services or platforms.",
    liability_list3: "Temporary website outages or access issues.",
    liability_text2: "While we strive to provide accurate information and timely responses, CHENHUA AUTO does not guarantee uninterrupted access to the website or error-free communication at all times.",

    changes_title: "Changes to Terms",
    changes_text1: "We may update these Terms of Service at any time to reflect changes in our business, legal requirements, or for other reasons. Any modifications will be effective immediately upon posting on this page.",
    changes_text2: "By continuing to use the CHENHUA AUTO website after any changes are made, you agree to be bound by the updated terms. We encourage you to review this page periodically to stay informed of any updates.",

    contact_section_title: "📞 Contact Info Section",
    contact_section_intro: "If you have questions about these terms, contact us at:",
    contact_email: "📧 Email: support@chenhuaauto.com",
    contact_whatsapp: "📞 WhatsApp: Message Us",
    contact_page: "🔗 Visit our Contact Page",


    action_1: "Want to do business with CHENHUA AUTO ?",
    action_2: "We’re ready to provide you with the best rims and support for your needs. Let’s grow together.",
    contact_sales: "Contact Our Sales Team",


    quick_links: "Quick Links",
    about_us: "About Us",
    contact: "Contact",
    follow_us: "Follow Us",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    contact_us: "Contact CHENHUA AUTO",
    full_name: "Full Name",
    company_name: "Company Name",
    phone_number: "Phone Number",
    whatsapp: "WhatsApp",
    wechat: "WeChat",
    toggle_theme: "Toggle Theme"
  },

  fr: {
    home: "Accueil",

    products: "Produits",

    about: "À propos",

    contact: "Contact",





    terms_title: "Conditions d'utilisation",

    terms_updated: "Dernière mise à jour : 4 juin 2025",



    intro_title: "Introduction",

    intro_text1: "Le présent accord sur les conditions d'utilisation décrit les règles et lignes directrices pour l'utilisation du site web, des produits et des services fournis par CHENHUA AUTO.",

    intro_text2: "En accédant à notre plateforme ou en l'utilisant, vous acceptez d'être lié par ces conditions. Ces conditions visent à garantir une expérience claire, sécurisée et respectueuse pour tous les utilisateurs de CHENHUA AUTO.",



    responsibilities_title: "Responsabilités de l'utilisateur",

    responsibilities_text: "En tant qu'utilisateur de CHENHUA AUTO, vous acceptez les responsabilités suivantes lors de l'utilisation de notre site web, de nos produits et de nos services :",

    responsibilities_list1: "Utiliser le site et les services conformément à toutes les lois et réglementations applicables.",

    responsibilities_list2: "Fournir des informations exactes, honnêtes et complètes lors de l'envoi de demandes de produits et de l'utilisation des formulaires de contact.",

    responsibilities_list3: "Ne pas participer à des activités frauduleuses ou malveillantes susceptibles de nuire au site, à ses services ou à ses utilisateurs.",

    responsibilities_list4: "Respecter la vie privée et la confidentialité des autres utilisateurs et de leurs informations.",

    responsibilities_list5: "Respecter toutes les autres directives et politiques établies par CHENHUA AUTO.",



    orders_title: "Commandes et communication",

    orders_text1: "Chez CHENHUA AUTO, toutes les demandes de produits et commandes sont traitées manuellement via des canaux de communication directe tels que WhatsApp, email ou téléphone. Nous ne proposons pas d'achat instantané en ligne sur notre site.",

    orders_list1: "Les clients doivent initier les demandes de produits via les formulaires de contact, l'e-mail (support@chenhuaauto.com) ou WhatsApp.",

    orders_list2: "Toutes les commandes sont traitées manuellement après une communication détaillée avec notre équipe concernant les prix, les spécifications et les conditions de livraison.",

    orders_list3: "Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 à 48 heures.",

    orders_list4: "Les devis, factures et autres détails de transaction sont partagés directement après accord mutuel.",

    orders_text2: "En utilisant notre site web et en nous contactant, vous reconnaissez que le processus d'achat implique une communication directe et un accord, sans paiement automatique ou commande instantanée.",



    intellectual_title: "Propriété intellectuelle",

    intellectual_text1: "Tout le contenu affiché sur ce site, y compris, sans s'y limiter, les logos, images de produits, graphiques, textes, mises en page et éléments de design, est la propriété exclusive de CHENHUA AUTO.",

    intellectual_list1: "L'utilisation, la reproduction ou la distribution non autorisée de tout contenu sans autorisation écrite préalable est strictement interdite.",

    intellectual_list2: "Toutes les marques, marques de service et logos utilisés sur le site sont la propriété de CHENHUA AUTO ou sont concédés sous licence et protégés par les lois applicables sur la propriété intellectuelle.",

    intellectual_list3: "Les utilisateurs ne peuvent pas copier, réutiliser ou modifier tout contenu du site à des fins commerciales ou publiques sans notre consentement explicite.",

    intellectual_text2: "Nous nous réservons tous les droits non expressément accordés sur le site web et son contenu.",



    liability_title: "Limitation de responsabilité",

    liability_text1: "CHENHUA AUTO ne peut être tenu responsable des dommages directs, indirects, accessoires ou consécutifs résultant de :",

    liability_list1: "Retards ou échecs de livraison causés par des prestataires logistiques tiers.",

    liability_list2: "Erreurs ou mauvaises communications provenant de services ou plateformes tiers.",

    liability_list3: "Pannes temporaires du site web ou problèmes d'accès.",

    liability_text2: "Bien que nous nous efforcions de fournir des informations précises et des réponses rapides, CHENHUA AUTO ne garantit pas un accès ininterrompu au site ou une communication sans erreur à tout moment.",



    changes_title: "Modifications des conditions",

    changes_text1: "Nous pouvons mettre à jour ces Conditions d'utilisation à tout moment pour refléter les changements dans nos activités, les exigences légales ou pour d'autres raisons. Toute modification sera effective immédiatement après sa publication sur cette page.",

    changes_text2: "En continuant d'utiliser le site CHENHUA AUTO après toute modification, vous acceptez d'être lié par les conditions mises à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles mises à jour.",



    contact_section_title: "📞 Section des contacts",

    contact_section_intro: "Si vous avez des questions concernant ces conditions, veuillez nous contacter à :",

    contact_email: "📧 Email : support@chenhuaauto.com",

    contact_whatsapp: "📞 WhatsApp : Envoyez-nous un message",

    contact_page: "🔗 Visitez notre page de contact",





    action_1: "Vous souhaitez faire affaire avec CHENHUA AUTO ?",

    action_2: "Nous sommes prêts à vous fournir les meilleures jantes et un accompagnement adapté à vos besoins. Grandissons ensemble.",

    contact_sales: "Contacter notre équipe commerciale",




    quick_links: "Liens rapides",

    about_us: "À propos de nous",

    contact: "Contact",

    follow_us: "Suivez-nous",

    privacy_policy: "Politique de confidentialité",

    terms_of_service: "Conditions d'utilisation",

    contact_us: "Contacter CHENHUA AUTO",

    full_name: "Nom complet",

    company_name: "Nom de l’entreprise",

    phone_number: "Numéro de téléphone",

    whatsapp: "WhatsApp",

    wechat: "WeChat",

    toggle_theme: "Changer le thème"

  },

  ar: {
    home: "الرئيسية",

    products: "المنتجات",

    about: "من نحن",

    contact: "اتصل بنا",





    terms_title: "شروط الخدمة",

    terms_updated: "آخر تحديث: 4 يونيو 2025",



    intro_title: "مقدمة",

    intro_text1: "توضح اتفاقية شروط الخدمة هذه القواعد والإرشادات الخاصة باستخدام الموقع الإلكتروني والمنتجات والخدمات المقدمة من قبل CHENHUA AUTO.",

    intro_text2: "من خلال الوصول إلى منصتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. تم تصميم هذه الشروط لضمان تجربة واضحة وآمنة ومحترمة لجميع مستخدمي CHENHUA AUTO.",



    responsibilities_title: "مسؤوليات المستخدم",

    responsibilities_text: "بصفتك مستخدمًا لـ CHENHUA AUTO، فإنك توافق على المسؤوليات التالية أثناء استخدام موقعنا ومنتجاتنا وخدماتنا:",

    responsibilities_list1: "استخدام الموقع والخدمات بما يتوافق مع جميع القوانين واللوائح المعمول بها.",

    responsibilities_list2: "تقديم معلومات دقيقة وصحيحة وكاملة عند إرسال استفسارات المنتجات واستخدام نماذج الاتصال.",

    responsibilities_list3: "عدم الانخراط في أنشطة احتيالية أو ضارة قد تلحق الضرر بالموقع أو خدماته أو مستخدميه.",

    responsibilities_list4: "احترام خصوصية وسرية معلومات المستخدمين الآخرين.",

    responsibilities_list5: "الامتثال لأي إرشادات وسياسات أخرى تحددها CHENHUA AUTO.",



    orders_title: "الطلبات والتواصل",

    orders_text1: "في CHENHUA AUTO، تتم معالجة جميع الاستفسارات والطلبات يدويًا من خلال قنوات الاتصال المباشرة مثل WhatsApp أو البريد الإلكتروني أو الهاتف. لا ندعم الشراء الفوري عبر الموقع.",

    orders_list1: "يُطلب من العملاء بدء استفسارات المنتجات من خلال نماذج الاتصال أو البريد الإلكتروني (support@chenhuaauto.com) أو WhatsApp.",

    orders_list2: "تُعالج جميع الطلبات يدويًا بعد التواصل المفصل مع فريقنا بشأن الأسعار والمواصفات وشروط التسليم.",

    orders_list3: "نهدف إلى الرد على جميع الاستفسارات في غضون 24 إلى 48 ساعة.",

    orders_list4: "يتم مشاركة عروض الأسعار والفواتير وتفاصيل المعاملات مباشرة بعد الاتفاق المتبادل.",

    orders_text2: "باستخدامك لموقعنا والتواصل معنا، فإنك تقر بأن عملية الشراء تتطلب التواصل المباشر والاتفاق، وليست عملية دفع فوري أو شراء تلقائي.",



    intellectual_title: "الملكية الفكرية",

    intellectual_text1: "جميع المحتويات المعروضة على هذا الموقع، بما في ذلك الشعارات وصور المنتجات والرسومات والنصوص والتصاميم، هي ملكية حصرية لـ CHENHUA AUTO.",

    intellectual_list1: "يُحظر تمامًا استخدام أو نسخ أو توزيع أي محتوى دون إذن خطي مسبق.",

    intellectual_list2: "جميع العلامات التجارية والخدمية والشعارات المستخدمة على الموقع مملوكة أو مرخصة لـ CHENHUA AUTO ومحفوظة بموجب قوانين الملكية الفكرية المعمول بها.",

    intellectual_list3: "لا يجوز للمستخدمين نسخ أو إعادة استخدام أو تعديل أي مادة من الموقع لأغراض تجارية أو عامة دون إذن صريح منا.",

    intellectual_text2: "نحتفظ بجميع الحقوق غير الممنوحة صراحة على الموقع ومحتواه.",



    liability_title: "تحديد المسؤولية",

    liability_text1: "CHENHUA AUTO غير مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن:",

    liability_list1: "تأخيرات أو فشل في التسليم بسبب مزودي خدمات لوجستية من طرف ثالث.",

    liability_list2: "أخطاء أو سوء تواصل ناتج عن خدمات أو منصات خارجية.",

    liability_list3: "انقطاعات مؤقتة في الموقع أو مشاكل في الوصول.",

    liability_text2: "بينما نسعى لتقديم معلومات دقيقة واستجابات في الوقت المناسب، لا تضمن CHENHUA AUTO الوصول المستمر للموقع أو الاتصال الخالي من الأخطاء في جميع الأوقات.",



    changes_title: "تغييرات الشروط",

    changes_text1: "قد نقوم بتحديث شروط الخدمة هذه في أي وقت لتعكس التغيرات في أعمالنا أو المتطلبات القانونية أو لأسباب أخرى. ستكون أي تعديلات سارية فور نشرها على هذه الصفحة.",

    changes_text2: "من خلال الاستمرار في استخدام موقع CHENHUA AUTO بعد إجراء أي تغييرات، فإنك توافق على الالتزام بالشروط المحدثة. نوصيك بمراجعة هذه الصفحة دوريًا للبقاء على اطلاع.",



    contact_section_title: "📞 قسم معلومات الاتصال",

    contact_section_intro: "إذا كانت لديك أي أسئلة بخصوص هذه الشروط، يرجى التواصل معنا عبر:",

    contact_email: "📧 البريد الإلكتروني: support@chenhuaauto.com",

    contact_whatsapp: "📞 WhatsApp: راسلنا",

    contact_page: "🔗 قم بزيارة صفحة الاتصال الخاصة بنا",





    action_1: "هل ترغب في التعامل مع CHENHUA AUTO؟",

    action_2: "نحن جاهزون لتقديم أفضل الجنوط والدعم لتلبية احتياجاتك. لننمو معًا.",

    contact_sales: "اتصل بفريق المبيعات لدينا",





    quick_links: "روابط سريعة",

    about_us: "من نحن",

    contact: "اتصل بنا",

    follow_us: "تابعنا",

    privacy_policy: "سياسة الخصوصية",

    terms_of_service: "شروط الخدمة",

    contact_us: "اتصل بـ CHENHUA AUTO",

    full_name: "الاسم الكامل",

    company_name: "اسم الشركة",

    phone_number: "رقم الهاتف",

    whatsapp: "واتساب",

    wechat: "ويتشات",

    toggle_theme: "تبديل النمط"

  },

  zh: {
    home: "首页",

    products: "产品",

    about: "关于我们",

    contact: "联系我们",





    terms_title: "服务条款",

    terms_updated: "最后更新：2025年6月4日",



    intro_title: "介绍",

    intro_text1: "本服务条款协议概述了使用 CHENHUA AUTO 提供的网站、产品和服务的规则和指南。",

    intro_text2: "通过访问或使用我们的平台，您同意受这些条款的约束。这些条款旨在确保所有 CHENHUA AUTO 用户拥有清晰、安全和尊重的体验。",



    responsibilities_title: "用户责任",

    responsibilities_text: "作为 CHENHUA AUTO 的用户，在使用我们的网站、产品和服务时，您同意以下责任：",

    responsibilities_list1: "遵守所有适用的法律法规使用本网站和服务。",

    responsibilities_list2: "在提交产品咨询和使用联系表单时提供准确、真实和完整的信息。",

    responsibilities_list3: "不得从事可能危害网站、服务或用户的欺诈或恶意活动。",

    responsibilities_list4: "尊重其他用户的隐私和信息保密性。",

    responsibilities_list5: "遵守 CHENHUA AUTO 制定的其他任何指南和政策。",



    orders_title: "订单与沟通",

    orders_text1: "在 CHENHUA AUTO，所有产品咨询和订单均通过 WhatsApp、电子邮件或电话等直接沟通渠道手动处理。我们的网站不支持即时在线购买。",

    orders_list1: "客户需通过提供的联系表单、电子邮件（support@chenhuaauto.com）或 WhatsApp 发起产品咨询。",

    orders_list2: "所有订单在与我们的团队就价格、规格和交付条款进行详细沟通后手动处理。",

    orders_list3: "我们会尽快回复所有咨询，通常在24至48小时内。",

    orders_list4: "报价、发票和进一步的交易细节将在双方达成共识后直接发送。",

    orders_text2: "通过使用我们的网站并与我们联系，您确认购买过程是通过直接沟通和协议达成的，而不是即时结账或自动付款。",



    intellectual_title: "知识产权",

    intellectual_text1: "本网站展示的所有内容，包括但不限于标志、产品图片、图形、文本、布局和设计元素，均为 CHENHUA AUTO 的专属财产。",

    intellectual_list1: "未经事先书面许可，禁止任何未经授权的使用、复制或分发内容。",

    intellectual_list2: "本网站使用的所有商标、服务标志和标识均由 CHENHUA AUTO 拥有或获得许可，并受适用知识产权法律保护。",

    intellectual_list3: "用户不得在未经明确同意的情况下出于商业或公开目的复制、重用或修改本网站的任何材料。",

    intellectual_text2: "我们保留对本网站及其内容中未明确授予的所有权利。",



    liability_title: "责任限制",

    liability_text1: "CHENHUA AUTO 不对以下情况造成的任何直接、间接、附带或后果性损害负责：",

    liability_list1: "由第三方物流供应商导致的延误或交付失败。",

    liability_list2: "源于第三方服务或平台的错误或沟通不畅。",

    liability_list3: "网站临时中断或访问问题。",

    liability_text2: "虽然我们努力提供准确的信息和及时响应，但 CHENHUA AUTO 不保证网站访问不间断或通信始终无误。",



    changes_title: "条款变更",

    changes_text1: "我们可能会随时更新这些服务条款，以反映我们的业务变化、法律要求或其他原因。任何更改将在本页面发布后立即生效。",

    changes_text2: "在我们发布更改后继续使用 CHENHUA AUTO 网站，即表示您同意受更新后的条款约束。我们建议您定期查看本页面以了解最新信息。",



    contact_section_title: "📞 联系信息",

    contact_section_intro: "如果您对本条款有任何疑问，请通过以下方式与我们联系：",

    contact_email: "📧 邮箱：support@chenhuaauto.com",

    contact_whatsapp: "📞 WhatsApp：联系我们",

    contact_page: "🔗 访问我们的联系页面",





    action_1: "想与 CHENHUA AUTO 合作？",

    action_2: "我们随时准备为您提供最佳的轮辋和服务支持。让我们一起成长。",

    contact_sales: "联系销售团队",





    quick_links: "快速链接",

    about_us: "关于我们",

    contact: "联系我们",

    follow_us: "关注我们",

    privacy_policy: "隐私政策",

    terms_of_service: "服务条款",

    contact_us: "联系 CHENHUA AUTO",

    full_name: "全名",

    company_name: "公司名称",

    phone_number: "电话号码",

    whatsapp: "WhatsApp",

    wechat: "微信",

    toggle_theme: "切换主题"

  }


};




function changeLanguage(lang) {
  // Save selected language to localStorage (optional)
  localStorage.setItem('selectedLanguage', lang);

  // Find all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Also update language select dropdowns (to keep them in sync)
  document.querySelectorAll('.language-select, .mobile-language-select').forEach(select => {
    select.value = lang;
  });
}

// On page load, set language from saved preference or default to English
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLang);
});








// Sample product list
const productSuggestions = [
  "Durable Tractor Rim",
  "Multi-Purpose Harvester Wheel",
  "Heavy-Duty Agricultural Rim",
  "Reinforced Implement Rim"
];

// Time-based greeting (2025 style)
function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 11) return "Good morning 🌄";
  if (hour < 17) return "Good afternoon ☀️";
  if (hour < 21) return "Good evening 🌇";
  return "Hello 🌙";
}

// Get user's country by IP
async function detectCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_name || "your region";
  } catch (err) {
    return "your region";
  }
}

// Update contact-info section
async function updateContactInfo() {
  document.getElementById("greeting").textContent = getTimeGreeting();
  document.getElementById("suggestion").textContent = `🔧 Suggested Product: ${productSuggestions[Math.floor(Math.random() * productSuggestions.length)]}`;
  document.getElementById("country").textContent = `📍 You're visiting from ${await detectCountry()}`;
}
updateContactInfo();

// 4 Professional Template Messages
const templates = [
  name => `Dear CHENHUA AUTO Team,\n\nMy name is ${name}. I’m interested in purchasing agricultural rims in bulk and would like more details on available sizes and prices.\n\nLooking forward to your reply.\nBest regards,\n${name}`,
  name => `Hello CHENHUA AUTO,\n\nThis is ${name}. Please provide your latest product catalog for tractor and implement rims. I’m sourcing for distribution.\n\nThanks,\n${name}`,
  name => `Hi CHENHUA AUTO,\n\nI’m ${name}, reaching out to discuss business cooperation. Kindly share your MOQ and delivery options.\n\nRegards,\n${name}`,
  name => `Dear Sales Team,\n\nI’m ${name}. I came across your website and want to inquire about rim models suitable for farming equipment in my country.\n\nWarm regards,\n${name}`
];

// Prompt + Gmail compose with selected message
function openGmailCompose() {
  const name = prompt("Please enter your name:");
  if (!name) return alert("Name is required to continue.");

  const messageIndex = Math.floor(Math.random() * templates.length);
  const messageBody = encodeURIComponent(templates[messageIndex](name));

  const gmailLink = `https://mail.google.com/mail/?view=cm&to=18054365167@163.com&su=Inquiry from ${name}&body=${messageBody}`;
  window.open(gmailLink, "_blank");
}

// Attach Gmail handler to email link
document.getElementById("emailLink").addEventListener("click", function (e) {
  e.preventDefault();
  openGmailCompose();
});

// Optional: WhatsApp fallback (just a static link)
document.getElementById("whatsappLink").href = "https://wa.me/8618054365167";

// Contact Form Handler (if using custom handler)
document.querySelector("form")?.addEventListener("submit", function (e) {
  alert("✅ Your message has been prepared. Please confirm in your email app.");
});

