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










// Automatically update current year
document.getElementById("year").textContent = new Date().getFullYear();
// Automatically update current year///
















// Time-based greeting
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
}

// Random template
function getRandomTemplate() {
    const templates = [
        "I would like to inquire about your products and services.",
        "Please share your latest catalog and pricing.",
        "We are interested in collaborating with CHENHUA AUTO.",
        "Kindly provide more details about your offerings."
    ];
    return templates[Math.floor(Math.random() * templates.length)];
}

// Fetch country
async function fetchCountry() {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        return data.country_name || "your country";
    } catch {
        return "your country";
    }
}

// Generate dynamic email link
async function generateEmailLink() {
    const greeting = getGreeting();
    const suggestion = getRandomTemplate();
    const country = await fetchCountry();

    const body = `${greeting},

${suggestion}

🌍 I am contacting you from ${country}.

Before we continue, please help us with the following details:

🔹 Full Name:  
🔹 Company Name:  
🔹 Phone Number:  

Our CHENHUA AUTO team will reply as soon as possible.

Best regards,  
[Your Name]`;

    const subject = "Privacy Inquiry";
    const email = "18054365167@163.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Inject into page
    document.getElementById("dynamic-email").innerHTML =
        `📧 Email: <a href="${mailtoLink}">${email}</a>`;
}

generateEmailLink();













