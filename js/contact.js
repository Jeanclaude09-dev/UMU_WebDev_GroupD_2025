// Contact Form Handling
// This file handles contact form submission and validation

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactFormSubmit);
  }
});

// Handle contact form submission
function handleContactFormSubmit(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate form
  if (!validateContactForm(name, email, subject, message)) {
    return;
  }

  // Show loading state
  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  // Simulate form submission (in a real app, this would send to a server)
  setTimeout(() => {
    // Show success message
    showFormMessage(
      "Thank you for your message! We'll get back to you soon.",
      "success"
    );

    // Reset form
    e.target.reset();

    // Reset button
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 1500);
}

// Validate contact form
function validateContactForm(name, email, subject, message) {
  // Name validation
  if (name.length < 2) {
    showFormMessage(
      "Please enter a valid name (at least 2 characters)",
      "error"
    );
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage("Please enter a valid email address", "error");
    return false;
  }

  // Subject validation
  if (subject.length < 3) {
    showFormMessage("Please enter a subject (at least 3 characters)", "error");
    return false;
  }

  // Message validation
  if (message.length < 10) {
    showFormMessage("Please enter a message (at least 10 characters)", "error");
    return false;
  }

  return true;
}

// Show form message
function showFormMessage(message, type) {
  const formMessage = document.getElementById("form-message");
  if (!formMessage) return;

  formMessage.textContent = message;
  formMessage.className = `mt-4 p-4 rounded-lg ${
    type === "success"
      ? "bg-secondary/20 text-secondary border border-secondary/30"
      : "bg-primary/20 text-primary border border-primary/30"
  }`;
  formMessage.classList.remove("hidden");

  // Auto-hide after 5 seconds
  setTimeout(() => {
    formMessage.classList.add("hidden");
  }, 5000);
}
