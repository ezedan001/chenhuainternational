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








// hero section

document.querySelector('.scroll-down').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});






document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideItems = document.querySelectorAll(".product-card");
  const prevBtn = document.querySelector(".arrow.prev");
  const nextBtn = document.querySelector(".arrow.next");
  const dotsContainer = document.querySelector(".dots");

  let currentIndex = 0;
  let itemsPerView = getItemsPerView();
  let totalSlides = Math.ceil(slideItems.length / itemsPerView);

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
    document.querySelectorAll(".dots button").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  function getItemsPerView() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  window.addEventListener("resize", () => {
    itemsPerView = getItemsPerView();
    totalSlides = Math.ceil(slideItems.length / itemsPerView);
    if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;
    updateSlidePosition();
  });

  // Autoplay
  setInterval(nextSlide, 4000);
});








/* 🔹 Workshop Videos Section */


// Select elements
const videoCards = document.querySelectorAll('.video-card video');
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close-btn');

// Open modal
videoCards.forEach(video => {
  video.addEventListener('click', () => {
    modal.classList.add('active');
    modalVideo.src = video.src;
    modalVideo.play();
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modalVideo.pause();
  modalVideo.src = "";
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    modalVideo.pause();
    modalVideo.src = "";
  }
});


/* 🔹 Workshop Videos Section end */





//....footer..../
// Automatically update current year
document.getElementById("year").textContent = new Date().getFullYear();

// Automatically update current year///








/* Workshop Section */

const track = document.querySelector('.slider-track');
const slides = Array.from(track.children);

// Duplicate all slides for infinite effect
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

/* Workshop Section end */










//....Our Workshop...//
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("caption").innerText = img.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
//....Our Workshop end...//









/*....... Our Honors & Qualifications  .....*/


// Select elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBt = document.querySelector(".lightbox .close");

// All honor images
const honorImages = document.querySelectorAll(".honor-card img");

// When an image is clicked → open popup
honorImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Close popup when clicking "X"
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close popup when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});



/*....... SOur Honors & Qualifications  .....*/







// <!-- /*....... Section testimonials  .....*/ -->


