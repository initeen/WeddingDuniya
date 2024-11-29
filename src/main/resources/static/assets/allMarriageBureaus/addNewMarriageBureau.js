let currentRowNumber = 1; // Initialize currentRowNumber to 1

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('userForm');
  const bureauNameInput = document.getElementById('beuroname');
  const ownerNameInput = document.getElementById('ownername');
  const contactNumberInput = document.getElementById('contactnumber');
  const emailInput = document.getElementById('email');
  const countryInput = document.getElementById('country');
  const stateInput = document.getElementById('state');
  const cityInput = document.getElementById('cityInput'); // Corrected ID
  const pincodeInput = document.getElementById('pincodeInput'); // Corrected ID

  const errorBureauName = document.getElementById('error-message-beuroname');
  const errorOwnerName = document.getElementById('error-message-ownername');
  const errorContactNumber = document.getElementById('error-message-contactnumber');
  const errorEmail = document.getElementById('error-message-email');
  const errorCountry = document.getElementById('error-message-country');
  const errorState = document.getElementById('error-message-state');
  const errorCity = document.getElementById('error-message-city');
  const errorPincode = document.getElementById('error-message-pincode');

  document.getElementById('addUserSubmit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    if (validateForm()) {
      addTableRow(); // Call addTableRow only if form validation passes
    }
  });

  function validateForm() {
    resetErrors();
    let isValid = true;

    if (bureauNameInput.value.trim() === '') {
      errorBureauName.textContent = 'Required MB Name';
      isValid = false;
    }
    if (ownerNameInput.value.trim() === '') {
      errorOwnerName.textContent = 'Required Owner Name';
      isValid = false;
    }
    if (contactNumberInput.value.trim() === '') {
      errorContactNumber.textContent = 'Required Contact Number';
      isValid = false;
    } else if (!/^\d{10}$/.test(contactNumberInput.value.trim())) {
      errorContactNumber.textContent = 'Required 10 digits';
      isValid = false;
    }
    if (emailInput.value.trim() === '') {
      errorEmail.textContent = 'Required Email';
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        errorEmail.textContent = 'Invalid email format';
        isValid = false;
      }
    }
    if (countryInput.value.trim() === '') {
      errorCountry.textContent = 'Required Country';
      isValid = false;
    }
    if (stateInput.value.trim() === '') {
      errorState.textContent = 'Required State';
      isValid = false;
    }
    if (cityInput.value.trim() === '') {
      errorCity.textContent = 'Required City';
      isValid = false;
    }
    if (pincodeInput.value.trim() === '') {
      errorPincode.textContent = 'Required Pincode';
      isValid = false;
    } else if (pincodeInput.value.trim().length !== 6 || isNaN(pincodeInput.value.trim())) {
      errorPincode.textContent = 'Pincode must be a 6-digit number';
      isValid = false;
    }


    return isValid; // Return the validity status
  }

  function resetErrors() {
    console.log("Resetting errors...");
    console.log("errorBureauName:", errorBureauName);
    console.log("errorOwnerName:", errorOwnerName);
    console.log("errorContactNumber:", errorContactNumber);
    console.log("errorEmail:", errorEmail);
    console.log("errorCountry:", errorCountry);
    console.log("errorState:", errorState);
    console.log("errorCity:", errorCity);
    console.log("errorPincode:", errorPincode);

    errorBureauName.textContent = '';
    errorOwnerName.textContent = '';
    errorContactNumber.textContent = '';
    errorEmail.textContent = '';
    errorCountry.textContent = '';
    errorState.textContent = '';
    errorCity.textContent = ''; // Resetting city error message
    errorPincode.textContent = ''; // Resetting pincode error message
  }

  function addTableRow() {
    const table = document.querySelector('.table-striped tbody');
    const newRow = document.createElement('tr');
    newRow.setAttribute('data-status', 'active'); // Set the data-status attribute

    // Get values from form inputs
    const bureauName = bureauNameInput.value.trim();
    const ownerName = ownerNameInput.value.trim();
    const contactNumber = contactNumberInput.value.trim();
    const email = emailInput.value.trim();
    const country = countryInput.value.trim();
    const state = stateInput.value.trim();
    const city = cityInput.value.trim();
    const pincode = pincodeInput.value.trim();

    // Increment row number
    const rowNumber = currentRowNumber++;

    // Create table cells and content based on form values
    const cellsData = [
      rowNumber,
      bureauName,
      '<span class="label label-success">Active</span>', // Assuming status is always active
      country, // Using country as location data
      contactNumber,
      email,
      '<a href="/pages/marriageBureaus/marriageBureauProfile/marriageBureauProfile.html" class="btn btn-sm manage" style="color: #007bff">Manage</a>'
    ];

    // Create cells and set content to cells
    cellsData.forEach(cellData => {
      const cell = document.createElement('td');
      cell.innerHTML = cellData; // Use innerHTML for HTML content
      newRow.appendChild(cell);
    });

    // Append the new row to the table
    table.appendChild(newRow);
    $('#addMarriageBeuroModal').modal('hide');

    // Reset the form after adding the row
    form.reset();
  }
});



// JavaScript to toggle password visibility
const passwordField = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeIcon.textContent = "visibility_off";
  } else {
    passwordField.type = "password";
    eyeIcon.textContent = "visibility";
  }
});

