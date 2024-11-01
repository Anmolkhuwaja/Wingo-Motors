document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector("input[placeholder='First Name']");
    const lastName = document.querySelector("input[placeholder='Last Name']");
    const email = document.getElementById("userEmail");
    const phone = document.querySelector("input[placeholder='Phone']");
    const message = document.querySelector("textarea[placeholder='Write a message']");

    [firstName, lastName, email, phone, message].forEach(input => input.style.borderColor = "");

    let isValid = true;

    // Check if all fields are filled
    if (!firstName.value.trim()) {
      firstName.style.borderColor = "#FF8500";
      isValid = false;
    }
    if (!lastName.value.trim()) {
      lastName.style.borderColor = "#FF8500";
      isValid = false;
    }
    if (!email.value.trim()) {
      email.style.borderColor = "#FF8500";
      isValid = false;
    } else {
      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
      if (!emailPattern.test(email.value)) {
        email.style.borderColor = "#FF8500";
        isValid = false;
      }
    }
    if (!phone.value.trim()) {
      phone.style.borderColor = "#FF8500";
      isValid = false;
    }
    if (!message.value.trim()) {
      message.style.borderColor = "#FF8500";
      isValid = false;
    }

    // All fields are valid, save to localStorage and clear form
    if (isValid) {
      const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        message: message.value
      };

      localStorage.setItem("contactFormData", JSON.stringify(formData));

      // Clear the form fields
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";

      alert("Your message has been sent successfully!");
    } else {
      alert("Please fill out all fields correctly.");
    }
  });