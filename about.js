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













document.querySelectorAll('a.scroll-down').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const direction = el.getAttribute('data-animate');
        el.classList.add('visible');
        if (direction === 'left') el.classList.add('animate-left');
        if (direction === 'right') el.classList.add('animate-right');
        observer.unobserve(el); // animate once
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
});





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





// Automatically update current year
document.getElementById("year").textContent = new Date().getFullYear();
// Automatically update current year///










/* ---------- Honor & Qualification Section end ---------- */


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




/* ---------- Honor & Qualification Section end ---------- */












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













const slider = document.getElementById("certSlider");
const pagination = document.getElementById("certPagination");
const itemsPerPage = 4;
let currentPage = 0;
let autoplayInterval;

const certItems = Array.from(slider.children);
const totalPages = Math.ceil(certItems.length / itemsPerPage);

function renderPage(page) {
  slider.innerHTML = "";
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  certItems.slice(start, end).forEach(item => {
    slider.appendChild(item);
  });

  // Update pagination dots
  const dots = pagination.querySelectorAll('.cert-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === page);
  });
}

function createDots() {
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    dot.classList.add("cert-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentPage = i;
      renderPage(currentPage);
      restartAutoplay();
    });
    pagination.appendChild(dot);
  }
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentPage = (currentPage + 1) % totalPages;
    renderPage(currentPage);
  }, 4000); // 4 seconds delay
}

function restartAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// Initialize
createDots();
renderPage(currentPage);
startAutoplay();






// const track = document.querySelector('.carousel-track');

// track.addEventListener('mouseenter', () => {
//   track.style.animationPlayState = 'paused';
// });

// track.addEventListener('mouseleave', () => {
//   track.style.animationPlayState = 'running';
// });





