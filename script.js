// Select the form and status container
const contactForm = document.getElementById("contact-form");
const formStatus = document.createElement("p");
formStatus.id = "form-status";
formStatus.style.marginTop = "10px";
contactForm.appendChild(formStatus);

// Handle form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    formStatus.textContent = "✅ Message sent successfully!";
    formStatus.style.color = "green";

    // Clear the form
    contactForm.reset();
  } else {
    formStatus.textContent = "❌ Please fill in all fields.";
    formStatus.style.color = "red";
  }
});
