function addEmployee() {
    // Get form values
    var fullName = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var contactNumber = document.getElementById("contactnumber").value.trim();
    var address = document.getElementById("address").value.trim();
    var password = document.getElementById("input").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var aadharNumber = document.getElementById("aadharnumber").value.trim();
    var panNumber = document.getElementById("pannumber").value.trim();
    var bankAccNumber = document.getElementById("bankaccnumber").value.trim();
    var ifscCode = document.getElementById("ifsccode").value.trim();
    var role = document.getElementById("role").value;
    var gender = document.getElementById("gender").value;
    var emergencyContactNumber = document.getElementById("emmcntnumber").value.trim();

    // Validation
    var isValid = true;
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(function (element) {
        element.innerText = '';
    });

    if (fullName === "") {
        document.getElementById("error-message-fullname").innerText = "Required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("error-message-email").innerText = "Required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("error-message-email").innerText = "Please enter a valid email address";
        isValid = false;
    }

    if (contactNumber === "") {
        document.getElementById("error-message-contactnumber").innerText = "Required";
        isValid = false;
    } else if (!isValidPhoneNumber(contactNumber)) {
        document.getElementById("error-message-contactnumber").innerText = "Please enter a valid contact number";
        isValid = false;
    }

    if (address === "") {
        document.getElementById("error-message-address").innerText = "Required";
        isValid = false;
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


    if (confirmPassword === "") {
        document.getElementById("error-message-confirmPassword").innerText = "Required";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("error-message-confirmPassword").innerText = "Passwords do not match";
        isValid = false;
    }

    if (aadharNumber === "") {
        document.getElementById("error-message-aadharnumber").innerText = "Required";
        isValid = false;
    } else if (!isValidAadharNumber(aadharNumber)) {
        document.getElementById("error-message-aadharnumber").innerText = "Please enter a valid Aadhar number";
        isValid = false;
    }

    if (panNumber === "") {
        document.getElementById("error-message-pannumber").innerText = "Required";
        isValid = false;
    } else if (!isValidPanNumber(panNumber)) {
        document.getElementById("error-message-pannumber").innerText = "Please enter a valid PAN number";
        isValid = false;
    }

    if (bankAccNumber === "") {
        document.getElementById("error-message-bankaccnumber").innerText = "Required";
        isValid = false;
    } else if (!isValidBankAccNumber(bankAccNumber)) {
        document.getElementById("error-message-bankaccnumber").innerText = "Please enter a valid bank account number";
        isValid = false;
    }
    // Validation for IFSC Code
    if (ifscCode === "") {
        document.getElementById("error-message-ifsccode").innerText = "Required";
        isValid = false;
    } else if (!isValidIFSCCode(ifscCode)) {
        document.getElementById("error-message-ifsccode").innerText = "Please enter a valid IFSC code";
        isValid = false;
    }


    if (role === "") {
        document.getElementById("error-message-role").innerText = "Required";
        isValid = false;
    }

    if (gender === "") {
        document.getElementById("error-message-gender").innerText = "Required";
        isValid = false;
    }

    if (emergencyContactNumber === "") {
        document.getElementById("error-message-emmcntnumber").innerText = "Required";
        isValid = false;
    } else if (!isValidPhoneNumber(emergencyContactNumber)) {
        document.getElementById("error-message-emmcntnumber").innerText = "Please enter a valid emergency contact number";
        isValid = false;
    }

    if (isValid) {
        // Define a variable to track the SL number
        var slNumber = 1;

        // Append the data to the table
        var table = document.getElementById("userTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        var cells = [
            newRow.insertCell(0),
            newRow.insertCell(1),
            newRow.insertCell(2),
            newRow.insertCell(3),
            newRow.insertCell(4),
            newRow.insertCell(5)
        ];

        // Add data to the cells
        cells[0].appendChild(document.createTextNode(slNumber)); // SL
        cells[1].appendChild(document.createTextNode(fullName)); // Name
        cells[2].appendChild(document.createTextNode(email)); // Email
        cells[3].appendChild(document.createTextNode(role)); // Designation
        cells[4].appendChild(document.createTextNode("Active")); // Status (assuming all added employees are active)
        cells[5].innerHTML = `
    <a href="#editEmployeeModal" class="edit" data-toggle="modal">
        <i class="material-icons" data-toggle="tooltip"  onclick="editEmployee(this)" title="Edit">&#xE254;</i>
    </a>
    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onclick="setDeleteRowIndex(table.rows.length)">
        <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
    </a>
`;

        // Increment the SL number for the next row
        slNumber++;

        // Reset the form after adding the employee
        resetForm();
        // Hide the modal
        $('#addEmployeeModal').modal('hide');
    }
}
function editEmployee(link) {
    // Assuming the structure of your table row
    var row = link.closest('tr');

    // Get data from the row cells
    var fullName = row.cells[1].innerText;
    var email = row.cells[2].innerText;
    var role = row.cells[3].innerText;
    var status = row.cells[4].innerText; // Assuming status is in the 5th cell

    // Populate the edit form with the data
    document.getElementById('editfullName').value = fullName;
    document.getElementById('editemail').value = email;

    // Assuming editrole and editstatus are dropdown/select elements
    // Set the selected option based on the retrieved values
    var roleDropdown = document.getElementById('editrole');
    var statusDropdown = document.getElementById('editstatus');

    // Find and select the option with the matching text
    console.log("roleDropdown", roleDropdown);
    console.log("statusDropdown", statusDropdown);
    document.getElementById('editrole').value = role;
    //     for (var i = 0; i < roleDropdown.options.length; i++) {
    //     if (roleDropdown.options[i].text.trim() === role.trim()) {
    //         roleDropdown.selectedIndex = i;
    //         break;
    //     }
    // }

    // Set selected index for status dropdown
    for (var j = 0; j < statusDropdown.options.length; j++) {
        if (statusDropdown.options[j].text.trim() === status.trim()) {
            statusDropdown.selectedIndex = j;
            break;
        }
    }

    // Show the edit modal
    $('#editEmployeeModal').modal('show');
}


// Function to reset the edit form
function editRestForm() {
    document.getElementById('editfullName').value = '';
    document.getElementById('editemail').value = '';
    document.getElementById('editrole').value = '';
    document.getElementById('editstatus').value = '';
}

// Function to update employee details
function updateEmployee() {
    // Add your update logic here
}



function resetForm() {
    document.getElementById("employeeForm").reset();
    // Clear error messages
    document.querySelectorAll('.error-message').forEach(function (element) {
        element.innerText = '';
    });
}

function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(number) {
    // Basic phone number validation regex
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
}

function isValidAadharNumber(aadharNumber) {
    // Basic Aadhar number validation regex
    var aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadharNumber);
}

