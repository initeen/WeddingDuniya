function validateEditProfileForm() {
  let isValid = true;

  const fullName = document.getElementById('editFullName').value;
  const contact = document.getElementById('editContact').value;
  const email = document.getElementById('editEmail').value;
  const address = document.getElementById('editAddress').value;
  const aadharNumber = document.getElementById('editAadharnumber').value;
  const panNumber = document.getElementById('editpannumber').value;
  const bankAccountNumber = document.getElementById('editbnkaccn').value;
  const ifscCode = document.getElementById('editifsc').value;
  const emergencyContactNumber = document.getElementById('editemcntnb').value;
  const gender = document.getElementById('editgender').value;

  const errorFullName = document.getElementById('errorFullName');
  const contactError = document.getElementById('editContactError');
  const emailError = document.getElementById('emailError');
  const addressError = document.getElementById('editaddressError');
  const aadharError = document.getElementById('editaadharError');
  const panError = document.getElementById('editpannumberError');
  const bankAccountError = document.getElementById('editbnkaccnError');
  const ifscError = document.getElementById('editifscError');
  const emergencyContactError = document.getElementById('editemcntnbError');
  const genderError = document.getElementById('editgenderError');

  // Validate Full Name
  if (fullName.trim() === '') {
    errorFullName.textContent = 'Full Name is required';
    isValid = false;
  } else {
    errorFullName.textContent = '';
  }

  // Validate Contact
  if (contact.trim() === '') {
    contactError.textContent = 'Contact is required';
    isValid = false;
  } else {
    contactError.textContent = '';
  }

  // Validate Email
  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else {
    let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format
    if (!emailFormat.test(email)) {
      emailError.textContent = 'Invalid email format';
      isValid = false;
    } else {
      emailError.textContent = ''; // Clear the error message if the email is in a valid format
    }
  }

  // Validate Address
  if (address.trim() === '') {
    addressError.textContent = 'Address is required';
    isValid = false;
  } else {
    addressError.textContent = '';
  }

  // Validate Aadhar Number
  if (aadharNumber.trim() === '') {
    aadharError.textContent = 'Aadhar Number is required';
    isValid = false;
  } else if (aadharNumber.trim().length !== 12) {
    aadharError.textContent = 'Aadhar Number must be 12 characters long';
    isValid = false;
  } else {
    aadharError.textContent = '';
  }


  // Validate PAN Number
  if (panNumber.trim() === '') {
    panError.textContent = 'PAN Number is required';
    isValid = false;
  } else {
    const panFormat = /^[A-Z]{5}[0-9]{4}[A-Z]$/; // Regular expression for PAN format
    if (!panFormat.test(panNumber.trim())) {
      panError.textContent = 'Invalid PAN Number format';
      isValid = false;
    } else {
      panError.textContent = '';
    }
  }

  // Validate Bank Account Number
  if (bankAccountNumber.trim() === '') {
    bankAccountError.textContent = 'Bank Account Number is required';
    isValid = false;
  } else if (bankAccountNumber.trim().length !== 12) {
    bankAccountError.textContent = 'Bank Account Number must be 12 characters long';
    isValid = false;
  } else {
    bankAccountError.textContent = '';
  }

  // Validate IFSC Code
  if (ifscCode.trim() === '') {
    ifscError.textContent = 'IFSC Code is required';
    isValid = false;
  } else {
    ifscError.textContent = '';
  }

  // Validate Emergency Contact Number
if (emergencyContactNumber.trim() === '') {
  emergencyContactError.textContent = 'Emergency Contact Number is required';
  isValid = false;
} else {
  const contactFormat = /^\d{10}$/; // Regular expression for 10-digit contact number format
  if (!contactFormat.test(emergencyContactNumber.trim())) {
      emergencyContactError.textContent = 'Invalid Emergency Contact Number format';
      isValid = false;
  } else {
      emergencyContactError.textContent = '';
  }
}

  // Validate Gender
  if (gender.trim() === '') {
    genderError.textContent = 'Gender is required';
    isValid = false;
  } else {
    genderError.textContent = '';
  }

  return isValid;
}



// Function to be called on Save Changes button click
function saveProfileChanges() {
  const isValid = validateEditProfileForm();
  if (isValid) {
    // Retrieve data from the edit form fields
    var fullName = document.getElementById('editFullName').value;
    var company = document.getElementById('editCompany').value;
    var designation = document.getElementById('editDesignation').value;
    var contact = document.getElementById('editContact').value;
    var email = document.getElementById('editEmail').value;
    var address = document.getElementById('editAddress').value;
    var aadharNumber = document.getElementById('editAadharnumber').value;
    var panNumber = document.getElementById('editpannumber').value;
    var bankAccountNumber = document.getElementById('editbnkaccn').value;
    var ifscCode = document.getElementById('editifsc').value;
    var emergencyContactNumber = document.getElementById('editemcntnb').value;
    var gender = document.getElementById('editgender').value;

    // Display the retrieved data in the overview section
    document.getElementById('fullName').innerText = fullName;
    document.getElementById('company').innerText = company;
    document.getElementById('designation').innerText = designation;
    document.getElementById('contact').innerText = contact;
    document.getElementById('email').innerText = email;
    document.getElementById('address').innerText = address;
    document.getElementById('aadharNumber').innerText = aadharNumber;
    document.getElementById('panNumber').innerText = panNumber;
    document.getElementById('bankAccountNumber').innerText = bankAccountNumber;
    document.getElementById('ifscCode').innerText = ifscCode;
    document.getElementById('emergencyContactNumber').innerText = emergencyContactNumber;
    document.getElementById('gender').innerText = gender;

    // Simulate a click on the Overview tab
    document.getElementById('overview-tab').click();

    // Show the Overview section
    document.getElementById('edit-profile').classList.remove('active');
    document.getElementById('change-password').classList.remove('active');
    document.getElementById('overview').classList.add('active');
  }
}

function changePassword() {
  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;

  const errorCurrentPassword = document.getElementById('errorCurrentPassword');
  const errorNewPassword = document.getElementById('errorNewPassword');
  const errorConfirmPassword = document.getElementById('errorConfirmPassword');

  let isValid = true;

  // Validate Current Password
  if (currentPassword.trim() === '') {
    errorCurrentPassword.textContent = 'Current password is required';
    errorCurrentPassword.style.display = 'block';
    isValid = false;
  } else {
    errorCurrentPassword.textContent = '';
    errorCurrentPassword.style.display = 'none';
  }

  // Validate New Password
  if (newPassword.trim() === '') {
    errorNewPassword.textContent = 'New password is required';
    errorNewPassword.style.display = 'block';
    isValid = false;
  } else {
    errorNewPassword.textContent = '';
    errorNewPassword.style.display = 'none';
  }

  // Validate Confirm New Password
  if (confirmNewPassword.trim() === '') {
    errorConfirmPassword.textContent = 'Please re-enter the new password';
    errorConfirmPassword.style.display = 'block';
    isValid = false;
  } else if (confirmNewPassword !== newPassword) {
    errorConfirmPassword.textContent = 'Passwords do not match';
    errorConfirmPassword.style.display = 'block';
    isValid = false;
  } else {
    errorConfirmPassword.textContent = '';
    errorConfirmPassword.style.display = 'none';
  }

  if (isValid) {
    // Proceed with password change logic here
    console.log('Password change is valid');
    // Uncomment the next line to submit the form
    // document.getElementById('changePasswordForm').submit();
  } else {
    // Prevent password change or show error messages
    console.log('Password change is invalid');
  }
}