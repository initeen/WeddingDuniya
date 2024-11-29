document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("input[type='submit']").addEventListener("click", function(event) {
		var isValid = true;

		// Reset error messages
		document.querySelectorAll(".error-message").forEach(function(element) {
			element.textContent = "";
		});

		// Validation for Name
		var name = document.querySelector("input[placeholder='Enter your name']").value.trim();
		if (name === "") {
			document.getElementById("error-message-name").textContent = "Required name";
			isValid = false;
		}

		// Validation for Email
		var email = document.querySelector("input[placeholder='Enter your email']").value.trim();
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email === "") {
			document.getElementById("error-message-email").textContent = "Required email";
			isValid = false;
		} else if (!emailPattern.test(email)) {
			document.getElementById("error-message-email").textContent = "Invalid email format";
			isValid = false;
		}

		// Validation for Location
		var location = document.querySelector("input[placeholder='Enter your loaction']").value.trim();
		if (location === "") {
			document.getElementById("error-message-location").textContent = "Required location";
			isValid = false;
		}

		// Validation for Contact Number
		var contactNumber = document.querySelector("input[placeholder='Enter contact number']").value.trim();
		if (contactNumber === "") {
			document.getElementById("error-message-contact-number").textContent = "Required contact number";
			isValid = false;
		} else if (!/^\d{10}$/.test(contactNumber)) {
			document.getElementById("error-message-contact-number").textContent = "Contact number must be a 10-digit number.";
			isValid = false;
		}


		// Validation for Gender
		var gender = document.getElementById("gender").value.trim();
		if (gender === "") {
			document.getElementById("error-message-gender").textContent = "Required gender";
			isValid = false;
		}

		// Validation for Terms and Conditions checkbox
		var termsAccepted = document.querySelector("input[type='checkbox']").checked;
		if (!termsAccepted) {
			document.getElementById("error-message-termCon").textContent = "Required terms and conditions";
			isValid = false;
		}

		if (!isValid) {
			event.preventDefault(); // Prevent form submission if there are errors
		}
	});
});
