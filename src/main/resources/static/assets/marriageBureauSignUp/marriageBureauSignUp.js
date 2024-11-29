document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("input[type='submit']").addEventListener("click", function(event) {
		var isValid = true;

		// Reset error messages
		document.querySelectorAll(".error-message").forEach(function(element) {
			element.textContent = "";
		});

		// Validation for Owner name
		var ownerName = document.querySelector("input[placeholder='Owner name']").value.trim();
		if (ownerName === "") {
			document.getElementById("error-message-name").textContent = "Required owner name";
			isValid = false;
		}

		// Validation for Marriage bureau name
		var bureauName = document.querySelector("input[placeholder='Marraige bureau name']").value.trim();
		if (bureauName === "") {
			document.getElementById("error-message-marraigebureauName").textContent = "Required Marriage bureau name";
			isValid = false;
		}
		// Validation for Marriage bureau email
		var bureauEmail = document.querySelector("input[placeholder='Marriage bureau email']").value.trim();
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (bureauEmail === "") {
			document.getElementById("error-message-email").textContent = "Required marriage bureau email";
			isValid = false;
		} else if (!emailPattern.test(bureauEmail)) {
			document.getElementById("error-message-email").textContent = "Invalid email format";
			isValid = false;
		}

		// Validation for Contact number
		var contactNumber = document.getElementById("contactNumber").value.trim();
		var contactPattern = /^\d{10}$/;
		if (contactNumber === "") {
			document.getElementById("error-message-contactNumber").textContent = "Required contact number";
			isValid = false;
		} else if (!contactPattern.test(contactNumber)) {
			document.getElementById("error-message-contactNumber").textContent = "Contact number should be 10 digits";
			isValid = false;
		}

		// Validation for Country
		var country = document.getElementById("Country").value.trim();
		if (country === "") {
			document.getElementById("error-message-country").textContent = "Required country";
			isValid = false;
		}

		// Validation for State
		var state = document.getElementById("State").value.trim();
		if (state === "") {
			document.getElementById("error-message-state").textContent = "Required state";
			isValid = false;
		}

		// Validation for City
		var city = document.getElementById("city").value.trim();
		if (city === "") {
			document.getElementById("error-message-city").textContent = "Required city";
			isValid = false;
		}

		// Validation for Pincode
		var pincode = document.getElementById("Pincode").value.trim();
		if (pincode === "") {
			document.getElementById("error-message-Pincode").textContent = "Required pincode";
			isValid = false;
		} else if (!/^\d{6}$/.test(pincode)) { // Validates for 6-digit pincode
			document.getElementById("error-message-Pincode").textContent = "Pincode must be a 6-digit number";
			isValid = false;
		}

		// Validation for Terms and Conditions checkbox
		var termsAccepted = document.querySelector("input[type='checkbox']").checked;
		if (!termsAccepted) {
			document.getElementById("error-message-termCon").textContent = "Required terms and conditions.";
			isValid = false;
		}

		if (!isValid) {
			event.preventDefault(); // Prevent form submission if there are errors
		}
	});
});