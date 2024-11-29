document.querySelector('input[value="Login"]').addEventListener('click', function () {
    if (validateForm()) {
        // Proceed with form submission logic if validation passes
    }
});

function validateForm() {
    var email = document.querySelector('input[type="text"][placeholder="Enter your email"]');
    var password = document.querySelector('input[type="password"][placeholder="Enter your password"]');
    var selectDesignation = document.getElementById('selectdesignation');
    var errorMessageEmail = document.getElementById('error-message-email');
    var errorMessagePassword = document.getElementById('error-message-password');
    var errorMessageSelectDesignation = document.getElementById('error-message_selectdesignation');

    var isValid = true;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        errorMessageEmail.style.display = 'block';
        errorMessageEmail.innerText = 'Required Email';
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        errorMessageEmail.style.display = 'block';
        errorMessageEmail.innerText = 'Invalid Email format';
        isValid = false;
    } else {
        errorMessageEmail.style.display = 'none';
     errorMessageEmail.style.display = 'none';
    }

    // Validate password
    if (password.value.trim() === '') {
        errorMessagePassword.style.display = 'block';
        errorMessagePassword.innerText = 'Required Password';
        isValid = false;
    } else {
        errorMessagePassword.style.display = 'none';
    }

    // Validate select box
    if (selectDesignation.value === '') {
        errorMessageSelectDesignation.style.display = 'block';
        errorMessageSelectDesignation.innerText = 'Please select a designation';
        isValid = false;
    } else {
        errorMessageSelectDesignation.style.display = 'none';
    }

    return isValid;
}
const container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon =>{
eyeIcon.addEventListener("click", ()=>{
    pwFields.forEach(pwField =>{
        if(pwField.type ==="password"){
            pwField.type = "text";

            pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye-slash", "uil-eye");
            })
        }else{
            pwField.type = "password";

            pwShowHide.forEach(icon =>{
                icon.classList.replace("uil-eye", "uil-eye-slash");
            })
        }
    }) 
})
})

// js code to appear signup and login form
signUp.addEventListener("click", ( )=>{
container.classList.add("active");
});
login.addEventListener("click", ( )=>{
container.classList.remove("active");
});