document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to input fields
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let userEmail = document.getElementById('userEmail');
    let userPassword = document.getElementById('userPassword');

    // Clear previous invalid states
    firstName.classList.remove('is-invalid');
    lastName.classList.remove('is-invalid');
    userEmail.classList.remove('is-invalid');
    userPassword.classList.remove('is-invalid');

    // Initialize validity status
    let valid = true;

    // Validation for each field
    if (!firstName.value.trim()) {
        firstName.classList.add('is-invalid');
        valid = false;
    }
    if (!lastName.value.trim()) {
        lastName.classList.add('is-invalid');
        valid = false;
    }
    if (!userEmail.value.trim()) {
        userEmail.classList.add('is-invalid');
        valid = false;
    }
    if (!userPassword.value.trim()) {
        userPassword.classList.add('is-invalid');
        valid = false;
    }

    // If all fields are valid, save to localStorage
    if (valid) {
        localStorage.setItem('FirstName', firstName.value);
        localStorage.setItem('LastName', lastName.value);
        localStorage.setItem('Email', userEmail.value);
        localStorage.setItem('Password', userPassword.value);

        alert("Registration is completed!");
        window.location.href = "./login.html";
    }
});

// Remove the red border as the user types
document.querySelectorAll('#signupForm input').forEach(input => {
    input.addEventListener('input', function() {
        if (input.value.trim()) {
            input.classList.remove('is-invalid');
        }
    });
});
