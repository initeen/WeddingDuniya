function addUser() {
    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var contactnumber = document.getElementById('contactnumber').value.trim();
    var password = document.getElementById('inputPassword4').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var location = document.getElementById('location').value.trim();

    var isValid = true;

    // Validation for Full Name
    if (fullName === "") {
        document.getElementById('error-message-fullName').innerText = "Required";
        isValid = false;
    } else {
        document.getElementById('error-message-fullName').innerText = "";
    }

    // Validation for Email
    if (email === "") {
        document.getElementById('error-message-email').innerText = "Required";
        isValid = false;
    } else if (!isValidEmailFormat(email)) {
        document.getElementById('error-message-email').innerText = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById('error-message-email').innerText = "";
    }

    function isValidEmailFormat(email) {
        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validation for Contact Number
    if (contactnumber === "") {
        document.getElementById('error-message-contactnumber').innerText = "Required";
        isValid = false;
    } else if (!isValidContactNumber(contactnumber)) {
        document.getElementById('error-message-contactnumber').innerText = "Contact number must be a 10-digit number.";
        isValid = false;
    } else {
        document.getElementById('error-message-contactnumber').innerText = "";
    }

    function isValidContactNumber(contactnumber) {
        // Regular expression for validating a 10-digit number
        var contactNumberRegex = /^\d{10}$/;
        return contactNumberRegex.test(contactnumber);
    }

    // Validation for Password
    if (password === "") {
        document.getElementById('error-message-password').innerText = "Required";
        isValid = false;
    } else if (!isValidPassword(password)) {
        document.getElementById('error-message-password').innerText = "Password must be at least 8 characters long and contain both symbols and numbers.";
        isValid = false;
    } else {
        document.getElementById('error-message-password').innerText = "";
    }

    function isValidPassword(password) {
        // Regular expression for validating password: at least 8 characters containing both symbols and numbers
        var passwordRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{8,}$/;
        return passwordRegex.test(password);
    }

    // Validation for Confirm Password
    if (confirmPassword === "") {
        document.getElementById('errorconfirmpassword').innerText = "Required";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('errorconfirmpassword').innerText = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById('errorconfirmpassword').innerText = "";
    }

    // Validation for Gender
    if (gender === "") {
        document.getElementById('error-message-gender').innerText = "Required";
        isValid = false;
    } else {
        document.getElementById('error-message-gender').innerText = "";
    }

    // Validation for Location
    if (location === "") {
        document.getElementById('error-message-lo').innerText = "Required";
        isValid = false;
    } else {
        document.getElementById('error-message-lo').innerText = "";
    }

    // If all fields are valid, add user to the table
    if (isValid) {
        addUserToTable(fullName, email, contactnumber, location);
        resetEditProfileForm();
    }
}

function addUserToTable(fullName, email, contactnumber, location) {
    // Get the table body where we will append the new user data
    var tableBody = document.getElementById('userTableBody');

    // Create a new table row
    var newRow = document.createElement('tr');

    // Populate the new table row with user data
    newRow.innerHTML = `
<td>${tableBody.children.length + 1}</td>
<td>${fullName}</td>
<td><span class="label label-success">Active</span></td>
<td>${location}</td>
<td><a href="/userProfile.html" class="btn btn-sm manage" style="color: #007bff;">Manage</a></td>
<td>${contactnumber}</td>
<td><a href="#" class="btn btn-sm manage">${email}</a></td>
`;

    // Append the new table row to the table body
    tableBody.appendChild(newRow);
    $('#addUserModal').modal('hide');
}

function resetEditProfileForm() {
    document.getElementById('addUserForm').reset();
    // Reset error messages
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.innerText = "";
    });
    // Hide the form

}