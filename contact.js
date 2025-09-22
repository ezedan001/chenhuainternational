
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


















    const translations = {
      en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        contact_banner_title: "Get in Touch",
        contact_intro_heading: "We’d love to hear from you!",
        contact_intro_text: "Our team is here to assist you with anything you need. Just reach out — we're happy to help!",

        contact_form_heading: "📩 Contact Us",
        form_full_name: "Full Name",
        form_email: "Email Address",
        form_subject: "Subject",
        form_message: "Your Message",
        form_submit_button: "Send Message",

        contact_info_heading: "📞 Contact Information",
        contact_phone: "Phone",
        contact_whatsapp: "WhatsApp",
        contact_email: "Email",
        contact_address: "Address",
        contact_address_full: "No. 3 Shengcheng Road, Development Zone, Sishui County, Jining City, Shandong Province, China",

        social_facebook: "Facebook",
        social_whatsapp: "WhatsApp",
        social_linkedin: "LinkedIn",
        social_youtube: "YouTube",

        map_section_title: "Our Location",

        faq: "Frequently Asked Questions",
        return_policy_q: "What is your return policy?",
        return_policy_a: "You can return any item within 30 days of delivery. Please ensure it is unused and in original packaging.",
        shipping_q: "How long does shipping take?",
        shipping_a: "Domestic shipping takes 3–5 business days. International orders may take up to 10–15 business days.",
        customization_q: "Do you offer customization options?",
        customization_a: "Yes, we offer customization for bulk orders. Please contact our team with your specific requirements.",
        tracking_q: "How can I track my order?",
        tracking_a: "Once your order is shipped, we will send you a tracking number via email or SMS.",
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
        contact_banner_title: "Contactez-nous",
        contact_intro_heading: "Nous serions ravis d’avoir de vos nouvelles !",
        contact_intro_text: "Notre équipe est là pour vous aider avec tout ce dont vous avez besoin. N'hésitez pas à nous contacter — nous sommes heureux de vous aider !",

        contact_form_heading: "📩 Contactez-nous",
        form_full_name: "Nom complet",
        form_email: "Adresse e-mail",
        form_subject: "Objet",
        form_message: "Votre message",
        form_submit_button: "Envoyer le message",

        contact_info_heading: "📞 Informations de contact",
        contact_phone: "Téléphone",
        contact_whatsapp: "WhatsApp",
        contact_email: "E-mail",
        contact_address: "Adresse",
        contact_address_full: "N° 3, route Shengcheng, zone de développement, comté de Sishui, ville de Jining, province du Shandong, Chine",

        social_facebook: "Facebook",
        social_whatsapp: "WhatsApp",
        social_linkedin: "LinkedIn",
        social_youtube: "YouTube",

        map_section_title: "Notre emplacement",

        faq: "Questions fréquemment posées",
        return_policy_q: "Quelle est votre politique de retour ?",
        return_policy_a: "Vous pouvez retourner tout article dans un délai de 30 jours après la livraison. Veuillez vous assurer qu’il est inutilisé et dans son emballage d'origine.",
        shipping_q: "Combien de temps prend la livraison ?",
        shipping_a: "La livraison nationale prend 3 à 5 jours ouvrables. Les commandes internationales peuvent prendre jusqu'à 10 à 15 jours ouvrables.",
        customization_q: "Proposez-vous des options de personnalisation ?",
        customization_a: "Oui, nous proposons des personnalisations pour les commandes en gros. Veuillez contacter notre équipe avec vos besoins spécifiques.",
        tracking_q: "Comment puis-je suivre ma commande ?",
        tracking_a: "Une fois votre commande expédiée, nous vous enverrons un numéro de suivi par e-mail ou SMS.",

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
        toggle_theme: "Changer de thème"
      },

      ar: {
        home: "الصفحة الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        contact: "اتصل بنا",
        contact_banner_title: "تواصل معنا",
        contact_intro_heading: "يسعدنا سماعك!",
        contact_intro_text: "فريقنا هنا لمساعدتك في كل ما تحتاجه. لا تتردد في التواصل معنا — نحن سعداء بخدمتك!",

        contact_form_heading: "📩 اتصل بنا",
        form_full_name: "الاسم الكامل",
        form_email: "عنوان البريد الإلكتروني",
        form_subject: "الموضوع",
        form_message: "رسالتك",
        form_submit_button: "إرسال الرسالة",

        contact_info_heading: "📞 معلومات الاتصال",
        contact_phone: "الهاتف",
        contact_whatsapp: "واتساب",
        contact_email: "البريد الإلكتروني",
        contact_address: "العنوان",
        contact_address_full: "رقم 3 طريق شينغتشنغ، منطقة التطوير، مقاطعة سيشوي، مدينة جينينغ، مقاطعة شاندونغ، الصين",

        social_facebook: "فيسبوك",
        social_whatsapp: "واتساب",
        social_linkedin: "لينكدإن",
        social_youtube: "يوتيوب",

        map_section_title: "موقعنا",

        faq: "الأسئلة الشائعة",
        return_policy_q: "ما هي سياسة الإرجاع الخاصة بكم؟",
        return_policy_a: "يمكنك إرجاع أي منتج خلال 30 يومًا من استلامه، بشرط أن يكون غير مستخدم وفي عبوته الأصلية.",
        shipping_q: "كم تستغرق مدة الشحن؟",
        shipping_a: "يستغرق الشحن المحلي من 3 إلى 5 أيام عمل. وقد تستغرق الطلبات الدولية من 10 إلى 15 يوم عمل.",
        customization_q: "هل تقدمون خيارات التخصيص؟",
        customization_a: "نعم، نقدم خيارات تخصيص للطلبات الكبيرة. يرجى التواصل مع فريقنا لتفاصيل أكثر.",
        tracking_q: "كيف يمكنني تتبع طلبي؟",
        tracking_a: "بمجرد شحن طلبك، سنرسل لك رقم التتبع عبر البريد الإلكتروني أو رسالة نصية.",

        quick_links: "روابط سريعة",
        about_us: "معلومات عنا",
        contact: "اتصل بنا",
        follow_us: "تابعنا",
        privacy_policy: "سياسة الخصوصية",
        terms_of_service: "شروط الخدمة",
        contact_us: "اتصل بـ CHENHUA AUTO",
        full_name: "الاسم الكامل",
        company_name: "اسم الشركة",
        phone_number: "رقم الهاتف",
        whatsapp: "واتساب",
        wechat: "وي تشات",
        toggle_theme: "تغيير المظهر"
      },

      zh: {
        home: "首页",
        products: "产品",
        about: "关于我们",
        contact: "联系我们",
        contact_banner_title: "联系我们",
        contact_intro_heading: "我们期待您的来信！",
        contact_intro_text: "我们的团队随时准备为您提供帮助。只需联系我们——我们乐意为您服务！",

        contact_form_heading: "📩 联系我们",
        form_full_name: "姓名",
        form_email: "电子邮件地址",
        form_subject: "主题",
        form_message: "您的留言",
        form_submit_button: "发送信息",

        contact_info_heading: "📞 联系信息",
        contact_phone: "电话",
        contact_whatsapp: "WhatsApp",
        contact_email: "电子邮件",
        contact_address: "地址",
        contact_address_full: "中国山东省济宁市泗水县开发区盛城路3号",

        social_facebook: "脸书",
        social_whatsapp: "WhatsApp",
        social_linkedin: "领英",
        social_youtube: "优酷（YouTube）",

        map_section_title: "我们的位置",

        faq: "常见问题",
        return_policy_q: "你们的退货政策是什么？",
        return_policy_a: "在交付后的30天内，您可以退还任何商品。请确保产品未使用并保持原包装。",
        shipping_q: "运输时间需要多久？",
        shipping_a: "国内运输大约需要3到5个工作日。国际订单可能需要10到15个工作日。",
        customization_q: "你们提供定制服务吗？",
        customization_a: "我们为批量订单提供定制服务。请联系我们的团队说明您的具体需求。",
        tracking_q: "我如何追踪我的订单？",
        tracking_a: "一旦您的订单发出，我们将通过电子邮件或短信向您发送追踪号码。",

        quick_links: "快速链接",
        about_us: "关于我们",
        contact: "联系我们",
        follow_us: "关注我们",
        privacy_policy: "隐私政策",
        terms_of_service: "服务条款",
        contact_us: "联系 CHENHUA AUTO",
        full_name: "姓名",
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

