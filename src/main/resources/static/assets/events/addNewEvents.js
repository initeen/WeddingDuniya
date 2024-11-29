
function validateForm() {
    let isValid = createEventButton();
    return isValid;
}

function createEventButton() {
    let isValid = true; // Set a flag to track overall validity


    // let eventCounter = 1; // Used to track the Sr. No.

    function resetFields() {
        document.getElementById('eventTitle').value = '';
        document.getElementById('eventDescription').value = '';
        document.getElementById('sentToUsers').checked = false;
        document.getElementById('sentToMarriageBureaus').checked = false;
        document.getElementById('eventAddress').value = '';
        document.getElementById('eventStartDate').value = '';
        document.getElementById('eventEndDate').value = '';
        document.getElementById('eventTitleError').textContent = '';
        document.getElementById('eventDescriptionError').textContent = '';
        document.getElementById('eventAddressError').textContent = '';
        document.getElementById('eventStartDateError').textContent = '';
        document.getElementById('eventEndDateError').textContent = '';
    }


    const eventTitle = document.getElementById('eventTitle').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const eventAddress = document.getElementById('eventAddress').value;
    const eventStartDate = document.getElementById('eventStartDate').value;
    const eventEndDate = document.getElementById('eventEndDate').value;

    if (validateForm(eventTitle, eventDescription, eventAddress, eventStartDate, eventEndDate)) {
        createEvent();
    }
}

function validateForm(eventTitle, eventDescription, eventAddress, eventStartDate, eventEndDate) {
    let isValid = true;

    if (eventTitle.trim() === '') {
        document.getElementById('eventTitleError').textContent = 'Required ';
        isValid = false;
    } else {
        document.getElementById('eventTitleError').textContent = '';
    }

    if (eventDescription.trim() === '') {
        document.getElementById('eventDescriptionError').textContent = 'Required';
        isValid = false;
    } else {
        document.getElementById('eventDescriptionError').textContent = '';
    }

    if (eventAddress.trim() === '') {
        document.getElementById('eventAddressError').textContent = ' Required';
        isValid = false;
    } else {
        document.getElementById('eventAddressError').textContent = '';
    }

  
 
// Rest of your code
//(validateForm, createEventButton, etc.)


    if (eventStartDate.trim() === '') {
        document.getElementById('eventStartDateError').textContent = ' Required';
        isValid = false;
    } else {
        document.getElementById('eventStartDateError').textContent = '';
        const currentDate = new Date().toISOString().split('T')[0];
        if (eventStartDate < currentDate) {
            document.getElementById('eventStartDateError').textContent = 'Start Date should be today or later';
            isValid = false;
        }
    }
    if (eventStartDate.trim() === '') {
        document.getElementById('eventEndDateError').textContent = ' Required';
        isValid = false;
    } else {
        document.getElementById('eventEndDateError').textContent = '';
        const currentDate = new Date().toISOString().split('T')[0];
        if (eventStartDate < currentDate) {
            document.getElementById('eventEndDateError').textContent = 'End Date should be after Start Date';
            isValid = false;
        }
    }
   

    return isValid;
}

// Existing functions for event handling (create, delete, edit, view)...

//Function to set today's date as the default start date and 20 days ahead as the end date
function setDefaultDates() {
    // Get the current date
    var today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    // Format the date as "dd-mm-yyyy" for setting the input's value
    const formattedDate = `${dd}-${mm}-${yyyy}`;

    // Set the default value of the input box
    document.getElementById('eventStartDate').value = formattedDate;

    const startDateInput = document.getElementById('eventStartDate');
    const endDateInput = document.getElementById('eventEndDate');

    const todayISOString = new Date().toISOString().split('T')[0];

    startDateInput.min = todayISOString;
    startDateInput.value = formattedDate; // Set formatted date here
    endDateInput.min = todayISOString;

    startDateInput.addEventListener('change', function () {
        endDateInput.min = this.value;
        if (new Date(endDateInput.value) < new Date(this.value)) {
            endDateInput.value = this.value;
        }


    });
}

window.onload = function () {
    setDefaultDates(); // Set default dates when the window loads

    // Assuming 'createEventButton' is connected to a button's click event for event creation
    document.getElementById("createEventButton").addEventListener("click", createEventButton);
};

// Function to reset the edit form fields and error messages
function resetEditForm() {
    document.getElementById('editEventTitle').value = '';
    document.getElementById('editEventAddress').value = '';
    document.getElementById('editEventStartDate').value = '';
    document.getElementById('editEventEndDate').value = '';

    // Clear any error messages
    document.getElementById('editEventTitleError').textContent = '';
    document.getElementById('editEventAddressError').textContent = '';
    document.getElementById('editEventStartDateError').textContent = '';
    document.getElementById('editEventEndDateError').textContent = '';
}
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("saveEditButton").addEventListener("click", function () {
var editEventTitle = document.getElementById("editEventTitle").value.trim();
var editEventAddress = document.getElementById("editEventAddress").value.trim();
var editEventStartDate = document.getElementById("editEventStartDate").value.trim();
var editEventEndDate = document.getElementById("editEventEndDate").value.trim();

var isValid = true;

const titleError = document.getElementById("editEventTitleError");
const addressError = document.getElementById("editEventAddressError");
const startDateError = document.getElementById("editEventStartDateError");
const endDateError = document.getElementById("editEventEndDateError");

if (editEventTitle === "") {
    titleError.innerText = "Please enter an Event Title.";
    isValid = false;
} else {
    titleError.innerText = "";
}

if (editEventAddress === "") {
    addressError.innerText = "Please enter an Event Address.";
    isValid = false;
} else {
    addressError.innerText = "";
}

if (editEventStartDate.trim() === "") {
    startDateError.textContent = "Start Date is required";
    isValid = false;
} else {
    startDateError.textContent = "";
    const currentDate = new Date().toISOString().split("T")[0];
    if (editEventStartDate < currentDate) {
        startDateError.textContent = "Start Date should be today or later";
        isValid = false;
    }
}

if (editEventEndDate.trim() === "") {
    endDateError.textContent = "End Date is required";
    isValid = false;
} else {
    endDateError.textContent = "";
    const currentDate = new Date().toISOString().split("T")[0];
    if (editEventStartDate > editEventEndDate) {
        endDateError.textContent = "End Date should be after Start Date";
        isValid = false;
    }
}

return isValid;
});

