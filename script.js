  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

  menuToggle.addEventListener('click', () => {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
  });

  overlay.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto';
  });

  // Close mobile nav when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
          mobileNav.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = 'auto';
      });
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');
          
          // Filter projects
          projectCards.forEach(card => {
              if (filterValue === 'all') {
                  card.style.display = 'block';
              } else {
                  const categories = card.getAttribute('data-category').split(' ');
                  if (categories.includes(filterValue)) {
                      card.style.display = 'block';
                  } else {
                      card.style.display = 'none';
                  }
              }
          });
      });
  });

  // Animate skills on scroll
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkills() {
      skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
              bar.style.width = width;
          }, 100);
      });
  }

  // Intersection Observer for animations
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              if (entry.target.classList.contains('skill-category')) {
                  animateSkills();
              }
          }
      });
  }, observerOptions);

  document.querySelectorAll('.animate').forEach(element => {
      observer.observe(element);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Subtle Particle.js configuration
  particlesJS('particles-js', {
      "particles": {
          "number": {
              "value": 30,  // Fewer particles
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#00ff88"  // Matches your theme
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              }
          },
          "opacity": {
              "value": 0.3,  // More transparent
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 200,  // Lines appear further apart
              "color": "#00ff88",
              "opacity": 0.2,  // More subtle lines
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 1.5,  // Slower movement
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": false,  // Disable click interaction
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 200,
                  "line_linked": {
                      "opacity": 0.5
                  }
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              }
          }
      },
      "retina_detect": true
  });
  // Add this to your existing JavaScript
document.querySelectorAll('.scroll-down-link').forEach(link => {
link.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
});
});