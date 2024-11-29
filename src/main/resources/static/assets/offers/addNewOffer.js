    
let offerCounter = 1; // Counter to keep track of the number of offers
const table = document.getElementById("offerTable");
const noOfferMessage = document.getElementById("noOfferMessage");

function resetForm() {
    document.getElementById("offerForm").reset();
}
function displayError(id, message) {
    const errorElement = document.getElementById(id + 'Error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(id) {
    const errorElement = document.getElementById(id + 'Error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function resetForm() {
    document.getElementById("offerForm").reset();
    hideError('offerTitle');
    hideError('offerDescription'); // Corrected ID for hiding offerDescription error
    hideError('creationDate');
    hideError('endDate');
}

function createOffer() {
     // Set the min attribute for the date fields to the current date
     const today = new Date().toISOString().split('T')[0];
     document.getElementById('creationDate').setAttribute('min', today);
     document.getElementById('endDate').setAttribute('min', today);
 
    // Retrieve form data
    const offerTitle = document.getElementById("offerTitle").value;
    const offerDescription = document.getElementById("offerDescription").value;
    const creationDate = document.getElementById("creationDate").value;
    const endDate = document.getElementById("endDate").value;

    // Validation for non-empty fields
    let isValid = true;

    if (offerTitle.trim() === '') {
        displayError('offerTitle', 'Offer Title required');
        isValid = false;
    } else {
        hideError('offerTitle');
    }

    if (offerDescription.trim() === '') {
        displayError('offerDescription', 'Offer Description required'); // Corrected ID for offerDescription
        isValid = false;
    } else {
        hideError('offerDescription');
    }

    if (creationDate.trim() === '') {
        displayError('creationDate', 'Start Date required');
        isValid = false;
    } else {
        hideError('creationDate');
    }

    if (endDate.trim() === '') {
        displayError('endDate', 'End Date required');
        isValid = false;
    } else {
        hideError('endDate');
    }
    // // Retrieve checkbox state
    // const sendToMarriageBureaus = document.getElementById("sendToMarriageBureaus").checked;

    // if (!sendToMarriageBureaus) {
    //     displayError('sendToMarriageBureaus', 'Please select at least one option');
    //     isValid = false;
    // } else {
    //     hideError('sendToMarriageBureaus');
    // }


    if (isValid) {
        // Add the offer to the table
        addOfferToTable(offerTitle, offerDescription, creationDate, endDate);
        resetForm();
        $('#addOfferModal').modal('hide');
    }
}

function addOfferToTable(offerTitle, offerDescription, creationDate, endDate) {
    // Create a new table row with offer details and action buttons
    const table = document.getElementById("offerTable");
    const newRow = table.insertRow(-1);
    
    // Create table cells for Sr.No., Offer Title, Creation Date, and Action
    const cellSrNo = newRow.insertCell(0);
    const cellTitle = newRow.insertCell(1);
    const cellCreationDate = newRow.insertCell(2);
    const cellEndDate = newRow.insertCell(3);
    const cellAction = newRow.insertCell(4);

    // Set the content for each cell
    cellSrNo.innerHTML = offerCounter;
    cellTitle.innerHTML = offerTitle;
    cellCreationDate.innerHTML = creationDate;
    cellEndDate.innerHTML = endDate;
   
   

    // Create action buttons for View, Edit, and Delete using FontAwesome icons
    const viewButton = document.createElement("button");
    viewButton.className = "btn btn-info btn-sm";
    viewButton.textContent = "View";
    viewButton.onclick = function () {
        // Populate the modal with offer data
        populateModal(offerTitle, offerDescription, creationDate, endDate);
    };


    function populateModal(title, description, creationDate, endDate) {
        // Set the values in the modal fields
        document.getElementById("viewTitle").textContent = title;
        document.getElementById("viewDescription").textContent = description;
        document.getElementById("viewCreationDate").textContent = creationDate;
        document.getElementById("viewEndDate").textContent = endDate;

        // Show the modal
        $('#viewOfferModal').modal('show');
    }



    const editButton = document.createElement("button");
    editButton.className = "btn btn-warning btn-sm";
    editButton.textContent = "Edit";
    editButton.onclick = function () {
        // Populate the modal form with existing offer data for editing
        populateEditModal(offerTitle, offerDescription, creationDate, endDate);
    };

    
    function populateEditModal(title, description, creationDate, endDate) {
        document.getElementById("editOfferTitle").value = title;
        document.getElementById("editOfferDescription").value = description;
        document.getElementById("editCreationDate").value =creationDate; // Check this part, creationDate should be a valid date format
        document.getElementById("editEndDate").value = endDate;
    
        // Show the edit modal
        $('#editOfferModal').modal('show');
    }
   
    

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        // Show a confirmation modal before deleting the offer
        showDeleteConfirmationModal(offerTitle);
    };

    function showDeleteConfirmationModal(offerTitle) {
        // Set the offer title in the confirmation modal
        document.getElementById("deleteOfferTitle").textContent = offerTitle;

        // Show the confirmation modal
        $('#deleteConfirmationModal').modal('show');
    }


    // Append action buttons to the Action cell
    cellAction.appendChild(viewButton);
    cellAction.appendChild(editButton);
    cellAction.appendChild(deleteButton);

    // Increment the offer counter and reset the form
    offerCounter++;

    // Clear the form inputs
    resetForm();
}
function updateOffer() {
    // Reset previous error messages
    resetErrorMessages();

    // Get form inputs
    var title = document.getElementById("editOfferTitle").value;
    var description = document.getElementById("editOfferDescription").value;
    var creationDate = document.getElementById("editCreationDate").value;
    var endDate = document.getElementById("editEndDate").value;

    // Convert string dates to Date objects for comparison
    var creationDateObj = new Date(creationDate);
    var endDateObj = new Date(endDate);

    // Validate offer title
    if (title.trim() === "") {
        displayErrorMessage("editOfferTitleError", "Offer title required");
        return false; // Return false to prevent form submission
    }

    // Validate offer description
    if (description.trim() === "") {
        displayErrorMessage("editOfferDescriptionError", "Offer description required");
        return false;
    }

    // Validate creation date
    if (!creationDate) {
        displayErrorMessage("editCreationDateError", "Please select Creation Date");
        return false;
    }

    // Validate end date
    if (!endDate) {
        displayErrorMessage("editEndDateError", "Please select End Date");
        return false;
    } else if (endDateObj < creationDateObj) {
        displayErrorMessage("editEndDateError", "End Date cannot be earlier than Creation Date");
        return false;
    }

    // If all fields are valid, proceed with creating the offer
    console.log("Offer updated successfully!");
    // Your update offer logic goes here

    // For testing purposes, alert a success message
    // alert("Offer updated successfully");

    // Hide the edit offer modal
    $('#editOfferModal').modal('hide');
}

// Set the min attribute for the date fields to the current date
var today = new Date().toISOString().split('T')[0];
document.getElementById("editCreationDate").setAttribute("min", today);
document.getElementById("editEndDate").setAttribute("min", today);

// Helper function to reset error messages
function resetErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
        element.innerHTML = "";
    });
}

// Helper function to display error messages
function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.innerHTML = message;
    }
}


function resetFormEditOffer() {
    // Reset the form by setting all input values to an empty string
    document.getElementById("editOfferForm").reset();

    // Clear any existing error messages
    document.getElementById("editOfferTitleError").innerHTML = "";
    document.getElementById("editOfferDescriptionError").innerHTML = "";
    document.getElementById("editCreationDateError").innerHTML = "";
    document.getElementById("editEndDateError").innerHTML = "";
    // Add more lines for other error messages if needed
}


        function deleteOffer(button) {
            const rowIndex = button.parentNode.parentNode.rowIndex; // Get the row index of the button's parent (the table row)
            const table = document.getElementById("offerTable");
        
            // Remove the row based on the rowIndex
            table.deleteRow(rowIndex);
        
            // Decrease the offer counter or perform any necessary logic
            $('#deleteConfirmationModal').modal('hide');
        }