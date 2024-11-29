function saveProfileChanges() {
    // Assuming you have a function to send the updated profile data to the server
    // For example, you might use AJAX to send a request to update the data

    // Placeholder function to simulate updating data on the server
    function updateServerData() {
        // Update data on the server (this is a placeholder)
        // You would typically send an AJAX request here
        // For simplicity, I'm just logging a message
        console.log("Updating data on the server...");
    }

    // Call the function to update data on the server
    updateServerData();

    // Redirect to the Overview tab
    document.getElementById("overview-tab").click(); // Simulate a click on the Overview tab

    // Update the displayed information on the Overview tab
    document.getElementById("fullName").innerText = document.getElementById("editFullName").value;
    document.getElementById("company").innerText = document.getElementById("editCompany").value;
    document.getElementById("designation").innerText = document.getElementById("editDesignation").value;
    document.getElementById("contact").innerText = document.getElementById("editContact").value;
    document.getElementById("email").innerText = document.getElementById("editEmail").value;
    document.getElementById("address").innerText = document.getElementById("editAddress").value;
}

function changePassword() {
    // Assuming you have a function to send the updated password to the server
    // For example, you might use AJAX to send a request to update the password

    // Placeholder function to simulate updating password on the server
    function updatePasswordOnServer() {
        // Update password on the server (this is a placeholder)
        // You would typically send an AJAX request here
        // For simplicity, I'm just logging a message
        console.log("Updating password on the server...");
    }

    // Call the function to update the password on the server
    updatePasswordOnServer();

    // Redirect to the Overview tab
    document.getElementById("overview-tab").click(); // Simulate a click on the Overview tab

    // Optionally, you can update the displayed information on the Overview tab
    // (e.g., show a message that the password was successfully changed)
}

// edit profile
function saveProfileChanges() {
    // Assuming you have a function to send the updated profile data to the server
    // For example, you might use AJAX to send a request to update the data

    // Placeholder function to simulate updating data on the server
    function updateProfileOnServer() {
        // Update data on the server (this is a placeholder)
        // You would typically send an AJAX request here
        // For simplicity, I'm just logging a message
        console.log("Updating profile data on the server...");
    }

    // Call the function to update data on the server
    updateProfileOnServer();

    // Update the profile image, full name, and designation in the card
    var newProfileImage = document.getElementById("editProfileImage").files[0];
    var newFullName = document.getElementById("editFullName").value;
    var newDesignation = document.getElementById("editDesignation").value;
    var newContact = document.getElementById("editContact").value;
    var newEmail = document.getElementById("editEmail").value;
    var newAddress = document.getElementById("editAddress").value;

 // Update the profile image
 if (newProfileImage) {
    var reader = new FileReader();
    reader.onload = function (e) {
        document.querySelector('.card-img-top').src = e.target.result;
    };
    reader.readAsDataURL(newProfileImage);
}

// Update the full name
document.querySelector('.card-title').innerText = newFullName;

// Update the designation
document.querySelector('.card-text').innerText = newDesignation;

// Reflect changes in the "Overview" tab
document.getElementById("fullName").innerText = newFullName;
document.getElementById("designation").innerText = newDesignation;
document.getElementById("contact").innerText = newContact;
document.getElementById("email").innerText = newEmail;
document.getElementById("address").innerText = newAddress;

// Redirect to the Overview tab
document.getElementById("overview-tab").click(); // Simulate a click on the Overview tab
}

// Trigger the modals when the respective links are clicked
document.querySelectorAll('.view, .upload, .delete').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetModal = this.getAttribute('href');
        const modal = document.querySelector(targetModal);
        if (modal) {
            $(modal).modal('show'); // Show the modal using Bootstrap modal function
        }
    });
});

document.getElementById("resetButton").addEventListener("click", function() {
    alert("Form has been Reset!");
    // You can add more functionality here, like resetting form fields
});


//file size functionnality
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var fileInput = document.getElementById('documentFile');
    var fileSize = fileInput.files[0].size; // Get the file size in bytes
    var maxSize = 10 * 1024 * 1024; // Set the maximum file size (10MB in this case)

    if (fileSize > maxSize) {
        alert('File size exceeds the limit of 10MB. Please choose a smaller file.');
        return;
    }

    // If the file size is within the limit, proceed with the upload process
    // Add your upload functionality here, such as AJAX requests, FormData submission, etc.
});