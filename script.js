// ===============================
// Part 1: Event Handling
// ===============================
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("clickMsg").textContent = "✅ Button clicked!";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// 1. Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter
let count = 0;
document.getElementById("increase").addEventListener("click", function () {
  count++;
  document.getElementById("counterValue").textContent = count;
});
document.getElementById("decrease").addEventListener("click", function () {
  count--;
  document.getElementById("counterValue").textContent = count;
});

// 3. Collapsible FAQ
document.getElementById("faqQuestion").addEventListener("click", function () {
  document.getElementById("faqAnswer").classList.toggle("hidden");
});

// ===============================
// Part 3: Form Validation
// ===============================
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from submitting

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMsg").textContent = "";

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let valid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation (regex for simple format)
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 characters)
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formMsg").textContent =
      "🎉 Form submitted successfully!";
    document.getElementById("formMsg").style.color = "green";
  } else {
    document.getElementById("formMsg").textContent =
      "⚠️ Please correct the errors above.";
    document.getElementById("formMsg").style.color = "red";
  }
});
