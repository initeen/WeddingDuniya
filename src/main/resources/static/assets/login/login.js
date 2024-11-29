function handleLogin(email, password) {
   /* // Check if the entered email and password match the admin credentials
    if (email === 'admin@weddingduniya.com' && password === 'admin') {
        // Redirect to home.html for admin
        window.location.href = '/home.html';
    } else if (email === 'user@weddingduniya.com' && password === 'user') {
        // Redirect to user-home.html for user
        window.location.href = '/user-home.html';
    } else if (email === 'bureau@weddingduniya.com' && password === 'bureau') {
        // Redirect to user-home.html for user
        window.location.href = '/bureau-home.html';
    } else {
        // Handle incorrect credentials (you can show an error message or perform other actions)
        document.getElementById('error-message-email').innerHTML = 'Incorrect email or password';
        alert("invalid credentials")
    }*/
}

function validateLogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let isValid = true; // Flag to track validation status

    // Reset error messages
    document.getElementById('error-message-email').innerHTML = '';
    document.getElementById('error-message-password').innerHTML = '';

    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Perform validation checks
    if (email === '') {
        document.getElementById('error-message-email').innerHTML = 'Please enter your email';
        isValid = false; // Set flag to false due to failed validation
    } else if (!emailPattern.test(email)) {
        document.getElementById('error-message-email').innerHTML = 'Invalid email address';
        isValid = false; // Set flag to false due to failed validation
    }

    if (password === '') {
        document.getElementById('error-message-password').innerHTML = 'Please enter your password';
        isValid = false; // Set flag to false due to failed validation
    }

    // If all validations pass, you can proceed with login
    if (isValid) {
        handleLogin(email, password);
    }

    // Show error messages
    document.getElementById('error-message-email').style.display = email === '' || !emailPattern.test(email) ? 'block' : 'none';
    document.getElementById('error-message-password').style.display = password === '' ? 'block' : 'none';

    // Return flag value to control form submission
    return isValid;
}

document.getElementById('loginButton').addEventListener('click', function() {
    // Call the validateLogin function to check input validity
    validateLogin();
});

const pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");

// Password visibility toggle
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                });
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                });
            }
        });
    });
});

const signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      container = document.querySelector(".container");

// Form switching
signUp.addEventListener("click", () => {
    container.classList.add("active");
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});