const translations = {
    en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        // Privacy Intro
        privac_title: "Privacy Policy",
        privacy_text: "This Privacy Policy outlines how CHENHUA INTERNATIONAL collects, uses, and protects your information.",

        // Information We Collect
        info_title: "Information We Collect",
        info_intro: "CHENHUA INTERNATIONAL may collect the following types of information:",
        info_personal: "Personal Data: Name, email address, phone number, and other contact details.",
        info_technical: "Technical Data: IP address, browser type, operating system, device information, and access times.",
        info_behavioral: "Behavioral Data: Pages visited, links clicked, time spent on site, and user preferences.",

        // How We Use Your Information
        usage_title: "How We Use Your Information",
        usage_intro: "CHENHUA INTERNATIONAL uses the collected information for the following purposes:",
        usage_inquiries: "To process inquiries: We use your personal information to respond to your messages, product requests, or customer support needs.",
        usage_experience: "To improve user experience: Technical and behavioral data help us optimize our website and tailor our services to user preferences.",
        usage_marketing: "For marketing (if applicable): With your consent, we may send you updates, offers, or promotional content.",
        usage_legal: "To comply with legal obligations: We may use your information to fulfill regulatory, tax, or legal requirements.",

        // Sharing Your Information
        sharing_title: "Sharing Your Information",
        sharing_intro: "CHENHUA INTERNATIONAL values your privacy and transparency. We want you to understand how your information is shared:",
        sharing_nosell: "No Selling of Data: We do not sell, trade, or rent your personal data to third parties.",
        sharing_services: "Third-Party Services: We may share data with trusted partners who help us operate the website and services, such as:",
        sharing_google: "Google Analytics – to analyze website traffic and usage patterns",
        sharing_payment: "Payment processors – to securely handle transactions",
        sharing_email: "Email service providers – to send communication you opted into",

        // Data Security
        security_title: "Data Security",
        security_intro: "CHENHUA INTERNATIONAL is committed to protecting your information and has implemented strong security measures to safeguard it:",
        security_ssl: "SSL Encryption: All data transmitted between your browser and our servers is encrypted using industry-standard SSL (Secure Socket Layer) technology.",
        security_firewall: "Firewalls and Access Control: We use advanced firewalls and restricted access protocols to keep your data secure.",
        security_storage: "Secure Storage: Your personal data is stored in secure environments and only accessible to authorized personnel.",
        security_breach: "Breach Prevention: Regular security audits, software updates, and monitoring are conducted to prevent unauthorized access or data breaches.",

        // Your Rights
        rights_title: "Your Rights",
        rights_intro: "As a user of CHENHUA INTERNATIONAL services, you have the following rights regarding your personal data:",
        rights_access: "Right to Access: You can request a copy of the personal information we hold about you at any time.",
        rights_correct: "Right to Correction: If you believe any information we have is inaccurate or incomplete, you have the right to request a correction.",
        rights_delete: "Right to Deletion: You may request that we delete your personal data from our systems, subject to legal and operational obligations.",
        rights_contact: "To make a data request, please contact us at",
        rights_contact_email: "sales@chenhuaauto.com",

        // Cookies
        cookies_title: "Cookies",
        cookies_intro1: "Our website may use cookies to enhance your browsing experience and analyze site traffic. Cookies are small data files stored on your device that help us understand how you use our site.",
        cookies_intro2: "You have the option to disable cookies through your browser settings. However, please note that some features of the website may not function properly without cookies enabled.",
        cookies_intro3: "By continuing to use our site, you consent to our use of cookies in accordance with this Privacy Policy.",

        // Policy Updates
        updates_title: "Policy Updates",
        updates_intro: "We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and the revised policy will apply from the date of publication.",

        // Contact Information
        contact_title: "Contact Information",
        contact_intro: "If you have any questions or concerns about this Privacy Policy, feel free to contact us:",
        contact_email: "📧 Email: Generating link...",
        contact_phone: "📞 Phone: +86 18054365167",
        page: "Visit our Contact Page",

        // Footer
        quick_links: "Quick Links",
        follow_us: "Follow Us",
        privacy_policy: "Privacy Policy",
        terms_of_service: "Terms of Service",
        contact: "Contact",
        about_us: "About Us",
        contact_us: "Contact CHENHUA AUTO",
        full_name: "Full Name",
        company_name: "Company Name",
        phone_number: "Phone Number",
        whatsapp: "WhatsApp",
        wechat: "WeChat",

        toggle_theme: "Toggle Theme"
    },

    fr: {
        // Header & Navigation
        home: "Accueil",
        products: "Produits",
        about: "À propos",
        contact: "Contact",

        // Privacy Intro
        privac_title: "Politique de confidentialité",
        privacy_text: "Cette politique de confidentialité décrit comment CHENHUA INTERNATIONAL collecte, utilise et protège vos informations.",

        // Information We Collect
        info_title: "Informations que nous collectons",
        info_intro: "CHENHUA INTERNATIONAL peut collecter les types d'informations suivants :",
        info_personal: "Données personnelles : nom, adresse e-mail, numéro de téléphone et autres coordonnées.",
        info_technical: "Données techniques : adresse IP, type de navigateur, système d'exploitation, informations sur l'appareil et heures d'accès.",
        info_behavioral: "Données comportementales : pages visitées, liens cliqués, temps passé sur le site et préférences utilisateur.",

        // How We Use Your Information
        usage_title: "Comment nous utilisons vos informations",
        usage_intro: "CHENHUA INTERNATIONAL utilise les informations collectées aux fins suivantes :",
        usage_inquiries: "Pour traiter les demandes : nous utilisons vos informations personnelles pour répondre à vos messages, demandes de produits ou besoins d'assistance client.",
        usage_experience: "Pour améliorer l'expérience utilisateur : les données techniques et comportementales nous aident à optimiser notre site et à adapter nos services aux préférences des utilisateurs.",
        usage_marketing: "Pour le marketing (si applicable) : avec votre consentement, nous pouvons vous envoyer des mises à jour, offres ou contenus promotionnels.",
        usage_legal: "Pour se conformer aux obligations légales : nous pouvons utiliser vos informations pour répondre aux exigences réglementaires, fiscales ou légales.",

        // Sharing Your Information
        sharing_title: "Partage de vos informations",
        sharing_intro: "CHENHUA INTERNATIONAL valorise votre confidentialité et la transparence. Nous voulons que vous compreniez comment vos informations sont partagées :",
        sharing_nosell: "Pas de vente de données : nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers.",
        sharing_services: "Services tiers : nous pouvons partager des données avec des partenaires de confiance qui nous aident à exploiter le site et les services, tels que :",
        sharing_google: "Google Analytics – pour analyser le trafic et l'utilisation du site",
        sharing_payment: "Processeurs de paiement – pour gérer les transactions en toute sécurité",
        sharing_email: "Fournisseurs de services e-mail – pour envoyer les communications auxquelles vous vous êtes inscrit",

        // Data Security
        security_title: "Sécurité des données",
        security_intro: "CHENHUA INTERNATIONAL s'engage à protéger vos informations et a mis en place des mesures de sécurité strictes :",
        security_ssl: "Chiffrement SSL : toutes les données transmises entre votre navigateur et nos serveurs sont cryptées selon la norme SSL (Secure Socket Layer).",
        security_firewall: "Pare-feux et contrôle d'accès : nous utilisons des pare-feux avancés et des protocoles d'accès restreints pour sécuriser vos données.",
        security_storage: "Stockage sécurisé : vos données personnelles sont conservées dans des environnements sécurisés et accessibles uniquement au personnel autorisé.",
        security_breach: "Prévention des violations : des audits réguliers, mises à jour logicielles et surveillances sont effectués pour éviter tout accès non autorisé ou violation de données.",

        // Your Rights
        rights_title: "Vos droits",
        rights_intro: "En tant qu'utilisateur des services de CHENHUA INTERNATIONAL, vous disposez des droits suivants concernant vos données personnelles :",
        rights_access: "Droit d'accès : vous pouvez demander à tout moment une copie des informations personnelles que nous détenons à votre sujet.",
        rights_correct: "Droit de correction : si vous pensez que les informations que nous avons sont inexactes ou incomplètes, vous avez le droit de demander une correction.",
        rights_delete: "Droit de suppression : vous pouvez demander la suppression de vos données personnelles de nos systèmes, sous réserve des obligations légales et opérationnelles.",
        rights_contact: "Pour faire une demande concernant vos données, veuillez nous contacter à",
        rights_contact_email: "sales@chenhuaauto.com",

        // Cookies
        cookies_title: "Cookies",
        cookies_intro1: "Notre site peut utiliser des cookies pour améliorer votre expérience de navigation et analyser le trafic. Les cookies sont de petits fichiers de données stockés sur votre appareil pour nous aider à comprendre comment vous utilisez notre site.",
        cookies_intro2: "Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement sans cookies.",
        cookies_intro3: "En continuant à utiliser notre site, vous acceptez l'utilisation des cookies conformément à cette politique de confidentialité.",

        // Policy Updates
        updates_title: "Mises à jour de la politique",
        updates_intro: "Nous pouvons mettre à jour cette politique de confidentialité occasionnellement pour refléter les changements dans nos pratiques ou les exigences légales. Toute modification sera publiée sur cette page et la politique révisée s'appliquera à compter de la date de publication.",

        // Contact Information
        contact_title: "Informations de contact",
        contact_intro: "Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, n'hésitez pas à nous contacter :",
        contact_email: "📧 Email : Génération du lien...",
        contact_phone: "📞 Téléphone : +86 18054365167",
        page: "Visitez notre page de contact",

        // Footer
        quick_links: "Liens rapides",
        follow_us: "Suivez-nous",
        privacy_policy: "Politique de confidentialité",
        terms_of_service: "Conditions d'utilisation",
        contact: "Contact",
        about_us: "À propos de nous",
        contact_us: "Contactez CHENHUA AUTO",
        full_name: "Nom complet",
        company_name: "Nom de l'entreprise",
        phone_number: "Numéro de téléphone",
        whatsapp: "WhatsApp",
        wechat: "WeChat",
        toggle_theme: "Changer le thème"
    },

    ar: {
        // Header & Navigation
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        contact: "اتصل بنا",

        // Privacy Intro
        privac_title: "سياسة الخصوصية",
        privacy_text: "توضح سياسة الخصوصية هذه كيف تقوم CHENHUA INTERNATIONAL بجمع معلوماتك واستخدامها وحمايتها.",

        // Information We Collect
        info_title: "المعلومات التي نجمعها",
        info_intro: "قد تجمع CHENHUA INTERNATIONAL الأنواع التالية من المعلومات:",
        info_personal: "البيانات الشخصية: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، وبيانات الاتصال الأخرى.",
        info_technical: "البيانات التقنية: عنوان IP، نوع المتصفح، نظام التشغيل، معلومات الجهاز وأوقات الوصول.",
        info_behavioral: "البيانات السلوكية: الصفحات التي تمت زيارتها، الروابط التي تم النقر عليها، مدة التصفح، وتفضيلات المستخدم.",

        // How We Use Your Information
        usage_title: "كيفية استخدام معلوماتك",
        usage_intro: "تستخدم CHENHUA INTERNATIONAL المعلومات المجمعة للأغراض التالية:",
        usage_inquiries: "لمعالجة الاستفسارات: نستخدم معلوماتك الشخصية للرد على رسائلك، طلبات المنتجات، أو احتياجات دعم العملاء.",
        usage_experience: "لتحسين تجربة المستخدم: تساعدنا البيانات التقنية والسلوكية على تحسين موقعنا وتخصيص خدماتنا لتناسب تفضيلات المستخدمين.",
        usage_marketing: "لأغراض التسويق (إذا كان ذلك مناسبًا): بموافقتك، قد نرسل لك تحديثات، عروض أو محتوى ترويجي.",
        usage_legal: "للامتثال للالتزامات القانونية: قد نستخدم معلوماتك للوفاء بالمتطلبات التنظيمية أو الضريبية أو القانونية.",

        // Sharing Your Information
        sharing_title: "مشاركة معلوماتك",
        sharing_intro: "تقدر CHENHUA INTERNATIONAL خصوصيتك وشفافيتك. نريدك أن تفهم كيف يتم مشاركة معلوماتك:",
        sharing_nosell: "عدم بيع البيانات: لا نقوم ببيع أو تداول أو تأجير بياناتك الشخصية لأطراف ثالثة.",
        sharing_services: "الخدمات التابعة لجهات خارجية: قد نشارك البيانات مع شركاء موثوقين يساعدوننا في تشغيل الموقع والخدمات، مثل:",
        sharing_google: "Google Analytics – لتحليل حركة الموقع وأنماط الاستخدام",
        sharing_payment: "معالجات الدفع – لمعالجة المعاملات بأمان",
        sharing_email: "مزودو خدمات البريد الإلكتروني – لإرسال الرسائل التي وافقت عليها",

        // Data Security
        security_title: "أمن البيانات",
        security_intro: "تلتزم CHENHUA INTERNATIONAL بحماية معلوماتك وقد نفذت تدابير أمان قوية لحمايتها:",
        security_ssl: "تشفير SSL: جميع البيانات المنقولة بين متصفحك وخوادمنا مشفرة باستخدام تقنية SSL القياسية للصناعة.",
        security_firewall: "الجدران النارية والتحكم في الوصول: نستخدم جدران نارية متقدمة وبروتوكولات وصول محدودة للحفاظ على أمان بياناتك.",
        security_storage: "التخزين الآمن: يتم تخزين بياناتك الشخصية في بيئات آمنة ويصل إليها فقط الأشخاص المصرح لهم.",
        security_breach: "منع الاختراق: يتم إجراء مراجعات أمنية منتظمة وتحديثات برامج ومراقبة لمنع الوصول غير المصرح به أو اختراق البيانات.",

        // Your Rights
        rights_title: "حقوقك",
        rights_intro: "بصفتك مستخدمًا لخدمات CHENHUA INTERNATIONAL، لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:",
        rights_access: "حق الوصول: يمكنك طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك في أي وقت.",
        rights_correct: "حق التصحيح: إذا كنت تعتقد أن أي معلومات لدينا غير دقيقة أو غير مكتملة، لديك الحق في طلب التصحيح.",
        rights_delete: "حق الحذف: يمكنك طلب حذف بياناتك الشخصية من أنظمتنا، مع مراعاة الالتزامات القانونية والتشغيلية.",
        rights_contact: "لإجراء طلب متعلق ببياناتك، يرجى الاتصال بنا على",
        rights_contact_email: "sales@chenhuaauto.com",

        // Cookies
        cookies_title: "ملفات تعريف الارتباط (Cookies)",
        cookies_intro1: "قد يستخدم موقعنا ملفات تعريف الارتباط لتعزيز تجربة التصفح وتحليل حركة المرور. ملفات تعريف الارتباط هي ملفات بيانات صغيرة تُخزن على جهازك لمساعدتنا في فهم كيفية استخدامك لموقعنا.",
        cookies_intro2: "لديك خيار تعطيل ملفات تعريف الارتباط من إعدادات المتصفح. ومع ذلك، يرجى ملاحظة أن بعض ميزات الموقع قد لا تعمل بشكل صحيح بدون تمكين ملفات تعريف الارتباط.",
        cookies_intro3: "بالاستمرار في استخدام موقعنا، فإنك توافق على استخدامنا لملفات تعريف الارتباط وفقًا لسياسة الخصوصية هذه.",

        // Policy Updates
        updates_title: "تحديثات السياسة",
        updates_intro: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو المتطلبات القانونية. سيتم نشر أي تغييرات على هذه الصفحة وستطبق السياسة المعدلة اعتبارًا من تاريخ النشر.",

        // Contact Information
        contact_title: "معلومات الاتصال",
        contact_intro: "إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، فلا تتردد في الاتصال بنا:",
        contact_email: "📧 البريد الإلكتروني: جاري إنشاء الرابط...",
        contact_phone: "📞 الهاتف: +86 18054365167",
        page: "قم بزيارة صفحة الاتصال بنا",

        // Footer
        quick_links: "روابط سريعة",
        follow_us: "تابعنا",
        privacy_policy: "سياسة الخصوصية",
        terms_of_service: "شروط الخدمة",
        contact: "اتصل بنا",
        about_us: "من نحن",
        contact_us: "اتصل بـ CHENHUA AUTO",
        full_name: "الاسم الكامل",
        company_name: "اسم الشركة",
        phone_number: "رقم الهاتف",
        whatsapp: "واتساب",
        wechat: "WeChat",
        toggle_theme: "تبديل الوضع"
    },

    zh: {
        // Header & Navigation
        home: "首页",
        products: "产品",
        about: "关于我们",
        contact: "联系",

        // Privacy Intro
        privac_title: "隐私政策",
        privacy_text: "本隐私政策说明CHENHUA INTERNATIONAL如何收集、使用和保护您的信息。",

        // Information We Collect
        info_title: "我们收集的信息",
        info_intro: "CHENHUA INTERNATIONAL可能会收集以下类型的信息：",
        info_personal: "个人数据：姓名、电子邮箱、电话号码及其他联系方式。",
        info_technical: "技术数据：IP地址、浏览器类型、操作系统、设备信息及访问时间。",
        info_behavioral: "行为数据：访问页面、点击链接、网站停留时间及用户偏好。",

        // How We Use Your Information
        usage_title: "我们如何使用您的信息",
        usage_intro: "CHENHUA INTERNATIONAL收集的信息用于以下目的：",
        usage_inquiries: "处理咨询：我们使用您的个人信息来回复您的留言、产品请求或客户支持需求。",
        usage_experience: "改善用户体验：技术和行为数据帮助我们优化网站，并根据用户偏好定制服务。",
        usage_marketing: "营销（如适用）：在您同意的情况下，我们可能向您发送更新、优惠或推广内容。",
        usage_legal: "遵守法律义务：我们可能使用您的信息以满足监管、税务或法律要求。",

        // Sharing Your Information
        sharing_title: "信息共享",
        sharing_intro: "CHENHUA INTERNATIONAL重视您的隐私与透明度。我们希望您了解信息如何被共享：",
        sharing_nosell: "不出售数据：我们不会将您的个人数据出售、交易或出租给第三方。",
        sharing_services: "第三方服务：我们可能会与可信合作伙伴共享数据，以协助运营网站和服务，例如：",
        sharing_google: "Google Analytics – 分析网站流量和使用模式",
        sharing_payment: "支付处理商 – 安全处理交易",
        sharing_email: "电子邮件服务提供商 – 发送您选择接收的通信内容",

        // Data Security
        security_title: "数据安全",
        security_intro: "CHENHUA INTERNATIONAL致力于保护您的信息，并实施了强有力的安全措施：",
        security_ssl: "SSL加密：您浏览器与我们服务器之间传输的所有数据均采用行业标准SSL加密。",
        security_firewall: "防火墙和访问控制：我们使用高级防火墙和限制访问协议来保障数据安全。",
        security_storage: "安全存储：您的个人数据存储在安全环境中，仅授权人员可访问。",
        security_breach: "防止数据泄露：定期进行安全审计、软件更新和监控，以防止未经授权的访问或数据泄露。",

        // Your Rights
        rights_title: "您的权利",
        rights_intro: "作为CHENHUA INTERNATIONAL服务的用户，您对个人数据拥有以下权利：",
        rights_access: "访问权：您可以随时请求获取我们持有的您的个人信息副本。",
        rights_correct: "更正权：如果您认为我们持有的信息不准确或不完整，您有权请求更正。",
        rights_delete: "删除权：您可以请求删除我们系统中的个人数据，但需遵守法律及运营义务。",
        rights_contact: "如需提交数据请求，请联系我们：",
        rights_contact_email: "sales@chenhuaauto.com",

        // Cookies
        cookies_title: "Cookies（网站追踪信息）",
        cookies_intro1: "我们的网站可能使用Cookies来提升浏览体验和分析网站流量。Cookies是存储在您设备上的小型数据文件，帮助我们了解您如何使用网站。",
        cookies_intro2: "您可以通过浏览器设置禁用Cookies。但请注意，部分网站功能在未启用Cookies的情况下可能无法正常使用。",
        cookies_intro3: "继续使用我们的网站即表示您同意我们按照本隐私政策使用Cookies。",

        // Policy Updates
        updates_title: "政策更新",
        updates_intro: "我们可能会不定期更新本隐私政策，以反映实践或法律要求的变化。任何更新都会在本页面公布，修订后的政策自发布之日起生效。",

        // Contact Information
        contact_title: "联系信息",
        contact_intro: "如果您对本隐私政策有任何疑问或顾虑，请随时联系我们：",
        contact_email: "📧 邮箱：生成链接中...",
        contact_phone: "📞 电话：+86 18054365167",
        page: "访问我们的联系页面",

        // Footer
        quick_links: "快速链接",
        follow_us: "关注我们",
        privacy_policy: "隐私政策",
        terms_of_service: "服务条款",
        contact: "联系",
        about_us: "关于我们",
        contact_us: "联系CHENHUA AUTO",
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
