document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let localEmail = localStorage.getItem('Email');
    let localPassword = localStorage.getItem('Password');

    let userEmail = document.getElementById('userEmail');
    let userPassword = document.getElementById('userPassword');
    let userEmailValue = userEmail.value.trim();
    let userPasswordValue = userPassword.value.trim();

    clearValidation(userEmail);
    clearValidation(userPassword);

    let isValid = true;

    if (!userEmailValue) {
        setValidationError(userEmail, ".");
        isValid = false;
    }
    if (!userPasswordValue) {
        setValidationError(userPassword, ".");
        isValid = false;
    }

    if (isValid) {
        if (userEmailValue === localEmail && userPasswordValue === localPassword) {
            alert("Login successfully!");
            window.location.href = "./index.html";
        } else {
            setValidationError(userEmail, "Enter a valid email address!");
            setValidationError(userPassword, "Password is incorrect!");
        }
    }
});

function setValidationError(inputElement, message) {
    inputElement.classList.add('is-invalid');
    inputElement.nextElementSibling.textContent = message;
    inputElement.nextElementSibling.style.display = 'block';
}

function clearValidation(inputElement) {
    inputElement.classList.remove('is-invalid');
    inputElement.nextElementSibling.style.display = 'none';
}

function togglePassword() {
    const passwordField = document.getElementById('userPassword');
    const toggleIcon = document.getElementById('toggleIcon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.setAttribute('icon', 'mdi:eye-outline');
    } else {
        passwordField.type = 'password';
        toggleIcon.setAttribute('icon', 'mdi:eye-off-outline');
    }
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        clearValidation(input);
    });
});
