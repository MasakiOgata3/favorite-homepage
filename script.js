// Smooth scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Character counter for textarea
const messageTextarea = document.getElementById('message');
const charCountSpan = document.getElementById('char-count');

if (messageTextarea && charCountSpan) {
  messageTextarea.addEventListener('input', function() {
    charCountSpan.textContent = this.value.length;
  });
}

// Form submission
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Get form data
    const formData = new FormData(contactForm);
    const formBody = new URLSearchParams();
    
    for (const [key, value] of formData.entries()) {
      formBody.append(key, value);
    }
    
    // Disable submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d4i1anmusuhg53kqajs0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });
      
      if (response.ok) {
        successMessage.style.display = 'flex';
        contactForm.reset();
        charCountSpan.textContent = '0';
      } else {
        errorMessage.style.display = 'flex';
      }
    } catch (error) {
      errorMessage.style.display = 'flex';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  });
}