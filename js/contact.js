document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");
  const sendButton = document.querySelector(".send-button");

  // 1. Basic Form Submission Handling (Prevent default and log)
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // **In a real application, you would add form validation here**
    // e.g., checking if all required fields are filled, email format is correct.

    // **Data collection (for demonstration)**
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Get selected services (checkboxes)
    data.services = [];
    form
      .querySelectorAll('input[name="service"]:checked')
      .forEach((checkbox) => {
        data.services.push(checkbox.value);
      });

    console.log("Form Data Submitted:", data);

    // **In a real application, you would send this data to a server**
    // Example:
    /*
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            alert('Message Sent Successfully!');
            form.reset();
        })
        .catch(error => {
            alert('An error occurred. Please try again.');
        });
        */

    // Simple visual feedback
    sendButton.textContent = "Sending...";
    setTimeout(() => {
      sendButton.textContent = "Message Sent!";
      sendButton.disabled = true;
    }, 1500);
  });
});