function isValidPanNumber(panNumber) {
    // Basic PAN number validation regex
    var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(panNumber);
}
function isValidBankAccNumber(bankAccNumber) {
    // Basic bank account number validation regex
    var bankAccRegex = /^\d{12}$/;
    return bankAccRegex.test(bankAccNumber);
}

function isValidIFSCCode(ifscCode) {
    // Basic IFSC code validation regex (assuming basic structure)
    var ifscRegex = /^[A-Z]{4}\d{7}$/;
    return ifscRegex.test(ifscCode);
}

function validateForm() {
    var fullName = document.getElementById("editfullName").value;
    var email = document.getElementById("editemail").value;
    var role = document.getElementById("editrole").value;
    var status = document.getElementById("editstatus").value;

    var isValid = true;

    // Reset error messages
    document.getElementById("error-message-editfullname").innerText = "";
    document.getElementById("error-message-editemail").innerText = "";
    document.getElementById("error-message-editrole").innerText = "";
    document.getElementById("error-message-editstatus").innerText = "";

    if (fullName.trim() === "") {
        document.getElementById("error-message-editfullname").innerText = "Required.";
        isValid = false;
    }

    if (email.trim() === "") {
        document.getElementById("error-message-editemail").innerText = "Required.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("error-message-editemail").innerText = "Please enter a valid email address";
        isValid = false;
    }

    if (role.trim() === "") {
        document.getElementById("error-message-editrole").innerText = "Required";
        isValid = false;
    }

    if (status.trim() === "") {
        document.getElementById("error-message-editstatus").innerText = "Required";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function editRestForm() {
    // Reset form fields
    document.getElementById("editfullName").value = "";
    document.getElementById("editemail").value = "";
    document.getElementById("editrole").value = "";
    document.getElementById("editstatus").value = "";

    // Reset error messages
    document.getElementById("error-message-editfullname").innerText = "";
    document.getElementById("error-message-editemail").innerText = "";
    document.getElementById("error-message-editrole").innerText = "";
    document.getElementById("error-message-editstatus").innerText = "";
}

// Update function for the edit form
function updateEmployee() {
    if (validateForm()) {
        // Your logic to update the employee goes here
        // alert('Employee updated successfully!');
        // Close the modal if needed
        $('#editEmployeeModal').modal('hide');
    }
}
var deleteRowIndex; // Variable to store the index of the row to be deleted

// Function to set the deleteRowIndex when delete link is clicked
function setDeleteRowIndex(rowIndex) {
    deleteRowIndex = rowIndex;
}

// Function to delete the employee record
function confirmDelete() {
    // Your deletion logic here
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    table.deleteRow(deleteRowIndex - 1); // Adjusted by 1 because row indexing is zero-based
    console.log("Deleting employee at row: " + deleteRowIndex);


    $('#deleteEmployeeModal').modal('hide');
}

