// ========== Newsletter Form Submission ==========
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    if(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (!/\S+@\S+\.\S+/.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
        alert(`Thank you for subscribing, ${email}!`);
        form.reset();
      });
    }
  });
  
  // ========== Smooth Scroll for Navigation ==========
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ========== Active State for Navigation ==========
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
  
  // ========== Category Filter (Home Page) ==========
  document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function() {
      document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      const category = this.textContent.trim().toLowerCase();
      document.querySelectorAll('.recipe-card').forEach(card => {
        if (!card.dataset.category || category === 'all categories' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // ========== Checkbox Strike-through for Ingredients (Recipe Page) ==========
  document.querySelectorAll('.ingredients input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const label = this.nextElementSibling;
      if (this.checked) {
        label.style.textDecoration = 'line-through';
        label.style.color = '#bbb';
      } else {
        label.style.textDecoration = '';
        label.style.color = '';
      }
    });
  });
  
  // ========== Play Button Overlay (Recipe Video) ==========
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', function() {
      alert('This would open the recipe video modal or play the video!');
      // Implement modal or video player here if needed
    });
  }
  
  // ========== Blog Search (Blog Page) ==========
  const blogSearch = document.querySelector('.blog-search input[type="text"]');
  if (blogSearch) {
    blogSearch.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      document.querySelectorAll('.blog-post').forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const desc = post.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || desc.includes(query)) {
          post.style.display = '';
        } else {
          post.style.display = 'none';
        }
      });
    });
  }
  
  // ========== Blog Pagination Highlight ==========
  document.querySelectorAll('.blog-pagination li').forEach(li => {
    li.addEventListener('click', function() {
      document.querySelectorAll('.blog-pagination li').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      // Implement loading of corresponding page if needed
    });
  });
  
  // ========== Scroll-to-Top Button ==========
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
    scrollBtn.onclick = function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  }
  // Contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been sent.');
      contactForm.reset();
    });
  }
});
