// Initialize EmailJS with your public key
emailjs.init("02MjMcoWi8E-aYm2e");

// Handle the contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_rj1ft7g", "template_k2x4fp1", this)
      .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again later.");
      });
  });
});
