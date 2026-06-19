// MOBILE MENU
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("nav-links");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
  });
}

// FORM VALIDATION
const form = document.getElementById("enquiryForm");
const outputMessage = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;

    if (name.length < 3) {
      outputMessage.textContent = "Name must be at least 3 characters long.";
      outputMessage.style.color = "red";
      return;
    }

    if (!emailPattern.test(email)) {
      outputMessage.textContent = "Please enter a valid email address.";
      outputMessage.style.color = "red";
      return;
    }

    if (service === "") {
      outputMessage.textContent = "Please select a service.";
      outputMessage.style.color = "red";
      return;
    }

    if (message.length < 10) {
      outputMessage.textContent = "Message must be at least 10 characters long.";
      outputMessage.style.color = "red";
      return;
    }

    outputMessage.textContent = "Enquiry submitted successfully.";
    outputMessage.style.color = "green";

    form.reset();
  });
}

// SERVICE CARD INTERACTION
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.backgroundColor = "#dff6ff";
  });
});