// Fade-in on scroll
const testimonials = document.querySelectorAll('.testimonial-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

testimonials.forEach(testimonial => {
  observer.observe(testimonial);
});


// <!-- /*....... Section testimonials  .....*/ -->//













// // Move to slide
// function moveToSlide(index) {
//   track.style.transform = `translateX(-${slideWidth * index}px)`;
//   currentIndex = index;
//   checkButtons();
// }

// // Check if buttons should be disabled
// function checkButtons() {
//   if (currentIndex === 0) {
//     prevButton.disabled = true;
//     prevButton.style.opacity = 0.4;
//   } else {
//     prevButton.disabled = false;
//     prevButton.style.opacity = 0.9;
//   }

//   if (currentIndex >= slides.length - visibleSlides()) {
//     nextButton.disabled = true;
//     nextButton.style.opacity = 0.4;
//   } else {
//     nextButton.disabled = false;
//     nextButton.style.opacity = 0.9;
//   }
// }

// // Calculate visible slides based on viewport width
// function visibleSlides() {
//   const width = window.innerWidth;
//   if (width <= 480) return 1;
//   if (width <= 768) return 2;
//   return 3;
// }

// // Button Event Listeners
// prevButton.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     moveToSlide(currentIndex - 1);
//   }
// });

// nextButton.addEventListener('click', () => {
//   if (currentIndex < slides.length - visibleSlides()) {
//     moveToSlide(currentIndex + 1);
//   }
// });

// // On window resize, reset position
// window.addEventListener('resize', () => {
//   moveToSlide(0);
// });

// // Initialize
// moveToSlide(0);

// const dotsContainer = document.querySelector('.carousel-dots');

// // Create dots dynamically
// slides.forEach((_, index) => {
//   const dot = document.createElement('button');
//   if (index === 0) dot.classList.add('active');
//   dotsContainer.appendChild(dot);

//   dot.addEventListener('click', () => {
//     moveToSlide(index);
//   });
// });

// function updateDots(index) {
//   const dots = dotsContainer.querySelectorAll('button');
//   dots.forEach(dot => dot.classList.remove('active'));
//   if (dots[index]) dots[index].classList.add('active');
// }

// // Update dots on slide move
// function moveToSlide(index) {
//   track.style.transform = `translateX(-${slideWidth * index}px)`;
//   currentIndex = index;
//   checkButtons();
//   updateDots(index);
// }

// let startX = 0;
// let isDragging = false;

// track.addEventListener('touchstart', e => {
//   startX = e.touches[0].clientX;
//   isDragging = true;
// });

// track.addEventListener('touchmove', e => {
//   if (!isDragging) return;
//   let currentX = e.touches[0].clientX;
//   let diff = startX - currentX;

//   if (diff > 50) {  // swipe left
//     if (currentIndex < slides.length - visibleSlides()) {
//       moveToSlide(currentIndex + 1);
//       isDragging = false;
//     }
//   } else if (diff < -50) {  // swipe right
//     if (currentIndex > 0) {
//       moveToSlide(currentIndex - 1);
//       isDragging = false;
//     }
//   }
// });

// track.addEventListener('touchend', () => {
//   isDragging = false;
// });





// <!-- your FAQ HTML content here -->










const translations = {
  en: {
    // Header & Navigation
    home: "Home",
    products: "Products",
    about: "About",
    about_us: "About Us",
    contact: "Contact",

    // Hero Section
    main_intro: "Welcome to CHENHUA INTERNATIONAL",
    sub_intro: "Your Trusted Partner in Agricultural Rims & Wheels",
    explore_products: "Explore Products",
    scroll_down: "↓ Scroll Down",

    // About Section
    about_title: "About CHENHUA INTERNATIONAL",
    tagline: "Powering Agriculture Since 2018",
    about_text: "Established in 2018, CHENHUA INTERNATIONAL has become a trusted global supplier of Agricultural Machinery Wheels and Agricultural Machinery Tires. We are dedicated to innovation, durability, and providing high-quality solutions tailored for modern farming and transport.",
    business_scope_title: "Business Scope:",
    business_scope_wheels: "Agricultural Machinery Wheels",
    business_scope_tires: "Agricultural Machinery Tires",
    learn_more: "Learn More",

    // Workshop Section
    workshop_title: "Inside Our Factory Workshop",
    workshop_video_section: "Unique Aspect of the Factory",
    workshop_video_subtitle: "See how our Agricultural Wheels & Tires are made",
    video1_title: "Hydrochloric Acid Etching",
    video2_title: "Cathodic Electrophoretic Coating",
    video3_title: "Spot Welding",
    video4_title: "Quality Inspection",

    // Honors & Qualifications
    honors_title: "Our Honors & Qualifications",
    honors_subtitle: "Trusted worldwide for quality and excellence",

    // Why Choose Us
    why_choose_us: "Why Choose Us",
    durability: "Durability",
    wide_range: "Wide Range",
    fast_delivery: "Fast Delivery",
    customization: "Customization",

    // Testimonials
    testimonials: "What Our Partners Say",
    testimonial1_name: "James Carter",
    testimonial1_role: "CEO, AgroMachines Global",
    testimonial1_text: "CHENHUA INTERNATIONAL delivers consistently. Their rims are not just strong but built for long-term performance. We see them as a reliable global partner.",
    testimonial2_name: "Maria Gonzales",
    testimonial2_role: "Procurement Manager, FarmTech USA",
    testimonial2_text: "From negotiation to delivery, everything was seamless. The rims fit perfectly with our machinery, and after-sales support was exceptional.",
    testimonial3_name: "Chen Wei",
    testimonial3_role: "Operations Director, AgriSolutions Asia",
    testimonial3_text: "We’ve been importing from CHENHUA for years. Their consistency and product quality help us scale with confidence.",
    testimonial4_name: "Olivia Smith",
    testimonial4_role: "Head of Logistics, EuroAgri Group",
    testimonial4_text: "Their team is professional, responsive, and focused on results. CHENHUA is a brand we can trust for global agricultural supply.",

    // FAQ Section
    faq: "Frequently Asked Questions",
    return_policy_q: "What is your return policy?",
    return_policy_a: "You can return any item within 30 days of delivery. Please ensure it is unused and in original packaging.",
    shipping_q: "How long does shipping take?",
    shipping_a: "Domestic shipping takes 3–5 business days. International orders may take up to 10–15 business days.",
    customization_q: "Do you offer customization options?",
    customization_a: "Yes, we offer customization for bulk orders. Please contact our team with your specific requirements.",
    tracking_q: "How can I track my order?",
    tracking_a: "Once your order is shipped, we will send you a tracking number via email or SMS.",

    // Footer
    quick_links: "Quick Links",
    follow_us: "Follow Us",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    contact_us: "Contact CHENHUA AUTO",
    full_name: "Full Name",
    company_name: "Company Name",
    phone_number: "Phone Number",
    whatsapp: "WhatsApp",
    wechat: "WeChat",
    contact_email: "Email",
    toggle_theme: "Toggle Theme"
  },
  fr: {
    // Header & Navigation
    home: "Accueil",
    products: "Produits",
    about: "À propos",
    about_us: "À propos de nous",
    contact: "Contact",

    // Hero Section
    main_intro: "Bienvenue chez CHENHUA INTERNATIONAL",
    sub_intro: "Votre partenaire de confiance pour les jantes et roues agricoles",
    explore_products: "Explorer les produits",
    scroll_down: "↓ Faites défiler vers le bas",

    // About Section
    about_title: "À propos de CHENHUA INTERNATIONAL",
    tagline: "Au service de l'agriculture depuis 2018",
    about_text: "Créée en 2018, CHENHUA INTERNATIONAL est devenue un fournisseur mondial de confiance de roues et pneus pour machines agricoles. Nous nous engageons pour l'innovation, la durabilité et la fourniture de solutions de haute qualité adaptées à l'agriculture moderne et au transport.",
    business_scope_title: "Domaine d'activité :",
    business_scope_wheels: "Roues pour machines agricoles",
    business_scope_tires: "Pneus pour machines agricoles",
    learn_more: "En savoir plus",

    // Workshop Section
    workshop_title: "À l'intérieur de notre atelier",
    workshop_video_section: "Aspect unique de l'usine",
    workshop_video_subtitle: "Découvrez comment nos roues et pneus agricoles sont fabriqués",
    video1_title: "Gravure à l'acide chlorhydrique",
    video2_title: "Revêtement électrophorétique cathodique",
    video3_title: "Soudage par points",
    video4_title: "Contrôle qualité",

    // Honors & Qualifications
    honors_title: "Nos distinctions et certifications",
    honors_subtitle: "Reconnu mondialement pour la qualité et l'excellence",

    // Why Choose Us
    why_choose_us: "Pourquoi nous choisir",
    durability: "Durabilité",
    wide_range: "Large choix",
    fast_delivery: "Livraison rapide",
    customization: "Personnalisation",

    // Testimonials
    testimonials: "Ce que disent nos partenaires",
    testimonial1_name: "James Carter",
    testimonial1_role: "PDG, AgroMachines Global",
    testimonial1_text: "CHENHUA INTERNATIONAL fournit de manière constante. Leurs jantes ne sont pas seulement solides, elles sont conçues pour durer. Nous les considérons comme un partenaire mondial fiable.",
    testimonial2_name: "Maria Gonzales",
    testimonial2_role: "Responsable des achats, FarmTech USA",
    testimonial2_text: "De la négociation à la livraison, tout s'est déroulé sans problème. Les jantes s'adaptent parfaitement à nos machines et le service après-vente était exceptionnel.",
    testimonial3_name: "Chen Wei",
    testimonial3_role: "Directeur des opérations, AgriSolutions Asia",
    testimonial3_text: "Nous importons de CHENHUA depuis des années. Leur constance et la qualité des produits nous permettent de croître en toute confiance.",
    testimonial4_name: "Olivia Smith",
    testimonial4_role: "Responsable logistique, EuroAgri Group",
    testimonial4_text: "Leur équipe est professionnelle, réactive et orientée résultats. CHENHUA est une marque de confiance pour l'approvisionnement agricole mondial.",

    // FAQ Section
    faq: "Questions fréquemment posées",
    return_policy_q: "Quelle est votre politique de retour ?",
    return_policy_a: "Vous pouvez retourner tout article dans les 30 jours suivant la livraison. Veuillez vous assurer qu'il est inutilisé et dans son emballage d'origine.",
    shipping_q: "Combien de temps prend la livraison ?",
    shipping_a: "La livraison nationale prend 3 à 5 jours ouvrables. Les commandes internationales peuvent prendre jusqu'à 10 à 15 jours ouvrables.",
    customization_q: "Proposez-vous des options de personnalisation ?",
    customization_a: "Oui, nous proposons la personnalisation pour les commandes en gros. Veuillez contacter notre équipe avec vos exigences spécifiques.",
    tracking_q: "Comment puis-je suivre ma commande ?",
    tracking_a: "Une fois votre commande expédiée, nous vous enverrons un numéro de suivi par e-mail ou SMS.",

    // Footer
    quick_links: "Liens rapides",
    follow_us: "Suivez-nous",
    privacy_policy: "Politique de confidentialité",
    terms_of_service: "Conditions d'utilisation",
    contact_us: "Contacter CHENHUA AUTO",
    full_name: "Nom complet",
    company_name: "Nom de l'entreprise",
    phone_number: "Numéro de téléphone",
    whatsapp: "WhatsApp",
    wechat: "WeChat",
    contact_email: "Email",
    toggle_theme: "Changer le thème"
  },

  ar: {
    // Header & Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "حول",
    about_us: "معلومات عنا",
    contact: "اتصل بنا",

    // Hero Section
    main_intro: "مرحبًا بكم في CHENHUA INTERNATIONAL",
    sub_intro: "شريكك الموثوق في الجنوط والعجلات الزراعية",
    explore_products: "استكشف المنتجات",
    scroll_down: "↓ مرر للأسفل",

    // About Section
    about_title: "حول CHENHUA INTERNATIONAL",
    tagline: "ندعم الزراعة منذ 2018",
    about_text: "تأسست CHENHUA INTERNATIONAL في عام 2018 وأصبحت موردًا عالميًا موثوقًا للعجلات والإطارات الزراعية. نحن ملتزمون بالابتكار والمتانة وتقديم حلول عالية الجودة تتناسب مع الزراعة الحديثة والنقل.",
    business_scope_title: "نطاق الأعمال:",
    business_scope_wheels: "عجلات الماكينات الزراعية",
    business_scope_tires: "إطارات الماكينات الزراعية",
    learn_more: "المزيد من المعلومات",

    // Workshop Section
    workshop_title: "داخل ورشة مصنعنا",
    workshop_video_section: "الجانب الفريد للمصنع",
    workshop_video_subtitle: "شاهد كيف تُصنع عجلات وإطاراتنا الزراعية",
    video1_title: "نقش بحمض الهيدروكلوريك",
    video2_title: "الطلاء الكهربائي الكاثودي",
    video3_title: "اللحام بالنقاط",
    video4_title: "فحص الجودة",

    // Honors & Qualifications
    honors_title: "جوائزنا وشهاداتنا",
    honors_subtitle: "موثوق عالميًا للجودة والتميز",

    // Why Choose Us
    why_choose_us: "لماذا تختارنا",
    durability: "متانة",
    wide_range: "مجموعة واسعة",
    fast_delivery: "توصيل سريع",
    customization: "تخصيص",

    // Testimonials
    testimonials: "ماذا يقول شركاؤنا",
    testimonial1_name: "جيمس كارتر",
    testimonial1_role: "الرئيس التنفيذي، AgroMachines Global",
    testimonial1_text: "تقدم CHENHUA INTERNATIONAL باستمرار. عجلاتهم ليست قوية فحسب، بل مصممة للأداء طويل الأمد. نعتبرهم شريكًا عالميًا موثوقًا.",
    testimonial2_name: "ماريا جونزاليس",
    testimonial2_role: "مدير المشتريات، FarmTech USA",
    testimonial2_text: "من التفاوض إلى التسليم، كل شيء كان سلسًا. العجلات تناسب آلاتنا تمامًا وكان الدعم بعد البيع استثنائيًا.",
    testimonial3_name: "تشن وي",
    testimonial3_role: "مدير العمليات، AgriSolutions Asia",
    testimonial3_text: "نقوم بالاستيراد من CHENHUA منذ سنوات. اتساقهم وجودة منتجاتهم تساعدنا على التوسع بثقة.",
    testimonial4_name: "أوليفيا سميث",
    testimonial4_role: "رئيس قسم اللوجستيات، EuroAgri Group",
    testimonial4_text: "فريقهم محترف واستجابتهم سريعة ويركزون على النتائج. CHENHUA علامة تجارية يمكننا الوثوق بها للإمدادات الزراعية العالمية.",

    // FAQ Section
    faq: "الأسئلة الشائعة",
    return_policy_q: "ما هي سياسة الإرجاع الخاصة بكم؟",
    return_policy_a: "يمكنك إرجاع أي منتج خلال 30 يومًا من التسليم. يرجى التأكد من أنه غير مستخدم وفي التغليف الأصلي.",
    shipping_q: "كم يستغرق وقت الشحن؟",
    shipping_a: "الشحن المحلي يستغرق 3–5 أيام عمل. الطلبات الدولية قد تستغرق 10–15 يوم عمل.",
    customization_q: "هل تقدمون خيارات التخصيص؟",
    customization_a: "نعم، نقدم التخصيص للطلبات الكبيرة. يرجى التواصل مع فريقنا بمتطلباتك المحددة.",
    tracking_q: "كيف يمكنني تتبع طلبي؟",
    tracking_a: "بعد شحن طلبك، سنرسل لك رقم التتبع عبر البريد الإلكتروني أو الرسائل النصية.",

    // Footer
    quick_links: "روابط سريعة",
    follow_us: "تابعنا",
    privacy_policy: "سياسة الخصوصية",
    terms_of_service: "شروط الخدمة",
    contact_us: "اتصل بـ CHENHUA AUTO",
    full_name: "الاسم الكامل",
    company_name: "اسم الشركة",
    phone_number: "رقم الهاتف",
    whatsapp: "واتساب",
    wechat: "وي تشات",
    contact_email: "البريد الإلكتروني",
    toggle_theme: "تغيير النمط"
  },

  zh: {
    // Header & Navigation
    home: "首页",
    products: "产品",
    about: "关于",
    about_us: "关于我们",
    contact: "联系我们",

    // Hero Section
    main_intro: "欢迎来到 CHENHUA INTERNATIONAL",
    sub_intro: "您值得信赖的农业轮圈与轮胎合作伙伴",
    explore_products: "探索产品",
    scroll_down: "↓ 向下滚动",

    // About Section
    about_title: "关于 CHENHUA INTERNATIONAL",
    tagline: "自2018年以来服务农业",
    about_text: "CHENHUA INTERNATIONAL 成立于2018年，已成为全球可信赖的农业机械轮圈与轮胎供应商。我们致力于创新、耐用性，并提供适合现代农业和运输的高品质解决方案。",
    business_scope_title: "业务范围：",
    business_scope_wheels: "农业机械轮圈",
    business_scope_tires: "农业机械轮胎",
    learn_more: "了解更多",

    // Workshop Section
    workshop_title: "走进我们的工厂车间",
    workshop_video_section: "工厂独特亮点",
    workshop_video_subtitle: "了解我们的农业轮圈与轮胎如何制造",
    video1_title: "盐酸蚀刻",
    video2_title: "阴极电泳涂层",
    video3_title: "点焊",
    video4_title: "质量检查",

    // Honors & Qualifications
    honors_title: "我们的荣誉与资质",
    honors_subtitle: "全球公认的质量与卓越",

    // Why Choose Us
    why_choose_us: "为什么选择我们",
    durability: "耐用性",
    wide_range: "广泛选择",
    fast_delivery: "快速交付",
    customization: "定制化",

    // Testimonials
    testimonials: "合作伙伴评价",
    testimonial1_name: "James Carter",
    testimonial1_role: "首席执行官，AgroMachines Global",
    testimonial1_text: "CHENHUA INTERNATIONAL 一贯可靠。他们的轮圈不仅坚固，而且适合长期使用。我们视其为值得信赖的全球合作伙伴。",
    testimonial2_name: "Maria Gonzales",
    testimonial2_role: "采购经理，FarmTech USA",
    testimonial2_text: "从谈判到交付，一切都很顺利。轮圈与我们的设备完全匹配，售后服务也非常出色。",
    testimonial3_name: "Chen Wei",
    testimonial3_role: "运营总监，AgriSolutions Asia",
    testimonial3_text: "我们多年来一直从 CHENHUA 进口。他们的稳定性和产品质量让我们充满信心地扩展业务。",
    testimonial4_name: "Olivia Smith",
    testimonial4_role: "物流主管，EuroAgri Group",
    testimonial4_text: "他们的团队专业、响应迅速且注重结果。CHENHUA 是我们可以信赖的全球农业供应品牌。",

    // FAQ Section
    faq: "常见问题",
    return_policy_q: "你们的退货政策是什么？",
    return_policy_a: "您可以在交货后30天内退回任何商品。请确保商品未使用且包装完整。",
    shipping_q: "运输需要多长时间？",
    shipping_a: "国内运输需3–5个工作日。国际订单可能需要10–15个工作日。",
    customization_q: "你们提供定制服务吗？",
    customization_a: "是的，我们为大宗订单提供定制服务。请联系我们的团队提供您的具体要求。",
    tracking_q: "我如何追踪订单？",
    tracking_a: "订单发货后，我们将通过电子邮件或短信发送追踪号码。",

    // Footer
    quick_links: "快速链接",
    follow_us: "关注我们",
    privacy_policy: "隐私政策",
    terms_of_service: "服务条款",
    contact_us: "联系 CHENHUA AUTO",
    full_name: "全名",
    company_name: "公司名称",
    phone_number: "电话号码",
    whatsapp: "WhatsApp",
    wechat: "微信",
    contact_email: "邮箱",
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