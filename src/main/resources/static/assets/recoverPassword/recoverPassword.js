function handleLogin(email) {
	// Implement your login logic here
	// For example, you can send an AJAX request to a server-side endpoint for authentication
	console.log('Email:', email);
}

function validateForm() {
	const email = document.getElementById('email').value.trim();
	let isValid = true; // Flag to track validation status

	// Reset error messages
	document.getElementById('error-message-email').innerHTML = '';

	// Regular expression pattern for email validation
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Perform validation checks
	if (email === '') {
		document.getElementById('error-message-email').innerHTML = 'Required email';
		isValid = false; // Set flag to false due to failed validation
	} else if (!emailPattern.test(email)) {
		document.getElementById('error-message-email').innerHTML = 'Invalid email';
		isValid = false; // Set flag to false due to failed validation
	}

	// Show error message for email
	document.getElementById('error-message-email').style.display = email === '' || !emailPattern.test(email) ? 'block' : 'none';

	// If all validations pass, you can proceed with login
	if (isValid) {
		handleLogin(email);
	}

	// Return flag value to control form submission
	return isValid;
}

document.getElementById('getpassword').addEventListener('click', function() {
	validateForm();
});