// Function to set today's date as the default start date and adjust the end date based on the start date
function setDefaultEditEventDates() {
var today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
const yyyy = today.getFullYear();

const formattedDate = `${yyyy}-${mm}-${dd}`;

document.getElementById("editEventStartDate").value = formattedDate;

const startDateInput = document.getElementById("editEventStartDate");
const endDateInput = document.getElementById("editEventEndDate");

const todayISOString = new Date().toISOString().split("T")[0];

startDateInput.min = todayISOString;
startDateInput.value = formattedDate;
endDateInput.min = todayISOString;

startDateInput.addEventListener("change", function () {
    endDateInput.min = this.value;
    if (endDateInput.value < this.value) {
        endDateInput.value = this.value;
    }
});
}

window.onload = setDefaultEditEventDates;
});






let eventCounter = 1; // Used to track the Sr. No.

// JavaScript function to reset input fields
function resetFields() {
    document.getElementById('eventTitle').value = '';
    document.getElementById('eventDescription').value = '';
    document.getElementById('sentToUsers').checked = false;
    document.getElementById('sentToMarriageBureaus').checked = false;
    document.getElementById('eventAddress').value = '';
    document.getElementById('eventStartDate').value = '';
    document.getElementById('eventEndDate').value = '';
}

// Function to create and display a new event
function createEvent() {
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const sentToUsers = document.getElementById('sentToUsers').checked ? 'Yes' : 'No';
    const sentToMarriageBureaus = document.getElementById('sentToMarriageBureaus').checked ? 'Yes' : 'No';
    const eventAddress = document.getElementById('eventAddress').value;
    const eventStartDate = document.getElementById('eventStartDate').value;
    const eventEndDate = document.getElementById('eventEndDate').value;

    // Create a new table row and add event data
    const tableBody = document.getElementById('eventTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${eventCounter}</td>
        <td>${eventTitle}</td>
        <td>${eventAddress}</td>
        <td>${eventStartDate}</td>
        <td>${eventEndDate}</td>
        <td>
            <button class="action-button view-button" onclick="viewEvent(this)">
                <i class="fas fa-eye text-info mr-2"></i>
            </button>
            <button class="action-button edit-button" onclick="editEvent(this)">
                <i class="fas fa-edit text-warning mr-2"></i>
            </button>
            <button class="action-button delete-button" onclick="deleteEvent(this)">
                <i class="fas fa-trash-alt text-danger"></i>
            </button>
        </td>
    `;

    eventCounter++; // Increment the Sr. No.
    resetFields(); // Clear the form fields
    $('#addEventModal').modal('hide'); // Close the modal
}

// Function to delete an event row
function deleteEvent(button) {
    const row = button.parentNode.parentNode; // Get the event's row

    // Show the delete confirmation modal
    $('#deleteConfirmationModal').modal('show');

    // Set up an event listener for the confirm delete button in the confirmation modal
    const confirmDeleteButton = document.getElementById('confirmDeleteButton');
    confirmDeleteButton.addEventListener('click', function () {
        // Delete the event row from the table
        row.remove();

        // Close the confirmation modal
        $('#deleteConfirmationModal').modal('hide');
    });
}


//function to view an event
function viewEvent(button) {
    const row = button.parentNode.parentNode; // Get the event's row
    const cells = row.getElementsByTagName('td'); // Get all <td> elements in the row

    // Extract event details from the row's cells
    const eventTitle = cells[1].textContent;
    const eventAddress = cells[2].textContent;
    const eventStartDate = cells[3].textContent;
    const eventEndDate = cells[4].textContent;

    // Update the modal form fields with the event details (read-only)
    document.getElementById('viewEventTitle').textContent = eventTitle;
    document.getElementById('viewEventAddress').textContent = eventAddress;
    document.getElementById('viewEventStartDate').textContent = eventStartDate;
    document.getElementById('viewEventEndDate').textContent = eventEndDate;

    // Show the modal
    $('#viewEventModal').modal('show');
}
// Function to edit an event
function editEvent(button) {
    const row = button.parentNode.parentNode; // Get the event's row
    const cells = row.getElementsByTagName('td'); // Get all <td> elements in the row

    // Extract event details from the row's cells
    const eventTitle = cells[1].textContent;
    const eventAddress = cells[2].textContent;
    const eventStartDate = cells[3].textContent;
    const eventEndDate = cells[4].textContent;

    // Update the modal form fields with the event details
    document.getElementById('editEventTitle').value = eventTitle;
    document.getElementById('editEventAddress').value = eventAddress;
    document.getElementById('editEventStartDate').value = eventStartDate;
    document.getElementById('editEventEndDate').value = eventEndDate;

    // Show the modal with the edit functionality
    $('#editEventModal').modal('show');
    // Logic to hide the modal after the update
    $('#saveEditButton').off('click').on('click', function () {
        // Your existing update logic here...

        // // Hide the modal after the update
        // $('#editEventModal').modal('hide');
    });
}



// Attach the resetFields and createEvent functions to the respective buttons
document.getElementById('resetButton').addEventListener('click', resetFields);
document.getElementById('createEventButton').addEventListener('click', createEvent);

