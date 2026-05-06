// Navbar scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const updateActiveLink = () => {
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll progress indicator
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.pageYOffset / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

// Project cards animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});

// Observe skill cards
document.querySelectorAll('.skill-card').forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s";
  observer.observe(card);
});

// Observe contact links
document.querySelectorAll('.contact-link.tilt').forEach(link => {
  link.style.opacity = "0";
  link.style.transform = "translateY(20px)";
  link.style.transition = "opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s";
  observer.observe(link);
});

// Tilt effect for contact cards
document.querySelectorAll('.contact-link.tilt').forEach(link => {
  link.addEventListener('mouseenter', function(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  link.addEventListener('mousemove', function(e) {
    const card = this;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// Add typing effect to hero text
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
const typeWriter = () => {
  if (i < originalText.length) {
    heroTitle.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Start typing effect after page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});

// Skill list item hover effect
document.querySelectorAll('.skill-list li').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.color = 'var(--primary-color)';
    this.style.transform = 'translateX(5px)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.color = '';
    this.style.transform = '';
  });
});

// Project tag hover effect
document.querySelectorAll('.project-tags span').forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  tag.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

// Nav link hover effect enhancement
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  link.addEventListener('mouseleave', function() {
    if (!this.classList.contains('active')) {
      this.style.transform = '';
    }
  });
});

// Button hover effect
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.05)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(-5px)';
  });
});
