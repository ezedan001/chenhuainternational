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








